/**
 * 支払アクションファクトリー
 */

import * as GMO from '@motionpicture/gmo-service';

import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { IOrder, IPaymentMethod } from '../../order';
import PriceCurrency from '../../priceCurrency';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IPurpose = IOrder;

export interface IObject {
    /**
     * 決済方法
     */
    paymentMethod: IPaymentMethod;
    /**
     * 金額
     */
    price: number;
    /**
     * 通貨
     */
    priceCurrency: PriceCurrency;
}

export interface IResult {
    /**
     * クレジットカード売上結果
     */
    creditCardSales?: GMO.services.credit.IAlterTranResult;
}

export interface IAttributes extends ActionFactory.IAttributes<IObject, IResult> {
    purpose: IPurpose;
}

export type IAction = ActionFactory.IAction<IAttributes>;

export function createAttributes(params: {
    result?: IResult;
    object: IObject;
    agent: IAgent;
    purpose: IPurpose;
}): IAttributes {
    return {
        typeOf: ActionType.PayAction,
        result: params.result,
        object: params.object,
        agent: params.agent,
        purpose: params.purpose
    };
}

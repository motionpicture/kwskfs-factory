/**
 * 注文アクションファクトリー
 */

import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { IOrder } from '../../order';
import { IAttributes as IUseMvtkActionAttributes } from '../consume/use/mvtk';
import { IAttributes as IPayActionAttributes } from '../trade/pay';
import { IAttributes as ISendOrderActionAttributes } from '../transfer/send/order';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IObject = IOrder;

export type IResult = any;

export interface IPotentialActions {
    /**
     * 注文配送アクション
     */
    sendOrder: ISendOrderActionAttributes;
    /**
     * クレジットカード決済アクション
     */
    payCreditCard?: IPayActionAttributes;
    /**
     * クレジットカード決済アクション
     */
    payPecorino?: IPayActionAttributes;
    /**
     * ムビチケ使用アクション
     */
    useMvtk?: IUseMvtkActionAttributes;
}

export interface IAttributes extends ActionFactory.IAttributes<IObject, IResult> {
    potentialActions?: IPotentialActions;
}

export type IAction = ActionFactory.IAction<IAttributes>;

export function createAttributes(params: {
    result?: IResult;
    object: IObject;
    agent: IAgent;
    potentialActions?: IPotentialActions;
}): IAttributes {
    return {
        typeOf: ActionType.OrderAction,
        result: params.result,
        object: params.object,
        agent: params.agent,
        potentialActions: params.potentialActions
    };
}

/**
 * 注文返品アクションファクトリー
 */

import * as ActionFactory from '../../../action';
import { IOrder } from '../../../order';
import { IAttributes as IRefundActionAttributes } from '../../trade/refund';
import * as ReturnActionFactory from '../return';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

/**
 * 返却対象は注文
 */
export type IObject = IOrder;

export type IResult = any;

export interface IPotentialActions {
    /**
     * 返金アクション属性
     */
    refund: IRefundActionAttributes;
}

export interface IAttributes extends ReturnActionFactory.IAttributes<IObject, IResult> {
    recipient: IRecipient;
    potentialActions?: IPotentialActions;
}

export type IAction = ReturnActionFactory.IAction<IAttributes>;

export function createAttributes(params: {
    result?: IResult;
    object: IObject;
    agent: IAgent;
    recipient: IRecipient;
    potentialActions?: IPotentialActions;
}): IAttributes {
    return {
        ...ReturnActionFactory.createAttributes(params),
        potentialActions: params.potentialActions
    };
}

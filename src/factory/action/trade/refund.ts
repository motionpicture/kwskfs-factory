/**
 * 返金アクションファクトリー
 */

import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { IOrder } from '../../order';
import { IAttributes as ISendEmailMessageActionAttributes } from '../transfer/send/message/email';
import * as PayActionFactory from './pay';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

/**
 * 返却対象は支払アクション
 */
export type IObject = PayActionFactory.IAction;

export type IResult = any;

export interface IPotentialActions {
    /**
     * 返金処理完了を通知するEメール送信アクション
     */
    sendEmailMessage?: ISendEmailMessageActionAttributes;
}

export type IPurpose = IOrder;

export interface IAttributes extends ActionFactory.IAttributes<IObject, IResult> {
    recipient: IRecipient;
    purpose: IPurpose;
    potentialActions?: IPotentialActions;
}

export type IAction = ActionFactory.IAction<IAttributes>;

export function createAttributes(params: {
    result?: IResult;
    object: IObject;
    agent: IAgent;
    purpose: IPurpose;
    recipient: IRecipient;
    potentialActions?: IPotentialActions;
}): IAttributes {
    return {
        typeOf: ActionType.RefundAction,
        result: params.result,
        object: params.object,
        agent: params.agent,
        recipient: params.recipient,
        purpose: params.purpose,
        potentialActions: params.potentialActions
    };
}

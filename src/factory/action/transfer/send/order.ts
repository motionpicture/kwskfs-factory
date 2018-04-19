/**
 * 注文配送アクションファクトリー
 */

import * as ActionFactory from '../../../action';
import ActionStatusType from '../../../actionStatusType';
import { IOrder } from '../../../order';
import * as SendActionFactory from '../send';
import { IAttributes as ISendEmailMessageActionAttributes } from './message/email';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IObject = IOrder;

export type IResult = any;

export interface IPotentialActions {
    /**
     * 注文配送を通知するEメール送信アクション
     */
    sendEmailMessage?: ISendEmailMessageActionAttributes;
}

export interface IAttributes extends SendActionFactory.IAttributes<IObject, IResult> {
    recipient: IRecipient;
    potentialActions?: IPotentialActions;
}

export type IAction = SendActionFactory.IAction<IAttributes>;

export function createAttributes(params: {
    actionStatus: ActionStatusType;
    result?: IResult;
    object: IObject;
    agent: IAgent;
    recipient: IRecipient;
    potentialActions?: IPotentialActions;
}): IAttributes {
    return {
        ...SendActionFactory.createAttributes(params),
        potentialActions: params.potentialActions
    };
}

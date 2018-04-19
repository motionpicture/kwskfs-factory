/**
 * 使用アクションファクトリー
 */

import * as ActionFactory from '../../action';
import ActionType from '../../actionType';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IObject = any;
export type IResult = any;
export type IPurpose = any;

export interface IAttributes<TObject, TResult> extends ActionFactory.IAttributes<TObject, TResult> {
}

export type IAction<TAttributes extends IAttributes<IObject, IResult>> = ActionFactory.IAction<TAttributes>;

export function createAttributes(params: {
    result?: IResult;
    object: IObject;
    agent: IAgent;
    purpose?: IPurpose;
}): IAttributes<IObject, IResult> {
    return {
        typeOf: ActionType.UseAction,
        result: params.result,
        object: params.object,
        agent: params.agent,
        purpose: params.agent
    };
}

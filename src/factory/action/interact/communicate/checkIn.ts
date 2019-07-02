/**
 * チェックインアクションファクトリー
 */
import * as ActionFactory from '../../../action';
import ActionType from '../../../actionType';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export type IObject = any;
export type IResult = any;
export type IPotentialActions = any;

export interface IAttributes extends ActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.CheckInAction;
    potentialActions?: IPotentialActions;
}

export type IAction = ActionFactory.IAction<IAttributes>;

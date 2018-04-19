/**
 * 座席予約承認アクションファクトリー
 * @namespace action.authorize.seatReservation
 */

import * as COA from '@motionpicture/coa-service';

import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import * as IndividualScreeningEventFactory from '../../event/individualScreeningEvent';
import { IOfferWithDetails as ISeatReservationOffer } from '../../offer/seatReservation';
import { ITransaction } from '../../transaction/placeOrder';
import * as AuthorizeActionFactory from '../authorize';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export enum ObjectType {
    SeatReservation = 'SeatReservation'
}

/**
 * authorize action result interface
 * 認可アクション結果
 * @export
 */
export interface IResult {
    price: number;
    /**
     * COAの仮予約パラメーター
     */
    updTmpReserveSeatArgs: COA.services.reserve.IUpdTmpReserveSeatArgs;
    updTmpReserveSeatResult: COA.services.reserve.IUpdTmpReserveSeatResult;
}

/**
 * authorize action object
 * 認可アクション対象
 * @export
 */
export interface IObject {
    typeOf: ObjectType;
    individualScreeningEvent: IndividualScreeningEventFactory.IEvent;
    offers: ISeatReservationOffer[];
}

export type IPurpose = ITransaction;

/**
 * authorize action error interface
 * @export
 */
export type IError = any;

/**
 * seat reservation authorize action interface
 * 座席予約認可アクションインターフェース
 * @export
 */
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
}

export type IAction = ActionFactory.IAction<IAttributes>;

/**
 * create seatReservation authorize action object
 * @export
 */
export function createAttributes(params: {
    agent: IAgent;
    recipient: IRecipient;
    object: IObject;
    result?: IResult;
    error?: IError;
    purpose: IPurpose;
}): IAttributes {
    return {
        typeOf: ActionType.AuthorizeAction,
        object: params.object,
        result: params.result,
        error: params.error,
        agent: params.agent,
        recipient: params.recipient,
        purpose: params.purpose
    };
}

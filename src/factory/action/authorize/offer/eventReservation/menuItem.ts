/**
 * メニューアイテム予約オファーに対する承認アクション
 */

import * as ActionFactory from '../../../../action';
import ActionType from '../../../../actionType';
import { IOffer } from '../../../../offer/eventReservation/menuItem';
import PriceCurrency from '../../../../priceCurrency';
import { ITransaction } from '../../../../transaction/placeOrder';
import * as AuthorizeActionFactory from '../../../authorize';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export interface IResult {
    price: number;
    priceCurrency: PriceCurrency;
}

export type IObject = IOffer;

export type IPurpose = ITransaction;

/**
 * 承認アクション属性インターフェース
 */
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
    typeOf: ActionType.AuthorizeAction;
}

export type IAction = ActionFactory.IAction<IAttributes>;

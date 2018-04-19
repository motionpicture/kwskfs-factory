/**
 * Pecorino口座承認アクションファクトリー
 * @namespace action.authorize.pecorino
 */

import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { ITransaction } from '../../transaction/placeOrder';
import * as AuthorizeActionFactory from '../authorize';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export enum ObjectType {
    Pecorino = 'Pecorino'
}

/**
 * オーソリ対象インターフェース
 */
export interface IObject {
    typeOf: ObjectType;
    transactionId: string;
    price: number;
}

export interface IResult {
    price: number;
    // tslint:disable-next-line:no-suspicious-comment
    // TODO pecorino-factoryから型を引用
    pecorinoTransaction: any;
    pecorinoEndpoint: string;
}

export type IPurpose = ITransaction;

export type IError = any;

/**
 * Pecorino承認アクション属性インターフェース
 */
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
}

export type IAction = ActionFactory.IAction<IAttributes>;

export function createAttributes(params: {
    result?: IResult;
    object: IObject;
    agent: IAgent;
    recipient: IRecipient;
    error?: IError;
    purpose: IPurpose;
}): IAttributes {
    return {
        typeOf: ActionType.AuthorizeAction,
        result: params.result,
        error: params.error,
        object: params.object,
        agent: params.agent,
        recipient: params.recipient,
        purpose: params.purpose
    };
}

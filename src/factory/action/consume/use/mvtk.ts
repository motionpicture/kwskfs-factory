/**
 * ムビチケ使用アクションファクトリー
 */

import * as ActionFactory from '../../../action';
import ActionStatusType from '../../../actionStatusType';
import { IOrder } from '../../../order';
import { ISeatInfoSyncIn } from '../../authorize/mvtk';
import * as UseActionFactory from '../use';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export enum ObjectType {
    Mvtk = 'Mvtk'
}

export interface IObject {
    typeOf: ObjectType;
    seatInfoSyncIn: ISeatInfoSyncIn;
}

export type IResult = any;

export type IPurpose = IOrder;

export interface IAttributes extends UseActionFactory.IAttributes<IObject, IResult> {
    purpose: IPurpose;
}

export type IAction = UseActionFactory.IAction<IAttributes>;

export function createAttributes(params: {
    actionStatus: ActionStatusType;
    result?: IResult;
    object: IObject;
    agent: IAgent;
    purpose: IPurpose;
}): IAttributes {
    return {
        ...UseActionFactory.createAttributes(params),
        purpose: params.purpose
    };
}

/**
 * mvtk authorization factory
 * ムビチケ着券情報ファクトリー
 * @namespace action.authorize.mvtk
 */

import * as ActionFactory from '../../action';
import ActionType from '../../actionType';
import { ITransaction } from '../../transaction/placeOrder';
import * as AuthorizeActionFactory from '../authorize';

export type IAgent = ActionFactory.IParticipant;
export type IRecipient = ActionFactory.IParticipant;

export enum ObjectType {
    Mvtk = 'Mvtk'
}

// tslint:disable-next-line:no-suspicious-comment
// TODO ムビチケ着券OUTに変更
export interface IResult {
    price: number;
}

// tslint:disable-next-line:no-suspicious-comment
// TODO ムビチケ着券INに変更
export interface IObject {
    typeOf: ObjectType;
    price: number;
    seatInfoSyncIn: ISeatInfoSyncIn;
}

export interface ISeatInfoSyncIn {
    /**
     * 興行会社コード
     */
    kgygishCd: string;
    /**
     * 予約デバイス区分
     */
    yykDvcTyp: string;
    /**
     * 取消フラグ
     */
    trkshFlg: string;
    /**
     * 興行会社システム座席予約番号
     */
    kgygishSstmZskyykNo: string;
    /**
     * 興行会社ユーザー座席予約番号
     */
    kgygishUsrZskyykNo: string;
    /**
     * 上映日時
     */
    jeiDt: string;
    /**
     * 計上年月日
     */
    kijYmd: string;
    /**
     * サイトコード
     */
    stCd: string;
    /**
     * スクリーンコード
     */
    screnCd: string;
    /**
     * 購入管理番号情報
     */
    knyknrNoInfo: IKnyknrNoInfo[];
    /**
     * 座席情報（itemArray）
     */
    zskInfo: IZskInfo[];
    /**
     * 作品コード
     */
    skhnCd: string;
}

/**
 * 券種情報
 */
export interface IKnshInfo {
    knshTyp: string;
    miNum: number;
}

/**
 * 購入管理番号情報
 */
export interface IKnyknrNoInfo {
    knyknrNo: string;
    pinCd: string;
    knshInfo: IKnshInfo[];
}

/**
 * 座席情報
 */
export interface IZskInfo {
    zskCd: string;
}

export type IPurpose = ITransaction;

/**
 * ムビチケ着券情報
 */
export interface IAttributes extends AuthorizeActionFactory.IAttributes<IObject, IResult> {
}

export type IAction = ActionFactory.IAction<IAttributes>;

export function createAttributes(params: {
    result?: IResult;
    object: IObject;
    agent: IAgent;
    recipient: IRecipient;
    purpose: IPurpose;
}): IAttributes {
    return {
        typeOf: ActionType.AuthorizeAction,
        result: params.result,
        object: params.object,
        agent: params.agent,
        recipient: params.recipient,
        purpose: params.purpose
    };
}

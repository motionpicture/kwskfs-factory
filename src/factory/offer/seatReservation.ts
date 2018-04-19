/**
 * 座席予約供給情報ファクトリー
 * @namespace offer.seatReservation
 */

import * as COA from '@motionpicture/coa-service';

import * as OfferFactory from '../offer';

export interface ICOATicketInfo {
    /**
     * チケットコード
     */
    ticketCode: string;
    /**
     * ムビチケ計上単価
     * ムビチケの場合、計上単価（興収報告単価）をセット（ムビチケ以外は0をセット）
     */
    mvtkAppPrice: number;
    /**
     * 枚数
     */
    ticketCount: number;
    /**
     * メガネ単価
     * メガネ代が別途発生した場合は、メガネ代をセット。それ以外は０をセット（ムビチケの場合も同様）
     */
    addGlasses: number;
    /**
     * ムビチケ映写方式区分
     * ムビチケ連携情報より
     */
    kbnEisyahousiki: string;
    /**
     * ムビチケ購入管理番号
     * ムビチケ連携情報より（ムビチケ以外は""）
     */
    mvtkNum: string;
    /**
     * ムビチケ電子券区分
     * ムビチケ連携情報より（01：電子、02：紙 ※ムビチケ以外は"00"をセット）
     */
    mvtkKbnDenshiken: string;
    /**
     * ムビチケ前売券区分
     * ムビチケ連携情報より（01：全国券、02：劇場券 ※ムビチケ以外は"00"をセット）
     */
    mvtkKbnMaeuriken: string;
    /**
     * ムビチケ券種区分
     * ムビチケ連携情報より（01：一般2Ｄ、02：小人2Ｄ、03：一般3Ｄ、… ※ムビチケ以外は"00"をセット）
     */
    mvtkKbnKensyu: string;
    /**
     * ムビチケ販売単価
     * ムビチケ連携情報より（ムビチケ以外は0をセット）
     */
    mvtkSalesPrice: number;
}

/**
 * COA券種情報
 * @export
 */
export type ICOATicketInfoWithDetails = COA.services.reserve.IUpdReserveTicket & {
    /**
     * チケット名
     */
    ticketName: string;
    /**
     * チケット名（カナ）
     */
    ticketNameKana: string;
    /**
     * チケット名（英）
     */
    ticketNameEng: string;
};

/**
 * 座席予約供給情報インターフェース
 * @export
 */
export interface IOffer {
    /**
     * seat section
     */
    seatSection: string;
    /**
     * seat number
     */
    seatNumber: string;
    /**
     * ticket info
     */
    ticketInfo: ICOATicketInfo;
}

/**
 * 座席予約供給情報(詳細つき)インターフェース
 * @export
 */
export interface IOfferWithDetails extends OfferFactory.IOffer {
    /**
     * seat section
     */
    seatSection: string;
    /**
     * seat number
     */
    seatNumber: string;
    /**
     * ticket info
     */
    ticketInfo: ICOATicketInfoWithDetails;
}

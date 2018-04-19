/**
 * individual screening event factory
 * 個々の上映イベントファクトリー
 * @namespace event.individualScreeningEvent
 */

import * as COA from '@motionpicture/coa-service';
import * as _ from 'lodash';
import * as moment from 'moment';

import ArgumentError from '../error/argument';

import * as EventFactory from '../event';
import * as ScreeningEventFactory from '../event/screeningEvent';
import EventStatusType from '../eventStatusType';
import EventType from '../eventType';
import IMultilingualString from '../multilingualString';
import * as MovieTheaterPlaceFactory from '../place/movieTheater';
import PlaceType from '../placeType';

/**
 * search conditions interface
 * 個々の上映イベントの検索条件インターフェース
 * @export
 */
export interface ISearchConditions {
    /**
     * イベント名称
     */
    name?: string;
    /**
     * 開始日時(in ISO 8601 date format) from
     */
    startFrom?: Date;
    /**
     * 開始日時(in ISO 8601 date format) through
     */
    startThrough?: Date;
    /**
     * 終了日時(in ISO 8601 date format) from
     */
    endFrom?: Date;
    /**
     * 終了日時(in ISO 8601 date format) through
     */
    endThrough?: Date;
    /**
     * イベントステータス
     * イベントがキャンセル、あるいは、延期された場合に主に使用されます。
     */
    eventStatuses?: EventStatusType[];
    /**
     * 親イベント(劇場の上映イベント)が実施される場所の識別子リスト
     */
    superEventLocationIdentifiers?: string[];
    /**
     * イベントで上演される作品識別子リスト
     */
    workPerformedIdentifiers?: string[];
}

/**
 * item availability interface
 * 上映イベント空席状況表現インターフェース
 * 表現を変更する場合、このインターフェースを変更して対応する
 * @export
 */
export type IItemAvailability = number;

/**
 * 座席数から在庫状況表現を生成する
 * @export
 * @param numberOfAvailableSeats 空席数
 * @param numberOfAllSeats 全座席数
 */
export function createItemAvailability(numberOfAvailableSeats: number, numberOfAllSeats: number): IItemAvailability {
    if (!_.isInteger(numberOfAvailableSeats)) {
        throw new ArgumentError('numberOfAvailableSeats', 'numberOfAvailableSeats must be number.');
    }
    if (!_.isInteger(numberOfAllSeats)) {
        throw new ArgumentError('numberOfAllSeats', 'numberOfAllSeats must be number.');
    }

    if (numberOfAllSeats === 0) {
        return 0;
    }

    // 残席数より空席率を算出
    // tslint:disable-next-line:no-magic-numbers
    return Math.floor(numberOfAvailableSeats / numberOfAllSeats * 100);
}

/**
 * event offer interface
 * @export
 */
export interface IOffer {
    typeOf: string;
    availability: IItemAvailability | null;
    url: string;
}

/**
 * event with offer interface
 * @export
 */
export type IEventWithOffer = IEvent & {
    offer: IOffer;
};

/**
 * individual screening event interface
 * 個々の上映イベントインターフェース(COAのスケジュールに相当)
 * @export
 */
export interface IEvent extends EventFactory.IEvent {
    /**
     * 上映作品
     */
    workPerformed: ScreeningEventFactory.IWorkPerformed;
    /**
     * 上映場所
     */
    location: {
        /**
         * 場所タイプ
         */
        typeOf: PlaceType;
        /**
         * 場所枝番号
         * スクリーンコードに該当します。
         */
        branchCode: string;
        /**
         * 場所名称
         */
        name: IMultilingualString;
    };
    /**
     * イベント名称
     */
    name: IMultilingualString;
    /**
     * 開場日時(in ISO 8601 date format)
     */
    doorTime?: Date;
    /**
     * 終了日時(in ISO 8601 date format)
     */
    endDate: Date;
    /**
     * 開始日時(in ISO 8601 date format)
     */
    startDate: Date;
    /**
     * 親イベント
     * COAの劇場作品に相当します。
     */
    superEvent: ScreeningEventFactory.IEvent;
    /**
     * その他COA情報
     */
    coaInfo: {
        theaterCode: string;
        dateJouei: string;
        titleCode: string;
        titleBranchNum: string;
        timeBegin: string;
        screenCode: string;
        /**
         * トレーラー時間
         * トレーラー含む本編以外の時間（分）
         */
        trailerTime: number;
        /**
         * サービス区分
         * 「通常興行」「レイトショー」など
         */
        kbnService?: COA.services.master.IKubunNameResult;
        /**
         * 音響区分
         */
        kbnAcoustic?: COA.services.master.IKubunNameResult;
        /**
         * サービスデイ名称
         * 「映画の日」「レディースデイ」など ※割引区分、割引コード、特定日等の組み合わせで登録するため名称で連携の方が容易
         */
        nameServiceDay: string;
        /**
         * 購入可能枚数
         */
        availableNum: number;
        /**
         * 予約開始日
         * 予約可能になる日付(YYYYMMDD)
         */
        rsvStartDate: string;
        /**
         * 予約終了日
         * 予約終了になる日付(YYYYMMDD)
         */
        rsvEndDate: string;
        /**
         * 先行予約フラグ
         * 先行予約の場合は'1'、それ以外は'0'
         */
        flgEarlyBooking: string;
    };
}

/**
 * create individualScreeningEvent from COA performance
 * @export
 */
export function createFromCOA(params: {
    performanceFromCOA: COA.services.master.IScheduleResult;
    screenRoom: MovieTheaterPlaceFactory.IScreeningRoom;
    screeningEvent: ScreeningEventFactory.IEvent;
    serviceKubuns: COA.services.master.IKubunNameResult[];
    acousticKubuns: COA.services.master.IKubunNameResult[];
}): IEvent {
    const identifier = createIdentifierFromCOA({
        theaterCode: params.screeningEvent.location.branchCode,
        titleCode: params.screeningEvent.workPerformed.identifier,
        titleBranchNum: params.screeningEvent.coaInfo.titleBranchNum,
        dateJouei: params.performanceFromCOA.dateJouei,
        screenCode: params.performanceFromCOA.screenCode,
        timeBegin: params.performanceFromCOA.timeBegin
    });

    // COA情報を整形して開始日時と終了日時を作成
    // tslint:disable-next-line:max-line-length
    const endDate = moment(`${params.performanceFromCOA.dateJouei} ${params.performanceFromCOA.timeEnd} +09:00`, 'YYYYMMDD HHmm Z').toDate();
    // tslint:disable-next-line:max-line-length
    const startDate = moment(`${params.performanceFromCOA.dateJouei} ${params.performanceFromCOA.timeBegin} +09:00`, 'YYYYMMDD HHmm Z').toDate();

    return {
        ...EventFactory.create({
            eventStatus: EventStatusType.EventScheduled,
            typeOf: EventType.IndividualScreeningEvent,
            identifier: identifier,
            name: params.screeningEvent.name
        }),
        ...{
            workPerformed: params.screeningEvent.workPerformed,
            location: {
                typeOf: params.screenRoom.typeOf,
                branchCode: params.screenRoom.branchCode,
                name: params.screenRoom.name
            },
            endDate: endDate,
            startDate: startDate,
            superEvent: params.screeningEvent,
            coaInfo: {
                theaterCode: params.screeningEvent.location.branchCode,
                dateJouei: params.performanceFromCOA.dateJouei,
                titleCode: params.performanceFromCOA.titleCode,
                titleBranchNum: params.performanceFromCOA.titleBranchNum,
                timeBegin: params.performanceFromCOA.timeBegin,
                screenCode: params.performanceFromCOA.screenCode,
                trailerTime: params.performanceFromCOA.trailerTime,
                kbnService: params.serviceKubuns.filter((kubun) => kubun.kubunCode === params.performanceFromCOA.kbnService)[0],
                kbnAcoustic: params.acousticKubuns.filter((kubun) => kubun.kubunCode === params.performanceFromCOA.kbnAcoustic)[0],
                nameServiceDay: params.performanceFromCOA.nameServiceDay,
                availableNum: params.performanceFromCOA.availableNum,
                rsvStartDate: params.performanceFromCOA.rsvStartDate,
                rsvEndDate: params.performanceFromCOA.rsvEndDate,
                flgEarlyBooking: params.performanceFromCOA.flgEarlyBooking
            }
        }
    };
}

/**
 * COA情報から個々の上映イベント識別子を作成する
 * @export
 */
export function createIdentifierFromCOA(params: {
    theaterCode: string;
    titleCode: string;
    titleBranchNum: string;
    dateJouei: string;
    screenCode: string;
    timeBegin: string;
}): string {
    return [
        ScreeningEventFactory.createIdentifier(params),
        params.dateJouei,
        params.screenCode,
        params.timeBegin
    ].join('');
}

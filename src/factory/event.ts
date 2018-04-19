/**
 * イベントファクトリー
 *
 * @namespace event
 */

import * as CreativeWorkFactory from './creativeWork';
import EventStatusType from './eventStatusType';
import EventType from './eventType';
import IMultilingualString from './multilingualString';
// import * as OfferFactory from './offer';
import * as PlaceFactory from './place';

/**
 * イベントインターフェース
 */
export interface IEvent {
    /**
     * スキーマタイプ
     */
    typeOf: EventType;
    /**
     * イベント識別子
     */
    identifier: string;
    /**
     * イベント名称
     */
    name: IMultilingualString;
    /**
     * イベント説明
     */
    description?: IMultilingualString;
    /**
     * 開場日時(in ISO 8601 date format)
     */
    doorTime?: Date;
    /**
     * イベント上演時間 in ISO 8601 date format.
     */
    duration?: string;
    /**
     * 終了日時(in ISO 8601 date format)
     */
    endDate?: Date;
    /**
     * イベントステータス
     * イベントがキャンセル、あるいは、延期された場合に主に使用されます。
     */
    eventStatus: EventStatusType;
    /**
     * イベントが実行される場所
     */
    location?: PlaceFactory.IPlace;
    /**
     * 最大収容人数
     */
    maximumAttendeeCapacity?: number;
    /**
     * An offer to provide this item—for example, an offer to sell a product,
     * rent the DVD of a movie, perform a service, or give away tickets to an event.
     */
    // offers?: OfferFactory.IOffer[];
    /**
     * 残り収容人数
     */
    remainingAttendeeCapacity?: number;
    /**
     * 開始日時(in ISO 8601 date format)
     */
    startDate?: Date;
    /**
     * イベントで上演される作品
     */
    workPerformed?: CreativeWorkFactory.ICreativeWork;
}

export function create(params: {
    typeOf: EventType;
    identifier: string;
    name: IMultilingualString;
    description?: IMultilingualString;
    doorTime?: Date;
    duration?: string;
    endDate?: Date;
    eventStatus: EventStatusType;
    location?: PlaceFactory.IPlace;
    maximumAttendeeCapacity?: number;
    // offers?: OfferFactory.IOffer[];
    remainingAttendeeCapacity?: number;
    startDate?: Date;
    workPerformed?: CreativeWorkFactory.ICreativeWork;
}): IEvent {
    return {
        identifier: params.identifier,
        name: (params.name === undefined) ? { ja: '', en: '' } : params.name,
        description: params.description,
        doorTime: params.doorTime,
        duration: (params.duration === undefined) ? undefined : params.duration.toString(),
        endDate: params.endDate,
        eventStatus: params.eventStatus,
        location: params.location,
        startDate: params.startDate,
        workPerformed: params.workPerformed,
        maximumAttendeeCapacity: params.maximumAttendeeCapacity,
        // offers: params.offers,
        remainingAttendeeCapacity: params.remainingAttendeeCapacity,
        typeOf: params.typeOf
    };
}

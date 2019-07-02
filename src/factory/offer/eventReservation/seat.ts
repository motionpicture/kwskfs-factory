/**
 * イベントの座席予約オファーファクトリー
 */

import { IEvent } from '../../event';
import * as OfferFactory from '../../offer';
import { IEventReservation } from '../../reservation/event';

/**
 * イベントの座席予約オファーインターフェース
 */
export interface IOffer extends OfferFactory.IOffer {
    itemOffered: IEventReservation<IEvent>;
}

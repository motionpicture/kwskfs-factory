/**
 * メニューアイテム予約オファーファクトリー
 */

import { IEvent } from '../../event';
import * as OfferFactory from '../../offer';
import { IEventReservation } from '../../reservation/event';

/**
 * メニューアイテム予約オファーインターフェース
 */
export interface IOffer extends OfferFactory.IOffer {
    itemOffered: IEventReservation<IEvent>;
}

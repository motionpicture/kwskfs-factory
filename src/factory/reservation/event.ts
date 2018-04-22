/**
 * イベント予約ファクトリー
 */

import { IEvent } from '../event';
import { IReservation } from '../reservation';

export interface IEventReservation<T extends IEvent> extends IReservation {
    /**
     * The thing -- restaurant, movie, event, flight, etc. -- the reservation is for.
     */
    reservationFor: T;
}

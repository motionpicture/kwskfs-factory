/**
 * イベント予約ファクトリー
 * @namespace reservation.event
 */

import * as COA from '@motionpicture/coa-service';

import { IEvent } from '../event';
import { IReservation } from '../reservation';
import ReservationType from '../reservationType';

import ArgumentError from '../error/argument';

import * as IndividualScreeningEventFactory from '../event/individualScreeningEvent';
import { IOfferWithDetails as ISeatReservationOffer } from '../offer/seatReservation';
import PersonType from '../personType';
import PlaceType from '../placeType';
import ReservationStatusType from '../reservationStatusType';

export interface IEventReservation<T extends IEvent> extends IReservation {
    /**
     * The thing -- restaurant, movie, event, flight, etc. -- the reservation is for.
     */
    reservationFor: T;
}

/**
 * 座席仮予約からイベント予約データを作成する
 * @export
 */
export function createFromCOATmpReserve(params: {
    updTmpReserveSeatResult: COA.services.reserve.IUpdTmpReserveSeatResult;
    offers: ISeatReservationOffer[];
    individualScreeningEvent: IndividualScreeningEventFactory.IEvent;
}): IEventReservation<IndividualScreeningEventFactory.IEvent>[] {
    return params.updTmpReserveSeatResult.listTmpReserve.map((tmpReserve, index) => {
        const requestedOffer = params.offers.filter((offer) => {
            return (offer.seatNumber === tmpReserve.seatNum && offer.seatSection === tmpReserve.seatSection);
        })[0];
        if (requestedOffer === undefined) {
            throw new ArgumentError('offers', '要求された供給情報と仮予約結果が一致しません。');
        }

        // チケットトークン(QRコード文字列)を作成
        const ticketToken = [
            params.individualScreeningEvent.coaInfo.theaterCode,
            params.individualScreeningEvent.coaInfo.dateJouei,
            // tslint:disable-next-line:no-magic-numbers
            (`00000000${params.updTmpReserveSeatResult.tmpReserveNum}`).slice(-8),
            // tslint:disable-next-line:no-magic-numbers
            (`000${index + 1}`).slice(-3)
        ].join('');

        const now = new Date();

        return {
            typeOf: ReservationType.EventReservation,
            additionalTicketText: '',
            modifiedTime: now,
            numSeats: 1,
            price: requestedOffer.price,
            priceCurrency: requestedOffer.priceCurrency,
            reservationFor: params.individualScreeningEvent,
            reservationNumber: `${params.updTmpReserveSeatResult.tmpReserveNum}-${index.toString()}`,
            reservationStatus: ReservationStatusType.ReservationHold,
            reservedTicket: {
                typeOf: 'Ticket',
                coaTicketInfo: requestedOffer.ticketInfo,
                dateIssued: now,
                issuedBy: params.individualScreeningEvent.superEvent.organizer,
                totalPrice: requestedOffer.price,
                priceCurrency: requestedOffer.priceCurrency,
                ticketedSeat: {
                    typeOf: PlaceType.Seat,
                    seatingType: '',
                    seatNumber: tmpReserve.seatNum,
                    seatRow: '',
                    seatSection: tmpReserve.seatSection
                },
                ticketNumber: ticketToken,
                ticketToken: ticketToken,
                underName: {
                    typeOf: PersonType.Person,
                    name: {
                        ja: '',
                        en: ''
                    }
                }
            },
            underName: {
                typeOf: PersonType.Person,
                name: {
                    ja: '',
                    en: ''
                }
            }
        };
    });
}

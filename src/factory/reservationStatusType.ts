/**
 * Enumerated status values for Reservation.
 */
enum ReservationStatusType {
    /**
     * The status for a previously confirmed reservation that is now cancelled.
     */
    ReservationCancelled = 'ReservationCancelled',
    /**
     * The status of a confirmed reservation.
     */
    ReservationConfirmed = 'ReservationConfirmed',
    /**
     * The status of a reservation on hold pending an update like credit card number or flight changes.
     */
    ReservationHold = 'ReservationHold',
    /**
     * The status of a reservation when a request has been sent, but not confirmed.
     */
    ReservationPending = 'ReservationPending'
}

export default ReservationStatusType;

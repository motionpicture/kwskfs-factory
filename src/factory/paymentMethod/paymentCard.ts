/**
 * payment card factory
 * @namespace paymentMethod.paymentCard
 */

import { IPaymentMethod } from '../paymentMethod';

/**
 * payment card interface
 */
export interface IPaymentCard extends IPaymentMethod {
    /**
     * A cardholder benefit that pays the cardholder a small percentage of their net expenditures.
     */
    cashBack?: number;
}

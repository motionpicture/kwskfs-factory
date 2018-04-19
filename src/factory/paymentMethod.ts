/**
 * paymentMethod factory
 * @namespace paymentMethod
 */

import PaymentMethodType from './paymentMethodType';

/**
 * payment method interface
 */
export interface IPaymentMethod {
    typeOf: PaymentMethodType;
    identifier: string;
}

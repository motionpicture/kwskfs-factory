/**
 * order factory
 * An order is a confirmation of a transaction (a receipt),
 * which can contain multiple line items, each represented by an Offer that has been accepted by the customer.
 * 注文ファクトリー
 * 注文は、確定した注文取引の領収証に値するものです。
 */

import { IEvent } from './event';
import OrderStatus from './orderStatus';
import OrganizationType from './organizationType';
import PaymentMethodType from './paymentMethodType';
import { IContact, IPerson } from './person';
import PersonType from './personType';
import PriceCurrency from './priceCurrency';
import * as EventReservationFactory from './reservation/event';

/**
 * payment method interface
 * 決済方法イーターフェース
 */
export interface IPaymentMethod {
    name: string;
    /**
     * The name of the credit card or other method of payment for the order.
     */
    paymentMethod: PaymentMethodType;
    /**
     * An identifier for the method of payment used (e.g.the last 4 digits of the credit card).
     */
    paymentMethodId: string;
}

/**
 * discount interface
 * 割引インターフェース
 */
export interface IDiscount {
    name: string;
    /**
     * Any discount applied.
     */
    discount: number;
    /**
     * Code used to redeem a discount.
     */
    discountCode: string;
    /**
     * The currency (in 3 - letter ISO 4217 format) of the discount.
     */
    discountCurrency: string;
}

/**
 * 供給アイテムインターフェース
 */
export type IItemOffered = EventReservationFactory.IEventReservation<IEvent>;

/**
 * 注文照会キーインターフェース
 */
export interface IOrderInquiryKey {
    confirmationNumber: string;
    telephone: string;
}

/**
 * オファーインターフェース
 */
export interface IOffer {
    /**
     * 受け入れられた予約情報
     */
    itemOffered: IItemOffered;
    /**
     * 金額
     */
    price: number;
    /**
     * 通貨
     */
    priceCurrency: PriceCurrency;
    /**
     * 販売者
     */
    seller: {
        typeOf: OrganizationType | PersonType;
        name: string;
    };
}

/**
 * seller interface
 * 販売者インターフェース
 */
export interface ISeller {
    typeOf: OrganizationType | PersonType;
    /**
     * 販売者ID
     */
    id: string;
    /**
     * Name of the Organization.
     */
    name: string;
    /**
     * The Freebase URL for the merchant.
     */
    url: string;
}

/**
 * customer interface
 * 購入者インターフェース
 */
export type ICustomer = IPerson & IContact & {
    name: string;
};

/**
 * order interface
 * 注文インターフェース
 */
export interface IOrder {
    /**
     * object type
     */
    typeOf: string;
    /**
     * Organization or Person
     * The party taking the order (e.g. Amazon.com is a merchant for many sellers). Also accepts a string (e.g. "Amazon.com").
     */
    seller: ISeller;
    /**
     * Person or Organization
     * Party placing the order.
     */
    customer: ICustomer;
    /**
     * A number that confirms the given order or payment has been received.
     */
    confirmationNumber: string;
    /**
     * The merchant- specific identifier for the transaction.
     */
    orderNumber: string;
    /**
     * The total price of the entire transaction.
     */
    price: number;
    /**
     * The currency (in 3 - letter ISO 4217 format) of the order price.
     */
    priceCurrency: PriceCurrency;
    /**
     * Offer
     * The offers included in the order.Also accepts an array of objects.
     */
    acceptedOffers: IOffer[];
    /**
     * payment methods
     */
    paymentMethods: IPaymentMethod[];
    /**
     * discount infos
     */
    discounts: IDiscount[];
    /**
     * URL	(recommended for confirmation cards/ Search Answers)
     * URL of the Order, typically a link to the merchant's website where the user can retrieve further details about an order.
     */
    url: string;
    /**
     * OrderStatus	(recommended for confirmation cards/ Search Answers)
     * The current status of the order.
     */
    orderStatus: OrderStatus;
    /**
     * Date order was placed.
     */
    orderDate: Date;
    /**
     * Was the offer accepted as a gift for someone other than the buyer.
     */
    isGift: boolean;
    /**
     * key for inquiry (required)
     */
    orderInquiryKey: IOrderInquiryKey;
}

/**
 * 注文検索条件インターフェース
 */
export interface ISearchConditions {
    /**
     * 販売者ID
     */
    sellerId?: string;
    /**
     * 購入者ID
     */
    customerId?: string;
    /**
     * 注文番号
     */
    orderNumber?: string;
    /**
     * 注文ステータス
     */
    orderStatus?: OrderStatus;
    /**
     * 注文日時(から)
     */
    orderDateFrom: Date;
    /**
     * 注文日時(まで)
     */
    orderDateThrough: Date;
}

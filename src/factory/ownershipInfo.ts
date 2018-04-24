/**
 * 所有権ファクトリー
 */

import OrganizationType from './organizationType';
import PersonType from './personType';
import { IReservation } from './reservation';

/**
 * 所有対象インタエーフェース (Product or Service)
 */
export type IGood = IReservation;

/**
 * 所有者インターフェース
 */
export interface IOwner {
    typeOf: OrganizationType | PersonType;
    id: string;
    name: string;
}

/**
 * 所有権インターフェース
 */
export interface IOwnershipInfo<T extends IGood> {
    /**
     * object type
     */
    typeOf: 'OwnershipInfo';
    /**
     * identifier
     */
    identifier: string;
    /**
     * owned by whom
     */
    ownedBy: IOwner;
    /**
     * The organization or person from which the product was acquired.
     */
    acquiredFrom: IOwner;
    /**
     * The date and time of obtaining the product.
     */
    ownedFrom: Date;
    /**
     * The date and time of giving up ownership on the product.
     */
    ownedThrough?: Date;
    /**
     * The product that this structured value is referring to.
     */
    typeOfGood: T;
}

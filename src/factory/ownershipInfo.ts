/**
 * 所有権ファクトリー
 * @namespace ownershipInfo
 */

import OrganizationType from './organizationType';
import PersonType from './personType';
import { IReservation } from './reservation';

/**
 * good interface (Product or Service)
 */
export type IGood = IReservation;

/**
 * owner interface
 */
export interface IOwner {
    typeOf: OrganizationType | PersonType;
    id: string;
    name: string;
}

/**
 * ownershipInfo interface
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
    ownedThrough: Date;
    /**
     * The product that this structured value is referring to.
     */
    typeOfGood: T;
}

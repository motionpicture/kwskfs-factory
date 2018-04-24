/**
 * レストランファクトリー
 */
import IMultilingualString from '../multilingualString';
import * as OrganizationFactory from '../organization';
import OrganizationType from '../organizationType';
import PriceCurrency from '../priceCurrency';

/**
 * メニューインターフェース
 */
export interface IMenu {
    typeOf: 'Menu';
    hasMenuSection: IMenuSection[];
}

/**
 * メニューセクションインターフェース
 */
export interface IMenuSection {
    typeOf: 'MenuSection';
    name: string;
    description: string;
    image: string[];
    hasMenuItem: IMenuItem[];
}

/**
 * メニューアイテムインターフェース
 */
export interface IMenuItem {
    identifier: string;
    typeOf: 'MenuItem';
    name: string;
    description: string;
    offers?: IMenuItemOffer[];
}

/**
 * メニューアイテムに対するオファーインターフェース
 */
export interface IMenuItemOffer {
    identifier: string;
    typeOf: 'Offer';
    price: number;
    priceCurrency: PriceCurrency;
    offeredBy?: {
        typeOf: OrganizationType.Restaurant;
        identifier: string;
        name: IMultilingualString;
        telephone?: string;
        url?: string;
        image?: string;
    };
}

/**
 * レストランインターフェース
 */
export interface IOrganization extends OrganizationFactory.IOrganization {
    typeOf: OrganizationType.Restaurant;
    openingHours?: any[];
    telephone: string;
    url: string;
    hasMenu: IMenu[];
}

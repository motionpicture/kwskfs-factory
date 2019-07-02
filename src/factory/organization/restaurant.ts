/**
 * レストランファクトリー
 */
import ItemAvailability from '../itemAvailability';
import IMultilingualString from '../multilingualString';
import * as OrganizationFactory from '../organization';
import OrganizationType from '../organizationType';
import PriceCurrency from '../priceCurrency';

/**
 * メニューインターフェース
 */
export interface IMenu {
    typeOf: 'Menu';
    /**
     * メニューセクションリスト
     */
    hasMenuSection: IMenuSection[];
}

/**
 * メニューセクションインターフェース
 */
export interface IMenuSection {
    typeOf: 'MenuSection';
    /**
     * セクション名
     */
    name: string;
    /**
     * セクション説明
     */
    description: string;
    /**
     * セクションイメージ
     */
    image: string[];
    /**
     * メニューアイテムリスト
     */
    hasMenuItem: IMenuItem[];
}

/**
 * メニューアイテムインターフェース
 */
export interface IMenuItem {
    typeOf: 'MenuItem';
    /**
     * メニューアイテム識別子
     */
    identifier: string;
    /**
     * メニューアイテム名
     */
    name: string;
    /**
     * メニューアイテム説明
     */
    description: string;
    /**
     * メニューアイテムに対するオファーリスト
     */
    offers?: IMenuItemOffer[];
}

/**
 * メニューアイテムに対するオファーインターフェース
 */
export interface IMenuItemOffer {
    typeOf: 'Offer';
    /**
     * オファー識別子
     */
    identifier: string;
    /**
     * 価格
     */
    price: number;
    /**
     * 通貨単位
     */
    priceCurrency: PriceCurrency;
    /**
     * オファー提供者
     */
    offeredBy?: {
        typeOf: OrganizationType.Restaurant;
        identifier: string;
        name: IMultilingualString;
        telephone?: string;
        url?: string;
        image?: string;
    };
    /**
     * オファーの在庫状況
     */
    availability?: ItemAvailability;
}

/**
 * レストランインターフェース
 */
export interface IOrganization extends OrganizationFactory.IOrganization {
    typeOf: OrganizationType.Restaurant;
    /**
     * 開店時間情報
     */
    openingHours?: any[];
    telephone: string;
    url: string;
    /**
     * メニューリスト
     */
    hasMenu: IMenu[];
}

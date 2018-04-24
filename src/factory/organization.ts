/**
 * 組織ファクトリー
 * @namespace organization
 */

import IMultilingualString from './multilingualString';
import OrganizationType from './organizationType';
import * as URLFactory from './url';

/**
 * GMOショップ情報インターフェース
 */
export interface IGMOInfo {
    /**
     * サイトID
     */
    siteId: string;
    /**
     * ショップID
     */
    shopId: string;
    /**
     * ショップパス
     */
    shopPass: string;
}

/**
 * 組織インターフェース
 */
export interface IOrganization {
    id: string;
    identifier: string;
    name: IMultilingualString;
    legalName: IMultilingualString;
    typeOf: OrganizationType;
    location?: any;
    telephone?: string;
    url?: URLFactory.IURL;
    /**
     * GMO情報
     */
    gmoInfo?: IGMOInfo;
    image?: string;
}

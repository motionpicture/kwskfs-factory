/**
 * スポーツチームファクトリー
 */

import * as OrganizationFactory from '../organization';
import OrganizationType from '../organizationType';

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
 * スポーツチームインターフェース
 */
export interface IOrganization extends OrganizationFactory.IOrganization {
    organizationType: OrganizationType.SportsTeam;
    /**
     * GMO情報
     */
    gmoInfo: IGMOInfo;
}

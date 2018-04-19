/**
 * 劇場組織ファクトリー
 * @namespace organization.movieTheater
 */

import IMultilingualString from '../multilingualString';
import * as OrganizationFactory from '../organization';
import OrganizationType from '../organizationType';
import PlaceType from '../placeType';
import * as URLFactory from '../url';

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
 * 場所インターフェース
 */
export interface ILocation {
    /**
     * スキーマタイプ
     */
    typeOf: PlaceType;
    /**
     * 枝番号
     * COAの劇場コードにあたります。
     */
    branchCode: string;
    /**
     * 場所名称
     */
    name: IMultilingualString;
}

/**
 * 親組織インターフェース
 */
export interface IParentOrganization {
    /**
     * スキーマタイプ
     */
    typeOf: OrganizationType;
    /**
     * 組織識別子
     */
    identifier: string;
    /**
     * 組織名称
     */
    name: IMultilingualString;
}

export interface IOrganizationWithoutGMOInfo extends OrganizationFactory.IOrganization {
    /**
     * 組織識別子
     */
    identifier: string;
    /**
     * 劇場名称
     */
    name: IMultilingualString;
    /**
     * 枝番号
     * COAの劇場コードにあたります。
     */
    branchCode: string; // 劇場コード
    /**
     * 親組織
     */
    parentOrganization: IParentOrganization;
    /**
     * 場所
     */
    location: ILocation;
    /**
     * 電話番号
     */
    telephone: string;
    /**
     * 劇場ポータルサイトURL
     */
    url: URLFactory.IURL;
}

/**
 * ローカルビジネス組織としての劇場
 */
export type IOrganization = IOrganizationWithoutGMOInfo & {
    /**
     * GMO情報
     */
    gmoInfo: IGMOInfo;
};

/**
 * public fields interface
 */
export type IPublicFields = IOrganizationWithoutGMOInfo & {
    gmoInfo: {
        shopId: string;
    };
};

export function create(params: {
    name: IMultilingualString;
    branchCode: string; // 劇場コード
    gmoInfo: IGMOInfo;
    parentOrganization: IParentOrganization;
    location: ILocation;
    telephone: string;
    url: URLFactory.IURL;
}): IOrganization {
    const identifier = `MovieTheater-${params.branchCode}`;

    return {
        ...OrganizationFactory.create({
            identifier: identifier,
            name: params.name,
            typeOf: OrganizationType.MovieTheater
        }),
        ...{
            branchCode: params.branchCode,
            gmoInfo: params.gmoInfo,
            parentOrganization: params.parentOrganization,
            location: params.location,
            telephone: params.telephone,
            url: params.url
        }
    };
}

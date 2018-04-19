/**
 * 組織ファクトリー
 * @namespace organization
 */

import IMultilingualString from './multilingualString';
import OrganizationType from './organizationType';
import * as URLFactory from './url';

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
}

export function create(params: {
    id?: string;
    identifier: string;
    name: IMultilingualString;
    legalName?: IMultilingualString;
    typeOf: OrganizationType;
    location?: any;
    telephone?: string;
    url?: URLFactory.IURL;
}): IOrganization {
    return {
        id: (params.id === undefined) ? '' : params.id,
        identifier: params.identifier,
        name: params.name,
        legalName: (params.legalName === undefined) ? { ja: '', en: '' } : params.legalName,
        typeOf: params.typeOf,
        location: params.location,
        telephone: params.telephone,
        url: (params.url !== undefined) ? params.url.toString() : undefined
    };
}

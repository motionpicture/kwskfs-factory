/**
 * 企業ファクトリー
 * @namespace organization.corporation
 */

import IMultilingualString from '../multilingualString';
import * as OrganizationFactory from '../organization';
import CorporationOrganizationIdentifier from '../organizationIdentifier/corporation';
import OrganizationType from '../organizationType';

/**
 * 企業組織インターフェース
 */
export interface IOrganization extends OrganizationFactory.IOrganization {
    /**
     * 組織識別子
     */
    identifier: CorporationOrganizationIdentifier;
}

export function create(params: {
    identifier: CorporationOrganizationIdentifier;
    name: IMultilingualString;
    legalName?: IMultilingualString;
}): IOrganization {
    const organization = OrganizationFactory.create({
        identifier: params.identifier,
        name: params.name,
        legalName: params.legalName,
        typeOf: OrganizationType.Corporation
    });

    return {
        ...organization,
        ...{
            identifier: params.identifier
        }
    };
}

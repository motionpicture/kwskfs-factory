/**
 * スポーツチームファクトリー
 */

import * as OrganizationFactory from '../organization';
import OrganizationType from '../organizationType';

/**
 * スポーツチームインターフェース
 */
export interface IOrganization extends OrganizationFactory.IOrganization {
    organizationType: OrganizationType.SportsTeam;
}

/**
 * スポーツイベントファクトリー
 */

import * as EventFactory from '../event';
import { IOrganization as ISportsTeamOrganization } from '../organization/sportsTeam';
import { IPerson } from '../person';

/**
 * 競技者インターフェース
 */
export type ICompetitor = IPerson | ISportsTeamOrganization;

/**
 * スポーツイベントインターフェース
 */
export interface IEvent extends EventFactory.IEvent {
    /**
     * 競技者
     */
    competitor: ICompetitor[];
}

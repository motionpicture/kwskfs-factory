/**
 * screen event factory
 * 劇場の上映イベントファクトリー
 * @namespace event.screeningEvent
 */

import * as COA from '@motionpicture/coa-service';
import * as moment from 'moment';

import CreativeWorkType from '../creativeWorkType';
import * as EventFactory from '../event';
import EventStatusType from '../eventStatusType';
import EventType from '../eventType';
import IMultilingualString from '../multilingualString';
import OrganizationType from '../organizationType';
import PersonType from '../personType';
import * as MovieTheaterPlaceFactory from '../place/movieTheater';
import PlaceType from '../placeType';

/**
 * performed work interface
 * 上映作品インターフェース
 * @export
 */
export interface IWorkPerformed {
    /**
     * 作品識別子
     * COAタイトルコードに相当します。
     */
    identifier: string;
    /**
     * 作品原題
     */
    name: string;
    /**
     * 上映時間
     */
    duration: string;
    /**
     * 映倫区分(PG12,R15,R18)
     */
    contentRating?: COA.services.master.IKubunNameResult;
    /**
     * スキーマタイプ
     */
    typeOf: CreativeWorkType;
}

export interface IOrganizer {
    typeOf: OrganizationType | PersonType;
    identifier: string;
    name: IMultilingualString;
}

/**
 * screening event interface
 * 上映イベントインターフェース(COAの劇場作品に相当)
 * @export
 */
export interface IEvent extends EventFactory.IEvent {
    /**
     * 映像区分(２D、３D)
     */
    videoFormat?: COA.services.master.IKubunNameResult;
    /**
     * 上映作品
     */
    workPerformed: IWorkPerformed;
    /**
     * 上映場所
     */
    location: {
        /**
         * スキーマタイプ
         */
        typeOf: PlaceType;
        /**
         * 識別子
         */
        identifier: string;
        /**
         * 劇場コード
         */
        branchCode: string;
        /**
         * 場所名称
         */
        name: IMultilingualString;
        /**
         * 場所名称(カナ)
         */
        kanaName: string;
    };
    organizer: IOrganizer;
    /**
     * 作品タイトル名（カナ）
     */
    kanaName: string;
    /**
     * 作品タイトル名省略
     */
    alternativeHeadline: string;
    /**
     * イベント名称
     */
    name: IMultilingualString;
    /**
     * 公演終了予定日(in ISO 8601 date format)
     */
    endDate?: Date;
    /**
     * 公演開始予定日(in ISO 8601 date format)
     */
    startDate?: Date;
    /**
     * その他COA情報
     */
    coaInfo: {
        titleBranchNum: string;
        /**
         * 上映方式区分(ＩＭＡＸ，４ＤＸ等)
         */
        kbnJoueihousiki?: COA.services.master.IKubunNameResult;
        /**
         * 字幕吹替区分(字幕、吹き替え)
         */
        kbnJimakufukikae?: COA.services.master.IKubunNameResult;
        /**
         * ムビチケ使用フラグ
         * 1：ムビチケ使用対象
         */
        flgMvtkUse: string;
        /**
         * ムビチケ利用開始日
         * ※日付は西暦8桁 "YYYYMMDD"
         */
        dateMvtkBegin: string;
    };
}

/**
 * COAの作品抽出結果からFilmオブジェクトを作成する
 * @export
 */
export function createFromCOA(params: {
    filmFromCOA: COA.services.master.ITitleResult;
    movieTheater: MovieTheaterPlaceFactory.IPlace;
    eirinKubuns: COA.services.master.IKubunNameResult[];
    eizouKubuns: COA.services.master.IKubunNameResult[];
    joueihousikiKubuns: COA.services.master.IKubunNameResult[];
    jimakufukikaeKubuns: COA.services.master.IKubunNameResult[];
}): IEvent {
    const endDate = (moment(`${params.filmFromCOA.dateEnd} +09:00`, 'YYYYMMDD Z').isValid())
        ? moment(`${params.filmFromCOA.dateEnd} +09:00`, 'YYYYMMDD Z').toDate()
        : undefined;
    const startDate = (moment(`${params.filmFromCOA.dateBegin} +09:00`, 'YYYYMMDD Z').isValid())
        ? moment(`${params.filmFromCOA.dateBegin} +09:00`, 'YYYYMMDD Z').toDate()
        : undefined;

    return {
        // title_codeは劇場をまたいで共有、title_branch_numは劇場毎に管理
        identifier: createIdentifier({
            theaterCode: params.movieTheater.branchCode,
            titleCode: params.filmFromCOA.titleCode,
            titleBranchNum: params.filmFromCOA.titleBranchNum
        }),
        name: {
            ja: params.filmFromCOA.titleName,
            en: params.filmFromCOA.titleNameEng
        },
        kanaName: params.filmFromCOA.titleNameKana,
        alternativeHeadline: params.filmFromCOA.titleNameShort,
        location: {
            identifier: params.movieTheater.identifier,
            branchCode: params.movieTheater.branchCode,
            name: params.movieTheater.name,
            kanaName: params.movieTheater.kanaName,
            typeOf: params.movieTheater.typeOf
        },
        organizer: {
            typeOf: OrganizationType.MovieTheater,
            identifier: params.movieTheater.identifier,
            name: params.movieTheater.name
        },
        videoFormat: params.eizouKubuns.filter((kubun) => kubun.kubunCode === params.filmFromCOA.kbnEizou)[0],
        workPerformed: {
            identifier: params.filmFromCOA.titleCode,
            name: params.filmFromCOA.titleNameOrig,
            duration: moment.duration(params.filmFromCOA.showTime, 'm').toISOString(),
            contentRating: params.eirinKubuns.filter((kubun) => kubun.kubunCode === params.filmFromCOA.kbnEirin)[0],
            typeOf: CreativeWorkType.Movie
        },
        duration: moment.duration(params.filmFromCOA.showTime, 'm').toISOString(),
        endDate: endDate,
        startDate: startDate,
        coaInfo: {
            titleBranchNum: params.filmFromCOA.titleBranchNum,
            kbnJoueihousiki: params.joueihousikiKubuns.filter((kubun) => kubun.kubunCode === params.filmFromCOA.kbnJoueihousiki)[0],
            kbnJimakufukikae: params.jimakufukikaeKubuns.filter((kubun) => kubun.kubunCode === params.filmFromCOA.kbnJimakufukikae)[0],
            flgMvtkUse: params.filmFromCOA.flgMvtkUse,
            dateMvtkBegin: params.filmFromCOA.dateMvtkBegin
        },
        eventStatus: EventStatusType.EventScheduled,
        typeOf: EventType.ScreeningEvent
    };
}

/**
 * COA情報から上映イベント識別子を作成する
 * @export
 */
export function createIdentifier(params: {
    theaterCode: string;
    titleCode: string;
    titleBranchNum: string;
}) {
    return [
        params.theaterCode,
        params.titleCode,
        params.titleBranchNum
    ].join('');
}

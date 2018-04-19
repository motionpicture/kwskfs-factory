/**
 * credit card factory
 * @namespace paymentMethod.paymentCard.creditCard
 */

import * as GMO from '@motionpicture/gmo-service';

import PaymentMethodType from '../../paymentMethodType';
import { IPaymentCard } from '../paymentCard';

/**
 * 有効性確認済みカード
 * @export
 * @extends {CardFactory.ICard}
 */
export interface ICheckedCard extends IPaymentCard {
    /**
     * カード登録連番
     */
    cardSeq: string;
    /**
     * カード会社略称
     */
    cardName: string;
    /**
     * カード番号
     */
    cardNo: string;
    /**
     * 有効期限
     */
    expire: string;
    /**
     * 名義人
     */
    holderName: string;
    /**
     * delete flag
     */
    deleteFlag: string;
}

/**
 * 生の有効性確認前GMOカードインターフェース
 */
export interface IUncheckedCardRaw {
    cardNo: string;
    cardPass?: string;
    expire: string;
    holderName: string;
}

/**
 * トークン化有効性確認前GMOカードインターフェース
 */
export interface IUncheckedCardTokenized {
    token: string;
}

/**
 * オーソリ取得前の会員カードインターフェース
 */
export interface IUnauthorizedCardOfMember {
    memberId: string;
    cardSeq: number;
    cardPass?: string;
}

/**
 * GMOカード検索結果から有効性確認済みカードを作成する
 * @export
 * @param searchCardResult GMOカード検索結果
 */
export function createCheckedCardFromGMOSearchCardResult(
    searchCardResult: GMO.services.card.ISearchCardResult
): ICheckedCard {
    return {
        typeOf: PaymentMethodType.CreditCard,
        identifier: `${PaymentMethodType.CreditCard}-${searchCardResult.cardSeq}`,
        cardSeq: searchCardResult.cardSeq,
        cardName: searchCardResult.cardName,
        cardNo: searchCardResult.cardNo,
        expire: searchCardResult.expire,
        holderName: searchCardResult.holderName,
        deleteFlag: searchCardResult.deleteFlag
    };
}

/**
 * 生の有効性確認前GMOカードを作成する
 * @export
 * @param params.cardNo カード番号
 * @param [params.cardPass] カードパスワード
 * @param params.expire 有効期限 名義人
 * @param params.holderName
 */
export function createUncheckedCardRaw(params: {
    cardNo: string;
    cardPass?: string;
    expire: string;
    holderName: string;
}): IUncheckedCardRaw {
    return params;
}

/**
 * トークン化有効性確認前GMOカードを作成する
 * @export
 */
export function createUncheckedCardTokenized(params: {
    token: string;
}): IUncheckedCardTokenized {
    return params;
}

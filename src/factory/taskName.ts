/**
 * task name
 * タスク名
 */

enum TaskName {
    /**
     * 座席予約承認アクション取消
     */
    CancelSeatReservation = 'cancelSeatReservation',
    /**
     * クレジットカード承認アクション取消
     */
    CancelCreditCard = 'cancelCreditCard',
    /**
     * Pecorino口座承認アクション取消
     */
    CancelPecorino = 'cancelPecorino',
    /**
     *  Eメールメッセージ送信
     */
    SendEmailMessage = 'sendEmailMessage',
    /**
     * 注文受付
     */
    PlaceOrder = 'placeOrder',
    /**
     * 注文返品
     */
    ReturnOrder = 'returnOrder',
    /**
     * クレジットカード支払
     */
    PayCreditCard = 'payCreditCard',
    /**
     * Pecorino支払
     */
    PayPecorino = 'payPecorino',
    /**
     * Bluelab支払
     */
    PayBluelab = 'payBluelab',
    /**
     * 注文配送
     */
    SendOrder = 'sendOrder',
    /**
     * クレジットカード返金
     */
    RefundCreditCard = 'refundCreditCard'
}

export default TaskName;

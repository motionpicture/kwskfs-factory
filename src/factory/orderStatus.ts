/**
 * 注文ステータス
 */

enum OrderStatus {
    OrderCancelled = 'OrderCancelled',
    OrderDelivered = 'OrderDelivered',
    OrderInTransit = 'OrderInTransit',
    OrderPaymentDue = 'OrderPaymentDue',
    OrderPickupAvailable = 'OrderPickupAvailable',
    OrderProblem = 'OrderProblem',
    OrderProcessing = 'OrderProcessing',
    OrderReturned = 'OrderReturned'
}

export default OrderStatus;

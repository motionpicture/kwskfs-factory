/**
 * 取引作成サンプル
 * @ignore
 */

const factory = require('../');

const transaction = factory.transaction.placeOrder.createAttributes({
    status: factory.transactionStatusType.InProgress,
    expires: new Date(),
    tasksExportationStatus: factory.transactionTasksExportationStatus.Unexported,
    agent: {},
    seller: {},
    object: {}
});

console.log('transaction:', transaction);

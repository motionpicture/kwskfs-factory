/**
 * NotFoundエラーを作成する
 * @ignore
 */

const assert = require('assert');
const factory = require('../');

const error = new factory.errors.NotFound('entity');
console.log(error);
assert(error instanceof factory.errors.NotFound);

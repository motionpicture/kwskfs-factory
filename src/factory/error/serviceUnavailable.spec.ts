/**
 * ServiceUnavailableErrorテスト
 * @ignore
 */

import * as assert from 'assert';

import ServiceUnavailableError from './serviceUnavailable';

describe('new ServiceUnavailableError()', () => {
    it('正しくインスタンス化できる', () => {
        const message = 'test message';
        const error = new ServiceUnavailableError(message);
        assert(error instanceof ServiceUnavailableError);
        assert.equal(error.message, message);
        assert.equal(error.name, 'KWSKFSError');
        assert.equal(typeof error.stack, 'string');
    });

    it('メッセージを指定しなくても、正しくインスタンス化できる', () => {
        const error = new ServiceUnavailableError();
        assert(error instanceof ServiceUnavailableError);
        assert.equal(error.name, 'KWSKFSError');
        assert.equal(typeof error.message, 'string');
        assert.equal(typeof error.stack, 'string');
    });
});

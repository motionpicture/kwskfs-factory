/**
 * RateLimitExceededErrorテスト
 * @ignore
 */

import * as assert from 'assert';

import RateLimitExceededError from './rateLimitExceeded';

describe('new RateLimitExceededError()', () => {
    it('正しくインスタンス化できる', () => {
        const message = 'test message';
        const error = new RateLimitExceededError(message);
        assert(error instanceof RateLimitExceededError);
        assert.equal(error.message, message);
        assert.equal(error.name, 'KWSKFSError');
        assert.equal(typeof error.stack, 'string');
    });

    it('メッセージを指定しなくても、正しくインスタンス化できる', () => {
        const error = new RateLimitExceededError();
        assert(error instanceof RateLimitExceededError);
        assert.equal(error.name, 'KWSKFSError');
        assert.equal(typeof error.message, 'string');
        assert.equal(typeof error.stack, 'string');
    });
});

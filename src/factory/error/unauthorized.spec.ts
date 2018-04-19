/**
 * UnauthorizedErrorテスト
 * @ignore
 */

import * as assert from 'assert';

import UnauthorizedError from './unauthorized';

describe('new UnauthorizedError()', () => {
    it('正しくインスタンス化できる', () => {
        const message = 'test message';
        const error = new UnauthorizedError(message);
        assert(error instanceof UnauthorizedError);
        assert.equal(error.message, message);
        assert.equal(error.name, 'KWSKFSError');
        assert.equal(typeof error.stack, 'string');
    });

    it('メッセージを指定しなくても、正しくインスタンス化できる', () => {
        const error = new UnauthorizedError();
        assert(error instanceof UnauthorizedError);
        assert.equal(error.name, 'KWSKFSError');
        assert.equal(typeof error.message, 'string');
        assert.equal(typeof error.stack, 'string');
    });
});

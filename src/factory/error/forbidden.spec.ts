/**
 * ForbiddenErrorテスト
 * @ignore
 */

import * as assert from 'assert';

import ForbiddenError from './forbidden';

describe('new ForbiddenError()', () => {
    it('正しくインスタンス化できる', () => {
        const message = 'test message';
        const error = new ForbiddenError(message);
        assert(error instanceof ForbiddenError);
        assert.equal(error.message, message);
        assert.equal(error.name, 'KWSKFSError');
        assert.equal(typeof error.stack, 'string');
    });

    it('メッセージを指定しなくても、正しくインスタンス化できる', () => {
        const error = new ForbiddenError();
        assert(error instanceof ForbiddenError);
        assert.equal(error.name, 'KWSKFSError');
        assert.equal(typeof error.message, 'string');
        assert.equal(typeof error.stack, 'string');
    });
});

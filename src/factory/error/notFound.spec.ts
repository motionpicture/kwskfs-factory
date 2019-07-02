/**
 * NotFoundErrorテスト
 * @ignore
 */

import * as assert from 'assert';

import NotFoundError from './notFound';

describe('new NotFoundError()', () => {
    it('正しくインスタンス化できる', () => {
        const entityName = 'entityName';
        const message = 'test message';
        const error = new NotFoundError(entityName, message);
        assert(error instanceof NotFoundError);
        assert.equal(error.entityName, entityName);
        assert.equal(error.message, message);
        assert.equal(error.name, 'KWSKFSError');
        assert.equal(typeof error.stack, 'string');
    });

    it('メッセージを指定しなくても、正しくインスタンス化できる', () => {
        const entityName = 'testname';
        const error = new NotFoundError(entityName);
        assert(error instanceof NotFoundError);
        assert.equal(error.entityName, entityName);
        assert.equal(error.name, 'KWSKFSError');
        assert.equal(typeof error.message, 'string');
        assert.equal(typeof error.stack, 'string');
    });
});

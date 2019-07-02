/**
 * AlreadyInUseErrorテスト
 * @ignore
 */

import * as assert from 'assert';

import AlreadyInUseError from './alreadyInUse';

describe('new AlreadyInUseError()', () => {
    it('正しくインスタンス化できる', () => {
        const entityName = 'entityName';
        const fieldNames = ['fieldNames'];
        const message = 'test message';
        const error = new AlreadyInUseError(entityName, fieldNames, message);
        assert(error instanceof AlreadyInUseError);
        assert.equal(error.entityName, entityName);
        assert.equal(error.fieldNames, fieldNames);
        assert.equal(error.message, message);
        assert.equal(error.name, 'KWSKFSError');
        assert.equal(typeof error.stack, 'string');
    });

    it('メッセージを指定しなくても、正しくインスタンス化できる', () => {
        const entityName = 'entityName';
        const fieldNames = ['fieldNames'];
        const error = new AlreadyInUseError(entityName, fieldNames);
        assert(error instanceof AlreadyInUseError);
        assert.equal(error.entityName, entityName);
        assert.equal(error.fieldNames, fieldNames);
        assert.equal(error.name, 'KWSKFSError');
        assert.equal(typeof error.message, 'string');
        assert.equal(typeof error.stack, 'string');
    });
});

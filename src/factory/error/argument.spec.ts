/**
 * ArgumentErrorテスト
 * @ignore
 */

import * as assert from 'assert';

import ArgumentError from './argument';

describe('new ArgumentError()', () => {
    it('正しくインスタンス化できる', () => {
        const argumentName = 'testname';
        const message = 'test message';
        const error = new ArgumentError(argumentName, message);
        assert(error instanceof ArgumentError);
        assert.equal(error.argumentName, argumentName);
        assert.equal(error.message, message);
        assert.equal(error.name, 'KWSKFSError');
        assert.equal(typeof error.stack, 'string');
    });

    it('メッセージを指定しなくても、正しくインスタンス化できる', () => {
        const argumentName = 'testname';
        const error = new ArgumentError(argumentName);
        assert(error instanceof ArgumentError);
        assert.equal(error.argumentName, argumentName);
        assert.equal(error.name, 'KWSKFSError');
        assert.equal(typeof error.message, 'string');
        assert.equal(typeof error.stack, 'string');
    });
});

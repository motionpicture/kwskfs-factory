// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { KWSKFSError } from './kwskfs';

/**
 * NotImplementedError
 * @extends {KWSKFSError}
 */
export default class NotImplementedError extends KWSKFSError {
    constructor(message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Method is not yet implemented.';
        }

        super(ErrorCode.NotImplemented, actualMessage);

        setPrototypeOf(this, NotImplementedError.prototype);
    }
}

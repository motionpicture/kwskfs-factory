// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { KWSKFSError } from './kwskfs';

/**
 * RateLimitExceededError
 * @extends {KWSKFSError}
 */
export default class RateLimitExceededError extends KWSKFSError {
    constructor(message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Rate limit exceeded.';
        }

        super(ErrorCode.RateLimitExceeded, actualMessage);

        setPrototypeOf(this, RateLimitExceededError.prototype);
    }
}

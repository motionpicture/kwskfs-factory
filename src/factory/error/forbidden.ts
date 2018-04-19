// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { KWSKFSError } from './kwskfs';

/**
 * ForbiddenError
 * @extends {KWSKFSError}
 */
export default class ForbiddenError extends KWSKFSError {
    constructor(message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Forbidden.';
        }

        super(ErrorCode.Forbidden, actualMessage);

        setPrototypeOf(this, ForbiddenError.prototype);
    }
}

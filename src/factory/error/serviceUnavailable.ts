// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { KWSKFSError } from './kwskfs';

/**
 * ServiceUnavailableError
 * @extends {KWSKFSError}
 */
export default class ServiceUnavailableError extends KWSKFSError {
    constructor(message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Service unavailable temporarily.';
        }

        super(ErrorCode.ServiceUnavailable, actualMessage);

        setPrototypeOf(this, ServiceUnavailableError.prototype);
    }
}

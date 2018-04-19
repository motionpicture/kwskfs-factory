// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { KWSKFSError } from './kwskfs';

/**
 * ArgumentNullError
 * @extends {KWSKFSError}
 */
export default class ArgumentNullError extends KWSKFSError {
    public readonly argumentName: string;

    constructor(argumentName: string, message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = `Missing argument: ${argumentName}.`;
        }

        super(ErrorCode.ArgumentNull, actualMessage);

        this.argumentName = argumentName;

        setPrototypeOf(this, ArgumentNullError.prototype);
    }
}

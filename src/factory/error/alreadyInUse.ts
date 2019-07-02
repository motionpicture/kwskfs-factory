// tslint:disable-next-line:no-require-imports
import setPrototypeOf = require('setprototypeof');
import ErrorCode from '../errorCode';
import { KWSKFSError } from './kwskfs';

/**
 * AlreadyInUseError
 * @extends {KWSKFSError}
 */
export default class AlreadyInUseError extends KWSKFSError {
    public readonly entityName: string;
    public readonly fieldNames: string[];

    constructor(entityName: string, fieldNames: string[], message?: string) {
        let actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = `The specified '${entityName}' value is already in use for: ${fieldNames.join(', ')}.`;
        }

        super(ErrorCode.AlreadyInUse, actualMessage);

        this.entityName = entityName;
        this.fieldNames = fieldNames;

        setPrototypeOf(this, AlreadyInUseError.prototype);
    }
}

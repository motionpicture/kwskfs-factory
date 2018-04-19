import ErrorCode from '../errorCode';

/**
 * KWSKFSError
 * @extends {Error}
 */
export class KWSKFSError extends Error {
    public readonly reason: ErrorCode;

    constructor(code: ErrorCode, message?: string) {
        super(message);

        this.name = 'KWSKFSError';
        this.reason = code;
    }
}

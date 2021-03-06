/**
 * タスク実行結果ファクトリー
 * @namespace taskExecutionResult
 */

import { IExtendId } from './autoGenerated';

export interface IAttributes {
    executedAt: Date;
    error: string;
}

export type ITaskExecutionResult = IExtendId<IAttributes>;

export function createAttributes(params: {
    executedAt: Date;
    error: string;
}): IAttributes {
    return {
        executedAt: params.executedAt,
        error: params.error
    };
}

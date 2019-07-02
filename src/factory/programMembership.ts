/**
 * 会員プログラムファクトリー
 */

export type ProgramName = 'Cognito' | 'LINE';

/**
 * 会員プログラムインターフェース
 * (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.
 */
export interface IProgramMembership {
    membershipNumber: string;
    programName: ProgramName;
}

/**
 * programMembership factory
 */

export type ProgramName = 'Cognito' | 'LINE';

/**
 * Used to describe membership in a loyalty programs
 * (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.
 */
export interface IProgramMembership {
    membershipNumber: string;
    programName: ProgramName;
}

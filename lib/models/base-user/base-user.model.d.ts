import { BaseModel } from '../base/base.model';
/**
 * The base user class
 */
export declare class BaseUser extends BaseModel {
    /** The user's first name */
    firstName: string;
    /** The user's last name */
    lastName: string;
    /** Get accessor for the user's full name */
    get fullName(): string;
    /** The user's email address */
    email: string;
    /** The user's email verified */
    emailVerified: boolean;
    /** The date of the user's last login */
    lastLoginDate: Date;
    /** The total number of user logins */
    loginCount: number;
    /** A flag indicating whether the user's account has been disabled */
    disabled: boolean;
    /** The number of password resets */
    passwordResetCount: number;
    /** An array containing the user's roles */
    roles: string[];
}

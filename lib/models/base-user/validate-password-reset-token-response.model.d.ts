/**
 * A class to return the result of validating a password reset request token
 */
export declare class ValidatePasswordResetTokenResponse {
    /** Boolean indicating whether the token is valid */
    validToken: boolean;
    /** The password reset token */
    token: string;
    /** The ID of the user requesting the password reset */
    userId: string;
    /** The message returned to the user */
    message: string;
}

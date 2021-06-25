/**
 * A class to store a password reset
 */
export declare class PasswordReset {
    token: string;
    userId: string;
    newPassword: string;
    /**
     * @param token - The password reset token
     * @param userId - The ID of the user requesting the password reset
     * @param newPassword - The user's new password
     */
    constructor(token: string, userId: string, newPassword: string);
}

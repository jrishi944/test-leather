import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseDataService } from '../base-data/base-data.service';
import { ErrorDialogService } from '../../dialogs/error/error-dialog.service';
import { BasePasswordResetRequest } from '../../models/base-user/base-password-reset-request.model';
import { BaseUser } from '../../models/base-user/base-user.model';
import { ILeathermanAppConfig } from '../../config/app.config';
import { ValidatePasswordResetTokenResponse } from '../../models/base-user/validate-password-reset-token-response.model';
import { PasswordReset } from '../../models/base-user/password-reset.model';
import { GetOptions } from '../../models/args/get-options.model';
import { ValidateVerifyEmailTokenResponse } from '../../models/base-user/validate-verify-email-token-response.model';
/**
 * The base user data service
 */
export declare class BaseUserDataService extends BaseDataService {
    protected config: ILeathermanAppConfig;
    /**
     * Constructor
     * @param config - The app config object
     * @param errorDialogService - A reference to the error dialog service
     * @param router - A reference to the router
     * @param httpClient - A reference to the HTTP client service
     */
    constructor(config: ILeathermanAppConfig, errorDialogService: ErrorDialogService, router: Router, httpClient: HttpClient);
    /**
     * Add a role to a user
     * @param userId - The user's ID
     * @param role - The role to add to the user
     * @returns The updated user
     * @async
     */
    _addUserRole<T extends BaseUser>(userId: string, role: string): Promise<T>;
    /**
     * Delete a user
     * @param userId - The ID of the user to delete
     * @returns True if the delete succeeded
     * @async
     */
    _deleteUser(userId: string): Promise<boolean>;
    /**
     * Get all admin users
     * @returns An array of admin users
     * @asyncs
     */
    _getAdminUsers<T extends BaseUser>(options?: GetOptions): Promise<T[]>;
    /**
     * Get a user
     * @param id - The ID of the user to get
     * @returns A user object
     * @async
     */
    _getUser<T extends BaseUser>(id: string): Promise<T>;
    _getBasicUsers<T extends BaseUser>(options?: GetOptions): Promise<T[]>;
    /**
     * Get all users
     * @returns An array of users
     * @async
     */
    _getUsers<T extends BaseUser>(options?: GetOptions): Promise<T[]>;
    /**
     * Remove a role from a user
     * @param userId - The ID of the user
     * @param role - The role to remove from the user
     */
    _removeUserRole<T extends BaseUser>(userId: string, role: string): Promise<T>;
    /**
     * Request a password reset
     * @param passwordResetRequest - A password reset request object
     * @returns True if the request succeeded
     * @async
     */
    _requestPasswordReset(passwordResetRequest: BasePasswordResetRequest): Promise<boolean>;
    /**
     * Request a password reset token. This method is only used for testing.
     * @param passwordResetRequest - A password reset request object
     * @returns A password reset token
     * @async
     */
    _requestPasswordResetToken(passwordResetRequest: BasePasswordResetRequest): Promise<string>;
    /**
     * Resend Verification email
     * @param verifyEmail - A verification email
     * @returns True if the verification email is sent
     */
    _resendVerificationEmail(verificationEmail: string): Promise<boolean>;
    /**
     * Reset a password
     * @param passwordReset - A password reset object
     * @returns True if the password was successfully reset
     * @async
     */
    _resetPassword(passwordReset: PasswordReset): Promise<boolean>;
    /**
     * Update a user
     * @param user - The user to update
     * @returns The updated user
     * @async
     */
    _updateUser<T extends BaseUser>(user: T): Promise<T>;
    /**
     * Validate a password reset token
     * @param passwordResetToken - The password reset token to validate
     * @returns A validate password reset token response
     * @async
     */
    _validatePasswordResetToken(passwordResetToken: string): Promise<ValidatePasswordResetTokenResponse>;
    /**
     * Validate an email address
     * @param email - The email address to validate
     * @returns True if the email address is not currently in the user table
     * @async
     */
    _validateEmail(email: string): Observable<boolean>;
    _validateVerifyEmailToken(verifyEmailToken: string): Promise<ValidateVerifyEmailTokenResponse>;
}

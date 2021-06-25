import { BaseUserDataService } from './base-user-data.service';
import { Router } from '@angular/router';
import { BaseService } from '../base-service/base.service';
import { AuthenticationService } from '../authentication/authentication.service';
import { ConfirmDialogService } from '../../dialogs/confirm/confirm-dialog.service';
import { LoginRequest } from '../../models/authentication/login-request.model';
import { BaseUser } from '../../models/base-user/base-user.model';
import { BaseNewUserRequest } from '../../models/base-user/base-new-user-request.model';
import { ValidatePasswordResetTokenResponse } from '../../models/base-user/validate-password-reset-token-response.model';
import { Secure } from '../../enums/secure.enum';
import { GetOptions } from '../../models/args/get-options.model';
import { AuthenticationDetails } from '../../models/authentication/authentication-details.model';
import { ValidateVerifyEmailTokenResponse } from '../../models/base-user/validate-verify-email-token-response.model';
/**
 * The base user service
 */
export declare class BaseUserService extends BaseService {
    protected authenticationService: AuthenticationService;
    protected dataService: BaseUserDataService;
    protected confirmDialogService: ConfirmDialogService;
    protected router: Router;
    /** Get accessor for the user ID */
    get userId(): string;
    /** Get accessor for user role */
    get userRole(): string;
    /** The user ID */
    protected _userId: string;
    /** The user's primary role */
    protected _primaryUserRole: string;
    /**
     * Constructor
     * @param authenticationService - A reference to the authentication service
     * @param dataService - A reference to the user data service
     * @param confirmDialogService - A reference to the confirm dialog service
     * @param router - A reference to the router
     */
    constructor(authenticationService: AuthenticationService, dataService: BaseUserDataService, confirmDialogService: ConfirmDialogService, router: Router);
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
     * @async
     */
    _getAdminUsers<T extends BaseUser>(): Promise<T[]>;
    /**
     * Get all basic users
     * @returns An array of basic (non-admin) users
     * @async
     */
    _getBasicUsers<T extends BaseUser>(): Promise<T[]>;
    /**
     * Get the logged in user
     * @returns The user object
     * @async
     */
    _getCurrentUser<T extends BaseUser>(): Promise<T>;
    /**
     * Get all users
     * @returns An array of users
     * @async
     */
    _getUsers<T extends BaseUser>(options: GetOptions): Promise<T[]>;
    /**
     * Get the user's primary role
     * @returns The user's primary role
     * @async
     */
    _getPrimaryUserRole(): string;
    /**
     * Get the user
     * @param userId - ID of the user to get
     * @returns The user object
     * @async
     */
    _getUser<T extends BaseUser>(userID: string): Promise<T>;
    /**
     * Login a user
     * @param user - The login request
     * @returns True if the login succeeded
     * @async
     */
    _loginUser(user: LoginRequest): Promise<AuthenticationDetails>;
    /**
     * Logout the user
     * @param redirectRoute - The route to redirect to after logging out
     */
    _logoutUser(redirectRoute?: string): void;
    /**
     * Register a new user
     * @param newUser - The new user request object
     * @param secure - An enum indicating whether the API endpoint is secure
     * @returs The new user
     * @async
     */
    _registerUser<T extends BaseNewUserRequest, U extends BaseUser>(newUser: T, secure?: Secure): Promise<U>;
    /**
     * Request a password reset
     * @param email - The email address of the user requesting the password reset
     * @returns true if the request succeeded
     * @async
     */
    _requestPasswordReset(email: string): Promise<boolean>;
    /**
     * Request a password reset token. This method is only used for testing.
     * @param email - The email address of the user requesting the password reset
     * @returns The password reset token
     * @async
     */
    _requestPasswordResetToken(email: string): Promise<string>;
    _resendVerificationEmail(email: string): Promise<boolean>;
    /**
     * Reset a user password
     * @param token - The password reset token
     * @param userId - The ID of the user
     * @param newPassword - The user's new password
     * @returns True if the password reset succeeded
     * @async
     */
    _resetPassword(token: string, userId: string, newPassword: string): Promise<boolean>;
    /**
     * Update a user
     * @param user - The user to update
     * @returns The updated user
     * @async
     */
    _updateUser<T extends BaseUser>(user: T): Promise<T>;
    /**
     * Validate a password reset token
     * @param passwordResetToken - The password reset token
     * @returns A validate password reset token response object
     * @async
     */
    _validatePasswordResetToken(passwordResetToken: string): Promise<ValidatePasswordResetTokenResponse>;
    /**
     * Validate a verify email token
     * @param verifyEmailToken - The verify email token
     * @returns A validate verify email token response object
     */
    _validateVerifyEmailToken(verifyEmailToken: string): Promise<ValidateVerifyEmailTokenResponse>;
}

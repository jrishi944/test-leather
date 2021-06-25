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
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseUserService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS11c2VyLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiYmFzZS11c2VyLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlVXNlckRhdGFTZXJ2aWNlIH0gZnJvbSAnLi9iYXNlLXVzZXItZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCYXNlU2VydmljZSB9IGZyb20gJy4uL2Jhc2Utc2VydmljZS9iYXNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb25maXJtRGlhbG9nU2VydmljZSB9IGZyb20gJy4uLy4uL2RpYWxvZ3MvY29uZmlybS9jb25maXJtLWRpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2luUmVxdWVzdCB9IGZyb20gJy4uLy4uL21vZGVscy9hdXRoZW50aWNhdGlvbi9sb2dpbi1yZXF1ZXN0Lm1vZGVsJztcbmltcG9ydCB7IEJhc2VVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UtdXNlci9iYXNlLXVzZXIubW9kZWwnO1xuaW1wb3J0IHsgQmFzZU5ld1VzZXJSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UtdXNlci9iYXNlLW5ldy11c2VyLXJlcXVlc3QubW9kZWwnO1xuaW1wb3J0IHsgVmFsaWRhdGVQYXNzd29yZFJlc2V0VG9rZW5SZXNwb25zZSB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLXVzZXIvdmFsaWRhdGUtcGFzc3dvcmQtcmVzZXQtdG9rZW4tcmVzcG9uc2UubW9kZWwnO1xuaW1wb3J0IHsgU2VjdXJlIH0gZnJvbSAnLi4vLi4vZW51bXMvc2VjdXJlLmVudW0nO1xuaW1wb3J0IHsgR2V0T3B0aW9ucyB9IGZyb20gJy4uLy4uL21vZGVscy9hcmdzL2dldC1vcHRpb25zLm1vZGVsJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uRGV0YWlscyB9IGZyb20gJy4uLy4uL21vZGVscy9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi1kZXRhaWxzLm1vZGVsJztcbmltcG9ydCB7IFZhbGlkYXRlVmVyaWZ5RW1haWxUb2tlblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UtdXNlci92YWxpZGF0ZS12ZXJpZnktZW1haWwtdG9rZW4tcmVzcG9uc2UubW9kZWwnO1xuLyoqXG4gKiBUaGUgYmFzZSB1c2VyIHNlcnZpY2VcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQmFzZVVzZXJTZXJ2aWNlIGV4dGVuZHMgQmFzZVNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZGF0YVNlcnZpY2U6IEJhc2VVc2VyRGF0YVNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNvbmZpcm1EaWFsb2dTZXJ2aWNlOiBDb25maXJtRGlhbG9nU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXI7XG4gICAgLyoqIEdldCBhY2Nlc3NvciBmb3IgdGhlIHVzZXIgSUQgKi9cbiAgICBnZXQgdXNlcklkKCk6IHN0cmluZztcbiAgICAvKiogR2V0IGFjY2Vzc29yIGZvciB1c2VyIHJvbGUgKi9cbiAgICBnZXQgdXNlclJvbGUoKTogc3RyaW5nO1xuICAgIC8qKiBUaGUgdXNlciBJRCAqL1xuICAgIHByb3RlY3RlZCBfdXNlcklkOiBzdHJpbmc7XG4gICAgLyoqIFRoZSB1c2VyJ3MgcHJpbWFyeSByb2xlICovXG4gICAgcHJvdGVjdGVkIF9wcmltYXJ5VXNlclJvbGU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSBhdXRoZW50aWNhdGlvblNlcnZpY2UgLSBBIHJlZmVyZW5jZSB0byB0aGUgYXV0aGVudGljYXRpb24gc2VydmljZVxuICAgICAqIEBwYXJhbSBkYXRhU2VydmljZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSB1c2VyIGRhdGEgc2VydmljZVxuICAgICAqIEBwYXJhbSBjb25maXJtRGlhbG9nU2VydmljZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBjb25maXJtIGRpYWxvZyBzZXJ2aWNlXG4gICAgICogQHBhcmFtIHJvdXRlciAtIEEgcmVmZXJlbmNlIHRvIHRoZSByb3V0ZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSwgZGF0YVNlcnZpY2U6IEJhc2VVc2VyRGF0YVNlcnZpY2UsIGNvbmZpcm1EaWFsb2dTZXJ2aWNlOiBDb25maXJtRGlhbG9nU2VydmljZSwgcm91dGVyOiBSb3V0ZXIpO1xuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhIHVzZXJcbiAgICAgKiBAcGFyYW0gdXNlcklkIC0gVGhlIElEIG9mIHRoZSB1c2VyIHRvIGRlbGV0ZVxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGRlbGV0ZSBzdWNjZWVkZWRcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBfZGVsZXRlVXNlcih1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBhZG1pbiB1c2Vyc1xuICAgICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIGFkbWluIHVzZXJzXG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgX2dldEFkbWluVXNlcnM8VCBleHRlbmRzIEJhc2VVc2VyPigpOiBQcm9taXNlPFRbXT47XG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBiYXNpYyB1c2Vyc1xuICAgICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIGJhc2ljIChub24tYWRtaW4pIHVzZXJzXG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgX2dldEJhc2ljVXNlcnM8VCBleHRlbmRzIEJhc2VVc2VyPigpOiBQcm9taXNlPFRbXT47XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBsb2dnZWQgaW4gdXNlclxuICAgICAqIEByZXR1cm5zIFRoZSB1c2VyIG9iamVjdFxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIF9nZXRDdXJyZW50VXNlcjxUIGV4dGVuZHMgQmFzZVVzZXI+KCk6IFByb21pc2U8VD47XG4gICAgLyoqXG4gICAgICogR2V0IGFsbCB1c2Vyc1xuICAgICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHVzZXJzXG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgX2dldFVzZXJzPFQgZXh0ZW5kcyBCYXNlVXNlcj4ob3B0aW9uczogR2V0T3B0aW9ucyk6IFByb21pc2U8VFtdPjtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHVzZXIncyBwcmltYXJ5IHJvbGVcbiAgICAgKiBAcmV0dXJucyBUaGUgdXNlcidzIHByaW1hcnkgcm9sZVxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIF9nZXRQcmltYXJ5VXNlclJvbGUoKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdXNlclxuICAgICAqIEBwYXJhbSB1c2VySWQgLSBJRCBvZiB0aGUgdXNlciB0byBnZXRcbiAgICAgKiBAcmV0dXJucyBUaGUgdXNlciBvYmplY3RcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBfZ2V0VXNlcjxUIGV4dGVuZHMgQmFzZVVzZXI+KHVzZXJJRDogc3RyaW5nKTogUHJvbWlzZTxUPjtcbiAgICAvKipcbiAgICAgKiBMb2dpbiBhIHVzZXJcbiAgICAgKiBAcGFyYW0gdXNlciAtIFRoZSBsb2dpbiByZXF1ZXN0XG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgbG9naW4gc3VjY2VlZGVkXG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgX2xvZ2luVXNlcih1c2VyOiBMb2dpblJlcXVlc3QpOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uRGV0YWlscz47XG4gICAgLyoqXG4gICAgICogTG9nb3V0IHRoZSB1c2VyXG4gICAgICogQHBhcmFtIHJlZGlyZWN0Um91dGUgLSBUaGUgcm91dGUgdG8gcmVkaXJlY3QgdG8gYWZ0ZXIgbG9nZ2luZyBvdXRcbiAgICAgKi9cbiAgICBfbG9nb3V0VXNlcihyZWRpcmVjdFJvdXRlPzogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhIG5ldyB1c2VyXG4gICAgICogQHBhcmFtIG5ld1VzZXIgLSBUaGUgbmV3IHVzZXIgcmVxdWVzdCBvYmplY3RcbiAgICAgKiBAcGFyYW0gc2VjdXJlIC0gQW4gZW51bSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIEFQSSBlbmRwb2ludCBpcyBzZWN1cmVcbiAgICAgKiBAcmV0dXJzIFRoZSBuZXcgdXNlclxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIF9yZWdpc3RlclVzZXI8VCBleHRlbmRzIEJhc2VOZXdVc2VyUmVxdWVzdCwgVSBleHRlbmRzIEJhc2VVc2VyPihuZXdVc2VyOiBULCBzZWN1cmU/OiBTZWN1cmUpOiBQcm9taXNlPFU+O1xuICAgIC8qKlxuICAgICAqIFJlcXVlc3QgYSBwYXNzd29yZCByZXNldFxuICAgICAqIEBwYXJhbSBlbWFpbCAtIFRoZSBlbWFpbCBhZGRyZXNzIG9mIHRoZSB1c2VyIHJlcXVlc3RpbmcgdGhlIHBhc3N3b3JkIHJlc2V0XG4gICAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWRcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBfcmVxdWVzdFBhc3N3b3JkUmVzZXQoZW1haWw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmVxdWVzdCBhIHBhc3N3b3JkIHJlc2V0IHRva2VuLiBUaGlzIG1ldGhvZCBpcyBvbmx5IHVzZWQgZm9yIHRlc3RpbmcuXG4gICAgICogQHBhcmFtIGVtYWlsIC0gVGhlIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIHVzZXIgcmVxdWVzdGluZyB0aGUgcGFzc3dvcmQgcmVzZXRcbiAgICAgKiBAcmV0dXJucyBUaGUgcGFzc3dvcmQgcmVzZXQgdG9rZW5cbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBfcmVxdWVzdFBhc3N3b3JkUmVzZXRUb2tlbihlbWFpbDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+O1xuICAgIF9yZXNlbmRWZXJpZmljYXRpb25FbWFpbChlbWFpbDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXNldCBhIHVzZXIgcGFzc3dvcmRcbiAgICAgKiBAcGFyYW0gdG9rZW4gLSBUaGUgcGFzc3dvcmQgcmVzZXQgdG9rZW5cbiAgICAgKiBAcGFyYW0gdXNlcklkIC0gVGhlIElEIG9mIHRoZSB1c2VyXG4gICAgICogQHBhcmFtIG5ld1Bhc3N3b3JkIC0gVGhlIHVzZXIncyBuZXcgcGFzc3dvcmRcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBwYXNzd29yZCByZXNldCBzdWNjZWVkZWRcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBfcmVzZXRQYXNzd29yZCh0b2tlbjogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgbmV3UGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogVXBkYXRlIGEgdXNlclxuICAgICAqIEBwYXJhbSB1c2VyIC0gVGhlIHVzZXIgdG8gdXBkYXRlXG4gICAgICogQHJldHVybnMgVGhlIHVwZGF0ZWQgdXNlclxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIF91cGRhdGVVc2VyPFQgZXh0ZW5kcyBCYXNlVXNlcj4odXNlcjogVCk6IFByb21pc2U8VD47XG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgYSBwYXNzd29yZCByZXNldCB0b2tlblxuICAgICAqIEBwYXJhbSBwYXNzd29yZFJlc2V0VG9rZW4gLSBUaGUgcGFzc3dvcmQgcmVzZXQgdG9rZW5cbiAgICAgKiBAcmV0dXJucyBBIHZhbGlkYXRlIHBhc3N3b3JkIHJlc2V0IHRva2VuIHJlc3BvbnNlIG9iamVjdFxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIF92YWxpZGF0ZVBhc3N3b3JkUmVzZXRUb2tlbihwYXNzd29yZFJlc2V0VG9rZW46IHN0cmluZyk6IFByb21pc2U8VmFsaWRhdGVQYXNzd29yZFJlc2V0VG9rZW5SZXNwb25zZT47XG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgYSB2ZXJpZnkgZW1haWwgdG9rZW5cbiAgICAgKiBAcGFyYW0gdmVyaWZ5RW1haWxUb2tlbiAtIFRoZSB2ZXJpZnkgZW1haWwgdG9rZW5cbiAgICAgKiBAcmV0dXJucyBBIHZhbGlkYXRlIHZlcmlmeSBlbWFpbCB0b2tlbiByZXNwb25zZSBvYmplY3RcbiAgICAgKi9cbiAgICBfdmFsaWRhdGVWZXJpZnlFbWFpbFRva2VuKHZlcmlmeUVtYWlsVG9rZW46IHN0cmluZyk6IFByb21pc2U8VmFsaWRhdGVWZXJpZnlFbWFpbFRva2VuUmVzcG9uc2U+O1xufVxuIl19
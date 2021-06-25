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
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseUserDataService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS11c2VyLWRhdGEuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJiYXNlLXVzZXItZGF0YS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBCYXNlRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9iYXNlLWRhdGEvYmFzZS1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXJyb3JEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGlhbG9ncy9lcnJvci9lcnJvci1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBCYXNlUGFzc3dvcmRSZXNldFJlcXVlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvYmFzZS11c2VyL2Jhc2UtcGFzc3dvcmQtcmVzZXQtcmVxdWVzdC5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLXVzZXIvYmFzZS11c2VyLm1vZGVsJztcbmltcG9ydCB7IElMZWF0aGVybWFuQXBwQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2FwcC5jb25maWcnO1xuaW1wb3J0IHsgVmFsaWRhdGVQYXNzd29yZFJlc2V0VG9rZW5SZXNwb25zZSB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLXVzZXIvdmFsaWRhdGUtcGFzc3dvcmQtcmVzZXQtdG9rZW4tcmVzcG9uc2UubW9kZWwnO1xuaW1wb3J0IHsgUGFzc3dvcmRSZXNldCB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLXVzZXIvcGFzc3dvcmQtcmVzZXQubW9kZWwnO1xuaW1wb3J0IHsgR2V0T3B0aW9ucyB9IGZyb20gJy4uLy4uL21vZGVscy9hcmdzL2dldC1vcHRpb25zLm1vZGVsJztcbmltcG9ydCB7IFZhbGlkYXRlVmVyaWZ5RW1haWxUb2tlblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UtdXNlci92YWxpZGF0ZS12ZXJpZnktZW1haWwtdG9rZW4tcmVzcG9uc2UubW9kZWwnO1xuLyoqXG4gKiBUaGUgYmFzZSB1c2VyIGRhdGEgc2VydmljZVxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBCYXNlVXNlckRhdGFTZXJ2aWNlIGV4dGVuZHMgQmFzZURhdGFTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBJTGVhdGhlcm1hbkFwcENvbmZpZztcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSBjb25maWcgLSBUaGUgYXBwIGNvbmZpZyBvYmplY3RcbiAgICAgKiBAcGFyYW0gZXJyb3JEaWFsb2dTZXJ2aWNlIC0gQSByZWZlcmVuY2UgdG8gdGhlIGVycm9yIGRpYWxvZyBzZXJ2aWNlXG4gICAgICogQHBhcmFtIHJvdXRlciAtIEEgcmVmZXJlbmNlIHRvIHRoZSByb3V0ZXJcbiAgICAgKiBAcGFyYW0gaHR0cENsaWVudCAtIEEgcmVmZXJlbmNlIHRvIHRoZSBIVFRQIGNsaWVudCBzZXJ2aWNlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBJTGVhdGhlcm1hbkFwcENvbmZpZywgZXJyb3JEaWFsb2dTZXJ2aWNlOiBFcnJvckRpYWxvZ1NlcnZpY2UsIHJvdXRlcjogUm91dGVyLCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KTtcbiAgICAvKipcbiAgICAgKiBBZGQgYSByb2xlIHRvIGEgdXNlclxuICAgICAqIEBwYXJhbSB1c2VySWQgLSBUaGUgdXNlcidzIElEXG4gICAgICogQHBhcmFtIHJvbGUgLSBUaGUgcm9sZSB0byBhZGQgdG8gdGhlIHVzZXJcbiAgICAgKiBAcmV0dXJucyBUaGUgdXBkYXRlZCB1c2VyXG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgX2FkZFVzZXJSb2xlPFQgZXh0ZW5kcyBCYXNlVXNlcj4odXNlcklkOiBzdHJpbmcsIHJvbGU6IHN0cmluZyk6IFByb21pc2U8VD47XG4gICAgLyoqXG4gICAgICogRGVsZXRlIGEgdXNlclxuICAgICAqIEBwYXJhbSB1c2VySWQgLSBUaGUgSUQgb2YgdGhlIHVzZXIgdG8gZGVsZXRlXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZGVsZXRlIHN1Y2NlZWRlZFxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIF9kZWxldGVVc2VyKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIGFkbWluIHVzZXJzXG4gICAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgYWRtaW4gdXNlcnNcbiAgICAgKiBAYXN5bmNzXG4gICAgICovXG4gICAgX2dldEFkbWluVXNlcnM8VCBleHRlbmRzIEJhc2VVc2VyPihvcHRpb25zPzogR2V0T3B0aW9ucyk6IFByb21pc2U8VFtdPjtcbiAgICAvKipcbiAgICAgKiBHZXQgYSB1c2VyXG4gICAgICogQHBhcmFtIGlkIC0gVGhlIElEIG9mIHRoZSB1c2VyIHRvIGdldFxuICAgICAqIEByZXR1cm5zIEEgdXNlciBvYmplY3RcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBfZ2V0VXNlcjxUIGV4dGVuZHMgQmFzZVVzZXI+KGlkOiBzdHJpbmcpOiBQcm9taXNlPFQ+O1xuICAgIF9nZXRCYXNpY1VzZXJzPFQgZXh0ZW5kcyBCYXNlVXNlcj4ob3B0aW9ucz86IEdldE9wdGlvbnMpOiBQcm9taXNlPFRbXT47XG4gICAgLyoqXG4gICAgICogR2V0IGFsbCB1c2Vyc1xuICAgICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHVzZXJzXG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgX2dldFVzZXJzPFQgZXh0ZW5kcyBCYXNlVXNlcj4ob3B0aW9ucz86IEdldE9wdGlvbnMpOiBQcm9taXNlPFRbXT47XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgcm9sZSBmcm9tIGEgdXNlclxuICAgICAqIEBwYXJhbSB1c2VySWQgLSBUaGUgSUQgb2YgdGhlIHVzZXJcbiAgICAgKiBAcGFyYW0gcm9sZSAtIFRoZSByb2xlIHRvIHJlbW92ZSBmcm9tIHRoZSB1c2VyXG4gICAgICovXG4gICAgX3JlbW92ZVVzZXJSb2xlPFQgZXh0ZW5kcyBCYXNlVXNlcj4odXNlcklkOiBzdHJpbmcsIHJvbGU6IHN0cmluZyk6IFByb21pc2U8VD47XG4gICAgLyoqXG4gICAgICogUmVxdWVzdCBhIHBhc3N3b3JkIHJlc2V0XG4gICAgICogQHBhcmFtIHBhc3N3b3JkUmVzZXRSZXF1ZXN0IC0gQSBwYXNzd29yZCByZXNldCByZXF1ZXN0IG9iamVjdFxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkXG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgX3JlcXVlc3RQYXNzd29yZFJlc2V0KHBhc3N3b3JkUmVzZXRSZXF1ZXN0OiBCYXNlUGFzc3dvcmRSZXNldFJlcXVlc3QpOiBQcm9taXNlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJlcXVlc3QgYSBwYXNzd29yZCByZXNldCB0b2tlbi4gVGhpcyBtZXRob2QgaXMgb25seSB1c2VkIGZvciB0ZXN0aW5nLlxuICAgICAqIEBwYXJhbSBwYXNzd29yZFJlc2V0UmVxdWVzdCAtIEEgcGFzc3dvcmQgcmVzZXQgcmVxdWVzdCBvYmplY3RcbiAgICAgKiBAcmV0dXJucyBBIHBhc3N3b3JkIHJlc2V0IHRva2VuXG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgX3JlcXVlc3RQYXNzd29yZFJlc2V0VG9rZW4ocGFzc3dvcmRSZXNldFJlcXVlc3Q6IEJhc2VQYXNzd29yZFJlc2V0UmVxdWVzdCk6IFByb21pc2U8c3RyaW5nPjtcbiAgICAvKipcbiAgICAgKiBSZXNlbmQgVmVyaWZpY2F0aW9uIGVtYWlsXG4gICAgICogQHBhcmFtIHZlcmlmeUVtYWlsIC0gQSB2ZXJpZmljYXRpb24gZW1haWxcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2ZXJpZmljYXRpb24gZW1haWwgaXMgc2VudFxuICAgICAqL1xuICAgIF9yZXNlbmRWZXJpZmljYXRpb25FbWFpbCh2ZXJpZmljYXRpb25FbWFpbDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXNldCBhIHBhc3N3b3JkXG4gICAgICogQHBhcmFtIHBhc3N3b3JkUmVzZXQgLSBBIHBhc3N3b3JkIHJlc2V0IG9iamVjdFxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHBhc3N3b3JkIHdhcyBzdWNjZXNzZnVsbHkgcmVzZXRcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBfcmVzZXRQYXNzd29yZChwYXNzd29yZFJlc2V0OiBQYXNzd29yZFJlc2V0KTogUHJvbWlzZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgYSB1c2VyXG4gICAgICogQHBhcmFtIHVzZXIgLSBUaGUgdXNlciB0byB1cGRhdGVcbiAgICAgKiBAcmV0dXJucyBUaGUgdXBkYXRlZCB1c2VyXG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgX3VwZGF0ZVVzZXI8VCBleHRlbmRzIEJhc2VVc2VyPih1c2VyOiBUKTogUHJvbWlzZTxUPjtcbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBhIHBhc3N3b3JkIHJlc2V0IHRva2VuXG4gICAgICogQHBhcmFtIHBhc3N3b3JkUmVzZXRUb2tlbiAtIFRoZSBwYXNzd29yZCByZXNldCB0b2tlbiB0byB2YWxpZGF0ZVxuICAgICAqIEByZXR1cm5zIEEgdmFsaWRhdGUgcGFzc3dvcmQgcmVzZXQgdG9rZW4gcmVzcG9uc2VcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBfdmFsaWRhdGVQYXNzd29yZFJlc2V0VG9rZW4ocGFzc3dvcmRSZXNldFRva2VuOiBzdHJpbmcpOiBQcm9taXNlPFZhbGlkYXRlUGFzc3dvcmRSZXNldFRva2VuUmVzcG9uc2U+O1xuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIGFuIGVtYWlsIGFkZHJlc3NcbiAgICAgKiBAcGFyYW0gZW1haWwgLSBUaGUgZW1haWwgYWRkcmVzcyB0byB2YWxpZGF0ZVxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGVtYWlsIGFkZHJlc3MgaXMgbm90IGN1cnJlbnRseSBpbiB0aGUgdXNlciB0YWJsZVxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIF92YWxpZGF0ZUVtYWlsKGVtYWlsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIF92YWxpZGF0ZVZlcmlmeUVtYWlsVG9rZW4odmVyaWZ5RW1haWxUb2tlbjogc3RyaW5nKTogUHJvbWlzZTxWYWxpZGF0ZVZlcmlmeUVtYWlsVG9rZW5SZXNwb25zZT47XG59XG4iXX0=
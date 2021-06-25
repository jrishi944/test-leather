import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BaseUserDataService } from './base-user-data.service';
import { Router } from '@angular/router';
import { BaseService } from '../base-service/base.service';
import { AuthenticationService } from '../authentication/authentication.service';
import { ConfirmDialogService } from '../../dialogs/confirm/confirm-dialog.service';
import { DialogButton } from '../../enums/dialog-button.enum';
import { BasePasswordResetRequest } from '../../models/base-user/base-password-reset-request.model';
import { Secure } from '../../enums/secure.enum';
import { PasswordReset } from '../../models/base-user/password-reset.model';
import * as i0 from "@angular/core";
import * as i1 from "../authentication/authentication.service";
import * as i2 from "./base-user-data.service";
import * as i3 from "../../dialogs/confirm/confirm-dialog.service";
import * as i4 from "@angular/router";
/**
 * The base user service
 */
let BaseUserService = class BaseUserService extends BaseService {
    /**
     * Constructor
     * @param authenticationService - A reference to the authentication service
     * @param dataService - A reference to the user data service
     * @param confirmDialogService - A reference to the confirm dialog service
     * @param router - A reference to the router
     */
    constructor(authenticationService, dataService, confirmDialogService, router) {
        super();
        this.authenticationService = authenticationService;
        this.dataService = dataService;
        this.confirmDialogService = confirmDialogService;
        this.router = router;
    }
    // **********************
    // * Public properties
    // **********************
    /** Get accessor for the user ID */
    get userId() {
        if (!this._userId) {
            this._userId = this.authenticationService.getUserId();
        }
        return this._userId;
    }
    /** Get accessor for user role */
    get userRole() {
        if (!this._primaryUserRole) {
            this._primaryUserRole = this.authenticationService.getPrimaryUserRole();
        }
        return this._primaryUserRole;
    }
    // **********************
    // * Public methods
    // **********************
    /**
     * Delete a user
     * @param userId - The ID of the user to delete
     * @returns True if the delete succeeded
     * @async
     */
    _deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const confirmStatus = yield this.confirmDialogService.openConfirmDialog('Delete User', 'Do you want to delete the selected user? This action cannot be undone.');
            if (confirmStatus.button === DialogButton.Cancel) {
                return false;
            }
            const result = yield this.dataService._deleteUser(userId);
            return result;
        });
    }
    /**
     * Get all admin users
     * @returns An array of admin users
     * @async
     */
    _getAdminUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.dataService._getAdminUsers();
            return users;
        });
    }
    /**
     * Get all basic users
     * @returns An array of basic (non-admin) users
     * @async
     */
    _getBasicUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.dataService._getBasicUsers();
            return users;
        });
    }
    /**
     * Get the logged in user
     * @returns The user object
     * @async
     */
    _getCurrentUser() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.userId) {
                return null;
            }
            const id = this.userId;
            const user = yield this.dataService._getUser(id);
            return user;
        });
    }
    /**
     * Get all users
     * @returns An array of users
     * @async
     */
    _getUsers(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.dataService._getUsers(options);
            return users;
        });
    }
    /**
     * Get the user's primary role
     * @returns The user's primary role
     * @async
     */
    _getPrimaryUserRole() {
        return this.authenticationService.getPrimaryUserRole();
    }
    /**
     * Get the user
     * @param userId - ID of the user to get
     * @returns The user object
     * @async
     */
    _getUser(userID) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.dataService._getUser(userID);
            return user;
        });
    }
    /**
     * Login a user
     * @param user - The login request
     * @returns True if the login succeeded
     * @async
     */
    _loginUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const authenticationDetails = yield this.authenticationService.authenticate(user);
            if (authenticationDetails.authenticated === true) {
                this._userId = this.authenticationService.getUserId();
                this._primaryUserRole = this.authenticationService.getPrimaryUserRole();
            }
            return authenticationDetails;
        });
    }
    /**
     * Logout the user
     * @param redirectRoute - The route to redirect to after logging out
     */
    _logoutUser(redirectRoute = '') {
        this._userId = null;
        this.authenticationService.logoutUser();
        if (redirectRoute) {
            this.router.navigate([redirectRoute]);
        }
    }
    /**
     * Register a new user
     * @param newUser - The new user request object
     * @param secure - An enum indicating whether the API endpoint is secure
     * @returs The new user
     * @async
     */
    _registerUser(newUser, secure = Secure.false) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.authenticationService.registerUser(newUser, secure);
            // if (user) {
            //   this._userId = this.authenticationService.getUserId();
            //   this._primaryUserRole = this.authenticationService.getPrimaryUserRole();
            // }
            return user;
        });
    }
    /**
     * Request a password reset
     * @param email - The email address of the user requesting the password reset
     * @returns true if the request succeeded
     * @async
     */
    _requestPasswordReset(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const passwordResetRequest = new BasePasswordResetRequest(email);
            const result = yield this.dataService._requestPasswordReset(passwordResetRequest);
            return result;
        });
    }
    /**
     * Request a password reset token. This method is only used for testing.
     * @param email - The email address of the user requesting the password reset
     * @returns The password reset token
     * @async
     */
    _requestPasswordResetToken(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const passwordResetRequest = new BasePasswordResetRequest(email);
            const result = yield this.dataService._requestPasswordResetToken(passwordResetRequest);
            return result;
        });
    }
    _resendVerificationEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.dataService._resendVerificationEmail(email);
        });
    }
    /**
     * Reset a user password
     * @param token - The password reset token
     * @param userId - The ID of the user
     * @param newPassword - The user's new password
     * @returns True if the password reset succeeded
     * @async
     */
    _resetPassword(token, userId, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const resetRequest = new PasswordReset(token, userId, newPassword);
            const result = this.dataService._resetPassword(resetRequest);
            return result;
        });
    }
    /**
     * Update a user
     * @param user - The user to update
     * @returns The updated user
     * @async
     */
    _updateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.dataService._updateUser(user);
            return result;
        });
    }
    /**
     * Validate a password reset token
     * @param passwordResetToken - The password reset token
     * @returns A validate password reset token response object
     * @async
     */
    _validatePasswordResetToken(passwordResetToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.dataService._validatePasswordResetToken(passwordResetToken);
            return result;
        });
    }
    /**
     * Validate a verify email token
     * @param verifyEmailToken - The verify email token
     * @returns A validate verify email token response object
     */
    _validateVerifyEmailToken(verifyEmailToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.dataService._validateVerifyEmailToken(verifyEmailToken);
            return result;
        });
    }
};
BaseUserService.ctorParameters = () => [
    { type: AuthenticationService },
    { type: BaseUserDataService },
    { type: ConfirmDialogService },
    { type: Router }
];
BaseUserService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BaseUserService_Factory() { return new BaseUserService(i0.ɵɵinject(i1.AuthenticationService), i0.ɵɵinject(i2.BaseUserDataService), i0.ɵɵinject(i3.ConfirmDialogService), i0.ɵɵinject(i4.Router)); }, token: BaseUserService, providedIn: "root" });
BaseUserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], BaseUserService);
export { BaseUserService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS11c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9iYXNlLXVzZXIvYmFzZS11c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFHcEcsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7O0FBSzVFOztHQUVHO0FBSUgsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZ0IsU0FBUSxXQUFXO0lBK0I1Qzs7Ozs7O09BTUc7SUFDSCxZQUNjLHFCQUE0QyxFQUM1QyxXQUFnQyxFQUNoQyxvQkFBMEMsRUFDMUMsTUFBYztRQUV4QixLQUFLLEVBQUUsQ0FBQztRQUxFLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsZ0JBQVcsR0FBWCxXQUFXLENBQXFCO1FBQ2hDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUc1QixDQUFDO0lBNUNELHlCQUF5QjtJQUN6Qixz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QU07OztBQTFDbkIsZUFBZTtJQUgzQixVQUFVLENBQUM7UUFDUixVQUFVLEVBQUUsTUFBTTtLQUNyQixDQUFDO0dBQ1csZUFBZSxDQW1SM0I7U0FuUlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VVc2VyRGF0YVNlcnZpY2UgfSBmcm9tICcuL2Jhc2UtdXNlci1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4vYmFzZS1zZXJ2aWNlL2Jhc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpcm1EaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGlhbG9ncy9jb25maXJtL2NvbmZpcm0tZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGlhbG9nQnV0dG9uIH0gZnJvbSAnLi4vLi4vZW51bXMvZGlhbG9nLWJ1dHRvbi5lbnVtJztcbmltcG9ydCB7IExvZ2luUmVxdWVzdCB9IGZyb20gJy4uLy4uL21vZGVscy9hdXRoZW50aWNhdGlvbi9sb2dpbi1yZXF1ZXN0Lm1vZGVsJztcbmltcG9ydCB7IEJhc2VVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UtdXNlci9iYXNlLXVzZXIubW9kZWwnO1xuaW1wb3J0IHsgQmFzZVBhc3N3b3JkUmVzZXRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UtdXNlci9iYXNlLXBhc3N3b3JkLXJlc2V0LXJlcXVlc3QubW9kZWwnO1xuaW1wb3J0IHsgQmFzZU5ld1VzZXJSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UtdXNlci9iYXNlLW5ldy11c2VyLXJlcXVlc3QubW9kZWwnO1xuaW1wb3J0IHsgVmFsaWRhdGVQYXNzd29yZFJlc2V0VG9rZW5SZXNwb25zZSB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLXVzZXIvdmFsaWRhdGUtcGFzc3dvcmQtcmVzZXQtdG9rZW4tcmVzcG9uc2UubW9kZWwnO1xuaW1wb3J0IHsgU2VjdXJlIH0gZnJvbSAnLi4vLi4vZW51bXMvc2VjdXJlLmVudW0nO1xuaW1wb3J0IHsgUGFzc3dvcmRSZXNldCB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLXVzZXIvcGFzc3dvcmQtcmVzZXQubW9kZWwnO1xuaW1wb3J0IHsgR2V0T3B0aW9ucyB9IGZyb20gJy4uLy4uL21vZGVscy9hcmdzL2dldC1vcHRpb25zLm1vZGVsJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uRGV0YWlscyB9IGZyb20gJy4uLy4uL21vZGVscy9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi1kZXRhaWxzLm1vZGVsJztcbmltcG9ydCB7IFZhbGlkYXRlVmVyaWZ5RW1haWxUb2tlblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UtdXNlci92YWxpZGF0ZS12ZXJpZnktZW1haWwtdG9rZW4tcmVzcG9uc2UubW9kZWwnO1xuXG4vKipcbiAqIFRoZSBiYXNlIHVzZXIgc2VydmljZVxuICovXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJhc2VVc2VyU2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlIHtcbiAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqXG4gICAgLy8gKiBQdWJsaWMgcHJvcGVydGllc1xuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKipcblxuICAgIC8qKiBHZXQgYWNjZXNzb3IgZm9yIHRoZSB1c2VyIElEICovXG4gICAgcHVibGljIGdldCB1c2VySWQoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF0aGlzLl91c2VySWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZXJJZCA9IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldFVzZXJJZCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VySWQ7XG4gICAgfVxuXG4gICAgLyoqIEdldCBhY2Nlc3NvciBmb3IgdXNlciByb2xlICovXG4gICAgcHVibGljIGdldCB1c2VyUm9sZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXRoaXMuX3ByaW1hcnlVc2VyUm9sZSkge1xuICAgICAgICAgICAgdGhpcy5fcHJpbWFyeVVzZXJSb2xlID0gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0UHJpbWFyeVVzZXJSb2xlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaW1hcnlVc2VyUm9sZTtcbiAgICB9XG5cbiAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqXG4gICAgLy8gKiBQcm90ZWN0ZWQgcHJvcGVydGllc1xuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKipcblxuICAgIC8qKiBUaGUgdXNlciBJRCAqL1xuICAgIHByb3RlY3RlZCBfdXNlcklkOiBzdHJpbmc7XG5cbiAgICAvKiogVGhlIHVzZXIncyBwcmltYXJ5IHJvbGUgKi9cbiAgICBwcm90ZWN0ZWQgX3ByaW1hcnlVc2VyUm9sZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0gYXV0aGVudGljYXRpb25TZXJ2aWNlIC0gQSByZWZlcmVuY2UgdG8gdGhlIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2VcbiAgICAgKiBAcGFyYW0gZGF0YVNlcnZpY2UgLSBBIHJlZmVyZW5jZSB0byB0aGUgdXNlciBkYXRhIHNlcnZpY2VcbiAgICAgKiBAcGFyYW0gY29uZmlybURpYWxvZ1NlcnZpY2UgLSBBIHJlZmVyZW5jZSB0byB0aGUgY29uZmlybSBkaWFsb2cgc2VydmljZVxuICAgICAqIEBwYXJhbSByb3V0ZXIgLSBBIHJlZmVyZW5jZSB0byB0aGUgcm91dGVyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGRhdGFTZXJ2aWNlOiBCYXNlVXNlckRhdGFTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlybURpYWxvZ1NlcnZpY2U6IENvbmZpcm1EaWFsb2dTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqXG4gICAgLy8gKiBQdWJsaWMgbWV0aG9kc1xuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKipcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhIHVzZXJcbiAgICAgKiBAcGFyYW0gdXNlcklkIC0gVGhlIElEIG9mIHRoZSB1c2VyIHRvIGRlbGV0ZVxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGRlbGV0ZSBzdWNjZWVkZWRcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgX2RlbGV0ZVVzZXIodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc3QgY29uZmlybVN0YXR1cyA9IGF3YWl0IHRoaXMuY29uZmlybURpYWxvZ1NlcnZpY2Uub3BlbkNvbmZpcm1EaWFsb2coXG4gICAgICAgICAgICAnRGVsZXRlIFVzZXInLFxuICAgICAgICAgICAgJ0RvIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgc2VsZWN0ZWQgdXNlcj8gVGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZS4nXG4gICAgICAgICk7XG4gICAgICAgIGlmIChjb25maXJtU3RhdHVzLmJ1dHRvbiA9PT0gRGlhbG9nQnV0dG9uLkNhbmNlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZGF0YVNlcnZpY2UuX2RlbGV0ZVVzZXIodXNlcklkKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIGFkbWluIHVzZXJzXG4gICAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgYWRtaW4gdXNlcnNcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgX2dldEFkbWluVXNlcnM8VCBleHRlbmRzIEJhc2VVc2VyPigpOiBQcm9taXNlPFRbXT4ge1xuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IHRoaXMuZGF0YVNlcnZpY2UuX2dldEFkbWluVXNlcnM8VD4oKTtcbiAgICAgICAgcmV0dXJuIHVzZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgYmFzaWMgdXNlcnNcbiAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiBiYXNpYyAobm9uLWFkbWluKSB1c2Vyc1xuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfZ2V0QmFzaWNVc2VyczxUIGV4dGVuZHMgQmFzZVVzZXI+KCk6IFByb21pc2U8VFtdPiB7XG4gICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgdGhpcy5kYXRhU2VydmljZS5fZ2V0QmFzaWNVc2VyczxUPigpO1xuICAgICAgICByZXR1cm4gdXNlcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBsb2dnZWQgaW4gdXNlclxuICAgICAqIEByZXR1cm5zIFRoZSB1c2VyIG9iamVjdFxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfZ2V0Q3VycmVudFVzZXI8VCBleHRlbmRzIEJhc2VVc2VyPigpOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgaWYgKCF0aGlzLnVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLnVzZXJJZDtcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMuZGF0YVNlcnZpY2UuX2dldFVzZXI8VD4oaWQpO1xuICAgICAgICByZXR1cm4gdXNlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIHVzZXJzXG4gICAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgdXNlcnNcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgX2dldFVzZXJzPFQgZXh0ZW5kcyBCYXNlVXNlcj4oXG4gICAgICAgIG9wdGlvbnM6IEdldE9wdGlvbnNcbiAgICApOiBQcm9taXNlPFRbXT4ge1xuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IHRoaXMuZGF0YVNlcnZpY2UuX2dldFVzZXJzPFQ+KG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdXNlcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB1c2VyJ3MgcHJpbWFyeSByb2xlXG4gICAgICogQHJldHVybnMgVGhlIHVzZXIncyBwcmltYXJ5IHJvbGVcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwdWJsaWMgX2dldFByaW1hcnlVc2VyUm9sZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0UHJpbWFyeVVzZXJSb2xlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB1c2VyXG4gICAgICogQHBhcmFtIHVzZXJJZCAtIElEIG9mIHRoZSB1c2VyIHRvIGdldFxuICAgICAqIEByZXR1cm5zIFRoZSB1c2VyIG9iamVjdFxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfZ2V0VXNlcjxUIGV4dGVuZHMgQmFzZVVzZXI+KHVzZXJJRDogc3RyaW5nKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLmRhdGFTZXJ2aWNlLl9nZXRVc2VyPFQ+KHVzZXJJRCk7XG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZ2luIGEgdXNlclxuICAgICAqIEBwYXJhbSB1c2VyIC0gVGhlIGxvZ2luIHJlcXVlc3RcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBsb2dpbiBzdWNjZWVkZWRcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgX2xvZ2luVXNlcih1c2VyOiBMb2dpblJlcXVlc3QpOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uRGV0YWlscz4ge1xuICAgICAgICBjb25zdCBhdXRoZW50aWNhdGlvbkRldGFpbHMgPSBhd2FpdCB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5hdXRoZW50aWNhdGUodXNlcik7XG4gICAgICAgIGlmIChhdXRoZW50aWNhdGlvbkRldGFpbHMuYXV0aGVudGljYXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdXNlcklkID0gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0VXNlcklkKCk7XG4gICAgICAgICAgICB0aGlzLl9wcmltYXJ5VXNlclJvbGUgPSB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRQcmltYXJ5VXNlclJvbGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXV0aGVudGljYXRpb25EZXRhaWxzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZ291dCB0aGUgdXNlclxuICAgICAqIEBwYXJhbSByZWRpcmVjdFJvdXRlIC0gVGhlIHJvdXRlIHRvIHJlZGlyZWN0IHRvIGFmdGVyIGxvZ2dpbmcgb3V0XG4gICAgICovXG4gICAgcHVibGljIF9sb2dvdXRVc2VyKHJlZGlyZWN0Um91dGU6IHN0cmluZyA9ICcnKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3VzZXJJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ291dFVzZXIoKTtcbiAgICAgICAgaWYgKHJlZGlyZWN0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtyZWRpcmVjdFJvdXRlXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhIG5ldyB1c2VyXG4gICAgICogQHBhcmFtIG5ld1VzZXIgLSBUaGUgbmV3IHVzZXIgcmVxdWVzdCBvYmplY3RcbiAgICAgKiBAcGFyYW0gc2VjdXJlIC0gQW4gZW51bSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIEFQSSBlbmRwb2ludCBpcyBzZWN1cmVcbiAgICAgKiBAcmV0dXJzIFRoZSBuZXcgdXNlclxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfcmVnaXN0ZXJVc2VyPFQgZXh0ZW5kcyBCYXNlTmV3VXNlclJlcXVlc3QsIFUgZXh0ZW5kcyBCYXNlVXNlcj4oXG4gICAgICAgIG5ld1VzZXI6IFQsXG4gICAgICAgIHNlY3VyZTogU2VjdXJlID0gU2VjdXJlLmZhbHNlXG4gICAgKTogUHJvbWlzZTxVPiB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5yZWdpc3RlclVzZXI8VCwgVT4oXG4gICAgICAgICAgICBuZXdVc2VyLFxuICAgICAgICAgICAgc2VjdXJlXG4gICAgICAgICk7XG4gICAgICAgIC8vIGlmICh1c2VyKSB7XG4gICAgICAgIC8vICAgdGhpcy5fdXNlcklkID0gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0VXNlcklkKCk7XG4gICAgICAgIC8vICAgdGhpcy5fcHJpbWFyeVVzZXJSb2xlID0gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0UHJpbWFyeVVzZXJSb2xlKCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVxdWVzdCBhIHBhc3N3b3JkIHJlc2V0XG4gICAgICogQHBhcmFtIGVtYWlsIC0gVGhlIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIHVzZXIgcmVxdWVzdGluZyB0aGUgcGFzc3dvcmQgcmVzZXRcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZFxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfcmVxdWVzdFBhc3N3b3JkUmVzZXQoZW1haWw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBjb25zdCBwYXNzd29yZFJlc2V0UmVxdWVzdCA9IG5ldyBCYXNlUGFzc3dvcmRSZXNldFJlcXVlc3QoZW1haWwpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmRhdGFTZXJ2aWNlLl9yZXF1ZXN0UGFzc3dvcmRSZXNldChcbiAgICAgICAgICAgIHBhc3N3b3JkUmVzZXRSZXF1ZXN0XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVxdWVzdCBhIHBhc3N3b3JkIHJlc2V0IHRva2VuLiBUaGlzIG1ldGhvZCBpcyBvbmx5IHVzZWQgZm9yIHRlc3RpbmcuXG4gICAgICogQHBhcmFtIGVtYWlsIC0gVGhlIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIHVzZXIgcmVxdWVzdGluZyB0aGUgcGFzc3dvcmQgcmVzZXRcbiAgICAgKiBAcmV0dXJucyBUaGUgcGFzc3dvcmQgcmVzZXQgdG9rZW5cbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgX3JlcXVlc3RQYXNzd29yZFJlc2V0VG9rZW4oZW1haWw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkUmVzZXRSZXF1ZXN0ID0gbmV3IEJhc2VQYXNzd29yZFJlc2V0UmVxdWVzdChlbWFpbCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZGF0YVNlcnZpY2UuX3JlcXVlc3RQYXNzd29yZFJlc2V0VG9rZW4oXG4gICAgICAgICAgICBwYXNzd29yZFJlc2V0UmVxdWVzdFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBfcmVzZW5kVmVyaWZpY2F0aW9uRW1haWwoZW1haWw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5kYXRhU2VydmljZS5fcmVzZW5kVmVyaWZpY2F0aW9uRW1haWwoXG4gICAgICAgICAgICBlbWFpbFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IGEgdXNlciBwYXNzd29yZFxuICAgICAqIEBwYXJhbSB0b2tlbiAtIFRoZSBwYXNzd29yZCByZXNldCB0b2tlblxuICAgICAqIEBwYXJhbSB1c2VySWQgLSBUaGUgSUQgb2YgdGhlIHVzZXJcbiAgICAgKiBAcGFyYW0gbmV3UGFzc3dvcmQgLSBUaGUgdXNlcidzIG5ldyBwYXNzd29yZFxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHBhc3N3b3JkIHJlc2V0IHN1Y2NlZWRlZFxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfcmVzZXRQYXNzd29yZChcbiAgICAgICAgdG9rZW46IHN0cmluZyxcbiAgICAgICAgdXNlcklkOiBzdHJpbmcsXG4gICAgICAgIG5ld1Bhc3N3b3JkOiBzdHJpbmdcbiAgICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc3QgcmVzZXRSZXF1ZXN0ID0gbmV3IFBhc3N3b3JkUmVzZXQodG9rZW4sIHVzZXJJZCwgbmV3UGFzc3dvcmQpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmRhdGFTZXJ2aWNlLl9yZXNldFBhc3N3b3JkKHJlc2V0UmVxdWVzdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGEgdXNlclxuICAgICAqIEBwYXJhbSB1c2VyIC0gVGhlIHVzZXIgdG8gdXBkYXRlXG4gICAgICogQHJldHVybnMgVGhlIHVwZGF0ZWQgdXNlclxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfdXBkYXRlVXNlcjxUIGV4dGVuZHMgQmFzZVVzZXI+KHVzZXI6IFQpOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5kYXRhU2VydmljZS5fdXBkYXRlVXNlcih1c2VyKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBhIHBhc3N3b3JkIHJlc2V0IHRva2VuXG4gICAgICogQHBhcmFtIHBhc3N3b3JkUmVzZXRUb2tlbiAtIFRoZSBwYXNzd29yZCByZXNldCB0b2tlblxuICAgICAqIEByZXR1cm5zIEEgdmFsaWRhdGUgcGFzc3dvcmQgcmVzZXQgdG9rZW4gcmVzcG9uc2Ugb2JqZWN0XG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIF92YWxpZGF0ZVBhc3N3b3JkUmVzZXRUb2tlbihcbiAgICAgICAgcGFzc3dvcmRSZXNldFRva2VuOiBzdHJpbmdcbiAgICApOiBQcm9taXNlPFZhbGlkYXRlUGFzc3dvcmRSZXNldFRva2VuUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5kYXRhU2VydmljZS5fdmFsaWRhdGVQYXNzd29yZFJlc2V0VG9rZW4oXG4gICAgICAgICAgICBwYXNzd29yZFJlc2V0VG9rZW5cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBhIHZlcmlmeSBlbWFpbCB0b2tlblxuICAgICAqIEBwYXJhbSB2ZXJpZnlFbWFpbFRva2VuIC0gVGhlIHZlcmlmeSBlbWFpbCB0b2tlblxuICAgICAqIEByZXR1cm5zIEEgdmFsaWRhdGUgdmVyaWZ5IGVtYWlsIHRva2VuIHJlc3BvbnNlIG9iamVjdFxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfdmFsaWRhdGVWZXJpZnlFbWFpbFRva2VuKFxuICAgICAgICB2ZXJpZnlFbWFpbFRva2VuOiBzdHJpbmdcbiAgICApOiBQcm9taXNlPFZhbGlkYXRlVmVyaWZ5RW1haWxUb2tlblJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZGF0YVNlcnZpY2UuX3ZhbGlkYXRlVmVyaWZ5RW1haWxUb2tlbihcbiAgICAgICAgICAgIHZlcmlmeUVtYWlsVG9rZW5cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iXX0=
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
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
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
BaseUserService.ɵfac = function BaseUserService_Factory(t) { return new (t || BaseUserService)(ɵngcc0.ɵɵinject(AuthenticationService), ɵngcc0.ɵɵinject(BaseUserDataService), ɵngcc0.ɵɵinject(ConfirmDialogService), ɵngcc0.ɵɵinject(ɵngcc1.Router)); };
BaseUserService.ctorParameters = () => [
    { type: AuthenticationService },
    { type: BaseUserDataService },
    { type: ConfirmDialogService },
    { type: Router }
];
BaseUserService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BaseUserService_Factory() { return new BaseUserService(i0.ɵɵinject(i1.AuthenticationService), i0.ɵɵinject(i2.BaseUserDataService), i0.ɵɵinject(i3.ConfirmDialogService), i0.ɵɵinject(i4.Router)); }, token: BaseUserService, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BaseUserService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: AuthenticationService }, { type: BaseUserDataService }, { type: ConfirmDialogService }, { type: ɵngcc1.Router }]; }, null); })();
export { BaseUserService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS11c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIm5nOi9sZWF0aGVybWFuLWJvb3RzdHJhcC9saWIvc2VydmljZXMvYmFzZS11c2VyL2Jhc2UtdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDcEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRzlELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBR3BHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDNUU7QUFBcUM7QUFDRjtBQUFnRDtBQUM5QjtBQUVyRDtBQUNBO0FBQ0EsR0FBRzs7O0FBSUgsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZ0IsU0FBUSxXQUFXO0FBQ2hELElBOEJJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxJQUFJLFlBQ2MscUJBQTRDLEVBQzVDLFdBQWdDLEVBQ2hDLG9CQUEwQyxFQUMxQyxNQUFjO0FBQzdCLFFBQ0ssS0FBSyxFQUFFLENBQUM7QUFDaEIsUUFOa0IsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtBQUFDLFFBQzdDLGdCQUFXLEdBQVgsV0FBVyxDQUFxQjtBQUFDLFFBQ2pDLHlCQUFvQixH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Q3RCLFFBQUksQ0FBQztBQUVKLEtBRkk7QUFDTCxJQUNJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLElBQWlCLHlCQUF5QixDQUNsQyxnQkFBd0I7QUFDN0I7QUFDVyxZQUFOLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyx5QkFBeUIsQ0FDM0QsZ0JBQWdCLENBQ25CLENBQUM7QUFDVixZQUFRLE9BQU8sTUFBTSxDQUFDO0FBQ3RCLFFBQUksQ0FBQztBQUVMLEtBRks7QUFDTCxDQUFDO3VQQUFBO0FBQ0Q7QUFBeUMsWUE3T0EscUJBQXFCO0FBQzVELFlBQTZCLG1CQUFtQjtBQUNoRCxZQUFzQyxvQkFBb0I7QUFDMUQsWUFBd0IsTUFBTTtBQUM5QjtBQUFHO0FBM0NRLGVBQWUsb0JBSDNCLFVBQVUsQ0FBQyxVQUNSLFVBQVUsRUFBRTtBQUFNLE1BQ3JCLENBQUMsSUFDVztBQUFlLENBbVIzQjs7O3VLQUNEO0FBQUMsU0FwUlksZUFBZTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZVVzZXJEYXRhU2VydmljZSB9IGZyb20gJy4vYmFzZS11c2VyLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tICcuLi9iYXNlLXNlcnZpY2UvYmFzZS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlybURpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9kaWFsb2dzL2NvbmZpcm0vY29uZmlybS1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBEaWFsb2dCdXR0b24gfSBmcm9tICcuLi8uLi9lbnVtcy9kaWFsb2ctYnV0dG9uLmVudW0nO1xuaW1wb3J0IHsgTG9naW5SZXF1ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2F1dGhlbnRpY2F0aW9uL2xvZ2luLXJlcXVlc3QubW9kZWwnO1xuaW1wb3J0IHsgQmFzZVVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvYmFzZS11c2VyL2Jhc2UtdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlUGFzc3dvcmRSZXNldFJlcXVlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvYmFzZS11c2VyL2Jhc2UtcGFzc3dvcmQtcmVzZXQtcmVxdWVzdC5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlTmV3VXNlclJlcXVlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvYmFzZS11c2VyL2Jhc2UtbmV3LXVzZXItcmVxdWVzdC5tb2RlbCc7XG5pbXBvcnQgeyBWYWxpZGF0ZVBhc3N3b3JkUmVzZXRUb2tlblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UtdXNlci92YWxpZGF0ZS1wYXNzd29yZC1yZXNldC10b2tlbi1yZXNwb25zZS5tb2RlbCc7XG5pbXBvcnQgeyBTZWN1cmUgfSBmcm9tICcuLi8uLi9lbnVtcy9zZWN1cmUuZW51bSc7XG5pbXBvcnQgeyBQYXNzd29yZFJlc2V0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UtdXNlci9wYXNzd29yZC1yZXNldC5tb2RlbCc7XG5pbXBvcnQgeyBHZXRPcHRpb25zIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FyZ3MvZ2V0LW9wdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25EZXRhaWxzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLWRldGFpbHMubW9kZWwnO1xuaW1wb3J0IHsgVmFsaWRhdGVWZXJpZnlFbWFpbFRva2VuUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYmFzZS11c2VyL3ZhbGlkYXRlLXZlcmlmeS1lbWFpbC10b2tlbi1yZXNwb25zZS5tb2RlbCc7XG5cbi8qKlxuICogVGhlIGJhc2UgdXNlciBzZXJ2aWNlXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQmFzZVVzZXJTZXJ2aWNlIGV4dGVuZHMgQmFzZVNlcnZpY2Uge1xuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKipcbiAgICAvLyAqIFB1YmxpYyBwcm9wZXJ0aWVzXG4gICAgLy8gKioqKioqKioqKioqKioqKioqKioqKlxuXG4gICAgLyoqIEdldCBhY2Nlc3NvciBmb3IgdGhlIHVzZXIgSUQgKi9cbiAgICBwdWJsaWMgZ2V0IHVzZXJJZCgpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXRoaXMuX3VzZXJJZCkge1xuICAgICAgICAgICAgdGhpcy5fdXNlcklkID0gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0VXNlcklkKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJJZDtcbiAgICB9XG5cbiAgICAvKiogR2V0IGFjY2Vzc29yIGZvciB1c2VyIHJvbGUgKi9cbiAgICBwdWJsaWMgZ2V0IHVzZXJSb2xlKCk6IHN0cmluZyB7XG4gICAgICAgIGlmICghdGhpcy5fcHJpbWFyeVVzZXJSb2xlKSB7XG4gICAgICAgICAgICB0aGlzLl9wcmltYXJ5VXNlclJvbGUgPSB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRQcmltYXJ5VXNlclJvbGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcHJpbWFyeVVzZXJSb2xlO1xuICAgIH1cblxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKipcbiAgICAvLyAqIFByb3RlY3RlZCBwcm9wZXJ0aWVzXG4gICAgLy8gKioqKioqKioqKioqKioqKioqKioqKlxuXG4gICAgLyoqIFRoZSB1c2VyIElEICovXG4gICAgcHJvdGVjdGVkIF91c2VySWQ6IHN0cmluZztcblxuICAgIC8qKiBUaGUgdXNlcidzIHByaW1hcnkgcm9sZSAqL1xuICAgIHByb3RlY3RlZCBfcHJpbWFyeVVzZXJSb2xlOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSBhdXRoZW50aWNhdGlvblNlcnZpY2UgLSBBIHJlZmVyZW5jZSB0byB0aGUgYXV0aGVudGljYXRpb24gc2VydmljZVxuICAgICAqIEBwYXJhbSBkYXRhU2VydmljZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSB1c2VyIGRhdGEgc2VydmljZVxuICAgICAqIEBwYXJhbSBjb25maXJtRGlhbG9nU2VydmljZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBjb25maXJtIGRpYWxvZyBzZXJ2aWNlXG4gICAgICogQHBhcmFtIHJvdXRlciAtIEEgcmVmZXJlbmNlIHRvIHRoZSByb3V0ZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgZGF0YVNlcnZpY2U6IEJhc2VVc2VyRGF0YVNlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCBjb25maXJtRGlhbG9nU2VydmljZTogQ29uZmlybURpYWxvZ1NlcnZpY2UsXG4gICAgICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlclxuICAgICkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKipcbiAgICAvLyAqIFB1YmxpYyBtZXRob2RzXG4gICAgLy8gKioqKioqKioqKioqKioqKioqKioqKlxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGEgdXNlclxuICAgICAqIEBwYXJhbSB1c2VySWQgLSBUaGUgSUQgb2YgdGhlIHVzZXIgdG8gZGVsZXRlXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZGVsZXRlIHN1Y2NlZWRlZFxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfZGVsZXRlVXNlcih1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBjb25zdCBjb25maXJtU3RhdHVzID0gYXdhaXQgdGhpcy5jb25maXJtRGlhbG9nU2VydmljZS5vcGVuQ29uZmlybURpYWxvZyhcbiAgICAgICAgICAgICdEZWxldGUgVXNlcicsXG4gICAgICAgICAgICAnRG8geW91IHdhbnQgdG8gZGVsZXRlIHRoZSBzZWxlY3RlZCB1c2VyPyBUaGlzIGFjdGlvbiBjYW5ub3QgYmUgdW5kb25lLidcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGNvbmZpcm1TdGF0dXMuYnV0dG9uID09PSBEaWFsb2dCdXR0b24uQ2FuY2VsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5kYXRhU2VydmljZS5fZGVsZXRlVXNlcih1c2VySWQpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgYWRtaW4gdXNlcnNcbiAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiBhZG1pbiB1c2Vyc1xuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfZ2V0QWRtaW5Vc2VyczxUIGV4dGVuZHMgQmFzZVVzZXI+KCk6IFByb21pc2U8VFtdPiB7XG4gICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgdGhpcy5kYXRhU2VydmljZS5fZ2V0QWRtaW5Vc2VyczxUPigpO1xuICAgICAgICByZXR1cm4gdXNlcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBiYXNpYyB1c2Vyc1xuICAgICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIGJhc2ljIChub24tYWRtaW4pIHVzZXJzXG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIF9nZXRCYXNpY1VzZXJzPFQgZXh0ZW5kcyBCYXNlVXNlcj4oKTogUHJvbWlzZTxUW10+IHtcbiAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCB0aGlzLmRhdGFTZXJ2aWNlLl9nZXRCYXNpY1VzZXJzPFQ+KCk7XG4gICAgICAgIHJldHVybiB1c2VycztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGxvZ2dlZCBpbiB1c2VyXG4gICAgICogQHJldHVybnMgVGhlIHVzZXIgb2JqZWN0XG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIF9nZXRDdXJyZW50VXNlcjxUIGV4dGVuZHMgQmFzZVVzZXI+KCk6IFByb21pc2U8VD4ge1xuICAgICAgICBpZiAoIXRoaXMudXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpZCA9IHRoaXMudXNlcklkO1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5kYXRhU2VydmljZS5fZ2V0VXNlcjxUPihpZCk7XG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgdXNlcnNcbiAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiB1c2Vyc1xuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfZ2V0VXNlcnM8VCBleHRlbmRzIEJhc2VVc2VyPihcbiAgICAgICAgb3B0aW9uczogR2V0T3B0aW9uc1xuICAgICk6IFByb21pc2U8VFtdPiB7XG4gICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgdGhpcy5kYXRhU2VydmljZS5fZ2V0VXNlcnM8VD4ob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB1c2VycztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHVzZXIncyBwcmltYXJ5IHJvbGVcbiAgICAgKiBAcmV0dXJucyBUaGUgdXNlcidzIHByaW1hcnkgcm9sZVxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBfZ2V0UHJpbWFyeVVzZXJSb2xlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRQcmltYXJ5VXNlclJvbGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHVzZXJcbiAgICAgKiBAcGFyYW0gdXNlcklkIC0gSUQgb2YgdGhlIHVzZXIgdG8gZ2V0XG4gICAgICogQHJldHVybnMgVGhlIHVzZXIgb2JqZWN0XG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIF9nZXRVc2VyPFQgZXh0ZW5kcyBCYXNlVXNlcj4odXNlcklEOiBzdHJpbmcpOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMuZGF0YVNlcnZpY2UuX2dldFVzZXI8VD4odXNlcklEKTtcbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9naW4gYSB1c2VyXG4gICAgICogQHBhcmFtIHVzZXIgLSBUaGUgbG9naW4gcmVxdWVzdFxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGxvZ2luIHN1Y2NlZWRlZFxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfbG9naW5Vc2VyKHVzZXI6IExvZ2luUmVxdWVzdCk6IFByb21pc2U8QXV0aGVudGljYXRpb25EZXRhaWxzPiB7XG4gICAgICAgIGNvbnN0IGF1dGhlbnRpY2F0aW9uRGV0YWlscyA9IGF3YWl0IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmF1dGhlbnRpY2F0ZSh1c2VyKTtcbiAgICAgICAgaWYgKGF1dGhlbnRpY2F0aW9uRGV0YWlscy5hdXRoZW50aWNhdGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLl91c2VySWQgPSB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRVc2VySWQoKTtcbiAgICAgICAgICAgIHRoaXMuX3ByaW1hcnlVc2VyUm9sZSA9IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldFByaW1hcnlVc2VyUm9sZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhdXRoZW50aWNhdGlvbkRldGFpbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9nb3V0IHRoZSB1c2VyXG4gICAgICogQHBhcmFtIHJlZGlyZWN0Um91dGUgLSBUaGUgcm91dGUgdG8gcmVkaXJlY3QgdG8gYWZ0ZXIgbG9nZ2luZyBvdXRcbiAgICAgKi9cbiAgICBwdWJsaWMgX2xvZ291dFVzZXIocmVkaXJlY3RSb3V0ZTogc3RyaW5nID0gJycpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdXNlcklkID0gbnVsbDtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UubG9nb3V0VXNlcigpO1xuICAgICAgICBpZiAocmVkaXJlY3RSb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3JlZGlyZWN0Um91dGVdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGEgbmV3IHVzZXJcbiAgICAgKiBAcGFyYW0gbmV3VXNlciAtIFRoZSBuZXcgdXNlciByZXF1ZXN0IG9iamVjdFxuICAgICAqIEBwYXJhbSBzZWN1cmUgLSBBbiBlbnVtIGluZGljYXRpbmcgd2hldGhlciB0aGUgQVBJIGVuZHBvaW50IGlzIHNlY3VyZVxuICAgICAqIEByZXR1cnMgVGhlIG5ldyB1c2VyXG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIF9yZWdpc3RlclVzZXI8VCBleHRlbmRzIEJhc2VOZXdVc2VyUmVxdWVzdCwgVSBleHRlbmRzIEJhc2VVc2VyPihcbiAgICAgICAgbmV3VXNlcjogVCxcbiAgICAgICAgc2VjdXJlOiBTZWN1cmUgPSBTZWN1cmUuZmFsc2VcbiAgICApOiBQcm9taXNlPFU+IHtcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLnJlZ2lzdGVyVXNlcjxULCBVPihcbiAgICAgICAgICAgIG5ld1VzZXIsXG4gICAgICAgICAgICBzZWN1cmVcbiAgICAgICAgKTtcbiAgICAgICAgLy8gaWYgKHVzZXIpIHtcbiAgICAgICAgLy8gICB0aGlzLl91c2VySWQgPSB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRVc2VySWQoKTtcbiAgICAgICAgLy8gICB0aGlzLl9wcmltYXJ5VXNlclJvbGUgPSB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRQcmltYXJ5VXNlclJvbGUoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4gdXNlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IGEgcGFzc3dvcmQgcmVzZXRcbiAgICAgKiBAcGFyYW0gZW1haWwgLSBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgdXNlciByZXF1ZXN0aW5nIHRoZSBwYXNzd29yZCByZXNldFxuICAgICAqIEByZXR1cm5zIHRydWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkXG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIF9yZXF1ZXN0UGFzc3dvcmRSZXNldChlbWFpbDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkUmVzZXRSZXF1ZXN0ID0gbmV3IEJhc2VQYXNzd29yZFJlc2V0UmVxdWVzdChlbWFpbCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZGF0YVNlcnZpY2UuX3JlcXVlc3RQYXNzd29yZFJlc2V0KFxuICAgICAgICAgICAgcGFzc3dvcmRSZXNldFJlcXVlc3RcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IGEgcGFzc3dvcmQgcmVzZXQgdG9rZW4uIFRoaXMgbWV0aG9kIGlzIG9ubHkgdXNlZCBmb3IgdGVzdGluZy5cbiAgICAgKiBAcGFyYW0gZW1haWwgLSBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgdXNlciByZXF1ZXN0aW5nIHRoZSBwYXNzd29yZCByZXNldFxuICAgICAqIEByZXR1cm5zIFRoZSBwYXNzd29yZCByZXNldCB0b2tlblxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfcmVxdWVzdFBhc3N3b3JkUmVzZXRUb2tlbihlbWFpbDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRSZXNldFJlcXVlc3QgPSBuZXcgQmFzZVBhc3N3b3JkUmVzZXRSZXF1ZXN0KGVtYWlsKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5kYXRhU2VydmljZS5fcmVxdWVzdFBhc3N3b3JkUmVzZXRUb2tlbihcbiAgICAgICAgICAgIHBhc3N3b3JkUmVzZXRSZXF1ZXN0XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIF9yZXNlbmRWZXJpZmljYXRpb25FbWFpbChlbWFpbDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmRhdGFTZXJ2aWNlLl9yZXNlbmRWZXJpZmljYXRpb25FbWFpbChcbiAgICAgICAgICAgIGVtYWlsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgYSB1c2VyIHBhc3N3b3JkXG4gICAgICogQHBhcmFtIHRva2VuIC0gVGhlIHBhc3N3b3JkIHJlc2V0IHRva2VuXG4gICAgICogQHBhcmFtIHVzZXJJZCAtIFRoZSBJRCBvZiB0aGUgdXNlclxuICAgICAqIEBwYXJhbSBuZXdQYXNzd29yZCAtIFRoZSB1c2VyJ3MgbmV3IHBhc3N3b3JkXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgcGFzc3dvcmQgcmVzZXQgc3VjY2VlZGVkXG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIF9yZXNldFBhc3N3b3JkKFxuICAgICAgICB0b2tlbjogc3RyaW5nLFxuICAgICAgICB1c2VySWQ6IHN0cmluZyxcbiAgICAgICAgbmV3UGFzc3dvcmQ6IHN0cmluZ1xuICAgICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBjb25zdCByZXNldFJlcXVlc3QgPSBuZXcgUGFzc3dvcmRSZXNldCh0b2tlbiwgdXNlcklkLCBuZXdQYXNzd29yZCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZGF0YVNlcnZpY2UuX3Jlc2V0UGFzc3dvcmQocmVzZXRSZXF1ZXN0KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgYSB1c2VyXG4gICAgICogQHBhcmFtIHVzZXIgLSBUaGUgdXNlciB0byB1cGRhdGVcbiAgICAgKiBAcmV0dXJucyBUaGUgdXBkYXRlZCB1c2VyXG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIF91cGRhdGVVc2VyPFQgZXh0ZW5kcyBCYXNlVXNlcj4odXNlcjogVCk6IFByb21pc2U8VD4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmRhdGFTZXJ2aWNlLl91cGRhdGVVc2VyKHVzZXIpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIGEgcGFzc3dvcmQgcmVzZXQgdG9rZW5cbiAgICAgKiBAcGFyYW0gcGFzc3dvcmRSZXNldFRva2VuIC0gVGhlIHBhc3N3b3JkIHJlc2V0IHRva2VuXG4gICAgICogQHJldHVybnMgQSB2YWxpZGF0ZSBwYXNzd29yZCByZXNldCB0b2tlbiByZXNwb25zZSBvYmplY3RcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgX3ZhbGlkYXRlUGFzc3dvcmRSZXNldFRva2VuKFxuICAgICAgICBwYXNzd29yZFJlc2V0VG9rZW46IHN0cmluZ1xuICAgICk6IFByb21pc2U8VmFsaWRhdGVQYXNzd29yZFJlc2V0VG9rZW5SZXNwb25zZT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmRhdGFTZXJ2aWNlLl92YWxpZGF0ZVBhc3N3b3JkUmVzZXRUb2tlbihcbiAgICAgICAgICAgIHBhc3N3b3JkUmVzZXRUb2tlblxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIGEgdmVyaWZ5IGVtYWlsIHRva2VuXG4gICAgICogQHBhcmFtIHZlcmlmeUVtYWlsVG9rZW4gLSBUaGUgdmVyaWZ5IGVtYWlsIHRva2VuXG4gICAgICogQHJldHVybnMgQSB2YWxpZGF0ZSB2ZXJpZnkgZW1haWwgdG9rZW4gcmVzcG9uc2Ugb2JqZWN0XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIF92YWxpZGF0ZVZlcmlmeUVtYWlsVG9rZW4oXG4gICAgICAgIHZlcmlmeUVtYWlsVG9rZW46IHN0cmluZ1xuICAgICk6IFByb21pc2U8VmFsaWRhdGVWZXJpZnlFbWFpbFRva2VuUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5kYXRhU2VydmljZS5fdmFsaWRhdGVWZXJpZnlFbWFpbFRva2VuKFxuICAgICAgICAgICAgdmVyaWZ5RW1haWxUb2tlblxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiJdfQ==
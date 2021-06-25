import { __awaiter, __decorate, __extends, __generator } from "tslib";
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
var BaseUserService = /** @class */ (function (_super) {
    __extends(BaseUserService, _super);
    /**
     * Constructor
     * @param authenticationService - A reference to the authentication service
     * @param dataService - A reference to the user data service
     * @param confirmDialogService - A reference to the confirm dialog service
     * @param router - A reference to the router
     */
    function BaseUserService(authenticationService, dataService, confirmDialogService, router) {
        var _this = _super.call(this) || this;
        _this.authenticationService = authenticationService;
        _this.dataService = dataService;
        _this.confirmDialogService = confirmDialogService;
        _this.router = router;
        return _this;
    }
    Object.defineProperty(BaseUserService.prototype, "userId", {
        // **********************
        // * Public properties
        // **********************
        /** Get accessor for the user ID */
        get: function () {
            if (!this._userId) {
                this._userId = this.authenticationService.getUserId();
            }
            return this._userId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseUserService.prototype, "userRole", {
        /** Get accessor for user role */
        get: function () {
            if (!this._primaryUserRole) {
                this._primaryUserRole = this.authenticationService.getPrimaryUserRole();
            }
            return this._primaryUserRole;
        },
        enumerable: true,
        configurable: true
    });
    // **********************
    // * Public methods
    // **********************
    /**
     * Delete a user
     * @param userId - The ID of the user to delete
     * @returns True if the delete succeeded
     * @async
     */
    BaseUserService.prototype._deleteUser = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var confirmStatus, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.confirmDialogService.openConfirmDialog('Delete User', 'Do you want to delete the selected user? This action cannot be undone.')];
                    case 1:
                        confirmStatus = _a.sent();
                        if (confirmStatus.button === DialogButton.Cancel) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.dataService._deleteUser(userId)];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Get all admin users
     * @returns An array of admin users
     * @async
     */
    BaseUserService.prototype._getAdminUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService._getAdminUsers()];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users];
                }
            });
        });
    };
    /**
     * Get all basic users
     * @returns An array of basic (non-admin) users
     * @async
     */
    BaseUserService.prototype._getBasicUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService._getBasicUsers()];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users];
                }
            });
        });
    };
    /**
     * Get the logged in user
     * @returns The user object
     * @async
     */
    BaseUserService.prototype._getCurrentUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var id, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.userId) {
                            return [2 /*return*/, null];
                        }
                        id = this.userId;
                        return [4 /*yield*/, this.dataService._getUser(id)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    /**
     * Get all users
     * @returns An array of users
     * @async
     */
    BaseUserService.prototype._getUsers = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService._getUsers(options)];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users];
                }
            });
        });
    };
    /**
     * Get the user's primary role
     * @returns The user's primary role
     * @async
     */
    BaseUserService.prototype._getPrimaryUserRole = function () {
        return this.authenticationService.getPrimaryUserRole();
    };
    /**
     * Get the user
     * @param userId - ID of the user to get
     * @returns The user object
     * @async
     */
    BaseUserService.prototype._getUser = function (userID) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService._getUser(userID)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    /**
     * Login a user
     * @param user - The login request
     * @returns True if the login succeeded
     * @async
     */
    BaseUserService.prototype._loginUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var authenticationDetails;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authenticationService.authenticate(user)];
                    case 1:
                        authenticationDetails = _a.sent();
                        if (authenticationDetails.authenticated === true) {
                            this._userId = this.authenticationService.getUserId();
                            this._primaryUserRole = this.authenticationService.getPrimaryUserRole();
                        }
                        return [2 /*return*/, authenticationDetails];
                }
            });
        });
    };
    /**
     * Logout the user
     * @param redirectRoute - The route to redirect to after logging out
     */
    BaseUserService.prototype._logoutUser = function (redirectRoute) {
        if (redirectRoute === void 0) { redirectRoute = ''; }
        this._userId = null;
        this.authenticationService.logoutUser();
        if (redirectRoute) {
            this.router.navigate([redirectRoute]);
        }
    };
    /**
     * Register a new user
     * @param newUser - The new user request object
     * @param secure - An enum indicating whether the API endpoint is secure
     * @returs The new user
     * @async
     */
    BaseUserService.prototype._registerUser = function (newUser, secure) {
        if (secure === void 0) { secure = Secure.false; }
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authenticationService.registerUser(newUser, secure)];
                    case 1:
                        user = _a.sent();
                        // if (user) {
                        //   this._userId = this.authenticationService.getUserId();
                        //   this._primaryUserRole = this.authenticationService.getPrimaryUserRole();
                        // }
                        return [2 /*return*/, user];
                }
            });
        });
    };
    /**
     * Request a password reset
     * @param email - The email address of the user requesting the password reset
     * @returns true if the request succeeded
     * @async
     */
    BaseUserService.prototype._requestPasswordReset = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var passwordResetRequest, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        passwordResetRequest = new BasePasswordResetRequest(email);
                        return [4 /*yield*/, this.dataService._requestPasswordReset(passwordResetRequest)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Request a password reset token. This method is only used for testing.
     * @param email - The email address of the user requesting the password reset
     * @returns The password reset token
     * @async
     */
    BaseUserService.prototype._requestPasswordResetToken = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var passwordResetRequest, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        passwordResetRequest = new BasePasswordResetRequest(email);
                        return [4 /*yield*/, this.dataService._requestPasswordResetToken(passwordResetRequest)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    BaseUserService.prototype._resendVerificationEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService._resendVerificationEmail(email)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Reset a user password
     * @param token - The password reset token
     * @param userId - The ID of the user
     * @param newPassword - The user's new password
     * @returns True if the password reset succeeded
     * @async
     */
    BaseUserService.prototype._resetPassword = function (token, userId, newPassword) {
        return __awaiter(this, void 0, void 0, function () {
            var resetRequest, result;
            return __generator(this, function (_a) {
                resetRequest = new PasswordReset(token, userId, newPassword);
                result = this.dataService._resetPassword(resetRequest);
                return [2 /*return*/, result];
            });
        });
    };
    /**
     * Update a user
     * @param user - The user to update
     * @returns The updated user
     * @async
     */
    BaseUserService.prototype._updateUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService._updateUser(user)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Validate a password reset token
     * @param passwordResetToken - The password reset token
     * @returns A validate password reset token response object
     * @async
     */
    BaseUserService.prototype._validatePasswordResetToken = function (passwordResetToken) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService._validatePasswordResetToken(passwordResetToken)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Validate a verify email token
     * @param verifyEmailToken - The verify email token
     * @returns A validate verify email token response object
     */
    BaseUserService.prototype._validateVerifyEmailToken = function (verifyEmailToken) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService._validateVerifyEmailToken(verifyEmailToken)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    BaseUserService.ctorParameters = function () { return [
        { type: AuthenticationService },
        { type: BaseUserDataService },
        { type: ConfirmDialogService },
        { type: Router }
    ]; };
    BaseUserService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BaseUserService_Factory() { return new BaseUserService(i0.ɵɵinject(i1.AuthenticationService), i0.ɵɵinject(i2.BaseUserDataService), i0.ɵɵinject(i3.ConfirmDialogService), i0.ɵɵinject(i4.Router)); }, token: BaseUserService, providedIn: "root" });
    BaseUserService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], BaseUserService);
    return BaseUserService;
}(BaseService));
export { BaseUserService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS11c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9iYXNlLXVzZXIvYmFzZS11c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFHcEcsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7O0FBSzVFOztHQUVHO0FBSUg7SUFBcUMsbUNBQVc7SUErQjVDOzs7Ozs7T0FNRztJQUNILHlCQUNjLHFCQUE0QyxFQUM1QyxXQUFnQyxFQUNoQyxvQkFBMEMsRUFDMUMsTUFBYztRQUo1QixZQU1JLGlCQUFPLFNBQ1Y7UUFOYSwyQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLGlCQUFXLEdBQVgsV0FBVyxDQUFxQjtRQUNoQywwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFlBQU0sR0FBTixNQUFNLENBQVE7O0lBRzVCLENBQUM7SUF2Q0Qsc0JBQVcsbUNBQU07UUFMakIseUJBQXlCO1FBQ3pCLHNCQUFz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Ozt3QkFGSyxNQUFNLEdBQUcsU0FFZDt3QkFDRCxzQkFBTyxNQUFNLEVBQUM7Ozs7S0FDakI7SUFFRDs7OztPQUlHO0lBQ1UsbURBQXlCLEdBQXRDLFVBQ0ksZ0JBQXdCOzs7Ozs0QkFFVCxxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLHlCQUF5QixDQUMzRCxnQkFBZ0IsQ0FDbkIsRUFBQTs7d0JBRkssTUFBTSxHQUFHLFNBRWQ7d0JBQ0Qsc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2pCOztnQkEzT29DLHFCQUFxQjtnQkFDL0IsbUJBQW1CO2dCQUNWLG9CQUFvQjtnQkFDbEMsTUFBTTs7O0lBMUNuQixlQUFlO1FBSDNCLFVBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7T0FDVyxlQUFlLENBbVIzQjswQkEzU0Q7Q0EyU0MsQUFuUkQsQ0FBcUMsV0FBVyxHQW1SL0M7U0FuUlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VVc2VyRGF0YVNlcnZpY2UgfSBmcm9tICcuL2Jhc2UtdXNlci1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4vYmFzZS1zZXJ2aWNlL2Jhc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpcm1EaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGlhbG9ncy9jb25maXJtL2NvbmZpcm0tZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGlhbG9nQnV0dG9uIH0gZnJvbSAnLi4vLi4vZW51bXMvZGlhbG9nLWJ1dHRvbi5lbnVtJztcbmltcG9ydCB7IExvZ2luUmVxdWVzdCB9IGZyb20gJy4uLy4uL21vZGVscy9hdXRoZW50aWNhdGlvbi9sb2dpbi1yZXF1ZXN0Lm1vZGVsJztcbmltcG9ydCB7IEJhc2VVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UtdXNlci9iYXNlLXVzZXIubW9kZWwnO1xuaW1wb3J0IHsgQmFzZVBhc3N3b3JkUmVzZXRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UtdXNlci9iYXNlLXBhc3N3b3JkLXJlc2V0LXJlcXVlc3QubW9kZWwnO1xuaW1wb3J0IHsgQmFzZU5ld1VzZXJSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UtdXNlci9iYXNlLW5ldy11c2VyLXJlcXVlc3QubW9kZWwnO1xuaW1wb3J0IHsgVmFsaWRhdGVQYXNzd29yZFJlc2V0VG9rZW5SZXNwb25zZSB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLXVzZXIvdmFsaWRhdGUtcGFzc3dvcmQtcmVzZXQtdG9rZW4tcmVzcG9uc2UubW9kZWwnO1xuaW1wb3J0IHsgU2VjdXJlIH0gZnJvbSAnLi4vLi4vZW51bXMvc2VjdXJlLmVudW0nO1xuaW1wb3J0IHsgUGFzc3dvcmRSZXNldCB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLXVzZXIvcGFzc3dvcmQtcmVzZXQubW9kZWwnO1xuaW1wb3J0IHsgR2V0T3B0aW9ucyB9IGZyb20gJy4uLy4uL21vZGVscy9hcmdzL2dldC1vcHRpb25zLm1vZGVsJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uRGV0YWlscyB9IGZyb20gJy4uLy4uL21vZGVscy9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi1kZXRhaWxzLm1vZGVsJztcbmltcG9ydCB7IFZhbGlkYXRlVmVyaWZ5RW1haWxUb2tlblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UtdXNlci92YWxpZGF0ZS12ZXJpZnktZW1haWwtdG9rZW4tcmVzcG9uc2UubW9kZWwnO1xuXG4vKipcbiAqIFRoZSBiYXNlIHVzZXIgc2VydmljZVxuICovXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJhc2VVc2VyU2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlIHtcbiAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqXG4gICAgLy8gKiBQdWJsaWMgcHJvcGVydGllc1xuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKipcblxuICAgIC8qKiBHZXQgYWNjZXNzb3IgZm9yIHRoZSB1c2VyIElEICovXG4gICAgcHVibGljIGdldCB1c2VySWQoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF0aGlzLl91c2VySWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3VzZXJJZCA9IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmdldFVzZXJJZCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VySWQ7XG4gICAgfVxuXG4gICAgLyoqIEdldCBhY2Nlc3NvciBmb3IgdXNlciByb2xlICovXG4gICAgcHVibGljIGdldCB1c2VyUm9sZSgpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIXRoaXMuX3ByaW1hcnlVc2VyUm9sZSkge1xuICAgICAgICAgICAgdGhpcy5fcHJpbWFyeVVzZXJSb2xlID0gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0UHJpbWFyeVVzZXJSb2xlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaW1hcnlVc2VyUm9sZTtcbiAgICB9XG5cbiAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqXG4gICAgLy8gKiBQcm90ZWN0ZWQgcHJvcGVydGllc1xuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKipcblxuICAgIC8qKiBUaGUgdXNlciBJRCAqL1xuICAgIHByb3RlY3RlZCBfdXNlcklkOiBzdHJpbmc7XG5cbiAgICAvKiogVGhlIHVzZXIncyBwcmltYXJ5IHJvbGUgKi9cbiAgICBwcm90ZWN0ZWQgX3ByaW1hcnlVc2VyUm9sZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0gYXV0aGVudGljYXRpb25TZXJ2aWNlIC0gQSByZWZlcmVuY2UgdG8gdGhlIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2VcbiAgICAgKiBAcGFyYW0gZGF0YVNlcnZpY2UgLSBBIHJlZmVyZW5jZSB0byB0aGUgdXNlciBkYXRhIHNlcnZpY2VcbiAgICAgKiBAcGFyYW0gY29uZmlybURpYWxvZ1NlcnZpY2UgLSBBIHJlZmVyZW5jZSB0byB0aGUgY29uZmlybSBkaWFsb2cgc2VydmljZVxuICAgICAqIEBwYXJhbSByb3V0ZXIgLSBBIHJlZmVyZW5jZSB0byB0aGUgcm91dGVyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcbiAgICAgICAgcHJvdGVjdGVkIGRhdGFTZXJ2aWNlOiBCYXNlVXNlckRhdGFTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlybURpYWxvZ1NlcnZpY2U6IENvbmZpcm1EaWFsb2dTZXJ2aWNlLFxuICAgICAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqXG4gICAgLy8gKiBQdWJsaWMgbWV0aG9kc1xuICAgIC8vICoqKioqKioqKioqKioqKioqKioqKipcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhIHVzZXJcbiAgICAgKiBAcGFyYW0gdXNlcklkIC0gVGhlIElEIG9mIHRoZSB1c2VyIHRvIGRlbGV0ZVxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGRlbGV0ZSBzdWNjZWVkZWRcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgX2RlbGV0ZVVzZXIodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc3QgY29uZmlybVN0YXR1cyA9IGF3YWl0IHRoaXMuY29uZmlybURpYWxvZ1NlcnZpY2Uub3BlbkNvbmZpcm1EaWFsb2coXG4gICAgICAgICAgICAnRGVsZXRlIFVzZXInLFxuICAgICAgICAgICAgJ0RvIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgc2VsZWN0ZWQgdXNlcj8gVGhpcyBhY3Rpb24gY2Fubm90IGJlIHVuZG9uZS4nXG4gICAgICAgICk7XG4gICAgICAgIGlmIChjb25maXJtU3RhdHVzLmJ1dHRvbiA9PT0gRGlhbG9nQnV0dG9uLkNhbmNlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZGF0YVNlcnZpY2UuX2RlbGV0ZVVzZXIodXNlcklkKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIGFkbWluIHVzZXJzXG4gICAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgYWRtaW4gdXNlcnNcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgX2dldEFkbWluVXNlcnM8VCBleHRlbmRzIEJhc2VVc2VyPigpOiBQcm9taXNlPFRbXT4ge1xuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IHRoaXMuZGF0YVNlcnZpY2UuX2dldEFkbWluVXNlcnM8VD4oKTtcbiAgICAgICAgcmV0dXJuIHVzZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgYmFzaWMgdXNlcnNcbiAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiBiYXNpYyAobm9uLWFkbWluKSB1c2Vyc1xuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfZ2V0QmFzaWNVc2VyczxUIGV4dGVuZHMgQmFzZVVzZXI+KCk6IFByb21pc2U8VFtdPiB7XG4gICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgdGhpcy5kYXRhU2VydmljZS5fZ2V0QmFzaWNVc2VyczxUPigpO1xuICAgICAgICByZXR1cm4gdXNlcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBsb2dnZWQgaW4gdXNlclxuICAgICAqIEByZXR1cm5zIFRoZSB1c2VyIG9iamVjdFxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfZ2V0Q3VycmVudFVzZXI8VCBleHRlbmRzIEJhc2VVc2VyPigpOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgaWYgKCF0aGlzLnVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLnVzZXJJZDtcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMuZGF0YVNlcnZpY2UuX2dldFVzZXI8VD4oaWQpO1xuICAgICAgICByZXR1cm4gdXNlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIHVzZXJzXG4gICAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgdXNlcnNcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgX2dldFVzZXJzPFQgZXh0ZW5kcyBCYXNlVXNlcj4oXG4gICAgICAgIG9wdGlvbnM6IEdldE9wdGlvbnNcbiAgICApOiBQcm9taXNlPFRbXT4ge1xuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IHRoaXMuZGF0YVNlcnZpY2UuX2dldFVzZXJzPFQ+KG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdXNlcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB1c2VyJ3MgcHJpbWFyeSByb2xlXG4gICAgICogQHJldHVybnMgVGhlIHVzZXIncyBwcmltYXJ5IHJvbGVcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwdWJsaWMgX2dldFByaW1hcnlVc2VyUm9sZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0UHJpbWFyeVVzZXJSb2xlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB1c2VyXG4gICAgICogQHBhcmFtIHVzZXJJZCAtIElEIG9mIHRoZSB1c2VyIHRvIGdldFxuICAgICAqIEByZXR1cm5zIFRoZSB1c2VyIG9iamVjdFxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfZ2V0VXNlcjxUIGV4dGVuZHMgQmFzZVVzZXI+KHVzZXJJRDogc3RyaW5nKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLmRhdGFTZXJ2aWNlLl9nZXRVc2VyPFQ+KHVzZXJJRCk7XG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZ2luIGEgdXNlclxuICAgICAqIEBwYXJhbSB1c2VyIC0gVGhlIGxvZ2luIHJlcXVlc3RcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBsb2dpbiBzdWNjZWVkZWRcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgX2xvZ2luVXNlcih1c2VyOiBMb2dpblJlcXVlc3QpOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uRGV0YWlscz4ge1xuICAgICAgICBjb25zdCBhdXRoZW50aWNhdGlvbkRldGFpbHMgPSBhd2FpdCB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5hdXRoZW50aWNhdGUodXNlcik7XG4gICAgICAgIGlmIChhdXRoZW50aWNhdGlvbkRldGFpbHMuYXV0aGVudGljYXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdXNlcklkID0gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0VXNlcklkKCk7XG4gICAgICAgICAgICB0aGlzLl9wcmltYXJ5VXNlclJvbGUgPSB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5nZXRQcmltYXJ5VXNlclJvbGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXV0aGVudGljYXRpb25EZXRhaWxzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvZ291dCB0aGUgdXNlclxuICAgICAqIEBwYXJhbSByZWRpcmVjdFJvdXRlIC0gVGhlIHJvdXRlIHRvIHJlZGlyZWN0IHRvIGFmdGVyIGxvZ2dpbmcgb3V0XG4gICAgICovXG4gICAgcHVibGljIF9sb2dvdXRVc2VyKHJlZGlyZWN0Um91dGU6IHN0cmluZyA9ICcnKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3VzZXJJZCA9IG51bGw7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ291dFVzZXIoKTtcbiAgICAgICAgaWYgKHJlZGlyZWN0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtyZWRpcmVjdFJvdXRlXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhIG5ldyB1c2VyXG4gICAgICogQHBhcmFtIG5ld1VzZXIgLSBUaGUgbmV3IHVzZXIgcmVxdWVzdCBvYmplY3RcbiAgICAgKiBAcGFyYW0gc2VjdXJlIC0gQW4gZW51bSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIEFQSSBlbmRwb2ludCBpcyBzZWN1cmVcbiAgICAgKiBAcmV0dXJzIFRoZSBuZXcgdXNlclxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfcmVnaXN0ZXJVc2VyPFQgZXh0ZW5kcyBCYXNlTmV3VXNlclJlcXVlc3QsIFUgZXh0ZW5kcyBCYXNlVXNlcj4oXG4gICAgICAgIG5ld1VzZXI6IFQsXG4gICAgICAgIHNlY3VyZTogU2VjdXJlID0gU2VjdXJlLmZhbHNlXG4gICAgKTogUHJvbWlzZTxVPiB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5yZWdpc3RlclVzZXI8VCwgVT4oXG4gICAgICAgICAgICBuZXdVc2VyLFxuICAgICAgICAgICAgc2VjdXJlXG4gICAgICAgICk7XG4gICAgICAgIC8vIGlmICh1c2VyKSB7XG4gICAgICAgIC8vICAgdGhpcy5fdXNlcklkID0gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0VXNlcklkKCk7XG4gICAgICAgIC8vICAgdGhpcy5fcHJpbWFyeVVzZXJSb2xlID0gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuZ2V0UHJpbWFyeVVzZXJSb2xlKCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVxdWVzdCBhIHBhc3N3b3JkIHJlc2V0XG4gICAgICogQHBhcmFtIGVtYWlsIC0gVGhlIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIHVzZXIgcmVxdWVzdGluZyB0aGUgcGFzc3dvcmQgcmVzZXRcbiAgICAgKiBAcmV0dXJucyB0cnVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZFxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfcmVxdWVzdFBhc3N3b3JkUmVzZXQoZW1haWw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBjb25zdCBwYXNzd29yZFJlc2V0UmVxdWVzdCA9IG5ldyBCYXNlUGFzc3dvcmRSZXNldFJlcXVlc3QoZW1haWwpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmRhdGFTZXJ2aWNlLl9yZXF1ZXN0UGFzc3dvcmRSZXNldChcbiAgICAgICAgICAgIHBhc3N3b3JkUmVzZXRSZXF1ZXN0XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVxdWVzdCBhIHBhc3N3b3JkIHJlc2V0IHRva2VuLiBUaGlzIG1ldGhvZCBpcyBvbmx5IHVzZWQgZm9yIHRlc3RpbmcuXG4gICAgICogQHBhcmFtIGVtYWlsIC0gVGhlIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIHVzZXIgcmVxdWVzdGluZyB0aGUgcGFzc3dvcmQgcmVzZXRcbiAgICAgKiBAcmV0dXJucyBUaGUgcGFzc3dvcmQgcmVzZXQgdG9rZW5cbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgX3JlcXVlc3RQYXNzd29yZFJlc2V0VG9rZW4oZW1haWw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkUmVzZXRSZXF1ZXN0ID0gbmV3IEJhc2VQYXNzd29yZFJlc2V0UmVxdWVzdChlbWFpbCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZGF0YVNlcnZpY2UuX3JlcXVlc3RQYXNzd29yZFJlc2V0VG9rZW4oXG4gICAgICAgICAgICBwYXNzd29yZFJlc2V0UmVxdWVzdFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBfcmVzZW5kVmVyaWZpY2F0aW9uRW1haWwoZW1haWw6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5kYXRhU2VydmljZS5fcmVzZW5kVmVyaWZpY2F0aW9uRW1haWwoXG4gICAgICAgICAgICBlbWFpbFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IGEgdXNlciBwYXNzd29yZFxuICAgICAqIEBwYXJhbSB0b2tlbiAtIFRoZSBwYXNzd29yZCByZXNldCB0b2tlblxuICAgICAqIEBwYXJhbSB1c2VySWQgLSBUaGUgSUQgb2YgdGhlIHVzZXJcbiAgICAgKiBAcGFyYW0gbmV3UGFzc3dvcmQgLSBUaGUgdXNlcidzIG5ldyBwYXNzd29yZFxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHBhc3N3b3JkIHJlc2V0IHN1Y2NlZWRlZFxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfcmVzZXRQYXNzd29yZChcbiAgICAgICAgdG9rZW46IHN0cmluZyxcbiAgICAgICAgdXNlcklkOiBzdHJpbmcsXG4gICAgICAgIG5ld1Bhc3N3b3JkOiBzdHJpbmdcbiAgICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc3QgcmVzZXRSZXF1ZXN0ID0gbmV3IFBhc3N3b3JkUmVzZXQodG9rZW4sIHVzZXJJZCwgbmV3UGFzc3dvcmQpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmRhdGFTZXJ2aWNlLl9yZXNldFBhc3N3b3JkKHJlc2V0UmVxdWVzdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGEgdXNlclxuICAgICAqIEBwYXJhbSB1c2VyIC0gVGhlIHVzZXIgdG8gdXBkYXRlXG4gICAgICogQHJldHVybnMgVGhlIHVwZGF0ZWQgdXNlclxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfdXBkYXRlVXNlcjxUIGV4dGVuZHMgQmFzZVVzZXI+KHVzZXI6IFQpOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5kYXRhU2VydmljZS5fdXBkYXRlVXNlcih1c2VyKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBhIHBhc3N3b3JkIHJlc2V0IHRva2VuXG4gICAgICogQHBhcmFtIHBhc3N3b3JkUmVzZXRUb2tlbiAtIFRoZSBwYXNzd29yZCByZXNldCB0b2tlblxuICAgICAqIEByZXR1cm5zIEEgdmFsaWRhdGUgcGFzc3dvcmQgcmVzZXQgdG9rZW4gcmVzcG9uc2Ugb2JqZWN0XG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIF92YWxpZGF0ZVBhc3N3b3JkUmVzZXRUb2tlbihcbiAgICAgICAgcGFzc3dvcmRSZXNldFRva2VuOiBzdHJpbmdcbiAgICApOiBQcm9taXNlPFZhbGlkYXRlUGFzc3dvcmRSZXNldFRva2VuUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5kYXRhU2VydmljZS5fdmFsaWRhdGVQYXNzd29yZFJlc2V0VG9rZW4oXG4gICAgICAgICAgICBwYXNzd29yZFJlc2V0VG9rZW5cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBhIHZlcmlmeSBlbWFpbCB0b2tlblxuICAgICAqIEBwYXJhbSB2ZXJpZnlFbWFpbFRva2VuIC0gVGhlIHZlcmlmeSBlbWFpbCB0b2tlblxuICAgICAqIEByZXR1cm5zIEEgdmFsaWRhdGUgdmVyaWZ5IGVtYWlsIHRva2VuIHJlc3BvbnNlIG9iamVjdFxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfdmFsaWRhdGVWZXJpZnlFbWFpbFRva2VuKFxuICAgICAgICB2ZXJpZnlFbWFpbFRva2VuOiBzdHJpbmdcbiAgICApOiBQcm9taXNlPFZhbGlkYXRlVmVyaWZ5RW1haWxUb2tlblJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZGF0YVNlcnZpY2UuX3ZhbGlkYXRlVmVyaWZ5RW1haWxUb2tlbihcbiAgICAgICAgICAgIHZlcmlmeUVtYWlsVG9rZW5cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG4iXX0=
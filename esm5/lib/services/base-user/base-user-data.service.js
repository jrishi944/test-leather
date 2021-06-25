import { __awaiter, __decorate, __extends, __generator, __param } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BaseDataService } from '../base-data/base-data.service';
import { ErrorDialogService } from '../../dialogs/error/error-dialog.service';
import { Options } from '../base-data/_models/base-data-options.model';
import { Secure } from '../../enums/secure.enum';
import { UrlUtil } from '../../util/url/url.util';
import { BasePasswordResetRequest } from '../../models/base-user/base-password-reset-request.model';
import { BaseUser } from '../../models/base-user/base-user.model';
import { LeathermanAppConfigInjectionToken } from '../../config/injection-tokens/leatherman-app-config.injection-token';
import { ErrorDialogServiceInjectionToken } from '../../config/injection-tokens/error-dialog-service.injection-token';
import * as i0 from "@angular/core";
import * as i1 from "../../config/injection-tokens/leatherman-app-config.injection-token";
import * as i2 from "../../config/injection-tokens/error-dialog-service.injection-token";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common/http";
/**
 * The base user data service
 */
var BaseUserDataService = /** @class */ (function (_super) {
    __extends(BaseUserDataService, _super);
    /**
     * Constructor
     * @param config - The app config object
     * @param errorDialogService - A reference to the error dialog service
     * @param router - A reference to the router
     * @param httpClient - A reference to the HTTP client service
     */
    function BaseUserDataService(config, errorDialogService, router, httpClient) {
        var _this = _super.call(this, config, errorDialogService, router, httpClient) || this;
        _this.config = config;
        _this.baseEndpoint = config.userBaseEndpoint;
        _this.type = BaseUser;
        return _this;
    }
    /**
     * Add a role to a user
     * @param userId - The user's ID
     * @param role - The role to add to the user
     * @returns The updated user
     * @async
     */
    BaseUserDataService.prototype._addUserRole = function (userId, role) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            var _this = this;
            return __generator(this, function (_a) {
                options = new Options();
                options.secure = Secure.true;
                options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, userId, 'addrole');
                options.parameters.add('role', role);
                return [2 /*return*/, this._putWithOptions(options).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'addUserRole', err)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Delete a user
     * @param userId - The ID of the user to delete
     * @returns True if the delete succeeded
     * @async
     */
    BaseUserDataService.prototype._deleteUser = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this._delete(userId, Secure.true).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'deleteUser', err)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Get all admin users
     * @returns An array of admin users
     * @asyncs
     */
    BaseUserDataService.prototype._getAdminUsers = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var getManyOptions, adminUsers;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getManyOptions = new Options();
                        getManyOptions.secure = Secure.true;
                        getManyOptions.url = UrlUtil.join(this.apiRoot, this.baseEndpoint);
                        getManyOptions.parameters.add('role', 'admin');
                        if (options) {
                            getManyOptions.parameters.add('skip', options.skip.toString());
                            getManyOptions.parameters.add('trace', options.take.toString());
                            if (options.sort.length > 0) {
                                getManyOptions.parameters.add('sort', options.sort);
                            }
                        }
                        return [4 /*yield*/, this._getManyWithOptions(getManyOptions).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'getAdminUsers', err)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); })];
                    case 1:
                        adminUsers = _a.sent();
                        return [2 /*return*/, adminUsers];
                }
            });
        });
    };
    /**
     * Get a user
     * @param id - The ID of the user to get
     * @returns A user object
     * @async
     */
    BaseUserDataService.prototype._getUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var options, user;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = new Options();
                        options.secure = Secure.true;
                        options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, id);
                        return [4 /*yield*/, this._getWithOptions(options).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'getUser', err)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); })];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    // getBasicUsers
    BaseUserDataService.prototype._getBasicUsers = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var getManyOptions, assessmentUsers;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getManyOptions = new Options();
                        getManyOptions.secure = Secure.true;
                        getManyOptions.url = UrlUtil.join(this.apiRoot, this.baseEndpoint);
                        getManyOptions.parameters.add('onlyrole', 'user');
                        if (options) {
                            getManyOptions.parameters.add('skip', options.skip.toString());
                            getManyOptions.parameters.add('trace', options.take.toString());
                            if (options.sort.length > 0) {
                                getManyOptions.parameters.add('sort', options.sort);
                            }
                        }
                        return [4 /*yield*/, this._getManyWithOptions(getManyOptions).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'getAssessmentUsers', err)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); })];
                    case 1:
                        assessmentUsers = _a.sent();
                        return [2 /*return*/, assessmentUsers];
                }
            });
        });
    };
    /**
     * Get all users
     * @returns An array of users
     * @async
     */
    BaseUserDataService.prototype._getUsers = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var getManyOptions, assessmentUsers;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getManyOptions = new Options();
                        getManyOptions.secure = Secure.true;
                        getManyOptions.url = UrlUtil.join(this.apiRoot, this.baseEndpoint);
                        if (options) {
                            getManyOptions.parameters.add('skip', options.skip.toString());
                            getManyOptions.parameters.add('trace', options.take.toString());
                            if (options.sort.length > 0) {
                                getManyOptions.parameters.add('sort', options.sort);
                            }
                        }
                        return [4 /*yield*/, this._getManyWithOptions(getManyOptions).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'getUsers', err)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); })];
                    case 1:
                        assessmentUsers = _a.sent();
                        return [2 /*return*/, assessmentUsers];
                }
            });
        });
    };
    /**
     * Remove a role from a user
     * @param userId - The ID of the user
     * @param role - The role to remove from the user
     */
    BaseUserDataService.prototype._removeUserRole = function (userId, role) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            var _this = this;
            return __generator(this, function (_a) {
                options = new Options();
                options.secure = Secure.true;
                options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, userId, 'remove-role');
                options.parameters.add('role', role);
                return [2 /*return*/, this._putWithOptions(options).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'removeUserRole', err)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Request a password reset
     * @param passwordResetRequest - A password reset request object
     * @returns True if the request succeeded
     * @async
     */
    BaseUserDataService.prototype._requestPasswordReset = function (passwordResetRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = new Options();
                        options.secure = Secure.false;
                        options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'request-password-reset');
                        options.objectType = BasePasswordResetRequest;
                        return [4 /*yield*/, this._postWithOptions(passwordResetRequest, options).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'requestPasswordReset', err)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * Request a password reset token. This method is only used for testing.
     * @param passwordResetRequest - A password reset request object
     * @returns A password reset token
     * @async
     */
    BaseUserDataService.prototype._requestPasswordResetToken = function (passwordResetRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var options, passwordResetToken;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = new Options();
                        options.secure = Secure.false;
                        options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'request-password-reset-token');
                        options.objectType = BasePasswordResetRequest;
                        return [4 /*yield*/, this._postWithOptions(passwordResetRequest, options).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'requestPasswordResetToken', err)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); })];
                    case 1:
                        passwordResetToken = _a.sent();
                        return [2 /*return*/, passwordResetToken];
                }
            });
        });
    };
    /**
     * Resend Verification email
     * @param verifyEmail - A verification email
     * @returns True if the verification email is sent
     */
    BaseUserDataService.prototype._resendVerificationEmail = function (verificationEmail) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            var _this = this;
            return __generator(this, function (_a) {
                options = new Options();
                options.secure = Secure.false;
                options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'resend-verification-email');
                options.parameters.add('email', verificationEmail);
                return [2 /*return*/, this._getWithOptions(options).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'resendVerificationEmail', err)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Reset a password
     * @param passwordReset - A password reset object
     * @returns True if the password was successfully reset
     * @async
     */
    BaseUserDataService.prototype._resetPassword = function (passwordReset) {
        return __awaiter(this, void 0, void 0, function () {
            var options, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = new Options();
                        options.secure = Secure.false;
                        options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'reset-password');
                        return [4 /*yield*/, this._postWithOptions(passwordReset, options)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Update a user
     * @param user - The user to update
     * @returns The updated user
     * @async
     */
    BaseUserDataService.prototype._updateUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this._put(user, Secure.true).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'updateUser', err)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Validate a password reset token
     * @param passwordResetToken - The password reset token to validate
     * @returns A validate password reset token response
     * @async
     */
    BaseUserDataService.prototype._validatePasswordResetToken = function (passwordResetToken) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            var _this = this;
            return __generator(this, function (_a) {
                options = new Options();
                options.secure = Secure.false;
                options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'validate-password-reset-token');
                options.parameters.add('token', passwordResetToken);
                return [2 /*return*/, this._getWithOptions(options).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'validatePasswordResetToken', err)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Validate an email address
     * @param email - The email address to validate
     * @returns True if the email address is not currently in the user table
     * @async
     */
    BaseUserDataService.prototype._validateEmail = function (email) {
        return this.httpClient.get(UrlUtil.join(this.apiRoot, this.baseEndpoint, 'validate-email' + '?email=' + email), {
            headers: this.noTokenHeader
        });
    };
    BaseUserDataService.prototype._validateVerifyEmailToken = function (verifyEmailToken) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            var _this = this;
            return __generator(this, function (_a) {
                options = new Options();
                options.secure = Secure.false;
                options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'validate-verify-email-token');
                options.parameters.add('token', verifyEmailToken);
                return [2 /*return*/, this._getWithOptions(options).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'validateVerifyEmailToken', err)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            });
        });
    };
    BaseUserDataService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [LeathermanAppConfigInjectionToken,] }] },
        { type: ErrorDialogService, decorators: [{ type: Inject, args: [ErrorDialogServiceInjectionToken,] }] },
        { type: Router },
        { type: HttpClient }
    ]; };
    BaseUserDataService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BaseUserDataService_Factory() { return new BaseUserDataService(i0.ɵɵinject(i1.LeathermanAppConfigInjectionToken), i0.ɵɵinject(i2.ErrorDialogServiceInjectionToken), i0.ɵɵinject(i3.Router), i0.ɵɵinject(i4.HttpClient)); }, token: BaseUserDataService, providedIn: "root" });
    BaseUserDataService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Inject(LeathermanAppConfigInjectionToken)),
        __param(1, Inject(ErrorDialogServiceInjectionToken))
    ], BaseUserDataService);
    return BaseUserDataService;
}(BaseDataService));
export { BaseUserDataService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS11c2VyLWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2Jhc2UtdXNlci9iYXNlLXVzZXItZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFFeEgsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0VBQW9FLENBQUM7Ozs7OztBQU10SDs7R0FFRztBQUlIO0lBQXlDLHVDQUFlO0lBQ3BEOzs7Ozs7T0FNRztJQUNILDZCQUVjLE1BQTRCLEVBRXRDLGtCQUFzQyxFQUN0QyxNQUFjLEVBQ2QsVUFBc0I7UUFOMUIsWUFRSSxrQkFBTSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxTQUd4RDtRQVRhLFlBQU0sR0FBTixNQUFNLENBQXNC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SSxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWE7U0FDOUIsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUVZLHVEQUF5QixHQUF0QyxVQUNJLGdCQUF3Qjs7Ozs7Z0JBRWxCLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO2dCQUM5QixPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQzlCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FDdEIsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsWUFBWSxFQUNqQiw2QkFBNkIsQ0FDaEMsQ0FBQztnQkFDRixPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztnQkFDbEQsc0JBQU8sSUFBSSxDQUFDLGVBQWUsQ0FDdkIsT0FBTyxDQUNWLENBQUMsS0FBSyxDQUFDLFVBQU0sR0FBRzs7O3dDQUNOLHFCQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FDaEMsaUJBQWlCLEVBQ2pCLDBCQUEwQixFQUMxQixHQUFHLENBQ04sRUFBQTt3Q0FKRCxzQkFBTyxTQUlOLEVBQUM7Ozt5QkFDTCxDQUFDLEVBQUM7OztLQUNOOztnREFuWEksTUFBTSxTQUFDLGlDQUFpQztnQkFHckIsa0JBQWtCLHVCQURyQyxNQUFNLFNBQUMsZ0NBQWdDO2dCQUVoQyxNQUFNO2dCQUNGLFVBQVU7OztJQWRqQixtQkFBbUI7UUFIL0IsVUFBVSxDQUFDO1lBQ1IsVUFBVSxFQUFFLE1BQU07U0FDckIsQ0FBQztRQVVPLFdBQUEsTUFBTSxDQUFDLGlDQUFpQyxDQUFDLENBQUE7UUFFekMsV0FBQSxNQUFNLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTtPQVhwQyxtQkFBbUIsQ0E2WC9COzhCQXRaRDtDQXNaQyxBQTdYRCxDQUF5QyxlQUFlLEdBNlh2RDtTQTdYWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQmFzZURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vYmFzZS1kYXRhL2Jhc2UtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IEVycm9yRGlhbG9nU2VydmljZSB9IGZyb20gJy4uLy4uL2RpYWxvZ3MvZXJyb3IvZXJyb3ItZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4uL2Jhc2UtZGF0YS9fbW9kZWxzL2Jhc2UtZGF0YS1vcHRpb25zLm1vZGVsJztcbmltcG9ydCB7IFNlY3VyZSB9IGZyb20gJy4uLy4uL2VudW1zL3NlY3VyZS5lbnVtJztcbmltcG9ydCB7IFVybFV0aWwgfSBmcm9tICcuLi8uLi91dGlsL3VybC91cmwudXRpbCc7XG5pbXBvcnQgeyBCYXNlUGFzc3dvcmRSZXNldFJlcXVlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvYmFzZS11c2VyL2Jhc2UtcGFzc3dvcmQtcmVzZXQtcmVxdWVzdC5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLXVzZXIvYmFzZS11c2VyLm1vZGVsJztcbmltcG9ydCB7IExlYXRoZXJtYW5BcHBDb25maWdJbmplY3Rpb25Ub2tlbiB9IGZyb20gJy4uLy4uL2NvbmZpZy9pbmplY3Rpb24tdG9rZW5zL2xlYXRoZXJtYW4tYXBwLWNvbmZpZy5pbmplY3Rpb24tdG9rZW4nO1xuaW1wb3J0IHsgSUxlYXRoZXJtYW5BcHBDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvYXBwLmNvbmZpZyc7XG5pbXBvcnQgeyBFcnJvckRpYWxvZ1NlcnZpY2VJbmplY3Rpb25Ub2tlbiB9IGZyb20gJy4uLy4uL2NvbmZpZy9pbmplY3Rpb24tdG9rZW5zL2Vycm9yLWRpYWxvZy1zZXJ2aWNlLmluamVjdGlvbi10b2tlbic7XG5pbXBvcnQgeyBWYWxpZGF0ZVBhc3N3b3JkUmVzZXRUb2tlblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UtdXNlci92YWxpZGF0ZS1wYXNzd29yZC1yZXNldC10b2tlbi1yZXNwb25zZS5tb2RlbCc7XG5pbXBvcnQgeyBQYXNzd29yZFJlc2V0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UtdXNlci9wYXNzd29yZC1yZXNldC5tb2RlbCc7XG5pbXBvcnQgeyBHZXRPcHRpb25zIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FyZ3MvZ2V0LW9wdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgVmFsaWRhdGVWZXJpZnlFbWFpbFRva2VuUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYmFzZS11c2VyL3ZhbGlkYXRlLXZlcmlmeS1lbWFpbC10b2tlbi1yZXNwb25zZS5tb2RlbCc7XG5cbi8qKlxuICogVGhlIGJhc2UgdXNlciBkYXRhIHNlcnZpY2VcbiAqL1xuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBCYXNlVXNlckRhdGFTZXJ2aWNlIGV4dGVuZHMgQmFzZURhdGFTZXJ2aWNlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSBjb25maWcgLSBUaGUgYXBwIGNvbmZpZyBvYmplY3RcbiAgICAgKiBAcGFyYW0gZXJyb3JEaWFsb2dTZXJ2aWNlIC0gQSByZWZlcmVuY2UgdG8gdGhlIGVycm9yIGRpYWxvZyBzZXJ2aWNlXG4gICAgICogQHBhcmFtIHJvdXRlciAtIEEgcmVmZXJlbmNlIHRvIHRoZSByb3V0ZXJcbiAgICAgKiBAcGFyYW0gaHR0cENsaWVudCAtIEEgcmVmZXJlbmNlIHRvIHRoZSBIVFRQIGNsaWVudCBzZXJ2aWNlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBJbmplY3QoTGVhdGhlcm1hbkFwcENvbmZpZ0luamVjdGlvblRva2VuKVxuICAgICAgICBwcm90ZWN0ZWQgY29uZmlnOiBJTGVhdGhlcm1hbkFwcENvbmZpZyxcbiAgICAgICAgQEluamVjdChFcnJvckRpYWxvZ1NlcnZpY2VJbmplY3Rpb25Ub2tlbilcbiAgICAgICAgZXJyb3JEaWFsb2dTZXJ2aWNlOiBFcnJvckRpYWxvZ1NlcnZpY2UsXG4gICAgICAgIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBodHRwQ2xpZW50OiBIdHRwQ2xpZW50XG4gICAgKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZywgZXJyb3JEaWFsb2dTZXJ2aWNlLCByb3V0ZXIsIGh0dHBDbGllbnQpO1xuICAgICAgICB0aGlzLmJhc2VFbmRwb2ludCA9IGNvbmZpZy51c2VyQmFzZUVuZHBvaW50O1xuICAgICAgICB0aGlzLnR5cGUgPSBCYXNlVXNlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSByb2xlIHRvIGEgdXNlclxuICAgICAqIEBwYXJhbSB1c2VySWQgLSBUaGUgdXNlcidzIElEXG4gICAgICogQHBhcmFtIHJvbGUgLSBUaGUgcm9sZSB0byBhZGQgdG8gdGhlIHVzZXJcbiAgICAgKiBAcmV0dXJucyBUaGUgdXBkYXRlZCB1c2VyXG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIF9hZGRVc2VyUm9sZTxUIGV4dGVuZHMgQmFzZVVzZXI+KFxuICAgICAgICB1c2VySWQ6IHN0cmluZyxcbiAgICAgICAgcm9sZTogc3RyaW5nXG4gICAgKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBuZXcgT3B0aW9ucygpO1xuICAgICAgICBvcHRpb25zLnNlY3VyZSA9IFNlY3VyZS50cnVlO1xuICAgICAgICBvcHRpb25zLnVybCA9IFVybFV0aWwuam9pbihcbiAgICAgICAgICAgIHRoaXMuYXBpUm9vdCxcbiAgICAgICAgICAgIHRoaXMuYmFzZUVuZHBvaW50LFxuICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgJ2FkZHJvbGUnXG4gICAgICAgICk7XG4gICAgICAgIG9wdGlvbnMucGFyYW1ldGVycy5hZGQoJ3JvbGUnLCByb2xlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3B1dFdpdGhPcHRpb25zPFQ+KG9wdGlvbnMpLmNhdGNoKGFzeW5jIGVyciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5oYW5kbGVQcm9taXNlRXJyb3IoXG4gICAgICAgICAgICAgICAgJ1VzZXJEYXRhU2VydmljZScsXG4gICAgICAgICAgICAgICAgJ2FkZFVzZXJSb2xlJyxcbiAgICAgICAgICAgICAgICBlcnJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhIHVzZXJcbiAgICAgKiBAcGFyYW0gdXNlcklkIC0gVGhlIElEIG9mIHRoZSB1c2VyIHRvIGRlbGV0ZVxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGRlbGV0ZSBzdWNjZWVkZWRcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgX2RlbGV0ZVVzZXIodXNlcklkOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlbGV0ZSh1c2VySWQsIFNlY3VyZS50cnVlKS5jYXRjaChhc3luYyBlcnIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaGFuZGxlUHJvbWlzZUVycm9yKFxuICAgICAgICAgICAgICAgICdVc2VyRGF0YVNlcnZpY2UnLFxuICAgICAgICAgICAgICAgICdkZWxldGVVc2VyJyxcbiAgICAgICAgICAgICAgICBlcnJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgYWRtaW4gdXNlcnNcbiAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiBhZG1pbiB1c2Vyc1xuICAgICAqIEBhc3luY3NcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgX2dldEFkbWluVXNlcnM8VCBleHRlbmRzIEJhc2VVc2VyPihcbiAgICAgICAgb3B0aW9ucz86IEdldE9wdGlvbnNcbiAgICApOiBQcm9taXNlPFRbXT4ge1xuICAgICAgICBjb25zdCBnZXRNYW55T3B0aW9ucyA9IG5ldyBPcHRpb25zKCk7XG4gICAgICAgIGdldE1hbnlPcHRpb25zLnNlY3VyZSA9IFNlY3VyZS50cnVlO1xuICAgICAgICBnZXRNYW55T3B0aW9ucy51cmwgPSBVcmxVdGlsLmpvaW4odGhpcy5hcGlSb290LCB0aGlzLmJhc2VFbmRwb2ludCk7XG4gICAgICAgIGdldE1hbnlPcHRpb25zLnBhcmFtZXRlcnMuYWRkKCdyb2xlJywgJ2FkbWluJyk7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICBnZXRNYW55T3B0aW9ucy5wYXJhbWV0ZXJzLmFkZCgnc2tpcCcsIG9wdGlvbnMuc2tpcC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGdldE1hbnlPcHRpb25zLnBhcmFtZXRlcnMuYWRkKCd0cmFjZScsIG9wdGlvbnMudGFrZS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNvcnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGdldE1hbnlPcHRpb25zLnBhcmFtZXRlcnMuYWRkKCdzb3J0Jywgb3B0aW9ucy5zb3J0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhZG1pblVzZXJzID0gYXdhaXQgdGhpcy5fZ2V0TWFueVdpdGhPcHRpb25zPFQ+KGdldE1hbnlPcHRpb25zKS5jYXRjaChcbiAgICAgICAgICAgIGFzeW5jIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaGFuZGxlUHJvbWlzZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnVXNlckRhdGFTZXJ2aWNlJyxcbiAgICAgICAgICAgICAgICAgICAgJ2dldEFkbWluVXNlcnMnLFxuICAgICAgICAgICAgICAgICAgICBlcnJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gYWRtaW5Vc2VycztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSB1c2VyXG4gICAgICogQHBhcmFtIGlkIC0gVGhlIElEIG9mIHRoZSB1c2VyIHRvIGdldFxuICAgICAqIEByZXR1cm5zIEEgdXNlciBvYmplY3RcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgX2dldFVzZXI8VCBleHRlbmRzIEJhc2VVc2VyPihpZDogc3RyaW5nKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBuZXcgT3B0aW9ucygpO1xuICAgICAgICBvcHRpb25zLnNlY3VyZSA9IFNlY3VyZS50cnVlO1xuICAgICAgICBvcHRpb25zLnVybCA9IFVybFV0aWwuam9pbih0aGlzLmFwaVJvb3QsIHRoaXMuYmFzZUVuZHBvaW50LCBpZCk7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLl9nZXRXaXRoT3B0aW9uczxUPihvcHRpb25zKS5jYXRjaChhc3luYyBlcnIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaGFuZGxlUHJvbWlzZUVycm9yKCdVc2VyRGF0YVNlcnZpY2UnLCAnZ2V0VXNlcicsIGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdXNlcjtcbiAgICB9XG5cbiAgICAvLyBnZXRCYXNpY1VzZXJzXG4gICAgcHVibGljIGFzeW5jIF9nZXRCYXNpY1VzZXJzPFQgZXh0ZW5kcyBCYXNlVXNlcj4oXG4gICAgICAgIG9wdGlvbnM/OiBHZXRPcHRpb25zXG4gICAgKTogUHJvbWlzZTxUW10+IHtcbiAgICAgICAgY29uc3QgZ2V0TWFueU9wdGlvbnMgPSBuZXcgT3B0aW9ucygpO1xuICAgICAgICBnZXRNYW55T3B0aW9ucy5zZWN1cmUgPSBTZWN1cmUudHJ1ZTtcbiAgICAgICAgZ2V0TWFueU9wdGlvbnMudXJsID0gVXJsVXRpbC5qb2luKHRoaXMuYXBpUm9vdCwgdGhpcy5iYXNlRW5kcG9pbnQpO1xuICAgICAgICBnZXRNYW55T3B0aW9ucy5wYXJhbWV0ZXJzLmFkZCgnb25seXJvbGUnLCAndXNlcicpO1xuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgZ2V0TWFueU9wdGlvbnMucGFyYW1ldGVycy5hZGQoJ3NraXAnLCBvcHRpb25zLnNraXAudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBnZXRNYW55T3B0aW9ucy5wYXJhbWV0ZXJzLmFkZCgndHJhY2UnLCBvcHRpb25zLnRha2UudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zb3J0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBnZXRNYW55T3B0aW9ucy5wYXJhbWV0ZXJzLmFkZCgnc29ydCcsIG9wdGlvbnMuc29ydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXNzZXNzbWVudFVzZXJzID0gYXdhaXQgdGhpcy5fZ2V0TWFueVdpdGhPcHRpb25zPFQ+KFxuICAgICAgICAgICAgZ2V0TWFueU9wdGlvbnNcbiAgICAgICAgKS5jYXRjaChhc3luYyBlcnIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaGFuZGxlUHJvbWlzZUVycm9yKFxuICAgICAgICAgICAgICAgICdVc2VyRGF0YVNlcnZpY2UnLFxuICAgICAgICAgICAgICAgICdnZXRBc3Nlc3NtZW50VXNlcnMnLFxuICAgICAgICAgICAgICAgIGVyclxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhc3Nlc3NtZW50VXNlcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCB1c2Vyc1xuICAgICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHVzZXJzXG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIF9nZXRVc2VyczxUIGV4dGVuZHMgQmFzZVVzZXI+KFxuICAgICAgICBvcHRpb25zPzogR2V0T3B0aW9uc1xuICAgICk6IFByb21pc2U8VFtdPiB7XG4gICAgICAgIGNvbnN0IGdldE1hbnlPcHRpb25zID0gbmV3IE9wdGlvbnMoKTtcbiAgICAgICAgZ2V0TWFueU9wdGlvbnMuc2VjdXJlID0gU2VjdXJlLnRydWU7XG4gICAgICAgIGdldE1hbnlPcHRpb25zLnVybCA9IFVybFV0aWwuam9pbih0aGlzLmFwaVJvb3QsIHRoaXMuYmFzZUVuZHBvaW50KTtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGdldE1hbnlPcHRpb25zLnBhcmFtZXRlcnMuYWRkKCdza2lwJywgb3B0aW9ucy5za2lwLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgZ2V0TWFueU9wdGlvbnMucGFyYW1ldGVycy5hZGQoJ3RyYWNlJywgb3B0aW9ucy50YWtlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc29ydC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZ2V0TWFueU9wdGlvbnMucGFyYW1ldGVycy5hZGQoJ3NvcnQnLCBvcHRpb25zLnNvcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFzc2Vzc21lbnRVc2VycyA9IGF3YWl0IHRoaXMuX2dldE1hbnlXaXRoT3B0aW9uczxUPihcbiAgICAgICAgICAgIGdldE1hbnlPcHRpb25zXG4gICAgICAgICkuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmhhbmRsZVByb21pc2VFcnJvcignVXNlckRhdGFTZXJ2aWNlJywgJ2dldFVzZXJzJywgZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhc3Nlc3NtZW50VXNlcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgcm9sZSBmcm9tIGEgdXNlclxuICAgICAqIEBwYXJhbSB1c2VySWQgLSBUaGUgSUQgb2YgdGhlIHVzZXJcbiAgICAgKiBAcGFyYW0gcm9sZSAtIFRoZSByb2xlIHRvIHJlbW92ZSBmcm9tIHRoZSB1c2VyXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIF9yZW1vdmVVc2VyUm9sZTxUIGV4dGVuZHMgQmFzZVVzZXI+KFxuICAgICAgICB1c2VySWQ6IHN0cmluZyxcbiAgICAgICAgcm9sZTogc3RyaW5nXG4gICAgKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBuZXcgT3B0aW9ucygpO1xuICAgICAgICBvcHRpb25zLnNlY3VyZSA9IFNlY3VyZS50cnVlO1xuICAgICAgICBvcHRpb25zLnVybCA9IFVybFV0aWwuam9pbihcbiAgICAgICAgICAgIHRoaXMuYXBpUm9vdCxcbiAgICAgICAgICAgIHRoaXMuYmFzZUVuZHBvaW50LFxuICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgJ3JlbW92ZS1yb2xlJ1xuICAgICAgICApO1xuICAgICAgICBvcHRpb25zLnBhcmFtZXRlcnMuYWRkKCdyb2xlJywgcm9sZSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9wdXRXaXRoT3B0aW9uczxUPihvcHRpb25zKS5jYXRjaChhc3luYyBlcnIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaGFuZGxlUHJvbWlzZUVycm9yKFxuICAgICAgICAgICAgICAgICdVc2VyRGF0YVNlcnZpY2UnLFxuICAgICAgICAgICAgICAgICdyZW1vdmVVc2VyUm9sZScsXG4gICAgICAgICAgICAgICAgZXJyXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IGEgcGFzc3dvcmQgcmVzZXRcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmRSZXNldFJlcXVlc3QgLSBBIHBhc3N3b3JkIHJlc2V0IHJlcXVlc3Qgb2JqZWN0XG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkZWRcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgX3JlcXVlc3RQYXNzd29yZFJlc2V0KFxuICAgICAgICBwYXNzd29yZFJlc2V0UmVxdWVzdDogQmFzZVBhc3N3b3JkUmVzZXRSZXF1ZXN0XG4gICAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBuZXcgT3B0aW9ucygpO1xuICAgICAgICBvcHRpb25zLnNlY3VyZSA9IFNlY3VyZS5mYWxzZTtcbiAgICAgICAgb3B0aW9ucy51cmwgPSBVcmxVdGlsLmpvaW4oXG4gICAgICAgICAgICB0aGlzLmFwaVJvb3QsXG4gICAgICAgICAgICB0aGlzLmJhc2VFbmRwb2ludCxcbiAgICAgICAgICAgICdyZXF1ZXN0LXBhc3N3b3JkLXJlc2V0J1xuICAgICAgICApO1xuICAgICAgICBvcHRpb25zLm9iamVjdFR5cGUgPSBCYXNlUGFzc3dvcmRSZXNldFJlcXVlc3Q7XG4gICAgICAgIGF3YWl0IHRoaXMuX3Bvc3RXaXRoT3B0aW9uczxib29sZWFuPihwYXNzd29yZFJlc2V0UmVxdWVzdCwgb3B0aW9ucykuY2F0Y2goXG4gICAgICAgICAgICBhc3luYyBlcnIgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmhhbmRsZVByb21pc2VFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJEYXRhU2VydmljZScsXG4gICAgICAgICAgICAgICAgICAgICdyZXF1ZXN0UGFzc3dvcmRSZXNldCcsXG4gICAgICAgICAgICAgICAgICAgIGVyclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcXVlc3QgYSBwYXNzd29yZCByZXNldCB0b2tlbi4gVGhpcyBtZXRob2QgaXMgb25seSB1c2VkIGZvciB0ZXN0aW5nLlxuICAgICAqIEBwYXJhbSBwYXNzd29yZFJlc2V0UmVxdWVzdCAtIEEgcGFzc3dvcmQgcmVzZXQgcmVxdWVzdCBvYmplY3RcbiAgICAgKiBAcmV0dXJucyBBIHBhc3N3b3JkIHJlc2V0IHRva2VuXG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIF9yZXF1ZXN0UGFzc3dvcmRSZXNldFRva2VuKFxuICAgICAgICBwYXNzd29yZFJlc2V0UmVxdWVzdDogQmFzZVBhc3N3b3JkUmVzZXRSZXF1ZXN0XG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBPcHRpb25zKCk7XG4gICAgICAgIG9wdGlvbnMuc2VjdXJlID0gU2VjdXJlLmZhbHNlO1xuICAgICAgICBvcHRpb25zLnVybCA9IFVybFV0aWwuam9pbihcbiAgICAgICAgICAgIHRoaXMuYXBpUm9vdCxcbiAgICAgICAgICAgIHRoaXMuYmFzZUVuZHBvaW50LFxuICAgICAgICAgICAgJ3JlcXVlc3QtcGFzc3dvcmQtcmVzZXQtdG9rZW4nXG4gICAgICAgICk7XG4gICAgICAgIG9wdGlvbnMub2JqZWN0VHlwZSA9IEJhc2VQYXNzd29yZFJlc2V0UmVxdWVzdDtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRSZXNldFRva2VuID0gYXdhaXQgdGhpcy5fcG9zdFdpdGhPcHRpb25zPHN0cmluZz4oXG4gICAgICAgICAgICBwYXNzd29yZFJlc2V0UmVxdWVzdCxcbiAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgKS5jYXRjaChhc3luYyBlcnIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaGFuZGxlUHJvbWlzZUVycm9yKFxuICAgICAgICAgICAgICAgICdVc2VyRGF0YVNlcnZpY2UnLFxuICAgICAgICAgICAgICAgICdyZXF1ZXN0UGFzc3dvcmRSZXNldFRva2VuJyxcbiAgICAgICAgICAgICAgICBlcnJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFzc3dvcmRSZXNldFRva2VuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2VuZCBWZXJpZmljYXRpb24gZW1haWxcbiAgICAgKiBAcGFyYW0gdmVyaWZ5RW1haWwgLSBBIHZlcmlmaWNhdGlvbiBlbWFpbFxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZlcmlmaWNhdGlvbiBlbWFpbCBpcyBzZW50XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIF9yZXNlbmRWZXJpZmljYXRpb25FbWFpbChcbiAgICAgICAgdmVyaWZpY2F0aW9uRW1haWw6IHN0cmluZ1xuICAgICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gbmV3IE9wdGlvbnMoKTtcbiAgICAgICAgb3B0aW9ucy5zZWN1cmUgPSBTZWN1cmUuZmFsc2U7XG4gICAgICAgIG9wdGlvbnMudXJsID0gVXJsVXRpbC5qb2luKFxuICAgICAgICAgICAgdGhpcy5hcGlSb290LFxuICAgICAgICAgICAgdGhpcy5iYXNlRW5kcG9pbnQsXG4gICAgICAgICAgICAncmVzZW5kLXZlcmlmaWNhdGlvbi1lbWFpbCdcbiAgICAgICAgKTtcbiAgICAgICAgb3B0aW9ucy5wYXJhbWV0ZXJzLmFkZCgnZW1haWwnLCB2ZXJpZmljYXRpb25FbWFpbCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRXaXRoT3B0aW9uczxib29sZWFuPihcbiAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgKS5jYXRjaChhc3luYyBlcnIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaGFuZGxlUHJvbWlzZUVycm9yKFxuICAgICAgICAgICAgICAgICdVc2VyRGF0YVNlcnZpY2UnLFxuICAgICAgICAgICAgICAgICdyZXNlbmRWZXJpZmljYXRpb25FbWFpbCcsXG4gICAgICAgICAgICAgICAgZXJyXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBhIHBhc3N3b3JkXG4gICAgICogQHBhcmFtIHBhc3N3b3JkUmVzZXQgLSBBIHBhc3N3b3JkIHJlc2V0IG9iamVjdFxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHBhc3N3b3JkIHdhcyBzdWNjZXNzZnVsbHkgcmVzZXRcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgX3Jlc2V0UGFzc3dvcmQocGFzc3dvcmRSZXNldDogUGFzc3dvcmRSZXNldCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gbmV3IE9wdGlvbnMoKTtcbiAgICAgICAgb3B0aW9ucy5zZWN1cmUgPSBTZWN1cmUuZmFsc2U7XG4gICAgICAgIG9wdGlvbnMudXJsID0gVXJsVXRpbC5qb2luKFxuICAgICAgICAgICAgdGhpcy5hcGlSb290LFxuICAgICAgICAgICAgdGhpcy5iYXNlRW5kcG9pbnQsXG4gICAgICAgICAgICAncmVzZXQtcGFzc3dvcmQnXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3Bvc3RXaXRoT3B0aW9uczxib29sZWFuPihwYXNzd29yZFJlc2V0LCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgYSB1c2VyXG4gICAgICogQHBhcmFtIHVzZXIgLSBUaGUgdXNlciB0byB1cGRhdGVcbiAgICAgKiBAcmV0dXJucyBUaGUgdXBkYXRlZCB1c2VyXG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIF91cGRhdGVVc2VyPFQgZXh0ZW5kcyBCYXNlVXNlcj4odXNlcjogVCk6IFByb21pc2U8VD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHV0PFQ+KHVzZXIsIFNlY3VyZS50cnVlKS5jYXRjaChhc3luYyBlcnIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaGFuZGxlUHJvbWlzZUVycm9yKFxuICAgICAgICAgICAgICAgICdVc2VyRGF0YVNlcnZpY2UnLFxuICAgICAgICAgICAgICAgICd1cGRhdGVVc2VyJyxcbiAgICAgICAgICAgICAgICBlcnJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIGEgcGFzc3dvcmQgcmVzZXQgdG9rZW5cbiAgICAgKiBAcGFyYW0gcGFzc3dvcmRSZXNldFRva2VuIC0gVGhlIHBhc3N3b3JkIHJlc2V0IHRva2VuIHRvIHZhbGlkYXRlXG4gICAgICogQHJldHVybnMgQSB2YWxpZGF0ZSBwYXNzd29yZCByZXNldCB0b2tlbiByZXNwb25zZVxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfdmFsaWRhdGVQYXNzd29yZFJlc2V0VG9rZW4oXG4gICAgICAgIHBhc3N3b3JkUmVzZXRUb2tlbjogc3RyaW5nXG4gICAgKTogUHJvbWlzZTxWYWxpZGF0ZVBhc3N3b3JkUmVzZXRUb2tlblJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBuZXcgT3B0aW9ucygpO1xuICAgICAgICBvcHRpb25zLnNlY3VyZSA9IFNlY3VyZS5mYWxzZTtcbiAgICAgICAgb3B0aW9ucy51cmwgPSBVcmxVdGlsLmpvaW4oXG4gICAgICAgICAgICB0aGlzLmFwaVJvb3QsXG4gICAgICAgICAgICB0aGlzLmJhc2VFbmRwb2ludCxcbiAgICAgICAgICAgICd2YWxpZGF0ZS1wYXNzd29yZC1yZXNldC10b2tlbidcbiAgICAgICAgKTtcbiAgICAgICAgb3B0aW9ucy5wYXJhbWV0ZXJzLmFkZCgndG9rZW4nLCBwYXNzd29yZFJlc2V0VG9rZW4pO1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0V2l0aE9wdGlvbnM8VmFsaWRhdGVQYXNzd29yZFJlc2V0VG9rZW5SZXNwb25zZT4oXG4gICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICkuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmhhbmRsZVByb21pc2VFcnJvcihcbiAgICAgICAgICAgICAgICAnVXNlckRhdGFTZXJ2aWNlJyxcbiAgICAgICAgICAgICAgICAndmFsaWRhdGVQYXNzd29yZFJlc2V0VG9rZW4nLFxuICAgICAgICAgICAgICAgIGVyclxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgYW4gZW1haWwgYWRkcmVzc1xuICAgICAqIEBwYXJhbSBlbWFpbCAtIFRoZSBlbWFpbCBhZGRyZXNzIHRvIHZhbGlkYXRlXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZW1haWwgYWRkcmVzcyBpcyBub3QgY3VycmVudGx5IGluIHRoZSB1c2VyIHRhYmxlXG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgcHVibGljIF92YWxpZGF0ZUVtYWlsKGVtYWlsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8Ym9vbGVhbj4oXG4gICAgICAgICAgICBVcmxVdGlsLmpvaW4oXG4gICAgICAgICAgICAgICAgdGhpcy5hcGlSb290LFxuICAgICAgICAgICAgICAgIHRoaXMuYmFzZUVuZHBvaW50LFxuICAgICAgICAgICAgICAgICd2YWxpZGF0ZS1lbWFpbCcgKyAnP2VtYWlsPScgKyBlbWFpbFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB0aGlzLm5vVG9rZW5IZWFkZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgX3ZhbGlkYXRlVmVyaWZ5RW1haWxUb2tlbihcbiAgICAgICAgdmVyaWZ5RW1haWxUb2tlbjogc3RyaW5nXG4gICAgKTogUHJvbWlzZTxWYWxpZGF0ZVZlcmlmeUVtYWlsVG9rZW5SZXNwb25zZT4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gbmV3IE9wdGlvbnMoKTtcbiAgICAgICAgb3B0aW9ucy5zZWN1cmUgPSBTZWN1cmUuZmFsc2U7XG4gICAgICAgIG9wdGlvbnMudXJsID0gVXJsVXRpbC5qb2luKFxuICAgICAgICAgICAgdGhpcy5hcGlSb290LFxuICAgICAgICAgICAgdGhpcy5iYXNlRW5kcG9pbnQsXG4gICAgICAgICAgICAndmFsaWRhdGUtdmVyaWZ5LWVtYWlsLXRva2VuJ1xuICAgICAgICApO1xuICAgICAgICBvcHRpb25zLnBhcmFtZXRlcnMuYWRkKCd0b2tlbicsIHZlcmlmeUVtYWlsVG9rZW4pO1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0V2l0aE9wdGlvbnM8VmFsaWRhdGVWZXJpZnlFbWFpbFRva2VuUmVzcG9uc2U+KFxuICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICApLmNhdGNoKGFzeW5jIGVyciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5oYW5kbGVQcm9taXNlRXJyb3IoXG4gICAgICAgICAgICAgICAgJ1VzZXJEYXRhU2VydmljZScsXG4gICAgICAgICAgICAgICAgJ3ZhbGlkYXRlVmVyaWZ5RW1haWxUb2tlbicsXG4gICAgICAgICAgICAgICAgZXJyXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=
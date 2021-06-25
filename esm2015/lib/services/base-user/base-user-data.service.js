import { __awaiter, __decorate, __param } from "tslib";
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
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
import * as ɵngcc2 from '@angular/common/http';
let BaseUserDataService = class BaseUserDataService extends BaseDataService {
    /**
     * Constructor
     * @param config - The app config object
     * @param errorDialogService - A reference to the error dialog service
     * @param router - A reference to the router
     * @param httpClient - A reference to the HTTP client service
     */
    constructor(config, errorDialogService, router, httpClient) {
        super(config, errorDialogService, router, httpClient);
        this.config = config;
        this.baseEndpoint = config.userBaseEndpoint;
        this.type = BaseUser;
    }
    /**
     * Add a role to a user
     * @param userId - The user's ID
     * @param role - The role to add to the user
     * @returns The updated user
     * @async
     */
    _addUserRole(userId, role) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = new Options();
            options.secure = Secure.true;
            options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, userId, 'addrole');
            options.parameters.add('role', role);
            return this._putWithOptions(options).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'addUserRole', err);
            }));
        });
    }
    /**
     * Delete a user
     * @param userId - The ID of the user to delete
     * @returns True if the delete succeeded
     * @async
     */
    _deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._delete(userId, Secure.true).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'deleteUser', err);
            }));
        });
    }
    /**
     * Get all admin users
     * @returns An array of admin users
     * @asyncs
     */
    _getAdminUsers(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const getManyOptions = new Options();
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
            const adminUsers = yield this._getManyWithOptions(getManyOptions).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'getAdminUsers', err);
            }));
            return adminUsers;
        });
    }
    /**
     * Get a user
     * @param id - The ID of the user to get
     * @returns A user object
     * @async
     */
    _getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = new Options();
            options.secure = Secure.true;
            options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, id);
            const user = yield this._getWithOptions(options).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'getUser', err);
            }));
            return user;
        });
    }
    // getBasicUsers
    _getBasicUsers(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const getManyOptions = new Options();
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
            const assessmentUsers = yield this._getManyWithOptions(getManyOptions).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'getAssessmentUsers', err);
            }));
            return assessmentUsers;
        });
    }
    /**
     * Get all users
     * @returns An array of users
     * @async
     */
    _getUsers(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const getManyOptions = new Options();
            getManyOptions.secure = Secure.true;
            getManyOptions.url = UrlUtil.join(this.apiRoot, this.baseEndpoint);
            if (options) {
                getManyOptions.parameters.add('skip', options.skip.toString());
                getManyOptions.parameters.add('trace', options.take.toString());
                if (options.sort.length > 0) {
                    getManyOptions.parameters.add('sort', options.sort);
                }
            }
            const assessmentUsers = yield this._getManyWithOptions(getManyOptions).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'getUsers', err);
            }));
            return assessmentUsers;
        });
    }
    /**
     * Remove a role from a user
     * @param userId - The ID of the user
     * @param role - The role to remove from the user
     */
    _removeUserRole(userId, role) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = new Options();
            options.secure = Secure.true;
            options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, userId, 'remove-role');
            options.parameters.add('role', role);
            return this._putWithOptions(options).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'removeUserRole', err);
            }));
        });
    }
    /**
     * Request a password reset
     * @param passwordResetRequest - A password reset request object
     * @returns True if the request succeeded
     * @async
     */
    _requestPasswordReset(passwordResetRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = new Options();
            options.secure = Secure.false;
            options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'request-password-reset');
            options.objectType = BasePasswordResetRequest;
            yield this._postWithOptions(passwordResetRequest, options).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'requestPasswordReset', err);
            }));
            return true;
        });
    }
    /**
     * Request a password reset token. This method is only used for testing.
     * @param passwordResetRequest - A password reset request object
     * @returns A password reset token
     * @async
     */
    _requestPasswordResetToken(passwordResetRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = new Options();
            options.secure = Secure.false;
            options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'request-password-reset-token');
            options.objectType = BasePasswordResetRequest;
            const passwordResetToken = yield this._postWithOptions(passwordResetRequest, options).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'requestPasswordResetToken', err);
            }));
            return passwordResetToken;
        });
    }
    /**
     * Resend Verification email
     * @param verifyEmail - A verification email
     * @returns True if the verification email is sent
     */
    _resendVerificationEmail(verificationEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = new Options();
            options.secure = Secure.false;
            options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'resend-verification-email');
            options.parameters.add('email', verificationEmail);
            return this._getWithOptions(options).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'resendVerificationEmail', err);
            }));
        });
    }
    /**
     * Reset a password
     * @param passwordReset - A password reset object
     * @returns True if the password was successfully reset
     * @async
     */
    _resetPassword(passwordReset) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = new Options();
            options.secure = Secure.false;
            options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'reset-password');
            const result = yield this._postWithOptions(passwordReset, options);
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
            return this._put(user, Secure.true).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'updateUser', err);
            }));
        });
    }
    /**
     * Validate a password reset token
     * @param passwordResetToken - The password reset token to validate
     * @returns A validate password reset token response
     * @async
     */
    _validatePasswordResetToken(passwordResetToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = new Options();
            options.secure = Secure.false;
            options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'validate-password-reset-token');
            options.parameters.add('token', passwordResetToken);
            return this._getWithOptions(options).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'validatePasswordResetToken', err);
            }));
        });
    }
    /**
     * Validate an email address
     * @param email - The email address to validate
     * @returns True if the email address is not currently in the user table
     * @async
     */
    _validateEmail(email) {
        return this.httpClient.get(UrlUtil.join(this.apiRoot, this.baseEndpoint, 'validate-email' + '?email=' + email), {
            headers: this.noTokenHeader
        });
    }
    _validateVerifyEmailToken(verifyEmailToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = new Options();
            options.secure = Secure.false;
            options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'validate-verify-email-token');
            options.parameters.add('token', verifyEmailToken);
            return this._getWithOptions(options).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'validateVerifyEmailToken', err);
            }));
        });
    }
};
BaseUserDataService.ɵfac = function BaseUserDataService_Factory(t) { return new (t || BaseUserDataService)(ɵngcc0.ɵɵinject(LeathermanAppConfigInjectionToken), ɵngcc0.ɵɵinject(ErrorDialogServiceInjectionToken), ɵngcc0.ɵɵinject(ɵngcc1.Router), ɵngcc0.ɵɵinject(ɵngcc2.HttpClient)); };
BaseUserDataService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [LeathermanAppConfigInjectionToken,] }] },
    { type: ErrorDialogService, decorators: [{ type: Inject, args: [ErrorDialogServiceInjectionToken,] }] },
    { type: Router },
    { type: HttpClient }
];
BaseUserDataService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BaseUserDataService_Factory() { return new BaseUserDataService(i0.ɵɵinject(i1.LeathermanAppConfigInjectionToken), i0.ɵɵinject(i2.ErrorDialogServiceInjectionToken), i0.ɵɵinject(i3.Router), i0.ɵɵinject(i4.HttpClient)); }, token: BaseUserDataService, providedIn: "root" });
BaseUserDataService = __decorate([ __param(0, Inject(LeathermanAppConfigInjectionToken)),
    __param(1, Inject(ErrorDialogServiceInjectionToken))
], BaseUserDataService);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BaseUserDataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [LeathermanAppConfigInjectionToken]
            }] }, { type: ErrorDialogService, decorators: [{
                type: Inject,
                args: [ErrorDialogServiceInjectionToken]
            }] }, { type: ɵngcc1.Router }, { type: ɵngcc2.HttpClient }]; }, null); })();
export { BaseUserDataService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS11c2VyLWRhdGEuc2VydmljZS5qcyIsInNvdXJjZXMiOlsibmc6L2xlYXRoZXJtYW4tYm9vdHN0cmFwL2xpYi9zZXJ2aWNlcy9iYXNlLXVzZXIvYmFzZS11c2VyLWRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDOUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDcEcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBRXhILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ3RIO0FBQXFDO0FBQy9CO0FBQ2E7QUFBdUM7QUFHMUQ7QUFDQTtBQUNBLEdBQUc7Ozs7QUFJSCxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFvQixTQUFRLGVBQWU7QUFDeEQsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsSUFBSSxZQUVjLE1BQTRCLEVBRXRDLGtCQUFzQyxFQUN0QyxNQUFjLEVBQ2QsVUFBc0I7QUFDM0IsUUFD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LFlBQ1MsTUFBTTtBQUNwQixZQUFrQixVQUFVO0FBQzVCO0FBQUc7QUFmUSxtQkFBbUIsb0JBSC9CLFVBQVUsQ0FBQyxVQUNSLFVBQVUsRUFBRSxNQUFNLE1BQ3JCLENBQUMsbkRBQ0UsQ0FTSyxXQUFBLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2pELElBQ1EsV0FBQSxNQUFNLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTtBQUNqRCxHQVphLG1CQUFtQixDQTZYL0I7Ozs7Ozs7Ozs7Ozt3RkFDRDtBQUFDLFNBOVhZLG1CQUFtQjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEJhc2VEYXRhU2VydmljZSB9IGZyb20gJy4uL2Jhc2UtZGF0YS9iYXNlLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBFcnJvckRpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9kaWFsb2dzL2Vycm9yL2Vycm9yLWRpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuLi9iYXNlLWRhdGEvX21vZGVscy9iYXNlLWRhdGEtb3B0aW9ucy5tb2RlbCc7XG5pbXBvcnQgeyBTZWN1cmUgfSBmcm9tICcuLi8uLi9lbnVtcy9zZWN1cmUuZW51bSc7XG5pbXBvcnQgeyBVcmxVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbC91cmwvdXJsLnV0aWwnO1xuaW1wb3J0IHsgQmFzZVBhc3N3b3JkUmVzZXRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UtdXNlci9iYXNlLXBhc3N3b3JkLXJlc2V0LXJlcXVlc3QubW9kZWwnO1xuaW1wb3J0IHsgQmFzZVVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvYmFzZS11c2VyL2Jhc2UtdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBMZWF0aGVybWFuQXBwQ29uZmlnSW5qZWN0aW9uVG9rZW4gfSBmcm9tICcuLi8uLi9jb25maWcvaW5qZWN0aW9uLXRva2Vucy9sZWF0aGVybWFuLWFwcC1jb25maWcuaW5qZWN0aW9uLXRva2VuJztcbmltcG9ydCB7IElMZWF0aGVybWFuQXBwQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2FwcC5jb25maWcnO1xuaW1wb3J0IHsgRXJyb3JEaWFsb2dTZXJ2aWNlSW5qZWN0aW9uVG9rZW4gfSBmcm9tICcuLi8uLi9jb25maWcvaW5qZWN0aW9uLXRva2Vucy9lcnJvci1kaWFsb2ctc2VydmljZS5pbmplY3Rpb24tdG9rZW4nO1xuaW1wb3J0IHsgVmFsaWRhdGVQYXNzd29yZFJlc2V0VG9rZW5SZXNwb25zZSB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLXVzZXIvdmFsaWRhdGUtcGFzc3dvcmQtcmVzZXQtdG9rZW4tcmVzcG9uc2UubW9kZWwnO1xuaW1wb3J0IHsgUGFzc3dvcmRSZXNldCB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLXVzZXIvcGFzc3dvcmQtcmVzZXQubW9kZWwnO1xuaW1wb3J0IHsgR2V0T3B0aW9ucyB9IGZyb20gJy4uLy4uL21vZGVscy9hcmdzL2dldC1vcHRpb25zLm1vZGVsJztcbmltcG9ydCB7IFZhbGlkYXRlVmVyaWZ5RW1haWxUb2tlblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UtdXNlci92YWxpZGF0ZS12ZXJpZnktZW1haWwtdG9rZW4tcmVzcG9uc2UubW9kZWwnO1xuXG4vKipcbiAqIFRoZSBiYXNlIHVzZXIgZGF0YSBzZXJ2aWNlXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQmFzZVVzZXJEYXRhU2VydmljZSBleHRlbmRzIEJhc2VEYXRhU2VydmljZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0gY29uZmlnIC0gVGhlIGFwcCBjb25maWcgb2JqZWN0XG4gICAgICogQHBhcmFtIGVycm9yRGlhbG9nU2VydmljZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBlcnJvciBkaWFsb2cgc2VydmljZVxuICAgICAqIEBwYXJhbSByb3V0ZXIgLSBBIHJlZmVyZW5jZSB0byB0aGUgcm91dGVyXG4gICAgICogQHBhcmFtIGh0dHBDbGllbnQgLSBBIHJlZmVyZW5jZSB0byB0aGUgSFRUUCBjbGllbnQgc2VydmljZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBASW5qZWN0KExlYXRoZXJtYW5BcHBDb25maWdJbmplY3Rpb25Ub2tlbilcbiAgICAgICAgcHJvdGVjdGVkIGNvbmZpZzogSUxlYXRoZXJtYW5BcHBDb25maWcsXG4gICAgICAgIEBJbmplY3QoRXJyb3JEaWFsb2dTZXJ2aWNlSW5qZWN0aW9uVG9rZW4pXG4gICAgICAgIGVycm9yRGlhbG9nU2VydmljZTogRXJyb3JEaWFsb2dTZXJ2aWNlLFxuICAgICAgICByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgaHR0cENsaWVudDogSHR0cENsaWVudFxuICAgICkge1xuICAgICAgICBzdXBlcihjb25maWcsIGVycm9yRGlhbG9nU2VydmljZSwgcm91dGVyLCBodHRwQ2xpZW50KTtcbiAgICAgICAgdGhpcy5iYXNlRW5kcG9pbnQgPSBjb25maWcudXNlckJhc2VFbmRwb2ludDtcbiAgICAgICAgdGhpcy50eXBlID0gQmFzZVVzZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgcm9sZSB0byBhIHVzZXJcbiAgICAgKiBAcGFyYW0gdXNlcklkIC0gVGhlIHVzZXIncyBJRFxuICAgICAqIEBwYXJhbSByb2xlIC0gVGhlIHJvbGUgdG8gYWRkIHRvIHRoZSB1c2VyXG4gICAgICogQHJldHVybnMgVGhlIHVwZGF0ZWQgdXNlclxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfYWRkVXNlclJvbGU8VCBleHRlbmRzIEJhc2VVc2VyPihcbiAgICAgICAgdXNlcklkOiBzdHJpbmcsXG4gICAgICAgIHJvbGU6IHN0cmluZ1xuICAgICk6IFByb21pc2U8VD4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gbmV3IE9wdGlvbnMoKTtcbiAgICAgICAgb3B0aW9ucy5zZWN1cmUgPSBTZWN1cmUudHJ1ZTtcbiAgICAgICAgb3B0aW9ucy51cmwgPSBVcmxVdGlsLmpvaW4oXG4gICAgICAgICAgICB0aGlzLmFwaVJvb3QsXG4gICAgICAgICAgICB0aGlzLmJhc2VFbmRwb2ludCxcbiAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgICdhZGRyb2xlJ1xuICAgICAgICApO1xuICAgICAgICBvcHRpb25zLnBhcmFtZXRlcnMuYWRkKCdyb2xlJywgcm9sZSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9wdXRXaXRoT3B0aW9uczxUPihvcHRpb25zKS5jYXRjaChhc3luYyBlcnIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaGFuZGxlUHJvbWlzZUVycm9yKFxuICAgICAgICAgICAgICAgICdVc2VyRGF0YVNlcnZpY2UnLFxuICAgICAgICAgICAgICAgICdhZGRVc2VyUm9sZScsXG4gICAgICAgICAgICAgICAgZXJyXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYSB1c2VyXG4gICAgICogQHBhcmFtIHVzZXJJZCAtIFRoZSBJRCBvZiB0aGUgdXNlciB0byBkZWxldGVcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBkZWxldGUgc3VjY2VlZGVkXG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIF9kZWxldGVVc2VyKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZWxldGUodXNlcklkLCBTZWN1cmUudHJ1ZSkuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmhhbmRsZVByb21pc2VFcnJvcihcbiAgICAgICAgICAgICAgICAnVXNlckRhdGFTZXJ2aWNlJyxcbiAgICAgICAgICAgICAgICAnZGVsZXRlVXNlcicsXG4gICAgICAgICAgICAgICAgZXJyXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIGFkbWluIHVzZXJzXG4gICAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgYWRtaW4gdXNlcnNcbiAgICAgKiBAYXN5bmNzXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIF9nZXRBZG1pblVzZXJzPFQgZXh0ZW5kcyBCYXNlVXNlcj4oXG4gICAgICAgIG9wdGlvbnM/OiBHZXRPcHRpb25zXG4gICAgKTogUHJvbWlzZTxUW10+IHtcbiAgICAgICAgY29uc3QgZ2V0TWFueU9wdGlvbnMgPSBuZXcgT3B0aW9ucygpO1xuICAgICAgICBnZXRNYW55T3B0aW9ucy5zZWN1cmUgPSBTZWN1cmUudHJ1ZTtcbiAgICAgICAgZ2V0TWFueU9wdGlvbnMudXJsID0gVXJsVXRpbC5qb2luKHRoaXMuYXBpUm9vdCwgdGhpcy5iYXNlRW5kcG9pbnQpO1xuICAgICAgICBnZXRNYW55T3B0aW9ucy5wYXJhbWV0ZXJzLmFkZCgncm9sZScsICdhZG1pbicpO1xuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgICAgZ2V0TWFueU9wdGlvbnMucGFyYW1ldGVycy5hZGQoJ3NraXAnLCBvcHRpb25zLnNraXAudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBnZXRNYW55T3B0aW9ucy5wYXJhbWV0ZXJzLmFkZCgndHJhY2UnLCBvcHRpb25zLnRha2UudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zb3J0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBnZXRNYW55T3B0aW9ucy5wYXJhbWV0ZXJzLmFkZCgnc29ydCcsIG9wdGlvbnMuc29ydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWRtaW5Vc2VycyA9IGF3YWl0IHRoaXMuX2dldE1hbnlXaXRoT3B0aW9uczxUPihnZXRNYW55T3B0aW9ucykuY2F0Y2goXG4gICAgICAgICAgICBhc3luYyBlcnIgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmhhbmRsZVByb21pc2VFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJEYXRhU2VydmljZScsXG4gICAgICAgICAgICAgICAgICAgICdnZXRBZG1pblVzZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgZXJyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGFkbWluVXNlcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGEgdXNlclxuICAgICAqIEBwYXJhbSBpZCAtIFRoZSBJRCBvZiB0aGUgdXNlciB0byBnZXRcbiAgICAgKiBAcmV0dXJucyBBIHVzZXIgb2JqZWN0XG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIF9nZXRVc2VyPFQgZXh0ZW5kcyBCYXNlVXNlcj4oaWQ6IHN0cmluZyk6IFByb21pc2U8VD4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gbmV3IE9wdGlvbnMoKTtcbiAgICAgICAgb3B0aW9ucy5zZWN1cmUgPSBTZWN1cmUudHJ1ZTtcbiAgICAgICAgb3B0aW9ucy51cmwgPSBVcmxVdGlsLmpvaW4odGhpcy5hcGlSb290LCB0aGlzLmJhc2VFbmRwb2ludCwgaWQpO1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5fZ2V0V2l0aE9wdGlvbnM8VD4ob3B0aW9ucykuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmhhbmRsZVByb21pc2VFcnJvcignVXNlckRhdGFTZXJ2aWNlJywgJ2dldFVzZXInLCBlcnIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfVxuXG4gICAgLy8gZ2V0QmFzaWNVc2Vyc1xuICAgIHB1YmxpYyBhc3luYyBfZ2V0QmFzaWNVc2VyczxUIGV4dGVuZHMgQmFzZVVzZXI+KFxuICAgICAgICBvcHRpb25zPzogR2V0T3B0aW9uc1xuICAgICk6IFByb21pc2U8VFtdPiB7XG4gICAgICAgIGNvbnN0IGdldE1hbnlPcHRpb25zID0gbmV3IE9wdGlvbnMoKTtcbiAgICAgICAgZ2V0TWFueU9wdGlvbnMuc2VjdXJlID0gU2VjdXJlLnRydWU7XG4gICAgICAgIGdldE1hbnlPcHRpb25zLnVybCA9IFVybFV0aWwuam9pbih0aGlzLmFwaVJvb3QsIHRoaXMuYmFzZUVuZHBvaW50KTtcbiAgICAgICAgZ2V0TWFueU9wdGlvbnMucGFyYW1ldGVycy5hZGQoJ29ubHlyb2xlJywgJ3VzZXInKTtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGdldE1hbnlPcHRpb25zLnBhcmFtZXRlcnMuYWRkKCdza2lwJywgb3B0aW9ucy5za2lwLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgZ2V0TWFueU9wdGlvbnMucGFyYW1ldGVycy5hZGQoJ3RyYWNlJywgb3B0aW9ucy50YWtlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc29ydC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZ2V0TWFueU9wdGlvbnMucGFyYW1ldGVycy5hZGQoJ3NvcnQnLCBvcHRpb25zLnNvcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFzc2Vzc21lbnRVc2VycyA9IGF3YWl0IHRoaXMuX2dldE1hbnlXaXRoT3B0aW9uczxUPihcbiAgICAgICAgICAgIGdldE1hbnlPcHRpb25zXG4gICAgICAgICkuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmhhbmRsZVByb21pc2VFcnJvcihcbiAgICAgICAgICAgICAgICAnVXNlckRhdGFTZXJ2aWNlJyxcbiAgICAgICAgICAgICAgICAnZ2V0QXNzZXNzbWVudFVzZXJzJyxcbiAgICAgICAgICAgICAgICBlcnJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXNzZXNzbWVudFVzZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgdXNlcnNcbiAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiB1c2Vyc1xuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfZ2V0VXNlcnM8VCBleHRlbmRzIEJhc2VVc2VyPihcbiAgICAgICAgb3B0aW9ucz86IEdldE9wdGlvbnNcbiAgICApOiBQcm9taXNlPFRbXT4ge1xuICAgICAgICBjb25zdCBnZXRNYW55T3B0aW9ucyA9IG5ldyBPcHRpb25zKCk7XG4gICAgICAgIGdldE1hbnlPcHRpb25zLnNlY3VyZSA9IFNlY3VyZS50cnVlO1xuICAgICAgICBnZXRNYW55T3B0aW9ucy51cmwgPSBVcmxVdGlsLmpvaW4odGhpcy5hcGlSb290LCB0aGlzLmJhc2VFbmRwb2ludCk7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICBnZXRNYW55T3B0aW9ucy5wYXJhbWV0ZXJzLmFkZCgnc2tpcCcsIG9wdGlvbnMuc2tpcC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGdldE1hbnlPcHRpb25zLnBhcmFtZXRlcnMuYWRkKCd0cmFjZScsIG9wdGlvbnMudGFrZS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnNvcnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGdldE1hbnlPcHRpb25zLnBhcmFtZXRlcnMuYWRkKCdzb3J0Jywgb3B0aW9ucy5zb3J0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhc3Nlc3NtZW50VXNlcnMgPSBhd2FpdCB0aGlzLl9nZXRNYW55V2l0aE9wdGlvbnM8VD4oXG4gICAgICAgICAgICBnZXRNYW55T3B0aW9uc1xuICAgICAgICApLmNhdGNoKGFzeW5jIGVyciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5oYW5kbGVQcm9taXNlRXJyb3IoJ1VzZXJEYXRhU2VydmljZScsICdnZXRVc2VycycsIGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXNzZXNzbWVudFVzZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIHJvbGUgZnJvbSBhIHVzZXJcbiAgICAgKiBAcGFyYW0gdXNlcklkIC0gVGhlIElEIG9mIHRoZSB1c2VyXG4gICAgICogQHBhcmFtIHJvbGUgLSBUaGUgcm9sZSB0byByZW1vdmUgZnJvbSB0aGUgdXNlclxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfcmVtb3ZlVXNlclJvbGU8VCBleHRlbmRzIEJhc2VVc2VyPihcbiAgICAgICAgdXNlcklkOiBzdHJpbmcsXG4gICAgICAgIHJvbGU6IHN0cmluZ1xuICAgICk6IFByb21pc2U8VD4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gbmV3IE9wdGlvbnMoKTtcbiAgICAgICAgb3B0aW9ucy5zZWN1cmUgPSBTZWN1cmUudHJ1ZTtcbiAgICAgICAgb3B0aW9ucy51cmwgPSBVcmxVdGlsLmpvaW4oXG4gICAgICAgICAgICB0aGlzLmFwaVJvb3QsXG4gICAgICAgICAgICB0aGlzLmJhc2VFbmRwb2ludCxcbiAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgICdyZW1vdmUtcm9sZSdcbiAgICAgICAgKTtcbiAgICAgICAgb3B0aW9ucy5wYXJhbWV0ZXJzLmFkZCgncm9sZScsIHJvbGUpO1xuICAgICAgICByZXR1cm4gdGhpcy5fcHV0V2l0aE9wdGlvbnM8VD4ob3B0aW9ucykuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmhhbmRsZVByb21pc2VFcnJvcihcbiAgICAgICAgICAgICAgICAnVXNlckRhdGFTZXJ2aWNlJyxcbiAgICAgICAgICAgICAgICAncmVtb3ZlVXNlclJvbGUnLFxuICAgICAgICAgICAgICAgIGVyclxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVxdWVzdCBhIHBhc3N3b3JkIHJlc2V0XG4gICAgICogQHBhcmFtIHBhc3N3b3JkUmVzZXRSZXF1ZXN0IC0gQSBwYXNzd29yZCByZXNldCByZXF1ZXN0IG9iamVjdFxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZGVkXG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIF9yZXF1ZXN0UGFzc3dvcmRSZXNldChcbiAgICAgICAgcGFzc3dvcmRSZXNldFJlcXVlc3Q6IEJhc2VQYXNzd29yZFJlc2V0UmVxdWVzdFxuICAgICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gbmV3IE9wdGlvbnMoKTtcbiAgICAgICAgb3B0aW9ucy5zZWN1cmUgPSBTZWN1cmUuZmFsc2U7XG4gICAgICAgIG9wdGlvbnMudXJsID0gVXJsVXRpbC5qb2luKFxuICAgICAgICAgICAgdGhpcy5hcGlSb290LFxuICAgICAgICAgICAgdGhpcy5iYXNlRW5kcG9pbnQsXG4gICAgICAgICAgICAncmVxdWVzdC1wYXNzd29yZC1yZXNldCdcbiAgICAgICAgKTtcbiAgICAgICAgb3B0aW9ucy5vYmplY3RUeXBlID0gQmFzZVBhc3N3b3JkUmVzZXRSZXF1ZXN0O1xuICAgICAgICBhd2FpdCB0aGlzLl9wb3N0V2l0aE9wdGlvbnM8Ym9vbGVhbj4ocGFzc3dvcmRSZXNldFJlcXVlc3QsIG9wdGlvbnMpLmNhdGNoKFxuICAgICAgICAgICAgYXN5bmMgZXJyID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5oYW5kbGVQcm9taXNlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdVc2VyRGF0YVNlcnZpY2UnLFxuICAgICAgICAgICAgICAgICAgICAncmVxdWVzdFBhc3N3b3JkUmVzZXQnLFxuICAgICAgICAgICAgICAgICAgICBlcnJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IGEgcGFzc3dvcmQgcmVzZXQgdG9rZW4uIFRoaXMgbWV0aG9kIGlzIG9ubHkgdXNlZCBmb3IgdGVzdGluZy5cbiAgICAgKiBAcGFyYW0gcGFzc3dvcmRSZXNldFJlcXVlc3QgLSBBIHBhc3N3b3JkIHJlc2V0IHJlcXVlc3Qgb2JqZWN0XG4gICAgICogQHJldHVybnMgQSBwYXNzd29yZCByZXNldCB0b2tlblxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfcmVxdWVzdFBhc3N3b3JkUmVzZXRUb2tlbihcbiAgICAgICAgcGFzc3dvcmRSZXNldFJlcXVlc3Q6IEJhc2VQYXNzd29yZFJlc2V0UmVxdWVzdFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBuZXcgT3B0aW9ucygpO1xuICAgICAgICBvcHRpb25zLnNlY3VyZSA9IFNlY3VyZS5mYWxzZTtcbiAgICAgICAgb3B0aW9ucy51cmwgPSBVcmxVdGlsLmpvaW4oXG4gICAgICAgICAgICB0aGlzLmFwaVJvb3QsXG4gICAgICAgICAgICB0aGlzLmJhc2VFbmRwb2ludCxcbiAgICAgICAgICAgICdyZXF1ZXN0LXBhc3N3b3JkLXJlc2V0LXRva2VuJ1xuICAgICAgICApO1xuICAgICAgICBvcHRpb25zLm9iamVjdFR5cGUgPSBCYXNlUGFzc3dvcmRSZXNldFJlcXVlc3Q7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkUmVzZXRUb2tlbiA9IGF3YWl0IHRoaXMuX3Bvc3RXaXRoT3B0aW9uczxzdHJpbmc+KFxuICAgICAgICAgICAgcGFzc3dvcmRSZXNldFJlcXVlc3QsXG4gICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICkuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmhhbmRsZVByb21pc2VFcnJvcihcbiAgICAgICAgICAgICAgICAnVXNlckRhdGFTZXJ2aWNlJyxcbiAgICAgICAgICAgICAgICAncmVxdWVzdFBhc3N3b3JkUmVzZXRUb2tlbicsXG4gICAgICAgICAgICAgICAgZXJyXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhc3N3b3JkUmVzZXRUb2tlbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNlbmQgVmVyaWZpY2F0aW9uIGVtYWlsXG4gICAgICogQHBhcmFtIHZlcmlmeUVtYWlsIC0gQSB2ZXJpZmljYXRpb24gZW1haWxcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2ZXJpZmljYXRpb24gZW1haWwgaXMgc2VudFxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfcmVzZW5kVmVyaWZpY2F0aW9uRW1haWwoXG4gICAgICAgIHZlcmlmaWNhdGlvbkVtYWlsOiBzdHJpbmdcbiAgICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBPcHRpb25zKCk7XG4gICAgICAgIG9wdGlvbnMuc2VjdXJlID0gU2VjdXJlLmZhbHNlO1xuICAgICAgICBvcHRpb25zLnVybCA9IFVybFV0aWwuam9pbihcbiAgICAgICAgICAgIHRoaXMuYXBpUm9vdCxcbiAgICAgICAgICAgIHRoaXMuYmFzZUVuZHBvaW50LFxuICAgICAgICAgICAgJ3Jlc2VuZC12ZXJpZmljYXRpb24tZW1haWwnXG4gICAgICAgICk7XG4gICAgICAgIG9wdGlvbnMucGFyYW1ldGVycy5hZGQoJ2VtYWlsJywgdmVyaWZpY2F0aW9uRW1haWwpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0V2l0aE9wdGlvbnM8Ym9vbGVhbj4oXG4gICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICkuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmhhbmRsZVByb21pc2VFcnJvcihcbiAgICAgICAgICAgICAgICAnVXNlckRhdGFTZXJ2aWNlJyxcbiAgICAgICAgICAgICAgICAncmVzZW5kVmVyaWZpY2F0aW9uRW1haWwnLFxuICAgICAgICAgICAgICAgIGVyclxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgYSBwYXNzd29yZFxuICAgICAqIEBwYXJhbSBwYXNzd29yZFJlc2V0IC0gQSBwYXNzd29yZCByZXNldCBvYmplY3RcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBwYXNzd29yZCB3YXMgc3VjY2Vzc2Z1bGx5IHJlc2V0XG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIF9yZXNldFBhc3N3b3JkKHBhc3N3b3JkUmVzZXQ6IFBhc3N3b3JkUmVzZXQpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBPcHRpb25zKCk7XG4gICAgICAgIG9wdGlvbnMuc2VjdXJlID0gU2VjdXJlLmZhbHNlO1xuICAgICAgICBvcHRpb25zLnVybCA9IFVybFV0aWwuam9pbihcbiAgICAgICAgICAgIHRoaXMuYXBpUm9vdCxcbiAgICAgICAgICAgIHRoaXMuYmFzZUVuZHBvaW50LFxuICAgICAgICAgICAgJ3Jlc2V0LXBhc3N3b3JkJ1xuICAgICAgICApO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9wb3N0V2l0aE9wdGlvbnM8Ym9vbGVhbj4ocGFzc3dvcmRSZXNldCwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGEgdXNlclxuICAgICAqIEBwYXJhbSB1c2VyIC0gVGhlIHVzZXIgdG8gdXBkYXRlXG4gICAgICogQHJldHVybnMgVGhlIHVwZGF0ZWQgdXNlclxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBfdXBkYXRlVXNlcjxUIGV4dGVuZHMgQmFzZVVzZXI+KHVzZXI6IFQpOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3B1dDxUPih1c2VyLCBTZWN1cmUudHJ1ZSkuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmhhbmRsZVByb21pc2VFcnJvcihcbiAgICAgICAgICAgICAgICAnVXNlckRhdGFTZXJ2aWNlJyxcbiAgICAgICAgICAgICAgICAndXBkYXRlVXNlcicsXG4gICAgICAgICAgICAgICAgZXJyXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBhIHBhc3N3b3JkIHJlc2V0IHRva2VuXG4gICAgICogQHBhcmFtIHBhc3N3b3JkUmVzZXRUb2tlbiAtIFRoZSBwYXNzd29yZCByZXNldCB0b2tlbiB0byB2YWxpZGF0ZVxuICAgICAqIEByZXR1cm5zIEEgdmFsaWRhdGUgcGFzc3dvcmQgcmVzZXQgdG9rZW4gcmVzcG9uc2VcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgX3ZhbGlkYXRlUGFzc3dvcmRSZXNldFRva2VuKFxuICAgICAgICBwYXNzd29yZFJlc2V0VG9rZW46IHN0cmluZ1xuICAgICk6IFByb21pc2U8VmFsaWRhdGVQYXNzd29yZFJlc2V0VG9rZW5SZXNwb25zZT4ge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gbmV3IE9wdGlvbnMoKTtcbiAgICAgICAgb3B0aW9ucy5zZWN1cmUgPSBTZWN1cmUuZmFsc2U7XG4gICAgICAgIG9wdGlvbnMudXJsID0gVXJsVXRpbC5qb2luKFxuICAgICAgICAgICAgdGhpcy5hcGlSb290LFxuICAgICAgICAgICAgdGhpcy5iYXNlRW5kcG9pbnQsXG4gICAgICAgICAgICAndmFsaWRhdGUtcGFzc3dvcmQtcmVzZXQtdG9rZW4nXG4gICAgICAgICk7XG4gICAgICAgIG9wdGlvbnMucGFyYW1ldGVycy5hZGQoJ3Rva2VuJywgcGFzc3dvcmRSZXNldFRva2VuKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldFdpdGhPcHRpb25zPFZhbGlkYXRlUGFzc3dvcmRSZXNldFRva2VuUmVzcG9uc2U+KFxuICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICApLmNhdGNoKGFzeW5jIGVyciA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5oYW5kbGVQcm9taXNlRXJyb3IoXG4gICAgICAgICAgICAgICAgJ1VzZXJEYXRhU2VydmljZScsXG4gICAgICAgICAgICAgICAgJ3ZhbGlkYXRlUGFzc3dvcmRSZXNldFRva2VuJyxcbiAgICAgICAgICAgICAgICBlcnJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIGFuIGVtYWlsIGFkZHJlc3NcbiAgICAgKiBAcGFyYW0gZW1haWwgLSBUaGUgZW1haWwgYWRkcmVzcyB0byB2YWxpZGF0ZVxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGVtYWlsIGFkZHJlc3MgaXMgbm90IGN1cnJlbnRseSBpbiB0aGUgdXNlciB0YWJsZVxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHB1YmxpYyBfdmFsaWRhdGVFbWFpbChlbWFpbDogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PGJvb2xlYW4+KFxuICAgICAgICAgICAgVXJsVXRpbC5qb2luKFxuICAgICAgICAgICAgICAgIHRoaXMuYXBpUm9vdCxcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2VFbmRwb2ludCxcbiAgICAgICAgICAgICAgICAndmFsaWRhdGUtZW1haWwnICsgJz9lbWFpbD0nICsgZW1haWxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogdGhpcy5ub1Rva2VuSGVhZGVyXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIF92YWxpZGF0ZVZlcmlmeUVtYWlsVG9rZW4oXG4gICAgICAgIHZlcmlmeUVtYWlsVG9rZW46IHN0cmluZ1xuICAgICk6IFByb21pc2U8VmFsaWRhdGVWZXJpZnlFbWFpbFRva2VuUmVzcG9uc2U+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBPcHRpb25zKCk7XG4gICAgICAgIG9wdGlvbnMuc2VjdXJlID0gU2VjdXJlLmZhbHNlO1xuICAgICAgICBvcHRpb25zLnVybCA9IFVybFV0aWwuam9pbihcbiAgICAgICAgICAgIHRoaXMuYXBpUm9vdCxcbiAgICAgICAgICAgIHRoaXMuYmFzZUVuZHBvaW50LFxuICAgICAgICAgICAgJ3ZhbGlkYXRlLXZlcmlmeS1lbWFpbC10b2tlbidcbiAgICAgICAgKTtcbiAgICAgICAgb3B0aW9ucy5wYXJhbWV0ZXJzLmFkZCgndG9rZW4nLCB2ZXJpZnlFbWFpbFRva2VuKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldFdpdGhPcHRpb25zPFZhbGlkYXRlVmVyaWZ5RW1haWxUb2tlblJlc3BvbnNlPihcbiAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgKS5jYXRjaChhc3luYyBlcnIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaGFuZGxlUHJvbWlzZUVycm9yKFxuICAgICAgICAgICAgICAgICdVc2VyRGF0YVNlcnZpY2UnLFxuICAgICAgICAgICAgICAgICd2YWxpZGF0ZVZlcmlmeUVtYWlsVG9rZW4nLFxuICAgICAgICAgICAgICAgIGVyclxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19
import { __awaiter, __decorate, __generator, __param } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { AuthenticationDataService } from './authentication-data.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LeathermanAppConfigInjectionToken } from '../../config/injection-tokens/leatherman-app-config.injection-token';
import { Secure } from '../../enums/secure.enum';
import * as i0 from "@angular/core";
import * as i1 from "../../config/injection-tokens/leatherman-app-config.injection-token";
import * as i2 from "./authentication-data.service";
/**
 * A service to handle client authentication
 */
var AuthenticationService = /** @class */ (function () {
    /**
     * Constructor
     * @param config - The app config object
     * @param authenticationDataService - A reference to the authentication data service
     */
    function AuthenticationService(config, authenticationDataService) {
        this.config = config;
        this.authenticationDataService = authenticationDataService;
        /** Reference to the JWT helper service */
        this.jwtHelper = new JwtHelperService();
    }
    Object.defineProperty(AuthenticationService.prototype, "token", {
        // **********************
        // * Private properties
        // **********************
        /** Get accessor for the JWT token */
        get: function () {
            if (!this._token) {
                this._token = this.getTokenFromLocalStorage();
            }
            return this._token;
        },
        /** Set accessor for the JWT token */
        set: function (token) {
            this.setLocalStorage(token);
            this._token = token;
        },
        enumerable: true,
        configurable: true
    });
    // **********************
    // * Public methods
    // **********************
    AuthenticationService.prototype.authenticate = function (loginRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var authenticationDetails;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authenticationDataService.authenticate(loginRequest)];
                    case 1:
                        authenticationDetails = _a.sent();
                        if (authenticationDetails.token && authenticationDetails.token.length > 0) {
                            this.token = authenticationDetails.token;
                        }
                        else {
                            this.clearToken();
                        }
                        return [2 /*return*/, authenticationDetails];
                }
            });
        });
    };
    /**
     * Clear the JWT token
     */
    AuthenticationService.prototype.clearToken = function () {
        this._token = '';
        this.clearLocalStorage();
    };
    /**
     * Get the user's primary role
     * @returns The user's primary role
     * @async
     */
    AuthenticationService.prototype.getPrimaryUserRole = function () {
        var userRoles = this.getUserRoles();
        if (userRoles.find(function (role) { return role === 'admin'; })) {
            return 'admin';
        }
        if (userRoles.find(function (role) { return role === 'user'; })) {
            return 'user';
        }
        return userRoles[0];
    };
    /**
     * Get the JWT token expiration date
     * @returns The date the token expires
     */
    AuthenticationService.prototype.getTokenExpirationDate = function () {
        var expirationDate = this.jwtHelper.getTokenExpirationDate(this.token);
        return expirationDate;
    };
    /**
     * Get the logged in user's ID
     * @returns The user's ID
     */
    AuthenticationService.prototype.getUserId = function () {
        if (this.isAuthenticated() === false) {
            return null;
        }
        var tokenPayload = this.jwtHelper.decodeToken(this.token);
        return tokenPayload.userId;
    };
    /**
     * Get the user's roles
     * @returns An array of the user's roles
     */
    AuthenticationService.prototype.getUserRoles = function () {
        if (this.isAuthenticated() === false) {
            return [];
        }
        var tokenPayload = this.jwtHelper.decodeToken(this.token);
        return tokenPayload.roles;
    };
    /**
     * Determine if the user is authenticated
     * @returns True if the user is authenticated
     */
    AuthenticationService.prototype.isAuthenticated = function () {
        if (!this.token) {
            return false;
        }
        if (this.jwtHelper.isTokenExpired(this.token)) {
            this.clearLocalStorage();
            return false;
        }
        return true;
    };
    /**
     * Log in a user
     * @param loginRequest - The login request object
     * @returns True if the login succeeded
     * @async
     */
    AuthenticationService.prototype.loginUser = function (loginRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var authenticationDetails;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authenticationDataService.authenticate(loginRequest)];
                    case 1:
                        authenticationDetails = _a.sent();
                        if (authenticationDetails.token && authenticationDetails.token.length > 0) {
                            this.token = authenticationDetails.token;
                        }
                        else {
                            this.clearToken();
                        }
                        return [2 /*return*/, authenticationDetails];
                }
            });
        });
    };
    /**
     * Log out a user
     */
    AuthenticationService.prototype.logoutUser = function () {
        this.clearToken();
    };
    /**
     * Register a new user
     * @param newUserRequest - The new user request
     * @param secure - An enum indicating whether the endpoing is secure
     */
    AuthenticationService.prototype.registerUser = function (newUserRequest, secure) {
        if (secure === void 0) { secure = Secure.false; }
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authenticationDataService.register(newUserRequest, secure)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    /**
     * Set the JWT token
     * @param token - The JWT token
     */
    AuthenticationService.prototype.setToken = function (token) {
        this.setLocalStorage(token);
        this._token = token;
    };
    // **********************
    // * Private methods
    // **********************
    /**
     * Remove the JWT token from local storage
     */
    AuthenticationService.prototype.clearLocalStorage = function () {
        localStorage.removeItem(this.config.jwtTokenName);
    };
    /**
     * Get the JWT token from local storage
     * @returns The JWT token
     */
    AuthenticationService.prototype.getTokenFromLocalStorage = function () {
        var token = localStorage.getItem(this.config.jwtTokenName);
        if (!token) {
            return '';
        }
        return token;
    };
    /**
     * Save the JWT token to local storage
     * @param token - The JWT token
     */
    AuthenticationService.prototype.setLocalStorage = function (token) {
        localStorage.setItem(this.config.jwtTokenName, token);
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [LeathermanAppConfigInjectionToken,] }] },
        { type: AuthenticationDataService }
    ]; };
    AuthenticationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthenticationService_Factory() { return new AuthenticationService(i0.ɵɵinject(i1.LeathermanAppConfigInjectionToken), i0.ɵɵinject(i2.AuthenticationDataService)); }, token: AuthenticationService, providedIn: "root" });
    AuthenticationService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Inject(LeathermanAppConfigInjectionToken))
    ], AuthenticationService);
    return AuthenticationService;
}());
export { AuthenticationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBS3RELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQUdqRDs7R0FFRztBQUlIO0lBdUJFOzs7O09BSUc7SUFDSCwrQkFFVSxNQUE0QixFQUM1Qix5QkFBb0Q7UUFEcEQsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDNUIsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQVo5RCwwQ0FBMEM7UUFDbEMsY0FBUyxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztJQVl2QyxDQUFDO0lBMUJMLHNCQUFZLHdDQUFLO1FBTGpCLHlCQUF5QjtRQUN6Qix1QkFBdUI7UUFDdkIseUJBQXlCO1FBRXpCLHFDQUFxQzthQUNyQztZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO2FBQy9DO1lBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7UUFFRCxxQ0FBcUM7YUFDckMsVUFBa0IsS0FBYTtZQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxNQUFNLEdB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QU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRDs7O09BR0c7SUFDSywrQ0FBZSxHQUF2QixVQUF3QixLQUFhO1FBQ25DLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Z0RBMUtFLE1BQU0sU0FBQyxpQ0FBaUM7Z0JBRU4seUJBQXlCOzs7SUEvQm5ELHFCQUFxQjtRQUhqQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO1FBOEJHLFdBQUEsTUFBTSxDQUFDLGlDQUFpQyxDQUFDLENBQUE7T0E3QmpDLHFCQUFxQixDQXdNakM7Z0NBek5EO0NBeU5DLEFBeE1ELElBd01DO1NBeE1ZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25EYXRhU2VydmljZSB9IGZyb20gJy4vYXV0aGVudGljYXRpb24tZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IEp3dEhlbHBlclNlcnZpY2UgfSBmcm9tICdAYXV0aDAvYW5ndWxhci1qd3QnO1xuaW1wb3J0IHsgTG9naW5SZXF1ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2F1dGhlbnRpY2F0aW9uL2xvZ2luLXJlcXVlc3QubW9kZWwnO1xuaW1wb3J0IHsgQmFzZU5ld1VzZXJSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UtdXNlci9iYXNlLW5ldy11c2VyLXJlcXVlc3QubW9kZWwnO1xuaW1wb3J0IHsgQmFzZVVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvYmFzZS11c2VyL2Jhc2UtdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBJTGVhdGhlcm1hbkFwcENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9hcHAuY29uZmlnJztcbmltcG9ydCB7IExlYXRoZXJtYW5BcHBDb25maWdJbmplY3Rpb25Ub2tlbiB9IGZyb20gJy4uLy4uL2NvbmZpZy9pbmplY3Rpb24tdG9rZW5zL2xlYXRoZXJtYW4tYXBwLWNvbmZpZy5pbmplY3Rpb24tdG9rZW4nO1xuaW1wb3J0IHsgU2VjdXJlIH0gZnJvbSAnLi4vLi4vZW51bXMvc2VjdXJlLmVudW0nO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25EZXRhaWxzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLWRldGFpbHMubW9kZWwnO1xuXG4vKipcbiAqIEEgc2VydmljZSB0byBoYW5kbGUgY2xpZW50IGF1dGhlbnRpY2F0aW9uXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VydmljZSB7XG4gIC8vICoqKioqKioqKioqKioqKioqKioqKipcbiAgLy8gKiBQcml2YXRlIHByb3BlcnRpZXNcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKlxuXG4gIC8qKiBHZXQgYWNjZXNzb3IgZm9yIHRoZSBKV1QgdG9rZW4gKi9cbiAgcHJpdmF0ZSBnZXQgdG9rZW4oKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuX3Rva2VuKSB7XG4gICAgICB0aGlzLl90b2tlbiA9IHRoaXMuZ2V0VG9rZW5Gcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl90b2tlbjtcbiAgfVxuXG4gIC8qKiBTZXQgYWNjZXNzb3IgZm9yIHRoZSBKV1QgdG9rZW4gKi9cbiAgcHJpdmF0ZSBzZXQgdG9rZW4odG9rZW46IHN0cmluZykge1xuICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKHRva2VuKTtcbiAgICB0aGlzLl90b2tlbiA9IHRva2VuO1xuICB9XG5cbiAgLyoqIFJlZmVyZW5jZSB0byB0aGUgSldUIGhlbHBlciBzZXJ2aWNlICovXG4gIHByaXZhdGUgand0SGVscGVyID0gbmV3IEp3dEhlbHBlclNlcnZpY2UoKTtcbiAgcHJpdmF0ZSBfdG9rZW46IHN0cmluZztcblxuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogQHBhcmFtIGNvbmZpZyAtIFRoZSBhcHAgY29uZmlnIG9iamVjdFxuICAgKiBAcGFyYW0gYXV0aGVudGljYXRpb25EYXRhU2VydmljZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBhdXRoZW50aWNhdGlvbiBkYXRhIHNlcnZpY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoTGVhdGhlcm1hbkFwcENvbmZpZ0luamVjdGlvblRva2VuKVxuICAgIHByaXZhdGUgY29uZmlnOiBJTGVhdGhlcm1hbkFwcENvbmZpZyxcbiAgICBwcml2YXRlIGF1dGhlbnRpY2F0aW9uRGF0YVNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uRGF0YVNlcnZpY2VcbiAgKSB7IH1cblxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vICogUHVibGljIG1ldGhvZHNcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKlxuXG4gIHB1YmxpYyBhc3luYyBhdXRoZW50aWNhdGUobG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QpOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uRGV0YWlscz4ge1xuICAgIGNvbnN0IGF1dGhlbnRpY2F0aW9uRGV0YWlscyA9IGF3YWl0IHRoaXMuYXV0aGVudGljYXRpb25EYXRhU2VydmljZS5hdXRoZW50aWNhdGUoXG4gICAgICBsb2dpblJlcXVlc3RcbiAgICApO1xuICAgIGlmIChhdXRoZW50aWNhdGlvbkRldGFpbHMudG9rZW4gJiYgYXV0aGVudGljYXRpb25EZXRhaWxzLnRva2VuLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMudG9rZW4gPSBhdXRoZW50aWNhdGlvbkRldGFpbHMudG9rZW47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJUb2tlbigpO1xuICAgIH1cbiAgICByZXR1cm4gYXV0aGVudGljYXRpb25EZXRhaWxzO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBKV1QgdG9rZW5cbiAgICovXG4gIHB1YmxpYyBjbGVhclRva2VuKCkge1xuICAgIHRoaXMuX3Rva2VuID0gJyc7XG4gICAgdGhpcy5jbGVhckxvY2FsU3RvcmFnZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdXNlcidzIHByaW1hcnkgcm9sZVxuICAgKiBAcmV0dXJucyBUaGUgdXNlcidzIHByaW1hcnkgcm9sZVxuICAgKiBAYXN5bmNcbiAgICovXG4gIHB1YmxpYyBnZXRQcmltYXJ5VXNlclJvbGUoKTogc3RyaW5nIHtcbiAgICBjb25zdCB1c2VyUm9sZXMgPSB0aGlzLmdldFVzZXJSb2xlcygpO1xuICAgIGlmICh1c2VyUm9sZXMuZmluZChyb2xlID0+IHJvbGUgPT09ICdhZG1pbicpKSB7XG4gICAgICByZXR1cm4gJ2FkbWluJztcbiAgICB9XG4gICAgaWYgKHVzZXJSb2xlcy5maW5kKHJvbGUgPT4gcm9sZSA9PT0gJ3VzZXInKSkge1xuICAgICAgcmV0dXJuICd1c2VyJztcbiAgICB9XG4gICAgcmV0dXJuIHVzZXJSb2xlc1swXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIEpXVCB0b2tlbiBleHBpcmF0aW9uIGRhdGVcbiAgICogQHJldHVybnMgVGhlIGRhdGUgdGhlIHRva2VuIGV4cGlyZXNcbiAgICovXG4gIHB1YmxpYyBnZXRUb2tlbkV4cGlyYXRpb25EYXRlKCk6IERhdGUgfCBudWxsIHtcbiAgICBjb25zdCBleHBpcmF0aW9uRGF0ZSA9IHRoaXMuand0SGVscGVyLmdldFRva2VuRXhwaXJhdGlvbkRhdGUodGhpcy50b2tlbik7XG4gICAgcmV0dXJuIGV4cGlyYXRpb25EYXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbG9nZ2VkIGluIHVzZXIncyBJRFxuICAgKiBAcmV0dXJucyBUaGUgdXNlcidzIElEXG4gICAqL1xuICBwdWJsaWMgZ2V0VXNlcklkKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuaXNBdXRoZW50aWNhdGVkKCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgdG9rZW5QYXlsb2FkID0gdGhpcy5qd3RIZWxwZXIuZGVjb2RlVG9rZW4odGhpcy50b2tlbik7XG4gICAgcmV0dXJuIHRva2VuUGF5bG9hZC51c2VySWQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB1c2VyJ3Mgcm9sZXNcbiAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgdGhlIHVzZXIncyByb2xlc1xuICAgKi9cbiAgcHVibGljIGdldFVzZXJSb2xlcygpOiBzdHJpbmdbXSB7XG4gICAgaWYgKHRoaXMuaXNBdXRoZW50aWNhdGVkKCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IHRva2VuUGF5bG9hZCA9IHRoaXMuand0SGVscGVyLmRlY29kZVRva2VuKHRoaXMudG9rZW4pO1xuICAgIHJldHVybiB0b2tlblBheWxvYWQucm9sZXM7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoZSB1c2VyIGlzIGF1dGhlbnRpY2F0ZWRcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdXNlciBpcyBhdXRoZW50aWNhdGVkXG4gICAqL1xuICBwdWJsaWMgaXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy50b2tlbikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5qd3RIZWxwZXIuaXNUb2tlbkV4cGlyZWQodGhpcy50b2tlbikpIHtcbiAgICAgIHRoaXMuY2xlYXJMb2NhbFN0b3JhZ2UoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogTG9nIGluIGEgdXNlclxuICAgKiBAcGFyYW0gbG9naW5SZXF1ZXN0IC0gVGhlIGxvZ2luIHJlcXVlc3Qgb2JqZWN0XG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGxvZ2luIHN1Y2NlZWRlZFxuICAgKiBAYXN5bmNcbiAgICovXG4gIHB1YmxpYyBhc3luYyBsb2dpblVzZXI8VCBleHRlbmRzIExvZ2luUmVxdWVzdD4obG9naW5SZXF1ZXN0OiBUKTogUHJvbWlzZTxBdXRoZW50aWNhdGlvbkRldGFpbHM+IHtcbiAgICBjb25zdCBhdXRoZW50aWNhdGlvbkRldGFpbHMgPSBhd2FpdCB0aGlzLmF1dGhlbnRpY2F0aW9uRGF0YVNlcnZpY2UuYXV0aGVudGljYXRlKGxvZ2luUmVxdWVzdCk7XG4gICAgaWYgKGF1dGhlbnRpY2F0aW9uRGV0YWlscy50b2tlbiAmJiBhdXRoZW50aWNhdGlvbkRldGFpbHMudG9rZW4ubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy50b2tlbiA9IGF1dGhlbnRpY2F0aW9uRGV0YWlscy50b2tlbjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhclRva2VuKCk7XG4gICAgfVxuICAgIHJldHVybiBhdXRoZW50aWNhdGlvbkRldGFpbHM7XG4gIH1cblxuICAvKipcbiAgICogTG9nIG91dCBhIHVzZXJcbiAgICovXG4gIHB1YmxpYyBsb2dvdXRVc2VyKCkge1xuICAgIHRoaXMuY2xlYXJUb2tlbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgbmV3IHVzZXJcbiAgICogQHBhcmFtIG5ld1VzZXJSZXF1ZXN0IC0gVGhlIG5ldyB1c2VyIHJlcXVlc3RcbiAgICogQHBhcmFtIHNlY3VyZSAtIEFuIGVudW0gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBlbmRwb2luZyBpcyBzZWN1cmVcbiAgICovXG4gIHB1YmxpYyBhc3luYyByZWdpc3RlclVzZXI8VCBleHRlbmRzIEJhc2VOZXdVc2VyUmVxdWVzdCwgVSBleHRlbmRzIEJhc2VVc2VyPihcbiAgICBuZXdVc2VyUmVxdWVzdDogVCxcbiAgICBzZWN1cmU6IFNlY3VyZSA9IFNlY3VyZS5mYWxzZVxuICApOiBQcm9taXNlPFU+IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5hdXRoZW50aWNhdGlvbkRhdGFTZXJ2aWNlLnJlZ2lzdGVyPFQsIFU+KFxuICAgICAgbmV3VXNlclJlcXVlc3QsXG4gICAgICBzZWN1cmVcbiAgICApO1xuICAgIHJldHVybiB1c2VyO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgSldUIHRva2VuXG4gICAqIEBwYXJhbSB0b2tlbiAtIFRoZSBKV1QgdG9rZW5cbiAgICovXG4gIHB1YmxpYyBzZXRUb2tlbih0b2tlbjogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UodG9rZW4pO1xuICAgIHRoaXMuX3Rva2VuID0gdG9rZW47XG4gIH1cblxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vICogUHJpdmF0ZSBtZXRob2RzXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKipcblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBKV1QgdG9rZW4gZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAqL1xuICBwcml2YXRlIGNsZWFyTG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuY29uZmlnLmp3dFRva2VuTmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBKV1QgdG9rZW4gZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAqIEByZXR1cm5zIFRoZSBKV1QgdG9rZW5cbiAgICovXG4gIHByaXZhdGUgZ2V0VG9rZW5Gcm9tTG9jYWxTdG9yYWdlKCk6IHN0cmluZyB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmNvbmZpZy5qd3RUb2tlbk5hbWUpO1xuICAgIGlmICghdG9rZW4pIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgdGhlIEpXVCB0b2tlbiB0byBsb2NhbCBzdG9yYWdlXG4gICAqIEBwYXJhbSB0b2tlbiAtIFRoZSBKV1QgdG9rZW5cbiAgICovXG4gIHByaXZhdGUgc2V0TG9jYWxTdG9yYWdlKHRva2VuOiBzdHJpbmcpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmNvbmZpZy5qd3RUb2tlbk5hbWUsIHRva2VuKTtcbiAgfVxufVxuIl19
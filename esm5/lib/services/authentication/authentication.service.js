import { __awaiter, __decorate, __generator, __param } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { AuthenticationDataService } from './authentication-data.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LeathermanAppConfigInjectionToken } from '../../config/injection-tokens/leatherman-app-config.injection-token';
import { Secure } from '../../enums/secure.enum';
import { SessionState } from 'projects/leatherman-bootstrap/src/public-api';
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
        this.store = config.store || SessionState.LocalStorage;
    }
    Object.defineProperty(AuthenticationService.prototype, "token", {
        // **********************
        // * Private properties
        // **********************
        /** Get accessor for the JWT token */
        get: function () {
            if (!this._token) {
                if (this.store === SessionState.SessionStorage) {
                    this._token = this.getTokenFromSessionStorage();
                }
                else {
                    this._token = this.getTokenFromLocalStorage();
                }
            }
            return this._token;
        },
        /** Set accessor for the JWT token */
        set: function (token) {
            if (this.store === SessionState.SessionStorage) {
                this.setSessionStorage(token);
            }
            else {
                this.setLocalStorage(token);
            }
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
        if (this.store === SessionState.LocalStorage) {
            this.clearLocalStorage();
        }
        else {
            this.clearSessionStorage();
        }
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
        if (this.store === SessionState.LocalStorage) {
            this.setLocalStorage(token);
        }
        else {
            this.setSessionStorage(token);
        }
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
     * Remove the JWT token from session storage
     */
    AuthenticationService.prototype.clearSessionStorage = function () {
        sessionStorage.removeItem(this.config.jwtTokenName);
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
     * Get the JWT token from session storage
     * @returns The JWT token
     */
    AuthenticationService.prototype.getTokenFromSessionStorage = function () {
        var token = sessionStorage.getItem(this.config.jwtTokenName);
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
    /**
     * Save the JWT token to session storage
     * @param token - The JWT token
     */
    AuthenticationService.prototype.setSessionStorage = function (token) {
        sessionStorage.setItem(this.config.jwtTokenName, token);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBS3RELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOENBQThDLENBQUM7Ozs7QUFFNUU7O0dBRUc7QUFJSDtJQWdDRTs7OztPQUlHO0lBQ0gsK0JBRVUsTUFBNEIsRUFDNUIseUJBQW9EO1FBRHBELFdBQU0sR0FBTixNQUFNLENBQXNCO1FBQzVCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFiOUQsMENBQTBDO1FBQ2xDLGNBQVMsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7UUFjekMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLFlBQVksQ0FBQyxZQUFZLENBQUM7SUFDekQsQ0FBQztJQXJDRCxzQkFBWSx3Q0FBSztRQUxqQix5QkFBeUI7UUFDekIsdUJBQXVCO1FBQ3ZCLHlCQUF5QjtRQUV6QixxQ0FBcUM7YUFDckM7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDaEIsSUFBRyxJQUFJLENBQUMsS0FBSyxLQUFLLFlBQVksQ0FBQyxjQUFjLEVBQUU7b0JBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxD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QUNLLCtDQUFlLEdBQXZCLFVBQXdCLEtBQWE7UUFDbkMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ssaURBQWlCLEdBQXpCLFVBQTBCLEtBQWE7UUFDckMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxRCxDQUFDOztnREFqTkUsTUFBTSxTQUFDLGlDQUFpQztnQkFFTix5QkFBeUI7OztJQXhDbkQscUJBQXFCO1FBSGpDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7UUF1Q0csV0FBQSxNQUFNLENBQUMsaUNBQWlDLENBQUMsQ0FBQTtPQXRDakMscUJBQXFCLENBd1BqQztnQ0ExUUQ7Q0EwUUMsQUF4UEQsSUF3UEM7U0F4UFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkRhdGFTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgSnd0SGVscGVyU2VydmljZSB9IGZyb20gJ0BhdXRoMC9hbmd1bGFyLWp3dCc7XG5pbXBvcnQgeyBMb2dpblJlcXVlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXV0aGVudGljYXRpb24vbG9naW4tcmVxdWVzdC5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlTmV3VXNlclJlcXVlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvYmFzZS11c2VyL2Jhc2UtbmV3LXVzZXItcmVxdWVzdC5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLXVzZXIvYmFzZS11c2VyLm1vZGVsJztcbmltcG9ydCB7IElMZWF0aGVybWFuQXBwQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2FwcC5jb25maWcnO1xuaW1wb3J0IHsgTGVhdGhlcm1hbkFwcENvbmZpZ0luamVjdGlvblRva2VuIH0gZnJvbSAnLi4vLi4vY29uZmlnL2luamVjdGlvbi10b2tlbnMvbGVhdGhlcm1hbi1hcHAtY29uZmlnLmluamVjdGlvbi10b2tlbic7XG5pbXBvcnQgeyBTZWN1cmUgfSBmcm9tICcuLi8uLi9lbnVtcy9zZWN1cmUuZW51bSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkRldGFpbHMgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24tZGV0YWlscy5tb2RlbCc7XG5pbXBvcnQgeyBTZXNzaW9uU3RhdGUgfSBmcm9tICdwcm9qZWN0cy9sZWF0aGVybWFuLWJvb3RzdHJhcC9zcmMvcHVibGljLWFwaSc7XG5cbi8qKlxuICogQSBzZXJ2aWNlIHRvIGhhbmRsZSBjbGllbnQgYXV0aGVudGljYXRpb25cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKlxuICAvLyAqIFByaXZhdGUgcHJvcGVydGllc1xuICAvLyAqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgLyoqIEdldCBhY2Nlc3NvciBmb3IgdGhlIEpXVCB0b2tlbiAqL1xuICBwcml2YXRlIGdldCB0b2tlbigpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5fdG9rZW4pIHtcbiAgICAgIGlmKHRoaXMuc3RvcmUgPT09IFNlc3Npb25TdGF0ZS5TZXNzaW9uU3RvcmFnZSkge1xuICAgICAgICB0aGlzLl90b2tlbiA9IHRoaXMuZ2V0VG9rZW5Gcm9tU2Vzc2lvblN0b3JhZ2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3Rva2VuID0gdGhpcy5nZXRUb2tlbkZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3Rva2VuO1xuICB9XG5cbiAgLyoqIFNldCBhY2Nlc3NvciBmb3IgdGhlIEpXVCB0b2tlbiAqL1xuICBwcml2YXRlIHNldCB0b2tlbih0b2tlbjogc3RyaW5nKSB7XG4gICAgaWYodGhpcy5zdG9yZSA9PT0gU2Vzc2lvblN0YXRlLlNlc3Npb25TdG9yYWdlKSB7XG4gICAgICB0aGlzLnNldFNlc3Npb25TdG9yYWdlKHRva2VuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UodG9rZW4pO1xuICAgIH1cbiAgICB0aGlzLl90b2tlbiA9IHRva2VuO1xuICB9XG5cbiAgLyoqIFJlZmVyZW5jZSB0byB0aGUgSldUIGhlbHBlciBzZXJ2aWNlICovXG4gIHByaXZhdGUgand0SGVscGVyID0gbmV3IEp3dEhlbHBlclNlcnZpY2UoKTtcbiAgcHJpdmF0ZSBfdG9rZW46IHN0cmluZztcbiAgcHJpdmF0ZSBzdG9yZTogc3RyaW5nO1xuICBcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSBjb25maWcgLSBUaGUgYXBwIGNvbmZpZyBvYmplY3RcbiAgICogQHBhcmFtIGF1dGhlbnRpY2F0aW9uRGF0YVNlcnZpY2UgLSBBIHJlZmVyZW5jZSB0byB0aGUgYXV0aGVudGljYXRpb24gZGF0YSBzZXJ2aWNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KExlYXRoZXJtYW5BcHBDb25maWdJbmplY3Rpb25Ub2tlbilcbiAgICBwcml2YXRlIGNvbmZpZzogSUxlYXRoZXJtYW5BcHBDb25maWcsXG4gICAgcHJpdmF0ZSBhdXRoZW50aWNhdGlvbkRhdGFTZXJ2aWNlOiBBdXRoZW50aWNhdGlvbkRhdGFTZXJ2aWNlXG4gICkgeyBcbiAgICB0aGlzLnN0b3JlID0gY29uZmlnLnN0b3JlIHx8IFNlc3Npb25TdGF0ZS5Mb2NhbFN0b3JhZ2U7XG4gIH1cblxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vICogUHVibGljIG1ldGhvZHNcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKlxuXG4gIHB1YmxpYyBhc3luYyBhdXRoZW50aWNhdGUobG9naW5SZXF1ZXN0OiBMb2dpblJlcXVlc3QpOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uRGV0YWlscz4ge1xuICAgIGNvbnN0IGF1dGhlbnRpY2F0aW9uRGV0YWlscyA9IGF3YWl0IHRoaXMuYXV0aGVudGljYXRpb25EYXRhU2VydmljZS5hdXRoZW50aWNhdGUoXG4gICAgICBsb2dpblJlcXVlc3RcbiAgICApO1xuICAgIGlmIChhdXRoZW50aWNhdGlvbkRldGFpbHMudG9rZW4gJiYgYXV0aGVudGljYXRpb25EZXRhaWxzLnRva2VuLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMudG9rZW4gPSBhdXRoZW50aWNhdGlvbkRldGFpbHMudG9rZW47XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJUb2tlbigpO1xuICAgIH1cbiAgICByZXR1cm4gYXV0aGVudGljYXRpb25EZXRhaWxzO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBKV1QgdG9rZW5cbiAgICovXG4gIHB1YmxpYyBjbGVhclRva2VuKCkge1xuICAgIHRoaXMuX3Rva2VuID0gJyc7XG4gICAgaWYodGhpcy5zdG9yZSA9PT0gU2Vzc2lvblN0YXRlLkxvY2FsU3RvcmFnZSkge1xuICAgICAgdGhpcy5jbGVhckxvY2FsU3RvcmFnZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyU2Vzc2lvblN0b3JhZ2UoKTtcbiAgICB9XG4gICAgXG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB1c2VyJ3MgcHJpbWFyeSByb2xlXG4gICAqIEByZXR1cm5zIFRoZSB1c2VyJ3MgcHJpbWFyeSByb2xlXG4gICAqIEBhc3luY1xuICAgKi9cbiAgcHVibGljIGdldFByaW1hcnlVc2VyUm9sZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHVzZXJSb2xlcyA9IHRoaXMuZ2V0VXNlclJvbGVzKCk7XG4gICAgaWYgKHVzZXJSb2xlcy5maW5kKHJvbGUgPT4gcm9sZSA9PT0gJ2FkbWluJykpIHtcbiAgICAgIHJldHVybiAnYWRtaW4nO1xuICAgIH1cbiAgICBpZiAodXNlclJvbGVzLmZpbmQocm9sZSA9PiByb2xlID09PSAndXNlcicpKSB7XG4gICAgICByZXR1cm4gJ3VzZXInO1xuICAgIH1cbiAgICByZXR1cm4gdXNlclJvbGVzWzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgSldUIHRva2VuIGV4cGlyYXRpb24gZGF0ZVxuICAgKiBAcmV0dXJucyBUaGUgZGF0ZSB0aGUgdG9rZW4gZXhwaXJlc1xuICAgKi9cbiAgcHVibGljIGdldFRva2VuRXhwaXJhdGlvbkRhdGUoKTogRGF0ZSB8IG51bGwge1xuICAgIGNvbnN0IGV4cGlyYXRpb25EYXRlID0gdGhpcy5qd3RIZWxwZXIuZ2V0VG9rZW5FeHBpcmF0aW9uRGF0ZSh0aGlzLnRva2VuKTtcbiAgICByZXR1cm4gZXhwaXJhdGlvbkRhdGU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBsb2dnZWQgaW4gdXNlcidzIElEXG4gICAqIEByZXR1cm5zIFRoZSB1c2VyJ3MgSURcbiAgICovXG4gIHB1YmxpYyBnZXRVc2VySWQoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5pc0F1dGhlbnRpY2F0ZWQoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB0b2tlblBheWxvYWQgPSB0aGlzLmp3dEhlbHBlci5kZWNvZGVUb2tlbih0aGlzLnRva2VuKTtcbiAgICByZXR1cm4gdG9rZW5QYXlsb2FkLnVzZXJJZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHVzZXIncyByb2xlc1xuICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiB0aGUgdXNlcidzIHJvbGVzXG4gICAqL1xuICBwdWJsaWMgZ2V0VXNlclJvbGVzKCk6IHN0cmluZ1tdIHtcbiAgICBpZiAodGhpcy5pc0F1dGhlbnRpY2F0ZWQoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgdG9rZW5QYXlsb2FkID0gdGhpcy5qd3RIZWxwZXIuZGVjb2RlVG9rZW4odGhpcy50b2tlbik7XG4gICAgcmV0dXJuIHRva2VuUGF5bG9hZC5yb2xlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhlIHVzZXIgaXMgYXV0aGVudGljYXRlZFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB1c2VyIGlzIGF1dGhlbnRpY2F0ZWRcbiAgICovXG4gIHB1YmxpYyBpc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLnRva2VuKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLmp3dEhlbHBlci5pc1Rva2VuRXhwaXJlZCh0aGlzLnRva2VuKSkge1xuICAgICAgdGhpcy5jbGVhckxvY2FsU3RvcmFnZSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2cgaW4gYSB1c2VyXG4gICAqIEBwYXJhbSBsb2dpblJlcXVlc3QgLSBUaGUgbG9naW4gcmVxdWVzdCBvYmplY3RcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgbG9naW4gc3VjY2VlZGVkXG4gICAqIEBhc3luY1xuICAgKi9cbiAgcHVibGljIGFzeW5jIGxvZ2luVXNlcjxUIGV4dGVuZHMgTG9naW5SZXF1ZXN0Pihsb2dpblJlcXVlc3Q6IFQpOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uRGV0YWlscz4ge1xuICAgIGNvbnN0IGF1dGhlbnRpY2F0aW9uRGV0YWlscyA9IGF3YWl0IHRoaXMuYXV0aGVudGljYXRpb25EYXRhU2VydmljZS5hdXRoZW50aWNhdGUobG9naW5SZXF1ZXN0KTtcbiAgICBpZiAoYXV0aGVudGljYXRpb25EZXRhaWxzLnRva2VuICYmIGF1dGhlbnRpY2F0aW9uRGV0YWlscy50b2tlbi5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnRva2VuID0gYXV0aGVudGljYXRpb25EZXRhaWxzLnRva2VuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyVG9rZW4oKTtcbiAgICB9XG4gICAgcmV0dXJuIGF1dGhlbnRpY2F0aW9uRGV0YWlscztcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2cgb3V0IGEgdXNlclxuICAgKi9cbiAgcHVibGljIGxvZ291dFVzZXIoKSB7XG4gICAgdGhpcy5jbGVhclRva2VuKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBuZXcgdXNlclxuICAgKiBAcGFyYW0gbmV3VXNlclJlcXVlc3QgLSBUaGUgbmV3IHVzZXIgcmVxdWVzdFxuICAgKiBAcGFyYW0gc2VjdXJlIC0gQW4gZW51bSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGVuZHBvaW5nIGlzIHNlY3VyZVxuICAgKi9cbiAgcHVibGljIGFzeW5jIHJlZ2lzdGVyVXNlcjxUIGV4dGVuZHMgQmFzZU5ld1VzZXJSZXF1ZXN0LCBVIGV4dGVuZHMgQmFzZVVzZXI+KFxuICAgIG5ld1VzZXJSZXF1ZXN0OiBULFxuICAgIHNlY3VyZTogU2VjdXJlID0gU2VjdXJlLmZhbHNlXG4gICk6IFByb21pc2U8VT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLmF1dGhlbnRpY2F0aW9uRGF0YVNlcnZpY2UucmVnaXN0ZXI8VCwgVT4oXG4gICAgICBuZXdVc2VyUmVxdWVzdCxcbiAgICAgIHNlY3VyZVxuICAgICk7XG4gICAgcmV0dXJuIHVzZXI7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBKV1QgdG9rZW5cbiAgICogQHBhcmFtIHRva2VuIC0gVGhlIEpXVCB0b2tlblxuICAgKi9cbiAgcHVibGljIHNldFRva2VuKHRva2VuOiBzdHJpbmcpIHtcbiAgICBpZih0aGlzLnN0b3JlID09PSBTZXNzaW9uU3RhdGUuTG9jYWxTdG9yYWdlKSB7XG4gICAgICB0aGlzLnNldExvY2FsU3RvcmFnZSh0b2tlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U2Vzc2lvblN0b3JhZ2UodG9rZW4pO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLl90b2tlbiA9IHRva2VuO1xuICB9XG5cbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKlxuICAvLyAqIFByaXZhdGUgbWV0aG9kc1xuICAvLyAqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgSldUIHRva2VuIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgKi9cbiAgcHJpdmF0ZSBjbGVhckxvY2FsU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmNvbmZpZy5qd3RUb2tlbk5hbWUpO1xuICB9XG4gIFxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBKV1QgdG9rZW4gZnJvbSBzZXNzaW9uIHN0b3JhZ2VcbiAgICovXG4gIHByaXZhdGUgY2xlYXJTZXNzaW9uU3RvcmFnZSgpIHtcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuY29uZmlnLmp3dFRva2VuTmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBKV1QgdG9rZW4gZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAqIEByZXR1cm5zIFRoZSBKV1QgdG9rZW5cbiAgICovXG5cbiAgcHJpdmF0ZSBnZXRUb2tlbkZyb21Mb2NhbFN0b3JhZ2UoKTogc3RyaW5nIHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuY29uZmlnLmp3dFRva2VuTmFtZSk7XG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cbiAgLyoqXG4gICAqIEdldCB0aGUgSldUIHRva2VuIGZyb20gc2Vzc2lvbiBzdG9yYWdlXG4gICAqIEByZXR1cm5zIFRoZSBKV1QgdG9rZW5cbiAgICovXG5cbiAgcHJpdmF0ZSBnZXRUb2tlbkZyb21TZXNzaW9uU3RvcmFnZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHRva2VuID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmNvbmZpZy5qd3RUb2tlbk5hbWUpO1xuICAgIGlmICghdG9rZW4pIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhdmUgdGhlIEpXVCB0b2tlbiB0byBsb2NhbCBzdG9yYWdlXG4gICAqIEBwYXJhbSB0b2tlbiAtIFRoZSBKV1QgdG9rZW5cbiAgICovXG4gIHByaXZhdGUgc2V0TG9jYWxTdG9yYWdlKHRva2VuOiBzdHJpbmcpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmNvbmZpZy5qd3RUb2tlbk5hbWUsIHRva2VuKTtcbiAgfVxuICAvKipcbiAgICogU2F2ZSB0aGUgSldUIHRva2VuIHRvIHNlc3Npb24gc3RvcmFnZVxuICAgKiBAcGFyYW0gdG9rZW4gLSBUaGUgSldUIHRva2VuXG4gICAqL1xuICBwcml2YXRlIHNldFNlc3Npb25TdG9yYWdlKHRva2VuOiBzdHJpbmcpIHtcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHRoaXMuY29uZmlnLmp3dFRva2VuTmFtZSwgdG9rZW4pO1xuICB9XG59XG4iXX0=
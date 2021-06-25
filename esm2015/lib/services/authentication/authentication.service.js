import { __awaiter, __decorate, __param } from "tslib";
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
import * as ɵngcc0 from '@angular/core';
let AuthenticationService = class AuthenticationService {
    /**
     * Constructor
     * @param config - The app config object
     * @param authenticationDataService - A reference to the authentication data service
     */
    constructor(config, authenticationDataService) {
        this.config = config;
        this.authenticationDataService = authenticationDataService;
        /** Reference to the JWT helper service */
        this.jwtHelper = new JwtHelperService();
    }
    // **********************
    // * Private properties
    // **********************
    /** Get accessor for the JWT token */
    get token() {
        if (!this._token) {
            this._token = this.getTokenFromLocalStorage();
        }
        return this._token;
    }
    /** Set accessor for the JWT token */
    set token(token) {
        this.setLocalStorage(token);
        this._token = token;
    }
    // **********************
    // * Public methods
    // **********************
    authenticate(loginRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const authenticationDetails = yield this.authenticationDataService.authenticate(loginRequest);
            if (authenticationDetails.token && authenticationDetails.token.length > 0) {
                this.token = authenticationDetails.token;
            }
            else {
                this.clearToken();
            }
            return authenticationDetails;
        });
    }
    /**
     * Clear the JWT token
     */
    clearToken() {
        this._token = '';
        this.clearLocalStorage();
    }
    /**
     * Get the user's primary role
     * @returns The user's primary role
     * @async
     */
    getPrimaryUserRole() {
        const userRoles = this.getUserRoles();
        if (userRoles.find(role => role === 'admin')) {
            return 'admin';
        }
        if (userRoles.find(role => role === 'user')) {
            return 'user';
        }
        return userRoles[0];
    }
    /**
     * Get the JWT token expiration date
     * @returns The date the token expires
     */
    getTokenExpirationDate() {
        const expirationDate = this.jwtHelper.getTokenExpirationDate(this.token);
        return expirationDate;
    }
    /**
     * Get the logged in user's ID
     * @returns The user's ID
     */
    getUserId() {
        if (this.isAuthenticated() === false) {
            return null;
        }
        const tokenPayload = this.jwtHelper.decodeToken(this.token);
        return tokenPayload.userId;
    }
    /**
     * Get the user's roles
     * @returns An array of the user's roles
     */
    getUserRoles() {
        if (this.isAuthenticated() === false) {
            return [];
        }
        const tokenPayload = this.jwtHelper.decodeToken(this.token);
        return tokenPayload.roles;
    }
    /**
     * Determine if the user is authenticated
     * @returns True if the user is authenticated
     */
    isAuthenticated() {
        if (!this.token) {
            return false;
        }
        if (this.jwtHelper.isTokenExpired(this.token)) {
            this.clearLocalStorage();
            return false;
        }
        return true;
    }
    /**
     * Log in a user
     * @param loginRequest - The login request object
     * @returns True if the login succeeded
     * @async
     */
    loginUser(loginRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const authenticationDetails = yield this.authenticationDataService.authenticate(loginRequest);
            if (authenticationDetails.token && authenticationDetails.token.length > 0) {
                this.token = authenticationDetails.token;
            }
            else {
                this.clearToken();
            }
            return authenticationDetails;
        });
    }
    /**
     * Log out a user
     */
    logoutUser() {
        this.clearToken();
    }
    /**
     * Register a new user
     * @param newUserRequest - The new user request
     * @param secure - An enum indicating whether the endpoing is secure
     */
    registerUser(newUserRequest, secure = Secure.false) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.authenticationDataService.register(newUserRequest, secure);
            return user;
        });
    }
    /**
     * Set the JWT token
     * @param token - The JWT token
     */
    setToken(token) {
        this.setLocalStorage(token);
        this._token = token;
    }
    // **********************
    // * Private methods
    // **********************
    /**
     * Remove the JWT token from local storage
     */
    clearLocalStorage() {
        localStorage.removeItem(this.config.jwtTokenName);
    }
    /**
     * Get the JWT token from local storage
     * @returns The JWT token
     */
    getTokenFromLocalStorage() {
        const token = localStorage.getItem(this.config.jwtTokenName);
        if (!token) {
            return '';
        }
        return token;
    }
    /**
     * Save the JWT token to local storage
     * @param token - The JWT token
     */
    setLocalStorage(token) {
        localStorage.setItem(this.config.jwtTokenName, token);
    }
};
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(ɵngcc0.ɵɵinject(LeathermanAppConfigInjectionToken), ɵngcc0.ɵɵinject(AuthenticationDataService)); };
AuthenticationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [LeathermanAppConfigInjectionToken,] }] },
    { type: AuthenticationDataService }
];
AuthenticationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthenticationService_Factory() { return new AuthenticationService(i0.ɵɵinject(i1.LeathermanAppConfigInjectionToken), i0.ɵɵinject(i2.AuthenticationDataService)); }, token: AuthenticationService, providedIn: "root" });
AuthenticationService = __decorate([ __param(0, Inject(LeathermanAppConfigInjectionToken))
], AuthenticationService);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AuthenticationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [LeathermanAppConfigInjectionToken]
            }] }, { type: AuthenticationDataService }]; }, null); })();
export { AuthenticationService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZXMiOlsibmc6L2xlYXRoZXJtYW4tYm9vdHN0cmFwL2xpYi9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUt0RCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUN4SCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDakQ7QUFBcUM7QUFHWjtBQUR6QjtBQUNBO0FBQ0EsR0FBRzs7QUFJSCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtBQUNsQyxJQXNCRTtBQUNGO0FBQ0U7QUFDRTtBQUVKLE9BREs7QUFDTCxJQUFFLFlBRVUsTUFBNEIsRUFDNUIseUJBQW9EO0FBQzdELFFBRlMsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7QUFBQyxRQUM3Qiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0FBQ2hFLFFBYkUsMENBQTBDO0FBQzVDLFFBQVUsY0FBUyxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztBQUM3QyxJQVdNLENBQUM7QUFDUCxJQWhDRSx5QkFBeUI7QUFDM0IsSUFBRSx1QkFBdUI7QUFDekIsSUFBRSx5QkFBeUI7QUFDM0IsSUFDRSxxQ0FBcUM7QUFDdkMsSUFBRSxJQUFZLEtBQUs7QUFBSyxRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUN0QixZQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7QUFDcEQsU0FBSztBQUNMLFFBQUksT0FB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QUUsQ0FBQztBQUNILENBQUM7b05BQUE7QUFDRDtBQUErQyw0Q0E1SzFDLE1BQU0sU0FBQyxpQ0FBaUM7QUFDdEMsWUFDZ0MseUJBQXlCO0FBQzlEO0FBQUc7QUFoQ1EscUJBQXFCLG9CQUhqQyxVQUFVLENBQUMsVUFDVixVQUFVLEVBQUUsTUFBTSxNQUNuQixDQUFDLG5EQUNFLENBNkJDLFdBQUEsTUFBTSxDQUFDLGlDQUFpQyxDQUFDLENBQUE7QUFDOUMsR0E5QmEscUJBQXFCLENBd01qQzs7Ozs7Ozs7O3VFQUNEO0FBQUMsU0F6TVkscUJBQXFCO0FBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkRhdGFTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoZW50aWNhdGlvbi1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgSnd0SGVscGVyU2VydmljZSB9IGZyb20gJ0BhdXRoMC9hbmd1bGFyLWp3dCc7XG5pbXBvcnQgeyBMb2dpblJlcXVlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXV0aGVudGljYXRpb24vbG9naW4tcmVxdWVzdC5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlTmV3VXNlclJlcXVlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvYmFzZS11c2VyL2Jhc2UtbmV3LXVzZXItcmVxdWVzdC5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLXVzZXIvYmFzZS11c2VyLm1vZGVsJztcbmltcG9ydCB7IElMZWF0aGVybWFuQXBwQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2FwcC5jb25maWcnO1xuaW1wb3J0IHsgTGVhdGhlcm1hbkFwcENvbmZpZ0luamVjdGlvblRva2VuIH0gZnJvbSAnLi4vLi4vY29uZmlnL2luamVjdGlvbi10b2tlbnMvbGVhdGhlcm1hbi1hcHAtY29uZmlnLmluamVjdGlvbi10b2tlbic7XG5pbXBvcnQgeyBTZWN1cmUgfSBmcm9tICcuLi8uLi9lbnVtcy9zZWN1cmUuZW51bSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkRldGFpbHMgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24tZGV0YWlscy5tb2RlbCc7XG5cbi8qKlxuICogQSBzZXJ2aWNlIHRvIGhhbmRsZSBjbGllbnQgYXV0aGVudGljYXRpb25cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZXJ2aWNlIHtcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKlxuICAvLyAqIFByaXZhdGUgcHJvcGVydGllc1xuICAvLyAqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgLyoqIEdldCBhY2Nlc3NvciBmb3IgdGhlIEpXVCB0b2tlbiAqL1xuICBwcml2YXRlIGdldCB0b2tlbigpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy5fdG9rZW4pIHtcbiAgICAgIHRoaXMuX3Rva2VuID0gdGhpcy5nZXRUb2tlbkZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3Rva2VuO1xuICB9XG5cbiAgLyoqIFNldCBhY2Nlc3NvciBmb3IgdGhlIEpXVCB0b2tlbiAqL1xuICBwcml2YXRlIHNldCB0b2tlbih0b2tlbjogc3RyaW5nKSB7XG4gICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UodG9rZW4pO1xuICAgIHRoaXMuX3Rva2VuID0gdG9rZW47XG4gIH1cblxuICAvKiogUmVmZXJlbmNlIHRvIHRoZSBKV1QgaGVscGVyIHNlcnZpY2UgKi9cbiAgcHJpdmF0ZSBqd3RIZWxwZXIgPSBuZXcgSnd0SGVscGVyU2VydmljZSgpO1xuICBwcml2YXRlIF90b2tlbjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gY29uZmlnIC0gVGhlIGFwcCBjb25maWcgb2JqZWN0XG4gICAqIEBwYXJhbSBhdXRoZW50aWNhdGlvbkRhdGFTZXJ2aWNlIC0gQSByZWZlcmVuY2UgdG8gdGhlIGF1dGhlbnRpY2F0aW9uIGRhdGEgc2VydmljZVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChMZWF0aGVybWFuQXBwQ29uZmlnSW5qZWN0aW9uVG9rZW4pXG4gICAgcHJpdmF0ZSBjb25maWc6IElMZWF0aGVybWFuQXBwQ29uZmlnLFxuICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25EYXRhU2VydmljZTogQXV0aGVudGljYXRpb25EYXRhU2VydmljZVxuICApIHsgfVxuXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKipcbiAgLy8gKiBQdWJsaWMgbWV0aG9kc1xuICAvLyAqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgcHVibGljIGFzeW5jIGF1dGhlbnRpY2F0ZShsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCk6IFByb21pc2U8QXV0aGVudGljYXRpb25EZXRhaWxzPiB7XG4gICAgY29uc3QgYXV0aGVudGljYXRpb25EZXRhaWxzID0gYXdhaXQgdGhpcy5hdXRoZW50aWNhdGlvbkRhdGFTZXJ2aWNlLmF1dGhlbnRpY2F0ZShcbiAgICAgIGxvZ2luUmVxdWVzdFxuICAgICk7XG4gICAgaWYgKGF1dGhlbnRpY2F0aW9uRGV0YWlscy50b2tlbiAmJiBhdXRoZW50aWNhdGlvbkRldGFpbHMudG9rZW4ubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy50b2tlbiA9IGF1dGhlbnRpY2F0aW9uRGV0YWlscy50b2tlbjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhclRva2VuKCk7XG4gICAgfVxuICAgIHJldHVybiBhdXRoZW50aWNhdGlvbkRldGFpbHM7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgdGhlIEpXVCB0b2tlblxuICAgKi9cbiAgcHVibGljIGNsZWFyVG9rZW4oKSB7XG4gICAgdGhpcy5fdG9rZW4gPSAnJztcbiAgICB0aGlzLmNsZWFyTG9jYWxTdG9yYWdlKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB1c2VyJ3MgcHJpbWFyeSByb2xlXG4gICAqIEByZXR1cm5zIFRoZSB1c2VyJ3MgcHJpbWFyeSByb2xlXG4gICAqIEBhc3luY1xuICAgKi9cbiAgcHVibGljIGdldFByaW1hcnlVc2VyUm9sZSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHVzZXJSb2xlcyA9IHRoaXMuZ2V0VXNlclJvbGVzKCk7XG4gICAgaWYgKHVzZXJSb2xlcy5maW5kKHJvbGUgPT4gcm9sZSA9PT0gJ2FkbWluJykpIHtcbiAgICAgIHJldHVybiAnYWRtaW4nO1xuICAgIH1cbiAgICBpZiAodXNlclJvbGVzLmZpbmQocm9sZSA9PiByb2xlID09PSAndXNlcicpKSB7XG4gICAgICByZXR1cm4gJ3VzZXInO1xuICAgIH1cbiAgICByZXR1cm4gdXNlclJvbGVzWzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgSldUIHRva2VuIGV4cGlyYXRpb24gZGF0ZVxuICAgKiBAcmV0dXJucyBUaGUgZGF0ZSB0aGUgdG9rZW4gZXhwaXJlc1xuICAgKi9cbiAgcHVibGljIGdldFRva2VuRXhwaXJhdGlvbkRhdGUoKTogRGF0ZSB8IG51bGwge1xuICAgIGNvbnN0IGV4cGlyYXRpb25EYXRlID0gdGhpcy5qd3RIZWxwZXIuZ2V0VG9rZW5FeHBpcmF0aW9uRGF0ZSh0aGlzLnRva2VuKTtcbiAgICByZXR1cm4gZXhwaXJhdGlvbkRhdGU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBsb2dnZWQgaW4gdXNlcidzIElEXG4gICAqIEByZXR1cm5zIFRoZSB1c2VyJ3MgSURcbiAgICovXG4gIHB1YmxpYyBnZXRVc2VySWQoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5pc0F1dGhlbnRpY2F0ZWQoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB0b2tlblBheWxvYWQgPSB0aGlzLmp3dEhlbHBlci5kZWNvZGVUb2tlbih0aGlzLnRva2VuKTtcbiAgICByZXR1cm4gdG9rZW5QYXlsb2FkLnVzZXJJZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHVzZXIncyByb2xlc1xuICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiB0aGUgdXNlcidzIHJvbGVzXG4gICAqL1xuICBwdWJsaWMgZ2V0VXNlclJvbGVzKCk6IHN0cmluZ1tdIHtcbiAgICBpZiAodGhpcy5pc0F1dGhlbnRpY2F0ZWQoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3QgdG9rZW5QYXlsb2FkID0gdGhpcy5qd3RIZWxwZXIuZGVjb2RlVG9rZW4odGhpcy50b2tlbik7XG4gICAgcmV0dXJuIHRva2VuUGF5bG9hZC5yb2xlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhlIHVzZXIgaXMgYXV0aGVudGljYXRlZFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB1c2VyIGlzIGF1dGhlbnRpY2F0ZWRcbiAgICovXG4gIHB1YmxpYyBpc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLnRva2VuKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLmp3dEhlbHBlci5pc1Rva2VuRXhwaXJlZCh0aGlzLnRva2VuKSkge1xuICAgICAgdGhpcy5jbGVhckxvY2FsU3RvcmFnZSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2cgaW4gYSB1c2VyXG4gICAqIEBwYXJhbSBsb2dpblJlcXVlc3QgLSBUaGUgbG9naW4gcmVxdWVzdCBvYmplY3RcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgbG9naW4gc3VjY2VlZGVkXG4gICAqIEBhc3luY1xuICAgKi9cbiAgcHVibGljIGFzeW5jIGxvZ2luVXNlcjxUIGV4dGVuZHMgTG9naW5SZXF1ZXN0Pihsb2dpblJlcXVlc3Q6IFQpOiBQcm9taXNlPEF1dGhlbnRpY2F0aW9uRGV0YWlscz4ge1xuICAgIGNvbnN0IGF1dGhlbnRpY2F0aW9uRGV0YWlscyA9IGF3YWl0IHRoaXMuYXV0aGVudGljYXRpb25EYXRhU2VydmljZS5hdXRoZW50aWNhdGUobG9naW5SZXF1ZXN0KTtcbiAgICBpZiAoYXV0aGVudGljYXRpb25EZXRhaWxzLnRva2VuICYmIGF1dGhlbnRpY2F0aW9uRGV0YWlscy50b2tlbi5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnRva2VuID0gYXV0aGVudGljYXRpb25EZXRhaWxzLnRva2VuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyVG9rZW4oKTtcbiAgICB9XG4gICAgcmV0dXJuIGF1dGhlbnRpY2F0aW9uRGV0YWlscztcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2cgb3V0IGEgdXNlclxuICAgKi9cbiAgcHVibGljIGxvZ291dFVzZXIoKSB7XG4gICAgdGhpcy5jbGVhclRva2VuKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBuZXcgdXNlclxuICAgKiBAcGFyYW0gbmV3VXNlclJlcXVlc3QgLSBUaGUgbmV3IHVzZXIgcmVxdWVzdFxuICAgKiBAcGFyYW0gc2VjdXJlIC0gQW4gZW51bSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGVuZHBvaW5nIGlzIHNlY3VyZVxuICAgKi9cbiAgcHVibGljIGFzeW5jIHJlZ2lzdGVyVXNlcjxUIGV4dGVuZHMgQmFzZU5ld1VzZXJSZXF1ZXN0LCBVIGV4dGVuZHMgQmFzZVVzZXI+KFxuICAgIG5ld1VzZXJSZXF1ZXN0OiBULFxuICAgIHNlY3VyZTogU2VjdXJlID0gU2VjdXJlLmZhbHNlXG4gICk6IFByb21pc2U8VT4ge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLmF1dGhlbnRpY2F0aW9uRGF0YVNlcnZpY2UucmVnaXN0ZXI8VCwgVT4oXG4gICAgICBuZXdVc2VyUmVxdWVzdCxcbiAgICAgIHNlY3VyZVxuICAgICk7XG4gICAgcmV0dXJuIHVzZXI7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBKV1QgdG9rZW5cbiAgICogQHBhcmFtIHRva2VuIC0gVGhlIEpXVCB0b2tlblxuICAgKi9cbiAgcHVibGljIHNldFRva2VuKHRva2VuOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNldExvY2FsU3RvcmFnZSh0b2tlbik7XG4gICAgdGhpcy5fdG9rZW4gPSB0b2tlbjtcbiAgfVxuXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKipcbiAgLy8gKiBQcml2YXRlIG1ldGhvZHNcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKlxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIEpXVCB0b2tlbiBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICovXG4gIHByaXZhdGUgY2xlYXJMb2NhbFN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5jb25maWcuand0VG9rZW5OYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIEpXVCB0b2tlbiBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICogQHJldHVybnMgVGhlIEpXVCB0b2tlblxuICAgKi9cbiAgcHJpdmF0ZSBnZXRUb2tlbkZyb21Mb2NhbFN0b3JhZ2UoKTogc3RyaW5nIHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuY29uZmlnLmp3dFRva2VuTmFtZSk7XG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSB0aGUgSldUIHRva2VuIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICogQHBhcmFtIHRva2VuIC0gVGhlIEpXVCB0b2tlblxuICAgKi9cbiAgcHJpdmF0ZSBzZXRMb2NhbFN0b3JhZ2UodG9rZW46IHN0cmluZykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuY29uZmlnLmp3dFRva2VuTmFtZSwgdG9rZW4pO1xuICB9XG59XG4iXX0=
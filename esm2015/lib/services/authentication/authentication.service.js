import { __awaiter, __decorate, __param } from "tslib";
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
        this.store = config.store || SessionState.LocalStorage;
    }
    // **********************
    // * Private properties
    // **********************
    /** Get accessor for the JWT token */
    get token() {
        if (!this._token) {
            if (this.store === SessionState.SessionStorage) {
                this._token = this.getTokenFromSessionStorage();
            }
            else {
                this._token = this.getTokenFromLocalStorage();
            }
        }
        return this._token;
    }
    /** Set accessor for the JWT token */
    set token(token) {
        if (this.store === SessionState.SessionStorage) {
            this.setSessionStorage(token);
        }
        else {
            this.setLocalStorage(token);
        }
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
        if (this.store === SessionState.LocalStorage) {
            this.clearLocalStorage();
        }
        else {
            this.clearSessionStorage();
        }
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
        if (this.store === SessionState.LocalStorage) {
            this.setLocalStorage(token);
        }
        else {
            this.setSessionStorage(token);
        }
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
     * Remove the JWT token from session storage
     */
    clearSessionStorage() {
        sessionStorage.removeItem(this.config.jwtTokenName);
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
     * Get the JWT token from session storage
     * @returns The JWT token
     */
    getTokenFromSessionStorage() {
        const token = sessionStorage.getItem(this.config.jwtTokenName);
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
    /**
     * Save the JWT token to session storage
     * @param token - The JWT token
     */
    setSessionStorage(token) {
        sessionStorage.setItem(this.config.jwtTokenName, token);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [LeathermanAppConfigInjectionToken,] }] },
    { type: AuthenticationDataService }
];
AuthenticationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthenticationService_Factory() { return new AuthenticationService(i0.ɵɵinject(i1.LeathermanAppConfigInjectionToken), i0.ɵɵinject(i2.AuthenticationDataService)); }, token: AuthenticationService, providedIn: "root" });
AuthenticationService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Inject(LeathermanAppConfigInjectionToken))
], AuthenticationService);
export { AuthenticationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBS3RELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOENBQThDLENBQUM7Ozs7QUFFNUU7O0dBRUc7QUFJSCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQWdDaEM7Ozs7T0FJRztJQUNILFlBRVUsTUFBNEIsRUFDNUIseUJBQW9EO1FBRHBELFdBQU0sR0FBTixNQUFNLENBQXNCO1FBQzVCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFiOUQsMENBQTBDO1FBQ2xDLGNBQVMsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7UUFjekMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLFlBQVksQ0FBQyxZQUFZLENBQUM7SUFDekQsQ0FBQztJQTFDRCx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUV6QixxQ0FBcUM7SUFDckMsSUFBWSxLQUFLO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBRyxJQUFJLENBQUMsS0FBSyxLQUFLLFlBQVksQ0FBQyxjQUFjLEVBQUU7Z0JBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7YUFDakQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQzthQUMvQztTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxxQ0FBcUM7SUFDckMsSUFBWSxLQUFLLENBQUMsS0FBYTtRQUM3QixJQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssWUFBWSxDQUFDLGNBQWMsRUFBRTtZQUM3QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0I7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBb0JELHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBRVosWUFBWSxDQUFDLFlBQTBCOztZQUNsRCxNQUFNLHFCQUFxQixHQUFHLE1BQU0sSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksQ0FDN0UsWUFBWSxDQUNiLENBQUM7WUFDRixJQUFJLHFCQUFxQixDQUFDLEtBQUssSUFBSSxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDekUsSUFBSSxDQUFDLEtBQUssR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7YUFDMUM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ25CO1lBQ0QsT0FBTyxxQkFBcUIsQ0FBQztRQUMvQixDQUFDO0tBQUE7SUFFRDs7T0FFRztJQUNJLFVBQVU7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssWUFBWSxDQUFDLFlBQVksRUFBRTtZQUMzQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjthQUFNO1lBQ0wsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDNUI7SUFFSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGtCQUFrQjtRQUN2QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxFQUFFO1lBQzVDLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxFQUFFO1lBQzNDLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksc0JBQXNCO1FBQzNCLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxTQUFTO1FBQ2QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLEtBQUssS0FBSyxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUQsT0FBTyxZQUFZLENBQUMsTUFBTSxDQUFDO0lBQzdCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxZQUFZO1FBQ2pCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxLQUFLLEtBQUssRUFBRTtZQUNwQyxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVELE9BQU8sWUFBWSxDQUFDLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksZUFBZTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN6QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDVSxTQUFTLENBQXlCLFlBQWU7O1lBQzVELE1BQU0scUJBQXFCLEdBQUcsTUFBTSxJQUFJLENBQUMseUJBQXlCLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzlGLElBQUkscUJBQXFCLENBQUMsS0FBSyxJQUFJLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN6RSxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQzthQUMxQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDbkI7WUFDRCxPQUFPLHFCQUFxQixDQUFDO1FBQy9CLENBQUM7S0FBQTtJQUVEOztPQUVHO0lBQ0ksVUFBVTtRQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNVLFlBQVksQ0FDdkIsY0FBaUIsRUFDakIsU0FBaUIsTUFBTSxDQUFDLEtBQUs7O1lBRTdCLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLHlCQUF5QixDQUFDLFFBQVEsQ0FDeEQsY0FBYyxFQUNkLE1BQU0sQ0FDUCxDQUFDO1lBQ0YsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7SUFFRDs7O09BR0c7SUFDSSxRQUFRLENBQUMsS0FBYTtRQUMzQixJQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssWUFBWSxDQUFDLFlBQVksRUFBRTtZQUMzQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO2FBQU07WUFDTCxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0I7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFFekI7O09BRUc7SUFDSyxpQkFBaUI7UUFDdkIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7T0FFRztJQUNLLG1CQUFtQjtRQUN6QixjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVEOzs7T0FHRztJQUVLLHdCQUF3QjtRQUM5QixNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRDs7O09BR0c7SUFFSywwQkFBMEI7UUFDaEMsTUFBTSxLQUFLLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssZUFBZSxDQUFDLEtBQWE7UUFDbkMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ssaUJBQWlCLENBQUMsS0FBYTtRQUNyQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFELENBQUM7Q0FDRixDQUFBOzs0Q0FsTkksTUFBTSxTQUFDLGlDQUFpQztZQUVOLHlCQUF5Qjs7O0FBeENuRCxxQkFBcUI7SUFIakMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztJQXVDRyxXQUFBLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO0dBdENqQyxxQkFBcUIsQ0F3UGpDO1NBeFBZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25EYXRhU2VydmljZSB9IGZyb20gJy4vYXV0aGVudGljYXRpb24tZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IEp3dEhlbHBlclNlcnZpY2UgfSBmcm9tICdAYXV0aDAvYW5ndWxhci1qd3QnO1xuaW1wb3J0IHsgTG9naW5SZXF1ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2F1dGhlbnRpY2F0aW9uL2xvZ2luLXJlcXVlc3QubW9kZWwnO1xuaW1wb3J0IHsgQmFzZU5ld1VzZXJSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UtdXNlci9iYXNlLW5ldy11c2VyLXJlcXVlc3QubW9kZWwnO1xuaW1wb3J0IHsgQmFzZVVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvYmFzZS11c2VyL2Jhc2UtdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBJTGVhdGhlcm1hbkFwcENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9hcHAuY29uZmlnJztcbmltcG9ydCB7IExlYXRoZXJtYW5BcHBDb25maWdJbmplY3Rpb25Ub2tlbiB9IGZyb20gJy4uLy4uL2NvbmZpZy9pbmplY3Rpb24tdG9rZW5zL2xlYXRoZXJtYW4tYXBwLWNvbmZpZy5pbmplY3Rpb24tdG9rZW4nO1xuaW1wb3J0IHsgU2VjdXJlIH0gZnJvbSAnLi4vLi4vZW51bXMvc2VjdXJlLmVudW0nO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25EZXRhaWxzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLWRldGFpbHMubW9kZWwnO1xuaW1wb3J0IHsgU2Vzc2lvblN0YXRlIH0gZnJvbSAncHJvamVjdHMvbGVhdGhlcm1hbi1ib290c3RyYXAvc3JjL3B1YmxpYy1hcGknO1xuXG4vKipcbiAqIEEgc2VydmljZSB0byBoYW5kbGUgY2xpZW50IGF1dGhlbnRpY2F0aW9uXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VydmljZSB7XG4gIC8vICoqKioqKioqKioqKioqKioqKioqKipcbiAgLy8gKiBQcml2YXRlIHByb3BlcnRpZXNcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKlxuXG4gIC8qKiBHZXQgYWNjZXNzb3IgZm9yIHRoZSBKV1QgdG9rZW4gKi9cbiAgcHJpdmF0ZSBnZXQgdG9rZW4oKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMuX3Rva2VuKSB7XG4gICAgICBpZih0aGlzLnN0b3JlID09PSBTZXNzaW9uU3RhdGUuU2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgICAgdGhpcy5fdG9rZW4gPSB0aGlzLmdldFRva2VuRnJvbVNlc3Npb25TdG9yYWdlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl90b2tlbiA9IHRoaXMuZ2V0VG9rZW5Gcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl90b2tlbjtcbiAgfVxuXG4gIC8qKiBTZXQgYWNjZXNzb3IgZm9yIHRoZSBKV1QgdG9rZW4gKi9cbiAgcHJpdmF0ZSBzZXQgdG9rZW4odG9rZW46IHN0cmluZykge1xuICAgIGlmKHRoaXMuc3RvcmUgPT09IFNlc3Npb25TdGF0ZS5TZXNzaW9uU3RvcmFnZSkge1xuICAgICAgdGhpcy5zZXRTZXNzaW9uU3RvcmFnZSh0b2tlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0TG9jYWxTdG9yYWdlKHRva2VuKTtcbiAgICB9XG4gICAgdGhpcy5fdG9rZW4gPSB0b2tlbjtcbiAgfVxuXG4gIC8qKiBSZWZlcmVuY2UgdG8gdGhlIEpXVCBoZWxwZXIgc2VydmljZSAqL1xuICBwcml2YXRlIGp3dEhlbHBlciA9IG5ldyBKd3RIZWxwZXJTZXJ2aWNlKCk7XG4gIHByaXZhdGUgX3Rva2VuOiBzdHJpbmc7XG4gIHByaXZhdGUgc3RvcmU6IHN0cmluZztcbiAgXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gY29uZmlnIC0gVGhlIGFwcCBjb25maWcgb2JqZWN0XG4gICAqIEBwYXJhbSBhdXRoZW50aWNhdGlvbkRhdGFTZXJ2aWNlIC0gQSByZWZlcmVuY2UgdG8gdGhlIGF1dGhlbnRpY2F0aW9uIGRhdGEgc2VydmljZVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChMZWF0aGVybWFuQXBwQ29uZmlnSW5qZWN0aW9uVG9rZW4pXG4gICAgcHJpdmF0ZSBjb25maWc6IElMZWF0aGVybWFuQXBwQ29uZmlnLFxuICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25EYXRhU2VydmljZTogQXV0aGVudGljYXRpb25EYXRhU2VydmljZVxuICApIHsgXG4gICAgdGhpcy5zdG9yZSA9IGNvbmZpZy5zdG9yZSB8fCBTZXNzaW9uU3RhdGUuTG9jYWxTdG9yYWdlO1xuICB9XG5cbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKlxuICAvLyAqIFB1YmxpYyBtZXRob2RzXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKipcblxuICBwdWJsaWMgYXN5bmMgYXV0aGVudGljYXRlKGxvZ2luUmVxdWVzdDogTG9naW5SZXF1ZXN0KTogUHJvbWlzZTxBdXRoZW50aWNhdGlvbkRldGFpbHM+IHtcbiAgICBjb25zdCBhdXRoZW50aWNhdGlvbkRldGFpbHMgPSBhd2FpdCB0aGlzLmF1dGhlbnRpY2F0aW9uRGF0YVNlcnZpY2UuYXV0aGVudGljYXRlKFxuICAgICAgbG9naW5SZXF1ZXN0XG4gICAgKTtcbiAgICBpZiAoYXV0aGVudGljYXRpb25EZXRhaWxzLnRva2VuICYmIGF1dGhlbnRpY2F0aW9uRGV0YWlscy50b2tlbi5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnRva2VuID0gYXV0aGVudGljYXRpb25EZXRhaWxzLnRva2VuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyVG9rZW4oKTtcbiAgICB9XG4gICAgcmV0dXJuIGF1dGhlbnRpY2F0aW9uRGV0YWlscztcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciB0aGUgSldUIHRva2VuXG4gICAqL1xuICBwdWJsaWMgY2xlYXJUb2tlbigpIHtcbiAgICB0aGlzLl90b2tlbiA9ICcnO1xuICAgIGlmKHRoaXMuc3RvcmUgPT09IFNlc3Npb25TdGF0ZS5Mb2NhbFN0b3JhZ2UpIHtcbiAgICAgIHRoaXMuY2xlYXJMb2NhbFN0b3JhZ2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhclNlc3Npb25TdG9yYWdlKCk7XG4gICAgfVxuICAgIFxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdXNlcidzIHByaW1hcnkgcm9sZVxuICAgKiBAcmV0dXJucyBUaGUgdXNlcidzIHByaW1hcnkgcm9sZVxuICAgKiBAYXN5bmNcbiAgICovXG4gIHB1YmxpYyBnZXRQcmltYXJ5VXNlclJvbGUoKTogc3RyaW5nIHtcbiAgICBjb25zdCB1c2VyUm9sZXMgPSB0aGlzLmdldFVzZXJSb2xlcygpO1xuICAgIGlmICh1c2VyUm9sZXMuZmluZChyb2xlID0+IHJvbGUgPT09ICdhZG1pbicpKSB7XG4gICAgICByZXR1cm4gJ2FkbWluJztcbiAgICB9XG4gICAgaWYgKHVzZXJSb2xlcy5maW5kKHJvbGUgPT4gcm9sZSA9PT0gJ3VzZXInKSkge1xuICAgICAgcmV0dXJuICd1c2VyJztcbiAgICB9XG4gICAgcmV0dXJuIHVzZXJSb2xlc1swXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIEpXVCB0b2tlbiBleHBpcmF0aW9uIGRhdGVcbiAgICogQHJldHVybnMgVGhlIGRhdGUgdGhlIHRva2VuIGV4cGlyZXNcbiAgICovXG4gIHB1YmxpYyBnZXRUb2tlbkV4cGlyYXRpb25EYXRlKCk6IERhdGUgfCBudWxsIHtcbiAgICBjb25zdCBleHBpcmF0aW9uRGF0ZSA9IHRoaXMuand0SGVscGVyLmdldFRva2VuRXhwaXJhdGlvbkRhdGUodGhpcy50b2tlbik7XG4gICAgcmV0dXJuIGV4cGlyYXRpb25EYXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbG9nZ2VkIGluIHVzZXIncyBJRFxuICAgKiBAcmV0dXJucyBUaGUgdXNlcidzIElEXG4gICAqL1xuICBwdWJsaWMgZ2V0VXNlcklkKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuaXNBdXRoZW50aWNhdGVkKCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgdG9rZW5QYXlsb2FkID0gdGhpcy5qd3RIZWxwZXIuZGVjb2RlVG9rZW4odGhpcy50b2tlbik7XG4gICAgcmV0dXJuIHRva2VuUGF5bG9hZC51c2VySWQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB1c2VyJ3Mgcm9sZXNcbiAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgdGhlIHVzZXIncyByb2xlc1xuICAgKi9cbiAgcHVibGljIGdldFVzZXJSb2xlcygpOiBzdHJpbmdbXSB7XG4gICAgaWYgKHRoaXMuaXNBdXRoZW50aWNhdGVkKCkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IHRva2VuUGF5bG9hZCA9IHRoaXMuand0SGVscGVyLmRlY29kZVRva2VuKHRoaXMudG9rZW4pO1xuICAgIHJldHVybiB0b2tlblBheWxvYWQucm9sZXM7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoZSB1c2VyIGlzIGF1dGhlbnRpY2F0ZWRcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdXNlciBpcyBhdXRoZW50aWNhdGVkXG4gICAqL1xuICBwdWJsaWMgaXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy50b2tlbikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5qd3RIZWxwZXIuaXNUb2tlbkV4cGlyZWQodGhpcy50b2tlbikpIHtcbiAgICAgIHRoaXMuY2xlYXJMb2NhbFN0b3JhZ2UoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogTG9nIGluIGEgdXNlclxuICAgKiBAcGFyYW0gbG9naW5SZXF1ZXN0IC0gVGhlIGxvZ2luIHJlcXVlc3Qgb2JqZWN0XG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGxvZ2luIHN1Y2NlZWRlZFxuICAgKiBAYXN5bmNcbiAgICovXG4gIHB1YmxpYyBhc3luYyBsb2dpblVzZXI8VCBleHRlbmRzIExvZ2luUmVxdWVzdD4obG9naW5SZXF1ZXN0OiBUKTogUHJvbWlzZTxBdXRoZW50aWNhdGlvbkRldGFpbHM+IHtcbiAgICBjb25zdCBhdXRoZW50aWNhdGlvbkRldGFpbHMgPSBhd2FpdCB0aGlzLmF1dGhlbnRpY2F0aW9uRGF0YVNlcnZpY2UuYXV0aGVudGljYXRlKGxvZ2luUmVxdWVzdCk7XG4gICAgaWYgKGF1dGhlbnRpY2F0aW9uRGV0YWlscy50b2tlbiAmJiBhdXRoZW50aWNhdGlvbkRldGFpbHMudG9rZW4ubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy50b2tlbiA9IGF1dGhlbnRpY2F0aW9uRGV0YWlscy50b2tlbjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhclRva2VuKCk7XG4gICAgfVxuICAgIHJldHVybiBhdXRoZW50aWNhdGlvbkRldGFpbHM7XG4gIH1cblxuICAvKipcbiAgICogTG9nIG91dCBhIHVzZXJcbiAgICovXG4gIHB1YmxpYyBsb2dvdXRVc2VyKCkge1xuICAgIHRoaXMuY2xlYXJUb2tlbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgbmV3IHVzZXJcbiAgICogQHBhcmFtIG5ld1VzZXJSZXF1ZXN0IC0gVGhlIG5ldyB1c2VyIHJlcXVlc3RcbiAgICogQHBhcmFtIHNlY3VyZSAtIEFuIGVudW0gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBlbmRwb2luZyBpcyBzZWN1cmVcbiAgICovXG4gIHB1YmxpYyBhc3luYyByZWdpc3RlclVzZXI8VCBleHRlbmRzIEJhc2VOZXdVc2VyUmVxdWVzdCwgVSBleHRlbmRzIEJhc2VVc2VyPihcbiAgICBuZXdVc2VyUmVxdWVzdDogVCxcbiAgICBzZWN1cmU6IFNlY3VyZSA9IFNlY3VyZS5mYWxzZVxuICApOiBQcm9taXNlPFU+IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5hdXRoZW50aWNhdGlvbkRhdGFTZXJ2aWNlLnJlZ2lzdGVyPFQsIFU+KFxuICAgICAgbmV3VXNlclJlcXVlc3QsXG4gICAgICBzZWN1cmVcbiAgICApO1xuICAgIHJldHVybiB1c2VyO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgSldUIHRva2VuXG4gICAqIEBwYXJhbSB0b2tlbiAtIFRoZSBKV1QgdG9rZW5cbiAgICovXG4gIHB1YmxpYyBzZXRUb2tlbih0b2tlbjogc3RyaW5nKSB7XG4gICAgaWYodGhpcy5zdG9yZSA9PT0gU2Vzc2lvblN0YXRlLkxvY2FsU3RvcmFnZSkge1xuICAgICAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UodG9rZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFNlc3Npb25TdG9yYWdlKHRva2VuKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5fdG9rZW4gPSB0b2tlbjtcbiAgfVxuXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKipcbiAgLy8gKiBQcml2YXRlIG1ldGhvZHNcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKlxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIEpXVCB0b2tlbiBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICovXG4gIHByaXZhdGUgY2xlYXJMb2NhbFN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5jb25maWcuand0VG9rZW5OYW1lKTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgSldUIHRva2VuIGZyb20gc2Vzc2lvbiBzdG9yYWdlXG4gICAqL1xuICBwcml2YXRlIGNsZWFyU2Vzc2lvblN0b3JhZ2UoKSB7XG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmNvbmZpZy5qd3RUb2tlbk5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgSldUIHRva2VuIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgKiBAcmV0dXJucyBUaGUgSldUIHRva2VuXG4gICAqL1xuXG4gIHByaXZhdGUgZ2V0VG9rZW5Gcm9tTG9jYWxTdG9yYWdlKCk6IHN0cmluZyB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmNvbmZpZy5qd3RUb2tlbk5hbWUpO1xuICAgIGlmICghdG9rZW4pIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgdGhlIEpXVCB0b2tlbiBmcm9tIHNlc3Npb24gc3RvcmFnZVxuICAgKiBAcmV0dXJucyBUaGUgSldUIHRva2VuXG4gICAqL1xuXG4gIHByaXZhdGUgZ2V0VG9rZW5Gcm9tU2Vzc2lvblN0b3JhZ2UoKTogc3RyaW5nIHtcbiAgICBjb25zdCB0b2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0odGhpcy5jb25maWcuand0VG9rZW5OYW1lKTtcbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYXZlIHRoZSBKV1QgdG9rZW4gdG8gbG9jYWwgc3RvcmFnZVxuICAgKiBAcGFyYW0gdG9rZW4gLSBUaGUgSldUIHRva2VuXG4gICAqL1xuICBwcml2YXRlIHNldExvY2FsU3RvcmFnZSh0b2tlbjogc3RyaW5nKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5jb25maWcuand0VG9rZW5OYW1lLCB0b2tlbik7XG4gIH1cbiAgLyoqXG4gICAqIFNhdmUgdGhlIEpXVCB0b2tlbiB0byBzZXNzaW9uIHN0b3JhZ2VcbiAgICogQHBhcmFtIHRva2VuIC0gVGhlIEpXVCB0b2tlblxuICAgKi9cbiAgcHJpdmF0ZSBzZXRTZXNzaW9uU3RvcmFnZSh0b2tlbjogc3RyaW5nKSB7XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmNvbmZpZy5qd3RUb2tlbk5hbWUsIHRva2VuKTtcbiAgfVxufVxuIl19
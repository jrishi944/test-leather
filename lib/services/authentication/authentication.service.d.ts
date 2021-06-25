import { AuthenticationDataService } from './authentication-data.service';
import { LoginRequest } from '../../models/authentication/login-request.model';
import { BaseNewUserRequest } from '../../models/base-user/base-new-user-request.model';
import { BaseUser } from '../../models/base-user/base-user.model';
import { ILeathermanAppConfig } from '../../config/app.config';
import { Secure } from '../../enums/secure.enum';
import { AuthenticationDetails } from '../../models/authentication/authentication-details.model';
/**
 * A service to handle client authentication
 */
import * as ɵngcc0 from '@angular/core';
export declare class AuthenticationService {
    private config;
    private authenticationDataService;
    /** Get accessor for the JWT token */
    private get token();
    /** Set accessor for the JWT token */
    private set token(value);
    /** Reference to the JWT helper service */
    private jwtHelper;
    private _token;
    /**
     * Constructor
     * @param config - The app config object
     * @param authenticationDataService - A reference to the authentication data service
     */
    constructor(config: ILeathermanAppConfig, authenticationDataService: AuthenticationDataService);
    authenticate(loginRequest: LoginRequest): Promise<AuthenticationDetails>;
    /**
     * Clear the JWT token
     */
    clearToken(): void;
    /**
     * Get the user's primary role
     * @returns The user's primary role
     * @async
     */
    getPrimaryUserRole(): string;
    /**
     * Get the JWT token expiration date
     * @returns The date the token expires
     */
    getTokenExpirationDate(): Date | null;
    /**
     * Get the logged in user's ID
     * @returns The user's ID
     */
    getUserId(): string;
    /**
     * Get the user's roles
     * @returns An array of the user's roles
     */
    getUserRoles(): string[];
    /**
     * Determine if the user is authenticated
     * @returns True if the user is authenticated
     */
    isAuthenticated(): boolean;
    /**
     * Log in a user
     * @param loginRequest - The login request object
     * @returns True if the login succeeded
     * @async
     */
    loginUser<T extends LoginRequest>(loginRequest: T): Promise<AuthenticationDetails>;
    /**
     * Log out a user
     */
    logoutUser(): void;
    /**
     * Register a new user
     * @param newUserRequest - The new user request
     * @param secure - An enum indicating whether the endpoing is secure
     */
    registerUser<T extends BaseNewUserRequest, U extends BaseUser>(newUserRequest: T, secure?: Secure): Promise<U>;
    /**
     * Set the JWT token
     * @param token - The JWT token
     */
    setToken(token: string): void;
    /**
     * Remove the JWT token from local storage
     */
    private clearLocalStorage;
    /**
     * Get the JWT token from local storage
     * @returns The JWT token
     */
    private getTokenFromLocalStorage;
    /**
     * Save the JWT token to local storage
     * @param token - The JWT token
     */
    private setLocalStorage;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AuthenticationService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24uc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJhdXRoZW50aWNhdGlvbi5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhlbnRpY2F0aW9uRGF0YVNlcnZpY2UgfSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dpblJlcXVlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXV0aGVudGljYXRpb24vbG9naW4tcmVxdWVzdC5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlTmV3VXNlclJlcXVlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvYmFzZS11c2VyL2Jhc2UtbmV3LXVzZXItcmVxdWVzdC5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLXVzZXIvYmFzZS11c2VyLm1vZGVsJztcbmltcG9ydCB7IElMZWF0aGVybWFuQXBwQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2FwcC5jb25maWcnO1xuaW1wb3J0IHsgU2VjdXJlIH0gZnJvbSAnLi4vLi4vZW51bXMvc2VjdXJlLmVudW0nO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25EZXRhaWxzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLWRldGFpbHMubW9kZWwnO1xuLyoqXG4gKiBBIHNlcnZpY2UgdG8gaGFuZGxlIGNsaWVudCBhdXRoZW50aWNhdGlvblxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBdXRoZW50aWNhdGlvblNlcnZpY2Uge1xuICAgIHByaXZhdGUgY29uZmlnO1xuICAgIHByaXZhdGUgYXV0aGVudGljYXRpb25EYXRhU2VydmljZTtcbiAgICAvKiogR2V0IGFjY2Vzc29yIGZvciB0aGUgSldUIHRva2VuICovXG4gICAgcHJpdmF0ZSBnZXQgdG9rZW4oKTtcbiAgICAvKiogU2V0IGFjY2Vzc29yIGZvciB0aGUgSldUIHRva2VuICovXG4gICAgcHJpdmF0ZSBzZXQgdG9rZW4odmFsdWUpO1xuICAgIC8qKiBSZWZlcmVuY2UgdG8gdGhlIEpXVCBoZWxwZXIgc2VydmljZSAqL1xuICAgIHByaXZhdGUgand0SGVscGVyO1xuICAgIHByaXZhdGUgX3Rva2VuO1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIGNvbmZpZyAtIFRoZSBhcHAgY29uZmlnIG9iamVjdFxuICAgICAqIEBwYXJhbSBhdXRoZW50aWNhdGlvbkRhdGFTZXJ2aWNlIC0gQSByZWZlcmVuY2UgdG8gdGhlIGF1dGhlbnRpY2F0aW9uIGRhdGEgc2VydmljZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogSUxlYXRoZXJtYW5BcHBDb25maWcsIGF1dGhlbnRpY2F0aW9uRGF0YVNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uRGF0YVNlcnZpY2UpO1xuICAgIGF1dGhlbnRpY2F0ZShsb2dpblJlcXVlc3Q6IExvZ2luUmVxdWVzdCk6IFByb21pc2U8QXV0aGVudGljYXRpb25EZXRhaWxzPjtcbiAgICAvKipcbiAgICAgKiBDbGVhciB0aGUgSldUIHRva2VuXG4gICAgICovXG4gICAgY2xlYXJUb2tlbigpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdXNlcidzIHByaW1hcnkgcm9sZVxuICAgICAqIEByZXR1cm5zIFRoZSB1c2VyJ3MgcHJpbWFyeSByb2xlXG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgZ2V0UHJpbWFyeVVzZXJSb2xlKCk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIEpXVCB0b2tlbiBleHBpcmF0aW9uIGRhdGVcbiAgICAgKiBAcmV0dXJucyBUaGUgZGF0ZSB0aGUgdG9rZW4gZXhwaXJlc1xuICAgICAqL1xuICAgIGdldFRva2VuRXhwaXJhdGlvbkRhdGUoKTogRGF0ZSB8IG51bGw7XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBsb2dnZWQgaW4gdXNlcidzIElEXG4gICAgICogQHJldHVybnMgVGhlIHVzZXIncyBJRFxuICAgICAqL1xuICAgIGdldFVzZXJJZCgpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB1c2VyJ3Mgcm9sZXNcbiAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiB0aGUgdXNlcidzIHJvbGVzXG4gICAgICovXG4gICAgZ2V0VXNlclJvbGVzKCk6IHN0cmluZ1tdO1xuICAgIC8qKlxuICAgICAqIERldGVybWluZSBpZiB0aGUgdXNlciBpcyBhdXRoZW50aWNhdGVkXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdXNlciBpcyBhdXRoZW50aWNhdGVkXG4gICAgICovXG4gICAgaXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogTG9nIGluIGEgdXNlclxuICAgICAqIEBwYXJhbSBsb2dpblJlcXVlc3QgLSBUaGUgbG9naW4gcmVxdWVzdCBvYmplY3RcbiAgICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBsb2dpbiBzdWNjZWVkZWRcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBsb2dpblVzZXI8VCBleHRlbmRzIExvZ2luUmVxdWVzdD4obG9naW5SZXF1ZXN0OiBUKTogUHJvbWlzZTxBdXRoZW50aWNhdGlvbkRldGFpbHM+O1xuICAgIC8qKlxuICAgICAqIExvZyBvdXQgYSB1c2VyXG4gICAgICovXG4gICAgbG9nb3V0VXNlcigpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGEgbmV3IHVzZXJcbiAgICAgKiBAcGFyYW0gbmV3VXNlclJlcXVlc3QgLSBUaGUgbmV3IHVzZXIgcmVxdWVzdFxuICAgICAqIEBwYXJhbSBzZWN1cmUgLSBBbiBlbnVtIGluZGljYXRpbmcgd2hldGhlciB0aGUgZW5kcG9pbmcgaXMgc2VjdXJlXG4gICAgICovXG4gICAgcmVnaXN0ZXJVc2VyPFQgZXh0ZW5kcyBCYXNlTmV3VXNlclJlcXVlc3QsIFUgZXh0ZW5kcyBCYXNlVXNlcj4obmV3VXNlclJlcXVlc3Q6IFQsIHNlY3VyZT86IFNlY3VyZSk6IFByb21pc2U8VT47XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBKV1QgdG9rZW5cbiAgICAgKiBAcGFyYW0gdG9rZW4gLSBUaGUgSldUIHRva2VuXG4gICAgICovXG4gICAgc2V0VG9rZW4odG9rZW46IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHRoZSBKV1QgdG9rZW4gZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgICovXG4gICAgcHJpdmF0ZSBjbGVhckxvY2FsU3RvcmFnZTtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIEpXVCB0b2tlbiBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICAgKiBAcmV0dXJucyBUaGUgSldUIHRva2VuXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRUb2tlbkZyb21Mb2NhbFN0b3JhZ2U7XG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgSldUIHRva2VuIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICAgKiBAcGFyYW0gdG9rZW4gLSBUaGUgSldUIHRva2VuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRMb2NhbFN0b3JhZ2U7XG59XG4iXX0=
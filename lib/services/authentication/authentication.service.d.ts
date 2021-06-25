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
    private store;
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
     * Remove the JWT token from session storage
     */
    private clearSessionStorage;
    /**
     * Get the JWT token from local storage
     * @returns The JWT token
     */
    private getTokenFromLocalStorage;
    /**
     * Get the JWT token from session storage
     * @returns The JWT token
     */
    private getTokenFromSessionStorage;
    /**
     * Save the JWT token to local storage
     * @param token - The JWT token
     */
    private setLocalStorage;
    /**
     * Save the JWT token to session storage
     * @param token - The JWT token
     */
    private setSessionStorage;
}

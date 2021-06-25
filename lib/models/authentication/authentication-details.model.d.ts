import { AuthenticationTokenExpiry } from './_submodels/authentication-token-expiry.mode';
export declare class AuthenticationDetails {
    authenticated: boolean;
    emailVerified: boolean;
    userId: string;
    roles: string[];
    token: string;
    expiry: AuthenticationTokenExpiry;
}

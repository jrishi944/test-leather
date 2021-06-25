/**
 * An interface to define the standard leatherman configuration object
 */
export interface ILeathermanAppConfig {
    /** Boolean indicating whether the app is in production mode */
    production: boolean;
    /** URL of the app's server */
    serverUrl: string;
    /** The API root */
    apiRoot: string;
    /** Name of the app's jwt token */
    jwtTokenName: string;
    /** Route used to register new users */
    registerRoute: string;
    /** Client error endpoint */
    clientErrorEndpoint: string;
    /** Error route */
    errorRoute: string;
    /** Optional API key */
    apiKey?: string;
    /** The endpoint used for base user services */
    userBaseEndpoint: string;
    /** Store to save the token: localStorage/sessionStorage */
    store?: string;
}

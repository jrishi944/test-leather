/**
 * Enumeration representing security options for an API endpoint
 */
export declare enum Secure {
    /** The endpoint request a JWT token */
    true = 0,
    /** The endpoint is not secure */
    false = 1,
    /** The endpoint is secured with an API key */
    api = 2
}

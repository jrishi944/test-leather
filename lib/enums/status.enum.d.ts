/**
 * Enumeration representing controller result statuses
 */
export declare enum Status {
    /** The request succeeded */
    OK = 200,
    /** The request succeeded and a record was created */
    Created = 201,
    /** The request succeeded but there was not data to return */
    NoData = 204,
    /** The request did not result in any data being changed */
    NotModifed = 304,
    /** The request was invalid */
    BadRequest = 400,
    /** The user is not authorized to make the request */
    NotAuthorized = 401,
    /** ;-) */
    ImATeapot = 418,
    /** A server error occurred */
    Error = 500
}

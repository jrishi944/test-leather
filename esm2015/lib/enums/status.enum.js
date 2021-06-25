/**
 * Enumeration representing controller result statuses
 */
export var Status;
(function (Status) {
    /** The request succeeded */
    Status[Status["OK"] = 200] = "OK";
    /** The request succeeded and a record was created */
    Status[Status["Created"] = 201] = "Created";
    /** The request succeeded but there was not data to return */
    Status[Status["NoData"] = 204] = "NoData";
    /** The request did not result in any data being changed */
    Status[Status["NotModifed"] = 304] = "NotModifed";
    /** The request was invalid */
    Status[Status["BadRequest"] = 400] = "BadRequest";
    /** The user is not authorized to make the request */
    Status[Status["NotAuthorized"] = 401] = "NotAuthorized";
    /** ;-) */
    Status[Status["ImATeapot"] = 418] = "ImATeapot";
    /** A server error occurred */
    Status[Status["Error"] = 500] = "Error";
})(Status || (Status = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLmVudW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9lbnVtcy9zdGF0dXMuZW51bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUNILE1BQU0sQ0FBTixJQUFZLE1Bd0JYO0FBeEJELFdBQVksTUFBTTtJQUNoQiw0QkFBNEI7SUFDNUIsaUNBQVEsQ0FBQTtJQUVSLHFEQUFxRDtJQUNyRCwyQ0FBYSxDQUFBO0lBRWIsNkRBQTZEO0lBQzdELHlDQUFZLENBQUE7SUFFWiwyREFBMkQ7SUFDM0QsaURBQWdCLENBQUE7SUFFaEIsOEJBQThCO0lBQzlCLGlEQUFnQixDQUFBO0lBRWhCLHFEQUFxRDtJQUNyRCx1REFBbUIsQ0FBQTtJQUVuQixVQUFVO0lBQ1YsK0NBQWUsQ0FBQTtJQUVmLDhCQUE4QjtJQUM5Qix1Q0FBVyxDQUFBO0FBQ2IsQ0FBQyxFQXhCVyxNQUFNLEtBQU4sTUFBTSxRQXdCakIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEVudW1lcmF0aW9uIHJlcHJlc2VudGluZyBjb250cm9sbGVyIHJlc3VsdCBzdGF0dXNlc1xuICovXG5leHBvcnQgZW51bSBTdGF0dXMge1xuICAvKiogVGhlIHJlcXVlc3Qgc3VjY2VlZGVkICovXG4gIE9LID0gMjAwLFxuXG4gIC8qKiBUaGUgcmVxdWVzdCBzdWNjZWVkZWQgYW5kIGEgcmVjb3JkIHdhcyBjcmVhdGVkICovXG4gIENyZWF0ZWQgPSAyMDEsXG5cbiAgLyoqIFRoZSByZXF1ZXN0IHN1Y2NlZWRlZCBidXQgdGhlcmUgd2FzIG5vdCBkYXRhIHRvIHJldHVybiAqL1xuICBOb0RhdGEgPSAyMDQsXG5cbiAgLyoqIFRoZSByZXF1ZXN0IGRpZCBub3QgcmVzdWx0IGluIGFueSBkYXRhIGJlaW5nIGNoYW5nZWQgKi9cbiAgTm90TW9kaWZlZCA9IDMwNCxcblxuICAvKiogVGhlIHJlcXVlc3Qgd2FzIGludmFsaWQgKi9cbiAgQmFkUmVxdWVzdCA9IDQwMCxcblxuICAvKiogVGhlIHVzZXIgaXMgbm90IGF1dGhvcml6ZWQgdG8gbWFrZSB0aGUgcmVxdWVzdCAqL1xuICBOb3RBdXRob3JpemVkID0gNDAxLFxuXG4gIC8qKiA7LSkgKi9cbiAgSW1BVGVhcG90ID0gNDE4LFxuXG4gIC8qKiBBIHNlcnZlciBlcnJvciBvY2N1cnJlZCAqL1xuICBFcnJvciA9IDUwMFxufVxuIl19
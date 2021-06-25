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
export var SessionState;
(function (SessionState) {
    SessionState["LocalStorage"] = "local-storage";
    SessionState["SessionStorage"] = "session-storage";
})(SessionState || (SessionState = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLmVudW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9lbnVtcy9zdGF0dXMuZW51bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUNILE1BQU0sQ0FBTixJQUFZLE1Bd0JYO0FBeEJELFdBQVksTUFBTTtJQUNoQiw0QkFBNEI7SUFDNUIsaUNBQVEsQ0FBQTtJQUVSLHFEQUFxRDtJQUNyRCwyQ0FBYSxDQUFBO0lBRWIsNkRBQTZEO0lBQzdELHlDQUFZLENBQUE7SUFFWiwyREFBMkQ7SUFDM0QsaURBQWdCLENBQUE7SUFFaEIsOEJBQThCO0lBQzlCLGlEQUFnQixDQUFBO0lBRWhCLHFEQUFxRDtJQUNyRCx1REFBbUIsQ0FBQTtJQUVuQixVQUFVO0lBQ1YsK0NBQWUsQ0FBQTtJQUVmLDhCQUE4QjtJQUM5Qix1Q0FBVyxDQUFBO0FBQ2IsQ0FBQyxFQXhCVyxNQUFNLEtBQU4sTUFBTSxRQXdCakI7QUFFRCxNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3RCLDhDQUE4QixDQUFBO0lBQzlCLGtEQUFrQyxDQUFBO0FBQ3BDLENBQUMsRUFIVyxZQUFZLEtBQVosWUFBWSxRQUd2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRW51bWVyYXRpb24gcmVwcmVzZW50aW5nIGNvbnRyb2xsZXIgcmVzdWx0IHN0YXR1c2VzXG4gKi9cbmV4cG9ydCBlbnVtIFN0YXR1cyB7XG4gIC8qKiBUaGUgcmVxdWVzdCBzdWNjZWVkZWQgKi9cbiAgT0sgPSAyMDAsXG5cbiAgLyoqIFRoZSByZXF1ZXN0IHN1Y2NlZWRlZCBhbmQgYSByZWNvcmQgd2FzIGNyZWF0ZWQgKi9cbiAgQ3JlYXRlZCA9IDIwMSxcblxuICAvKiogVGhlIHJlcXVlc3Qgc3VjY2VlZGVkIGJ1dCB0aGVyZSB3YXMgbm90IGRhdGEgdG8gcmV0dXJuICovXG4gIE5vRGF0YSA9IDIwNCxcblxuICAvKiogVGhlIHJlcXVlc3QgZGlkIG5vdCByZXN1bHQgaW4gYW55IGRhdGEgYmVpbmcgY2hhbmdlZCAqL1xuICBOb3RNb2RpZmVkID0gMzA0LFxuXG4gIC8qKiBUaGUgcmVxdWVzdCB3YXMgaW52YWxpZCAqL1xuICBCYWRSZXF1ZXN0ID0gNDAwLFxuXG4gIC8qKiBUaGUgdXNlciBpcyBub3QgYXV0aG9yaXplZCB0byBtYWtlIHRoZSByZXF1ZXN0ICovXG4gIE5vdEF1dGhvcml6ZWQgPSA0MDEsXG5cbiAgLyoqIDstKSAqL1xuICBJbUFUZWFwb3QgPSA0MTgsXG5cbiAgLyoqIEEgc2VydmVyIGVycm9yIG9jY3VycmVkICovXG4gIEVycm9yID0gNTAwXG59XG5cbmV4cG9ydCBlbnVtIFNlc3Npb25TdGF0ZSB7XG4gIExvY2FsU3RvcmFnZSA9ICdsb2NhbC1zdG9yYWdlJyxcbiAgU2Vzc2lvblN0b3JhZ2UgPSAnc2Vzc2lvbi1zdG9yYWdlJ1xufVxuIl19
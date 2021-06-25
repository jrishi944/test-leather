import { BaseModel } from '../base/base.model';
/**
 * A class to store an error report
 */
export class ClientErrorReport extends BaseModel {
    /**
     * @param serviceName - The name of the service reporting the error
     * @param message - The error message
     * @param status - The error status
     * @param statusText - The status text
     * @param url - The offending URL
     * @param stackTrace - A stack trace
     */
    constructor(serviceName, message, status, statusText, url, stackTrace) {
        super();
        this.serviceName = serviceName;
        this.message = message;
        this.status = status;
        this.statusText = statusText;
        this.url = url;
        this.stackTrace = stackTrace;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LWVycm9yLXJlcG9ydC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9lcnJvci9jbGllbnQtZXJyb3ItcmVwb3J0Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQzs7R0FFRztBQUNILE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxTQUFTO0lBQzlDOzs7Ozs7O09BT0c7SUFDSCxZQUNTLFdBQW1CLEVBQ25CLE9BQWUsRUFDZixNQUFjLEVBQ2QsVUFBa0IsRUFDbEIsR0FBVyxFQUNYLFVBQW1CO1FBRTFCLEtBQUssRUFBRSxDQUFDO1FBUEQsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ2xCLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFDWCxlQUFVLEdBQVYsVUFBVSxDQUFTO0lBRzVCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gJy4uL2Jhc2UvYmFzZS5tb2RlbCc7XG5cbi8qKlxuICogQSBjbGFzcyB0byBzdG9yZSBhbiBlcnJvciByZXBvcnRcbiAqL1xuZXhwb3J0IGNsYXNzIENsaWVudEVycm9yUmVwb3J0IGV4dGVuZHMgQmFzZU1vZGVsIHtcbiAgLyoqXG4gICAqIEBwYXJhbSBzZXJ2aWNlTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlIHJlcG9ydGluZyB0aGUgZXJyb3JcbiAgICogQHBhcmFtIG1lc3NhZ2UgLSBUaGUgZXJyb3IgbWVzc2FnZVxuICAgKiBAcGFyYW0gc3RhdHVzIC0gVGhlIGVycm9yIHN0YXR1c1xuICAgKiBAcGFyYW0gc3RhdHVzVGV4dCAtIFRoZSBzdGF0dXMgdGV4dFxuICAgKiBAcGFyYW0gdXJsIC0gVGhlIG9mZmVuZGluZyBVUkxcbiAgICogQHBhcmFtIHN0YWNrVHJhY2UgLSBBIHN0YWNrIHRyYWNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc2VydmljZU5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nLFxuICAgIHB1YmxpYyBzdGF0dXM6IG51bWJlcixcbiAgICBwdWJsaWMgc3RhdHVzVGV4dDogc3RyaW5nLFxuICAgIHB1YmxpYyB1cmw6IHN0cmluZyxcbiAgICBwdWJsaWMgc3RhY2tUcmFjZT86IHN0cmluZ1xuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG59XG4iXX0=
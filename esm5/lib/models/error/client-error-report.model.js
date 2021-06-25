import { __extends } from "tslib";
import { BaseModel } from '../base/base.model';
/**
 * A class to store an error report
 */
var ClientErrorReport = /** @class */ (function (_super) {
    __extends(ClientErrorReport, _super);
    /**
     * @param serviceName - The name of the service reporting the error
     * @param message - The error message
     * @param status - The error status
     * @param statusText - The status text
     * @param url - The offending URL
     * @param stackTrace - A stack trace
     */
    function ClientErrorReport(serviceName, message, status, statusText, url, stackTrace) {
        var _this = _super.call(this) || this;
        _this.serviceName = serviceName;
        _this.message = message;
        _this.status = status;
        _this.statusText = statusText;
        _this.url = url;
        _this.stackTrace = stackTrace;
        return _this;
    }
    return ClientErrorReport;
}(BaseModel));
export { ClientErrorReport };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LWVycm9yLXJlcG9ydC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9lcnJvci9jbGllbnQtZXJyb3ItcmVwb3J0Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0M7O0dBRUc7QUFDSDtJQUF1QyxxQ0FBUztJQUM5Qzs7Ozs7OztPQU9HO0lBQ0gsMkJBQ1MsV0FBbUIsRUFDbkIsT0FBZSxFQUNmLE1BQWMsRUFDZCxVQUFrQixFQUNsQixHQUFXLEVBQ1gsVUFBbUI7UUFONUIsWUFRRSxpQkFBTyxTQUNSO1FBUlEsaUJBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsYUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFlBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixTQUFHLEdBQUgsR0FBRyxDQUFRO1FBQ1gsZ0JBQVUsR0FBVixVQUFVLENBQVM7O0lBRzVCLENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFuQkQsQ0FBdUMsU0FBUyxHQW1CL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuLi9iYXNlL2Jhc2UubW9kZWwnO1xuXG4vKipcbiAqIEEgY2xhc3MgdG8gc3RvcmUgYW4gZXJyb3IgcmVwb3J0XG4gKi9cbmV4cG9ydCBjbGFzcyBDbGllbnRFcnJvclJlcG9ydCBleHRlbmRzIEJhc2VNb2RlbCB7XG4gIC8qKlxuICAgKiBAcGFyYW0gc2VydmljZU5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgc2VydmljZSByZXBvcnRpbmcgdGhlIGVycm9yXG4gICAqIEBwYXJhbSBtZXNzYWdlIC0gVGhlIGVycm9yIG1lc3NhZ2VcbiAgICogQHBhcmFtIHN0YXR1cyAtIFRoZSBlcnJvciBzdGF0dXNcbiAgICogQHBhcmFtIHN0YXR1c1RleHQgLSBUaGUgc3RhdHVzIHRleHRcbiAgICogQHBhcmFtIHVybCAtIFRoZSBvZmZlbmRpbmcgVVJMXG4gICAqIEBwYXJhbSBzdGFja1RyYWNlIC0gQSBzdGFjayB0cmFjZVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlcnZpY2VOYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZyxcbiAgICBwdWJsaWMgc3RhdHVzOiBudW1iZXIsXG4gICAgcHVibGljIHN0YXR1c1RleHQ6IHN0cmluZyxcbiAgICBwdWJsaWMgdXJsOiBzdHJpbmcsXG4gICAgcHVibGljIHN0YWNrVHJhY2U/OiBzdHJpbmdcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxufVxuIl19
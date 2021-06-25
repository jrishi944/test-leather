import { __awaiter, __decorate, __extends, __generator, __param } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BaseDataService } from '../base-data/base-data.service';
import { Secure } from '../../enums/secure.enum';
import { ErrorDialogService } from '../../dialogs/error/error-dialog.service';
import { ClientErrorReport } from '../../models/error/client-error-report.model';
import { LeathermanAppConfigInjectionToken } from '../../config/injection-tokens/leatherman-app-config.injection-token';
import { ErrorDialogServiceInjectionToken } from '../../config/injection-tokens/error-dialog-service.injection-token';
import * as i0 from "@angular/core";
import * as i1 from "../../config/injection-tokens/leatherman-app-config.injection-token";
import * as i2 from "../../config/injection-tokens/error-dialog-service.injection-token";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common/http";
/**
 * A custom error handler service for unhandled exceptions
 */
var CustomErrorHandlerService = /** @class */ (function (_super) {
    __extends(CustomErrorHandlerService, _super);
    /**
     * Constructor
     * @param config - The app config object
     * @param errorDialogService - A reference to the error dialog service
     * @param router - A reference to the router
     * @param httpClient - A reference to the HTTP client
     */
    function CustomErrorHandlerService(config, errorDialogService, router, httpClient) {
        var _this = _super.call(this, config, errorDialogService, router, httpClient) || this;
        _this.baseEndpoint = 'error/client';
        return _this;
    }
    /**
     * Delete a client error from the database
     * @param clientErrorId - The ID of the client error to delete
     * @returns True if the delete suceeded
     * @async
     */
    CustomErrorHandlerService.prototype.deleteClientError = function (clientErrorId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this._delete(clientErrorId, Secure.true).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.handlePromiseError('CustomErrorHandlerService', 'deleteClientError', err)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Get the details of a client error record
     * @param clientErrorId - The ID of the client error to get
     * @returns A client error object
     * @async
     */
    CustomErrorHandlerService.prototype.getClientError = function (clientErrorId) {
        return __awaiter(this, void 0, void 0, function () {
            var clientError;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._get(clientErrorId, Secure.true).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.handlePromiseError('CustomErrorHandlerService', 'getClientError', err)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1:
                        clientError = _a.sent();
                        return [2 /*return*/, clientError];
                }
            });
        });
    };
    /**
     * Handle a standard error
     * @param error - The error object
     * @async
     */
    CustomErrorHandlerService.prototype.handleError = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var errorReport, clientErrorReport;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Default error handler caught an error');
                        console.log(error);
                        if (!(this.config.production === false)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.errorDialogService.openErrorDialog('Unexpected Error', 'An unexpected error occurred: ' + error.message)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        errorReport = new ClientErrorReport('unknown', error.message, error.status, error.statusText, error.url);
                        return [4 /*yield*/, this.reportClientError(errorReport)];
                    case 3:
                        clientErrorReport = _a.sent();
                        document.location.href =
                            this.config.errorRoute + '?errorReportId=' + clientErrorReport._id;
                        return [2 /*return*/, null];
                }
            });
        });
    };
    /**
     * Report a client error
     * @param errorReport - The client error object
     * @returns The client error report
     * @async
     */
    CustomErrorHandlerService.prototype.reportClientError = function (errorReport) {
        return __awaiter(this, void 0, void 0, function () {
            var error;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._post(errorReport, Secure.true, false).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.handlePromiseError('CustomErrorHandlerService', 'reportHttpError', err)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1:
                        error = _a.sent();
                        return [2 /*return*/, error];
                }
            });
        });
    };
    CustomErrorHandlerService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [LeathermanAppConfigInjectionToken,] }] },
        { type: ErrorDialogService, decorators: [{ type: Inject, args: [ErrorDialogServiceInjectionToken,] }] },
        { type: Router },
        { type: HttpClient }
    ]; };
    CustomErrorHandlerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CustomErrorHandlerService_Factory() { return new CustomErrorHandlerService(i0.ɵɵinject(i1.LeathermanAppConfigInjectionToken), i0.ɵɵinject(i2.ErrorDialogServiceInjectionToken), i0.ɵɵinject(i3.Router), i0.ɵɵinject(i4.HttpClient)); }, token: CustomErrorHandlerService, providedIn: "root" });
    CustomErrorHandlerService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Inject(LeathermanAppConfigInjectionToken)),
        __param(1, Inject(ErrorDialogServiceInjectionToken))
    ], CustomErrorHandlerService);
    return CustomErrorHandlerService;
}(BaseDataService));
export { CustomErrorHandlerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVycm9yLWhhbmRsZXIuc2VydmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGVhdGhlcm1hbi1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZXJyb3IvY3VzdG9tLWVycm9yLWhhbmRsZXIuc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWdCLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDakUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBRXhILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9FQUFvRSxDQUFDOzs7Ozs7QUFFdEg7O0dBRUc7QUFJSDtJQUErQyw2Q0FBZTtJQUU1RDs7Ozs7O09BTUc7SUFDSCxtQ0FDNkMsTUFBNEIsRUFFdkUsa0JBQXNDLEVBQ3RDLE1BQWMsRUFDZCxVQUFzQjtRQUx4QixZQU9FLGtCQUFNLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLFNBRXREO1FBREMsS0FBSSxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUM7O0lBQ3JDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNVLHFEQUFpQixHQUE5QixVQUErQixhQUFxQjs7OztnQkFDbEQsc0JBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFNLEdBQUc7Ozt3Q0FDdEQscUJBQU0sSUFBSSxDQUFDLGtCQUFrQixDQUNsQywyQkFBMkIsRUFDM0IsbUJBQW1CLEVBQ25CLEdBQUcsQ0FDSixFQUFBO3dDQUpELHNCQUFPLFNBSU4sRUFBQzs7O3lCQUNILENBQUMsRUFBQzs7O0tBQ0o7SUFFRDs7Ozs7T0FLRztJQUNVLGtEQUFjLEdBQTNCLFVBQ0UsYUFBcUI7Ozs7Ozs0QkFFRCxxQkFBTSxJQUFJLENBQUMsSUFBSSxDQUNqQyxhQUFhLEVBQ2IsTUFBTSxDQUFDLElBQUksQ0FDWixDQUFDLEtBQUssQ0FBQyxVQUFNLEdBQUc7Ozs0Q0FDUixxQkFBTSxJQUFJLENBQUMsa0JBQWtCLENBQ2xDLDJCQUEyQixFQUMzQixnQkFBZ0IsRUFDaEIsR0FBRyxDQUNKLEVBQUE7NENBSkQsc0JBQU8sU0FJTixFQUFDOzs7NkJBQ0gsQ0FBQyxFQUFBOzt3QkFUSSxXQUFXLEdBQUcsU0FTbEI7d0JBQ0Ysc0JBQU8sV0FBVyxFQUFDOzs7O0tBQ3BCO0lBRUQ7Ozs7T0FJRztJQUNVLCtDQUFXLEdBQXhCLFVBQXlCLEtBQVU7Ozs7Ozt3QkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO3dCQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOzZCQUNmLENBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFBLEVBQWhDLHdCQUFnQzt3QkFDbEMscUJBQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FDM0Msa0JBQWtCLEVBQ2xCLGdDQUFnQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQ2pELEVBQUE7O3dCQUhELFNBR0MsQ0FBQzs7O3dCQUVFLFdBQVcsR0FBRyxJQUFJLGlCQUFpQixDQUN2QyxTQUFTLEVBQ1QsS0FBSyxDQUFDLE9BQU8sRUFDYixLQUFLLENBQUMsTUFBTSxFQUNaLEtBQUssQ0FBQyxVQUFVLEVBQ2hCLEtBQUssQ0FBQyxHQUFHLENBQ1YsQ0FBQzt3QkFDd0IscUJBQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxFQUFBOzt3QkFBN0QsaUJBQWlCLEdBQUcsU0FBeUM7d0JBQ25FLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSTs0QkFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDO3dCQUNyRSxzQkFBTyxJQUFJLEVBQUM7Ozs7S0FDYjtJQUVEOzs7OztPQUtHO0lBQ1UscURBQWlCLEdBQTlCLFVBQ0UsV0FBOEI7Ozs7Ozs0QkFFaEIscUJBQU0sSUFBSSxDQUFDLEtBQUssQ0FDNUIsV0FBVyxFQUNYLE1BQU0sQ0FBQyxJQUFJLEVBQ1gsS0FBSyxDQUNOLENBQUMsS0FBSyxDQUFDLFVBQU0sR0FBRzs7OzRDQUNSLHFCQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FDbEMsMkJBQTJCLEVBQzNCLGlCQUFpQixFQUNqQixHQUFHLENBQ0osRUFBQTs0Q0FKRCxzQkFBTyxTQUlOLEVBQUM7Ozs2QkFDSCxDQUFDLEVBQUE7O3dCQVZJLEtBQUssR0FBRyxTQVVaO3dCQUNGLHNCQUFPLEtBQUssRUFBQzs7OztLQUNkOztnREFoR0UsTUFBTSxTQUFDLGlDQUFpQztnQkFFckIsa0JBQWtCLHVCQURyQyxNQUFNLFNBQUMsZ0NBQWdDO2dCQUVoQyxNQUFNO2dCQUNGLFVBQVU7OztJQWRiLHlCQUF5QjtRQUhyQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO1FBV0csV0FBQSxNQUFNLENBQUMsaUNBQWlDLENBQUMsQ0FBQTtRQUN6QyxXQUFBLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO09BWGhDLHlCQUF5QixDQTJHckM7b0NBNUhEO0NBNEhDLEFBM0dELENBQStDLGVBQWUsR0EyRzdEO1NBM0dZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9ySGFuZGxlciwgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJhc2VEYXRhU2VydmljZSB9IGZyb20gJy4uL2Jhc2UtZGF0YS9iYXNlLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBTZWN1cmUgfSBmcm9tICcuLi8uLi9lbnVtcy9zZWN1cmUuZW51bSc7XG5pbXBvcnQgeyBFcnJvckRpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9kaWFsb2dzL2Vycm9yL2Vycm9yLWRpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IENsaWVudEVycm9yUmVwb3J0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Vycm9yL2NsaWVudC1lcnJvci1yZXBvcnQubW9kZWwnO1xuaW1wb3J0IHsgTGVhdGhlcm1hbkFwcENvbmZpZ0luamVjdGlvblRva2VuIH0gZnJvbSAnLi4vLi4vY29uZmlnL2luamVjdGlvbi10b2tlbnMvbGVhdGhlcm1hbi1hcHAtY29uZmlnLmluamVjdGlvbi10b2tlbic7XG5pbXBvcnQgeyBJTGVhdGhlcm1hbkFwcENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9hcHAuY29uZmlnJztcbmltcG9ydCB7IEVycm9yRGlhbG9nU2VydmljZUluamVjdGlvblRva2VuIH0gZnJvbSAnLi4vLi4vY29uZmlnL2luamVjdGlvbi10b2tlbnMvZXJyb3ItZGlhbG9nLXNlcnZpY2UuaW5qZWN0aW9uLXRva2VuJztcblxuLyoqXG4gKiBBIGN1c3RvbSBlcnJvciBoYW5kbGVyIHNlcnZpY2UgZm9yIHVuaGFuZGxlZCBleGNlcHRpb25zXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUVycm9ySGFuZGxlclNlcnZpY2UgZXh0ZW5kcyBCYXNlRGF0YVNlcnZpY2VcbiAgaW1wbGVtZW50cyBFcnJvckhhbmRsZXIge1xuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogQHBhcmFtIGNvbmZpZyAtIFRoZSBhcHAgY29uZmlnIG9iamVjdFxuICAgKiBAcGFyYW0gZXJyb3JEaWFsb2dTZXJ2aWNlIC0gQSByZWZlcmVuY2UgdG8gdGhlIGVycm9yIGRpYWxvZyBzZXJ2aWNlXG4gICAqIEBwYXJhbSByb3V0ZXIgLSBBIHJlZmVyZW5jZSB0byB0aGUgcm91dGVyXG4gICAqIEBwYXJhbSBodHRwQ2xpZW50IC0gQSByZWZlcmVuY2UgdG8gdGhlIEhUVFAgY2xpZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KExlYXRoZXJtYW5BcHBDb25maWdJbmplY3Rpb25Ub2tlbikgY29uZmlnOiBJTGVhdGhlcm1hbkFwcENvbmZpZyxcbiAgICBASW5qZWN0KEVycm9yRGlhbG9nU2VydmljZUluamVjdGlvblRva2VuKVxuICAgIGVycm9yRGlhbG9nU2VydmljZTogRXJyb3JEaWFsb2dTZXJ2aWNlLFxuICAgIHJvdXRlcjogUm91dGVyLFxuICAgIGh0dHBDbGllbnQ6IEh0dHBDbGllbnRcbiAgKSB7XG4gICAgc3VwZXIoY29uZmlnLCBlcnJvckRpYWxvZ1NlcnZpY2UsIHJvdXRlciwgaHR0cENsaWVudCk7XG4gICAgdGhpcy5iYXNlRW5kcG9pbnQgPSAnZXJyb3IvY2xpZW50JztcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYSBjbGllbnQgZXJyb3IgZnJvbSB0aGUgZGF0YWJhc2VcbiAgICogQHBhcmFtIGNsaWVudEVycm9ySWQgLSBUaGUgSUQgb2YgdGhlIGNsaWVudCBlcnJvciB0byBkZWxldGVcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZGVsZXRlIHN1Y2VlZGVkXG4gICAqIEBhc3luY1xuICAgKi9cbiAgcHVibGljIGFzeW5jIGRlbGV0ZUNsaWVudEVycm9yKGNsaWVudEVycm9ySWQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLl9kZWxldGUoY2xpZW50RXJyb3JJZCwgU2VjdXJlLnRydWUpLmNhdGNoKGFzeW5jIGVyciA9PiB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5oYW5kbGVQcm9taXNlRXJyb3IoXG4gICAgICAgICdDdXN0b21FcnJvckhhbmRsZXJTZXJ2aWNlJyxcbiAgICAgICAgJ2RlbGV0ZUNsaWVudEVycm9yJyxcbiAgICAgICAgZXJyXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGV0YWlscyBvZiBhIGNsaWVudCBlcnJvciByZWNvcmRcbiAgICogQHBhcmFtIGNsaWVudEVycm9ySWQgLSBUaGUgSUQgb2YgdGhlIGNsaWVudCBlcnJvciB0byBnZXRcbiAgICogQHJldHVybnMgQSBjbGllbnQgZXJyb3Igb2JqZWN0XG4gICAqIEBhc3luY1xuICAgKi9cbiAgcHVibGljIGFzeW5jIGdldENsaWVudEVycm9yKFxuICAgIGNsaWVudEVycm9ySWQ6IHN0cmluZ1xuICApOiBQcm9taXNlPENsaWVudEVycm9yUmVwb3J0PiB7XG4gICAgY29uc3QgY2xpZW50RXJyb3IgPSBhd2FpdCB0aGlzLl9nZXQ8Q2xpZW50RXJyb3JSZXBvcnQ+KFxuICAgICAgY2xpZW50RXJyb3JJZCxcbiAgICAgIFNlY3VyZS50cnVlXG4gICAgKS5jYXRjaChhc3luYyBlcnIgPT4ge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaGFuZGxlUHJvbWlzZUVycm9yKFxuICAgICAgICAnQ3VzdG9tRXJyb3JIYW5kbGVyU2VydmljZScsXG4gICAgICAgICdnZXRDbGllbnRFcnJvcicsXG4gICAgICAgIGVyclxuICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4gY2xpZW50RXJyb3I7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGEgc3RhbmRhcmQgZXJyb3JcbiAgICogQHBhcmFtIGVycm9yIC0gVGhlIGVycm9yIG9iamVjdFxuICAgKiBAYXN5bmNcbiAgICovXG4gIHB1YmxpYyBhc3luYyBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogUHJvbWlzZTxudWxsPiB7XG4gICAgY29uc29sZS5sb2coJ0RlZmF1bHQgZXJyb3IgaGFuZGxlciBjYXVnaHQgYW4gZXJyb3InKTtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgaWYgKHRoaXMuY29uZmlnLnByb2R1Y3Rpb24gPT09IGZhbHNlKSB7XG4gICAgICBhd2FpdCB0aGlzLmVycm9yRGlhbG9nU2VydmljZS5vcGVuRXJyb3JEaWFsb2coXG4gICAgICAgICdVbmV4cGVjdGVkIEVycm9yJyxcbiAgICAgICAgJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQ6ICcgKyBlcnJvci5tZXNzYWdlXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBlcnJvclJlcG9ydCA9IG5ldyBDbGllbnRFcnJvclJlcG9ydChcbiAgICAgICd1bmtub3duJyxcbiAgICAgIGVycm9yLm1lc3NhZ2UsXG4gICAgICBlcnJvci5zdGF0dXMsXG4gICAgICBlcnJvci5zdGF0dXNUZXh0LFxuICAgICAgZXJyb3IudXJsXG4gICAgKTtcbiAgICBjb25zdCBjbGllbnRFcnJvclJlcG9ydCA9IGF3YWl0IHRoaXMucmVwb3J0Q2xpZW50RXJyb3IoZXJyb3JSZXBvcnQpO1xuICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPVxuICAgICAgdGhpcy5jb25maWcuZXJyb3JSb3V0ZSArICc/ZXJyb3JSZXBvcnRJZD0nICsgY2xpZW50RXJyb3JSZXBvcnQuX2lkO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcG9ydCBhIGNsaWVudCBlcnJvclxuICAgKiBAcGFyYW0gZXJyb3JSZXBvcnQgLSBUaGUgY2xpZW50IGVycm9yIG9iamVjdFxuICAgKiBAcmV0dXJucyBUaGUgY2xpZW50IGVycm9yIHJlcG9ydFxuICAgKiBAYXN5bmNcbiAgICovXG4gIHB1YmxpYyBhc3luYyByZXBvcnRDbGllbnRFcnJvcihcbiAgICBlcnJvclJlcG9ydDogQ2xpZW50RXJyb3JSZXBvcnRcbiAgKTogUHJvbWlzZTxDbGllbnRFcnJvclJlcG9ydD4ge1xuICAgIGNvbnN0IGVycm9yID0gYXdhaXQgdGhpcy5fcG9zdDxDbGllbnRFcnJvclJlcG9ydD4oXG4gICAgICBlcnJvclJlcG9ydCxcbiAgICAgIFNlY3VyZS50cnVlLFxuICAgICAgZmFsc2VcbiAgICApLmNhdGNoKGFzeW5jIGVyciA9PiB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5oYW5kbGVQcm9taXNlRXJyb3IoXG4gICAgICAgICdDdXN0b21FcnJvckhhbmRsZXJTZXJ2aWNlJyxcbiAgICAgICAgJ3JlcG9ydEh0dHBFcnJvcicsXG4gICAgICAgIGVyclxuICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn1cbiJdfQ==
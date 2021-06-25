import { __awaiter, __decorate, __extends, __generator, __param } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BaseDataService } from '../base-data/base-data.service';
import { Options } from '../base-data/_models/base-data-options.model';
import { Secure } from '../../enums/secure.enum';
import { UrlUtil } from '../../util/url/url.util';
import { ErrorDialogService } from '../../dialogs/error/error-dialog.service';
import { LeathermanAppConfigInjectionToken } from '../../config/injection-tokens/leatherman-app-config.injection-token';
import { ErrorDialogServiceInjectionToken } from '../../config/injection-tokens/error-dialog-service.injection-token';
import { Status } from '../../enums/status.enum';
import * as i0 from "@angular/core";
import * as i1 from "../../config/injection-tokens/leatherman-app-config.injection-token";
import * as i2 from "../../config/injection-tokens/error-dialog-service.injection-token";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common/http";
/**
 * A service for communicating with the server's authentication endpoints
 */
var AuthenticationDataService = /** @class */ (function (_super) {
    __extends(AuthenticationDataService, _super);
    /**
     * Constructor
     * @param config - The app config object
     * @param errorDialogService - A reference to the error dialog service
     * @param router - A reference to the router
     * @param httpClient - A reference to the HTTP client
     */
    function AuthenticationDataService(config, errorDialogService, router, httpClient) {
        return _super.call(this, config, errorDialogService, router, httpClient) || this;
    }
    // /**
    //  * Get a JWT token
    //  * @param loginRequest - The login request object
    //  * @returns A JWT token
    //  * @async
    //  */
    // public async getToken<T extends LoginRequest>(loginRequest: T): Promise<string> {
    //   const options = new Options();
    //   options.url = UrlUtil.join(this.apiRoot, 'gettoken');
    //   options.secure = Secure.false;
    //   options.validateId = false;
    //   options.suppressedErrors.push(Status.NotAuthorized);
    //   const token = await this._postWithOptions<string>(
    //     loginRequest,
    //     options
    //   ).catch(async err => {
    //     return await this.handlePromiseError(
    //       'AuthenticationDataService',
    //       'getToken',
    //       err
    //     );
    //   });
    //   return token;
    // }
    AuthenticationDataService.prototype.authenticate = function (loginRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var options, authenticationDetails;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = new Options();
                        options.url = UrlUtil.join(this.apiRoot, 'authenticate');
                        options.secure = Secure.false;
                        options.validateId = false;
                        options.suppressedErrors.push(Status.NotAuthorized);
                        console.log('About to authenticate');
                        return [4 /*yield*/, this._postWithOptions(loginRequest, options).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log(err);
                                            return [4 /*yield*/, this.handlePromiseError('AuthenticationDataService', 'authenticate', err)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); })];
                    case 1:
                        authenticationDetails = _a.sent();
                        console.log('Authentication details');
                        console.log(authenticationDetails);
                        return [2 /*return*/, authenticationDetails];
                }
            });
        });
    };
    /**
     * Register a new user
     * @param newUserRequest - A new user request object
     * @param secure - An enum indicating whether the endpoint is secure
     */
    AuthenticationDataService.prototype.register = function (newUserRequest, secure) {
        return __awaiter(this, void 0, void 0, function () {
            var options, user;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = new Options();
                        options.url = UrlUtil.join(this.apiRoot, this.config.registerRoute);
                        options.secure = secure;
                        options.validateId = false;
                        return [4 /*yield*/, this._postWithOptions(newUserRequest, options).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.handlePromiseError('AuthenticationDataService', 'register', err)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); })];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    AuthenticationDataService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [LeathermanAppConfigInjectionToken,] }] },
        { type: ErrorDialogService, decorators: [{ type: Inject, args: [ErrorDialogServiceInjectionToken,] }] },
        { type: Router },
        { type: HttpClient }
    ]; };
    AuthenticationDataService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthenticationDataService_Factory() { return new AuthenticationDataService(i0.ɵɵinject(i1.LeathermanAppConfigInjectionToken), i0.ɵɵinject(i2.ErrorDialogServiceInjectionToken), i0.ɵɵinject(i3.Router), i0.ɵɵinject(i4.HttpClient)); }, token: AuthenticationDataService, providedIn: "root" });
    AuthenticationDataService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Inject(LeathermanAppConfigInjectionToken)),
        __param(1, Inject(ErrorDialogServiceInjectionToken))
    ], AuthenticationDataService);
    return AuthenticationDataService;
}(BaseDataService));
export { AuthenticationDataService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGVhdGhlcm1hbi1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24tZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUk5RSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUV4SCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUN0SCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztBQUdqRDs7R0FFRztBQUlIO0lBQStDLDZDQUFlO0lBQzVEOzs7Ozs7T0FNRztJQUNILG1DQUM2QyxNQUE0QixFQUV2RSxrQkFBc0MsRUFDdEMsTUFBYyxFQUNkLFVBQXNCO2VBRXRCLGtCQUFNLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxNQUFNO0lBQ04scUJBQXFCO0lBQ3JCLG9EQUFvRDtJQUNwRCwwQkFBMEI7SUFDMUIs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bmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQmFzZURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vYmFzZS1kYXRhL2Jhc2UtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuLi9iYXNlLWRhdGEvX21vZGVscy9iYXNlLWRhdGEtb3B0aW9ucy5tb2RlbCc7XG5pbXBvcnQgeyBTZWN1cmUgfSBmcm9tICcuLi8uLi9lbnVtcy9zZWN1cmUuZW51bSc7XG5pbXBvcnQgeyBVcmxVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbC91cmwvdXJsLnV0aWwnO1xuaW1wb3J0IHsgRXJyb3JEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGlhbG9ncy9lcnJvci9lcnJvci1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dpblJlcXVlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXV0aGVudGljYXRpb24vbG9naW4tcmVxdWVzdC5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLXVzZXIvYmFzZS11c2VyLm1vZGVsJztcbmltcG9ydCB7IEJhc2VOZXdVc2VyUmVxdWVzdCB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLXVzZXIvYmFzZS1uZXctdXNlci1yZXF1ZXN0Lm1vZGVsJztcbmltcG9ydCB7IExlYXRoZXJtYW5BcHBDb25maWdJbmplY3Rpb25Ub2tlbiB9IGZyb20gJy4uLy4uL2NvbmZpZy9pbmplY3Rpb24tdG9rZW5zL2xlYXRoZXJtYW4tYXBwLWNvbmZpZy5pbmplY3Rpb24tdG9rZW4nO1xuaW1wb3J0IHsgSUxlYXRoZXJtYW5BcHBDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvYXBwLmNvbmZpZyc7XG5pbXBvcnQgeyBFcnJvckRpYWxvZ1NlcnZpY2VJbmplY3Rpb25Ub2tlbiB9IGZyb20gJy4uLy4uL2NvbmZpZy9pbmplY3Rpb24tdG9rZW5zL2Vycm9yLWRpYWxvZy1zZXJ2aWNlLmluamVjdGlvbi10b2tlbic7XG5pbXBvcnQgeyBTdGF0dXMgfSBmcm9tICcuLi8uLi9lbnVtcy9zdGF0dXMuZW51bSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkRldGFpbHMgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24tZGV0YWlscy5tb2RlbCc7XG5cbi8qKlxuICogQSBzZXJ2aWNlIGZvciBjb21tdW5pY2F0aW5nIHdpdGggdGhlIHNlcnZlcidzIGF1dGhlbnRpY2F0aW9uIGVuZHBvaW50c1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkRhdGFTZXJ2aWNlIGV4dGVuZHMgQmFzZURhdGFTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSBjb25maWcgLSBUaGUgYXBwIGNvbmZpZyBvYmplY3RcbiAgICogQHBhcmFtIGVycm9yRGlhbG9nU2VydmljZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBlcnJvciBkaWFsb2cgc2VydmljZVxuICAgKiBAcGFyYW0gcm91dGVyIC0gQSByZWZlcmVuY2UgdG8gdGhlIHJvdXRlclxuICAgKiBAcGFyYW0gaHR0cENsaWVudCAtIEEgcmVmZXJlbmNlIHRvIHRoZSBIVFRQIGNsaWVudFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChMZWF0aGVybWFuQXBwQ29uZmlnSW5qZWN0aW9uVG9rZW4pIGNvbmZpZzogSUxlYXRoZXJtYW5BcHBDb25maWcsXG4gICAgQEluamVjdChFcnJvckRpYWxvZ1NlcnZpY2VJbmplY3Rpb25Ub2tlbilcbiAgICBlcnJvckRpYWxvZ1NlcnZpY2U6IEVycm9yRGlhbG9nU2VydmljZSxcbiAgICByb3V0ZXI6IFJvdXRlcixcbiAgICBodHRwQ2xpZW50OiBIdHRwQ2xpZW50XG4gICkge1xuICAgIHN1cGVyKGNvbmZpZywgZXJyb3JEaWFsb2dTZXJ2aWNlLCByb3V0ZXIsIGh0dHBDbGllbnQpO1xuICB9XG5cbiAgLy8gLyoqXG4gIC8vICAqIEdldCBhIEpXVCB0b2tlblxuICAvLyAgKiBAcGFyYW0gbG9naW5SZXF1ZXN0IC0gVGhlIGxvZ2luIHJlcXVlc3Qgb2JqZWN0XG4gIC8vICAqIEByZXR1cm5zIEEgSldUIHRva2VuXG4gIC8vICAqIEBhc3luY1xuICAvLyAgKi9cbiAgLy8gcHVibGljIGFzeW5jIGdldFRva2VuPFQgZXh0ZW5kcyBMb2dpblJlcXVlc3Q+KGxvZ2luUmVxdWVzdDogVCk6IFByb21pc2U8c3RyaW5nPiB7XG4gIC8vICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBPcHRpb25zKCk7XG4gIC8vICAgb3B0aW9ucy51cmwgPSBVcmxVdGlsLmpvaW4odGhpcy5hcGlSb290LCAnZ2V0dG9rZW4nKTtcbiAgLy8gICBvcHRpb25zLnNlY3VyZSA9IFNlY3VyZS5mYWxzZTtcbiAgLy8gICBvcHRpb25zLnZhbGlkYXRlSWQgPSBmYWxzZTtcbiAgLy8gICBvcHRpb25zLnN1cHByZXNzZWRFcnJvcnMucHVzaChTdGF0dXMuTm90QXV0aG9yaXplZCk7XG4gIC8vICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLl9wb3N0V2l0aE9wdGlvbnM8c3RyaW5nPihcbiAgLy8gICAgIGxvZ2luUmVxdWVzdCxcbiAgLy8gICAgIG9wdGlvbnNcbiAgLy8gICApLmNhdGNoKGFzeW5jIGVyciA9PiB7XG4gIC8vICAgICByZXR1cm4gYXdhaXQgdGhpcy5oYW5kbGVQcm9taXNlRXJyb3IoXG4gIC8vICAgICAgICdBdXRoZW50aWNhdGlvbkRhdGFTZXJ2aWNlJyxcbiAgLy8gICAgICAgJ2dldFRva2VuJyxcbiAgLy8gICAgICAgZXJyXG4gIC8vICAgICApO1xuICAvLyAgIH0pO1xuICAvLyAgIHJldHVybiB0b2tlbjtcbiAgLy8gfVxuXG4gIHB1YmxpYyBhc3luYyBhdXRoZW50aWNhdGU8VCBleHRlbmRzIExvZ2luUmVxdWVzdD4oXG4gICAgbG9naW5SZXF1ZXN0OiBUXG4gICk6IFByb21pc2U8QXV0aGVudGljYXRpb25EZXRhaWxzPiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBPcHRpb25zKCk7XG4gICAgb3B0aW9ucy51cmwgPSBVcmxVdGlsLmpvaW4odGhpcy5hcGlSb290LCAnYXV0aGVudGljYXRlJyk7XG4gICAgb3B0aW9ucy5zZWN1cmUgPSBTZWN1cmUuZmFsc2U7XG4gICAgb3B0aW9ucy52YWxpZGF0ZUlkID0gZmFsc2U7XG4gICAgb3B0aW9ucy5zdXBwcmVzc2VkRXJyb3JzLnB1c2goU3RhdHVzLk5vdEF1dGhvcml6ZWQpO1xuICAgIGNvbnNvbGUubG9nKCdBYm91dCB0byBhdXRoZW50aWNhdGUnKTtcbiAgICBjb25zdCBhdXRoZW50aWNhdGlvbkRldGFpbHMgPSBhd2FpdCB0aGlzLl9wb3N0V2l0aE9wdGlvbnM8XG4gICAgICBBdXRoZW50aWNhdGlvbkRldGFpbHNcbiAgICA+KGxvZ2luUmVxdWVzdCwgb3B0aW9ucykuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5oYW5kbGVQcm9taXNlRXJyb3IoXG4gICAgICAgICdBdXRoZW50aWNhdGlvbkRhdGFTZXJ2aWNlJyxcbiAgICAgICAgJ2F1dGhlbnRpY2F0ZScsXG4gICAgICAgIGVyclxuICAgICAgKTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygnQXV0aGVudGljYXRpb24gZGV0YWlscycpO1xuICAgIGNvbnNvbGUubG9nKGF1dGhlbnRpY2F0aW9uRGV0YWlscyk7XG4gICAgcmV0dXJuIGF1dGhlbnRpY2F0aW9uRGV0YWlscztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIG5ldyB1c2VyXG4gICAqIEBwYXJhbSBuZXdVc2VyUmVxdWVzdCAtIEEgbmV3IHVzZXIgcmVxdWVzdCBvYmplY3RcbiAgICogQHBhcmFtIHNlY3VyZSAtIEFuIGVudW0gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBlbmRwb2ludCBpcyBzZWN1cmVcbiAgICovXG4gIHB1YmxpYyBhc3luYyByZWdpc3RlcjxUIGV4dGVuZHMgQmFzZU5ld1VzZXJSZXF1ZXN0LCBVIGV4dGVuZHMgQmFzZVVzZXI+KFxuICAgIG5ld1VzZXJSZXF1ZXN0OiBULFxuICAgIHNlY3VyZTogU2VjdXJlXG4gICk6IFByb21pc2U8VT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBuZXcgT3B0aW9ucygpO1xuICAgIG9wdGlvbnMudXJsID0gVXJsVXRpbC5qb2luKHRoaXMuYXBpUm9vdCwgdGhpcy5jb25maWcucmVnaXN0ZXJSb3V0ZSk7XG4gICAgb3B0aW9ucy5zZWN1cmUgPSBzZWN1cmU7XG4gICAgb3B0aW9ucy52YWxpZGF0ZUlkID0gZmFsc2U7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMuX3Bvc3RXaXRoT3B0aW9uczxVPihuZXdVc2VyUmVxdWVzdCwgb3B0aW9ucykuY2F0Y2goXG4gICAgICBhc3luYyBlcnIgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5oYW5kbGVQcm9taXNlRXJyb3IoXG4gICAgICAgICAgJ0F1dGhlbnRpY2F0aW9uRGF0YVNlcnZpY2UnLFxuICAgICAgICAgICdyZWdpc3RlcicsXG4gICAgICAgICAgZXJyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gdXNlcjtcbiAgfVxufVxuIl19
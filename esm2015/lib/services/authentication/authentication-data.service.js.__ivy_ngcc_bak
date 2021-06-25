import { __awaiter, __decorate, __param } from "tslib";
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
let AuthenticationDataService = class AuthenticationDataService extends BaseDataService {
    /**
     * Constructor
     * @param config - The app config object
     * @param errorDialogService - A reference to the error dialog service
     * @param router - A reference to the router
     * @param httpClient - A reference to the HTTP client
     */
    constructor(config, errorDialogService, router, httpClient) {
        super(config, errorDialogService, router, httpClient);
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
    authenticate(loginRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = new Options();
            options.url = UrlUtil.join(this.apiRoot, 'authenticate');
            options.secure = Secure.false;
            options.validateId = false;
            options.suppressedErrors.push(Status.NotAuthorized);
            console.log('About to authenticate');
            const authenticationDetails = yield this._postWithOptions(loginRequest, options).catch((err) => __awaiter(this, void 0, void 0, function* () {
                console.log(err);
                return yield this.handlePromiseError('AuthenticationDataService', 'authenticate', err);
            }));
            console.log('Authentication details');
            console.log(authenticationDetails);
            return authenticationDetails;
        });
    }
    /**
     * Register a new user
     * @param newUserRequest - A new user request object
     * @param secure - An enum indicating whether the endpoint is secure
     */
    register(newUserRequest, secure) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = new Options();
            options.url = UrlUtil.join(this.apiRoot, this.config.registerRoute);
            options.secure = secure;
            options.validateId = false;
            const user = yield this._postWithOptions(newUserRequest, options).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('AuthenticationDataService', 'register', err);
            }));
            return user;
        });
    }
};
AuthenticationDataService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [LeathermanAppConfigInjectionToken,] }] },
    { type: ErrorDialogService, decorators: [{ type: Inject, args: [ErrorDialogServiceInjectionToken,] }] },
    { type: Router },
    { type: HttpClient }
];
AuthenticationDataService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthenticationDataService_Factory() { return new AuthenticationDataService(i0.ɵɵinject(i1.LeathermanAppConfigInjectionToken), i0.ɵɵinject(i2.ErrorDialogServiceInjectionToken), i0.ɵɵinject(i3.Router), i0.ɵɵinject(i4.HttpClient)); }, token: AuthenticationDataService, providedIn: "root" });
AuthenticationDataService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Inject(LeathermanAppConfigInjectionToken)),
    __param(1, Inject(ErrorDialogServiceInjectionToken))
], AuthenticationDataService);
export { AuthenticationDataService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGVhdGhlcm1hbi1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24tZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdkUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUk5RSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUV4SCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUN0SCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztBQUdqRDs7R0FFRztBQUlILElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQTBCLFNBQVEsZUFBZTtJQUM1RDs7Ozs7O09BTUc7SUFDSCxZQUM2QyxNQUE0QixFQUV2RSxrQkFBc0MsRUFDdEMsTUFBYyxFQUNkLFVBQXNCO1FBRXRCLEtBQUssQ0FBQyxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxNQUFNO0lBQ04scUJB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bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBCYXNlRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9iYXNlLWRhdGEvYmFzZS1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4uL2Jhc2UtZGF0YS9fbW9kZWxzL2Jhc2UtZGF0YS1vcHRpb25zLm1vZGVsJztcbmltcG9ydCB7IFNlY3VyZSB9IGZyb20gJy4uLy4uL2VudW1zL3NlY3VyZS5lbnVtJztcbmltcG9ydCB7IFVybFV0aWwgfSBmcm9tICcuLi8uLi91dGlsL3VybC91cmwudXRpbCc7XG5pbXBvcnQgeyBFcnJvckRpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9kaWFsb2dzL2Vycm9yL2Vycm9yLWRpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2luUmVxdWVzdCB9IGZyb20gJy4uLy4uL21vZGVscy9hdXRoZW50aWNhdGlvbi9sb2dpbi1yZXF1ZXN0Lm1vZGVsJztcbmltcG9ydCB7IEJhc2VVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UtdXNlci9iYXNlLXVzZXIubW9kZWwnO1xuaW1wb3J0IHsgQmFzZU5ld1VzZXJSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UtdXNlci9iYXNlLW5ldy11c2VyLXJlcXVlc3QubW9kZWwnO1xuaW1wb3J0IHsgTGVhdGhlcm1hbkFwcENvbmZpZ0luamVjdGlvblRva2VuIH0gZnJvbSAnLi4vLi4vY29uZmlnL2luamVjdGlvbi10b2tlbnMvbGVhdGhlcm1hbi1hcHAtY29uZmlnLmluamVjdGlvbi10b2tlbic7XG5pbXBvcnQgeyBJTGVhdGhlcm1hbkFwcENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9hcHAuY29uZmlnJztcbmltcG9ydCB7IEVycm9yRGlhbG9nU2VydmljZUluamVjdGlvblRva2VuIH0gZnJvbSAnLi4vLi4vY29uZmlnL2luamVjdGlvbi10b2tlbnMvZXJyb3ItZGlhbG9nLXNlcnZpY2UuaW5qZWN0aW9uLXRva2VuJztcbmltcG9ydCB7IFN0YXR1cyB9IGZyb20gJy4uLy4uL2VudW1zL3N0YXR1cy5lbnVtJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uRGV0YWlscyB9IGZyb20gJy4uLy4uL21vZGVscy9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi1kZXRhaWxzLm1vZGVsJztcblxuLyoqXG4gKiBBIHNlcnZpY2UgZm9yIGNvbW11bmljYXRpbmcgd2l0aCB0aGUgc2VydmVyJ3MgYXV0aGVudGljYXRpb24gZW5kcG9pbnRzXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uRGF0YVNlcnZpY2UgZXh0ZW5kcyBCYXNlRGF0YVNlcnZpY2Uge1xuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogQHBhcmFtIGNvbmZpZyAtIFRoZSBhcHAgY29uZmlnIG9iamVjdFxuICAgKiBAcGFyYW0gZXJyb3JEaWFsb2dTZXJ2aWNlIC0gQSByZWZlcmVuY2UgdG8gdGhlIGVycm9yIGRpYWxvZyBzZXJ2aWNlXG4gICAqIEBwYXJhbSByb3V0ZXIgLSBBIHJlZmVyZW5jZSB0byB0aGUgcm91dGVyXG4gICAqIEBwYXJhbSBodHRwQ2xpZW50IC0gQSByZWZlcmVuY2UgdG8gdGhlIEhUVFAgY2xpZW50XG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KExlYXRoZXJtYW5BcHBDb25maWdJbmplY3Rpb25Ub2tlbikgY29uZmlnOiBJTGVhdGhlcm1hbkFwcENvbmZpZyxcbiAgICBASW5qZWN0KEVycm9yRGlhbG9nU2VydmljZUluamVjdGlvblRva2VuKVxuICAgIGVycm9yRGlhbG9nU2VydmljZTogRXJyb3JEaWFsb2dTZXJ2aWNlLFxuICAgIHJvdXRlcjogUm91dGVyLFxuICAgIGh0dHBDbGllbnQ6IEh0dHBDbGllbnRcbiAgKSB7XG4gICAgc3VwZXIoY29uZmlnLCBlcnJvckRpYWxvZ1NlcnZpY2UsIHJvdXRlciwgaHR0cENsaWVudCk7XG4gIH1cblxuICAvLyAvKipcbiAgLy8gICogR2V0IGEgSldUIHRva2VuXG4gIC8vICAqIEBwYXJhbSBsb2dpblJlcXVlc3QgLSBUaGUgbG9naW4gcmVxdWVzdCBvYmplY3RcbiAgLy8gICogQHJldHVybnMgQSBKV1QgdG9rZW5cbiAgLy8gICogQGFzeW5jXG4gIC8vICAqL1xuICAvLyBwdWJsaWMgYXN5bmMgZ2V0VG9rZW48VCBleHRlbmRzIExvZ2luUmVxdWVzdD4obG9naW5SZXF1ZXN0OiBUKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgLy8gICBjb25zdCBvcHRpb25zID0gbmV3IE9wdGlvbnMoKTtcbiAgLy8gICBvcHRpb25zLnVybCA9IFVybFV0aWwuam9pbih0aGlzLmFwaVJvb3QsICdnZXR0b2tlbicpO1xuICAvLyAgIG9wdGlvbnMuc2VjdXJlID0gU2VjdXJlLmZhbHNlO1xuICAvLyAgIG9wdGlvbnMudmFsaWRhdGVJZCA9IGZhbHNlO1xuICAvLyAgIG9wdGlvbnMuc3VwcHJlc3NlZEVycm9ycy5wdXNoKFN0YXR1cy5Ob3RBdXRob3JpemVkKTtcbiAgLy8gICBjb25zdCB0b2tlbiA9IGF3YWl0IHRoaXMuX3Bvc3RXaXRoT3B0aW9uczxzdHJpbmc+KFxuICAvLyAgICAgbG9naW5SZXF1ZXN0LFxuICAvLyAgICAgb3B0aW9uc1xuICAvLyAgICkuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgLy8gICAgIHJldHVybiBhd2FpdCB0aGlzLmhhbmRsZVByb21pc2VFcnJvcihcbiAgLy8gICAgICAgJ0F1dGhlbnRpY2F0aW9uRGF0YVNlcnZpY2UnLFxuICAvLyAgICAgICAnZ2V0VG9rZW4nLFxuICAvLyAgICAgICBlcnJcbiAgLy8gICAgICk7XG4gIC8vICAgfSk7XG4gIC8vICAgcmV0dXJuIHRva2VuO1xuICAvLyB9XG5cbiAgcHVibGljIGFzeW5jIGF1dGhlbnRpY2F0ZTxUIGV4dGVuZHMgTG9naW5SZXF1ZXN0PihcbiAgICBsb2dpblJlcXVlc3Q6IFRcbiAgKTogUHJvbWlzZTxBdXRoZW50aWNhdGlvbkRldGFpbHM+IHtcbiAgICBjb25zdCBvcHRpb25zID0gbmV3IE9wdGlvbnMoKTtcbiAgICBvcHRpb25zLnVybCA9IFVybFV0aWwuam9pbih0aGlzLmFwaVJvb3QsICdhdXRoZW50aWNhdGUnKTtcbiAgICBvcHRpb25zLnNlY3VyZSA9IFNlY3VyZS5mYWxzZTtcbiAgICBvcHRpb25zLnZhbGlkYXRlSWQgPSBmYWxzZTtcbiAgICBvcHRpb25zLnN1cHByZXNzZWRFcnJvcnMucHVzaChTdGF0dXMuTm90QXV0aG9yaXplZCk7XG4gICAgY29uc29sZS5sb2coJ0Fib3V0IHRvIGF1dGhlbnRpY2F0ZScpO1xuICAgIGNvbnN0IGF1dGhlbnRpY2F0aW9uRGV0YWlscyA9IGF3YWl0IHRoaXMuX3Bvc3RXaXRoT3B0aW9uczxcbiAgICAgIEF1dGhlbnRpY2F0aW9uRGV0YWlsc1xuICAgID4obG9naW5SZXF1ZXN0LCBvcHRpb25zKS5jYXRjaChhc3luYyBlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLmhhbmRsZVByb21pc2VFcnJvcihcbiAgICAgICAgJ0F1dGhlbnRpY2F0aW9uRGF0YVNlcnZpY2UnLFxuICAgICAgICAnYXV0aGVudGljYXRlJyxcbiAgICAgICAgZXJyXG4gICAgICApO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdBdXRoZW50aWNhdGlvbiBkZXRhaWxzJyk7XG4gICAgY29uc29sZS5sb2coYXV0aGVudGljYXRpb25EZXRhaWxzKTtcbiAgICByZXR1cm4gYXV0aGVudGljYXRpb25EZXRhaWxzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgbmV3IHVzZXJcbiAgICogQHBhcmFtIG5ld1VzZXJSZXF1ZXN0IC0gQSBuZXcgdXNlciByZXF1ZXN0IG9iamVjdFxuICAgKiBAcGFyYW0gc2VjdXJlIC0gQW4gZW51bSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGVuZHBvaW50IGlzIHNlY3VyZVxuICAgKi9cbiAgcHVibGljIGFzeW5jIHJlZ2lzdGVyPFQgZXh0ZW5kcyBCYXNlTmV3VXNlclJlcXVlc3QsIFUgZXh0ZW5kcyBCYXNlVXNlcj4oXG4gICAgbmV3VXNlclJlcXVlc3Q6IFQsXG4gICAgc2VjdXJlOiBTZWN1cmVcbiAgKTogUHJvbWlzZTxVPiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IG5ldyBPcHRpb25zKCk7XG4gICAgb3B0aW9ucy51cmwgPSBVcmxVdGlsLmpvaW4odGhpcy5hcGlSb290LCB0aGlzLmNvbmZpZy5yZWdpc3RlclJvdXRlKTtcbiAgICBvcHRpb25zLnNlY3VyZSA9IHNlY3VyZTtcbiAgICBvcHRpb25zLnZhbGlkYXRlSWQgPSBmYWxzZTtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5fcG9zdFdpdGhPcHRpb25zPFU+KG5ld1VzZXJSZXF1ZXN0LCBvcHRpb25zKS5jYXRjaChcbiAgICAgIGFzeW5jIGVyciA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmhhbmRsZVByb21pc2VFcnJvcihcbiAgICAgICAgICAnQXV0aGVudGljYXRpb25EYXRhU2VydmljZScsXG4gICAgICAgICAgJ3JlZ2lzdGVyJyxcbiAgICAgICAgICBlcnJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiB1c2VyO1xuICB9XG59XG4iXX0=
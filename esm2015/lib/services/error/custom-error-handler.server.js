import { __awaiter, __decorate, __param } from "tslib";
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
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
import * as ɵngcc2 from '@angular/common/http';
let CustomErrorHandlerService = class CustomErrorHandlerService extends BaseDataService {
    /**
     * Constructor
     * @param config - The app config object
     * @param errorDialogService - A reference to the error dialog service
     * @param router - A reference to the router
     * @param httpClient - A reference to the HTTP client
     */
    constructor(config, errorDialogService, router, httpClient) {
        super(config, errorDialogService, router, httpClient);
        this.baseEndpoint = 'error/client';
    }
    /**
     * Delete a client error from the database
     * @param clientErrorId - The ID of the client error to delete
     * @returns True if the delete suceeded
     * @async
     */
    deleteClientError(clientErrorId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._delete(clientErrorId, Secure.true).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('CustomErrorHandlerService', 'deleteClientError', err);
            }));
        });
    }
    /**
     * Get the details of a client error record
     * @param clientErrorId - The ID of the client error to get
     * @returns A client error object
     * @async
     */
    getClientError(clientErrorId) {
        return __awaiter(this, void 0, void 0, function* () {
            const clientError = yield this._get(clientErrorId, Secure.true).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('CustomErrorHandlerService', 'getClientError', err);
            }));
            return clientError;
        });
    }
    /**
     * Handle a standard error
     * @param error - The error object
     * @async
     */
    handleError(error) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Default error handler caught an error');
            console.log(error);
            if (this.config.production === false) {
                yield this.errorDialogService.openErrorDialog('Unexpected Error', 'An unexpected error occurred: ' + error.message);
            }
            const errorReport = new ClientErrorReport('unknown', error.message, error.status, error.statusText, error.url);
            const clientErrorReport = yield this.reportClientError(errorReport);
            document.location.href =
                this.config.errorRoute + '?errorReportId=' + clientErrorReport._id;
            return null;
        });
    }
    /**
     * Report a client error
     * @param errorReport - The client error object
     * @returns The client error report
     * @async
     */
    reportClientError(errorReport) {
        return __awaiter(this, void 0, void 0, function* () {
            const error = yield this._post(errorReport, Secure.true, false).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('CustomErrorHandlerService', 'reportHttpError', err);
            }));
            return error;
        });
    }
};
CustomErrorHandlerService.ɵfac = function CustomErrorHandlerService_Factory(t) { return new (t || CustomErrorHandlerService)(ɵngcc0.ɵɵinject(LeathermanAppConfigInjectionToken), ɵngcc0.ɵɵinject(ErrorDialogServiceInjectionToken), ɵngcc0.ɵɵinject(ɵngcc1.Router), ɵngcc0.ɵɵinject(ɵngcc2.HttpClient)); };
CustomErrorHandlerService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [LeathermanAppConfigInjectionToken,] }] },
    { type: ErrorDialogService, decorators: [{ type: Inject, args: [ErrorDialogServiceInjectionToken,] }] },
    { type: Router },
    { type: HttpClient }
];
CustomErrorHandlerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CustomErrorHandlerService_Factory() { return new CustomErrorHandlerService(i0.ɵɵinject(i1.LeathermanAppConfigInjectionToken), i0.ɵɵinject(i2.ErrorDialogServiceInjectionToken), i0.ɵɵinject(i3.Router), i0.ɵɵinject(i4.HttpClient)); }, token: CustomErrorHandlerService, providedIn: "root" });
CustomErrorHandlerService = __decorate([ __param(0, Inject(LeathermanAppConfigInjectionToken)),
    __param(1, Inject(ErrorDialogServiceInjectionToken))
], CustomErrorHandlerService);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CustomErrorHandlerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [LeathermanAppConfigInjectionToken]
            }] }, { type: ErrorDialogService, decorators: [{
                type: Inject,
                args: [ErrorDialogServiceInjectionToken]
            }] }, { type: ɵngcc1.Router }, { type: ɵngcc2.HttpClient }]; }, null); })();
export { CustomErrorHandlerService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVycm9yLWhhbmRsZXIuc2VydmVyLmpzIiwic291cmNlcyI6WyJuZzovbGVhdGhlcm1hbi1ib290c3RyYXAvbGliL3NlcnZpY2VzL2Vycm9yL2N1c3RvbS1lcnJvci1oYW5kbGVyLnNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFnQixVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUV4SCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUN0SDtBQUVnQztBQUtWO0FBR1A7QUFDc0I7QUFWckM7QUFDQTtBQUNBLEdBQUc7Ozs7QUFJSCxJQUFhLHlCQUF5QixHQUF0QyxNQUFhLHlCQUEwQixTQUFRLGVBQWU7QUFDNUQsSUFDQTtBQUNGO0FBQ0U7QUFDRTtBQUNFO0FBQ0U7QUFFSixPQURDO0FBQ0wsSUFBRSxZQUM2QyxNQUE0QixFQUV2RSxrQkFBc0MsRUFDdEMsTUFBYyxFQUNkLFVBQXNCO0FBQ3ZCLFFBQ0MsS0FBSyxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDMUQsUUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLGNBQWMsQ0FBQztBQUN2QyxJQUFFLENBQUM7QUFDSCxJ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QUFrQix1QkFEckMsTUFBTSxTQUFDLGdDQUFnQztBQUNyQyxZQUNLLE1BQU07QUFDaEIsWUFBYyxVQUFVO0FBQ3hCO0FBQUc7QUFmUSx5QkFBeUIsb0JBSHJDLFVBQVUsQ0FBQyxVQUNWLFVBQVUsRUFBRSxNQUFNLE1BQ25CLENBQUMsbkRBQ0UsQ0FVQyxXQUFBLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQUUsSUFDM0MsV0FBQSxNQUFNLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTtBQUM3QyxHQVphLHlCQUF5QixDQTJHckM7Ozs7Ozs7Ozs7Ozt3RkFDRDtBQUFDLFNBNUdZLHlCQUF5QjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXJyb3JIYW5kbGVyLCBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQmFzZURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vYmFzZS1kYXRhL2Jhc2UtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IFNlY3VyZSB9IGZyb20gJy4uLy4uL2VudW1zL3NlY3VyZS5lbnVtJztcbmltcG9ydCB7IEVycm9yRGlhbG9nU2VydmljZSB9IGZyb20gJy4uLy4uL2RpYWxvZ3MvZXJyb3IvZXJyb3ItZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xpZW50RXJyb3JSZXBvcnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvZXJyb3IvY2xpZW50LWVycm9yLXJlcG9ydC5tb2RlbCc7XG5pbXBvcnQgeyBMZWF0aGVybWFuQXBwQ29uZmlnSW5qZWN0aW9uVG9rZW4gfSBmcm9tICcuLi8uLi9jb25maWcvaW5qZWN0aW9uLXRva2Vucy9sZWF0aGVybWFuLWFwcC1jb25maWcuaW5qZWN0aW9uLXRva2VuJztcbmltcG9ydCB7IElMZWF0aGVybWFuQXBwQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2FwcC5jb25maWcnO1xuaW1wb3J0IHsgRXJyb3JEaWFsb2dTZXJ2aWNlSW5qZWN0aW9uVG9rZW4gfSBmcm9tICcuLi8uLi9jb25maWcvaW5qZWN0aW9uLXRva2Vucy9lcnJvci1kaWFsb2ctc2VydmljZS5pbmplY3Rpb24tdG9rZW4nO1xuXG4vKipcbiAqIEEgY3VzdG9tIGVycm9yIGhhbmRsZXIgc2VydmljZSBmb3IgdW5oYW5kbGVkIGV4Y2VwdGlvbnNcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tRXJyb3JIYW5kbGVyU2VydmljZSBleHRlbmRzIEJhc2VEYXRhU2VydmljZVxuICBpbXBsZW1lbnRzIEVycm9ySGFuZGxlciB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gY29uZmlnIC0gVGhlIGFwcCBjb25maWcgb2JqZWN0XG4gICAqIEBwYXJhbSBlcnJvckRpYWxvZ1NlcnZpY2UgLSBBIHJlZmVyZW5jZSB0byB0aGUgZXJyb3IgZGlhbG9nIHNlcnZpY2VcbiAgICogQHBhcmFtIHJvdXRlciAtIEEgcmVmZXJlbmNlIHRvIHRoZSByb3V0ZXJcbiAgICogQHBhcmFtIGh0dHBDbGllbnQgLSBBIHJlZmVyZW5jZSB0byB0aGUgSFRUUCBjbGllbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoTGVhdGhlcm1hbkFwcENvbmZpZ0luamVjdGlvblRva2VuKSBjb25maWc6IElMZWF0aGVybWFuQXBwQ29uZmlnLFxuICAgIEBJbmplY3QoRXJyb3JEaWFsb2dTZXJ2aWNlSW5qZWN0aW9uVG9rZW4pXG4gICAgZXJyb3JEaWFsb2dTZXJ2aWNlOiBFcnJvckRpYWxvZ1NlcnZpY2UsXG4gICAgcm91dGVyOiBSb3V0ZXIsXG4gICAgaHR0cENsaWVudDogSHR0cENsaWVudFxuICApIHtcbiAgICBzdXBlcihjb25maWcsIGVycm9yRGlhbG9nU2VydmljZSwgcm91dGVyLCBodHRwQ2xpZW50KTtcbiAgICB0aGlzLmJhc2VFbmRwb2ludCA9ICdlcnJvci9jbGllbnQnO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhIGNsaWVudCBlcnJvciBmcm9tIHRoZSBkYXRhYmFzZVxuICAgKiBAcGFyYW0gY2xpZW50RXJyb3JJZCAtIFRoZSBJRCBvZiB0aGUgY2xpZW50IGVycm9yIHRvIGRlbGV0ZVxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBkZWxldGUgc3VjZWVkZWRcbiAgICogQGFzeW5jXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZGVsZXRlQ2xpZW50RXJyb3IoY2xpZW50RXJyb3JJZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuX2RlbGV0ZShjbGllbnRFcnJvcklkLCBTZWN1cmUudHJ1ZSkuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLmhhbmRsZVByb21pc2VFcnJvcihcbiAgICAgICAgJ0N1c3RvbUVycm9ySGFuZGxlclNlcnZpY2UnLFxuICAgICAgICAnZGVsZXRlQ2xpZW50RXJyb3InLFxuICAgICAgICBlcnJcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkZXRhaWxzIG9mIGEgY2xpZW50IGVycm9yIHJlY29yZFxuICAgKiBAcGFyYW0gY2xpZW50RXJyb3JJZCAtIFRoZSBJRCBvZiB0aGUgY2xpZW50IGVycm9yIHRvIGdldFxuICAgKiBAcmV0dXJucyBBIGNsaWVudCBlcnJvciBvYmplY3RcbiAgICogQGFzeW5jXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZ2V0Q2xpZW50RXJyb3IoXG4gICAgY2xpZW50RXJyb3JJZDogc3RyaW5nXG4gICk6IFByb21pc2U8Q2xpZW50RXJyb3JSZXBvcnQ+IHtcbiAgICBjb25zdCBjbGllbnRFcnJvciA9IGF3YWl0IHRoaXMuX2dldDxDbGllbnRFcnJvclJlcG9ydD4oXG4gICAgICBjbGllbnRFcnJvcklkLFxuICAgICAgU2VjdXJlLnRydWVcbiAgICApLmNhdGNoKGFzeW5jIGVyciA9PiB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5oYW5kbGVQcm9taXNlRXJyb3IoXG4gICAgICAgICdDdXN0b21FcnJvckhhbmRsZXJTZXJ2aWNlJyxcbiAgICAgICAgJ2dldENsaWVudEVycm9yJyxcbiAgICAgICAgZXJyXG4gICAgICApO1xuICAgIH0pO1xuICAgIHJldHVybiBjbGllbnRFcnJvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgYSBzdGFuZGFyZCBlcnJvclxuICAgKiBAcGFyYW0gZXJyb3IgLSBUaGUgZXJyb3Igb2JqZWN0XG4gICAqIEBhc3luY1xuICAgKi9cbiAgcHVibGljIGFzeW5jIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBQcm9taXNlPG51bGw+IHtcbiAgICBjb25zb2xlLmxvZygnRGVmYXVsdCBlcnJvciBoYW5kbGVyIGNhdWdodCBhbiBlcnJvcicpO1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICBpZiAodGhpcy5jb25maWcucHJvZHVjdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgIGF3YWl0IHRoaXMuZXJyb3JEaWFsb2dTZXJ2aWNlLm9wZW5FcnJvckRpYWxvZyhcbiAgICAgICAgJ1VuZXhwZWN0ZWQgRXJyb3InLFxuICAgICAgICAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZDogJyArIGVycm9yLm1lc3NhZ2VcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IGVycm9yUmVwb3J0ID0gbmV3IENsaWVudEVycm9yUmVwb3J0KFxuICAgICAgJ3Vua25vd24nLFxuICAgICAgZXJyb3IubWVzc2FnZSxcbiAgICAgIGVycm9yLnN0YXR1cyxcbiAgICAgIGVycm9yLnN0YXR1c1RleHQsXG4gICAgICBlcnJvci51cmxcbiAgICApO1xuICAgIGNvbnN0IGNsaWVudEVycm9yUmVwb3J0ID0gYXdhaXQgdGhpcy5yZXBvcnRDbGllbnRFcnJvcihlcnJvclJlcG9ydCk7XG4gICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9XG4gICAgICB0aGlzLmNvbmZpZy5lcnJvclJvdXRlICsgJz9lcnJvclJlcG9ydElkPScgKyBjbGllbnRFcnJvclJlcG9ydC5faWQ7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmVwb3J0IGEgY2xpZW50IGVycm9yXG4gICAqIEBwYXJhbSBlcnJvclJlcG9ydCAtIFRoZSBjbGllbnQgZXJyb3Igb2JqZWN0XG4gICAqIEByZXR1cm5zIFRoZSBjbGllbnQgZXJyb3IgcmVwb3J0XG4gICAqIEBhc3luY1xuICAgKi9cbiAgcHVibGljIGFzeW5jIHJlcG9ydENsaWVudEVycm9yKFxuICAgIGVycm9yUmVwb3J0OiBDbGllbnRFcnJvclJlcG9ydFxuICApOiBQcm9taXNlPENsaWVudEVycm9yUmVwb3J0PiB7XG4gICAgY29uc3QgZXJyb3IgPSBhd2FpdCB0aGlzLl9wb3N0PENsaWVudEVycm9yUmVwb3J0PihcbiAgICAgIGVycm9yUmVwb3J0LFxuICAgICAgU2VjdXJlLnRydWUsXG4gICAgICBmYWxzZVxuICAgICkuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLmhhbmRsZVByb21pc2VFcnJvcihcbiAgICAgICAgJ0N1c3RvbUVycm9ySGFuZGxlclNlcnZpY2UnLFxuICAgICAgICAncmVwb3J0SHR0cEVycm9yJyxcbiAgICAgICAgZXJyXG4gICAgICApO1xuICAgIH0pO1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufVxuIl19
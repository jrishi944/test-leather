import { ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BaseDataService } from '../base-data/base-data.service';
import { ErrorDialogService } from '../../dialogs/error/error-dialog.service';
import { ClientErrorReport } from '../../models/error/client-error-report.model';
import { ILeathermanAppConfig } from '../../config/app.config';
/**
 * A custom error handler service for unhandled exceptions
 */
import * as ɵngcc0 from '@angular/core';
export declare class CustomErrorHandlerService extends BaseDataService implements ErrorHandler {
    /**
     * Constructor
     * @param config - The app config object
     * @param errorDialogService - A reference to the error dialog service
     * @param router - A reference to the router
     * @param httpClient - A reference to the HTTP client
     */
    constructor(config: ILeathermanAppConfig, errorDialogService: ErrorDialogService, router: Router, httpClient: HttpClient);
    /**
     * Delete a client error from the database
     * @param clientErrorId - The ID of the client error to delete
     * @returns True if the delete suceeded
     * @async
     */
    deleteClientError(clientErrorId: string): Promise<boolean>;
    /**
     * Get the details of a client error record
     * @param clientErrorId - The ID of the client error to get
     * @returns A client error object
     * @async
     */
    getClientError(clientErrorId: string): Promise<ClientErrorReport>;
    /**
     * Handle a standard error
     * @param error - The error object
     * @async
     */
    handleError(error: any): Promise<null>;
    /**
     * Report a client error
     * @param errorReport - The client error object
     * @returns The client error report
     * @async
     */
    reportClientError(errorReport: ClientErrorReport): Promise<ClientErrorReport>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CustomErrorHandlerService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVycm9yLWhhbmRsZXIuc2VydmVyLmQudHMiLCJzb3VyY2VzIjpbImN1c3RvbS1lcnJvci1oYW5kbGVyLnNlcnZlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9ySGFuZGxlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCYXNlRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9iYXNlLWRhdGEvYmFzZS1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXJyb3JEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGlhbG9ncy9lcnJvci9lcnJvci1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBDbGllbnRFcnJvclJlcG9ydCB9IGZyb20gJy4uLy4uL21vZGVscy9lcnJvci9jbGllbnQtZXJyb3ItcmVwb3J0Lm1vZGVsJztcbmltcG9ydCB7IElMZWF0aGVybWFuQXBwQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2FwcC5jb25maWcnO1xuLyoqXG4gKiBBIGN1c3RvbSBlcnJvciBoYW5kbGVyIHNlcnZpY2UgZm9yIHVuaGFuZGxlZCBleGNlcHRpb25zXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEN1c3RvbUVycm9ySGFuZGxlclNlcnZpY2UgZXh0ZW5kcyBCYXNlRGF0YVNlcnZpY2UgaW1wbGVtZW50cyBFcnJvckhhbmRsZXIge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIGNvbmZpZyAtIFRoZSBhcHAgY29uZmlnIG9iamVjdFxuICAgICAqIEBwYXJhbSBlcnJvckRpYWxvZ1NlcnZpY2UgLSBBIHJlZmVyZW5jZSB0byB0aGUgZXJyb3IgZGlhbG9nIHNlcnZpY2VcbiAgICAgKiBAcGFyYW0gcm91dGVyIC0gQSByZWZlcmVuY2UgdG8gdGhlIHJvdXRlclxuICAgICAqIEBwYXJhbSBodHRwQ2xpZW50IC0gQSByZWZlcmVuY2UgdG8gdGhlIEhUVFAgY2xpZW50XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBJTGVhdGhlcm1hbkFwcENvbmZpZywgZXJyb3JEaWFsb2dTZXJ2aWNlOiBFcnJvckRpYWxvZ1NlcnZpY2UsIHJvdXRlcjogUm91dGVyLCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KTtcbiAgICAvKipcbiAgICAgKiBEZWxldGUgYSBjbGllbnQgZXJyb3IgZnJvbSB0aGUgZGF0YWJhc2VcbiAgICAgKiBAcGFyYW0gY2xpZW50RXJyb3JJZCAtIFRoZSBJRCBvZiB0aGUgY2xpZW50IGVycm9yIHRvIGRlbGV0ZVxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGRlbGV0ZSBzdWNlZWRlZFxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIGRlbGV0ZUNsaWVudEVycm9yKGNsaWVudEVycm9ySWQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkZXRhaWxzIG9mIGEgY2xpZW50IGVycm9yIHJlY29yZFxuICAgICAqIEBwYXJhbSBjbGllbnRFcnJvcklkIC0gVGhlIElEIG9mIHRoZSBjbGllbnQgZXJyb3IgdG8gZ2V0XG4gICAgICogQHJldHVybnMgQSBjbGllbnQgZXJyb3Igb2JqZWN0XG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgZ2V0Q2xpZW50RXJyb3IoY2xpZW50RXJyb3JJZDogc3RyaW5nKTogUHJvbWlzZTxDbGllbnRFcnJvclJlcG9ydD47XG4gICAgLyoqXG4gICAgICogSGFuZGxlIGEgc3RhbmRhcmQgZXJyb3JcbiAgICAgKiBAcGFyYW0gZXJyb3IgLSBUaGUgZXJyb3Igb2JqZWN0XG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IFByb21pc2U8bnVsbD47XG4gICAgLyoqXG4gICAgICogUmVwb3J0IGEgY2xpZW50IGVycm9yXG4gICAgICogQHBhcmFtIGVycm9yUmVwb3J0IC0gVGhlIGNsaWVudCBlcnJvciBvYmplY3RcbiAgICAgKiBAcmV0dXJucyBUaGUgY2xpZW50IGVycm9yIHJlcG9ydFxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHJlcG9ydENsaWVudEVycm9yKGVycm9yUmVwb3J0OiBDbGllbnRFcnJvclJlcG9ydCk6IFByb21pc2U8Q2xpZW50RXJyb3JSZXBvcnQ+O1xufVxuIl19
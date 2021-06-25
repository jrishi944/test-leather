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
}

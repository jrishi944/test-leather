import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Secure } from '../../enums/secure.enum';
import { Options } from './_models/base-data-options.model';
import { BaseModel } from '../../models/base/base.model';
import { ErrorDialogService } from '../../dialogs/error/error-dialog.service';
import { ClientErrorReport } from '../../models/error/client-error-report.model';
import { ILeathermanAppConfig } from '../../config/app.config';
import { SearchResultsContainer } from '../../models/dto/search-results-container.model';
import { UploadEvent } from '../../models/events/upload-event.model';
/**
 * The base data service for communicating with API endpoints
 */
import * as ɵngcc0 from '@angular/core';
export declare class BaseDataService {
    protected config: ILeathermanAppConfig;
    protected errorDialogService: ErrorDialogService;
    protected router: Router;
    protected httpClient: HttpClient;
    /** Set accessor for the base endpoint */
    protected set baseEndpoint(baseEndpoint: string);
    /** Set accessor for the base endpoint */
    protected get baseEndpoint(): string;
    /** The base endpoint */
    private _baseEndpoint;
    /** Set accessor for the data service's item data type */
    protected set type(type: any);
    /** The data service's item data type */
    private _type;
    /** Set accessor for the api root */
    protected get apiRoot(): string;
    /** Get accessor for the API key  */
    protected get apiKey(): string;
    /** Get accessor for the no token header */
    protected get noTokenHeader(): HttpHeaders;
    /** Get accessor to the header to use when the API endpoint is secured with an API key */
    protected get apiHeader(): HttpHeaders;
    /** Get acccessor for the header to use when the API endpoit is secured with a JWT token */
    protected get authHeader(): HttpHeaders;
    /**
     * Constructor
     * @param config - The app config object
     * @param errorDialogService - A reference to the error dialog service
     * @param router - A reference to the router
     * @param httpClient - A reference to the HTTP client service
     */
    constructor(config: ILeathermanAppConfig, errorDialogService: ErrorDialogService, router: Router, httpClient: HttpClient);
    /**
     * Call a standard delete API endpoint
     * @param id - The ID of the item to be deleted
     * @param secure - Enum indicating whether the API endpoint is secure
     * @returns True if the delete succeeded
     * @async
     */
    protected _delete(id: string, secure: Secure): Promise<boolean>;
    /**
     * Call a non-standard delete API endpoint
     * @param options - The request options
     * @returns True if the delete succeeded
     * @async
     */
    protected _deleteWithOptions(options: Options): Promise<boolean>;
    /**
     * Delete all test artifacts
     * @returns True if the delete succeded
     * @async
     */
    _deleteTestArtifacts(): Promise<boolean>;
    /**
     * Call a standard get API endpoint
     * @param id - The ID of the item to get
     * @param secure - Enum indicating whether the API endpoint is secure
     * @returns The item if the get succeeded
     * @async
     */
    protected _get<T>(id: string, secure: Secure): Promise<T>;
    protected _getObservable<T>(id: string, secure: Secure): Observable<T>;
    /**
     * Call a non-standard get API endpoint that returns an observable
     * @param id - The ID of the item to get
     * @param options - The request options
     * @returns The item if the get succeeded (as an observable)
     * @async
     */
    protected _getObservableWithOptions<T>(options: Options): Observable<T>;
    /**
     * Call a non-standard get API endpoint
     * @param options - The request options
     * @returns The item if the get succeeded
     * @async
     */
    protected _getWithOptions<T>(options: Options): Promise<T>;
    /**
     * Call a standard get many API endpoint
     * @param secure - Enum indicating whether the API endpoint is secure
     * @returns An array of items if the get succeeded
     * @async
     */
    protected _getMany<T>(secure: Secure): Promise<T[]>;
    /**
     * Call a non-standard get many API endpoint
     * @param options - The request options
     * @returns An array of items if the get succeeded
     * @async
     */
    protected _getManyWithOptions<T>(options: Options): Promise<T[]>;
    /**
     * Call a standard post API endpoint
     * @param object - The object to post
     * @param secure - Enum indicating whether the API endpoint is secure
     * @param validateId - Boolean indicating whether then object's ID should be validated
     * @returns The posted object
     * @async
     */
    protected _post<T>(object: any, secure: Secure, validateId?: boolean): Promise<T>;
    /**
     * Call a non-standard post API endpoint
     * @param object - The object to post
     * @param options - The request options
     * @returns The posted object
     * @async
     */
    protected _postWithOptions<T>(object: any, options: Options): Promise<T>;
    /**
     * Call a standard put API endpoint
     * @param object - The object to put
     * @param secure - Enum indicating whether the API endpoint is secure
     * @param validateId - Boolean indicating whether then object's ID should be validated
     * @returns The updated object
     * @async
     */
    protected _put<T extends BaseModel>(object: any, secure: Secure, validateId?: boolean): Promise<T>;
    /**
     * Call a non-standard put API endpoint
     * @param object - The object to put
     * @param options - The request options
     * @returns The updated object
     * @async
     */
    protected _putWithOptions<T>(options: Options, object?: any): Promise<T>;
    protected _searchWithOptions<T>(options: Options): Promise<SearchResultsContainer<T>>;
    protected _uploadFormData(url: string, data: FormData, secure: Secure): Observable<UploadEvent>;
    /**
     * Handle an error for an observable request
     * @param serviceName - The name of the service reporting the error
     * @param result - The return to return
     */
    protected handleObservableError(serviceName: string, result?: {}): (error: ClientErrorReport) => Observable<any>;
    /**
     * Handle an error for a standard promise request
     * @param serviceName - The name of the service reporting the error
     * @param method - The name of the method reporting the error
     * @param error - The error object
     * @async
     */
    protected handlePromiseError(serviceName: string, method: string, error: any): Promise<null>;
    /**
     * Get the request header
     * @param secure - Enum indicating the type of API endpoing security
     * @returns An HTTP header
     */
    protected getHeader(secure: Secure): HttpHeaders;
    /**
     * Validate the ID of a model
     * @param model - The model to validate
     * @param message - The message to display if validating fails
     * @returns True if the validation succeeded
     * @async
     */
    private validateModelId;
    /**
     * Validate the ID of a model
     * @param id - The ID to validate
     * @param message - The message to display if validating fails
     * @returns True if the validation succeeded
     * @async
     */
    private validateId;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseDataService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kYXRhLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiYmFzZS1kYXRhLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTZWN1cmUgfSBmcm9tICcuLi8uLi9lbnVtcy9zZWN1cmUuZW51bSc7XG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi9fbW9kZWxzL2Jhc2UtZGF0YS1vcHRpb25zLm1vZGVsJztcbmltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlL2Jhc2UubW9kZWwnO1xuaW1wb3J0IHsgRXJyb3JEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGlhbG9ncy9lcnJvci9lcnJvci1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBDbGllbnRFcnJvclJlcG9ydCB9IGZyb20gJy4uLy4uL21vZGVscy9lcnJvci9jbGllbnQtZXJyb3ItcmVwb3J0Lm1vZGVsJztcbmltcG9ydCB7IElMZWF0aGVybWFuQXBwQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2FwcC5jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0c0NvbnRhaW5lciB9IGZyb20gJy4uLy4uL21vZGVscy9kdG8vc2VhcmNoLXJlc3VsdHMtY29udGFpbmVyLm1vZGVsJztcbmltcG9ydCB7IFVwbG9hZEV2ZW50IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2V2ZW50cy91cGxvYWQtZXZlbnQubW9kZWwnO1xuLyoqXG4gKiBUaGUgYmFzZSBkYXRhIHNlcnZpY2UgZm9yIGNvbW11bmljYXRpbmcgd2l0aCBBUEkgZW5kcG9pbnRzXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEJhc2VEYXRhU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogSUxlYXRoZXJtYW5BcHBDb25maWc7XG4gICAgcHJvdGVjdGVkIGVycm9yRGlhbG9nU2VydmljZTogRXJyb3JEaWFsb2dTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcjtcbiAgICBwcm90ZWN0ZWQgaHR0cENsaWVudDogSHR0cENsaWVudDtcbiAgICAvKiogU2V0IGFjY2Vzc29yIGZvciB0aGUgYmFzZSBlbmRwb2ludCAqL1xuICAgIHByb3RlY3RlZCBzZXQgYmFzZUVuZHBvaW50KGJhc2VFbmRwb2ludDogc3RyaW5nKTtcbiAgICAvKiogU2V0IGFjY2Vzc29yIGZvciB0aGUgYmFzZSBlbmRwb2ludCAqL1xuICAgIHByb3RlY3RlZCBnZXQgYmFzZUVuZHBvaW50KCk6IHN0cmluZztcbiAgICAvKiogVGhlIGJhc2UgZW5kcG9pbnQgKi9cbiAgICBwcml2YXRlIF9iYXNlRW5kcG9pbnQ7XG4gICAgLyoqIFNldCBhY2Nlc3NvciBmb3IgdGhlIGRhdGEgc2VydmljZSdzIGl0ZW0gZGF0YSB0eXBlICovXG4gICAgcHJvdGVjdGVkIHNldCB0eXBlKHR5cGU6IGFueSk7XG4gICAgLyoqIFRoZSBkYXRhIHNlcnZpY2UncyBpdGVtIGRhdGEgdHlwZSAqL1xuICAgIHByaXZhdGUgX3R5cGU7XG4gICAgLyoqIFNldCBhY2Nlc3NvciBmb3IgdGhlIGFwaSByb290ICovXG4gICAgcHJvdGVjdGVkIGdldCBhcGlSb290KCk6IHN0cmluZztcbiAgICAvKiogR2V0IGFjY2Vzc29yIGZvciB0aGUgQVBJIGtleSAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0IGFwaUtleSgpOiBzdHJpbmc7XG4gICAgLyoqIEdldCBhY2Nlc3NvciBmb3IgdGhlIG5vIHRva2VuIGhlYWRlciAqL1xuICAgIHByb3RlY3RlZCBnZXQgbm9Ub2tlbkhlYWRlcigpOiBIdHRwSGVhZGVycztcbiAgICAvKiogR2V0IGFjY2Vzc29yIHRvIHRoZSBoZWFkZXIgdG8gdXNlIHdoZW4gdGhlIEFQSSBlbmRwb2ludCBpcyBzZWN1cmVkIHdpdGggYW4gQVBJIGtleSAqL1xuICAgIHByb3RlY3RlZCBnZXQgYXBpSGVhZGVyKCk6IEh0dHBIZWFkZXJzO1xuICAgIC8qKiBHZXQgYWNjY2Vzc29yIGZvciB0aGUgaGVhZGVyIHRvIHVzZSB3aGVuIHRoZSBBUEkgZW5kcG9pdCBpcyBzZWN1cmVkIHdpdGggYSBKV1QgdG9rZW4gKi9cbiAgICBwcm90ZWN0ZWQgZ2V0IGF1dGhIZWFkZXIoKTogSHR0cEhlYWRlcnM7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0gY29uZmlnIC0gVGhlIGFwcCBjb25maWcgb2JqZWN0XG4gICAgICogQHBhcmFtIGVycm9yRGlhbG9nU2VydmljZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBlcnJvciBkaWFsb2cgc2VydmljZVxuICAgICAqIEBwYXJhbSByb3V0ZXIgLSBBIHJlZmVyZW5jZSB0byB0aGUgcm91dGVyXG4gICAgICogQHBhcmFtIGh0dHBDbGllbnQgLSBBIHJlZmVyZW5jZSB0byB0aGUgSFRUUCBjbGllbnQgc2VydmljZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogSUxlYXRoZXJtYW5BcHBDb25maWcsIGVycm9yRGlhbG9nU2VydmljZTogRXJyb3JEaWFsb2dTZXJ2aWNlLCByb3V0ZXI6IFJvdXRlciwgaHR0cENsaWVudDogSHR0cENsaWVudCk7XG4gICAgLyoqXG4gICAgICogQ2FsbCBhIHN0YW5kYXJkIGRlbGV0ZSBBUEkgZW5kcG9pbnRcbiAgICAgKiBAcGFyYW0gaWQgLSBUaGUgSUQgb2YgdGhlIGl0ZW0gdG8gYmUgZGVsZXRlZFxuICAgICAqIEBwYXJhbSBzZWN1cmUgLSBFbnVtIGluZGljYXRpbmcgd2hldGhlciB0aGUgQVBJIGVuZHBvaW50IGlzIHNlY3VyZVxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGRlbGV0ZSBzdWNjZWVkZWRcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2RlbGV0ZShpZDogc3RyaW5nLCBzZWN1cmU6IFNlY3VyZSk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogQ2FsbCBhIG5vbi1zdGFuZGFyZCBkZWxldGUgQVBJIGVuZHBvaW50XG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgcmVxdWVzdCBvcHRpb25zXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZGVsZXRlIHN1Y2NlZWRlZFxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBfZGVsZXRlV2l0aE9wdGlvbnMob3B0aW9uczogT3B0aW9ucyk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogRGVsZXRlIGFsbCB0ZXN0IGFydGlmYWN0c1xuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGRlbGV0ZSBzdWNjZWRlZFxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIF9kZWxldGVUZXN0QXJ0aWZhY3RzKCk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogQ2FsbCBhIHN0YW5kYXJkIGdldCBBUEkgZW5kcG9pbnRcbiAgICAgKiBAcGFyYW0gaWQgLSBUaGUgSUQgb2YgdGhlIGl0ZW0gdG8gZ2V0XG4gICAgICogQHBhcmFtIHNlY3VyZSAtIEVudW0gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBBUEkgZW5kcG9pbnQgaXMgc2VjdXJlXG4gICAgICogQHJldHVybnMgVGhlIGl0ZW0gaWYgdGhlIGdldCBzdWNjZWVkZWRcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2dldDxUPihpZDogc3RyaW5nLCBzZWN1cmU6IFNlY3VyZSk6IFByb21pc2U8VD47XG4gICAgcHJvdGVjdGVkIF9nZXRPYnNlcnZhYmxlPFQ+KGlkOiBzdHJpbmcsIHNlY3VyZTogU2VjdXJlKTogT2JzZXJ2YWJsZTxUPjtcbiAgICAvKipcbiAgICAgKiBDYWxsIGEgbm9uLXN0YW5kYXJkIGdldCBBUEkgZW5kcG9pbnQgdGhhdCByZXR1cm5zIGFuIG9ic2VydmFibGVcbiAgICAgKiBAcGFyYW0gaWQgLSBUaGUgSUQgb2YgdGhlIGl0ZW0gdG8gZ2V0XG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgcmVxdWVzdCBvcHRpb25zXG4gICAgICogQHJldHVybnMgVGhlIGl0ZW0gaWYgdGhlIGdldCBzdWNjZWVkZWQgKGFzIGFuIG9ic2VydmFibGUpXG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9nZXRPYnNlcnZhYmxlV2l0aE9wdGlvbnM8VD4ob3B0aW9uczogT3B0aW9ucyk6IE9ic2VydmFibGU8VD47XG4gICAgLyoqXG4gICAgICogQ2FsbCBhIG5vbi1zdGFuZGFyZCBnZXQgQVBJIGVuZHBvaW50XG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgcmVxdWVzdCBvcHRpb25zXG4gICAgICogQHJldHVybnMgVGhlIGl0ZW0gaWYgdGhlIGdldCBzdWNjZWVkZWRcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX2dldFdpdGhPcHRpb25zPFQ+KG9wdGlvbnM6IE9wdGlvbnMpOiBQcm9taXNlPFQ+O1xuICAgIC8qKlxuICAgICAqIENhbGwgYSBzdGFuZGFyZCBnZXQgbWFueSBBUEkgZW5kcG9pbnRcbiAgICAgKiBAcGFyYW0gc2VjdXJlIC0gRW51bSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIEFQSSBlbmRwb2ludCBpcyBzZWN1cmVcbiAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiBpdGVtcyBpZiB0aGUgZ2V0IHN1Y2NlZWRlZFxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBfZ2V0TWFueTxUPihzZWN1cmU6IFNlY3VyZSk6IFByb21pc2U8VFtdPjtcbiAgICAvKipcbiAgICAgKiBDYWxsIGEgbm9uLXN0YW5kYXJkIGdldCBtYW55IEFQSSBlbmRwb2ludFxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIHJlcXVlc3Qgb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIGl0ZW1zIGlmIHRoZSBnZXQgc3VjY2VlZGVkXG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9nZXRNYW55V2l0aE9wdGlvbnM8VD4ob3B0aW9uczogT3B0aW9ucyk6IFByb21pc2U8VFtdPjtcbiAgICAvKipcbiAgICAgKiBDYWxsIGEgc3RhbmRhcmQgcG9zdCBBUEkgZW5kcG9pbnRcbiAgICAgKiBAcGFyYW0gb2JqZWN0IC0gVGhlIG9iamVjdCB0byBwb3N0XG4gICAgICogQHBhcmFtIHNlY3VyZSAtIEVudW0gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBBUEkgZW5kcG9pbnQgaXMgc2VjdXJlXG4gICAgICogQHBhcmFtIHZhbGlkYXRlSWQgLSBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGVuIG9iamVjdCdzIElEIHNob3VsZCBiZSB2YWxpZGF0ZWRcbiAgICAgKiBAcmV0dXJucyBUaGUgcG9zdGVkIG9iamVjdFxuICAgICAqIEBhc3luY1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBfcG9zdDxUPihvYmplY3Q6IGFueSwgc2VjdXJlOiBTZWN1cmUsIHZhbGlkYXRlSWQ/OiBib29sZWFuKTogUHJvbWlzZTxUPjtcbiAgICAvKipcbiAgICAgKiBDYWxsIGEgbm9uLXN0YW5kYXJkIHBvc3QgQVBJIGVuZHBvaW50XG4gICAgICogQHBhcmFtIG9iamVjdCAtIFRoZSBvYmplY3QgdG8gcG9zdFxuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIHJlcXVlc3Qgb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIFRoZSBwb3N0ZWQgb2JqZWN0XG4gICAgICogQGFzeW5jXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9wb3N0V2l0aE9wdGlvbnM8VD4ob2JqZWN0OiBhbnksIG9wdGlvbnM6IE9wdGlvbnMpOiBQcm9taXNlPFQ+O1xuICAgIC8qKlxuICAgICAqIENhbGwgYSBzdGFuZGFyZCBwdXQgQVBJIGVuZHBvaW50XG4gICAgICogQHBhcmFtIG9iamVjdCAtIFRoZSBvYmplY3QgdG8gcHV0XG4gICAgICogQHBhcmFtIHNlY3VyZSAtIEVudW0gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBBUEkgZW5kcG9pbnQgaXMgc2VjdXJlXG4gICAgICogQHBhcmFtIHZhbGlkYXRlSWQgLSBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGVuIG9iamVjdCdzIElEIHNob3VsZCBiZSB2YWxpZGF0ZWRcbiAgICAgKiBAcmV0dXJucyBUaGUgdXBkYXRlZCBvYmplY3RcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX3B1dDxUIGV4dGVuZHMgQmFzZU1vZGVsPihvYmplY3Q6IGFueSwgc2VjdXJlOiBTZWN1cmUsIHZhbGlkYXRlSWQ/OiBib29sZWFuKTogUHJvbWlzZTxUPjtcbiAgICAvKipcbiAgICAgKiBDYWxsIGEgbm9uLXN0YW5kYXJkIHB1dCBBUEkgZW5kcG9pbnRcbiAgICAgKiBAcGFyYW0gb2JqZWN0IC0gVGhlIG9iamVjdCB0byBwdXRcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSByZXF1ZXN0IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJucyBUaGUgdXBkYXRlZCBvYmplY3RcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX3B1dFdpdGhPcHRpb25zPFQ+KG9wdGlvbnM6IE9wdGlvbnMsIG9iamVjdD86IGFueSk6IFByb21pc2U8VD47XG4gICAgcHJvdGVjdGVkIF9zZWFyY2hXaXRoT3B0aW9uczxUPihvcHRpb25zOiBPcHRpb25zKTogUHJvbWlzZTxTZWFyY2hSZXN1bHRzQ29udGFpbmVyPFQ+PjtcbiAgICBwcm90ZWN0ZWQgX3VwbG9hZEZvcm1EYXRhKHVybDogc3RyaW5nLCBkYXRhOiBGb3JtRGF0YSwgc2VjdXJlOiBTZWN1cmUpOiBPYnNlcnZhYmxlPFVwbG9hZEV2ZW50PjtcbiAgICAvKipcbiAgICAgKiBIYW5kbGUgYW4gZXJyb3IgZm9yIGFuIG9ic2VydmFibGUgcmVxdWVzdFxuICAgICAqIEBwYXJhbSBzZXJ2aWNlTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlIHJlcG9ydGluZyB0aGUgZXJyb3JcbiAgICAgKiBAcGFyYW0gcmVzdWx0IC0gVGhlIHJldHVybiB0byByZXR1cm5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaGFuZGxlT2JzZXJ2YWJsZUVycm9yKHNlcnZpY2VOYW1lOiBzdHJpbmcsIHJlc3VsdD86IHt9KTogKGVycm9yOiBDbGllbnRFcnJvclJlcG9ydCkgPT4gT2JzZXJ2YWJsZTxhbnk+O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZSBhbiBlcnJvciBmb3IgYSBzdGFuZGFyZCBwcm9taXNlIHJlcXVlc3RcbiAgICAgKiBAcGFyYW0gc2VydmljZU5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgc2VydmljZSByZXBvcnRpbmcgdGhlIGVycm9yXG4gICAgICogQHBhcmFtIG1ldGhvZCAtIFRoZSBuYW1lIG9mIHRoZSBtZXRob2QgcmVwb3J0aW5nIHRoZSBlcnJvclxuICAgICAqIEBwYXJhbSBlcnJvciAtIFRoZSBlcnJvciBvYmplY3RcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgaGFuZGxlUHJvbWlzZUVycm9yKHNlcnZpY2VOYW1lOiBzdHJpbmcsIG1ldGhvZDogc3RyaW5nLCBlcnJvcjogYW55KTogUHJvbWlzZTxudWxsPjtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHJlcXVlc3QgaGVhZGVyXG4gICAgICogQHBhcmFtIHNlY3VyZSAtIEVudW0gaW5kaWNhdGluZyB0aGUgdHlwZSBvZiBBUEkgZW5kcG9pbmcgc2VjdXJpdHlcbiAgICAgKiBAcmV0dXJucyBBbiBIVFRQIGhlYWRlclxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRIZWFkZXIoc2VjdXJlOiBTZWN1cmUpOiBIdHRwSGVhZGVycztcbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSB0aGUgSUQgb2YgYSBtb2RlbFxuICAgICAqIEBwYXJhbSBtb2RlbCAtIFRoZSBtb2RlbCB0byB2YWxpZGF0ZVxuICAgICAqIEBwYXJhbSBtZXNzYWdlIC0gVGhlIG1lc3NhZ2UgdG8gZGlzcGxheSBpZiB2YWxpZGF0aW5nIGZhaWxzXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsaWRhdGlvbiBzdWNjZWVkZWRcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwcml2YXRlIHZhbGlkYXRlTW9kZWxJZDtcbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSB0aGUgSUQgb2YgYSBtb2RlbFxuICAgICAqIEBwYXJhbSBpZCAtIFRoZSBJRCB0byB2YWxpZGF0ZVxuICAgICAqIEBwYXJhbSBtZXNzYWdlIC0gVGhlIG1lc3NhZ2UgdG8gZGlzcGxheSBpZiB2YWxpZGF0aW5nIGZhaWxzXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsaWRhdGlvbiBzdWNjZWVkZWRcbiAgICAgKiBAYXN5bmNcbiAgICAgKi9cbiAgICBwcml2YXRlIHZhbGlkYXRlSWQ7XG59XG4iXX0=
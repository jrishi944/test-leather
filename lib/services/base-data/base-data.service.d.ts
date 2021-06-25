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
}

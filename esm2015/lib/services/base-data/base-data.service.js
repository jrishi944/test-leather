import { __awaiter, __decorate, __param } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType } from '@angular/common/http';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { Secure } from '../../enums/secure.enum';
import { Options } from './_models/base-data-options.model';
// import { plainToClassFromExist } from 'class-transformer';
import { UrlUtil } from '../../util/url/url.util';
import { ErrorDialogService } from '../../dialogs/error/error-dialog.service';
import { Dto } from '../../models/dto/dto.model';
import { map } from 'rxjs/operators';
import { LeathermanAppConfigInjectionToken } from '../../config/injection-tokens/leatherman-app-config.injection-token';
import { ErrorDialogServiceInjectionToken } from '../../config/injection-tokens/error-dialog-service.injection-token';
import { SearchResultsDto } from '../../models/dto/search-results-dto.model';
import { SearchResultsContainer } from '../../models/dto/search-results-container.model';
import { UploadEvent } from '../../models/events/upload-event.model';
import * as i0 from "@angular/core";
import * as i1 from "../../config/injection-tokens/leatherman-app-config.injection-token";
import * as i2 from "../../config/injection-tokens/error-dialog-service.injection-token";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common/http";
/**
 * The base data service for communicating with API endpoints
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
import * as ɵngcc2 from '@angular/common/http';
let BaseDataService = class BaseDataService {
    /**
     * Constructor
     * @param config - The app config object
     * @param errorDialogService - A reference to the error dialog service
     * @param router - A reference to the router
     * @param httpClient - A reference to the HTTP client service
     */
    constructor(config, errorDialogService, router, httpClient) {
        this.config = config;
        this.errorDialogService = errorDialogService;
        this.router = router;
        this.httpClient = httpClient;
    }
    // **********************
    // * Protected properties
    // **********************
    /** Set accessor for the base endpoint */
    set baseEndpoint(baseEndpoint) {
        this._baseEndpoint = baseEndpoint;
        if (this._baseEndpoint.startsWith('/') === false) {
            this._baseEndpoint = '/' + this._baseEndpoint;
        }
        if (this._baseEndpoint.endsWith('/') === false) {
            this._baseEndpoint = this._baseEndpoint + '/';
        }
    }
    /** Set accessor for the base endpoint */
    get baseEndpoint() {
        return this._baseEndpoint;
    }
    /** Set accessor for the data service's item data type */
    set type(type) {
        this._type = type;
    }
    /** Set accessor for the api root */
    get apiRoot() {
        if (this.config.apiRoot) {
            return this.config.serverUrl + '/' + this.config.apiRoot;
        }
        return this.config.serverUrl;
    }
    /** Get accessor for the API key  */
    get apiKey() {
        return this.config.apiKey;
    }
    /** Get accessor for the no token header */
    get noTokenHeader() {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            Expires: 'Sat, 01 Jan 2000 00:00:00 GMT'
        });
    }
    /** Get accessor to the header to use when the API endpoint is secured with an API key */
    get apiHeader() {
        const token = this.apiKey ? 'Bearer ' + this.apiKey : '';
        const apiHeader = new HttpHeaders({
            Authorization: token,
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            Expires: 'Sat, 01 Jan 2000 00:00:00 GMT'
        });
        return apiHeader;
    }
    /** Get acccessor for the header to use when the API endpoit is secured with a JWT token */
    get authHeader() {
        const localStorageToken = localStorage.getItem(this.config.jwtTokenName);
        const token = localStorageToken ? 'Bearer ' + localStorageToken : '';
        const authHeader = new HttpHeaders({
            Authorization: token,
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            Expires: 'Sat, 01 Jan 2000 00:00:00 GMT'
        });
        return authHeader;
    }
    // **********************
    // * Protected methods
    // **********************
    /**
     * Call a standard delete API endpoint
     * @param id - The ID of the item to be deleted
     * @param secure - Enum indicating whether the API endpoint is secure
     * @returns True if the delete succeeded
     * @async
     */
    _delete(id, secure) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((yield this.validateId(id, 'Error deleting a record. Invalid ID.')) ===
                false) {
                return false;
            }
            const headers = this.getHeader(secure);
            const result = yield this.httpClient
                .delete(UrlUtil.join(this.apiRoot, this._baseEndpoint, id), {
                headers
            })
                .toPromise();
            if (Dto.isError(result.status.code)) {
                yield this.errorDialogService.openErrorDialog(result.status.text, result.status.message);
                return false;
            }
            return true;
        });
    }
    /**
     * Call a non-standard delete API endpoint
     * @param options - The request options
     * @returns True if the delete succeeded
     * @async
     */
    _deleteWithOptions(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let url;
            if (options.url) {
                url = options.url;
            }
            else {
                url = UrlUtil.join(this.apiRoot, this._baseEndpoint, options.url);
            }
            if (options.id) {
                url = UrlUtil.join(url, options.id);
            }
            if (options.parameters.hasParameters) {
                url = UrlUtil.join(url, options.parameters.getParamterString());
            }
            const headers = this.getHeader(options.secure);
            const result = yield this.httpClient
                .delete(url, {
                headers
            })
                .toPromise();
            if (Dto.isError(result.status.code, options.suppressedErrors)) {
                yield this.errorDialogService.openErrorDialog(result.status.text, result.status.message);
                return false;
            }
            return true;
        });
    }
    /**
     * Delete all test artifacts
     * @returns True if the delete succeded
     * @async
     */
    _deleteTestArtifacts() {
        return __awaiter(this, void 0, void 0, function* () {
            const options = new Options();
            options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'deletetestartifacts');
            options.secure = Secure.true;
            return yield this._deleteWithOptions(options).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('BaseDataService', '_deleteTestArtifacts', err);
            }));
        });
    }
    /**
     * Call a standard get API endpoint
     * @param id - The ID of the item to get
     * @param secure - Enum indicating whether the API endpoint is secure
     * @returns The item if the get succeeded
     * @async
     */
    _get(id, secure) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validate the passed ID
            this.validateId(id, 'Error getting a record. Invalid ID.');
            // Get the appropriate header object
            const headers = this.getHeader(secure);
            // Make an async call using the httpClient. Expect the result to be an ItemDto object
            const result = yield this.httpClient
                .get(UrlUtil.join(this.apiRoot, this._baseEndpoint, id), {
                headers
            })
                // Convert the result to a promise
                .toPromise();
            // If the returned status code is not a success code then
            if (Dto.isError(result.status.code)) {
                // Open the error dialog
                this.errorDialogService.openErrorDialog(result.status.text, result.status.message);
                // Return null
                return null;
            }
            // If the returned data is not an object, return the object with casting it
            if (typeof result.data !== 'object') {
                return result.data;
            }
            // // Cast the object to the appropriate class
            // const data = plainToClassFromExist(this._type, result.data);
            // Return the object
            return result.data;
        });
    }
    // _getObservable
    _getObservable(id, secure) {
        // Validate the passed ID
        this.validateId(id, 'Error getting a record. Invalid ID.');
        // Get the appropriate header object
        const headers = this.getHeader(secure);
        // Make an async call using the httpClient. Expect the result to be an ItemDto object
        return this.httpClient
            .get(UrlUtil.join(this.apiRoot, this._baseEndpoint, id), {
            headers
        })
            .pipe(map(result => {
            return result.data;
        }));
    }
    /**
     * Call a non-standard get API endpoint that returns an observable
     * @param id - The ID of the item to get
     * @param options - The request options
     * @returns The item if the get succeeded (as an observable)
     * @async
     */
    _getObservableWithOptions(options) {
        let url;
        if (options.url) {
            url = options.url;
        }
        else {
            url = UrlUtil.join(this.apiRoot, this._baseEndpoint, options.url);
        }
        if (options.id) {
            url = UrlUtil.join(url, options.id);
        }
        if (options.parameters.hasParameters) {
            url = UrlUtil.join(url, options.parameters.getParamterString());
        }
        const headers = this.getHeader(options.secure);
        return this.httpClient
            .get(url, {
            headers
        })
            .pipe(map(result => {
            return result.data;
        }));
    }
    /**
     * Call a non-standard get API endpoint
     * @param options - The request options
     * @returns The item if the get succeeded
     * @async
     */
    _getWithOptions(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let url;
            if (options.url) {
                url = options.url;
            }
            else {
                url = UrlUtil.join(this.apiRoot, this._baseEndpoint, options.url);
            }
            if (options.id) {
                url = UrlUtil.join(url, options.id);
            }
            if (options.parameters.hasParameters) {
                url = UrlUtil.join(url, options.parameters.getParamterString());
                console.log('Cache busting URL:' + url);
            }
            const headers = this.getHeader(options.secure);
            const result = yield this.httpClient
                .get(url, {
                headers
            })
                .toPromise();
            if (Dto.isError(result.status.code, options.suppressedErrors)) {
                yield this.errorDialogService.openErrorDialog(result.status.text, result.status.message);
                return null;
            }
            if (result.data === null || result.data === undefined) {
                return null;
            }
            if (typeof result.data !== 'object') {
                return result.data;
            }
            // let data: T;
            // if (options.objectType) {
            //   data = plainToClassFromExist(options.objectType, result.data);
            // } else {
            //   data = plainToClassFromExist(this._type, result.data);
            // }
            return result.data;
        });
    }
    /**
     * Call a standard get many API endpoint
     * @param secure - Enum indicating whether the API endpoint is secure
     * @returns An array of items if the get succeeded
     * @async
     */
    _getMany(secure) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = this.getHeader(secure);
            const result = yield this.httpClient
                .get(UrlUtil.join(this.apiRoot, this._baseEndpoint), {
                headers
            })
                .toPromise();
            if (Dto.isError(result.status.code)) {
                yield this.errorDialogService.openErrorDialog(result.status.text, result.status.message);
                return null;
            }
            return result.data;
        });
    }
    /**
     * Call a non-standard get many API endpoint
     * @param options - The request options
     * @returns An array of items if the get succeeded
     * @async
     */
    _getManyWithOptions(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let url;
            if (options.url) {
                url = options.url;
            }
            else {
                url = UrlUtil.join(this.apiRoot, this._baseEndpoint, options.url);
            }
            if (options.id) {
                url = UrlUtil.join(url, options.id);
            }
            if (options.parameters.hasParameters) {
                url = UrlUtil.join(url, options.parameters.getParamterString());
            }
            const headers = this.getHeader(options.secure);
            const result = yield this.httpClient
                .get(url, { headers })
                .toPromise();
            if (Dto.isError(result.status.code, options.suppressedErrors)) {
                yield this.errorDialogService.openErrorDialog(result.status.text, result.status.message);
                return null;
            }
            return result.data;
        });
    }
    /**
     * Call a standard post API endpoint
     * @param object - The object to post
     * @param secure - Enum indicating whether the API endpoint is secure
     * @param validateId - Boolean indicating whether then object's ID should be validated
     * @returns The posted object
     * @async
     */
    _post(object, secure, validateId = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (validateId) {
                if (!this.validateModelId(object, 'Error posting a record. Invalid model ID.')) {
                    return null;
                }
            }
            const headers = this.getHeader(secure);
            const url = UrlUtil.join(this.apiRoot, this._baseEndpoint);
            let result;
            try {
                result = yield this.httpClient
                    .post(UrlUtil.join(this.apiRoot, this._baseEndpoint), object, {
                    headers
                })
                    .toPromise();
            }
            catch (error) {
                console.log('**********');
                console.log('HTTP Post Error');
                console.log('URL: ' + url);
                console.log(object);
                throw error;
            }
            if (Dto.isError(result.status.code)) {
                yield this.errorDialogService.openErrorDialog(result.status.text, result.status.message);
                return null;
            }
            return result.data;
        });
    }
    /**
     * Call a non-standard post API endpoint
     * @param object - The object to post
     * @param options - The request options
     * @returns The posted object
     * @async
     */
    _postWithOptions(object, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (options.validateId) {
                if (!this.validateModelId(object, 'Error posting a record. Invalid model ID.')) {
                    return null;
                }
            }
            let url;
            if (options.url) {
                url = options.url;
            }
            else {
                url = UrlUtil.join(this.apiRoot, this._baseEndpoint, options.url);
            }
            if (options.id) {
                url += options.id;
            }
            if (options.parameters.hasParameters) {
                url += options.parameters.getParamterString();
            }
            const headers = this.getHeader(options.secure);
            const result = yield this.httpClient
                .post(url, object, {
                headers
            })
                .toPromise();
            if (Dto.isError(result.status.code, options.suppressedErrors)) {
                yield this.errorDialogService.openErrorDialog(result.status.text, result.status.message);
                return null;
            }
            return result.data;
        });
    }
    /**
     * Call a standard put API endpoint
     * @param object - The object to put
     * @param secure - Enum indicating whether the API endpoint is secure
     * @param validateId - Boolean indicating whether then object's ID should be validated
     * @returns The updated object
     * @async
     */
    _put(object, secure, validateId = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (object && validateId) {
                if (!this.validateModelId(object, 'Error putting a record. Invalid model ID.')) {
                    return null;
                }
            }
            const headers = this.getHeader(secure);
            const result = yield this.httpClient
                .put(UrlUtil.join(this.apiRoot, this._baseEndpoint, object._id), object, {
                headers
            })
                .toPromise();
            if (Dto.isError(result.status.code)) {
                yield this.errorDialogService.openErrorDialog(result.status.text, result.status.message);
                return null;
            }
            return result.data;
        });
    }
    /**
     * Call a non-standard put API endpoint
     * @param object - The object to put
     * @param options - The request options
     * @returns The updated object
     * @async
     */
    _putWithOptions(options, object) {
        return __awaiter(this, void 0, void 0, function* () {
            if (object && options.validateId) {
                if (!this.validateModelId(object, 'Error putting a record. Invalid model ID.')) {
                    return null;
                }
            }
            let url;
            if (options.url) {
                url = options.url;
            }
            else {
                url = UrlUtil.join(this.apiRoot, this._baseEndpoint, options.url);
            }
            if (options.id) {
                url = UrlUtil.join(url, options.id);
            }
            if (options.parameters.hasParameters) {
                url = UrlUtil.join(url, options.parameters.getParamterString());
            }
            const headers = this.getHeader(options.secure);
            const result = yield this.httpClient
                .put(url, object, {
                headers
            })
                .toPromise();
            if (Dto.isError(result.status.code, options.suppressedErrors)) {
                yield this.errorDialogService.openErrorDialog(result.status.text, result.status.message);
                return null;
            }
            return result.data;
        });
    }
    _searchWithOptions(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let url;
            if (options.url) {
                url = options.url;
            }
            else {
                url = UrlUtil.join(this.apiRoot, this.baseEndpoint, options.url);
            }
            if (options.id) {
                url = UrlUtil.join(url, options.id);
            }
            if (options.parameters.hasParameters) {
                url = UrlUtil.join(url, options.parameters.getParamterString());
                console.log('Cache busting URL:' + url);
            }
            const headers = this.getHeader(options.secure);
            const result = yield this.httpClient
                .get(url, {
                headers
            })
                .toPromise();
            if (SearchResultsDto.isError(result.status.code, options.suppressedErrors)) {
                yield this.errorDialogService.openErrorDialog(result.status.text, result.status.message);
                return null;
            }
            const searchResultsContainer = new SearchResultsContainer(result);
            return searchResultsContainer;
        });
    }
    _uploadFormData(url, data, secure) {
        const headers = this.getHeader(secure);
        return this.httpClient
            .post(url, data, {
            headers,
            reportProgress: true,
            observe: 'events'
        })
            .pipe(map(event => {
            let uploadEvent;
            switch (event.type) {
                case HttpEventType.UploadProgress:
                    const progress = Math.round((100 * event.loaded) / event.total);
                    uploadEvent = new UploadEvent('Progress');
                    uploadEvent.progressPercent = progress;
                    return uploadEvent;
                case HttpEventType.Response:
                    uploadEvent = new UploadEvent('Response', event.body);
                    return uploadEvent;
                default:
                    uploadEvent = new UploadEvent('Error', `Unhandled event: ${event.type}`);
                    return uploadEvent;
            }
        }));
    }
    /**
     * Handle an error for an observable request
     * @param serviceName - The name of the service reporting the error
     * @param result - The return to return
     */
    handleObservableError(serviceName, result = {}) {
        return (error) => {
            console.error(serviceName, error);
            console.error(serviceName + ' error status', error.status);
            return of(result);
        };
    }
    /**
     * Handle an error for a standard promise request
     * @param serviceName - The name of the service reporting the error
     * @param method - The name of the method reporting the error
     * @param error - The error object
     * @async
     */
    handlePromiseError(serviceName, method, error) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Service: ' +
                serviceName +
                ' Method: ' +
                method +
                ' Message: ' +
                error.message);
            yield this.errorDialogService.openErrorDialog('Unhandled Exception', 'An unhandled exception error occurred: ' + error.message);
            return null;
        });
    }
    /**
     * Get the request header
     * @param secure - Enum indicating the type of API endpoing security
     * @returns An HTTP header
     */
    getHeader(secure) {
        switch (secure) {
            case Secure.true:
                return this.authHeader;
            case Secure.api:
                return this.apiHeader;
            case Secure.false:
            default:
                return this.noTokenHeader;
        }
    }
    /**
     * Validate the ID of a model
     * @param model - The model to validate
     * @param message - The message to display if validating fails
     * @returns True if the validation succeeded
     * @async
     */
    validateModelId(model, message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!model._id) {
                yield this.errorDialogService.openErrorDialog('Invalid Model ID', message);
                return false;
            }
            return true;
        });
    }
    /**
     * Validate the ID of a model
     * @param id - The ID to validate
     * @param message - The message to display if validating fails
     * @returns True if the validation succeeded
     * @async
     */
    validateId(id, message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                yield this.errorDialogService.openErrorDialog('Invalid Model ID', message);
                return false;
            }
            return true;
        });
    }
};
BaseDataService.ɵfac = function BaseDataService_Factory(t) { return new (t || BaseDataService)(ɵngcc0.ɵɵinject(LeathermanAppConfigInjectionToken), ɵngcc0.ɵɵinject(ErrorDialogServiceInjectionToken), ɵngcc0.ɵɵinject(ɵngcc1.Router), ɵngcc0.ɵɵinject(ɵngcc2.HttpClient)); };
BaseDataService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [LeathermanAppConfigInjectionToken,] }] },
    { type: ErrorDialogService, decorators: [{ type: Inject, args: [ErrorDialogServiceInjectionToken,] }] },
    { type: Router },
    { type: HttpClient }
];
BaseDataService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BaseDataService_Factory() { return new BaseDataService(i0.ɵɵinject(i1.LeathermanAppConfigInjectionToken), i0.ɵɵinject(i2.ErrorDialogServiceInjectionToken), i0.ɵɵinject(i3.Router), i0.ɵɵinject(i4.HttpClient)); }, token: BaseDataService, providedIn: "root" });
BaseDataService = __decorate([ __param(0, Inject(LeathermanAppConfigInjectionToken)),
    __param(1, Inject(ErrorDialogServiceInjectionToken))
], BaseDataService);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BaseDataService, [{
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
export { BaseDataService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIm5nOi9sZWF0aGVybWFuLWJvb3RzdHJhcC9saWIvc2VydmljZXMvYmFzZS1kYXRhL2Jhc2UtZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RSxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzVELDZEQUE2RDtBQUM3RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDOUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBR2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUV4SCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUN0SCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDckU7QUFBcUM7QUFJckM7QUFLaUI7QUFFakI7QUFUQTtBQUNBO0FBQ0EsR0FBRzs7OztBQUlILElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7QUFDNUIsSUFpRkU7QUFDRjtBQUNFO0FBQ0U7QUFDRTtBQUNFO0FBRUosT0FEQztBQUNMLElBQUUsWUFFWSxNQUE0QixFQUU1QixrQkFBc0MsRUFDdEMsTUFBYyxFQUNkLFVBQXNCO0FBQ2pDLFFBTFcsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7QUFBQyxRQUU3Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0FBQUMsUUFDdkMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtBQUFDLFFBQ2YsZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUNwQyxJQUFNLENBQUM7QUFDUCxJQWhHRSx5QkFBeUI7QUFDM0IsSUFBRSx5QkFBeUI7QUFDM0IsSUFBRSx5QkFBeUI7QUFDM0IsSUFDRSx5Q0FBeUM7QUFDM0MsSUFBRSxJQUFjLFlBQVksQ0FBQyxZQUFvQjtBQUNqRCxRQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO0FBQ3RDLFFBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDdEQsWUFBTSxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0FBQ3BELFNBQUs7QUFDTCxRQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxFQUFFO0FBQ3BELFlBQU0sSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztBQUNwRCxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0gsSUFDRSx5Q0FBeUM7QUFDM0MsSUFBRSxJQUFjLFlBQVk7QUFBSyxRQUM3QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7QUFDOUIsSUFBRSxDQUFDO0FBQ0gsSUFJRSx5REFBeUQ7QUFDM0QsSUFBRSxJQUFjLElBQUksQ0FBQyxJQUFTO0FBQzlCLFFBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDdEIsSUFBRSxDQUFDO0FBQ0gsSUFJRSxvQ0FBb0M7QUFDdEMsSUFBRSxJQUFjLE9BQU87QUFBSyxRQUN4QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO0FBQzdCLFlBQU0sT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFDL0QsU0FBSztBQUNMLFFBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUNqQyxJQUFFLENBQUM7QUFDSCxJQUNFLG9DQUFvQztBQUN0QyxJQUFFLElBQWMsTUFBTTtBQUFLLFFBQ3ZCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDOUIsSUFBRSxDQUFDO0FBQ0gsSUFDRSwyQ0FBMkM7QUFDN0MsSUFBRSxJQUFjLGFBQWE7QUFBSyxRQUM5QixPQUFPLElBQUksV0FBVyxDQUFDO0FBQzNCLFlBQU0sY0FBYyxFQUFFLGtCQUFrQjtBQUN4QyxZQUFNLGVBQWUsRUFBRSxVQUFVO0FBQ2pDLFlBQU0sTUFBTSxFQUFFLFVBQVU7QUFDeEIsWUFBTSxPQUFPLEVBQUUsK0JBQStCO0FBQzlDLFNBQUssQ0FBQyxDQUFDO0FBQ1AsSUFBRSxDQUFDO0FBQ0gsSUFDRSx5RkFBeUY7QUFDM0YsSUFBRSxJQUFjLFNBQVM7QUFBSyxRQUMxQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzdELFFBQUksTUFBTSxTQUFTLEdBQUcsSUFBSSxXQUFXLENBQUM7QUFDdEMsWUFBTSxhQUFhLEVBQUUsS0FBSztBQUMxQixZQUFNLGNBQWMsRUFBRSxrQkFBa0I7QUFDeEMsWUFBTSxlQUFlLEVBQUUsVUFBVTtBQUNqQyxZQUFNLE1BQU0sRUFBRSxVQUFVO0FBQ3hCLFlBQU0sT0FBTyxFQUFFLCtCQUErQjtBQUM5QyxTQUFLLENBQUMsQ0FBQztBQUNQLFFBQUksT0FBTyxTQUFTLENBQUM7QUFDckIsSUFBRSxDQUFDO0FBQ0gsSUFDRSwyRkFBMkY7QUFDN0YsSUFBRSxJQUFjLFVBQVU7QUFBSyxRQUMzQixNQUFNLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUM3RSxRQUFJLE1BQU0sS0FBSyxHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUN6RSxRQUFJLE1BQU0sVUFBVSxHQUFHLElBQUksV0FBVyxDQUFDO0FBQ3ZDLFlBQU0sYUFBYSxFQUFFLEtBQUs7QUFDMUIsWUFBTSxjQUFjLEVBQUUsa0JBQWtCO0FBQ3hDLFlBQU0sZUFBZSxFQUFFLFVBQVU7QUFDakMsWUFBTSxNQUFNLEVBQUUsVUFBVTtBQUN4QixZQUFNLE9BQU8sRUFBRSwrQkFBK0I7QUFDOUMsU0FBSyxDQUFDLENBQUM7QUFDUCxRQUFJLE9BQU8sVUFBVSxDQUFDO0FBQ3RCLElBQUUsQ0FBQztBQUNILElBaUJFLHlCQUF5QjtBQUMzQixJQUFFLHNCQUFzQjtBQUN4QixJQUFFLHlCQUF5QjtBQUMzQixJQUNFO0FBQ0Y7QUFDRTtBQUNFO0FBQ0U7QUFDRTtBQUVKLE9BREM7QUFDTCxJQUFrQixPQUFPLENBQUMsRUFBVSxFQUFFLE1BQWM7QUFBSTtBQUVyQixZQUQvQixJQUNFLENBQUMsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxzQ0FBc0MsQ0FBQyxDQUFDO0FBQ3pFLGdCQUFNLEtBQUssRUFDTDtBQUNOLGdCQUFNLE9BQU8sS0FBSyxDQUFDO0FBQ25CLGFBQUs7QUFDTCxZQUFJLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0MsWUFBSSxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVO0FBQ3hDLGlCQUFPLE1BQU0sQ0FBTSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsRUFBRTtBQUN2RSxnQkFBUSxPQUFPO0FBQ2YsYUFBTyxDQUFDO0FBQ1IsaUJBQU8sU0FBUyxFQUFFLENBQUM7QUFDbkIsWUFDSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUN6QyxnQkFBTSxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQzNDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUNsQixNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDdEIsQ0FBQztBQUNSLGdCQUFNLE9BQU8sS0FBSyxDQUFDO0FBQ25CLGFBQUs7QUFDTCxZQUNJLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLFFBQUUsQ0FBQztBQUVGLEtBRkU7QUFDSCxJQUNFO0FBQ0Y7QUFDRTtBQUNFO0FBQ0U7QUFFSixPQURHO0FBQ0wsSUFBa0Isa0JBQWtCLENBQUMsT0FBZ0I7QUFBSTtBQUd6RCxZQUZJLElBQUksR0FBVyxDQUFDO0FBQ3BCLFlBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQ3JCLGdCQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO0FBQ3hCLGFBQUs7QUFBQyxpQkFBSztBQUNYLGdCQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEUsYUFBSztBQUNMLFlBQUksSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFO0FBQ3BCLGdCQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDMUMsYUFBSztBQUNMLFlBQUksSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtBQUMxQyxnQkFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7QUFDdEUsYUFBSztBQUNMLFlBQUksTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkQsWUFBSSxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVO0FBQ3hDLGlCQUFPLE1BQU0sQ0FBTSxHQUFHLEVBQUU7QUFDeEIsZ0JBQVEsT0FBTztBQUNmLGFBQU8sQ0FBQztBQUNSLGlCQUFPLFNBQVMsRUFBRSxDQUFDO0FBQ25CLFlBQ0ksSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO0FBQ25FLGdCQUFNLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQ2xCLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUN0QixDQUFDO0FBQ1IsZ0JBQU0sT0FBTyxLQUFLLENBQUM7QUFDbkIsYUFBSztBQUNMLFlBQ0ksT0FBTyxJQUFJLENBQUM7QUFDaEIsUUFBRSxDQUFDO0FBRUYsS0FGRTtBQUNILElBQ0U7QUFDRjtBQUNFO0FBQ0U7QUFFSixPQURLO0FBQ0wsSUFBZSxvQkFBb0I7QUFBSztBQUUvQixZQURMLE1BQU0sT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7QUFDbEMsWUFBSSxPQUFPLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQ3hCLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLFlBQVksRUFDakIscUJBQXFCLENBQ3RCLENBQUM7QUFDTixZQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNqQyxZQUFJLE9BQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQU0sR0FBRyxFQUFDLEVBQUU7QUFFbkUsZ0JBREssT0FBTyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FDbEMsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0QixHQUFHLENBQ0osQ0FBQztBQUNSLFlBQUksQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNQLFFBQUUsQ0FBQztBQUVGLEtBRkU7QUFDSCxJQUNFO0FBQ0Y7QUFDRTtBQUNFO0FBQ0U7QUFDRTtBQUVKLE9BREM7QUFDTCxJQUFrQixJQUFJLENBQUksRUFBVSxFQUFFLE1BQWM7QUFBSTtBQUVwQyxZQURoQix5QkFBeUI7QUFDN0IsWUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxxQ0FBcUMsQ0FBQyxDQUFDO0FBQy9ELFlBQUksb0NBQW9DO0FBQ3hDLFlBQUksTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQyxZQUFJLHFGQUFxRjtBQUN6RixZQUFJLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVU7QUFDeEMsaUJBQU8sR0FBRyxDQUFhLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQzNFLGdCQUFRLE9BQU87QUFDZixhQUFPLENBQUM7QUFDUixnQkFBTSxrQ0FBa0M7QUFDeEMsaUJBQU8sU0FBUyxFQUFFLENBQUM7QUFDbkIsWUFDSSx5REFBeUQ7QUFDN0QsWUFBSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUN6QyxnQkFBTSx3QkFBd0I7QUFDOUIsZ0JBQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQ2xCLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUN0QixDQUFDO0FBQ1IsZ0JBQU0sY0FBYztBQUNwQixnQkFBTSxPQUFPLElBQUksQ0FBQztBQUNsQixhQUFLO0FBQ0wsWUFDSSwyRUFBMkU7QUFDL0UsWUFBSSxJQUFJLE9BQU8sTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7QUFDekMsZ0JBQU0sT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ3pCLGFBQUs7QUFDTCxZQUNJLDhDQUE4QztBQUNsRCxZQUFJLCtEQUErRDtBQUNuRSxZQUNJLG9CQUFvQjtBQUN4QixZQUFJLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQztBQUN2QixRQUFFLENBQUM7QUFFRixLQUZFO0FBQ0gsSUFDRSxpQkFBaUI7QUFDbkIsSUFBWSxjQUFjLENBQUksRUFBVSxFQUFFLE1BQWM7QUFBSSxRQUN4RCx5QkFBeUI7QUFDN0IsUUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxxQ0FBcUMsQ0FBQyxDQUFDO0FBQy9ELFFBQUksb0NBQW9DO0FBQ3hDLFFBQUksTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQyxRQUFJLHFGQUFxRjtBQUN6RixRQUFJLE9BQU8sSUFBSSxDQUFDLFVBQVU7QUFDMUIsYUFBTyxHQUFHLENBQWEsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLEVBQUU7QUFDM0UsWUFBUSxPQUFPO0FBQ2YsU0FBTyxDQUFDO0FBQ1IsYUFBTyxJQUFJLENBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQ3JCLFlBQVUsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQzdCLFFBQVEsQ0FBQyxDQUFDLENBQ0gsQ0FBQztBQUNSLElBQUUsQ0FBQztBQUNILElBQ0U7QUFDRjtBQUNFO0FBQ0U7QUFDRTtBQUNFO0FBRUosT0FEQztBQUNMLElBQVkseUJBQXlCLENBQUksT0FBZ0I7QUFBSSxRQUN6RCxJQUFJLEdBQVcsQ0FBQztBQUNwQixRQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNyQixZQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO0FBQ3hCLFNBQUs7QUFBQyxhQUFLO0FBQ1gsWUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hFLFNBQUs7QUFDTCxRQUFJLElBQUksT0FBTyxDQUFDLEVBQUUsRUFBRTtBQUNwQixZQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDMUMsU0FBSztBQUNMLFFBQUksSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtBQUMxQyxZQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztBQUN0RSxTQUFLO0FBQ0wsUUFBSSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuRCxRQUFJLE9BQU8sSUFBSSxDQUFDLFVBQVU7QUFDMUIsYUFBTyxHQUFHLENBQWEsR0FBRyxFQUFFO0FBQzVCLFlBQVEsT0FBTztBQUNmLFNBQU8sQ0FBQztBQUNSLGFBQU8sSUFBSSxDQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUNyQixZQUFVLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQztBQUM3QixRQUFRLENBQUMsQ0FBQyxDQUNILENBQUM7QUFDUixJQUFFLENBQUM7QUFDSCxJQUNFO0FBQ0Y7QUFDRTtBQUNFO0FBQ0U7QUFFSixPQURHO0FBQ0wsSUFBa0IsZUFBZSxDQUFJLE9BQWdCO0FBQUk7QUFHbkQsWUFGRixJQUFJLEdBQVcsQ0FBQztBQUNwQixZQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNyQixnQkFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUN4QixhQUFLO0FBQUMsaUJBQUs7QUFDWCxnQkFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hFLGFBQUs7QUFDTCxZQUFJLElBQUksT0FBTyxDQUFDLEVBQUUsRUFBRTtBQUNwQixnQkFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzFDLGFBQUs7QUFDTCxZQUFJLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7QUFDMUMsZ0JBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0FBQ3RFLGdCQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDOUMsYUFBSztBQUNMLFlBQUksTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkQsWUFBSSxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVO0FBQ3hDLGlCQUFPLEdBQUcsQ0FBYSxHQUFHLEVBQUU7QUFDNUIsZ0JBQVEsT0FBTztBQUNmLGFBQU8sQ0FBQztBQUNSLGlCQUFPLFNBQVMsRUFBRSxDQUFDO0FBQ25CLFlBQ0ksSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO0FBQ25FLGdCQUFNLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQ2xCLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUN0QixDQUFDO0FBQ1IsZ0JBQU0sT0FBTyxJQUFJLENBQUM7QUFDbEIsYUFBSztBQUNMLFlBQ0ksSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtBQUMzRCxnQkFBTSxPQUFPLElBQUksQ0FBQztBQUNsQixhQUFLO0FBQ0wsWUFDSSxJQUFJLE9BQU8sTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7QUFDekMsZ0JBQU0sT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ3pCLGFBQUs7QUFDTCxZQUNJLGVBQWU7QUFDbkIsWUFBSSw0QkFBNEI7QUFDaEMsWUFBSSxtRUFBbUU7QUFDdkUsWUFBSSxXQUFXO0FBQ2YsWUFBSSwyREFBMkQ7QUFDL0QsWUFBSSxJQUFJO0FBQ1IsWUFDSSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDdkIsUUFBRSxDQUFDO0FBRUYsS0FGRTtBQUNILElBQ0U7QUFDRjtBQUNFO0FBQ0U7QUFDRTtBQUVKLE9BREc7QUFDTCxJQUFrQixRQUFRLENBQUksTUFBYztBQUFJO0FBRTVDLFlBREEsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQyxZQUFJLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVU7QUFDeEMsaUJBQU8sR0FBRyxDQUFjLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7QUFDeEUsZ0JBQVEsT0FBTztBQUNmLGFBQU8sQ0FBQztBQUNSLGlCQUFPLFNBQVMsRUFBRSxDQUFDO0FBQ25CLFlBQ0ksSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDekMsZ0JBQU0sTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUMzQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFDbEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQ3RCLENBQUM7QUFDUixnQkFBTSxPQUFPLElBQUksQ0FBQztBQUNsQixhQUFLO0FBQ0wsWUFDSSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDdkIsUUFBRSxDQUFDO0FBRUYsS0FGRTtBQUNILElBQ0U7QUFDRjtBQUNFO0FBQ0U7QUFDRTtBQUVKLE9BREc7QUFDTCxJQUFrQixtQkFBbUIsQ0FBSSxPQUFnQjtBQUFJO0FBR3pELFlBRkEsSUFBSSxHQUFXLENBQUM7QUFDcEIsWUFBSSxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7QUFDckIsZ0JBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7QUFDeEIsYUFBSztBQUFDLGlCQUFLO0FBQ1gsZ0JBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4RSxhQUFLO0FBQ0wsWUFBSSxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQUU7QUFDcEIsZ0JBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMxQyxhQUFLO0FBQ0wsWUFBSSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO0FBQzFDLGdCQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztBQUN0RSxhQUFLO0FBQ0wsWUFBSSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuRCxZQUFJLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVU7QUFDeEMsaUJBQU8sR0FBRyxDQUFjLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDO0FBQ3pDLGlCQUFPLFNBQVMsRUFBRSxDQUFDO0FBQ25CLFlBQ0ksSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO0FBQ25FLGdCQUFNLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQ2xCLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUN0QixDQUFDO0FBQ1IsZ0JBQU0sT0FBTyxJQUFJLENBQUM7QUFDbEIsYUFBSztBQUNMLFlBQ0ksT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ3ZCLFFBQUUsQ0FBQztBQUVGLEtBRkU7QUFDSCxJQUNFO0FBQ0Y7QUFDRTtBQUNFO0FBQ0U7QUFDRTtBQUNFO0FBRUosT0FERDtBQUNMLElBQWtCLEtBQUssQ0FDbkIsTUFBVyxFQUNYLE1BQWMsRUFDZCxhQUFzQixJQUFJO0FBQzNCO0FBR1csWUFGVixJQUFJLFVBQVUsRUFBRTtBQUNwQixnQkFBTSxJQUNFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FDbkIsTUFBTSxFQUNOLDJDQUEyQyxDQUM1QyxFQUNEO0FBQ1Isb0JBQVEsT0FBTyxJQUFJLENBQUM7QUFDcEIsaUJBQU87QUFDUCxhQUFLO0FBQ0wsWUFBSSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNDLFlBQUksTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMvRCxZQUNJLElBQUksTUFBa0IsQ0FBQztBQUMzQixZQUFJLElBQUk7QUFDUixnQkFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVTtBQUNwQyxxQkFBUyxJQUFJLENBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsRUFDOUMsTUFBTSxFQUNOO0FBQ1Ysb0JBQVksT0FBTztBQUNuQixpQkFBVyxDQUNGO0FBQ1QscUJBQVMsU0FBUyxFQUFFLENBQUM7QUFDckIsYUFBSztBQUFDLFlBQUEsT0FBTyxLQUFLLEVBQUU7QUFDcEIsZ0JBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNoQyxnQkFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDckMsZ0JBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDakMsZ0JBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMxQixnQkFBTSxNQUFNLEtBQUssQ0FBQztBQUNsQixhQUFLO0FBQ0wsWUFDSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUN6QyxnQkFBTSxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQzNDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUNsQixNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDdEIsQ0FBQztBQUNSLGdCQUFNLE9BQU8sSUFBSSxDQUFDO0FBQ2xCLGFBQUs7QUFDTCxZQUNJLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQztBQUN2QixRQUFFLENBQUM7QUFFRixLQUZFO0FBQ0gsSUFDRTtBQUNGO0FBQ0U7QUFDRTtBQUNFO0FBQ0U7QUFFSixPQURDO0FBQ0wsSUFBa0IsZ0JBQWdCLENBQzlCLE1BQVcsRUFDWCxPQUFnQjtBQUNqQjtBQUdHLFlBRkYsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO0FBQzVCLGdCQUFNLElBQ0UsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUNuQixNQUFNLEVBQ04sMkNBQTJDLENBQzVDLEVBQ0Q7QUFDUixvQkFBUSxPQUFPLElBQUksQ0FBQztBQUNwQixpQkFBTztBQUNQLGFBQUs7QUFDTCxZQUFJLElBQUksR0FBVyxDQUFDO0FBQ3BCLFlBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQ3JCLGdCQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO0FBQ3hCLGFBQUs7QUFBQyxpQkFBSztBQUNYLGdCQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEUsYUFBSztBQUNMLFlBQUksSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFO0FBQ3BCLGdCQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsRUFBRSxDQUFDO0FBQ3hCLGFBQUs7QUFDTCxZQUFJLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7QUFDMUMsZ0JBQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztBQUNwRCxhQUFLO0FBQ0wsWUFBSSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuRCxZQUNJLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVU7QUFDeEMsaUJBQU8sSUFBSSxDQUFhLEdBQUcsRUFBRSxNQUFNLEVBQUU7QUFDckMsZ0JBQVEsT0FBTztBQUNmLGFBQU8sQ0FBQztBQUNSLGlCQUFPLFNBQVMsRUFBRSxDQUFDO0FBQ25CLFlBQ0ksSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO0FBQ25FLGdCQUFNLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQ2xCLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUN0QixDQUFDO0FBQ1IsZ0JBQU0sT0FBTyxJQUFJLENBQUM7QUFDbEIsYUFBSztBQUNMLFlBQ0ksT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ3ZCLFFBQUUsQ0FBQztBQUVGLEtBRkU7QUFDSCxJQUNFO0FBQ0Y7QUFDRTtBQUNFO0FBQ0U7QUFDRTtBQUNFO0FBRUosT0FERDtBQUNMLElBQWtCLElBQUksQ0FDbEIsTUFBVyxFQUNYLE1BQWMsRUFDZCxhQUFzQixJQUFJO0FBQzNCO0FBR0MsWUFGQSxJQUFJLE1BQU0sSUFBSSxVQUFVLEVBQUU7QUFDOUIsZ0JBQU0sSUFDRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQ25CLE1BQU0sRUFDTiwyQ0FBMkMsQ0FDNUMsRUFDRDtBQUNSLG9CQUFRLE9BQU8sSUFBSSxDQUFDO0FBQ3BCLGlCQUFPO0FBQ1AsYUFBSztBQUNMLFlBQUksTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQyxZQUFJLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVU7QUFDeEMsaUJBQU8sR0FBRyxDQUNGLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFDMUQsTUFBTSxFQUNOO0FBQ1IsZ0JBQVUsT0FBTztBQUNqQixhQUFTLENBQ0Y7QUFDUCxpQkFBTyxTQUFTLEVBQUUsQ0FBQztBQUNuQixZQUNJLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3pDLGdCQUFNLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FDM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQ2xCLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUN0QixDQUFDO0FBQ1IsZ0JBQU0sT0FBTyxJQUFJLENBQUM7QUFDbEIsYUFBSztBQUNMLFlBQ0ksT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ3ZCLFFBQUUsQ0FBQztBQUVGLEtBRkU7QUFDSCxJQUNFO0FBQ0Y7QUFDRTtBQUNFO0FBQ0U7QUFDRTtBQUVKLE9BREM7QUFDTCxJQUFrQixlQUFlLENBQzdCLE9BQWdCLEVBQ2hCLE1BQVk7QUFDYjtBQUVJLFlBREgsSUFBSSxNQUFNLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtBQUN0QyxnQkFBTSxJQUNFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FDbkIsTUFBTSxFQUNOLDJDQUEyQyxDQUM1QyxFQUNEO0FBQ1Isb0JBQVEsT0FBTyxJQUFJLENBQUM7QUFDcEIsaUJBQU87QUFDUCxhQUFLO0FBQ0wsWUFBSSxJQUFJLEdBQVcsQ0FBQztBQUNwQixZQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNyQixnQkFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUN4QixhQUFLO0FBQUMsaUJBQUs7QUFDWCxnQkFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hFLGFBQUs7QUFDTCxZQUFJLElBQUksT0FBTyxDQUFDLEVBQUUsRUFBRTtBQUNwQixnQkFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzFDLGFBQUs7QUFDTCxZQUFJLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7QUFDMUMsZ0JBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0FBQ3RFLGFBQUs7QUFDTCxZQUFJLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25ELFlBQUksTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVTtBQUN4QyxpQkFBTyxHQUFHLENBQWEsR0FBRyxFQUFFLE1BQU0sRUFBRTtBQUNwQyxnQkFBUSxPQUFPO0FBQ2YsYUFBTyxDQUFDO0FBQ1IsaUJBQU8sU0FBUyxFQUFFLENBQUM7QUFDbkIsWUFDSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7QUFDbkUsZ0JBQU0sTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUMzQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFDbEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQ3RCLENBQUM7QUFDUixnQkFBTSxPQUFPLElBQUksQ0FBQztBQUNsQixhQUFLO0FBQ0wsWUFDSSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDdkIsUUFBRSxDQUFDO0FBRUYsS0FGRTtBQUNILElBQ2tCLGtCQUFrQixDQUNoQyxPQUFnQjtBQUNqQjtBQUVELFlBREUsSUFBSSxHQUFXLENBQUM7QUFDcEIsWUFBSSxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7QUFDckIsZ0JBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7QUFDeEIsYUFBSztBQUFDLGlCQUFLO0FBQ1gsZ0JBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN2RSxhQUFLO0FBQ0wsWUFBSSxJQUFJLE9BQU8sQ0FBQyxFQUFFLEVBQUU7QUFDcEIsZ0JBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMxQyxhQUFLO0FBQ0wsWUFBSSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO0FBQzFDLGdCQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztBQUN0RSxnQkFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQzlDLGFBQUs7QUFDTCxZQUFJLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25ELFlBQUksTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVTtBQUN4QyxpQkFBTyxHQUFHLENBQXNCLEdBQUcsRUFBRTtBQUNyQyxnQkFBUSxPQUFPO0FBQ2YsYUFBTyxDQUFDO0FBQ1IsaUJBQU8sU0FBUyxFQUFFLENBQUM7QUFDbkIsWUFDSSxJQUNFLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFDdEU7QUFDTixnQkFBTSxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQzNDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUNsQixNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDdEIsQ0FBQztBQUNSLGdCQUFNLE9BQU8sSUFBSSxDQUFDO0FBQ2xCLGFBQUs7QUFDTCxZQUNJLE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxzQkFBc0IsQ0FBSSxNQUFNLENBQUMsQ0FBQztBQUN6RSxZQUFJLE9BQU8sc0JBQXNCLENBQUM7QUFDbEMsUUFBRSxDQUFDO0FBRUYsS0FGRTtBQUNILElBQ1ksZUFBZSxDQUN2QixHQUFXLEVBQ1gsSUFBYyxFQUNkLE1BQWM7QUFDZixRQUNDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0MsUUFBSSxPQUFPLElBQUksQ0FBQyxVQUFVO0FBQzFCLGFBQU8sSUFBSSxDQUFNLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDNUIsWUFBUSxPQUFPO0FBQ2YsWUFBUSxjQUFjLEVBQUUsSUFBSTtBQUM1QixZQUFRLE9BQU8sRUFBRSxRQUFRO0FBQ3pCLFNBQU8sQ0FBQztBQUNSLGFBQU8sSUFBSSxDQUNILEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUNwQixZQUFVLElBQUksV0FBd0IsQ0FBQztBQUN2QyxZQUFVLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtBQUM5QixnQkFBWSxLQUFLLGFBQWEsQ0FBQyxjQUFjO0FBQzdDLG9CQUFjLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5RSxvQkFBYyxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDeEQsb0JBQWMsV0FBVyxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUM7QUFDckQsb0JBQWMsT0FBTyxXQUFXLENBQUM7QUFDakMsZ0JBQ1ksS0FBSyxhQUFhLENBQUMsUUFBUTtBQUN2QyxvQkFBYyxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwRSxvQkFBYyxPQUFPLFdBQVcsQ0FBQztBQUNqQyxnQkFBWTtBQUNaLG9CQUFjLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FDM0IsT0FBTyxFQUNQLG9CQUFvQixLQUFLLENBQUMsSUFBSSxFQUFFLENBQ2pDLENBQUM7QUFDaEIsb0JBQWMsT0FBTyxXQUFXLENBQUM7QUFDakMsYUFBVztBQUNYLFFBQVEsQ0FBQyxDQUFDLENBQ0gsQ0FBQztBQUNSLElBQUUsQ0FBQztBQUNILElBQ0U7QUFDRjtBQUNFO0FBQ0U7QUFFSixPQURLO0FBQ0wsSUFBWSxxQkFBcUIsQ0FBQyxXQUFtQixFQUFFLE1BQU0sR0FBRyxFQUFFO0FBQ2xFLFFBQUksT0FBTyxDQUFDLEtBQXdCLEVBQW1CLEVBQUU7QUFDekQsWUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN4QyxZQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLGVBQWUsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDakUsWUFBTSxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN4QixRQUFJLENBQUMsQ0FBQztBQUNOLElBQUUsQ0FBQztBQUNILElBQ0U7QUFDRjtBQUNFO0FBQ0U7QUFDRTtBQUNFO0FBRUosT0FEQztBQUNMLElBQWtCLGtCQUFrQixDQUNoQyxXQUFtQixFQUNuQixNQUFjLEVBQ2QsS0FBVTtBQUNYO0FBR0ksWUFGSCxPQUFPLENBQUMsR0FBRyxDQUNULFdBQVc7QUFDakIsZ0JBQU0sV0FBVztBQUNqQixnQkFBTSxXQUFXO0FBQ2pCLGdCQUFNLE1BQU07QUFDWixnQkFBTSxZQUFZO0FBQ2xCLGdCQUFNLEtBQUssQ0FBQyxPQUFPLENBQ2QsQ0FBQztBQUNOLFlBQ0ksTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUMzQyxxQkFBcUIsRUFDckIseUNBQXlDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FDMUQsQ0FBQztBQUNOLFlBQUksT0FBTyxJQUFJLENBQUM7QUFDaEIsUUFBRSxDQUFDO0FBRUYsS0FGRTtBQUNILElBQ0U7QUFDRjtBQUNFO0FBQ0U7QUFFSixPQURLO0FBQ0wsSUFBWSxTQUFTLENBQUMsTUFBYztBQUFJLFFBQ3BDLFFBQVEsTUFBTSxFQUFFO0FBQ3BCLFlBQU0sS0FBSyxNQUFNLENBQUMsSUFBSTtBQUN0QixnQkFBUSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDL0IsWUFBTSxLQUFLLE1BQU0sQ0FBQyxHQUFHO0FBQ3JCLGdCQUFRLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUM5QixZQUFNLEtBQUssTUFBTSxDQUFDLEtBQUssQ0FBQztBQUN4QixZQUFNO0FBQ04sZ0JBQVEsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0FBQ2xDLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFO0FBQ0Y7QUFDRTtBQUNFO0FBQ0U7QUFDRTtBQUVKLE9BREM7QUFDTCxJQUFnQixlQUFlLENBQUMsS0FBVSxFQUFFLE9BQWU7QUFBSTtBQUV6QyxZQURsQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtBQUNwQixnQkFBTSxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQzNDLGtCQUFrQixFQUNsQixPQUFPLENBQ1IsQ0FBQztBQUNSLGdCQUFNLE9BQU8sS0FBSyxDQUFDO0FBQ25CLGFBQUs7QUFDTCxZQUFJLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLFFBQUUsQ0FBQztBQUVGLEtBRkU7QUFDSCxJQUNFO0FBQ0Y7QUFDRTtBQUNFO0FBQ0U7QUFDRTtBQUVKLE9BREM7QUFDTCxJQUFnQixVQUFVLENBQUMsRUFBVSxFQUFFLE9BQWU7QUFBSTtBQUU3QixZQUR6QixJQUFJLENBQUMsRUFBRSxFQUFFO0FBQ2IsZ0JBQU0sTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUMzQyxrQkFBa0IsRUFDbEIsT0FBTyxDQUNSLENBQUM7QUFDUixnQkFBTSxPQUFPLEtBQUssQ0FBQztBQUNuQixhQUFLO0FBQ0wsWUFBSSxPQUFPLElBQUksQ0FBQztBQUNoQixRQUFFLENBQUM7QUFFSCxLQUZHO0FBQ0gsQ0FBQzs2UUFBQTtBQUNEO0FBQXlDLDRDQXhxQnBDLE1BQU0sU0FBQyxpQ0FBaUM7QUFDdEMsWUFFMkIsa0JBQWtCLHVCQUQvQyxNQUFNLFNBQUMsZ0NBQWdDO0FBQ3JDLFlBQ2UsTUFBTTtBQUMxQixZQUF3QixVQUFVO0FBQ2xDO0FBQUc7QUFoR1EsZUFBZSxvQkFIM0IsVUFBVSxDQUFDLFVBQ1YsVUFBVSxFQUFFLE1BQU0sTUFDbkIsQ0FBQyxuREFDRSxDQTBGQyxXQUFBLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQzdDLElBQ0ksV0FBQSxNQUFNLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTtBQUM3QyxHQTdGYSxlQUFlLENBaXdCM0I7Ozs7Ozs7Ozs7Ozt3RkFDRDtBQUFDLFNBbHdCWSxlQUFlO0FBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cEV2ZW50VHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2VjdXJlIH0gZnJvbSAnLi4vLi4vZW51bXMvc2VjdXJlLmVudW0nO1xuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4vX21vZGVscy9iYXNlLWRhdGEtb3B0aW9ucy5tb2RlbCc7XG4vLyBpbXBvcnQgeyBwbGFpblRvQ2xhc3NGcm9tRXhpc3QgfSBmcm9tICdjbGFzcy10cmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBVcmxVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbC91cmwvdXJsLnV0aWwnO1xuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UvYmFzZS5tb2RlbCc7XG5pbXBvcnQgeyBFcnJvckRpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9kaWFsb2dzL2Vycm9yL2Vycm9yLWRpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IER0byB9IGZyb20gJy4uLy4uL21vZGVscy9kdG8vZHRvLm1vZGVsJztcbmltcG9ydCB7IEl0ZW1EdG8gfSBmcm9tICcuLi8uLi9tb2RlbHMvZHRvL2l0ZW0tZHRvLm1vZGVsJztcbmltcG9ydCB7IENsaWVudEVycm9yUmVwb3J0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Vycm9yL2NsaWVudC1lcnJvci1yZXBvcnQubW9kZWwnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTGVhdGhlcm1hbkFwcENvbmZpZ0luamVjdGlvblRva2VuIH0gZnJvbSAnLi4vLi4vY29uZmlnL2luamVjdGlvbi10b2tlbnMvbGVhdGhlcm1hbi1hcHAtY29uZmlnLmluamVjdGlvbi10b2tlbic7XG5pbXBvcnQgeyBJTGVhdGhlcm1hbkFwcENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9hcHAuY29uZmlnJztcbmltcG9ydCB7IEVycm9yRGlhbG9nU2VydmljZUluamVjdGlvblRva2VuIH0gZnJvbSAnLi4vLi4vY29uZmlnL2luamVjdGlvbi10b2tlbnMvZXJyb3ItZGlhbG9nLXNlcnZpY2UuaW5qZWN0aW9uLXRva2VuJztcbmltcG9ydCB7IFNlYXJjaFJlc3VsdHNEdG8gfSBmcm9tICcuLi8uLi9tb2RlbHMvZHRvL3NlYXJjaC1yZXN1bHRzLWR0by5tb2RlbCc7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRzQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2R0by9zZWFyY2gtcmVzdWx0cy1jb250YWluZXIubW9kZWwnO1xuaW1wb3J0IHsgVXBsb2FkRXZlbnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvZXZlbnRzL3VwbG9hZC1ldmVudC5tb2RlbCc7XG5pbXBvcnQgeyBBcnJheUR0byB9IGZyb20gJy4uLy4uL21vZGVscy9kdG8vYXJyYXktZHRvLm1vZGVsJztcblxuLyoqXG4gKiBUaGUgYmFzZSBkYXRhIHNlcnZpY2UgZm9yIGNvbW11bmljYXRpbmcgd2l0aCBBUEkgZW5kcG9pbnRzXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEJhc2VEYXRhU2VydmljZSB7XG4gIC8vICoqKioqKioqKioqKioqKioqKioqKipcbiAgLy8gKiBQcm90ZWN0ZWQgcHJvcGVydGllc1xuICAvLyAqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgLyoqIFNldCBhY2Nlc3NvciBmb3IgdGhlIGJhc2UgZW5kcG9pbnQgKi9cbiAgcHJvdGVjdGVkIHNldCBiYXNlRW5kcG9pbnQoYmFzZUVuZHBvaW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9iYXNlRW5kcG9pbnQgPSBiYXNlRW5kcG9pbnQ7XG4gICAgaWYgKHRoaXMuX2Jhc2VFbmRwb2ludC5zdGFydHNXaXRoKCcvJykgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLl9iYXNlRW5kcG9pbnQgPSAnLycgKyB0aGlzLl9iYXNlRW5kcG9pbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9iYXNlRW5kcG9pbnQuZW5kc1dpdGgoJy8nKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuX2Jhc2VFbmRwb2ludCA9IHRoaXMuX2Jhc2VFbmRwb2ludCArICcvJztcbiAgICB9XG4gIH1cblxuICAvKiogU2V0IGFjY2Vzc29yIGZvciB0aGUgYmFzZSBlbmRwb2ludCAqL1xuICBwcm90ZWN0ZWQgZ2V0IGJhc2VFbmRwb2ludCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9iYXNlRW5kcG9pbnQ7XG4gIH1cblxuICAvKiogVGhlIGJhc2UgZW5kcG9pbnQgKi9cbiAgcHJpdmF0ZSBfYmFzZUVuZHBvaW50OiBzdHJpbmc7XG5cbiAgLyoqIFNldCBhY2Nlc3NvciBmb3IgdGhlIGRhdGEgc2VydmljZSdzIGl0ZW0gZGF0YSB0eXBlICovXG4gIHByb3RlY3RlZCBzZXQgdHlwZSh0eXBlOiBhbnkpIHtcbiAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgfVxuXG4gIC8qKiBUaGUgZGF0YSBzZXJ2aWNlJ3MgaXRlbSBkYXRhIHR5cGUgKi9cbiAgcHJpdmF0ZSBfdHlwZTogYW55O1xuXG4gIC8qKiBTZXQgYWNjZXNzb3IgZm9yIHRoZSBhcGkgcm9vdCAqL1xuICBwcm90ZWN0ZWQgZ2V0IGFwaVJvb3QoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5jb25maWcuYXBpUm9vdCkge1xuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnNlcnZlclVybCArICcvJyArIHRoaXMuY29uZmlnLmFwaVJvb3Q7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5zZXJ2ZXJVcmw7XG4gIH1cblxuICAvKiogR2V0IGFjY2Vzc29yIGZvciB0aGUgQVBJIGtleSAgKi9cbiAgcHJvdGVjdGVkIGdldCBhcGlLZXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuYXBpS2V5O1xuICB9XG5cbiAgLyoqIEdldCBhY2Nlc3NvciBmb3IgdGhlIG5vIHRva2VuIGhlYWRlciAqL1xuICBwcm90ZWN0ZWQgZ2V0IG5vVG9rZW5IZWFkZXIoKTogSHR0cEhlYWRlcnMge1xuICAgIHJldHVybiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDYWNoZS1Db250cm9sJzogJ25vLWNhY2hlJyxcbiAgICAgIFByYWdtYTogJ25vLWNhY2hlJyxcbiAgICAgIEV4cGlyZXM6ICdTYXQsIDAxIEphbiAyMDAwIDAwOjAwOjAwIEdNVCdcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBHZXQgYWNjZXNzb3IgdG8gdGhlIGhlYWRlciB0byB1c2Ugd2hlbiB0aGUgQVBJIGVuZHBvaW50IGlzIHNlY3VyZWQgd2l0aCBhbiBBUEkga2V5ICovXG4gIHByb3RlY3RlZCBnZXQgYXBpSGVhZGVyKCk6IEh0dHBIZWFkZXJzIHtcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMuYXBpS2V5ID8gJ0JlYXJlciAnICsgdGhpcy5hcGlLZXkgOiAnJztcbiAgICBjb25zdCBhcGlIZWFkZXIgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnLFxuICAgICAgUHJhZ21hOiAnbm8tY2FjaGUnLFxuICAgICAgRXhwaXJlczogJ1NhdCwgMDEgSmFuIDIwMDAgMDA6MDA6MDAgR01UJ1xuICAgIH0pO1xuICAgIHJldHVybiBhcGlIZWFkZXI7XG4gIH1cblxuICAvKiogR2V0IGFjY2Nlc3NvciBmb3IgdGhlIGhlYWRlciB0byB1c2Ugd2hlbiB0aGUgQVBJIGVuZHBvaXQgaXMgc2VjdXJlZCB3aXRoIGEgSldUIHRva2VuICovXG4gIHByb3RlY3RlZCBnZXQgYXV0aEhlYWRlcigpOiBIdHRwSGVhZGVycyB7XG4gICAgY29uc3QgbG9jYWxTdG9yYWdlVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmNvbmZpZy5qd3RUb2tlbk5hbWUpO1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlVG9rZW4gPyAnQmVhcmVyICcgKyBsb2NhbFN0b3JhZ2VUb2tlbiA6ICcnO1xuICAgIGNvbnN0IGF1dGhIZWFkZXIgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnLFxuICAgICAgUHJhZ21hOiAnbm8tY2FjaGUnLFxuICAgICAgRXhwaXJlczogJ1NhdCwgMDEgSmFuIDIwMDAgMDA6MDA6MDAgR01UJ1xuICAgIH0pO1xuICAgIHJldHVybiBhdXRoSGVhZGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSBjb25maWcgLSBUaGUgYXBwIGNvbmZpZyBvYmplY3RcbiAgICogQHBhcmFtIGVycm9yRGlhbG9nU2VydmljZSAtIEEgcmVmZXJlbmNlIHRvIHRoZSBlcnJvciBkaWFsb2cgc2VydmljZVxuICAgKiBAcGFyYW0gcm91dGVyIC0gQSByZWZlcmVuY2UgdG8gdGhlIHJvdXRlclxuICAgKiBAcGFyYW0gaHR0cENsaWVudCAtIEEgcmVmZXJlbmNlIHRvIHRoZSBIVFRQIGNsaWVudCBzZXJ2aWNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KExlYXRoZXJtYW5BcHBDb25maWdJbmplY3Rpb25Ub2tlbilcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBJTGVhdGhlcm1hbkFwcENvbmZpZyxcbiAgICBASW5qZWN0KEVycm9yRGlhbG9nU2VydmljZUluamVjdGlvblRva2VuKVxuICAgIHByb3RlY3RlZCBlcnJvckRpYWxvZ1NlcnZpY2U6IEVycm9yRGlhbG9nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJvdGVjdGVkIGh0dHBDbGllbnQ6IEh0dHBDbGllbnRcbiAgKSB7IH1cblxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vICogUHJvdGVjdGVkIG1ldGhvZHNcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKlxuXG4gIC8qKlxuICAgKiBDYWxsIGEgc3RhbmRhcmQgZGVsZXRlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gaWQgLSBUaGUgSUQgb2YgdGhlIGl0ZW0gdG8gYmUgZGVsZXRlZFxuICAgKiBAcGFyYW0gc2VjdXJlIC0gRW51bSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIEFQSSBlbmRwb2ludCBpcyBzZWN1cmVcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZGVsZXRlIHN1Y2NlZWRlZFxuICAgKiBAYXN5bmNcbiAgICovXG4gIHByb3RlY3RlZCBhc3luYyBfZGVsZXRlKGlkOiBzdHJpbmcsIHNlY3VyZTogU2VjdXJlKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKFxuICAgICAgKGF3YWl0IHRoaXMudmFsaWRhdGVJZChpZCwgJ0Vycm9yIGRlbGV0aW5nIGEgcmVjb3JkLiBJbnZhbGlkIElELicpKSA9PT1cbiAgICAgIGZhbHNlXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLmdldEhlYWRlcihzZWN1cmUpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuaHR0cENsaWVudFxuICAgICAgLmRlbGV0ZTxEdG8+KFVybFV0aWwuam9pbih0aGlzLmFwaVJvb3QsIHRoaXMuX2Jhc2VFbmRwb2ludCwgaWQpLCB7XG4gICAgICAgIGhlYWRlcnNcbiAgICAgIH0pXG4gICAgICAudG9Qcm9taXNlKCk7XG5cbiAgICBpZiAoRHRvLmlzRXJyb3IocmVzdWx0LnN0YXR1cy5jb2RlKSkge1xuICAgICAgYXdhaXQgdGhpcy5lcnJvckRpYWxvZ1NlcnZpY2Uub3BlbkVycm9yRGlhbG9nKFxuICAgICAgICByZXN1bHQuc3RhdHVzLnRleHQsXG4gICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZVxuICAgICAgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIGEgbm9uLXN0YW5kYXJkIGRlbGV0ZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgcmVxdWVzdCBvcHRpb25zXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGRlbGV0ZSBzdWNjZWVkZWRcbiAgICogQGFzeW5jXG4gICAqL1xuICBwcm90ZWN0ZWQgYXN5bmMgX2RlbGV0ZVdpdGhPcHRpb25zKG9wdGlvbnM6IE9wdGlvbnMpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBsZXQgdXJsOiBzdHJpbmc7XG4gICAgaWYgKG9wdGlvbnMudXJsKSB7XG4gICAgICB1cmwgPSBvcHRpb25zLnVybDtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gVXJsVXRpbC5qb2luKHRoaXMuYXBpUm9vdCwgdGhpcy5fYmFzZUVuZHBvaW50LCBvcHRpb25zLnVybCk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmlkKSB7XG4gICAgICB1cmwgPSBVcmxVdGlsLmpvaW4odXJsLCBvcHRpb25zLmlkKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMucGFyYW1ldGVycy5oYXNQYXJhbWV0ZXJzKSB7XG4gICAgICB1cmwgPSBVcmxVdGlsLmpvaW4odXJsLCBvcHRpb25zLnBhcmFtZXRlcnMuZ2V0UGFyYW10ZXJTdHJpbmcoKSk7XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLmdldEhlYWRlcihvcHRpb25zLnNlY3VyZSk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5odHRwQ2xpZW50XG4gICAgICAuZGVsZXRlPER0bz4odXJsLCB7XG4gICAgICAgIGhlYWRlcnNcbiAgICAgIH0pXG4gICAgICAudG9Qcm9taXNlKCk7XG5cbiAgICBpZiAoRHRvLmlzRXJyb3IocmVzdWx0LnN0YXR1cy5jb2RlLCBvcHRpb25zLnN1cHByZXNzZWRFcnJvcnMpKSB7XG4gICAgICBhd2FpdCB0aGlzLmVycm9yRGlhbG9nU2VydmljZS5vcGVuRXJyb3JEaWFsb2coXG4gICAgICAgIHJlc3VsdC5zdGF0dXMudGV4dCxcbiAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlXG4gICAgICApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhbGwgdGVzdCBhcnRpZmFjdHNcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgZGVsZXRlIHN1Y2NlZGVkXG4gICAqIEBhc3luY1xuICAgKi9cbiAgcHVibGljIGFzeW5jIF9kZWxldGVUZXN0QXJ0aWZhY3RzKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBuZXcgT3B0aW9ucygpO1xuICAgIG9wdGlvbnMudXJsID0gVXJsVXRpbC5qb2luKFxuICAgICAgdGhpcy5hcGlSb290LFxuICAgICAgdGhpcy5iYXNlRW5kcG9pbnQsXG4gICAgICAnZGVsZXRldGVzdGFydGlmYWN0cydcbiAgICApO1xuICAgIG9wdGlvbnMuc2VjdXJlID0gU2VjdXJlLnRydWU7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuX2RlbGV0ZVdpdGhPcHRpb25zKG9wdGlvbnMpLmNhdGNoKGFzeW5jIGVyciA9PiB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5oYW5kbGVQcm9taXNlRXJyb3IoXG4gICAgICAgICdCYXNlRGF0YVNlcnZpY2UnLFxuICAgICAgICAnX2RlbGV0ZVRlc3RBcnRpZmFjdHMnLFxuICAgICAgICBlcnJcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbCBhIHN0YW5kYXJkIGdldCBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGlkIC0gVGhlIElEIG9mIHRoZSBpdGVtIHRvIGdldFxuICAgKiBAcGFyYW0gc2VjdXJlIC0gRW51bSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIEFQSSBlbmRwb2ludCBpcyBzZWN1cmVcbiAgICogQHJldHVybnMgVGhlIGl0ZW0gaWYgdGhlIGdldCBzdWNjZWVkZWRcbiAgICogQGFzeW5jXG4gICAqL1xuICBwcm90ZWN0ZWQgYXN5bmMgX2dldDxUPihpZDogc3RyaW5nLCBzZWN1cmU6IFNlY3VyZSk6IFByb21pc2U8VD4ge1xuICAgIC8vIFZhbGlkYXRlIHRoZSBwYXNzZWQgSURcbiAgICB0aGlzLnZhbGlkYXRlSWQoaWQsICdFcnJvciBnZXR0aW5nIGEgcmVjb3JkLiBJbnZhbGlkIElELicpO1xuICAgIC8vIEdldCB0aGUgYXBwcm9wcmlhdGUgaGVhZGVyIG9iamVjdFxuICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLmdldEhlYWRlcihzZWN1cmUpO1xuICAgIC8vIE1ha2UgYW4gYXN5bmMgY2FsbCB1c2luZyB0aGUgaHR0cENsaWVudC4gRXhwZWN0IHRoZSByZXN1bHQgdG8gYmUgYW4gSXRlbUR0byBvYmplY3RcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmh0dHBDbGllbnRcbiAgICAgIC5nZXQ8SXRlbUR0bzxUPj4oVXJsVXRpbC5qb2luKHRoaXMuYXBpUm9vdCwgdGhpcy5fYmFzZUVuZHBvaW50LCBpZCksIHtcbiAgICAgICAgaGVhZGVyc1xuICAgICAgfSlcbiAgICAgIC8vIENvbnZlcnQgdGhlIHJlc3VsdCB0byBhIHByb21pc2VcbiAgICAgIC50b1Byb21pc2UoKTtcblxuICAgIC8vIElmIHRoZSByZXR1cm5lZCBzdGF0dXMgY29kZSBpcyBub3QgYSBzdWNjZXNzIGNvZGUgdGhlblxuICAgIGlmIChEdG8uaXNFcnJvcihyZXN1bHQuc3RhdHVzLmNvZGUpKSB7XG4gICAgICAvLyBPcGVuIHRoZSBlcnJvciBkaWFsb2dcbiAgICAgIHRoaXMuZXJyb3JEaWFsb2dTZXJ2aWNlLm9wZW5FcnJvckRpYWxvZyhcbiAgICAgICAgcmVzdWx0LnN0YXR1cy50ZXh0LFxuICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2VcbiAgICAgICk7XG4gICAgICAvLyBSZXR1cm4gbnVsbFxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHJldHVybmVkIGRhdGEgaXMgbm90IGFuIG9iamVjdCwgcmV0dXJuIHRoZSBvYmplY3Qgd2l0aCBjYXN0aW5nIGl0XG4gICAgaWYgKHR5cGVvZiByZXN1bHQuZGF0YSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgICB9XG5cbiAgICAvLyAvLyBDYXN0IHRoZSBvYmplY3QgdG8gdGhlIGFwcHJvcHJpYXRlIGNsYXNzXG4gICAgLy8gY29uc3QgZGF0YSA9IHBsYWluVG9DbGFzc0Zyb21FeGlzdCh0aGlzLl90eXBlLCByZXN1bHQuZGF0YSk7XG5cbiAgICAvLyBSZXR1cm4gdGhlIG9iamVjdFxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIC8vIF9nZXRPYnNlcnZhYmxlXG4gIHByb3RlY3RlZCBfZ2V0T2JzZXJ2YWJsZTxUPihpZDogc3RyaW5nLCBzZWN1cmU6IFNlY3VyZSk6IE9ic2VydmFibGU8VD4ge1xuICAgIC8vIFZhbGlkYXRlIHRoZSBwYXNzZWQgSURcbiAgICB0aGlzLnZhbGlkYXRlSWQoaWQsICdFcnJvciBnZXR0aW5nIGEgcmVjb3JkLiBJbnZhbGlkIElELicpO1xuICAgIC8vIEdldCB0aGUgYXBwcm9wcmlhdGUgaGVhZGVyIG9iamVjdFxuICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLmdldEhlYWRlcihzZWN1cmUpO1xuICAgIC8vIE1ha2UgYW4gYXN5bmMgY2FsbCB1c2luZyB0aGUgaHR0cENsaWVudC4gRXhwZWN0IHRoZSByZXN1bHQgdG8gYmUgYW4gSXRlbUR0byBvYmplY3RcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50XG4gICAgICAuZ2V0PEl0ZW1EdG88VD4+KFVybFV0aWwuam9pbih0aGlzLmFwaVJvb3QsIHRoaXMuX2Jhc2VFbmRwb2ludCwgaWQpLCB7XG4gICAgICAgIGhlYWRlcnNcbiAgICAgIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKHJlc3VsdCA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIGEgbm9uLXN0YW5kYXJkIGdldCBBUEkgZW5kcG9pbnQgdGhhdCByZXR1cm5zIGFuIG9ic2VydmFibGVcbiAgICogQHBhcmFtIGlkIC0gVGhlIElEIG9mIHRoZSBpdGVtIHRvIGdldFxuICAgKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSByZXF1ZXN0IG9wdGlvbnNcbiAgICogQHJldHVybnMgVGhlIGl0ZW0gaWYgdGhlIGdldCBzdWNjZWVkZWQgKGFzIGFuIG9ic2VydmFibGUpXG4gICAqIEBhc3luY1xuICAgKi9cbiAgcHJvdGVjdGVkIF9nZXRPYnNlcnZhYmxlV2l0aE9wdGlvbnM8VD4ob3B0aW9uczogT3B0aW9ucyk6IE9ic2VydmFibGU8VD4ge1xuICAgIGxldCB1cmw6IHN0cmluZztcbiAgICBpZiAob3B0aW9ucy51cmwpIHtcbiAgICAgIHVybCA9IG9wdGlvbnMudXJsO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSBVcmxVdGlsLmpvaW4odGhpcy5hcGlSb290LCB0aGlzLl9iYXNlRW5kcG9pbnQsIG9wdGlvbnMudXJsKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuaWQpIHtcbiAgICAgIHVybCA9IFVybFV0aWwuam9pbih1cmwsIG9wdGlvbnMuaWQpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5wYXJhbWV0ZXJzLmhhc1BhcmFtZXRlcnMpIHtcbiAgICAgIHVybCA9IFVybFV0aWwuam9pbih1cmwsIG9wdGlvbnMucGFyYW1ldGVycy5nZXRQYXJhbXRlclN0cmluZygpKTtcbiAgICB9XG4gICAgY29uc3QgaGVhZGVycyA9IHRoaXMuZ2V0SGVhZGVyKG9wdGlvbnMuc2VjdXJlKTtcbiAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50XG4gICAgICAuZ2V0PEl0ZW1EdG88VD4+KHVybCwge1xuICAgICAgICBoZWFkZXJzXG4gICAgICB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChyZXN1bHQgPT4ge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbCBhIG5vbi1zdGFuZGFyZCBnZXQgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIHJlcXVlc3Qgb3B0aW9uc1xuICAgKiBAcmV0dXJucyBUaGUgaXRlbSBpZiB0aGUgZ2V0IHN1Y2NlZWRlZFxuICAgKiBAYXN5bmNcbiAgICovXG4gIHByb3RlY3RlZCBhc3luYyBfZ2V0V2l0aE9wdGlvbnM8VD4ob3B0aW9uczogT3B0aW9ucyk6IFByb21pc2U8VD4ge1xuICAgIGxldCB1cmw6IHN0cmluZztcbiAgICBpZiAob3B0aW9ucy51cmwpIHtcbiAgICAgIHVybCA9IG9wdGlvbnMudXJsO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSBVcmxVdGlsLmpvaW4odGhpcy5hcGlSb290LCB0aGlzLl9iYXNlRW5kcG9pbnQsIG9wdGlvbnMudXJsKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuaWQpIHtcbiAgICAgIHVybCA9IFVybFV0aWwuam9pbih1cmwsIG9wdGlvbnMuaWQpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5wYXJhbWV0ZXJzLmhhc1BhcmFtZXRlcnMpIHtcbiAgICAgIHVybCA9IFVybFV0aWwuam9pbih1cmwsIG9wdGlvbnMucGFyYW1ldGVycy5nZXRQYXJhbXRlclN0cmluZygpKTtcbiAgICAgIGNvbnNvbGUubG9nKCdDYWNoZSBidXN0aW5nIFVSTDonICsgdXJsKTtcbiAgICB9XG4gICAgY29uc3QgaGVhZGVycyA9IHRoaXMuZ2V0SGVhZGVyKG9wdGlvbnMuc2VjdXJlKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmh0dHBDbGllbnRcbiAgICAgIC5nZXQ8SXRlbUR0bzxUPj4odXJsLCB7XG4gICAgICAgIGhlYWRlcnNcbiAgICAgIH0pXG4gICAgICAudG9Qcm9taXNlKCk7XG5cbiAgICBpZiAoRHRvLmlzRXJyb3IocmVzdWx0LnN0YXR1cy5jb2RlLCBvcHRpb25zLnN1cHByZXNzZWRFcnJvcnMpKSB7XG4gICAgICBhd2FpdCB0aGlzLmVycm9yRGlhbG9nU2VydmljZS5vcGVuRXJyb3JEaWFsb2coXG4gICAgICAgIHJlc3VsdC5zdGF0dXMudGV4dCxcbiAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlXG4gICAgICApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5kYXRhID09PSBudWxsIHx8IHJlc3VsdC5kYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVzdWx0LmRhdGEgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gICAgfVxuXG4gICAgLy8gbGV0IGRhdGE6IFQ7XG4gICAgLy8gaWYgKG9wdGlvbnMub2JqZWN0VHlwZSkge1xuICAgIC8vICAgZGF0YSA9IHBsYWluVG9DbGFzc0Zyb21FeGlzdChvcHRpb25zLm9iamVjdFR5cGUsIHJlc3VsdC5kYXRhKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgZGF0YSA9IHBsYWluVG9DbGFzc0Zyb21FeGlzdCh0aGlzLl90eXBlLCByZXN1bHQuZGF0YSk7XG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgYSBzdGFuZGFyZCBnZXQgbWFueSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIHNlY3VyZSAtIEVudW0gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBBUEkgZW5kcG9pbnQgaXMgc2VjdXJlXG4gICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIGl0ZW1zIGlmIHRoZSBnZXQgc3VjY2VlZGVkXG4gICAqIEBhc3luY1xuICAgKi9cbiAgcHJvdGVjdGVkIGFzeW5jIF9nZXRNYW55PFQ+KHNlY3VyZTogU2VjdXJlKTogUHJvbWlzZTxUW10+IHtcbiAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5nZXRIZWFkZXIoc2VjdXJlKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmh0dHBDbGllbnRcbiAgICAgIC5nZXQ8QXJyYXlEdG88VD4+KFVybFV0aWwuam9pbih0aGlzLmFwaVJvb3QsIHRoaXMuX2Jhc2VFbmRwb2ludCksIHtcbiAgICAgICAgaGVhZGVyc1xuICAgICAgfSlcbiAgICAgIC50b1Byb21pc2UoKTtcblxuICAgIGlmIChEdG8uaXNFcnJvcihyZXN1bHQuc3RhdHVzLmNvZGUpKSB7XG4gICAgICBhd2FpdCB0aGlzLmVycm9yRGlhbG9nU2VydmljZS5vcGVuRXJyb3JEaWFsb2coXG4gICAgICAgIHJlc3VsdC5zdGF0dXMudGV4dCxcbiAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlXG4gICAgICApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgYSBub24tc3RhbmRhcmQgZ2V0IG1hbnkgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIHJlcXVlc3Qgb3B0aW9uc1xuICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiBpdGVtcyBpZiB0aGUgZ2V0IHN1Y2NlZWRlZFxuICAgKiBAYXN5bmNcbiAgICovXG4gIHByb3RlY3RlZCBhc3luYyBfZ2V0TWFueVdpdGhPcHRpb25zPFQ+KG9wdGlvbnM6IE9wdGlvbnMpOiBQcm9taXNlPFRbXT4ge1xuICAgIGxldCB1cmw6IHN0cmluZztcbiAgICBpZiAob3B0aW9ucy51cmwpIHtcbiAgICAgIHVybCA9IG9wdGlvbnMudXJsO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSBVcmxVdGlsLmpvaW4odGhpcy5hcGlSb290LCB0aGlzLl9iYXNlRW5kcG9pbnQsIG9wdGlvbnMudXJsKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuaWQpIHtcbiAgICAgIHVybCA9IFVybFV0aWwuam9pbih1cmwsIG9wdGlvbnMuaWQpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5wYXJhbWV0ZXJzLmhhc1BhcmFtZXRlcnMpIHtcbiAgICAgIHVybCA9IFVybFV0aWwuam9pbih1cmwsIG9wdGlvbnMucGFyYW1ldGVycy5nZXRQYXJhbXRlclN0cmluZygpKTtcbiAgICB9XG4gICAgY29uc3QgaGVhZGVycyA9IHRoaXMuZ2V0SGVhZGVyKG9wdGlvbnMuc2VjdXJlKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmh0dHBDbGllbnRcbiAgICAgIC5nZXQ8QXJyYXlEdG88VD4+KHVybCwgeyBoZWFkZXJzIH0pXG4gICAgICAudG9Qcm9taXNlKCk7XG5cbiAgICBpZiAoRHRvLmlzRXJyb3IocmVzdWx0LnN0YXR1cy5jb2RlLCBvcHRpb25zLnN1cHByZXNzZWRFcnJvcnMpKSB7XG4gICAgICBhd2FpdCB0aGlzLmVycm9yRGlhbG9nU2VydmljZS5vcGVuRXJyb3JEaWFsb2coXG4gICAgICAgIHJlc3VsdC5zdGF0dXMudGV4dCxcbiAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlXG4gICAgICApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgYSBzdGFuZGFyZCBwb3N0IEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gb2JqZWN0IC0gVGhlIG9iamVjdCB0byBwb3N0XG4gICAqIEBwYXJhbSBzZWN1cmUgLSBFbnVtIGluZGljYXRpbmcgd2hldGhlciB0aGUgQVBJIGVuZHBvaW50IGlzIHNlY3VyZVxuICAgKiBAcGFyYW0gdmFsaWRhdGVJZCAtIEJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZW4gb2JqZWN0J3MgSUQgc2hvdWxkIGJlIHZhbGlkYXRlZFxuICAgKiBAcmV0dXJucyBUaGUgcG9zdGVkIG9iamVjdFxuICAgKiBAYXN5bmNcbiAgICovXG4gIHByb3RlY3RlZCBhc3luYyBfcG9zdDxUPihcbiAgICBvYmplY3Q6IGFueSxcbiAgICBzZWN1cmU6IFNlY3VyZSxcbiAgICB2YWxpZGF0ZUlkOiBib29sZWFuID0gdHJ1ZVxuICApOiBQcm9taXNlPFQ+IHtcbiAgICBpZiAodmFsaWRhdGVJZCkge1xuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy52YWxpZGF0ZU1vZGVsSWQoXG4gICAgICAgICAgb2JqZWN0LFxuICAgICAgICAgICdFcnJvciBwb3N0aW5nIGEgcmVjb3JkLiBJbnZhbGlkIG1vZGVsIElELidcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5nZXRIZWFkZXIoc2VjdXJlKTtcbiAgICBjb25zdCB1cmwgPSBVcmxVdGlsLmpvaW4odGhpcy5hcGlSb290LCB0aGlzLl9iYXNlRW5kcG9pbnQpO1xuXG4gICAgbGV0IHJlc3VsdDogSXRlbUR0bzxUPjtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gYXdhaXQgdGhpcy5odHRwQ2xpZW50XG4gICAgICAgIC5wb3N0PEl0ZW1EdG88VD4+KFxuICAgICAgICAgIFVybFV0aWwuam9pbih0aGlzLmFwaVJvb3QsIHRoaXMuX2Jhc2VFbmRwb2ludCksXG4gICAgICAgICAgb2JqZWN0LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlcnNcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLnRvUHJvbWlzZSgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZygnKioqKioqKioqKicpO1xuICAgICAgY29uc29sZS5sb2coJ0hUVFAgUG9zdCBFcnJvcicpO1xuICAgICAgY29uc29sZS5sb2coJ1VSTDogJyArIHVybCk7XG4gICAgICBjb25zb2xlLmxvZyhvYmplY3QpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuXG4gICAgaWYgKER0by5pc0Vycm9yKHJlc3VsdC5zdGF0dXMuY29kZSkpIHtcbiAgICAgIGF3YWl0IHRoaXMuZXJyb3JEaWFsb2dTZXJ2aWNlLm9wZW5FcnJvckRpYWxvZyhcbiAgICAgICAgcmVzdWx0LnN0YXR1cy50ZXh0LFxuICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2VcbiAgICAgICk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbCBhIG5vbi1zdGFuZGFyZCBwb3N0IEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gb2JqZWN0IC0gVGhlIG9iamVjdCB0byBwb3N0XG4gICAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIHJlcXVlc3Qgb3B0aW9uc1xuICAgKiBAcmV0dXJucyBUaGUgcG9zdGVkIG9iamVjdFxuICAgKiBAYXN5bmNcbiAgICovXG4gIHByb3RlY3RlZCBhc3luYyBfcG9zdFdpdGhPcHRpb25zPFQ+KFxuICAgIG9iamVjdDogYW55LFxuICAgIG9wdGlvbnM6IE9wdGlvbnNcbiAgKTogUHJvbWlzZTxUPiB7XG4gICAgaWYgKG9wdGlvbnMudmFsaWRhdGVJZCkge1xuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy52YWxpZGF0ZU1vZGVsSWQoXG4gICAgICAgICAgb2JqZWN0LFxuICAgICAgICAgICdFcnJvciBwb3N0aW5nIGEgcmVjb3JkLiBJbnZhbGlkIG1vZGVsIElELidcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgdXJsOiBzdHJpbmc7XG4gICAgaWYgKG9wdGlvbnMudXJsKSB7XG4gICAgICB1cmwgPSBvcHRpb25zLnVybDtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gVXJsVXRpbC5qb2luKHRoaXMuYXBpUm9vdCwgdGhpcy5fYmFzZUVuZHBvaW50LCBvcHRpb25zLnVybCk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmlkKSB7XG4gICAgICB1cmwgKz0gb3B0aW9ucy5pZDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMucGFyYW1ldGVycy5oYXNQYXJhbWV0ZXJzKSB7XG4gICAgICB1cmwgKz0gb3B0aW9ucy5wYXJhbWV0ZXJzLmdldFBhcmFtdGVyU3RyaW5nKCk7XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLmdldEhlYWRlcihvcHRpb25zLnNlY3VyZSk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmh0dHBDbGllbnRcbiAgICAgIC5wb3N0PEl0ZW1EdG88VD4+KHVybCwgb2JqZWN0LCB7XG4gICAgICAgIGhlYWRlcnNcbiAgICAgIH0pXG4gICAgICAudG9Qcm9taXNlKCk7XG5cbiAgICBpZiAoRHRvLmlzRXJyb3IocmVzdWx0LnN0YXR1cy5jb2RlLCBvcHRpb25zLnN1cHByZXNzZWRFcnJvcnMpKSB7XG4gICAgICBhd2FpdCB0aGlzLmVycm9yRGlhbG9nU2VydmljZS5vcGVuRXJyb3JEaWFsb2coXG4gICAgICAgIHJlc3VsdC5zdGF0dXMudGV4dCxcbiAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlXG4gICAgICApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgYSBzdGFuZGFyZCBwdXQgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBvYmplY3QgLSBUaGUgb2JqZWN0IHRvIHB1dFxuICAgKiBAcGFyYW0gc2VjdXJlIC0gRW51bSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIEFQSSBlbmRwb2ludCBpcyBzZWN1cmVcbiAgICogQHBhcmFtIHZhbGlkYXRlSWQgLSBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGVuIG9iamVjdCdzIElEIHNob3VsZCBiZSB2YWxpZGF0ZWRcbiAgICogQHJldHVybnMgVGhlIHVwZGF0ZWQgb2JqZWN0XG4gICAqIEBhc3luY1xuICAgKi9cbiAgcHJvdGVjdGVkIGFzeW5jIF9wdXQ8VCBleHRlbmRzIEJhc2VNb2RlbD4oXG4gICAgb2JqZWN0OiBhbnksXG4gICAgc2VjdXJlOiBTZWN1cmUsXG4gICAgdmFsaWRhdGVJZDogYm9vbGVhbiA9IHRydWVcbiAgKTogUHJvbWlzZTxUPiB7XG4gICAgaWYgKG9iamVjdCAmJiB2YWxpZGF0ZUlkKSB7XG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLnZhbGlkYXRlTW9kZWxJZChcbiAgICAgICAgICBvYmplY3QsXG4gICAgICAgICAgJ0Vycm9yIHB1dHRpbmcgYSByZWNvcmQuIEludmFsaWQgbW9kZWwgSUQuJ1xuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLmdldEhlYWRlcihzZWN1cmUpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuaHR0cENsaWVudFxuICAgICAgLnB1dDxJdGVtRHRvPFQ+PihcbiAgICAgICAgVXJsVXRpbC5qb2luKHRoaXMuYXBpUm9vdCwgdGhpcy5fYmFzZUVuZHBvaW50LCBvYmplY3QuX2lkKSxcbiAgICAgICAgb2JqZWN0LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyc1xuICAgICAgICB9XG4gICAgICApXG4gICAgICAudG9Qcm9taXNlKCk7XG5cbiAgICBpZiAoRHRvLmlzRXJyb3IocmVzdWx0LnN0YXR1cy5jb2RlKSkge1xuICAgICAgYXdhaXQgdGhpcy5lcnJvckRpYWxvZ1NlcnZpY2Uub3BlbkVycm9yRGlhbG9nKFxuICAgICAgICByZXN1bHQuc3RhdHVzLnRleHQsXG4gICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZVxuICAgICAgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIGEgbm9uLXN0YW5kYXJkIHB1dCBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIG9iamVjdCAtIFRoZSBvYmplY3QgdG8gcHV0XG4gICAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIHJlcXVlc3Qgb3B0aW9uc1xuICAgKiBAcmV0dXJucyBUaGUgdXBkYXRlZCBvYmplY3RcbiAgICogQGFzeW5jXG4gICAqL1xuICBwcm90ZWN0ZWQgYXN5bmMgX3B1dFdpdGhPcHRpb25zPFQ+KFxuICAgIG9wdGlvbnM6IE9wdGlvbnMsXG4gICAgb2JqZWN0PzogYW55XG4gICk6IFByb21pc2U8VD4ge1xuICAgIGlmIChvYmplY3QgJiYgb3B0aW9ucy52YWxpZGF0ZUlkKSB7XG4gICAgICBpZiAoXG4gICAgICAgICF0aGlzLnZhbGlkYXRlTW9kZWxJZChcbiAgICAgICAgICBvYmplY3QsXG4gICAgICAgICAgJ0Vycm9yIHB1dHRpbmcgYSByZWNvcmQuIEludmFsaWQgbW9kZWwgSUQuJ1xuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCB1cmw6IHN0cmluZztcbiAgICBpZiAob3B0aW9ucy51cmwpIHtcbiAgICAgIHVybCA9IG9wdGlvbnMudXJsO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSBVcmxVdGlsLmpvaW4odGhpcy5hcGlSb290LCB0aGlzLl9iYXNlRW5kcG9pbnQsIG9wdGlvbnMudXJsKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuaWQpIHtcbiAgICAgIHVybCA9IFVybFV0aWwuam9pbih1cmwsIG9wdGlvbnMuaWQpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5wYXJhbWV0ZXJzLmhhc1BhcmFtZXRlcnMpIHtcbiAgICAgIHVybCA9IFVybFV0aWwuam9pbih1cmwsIG9wdGlvbnMucGFyYW1ldGVycy5nZXRQYXJhbXRlclN0cmluZygpKTtcbiAgICB9XG4gICAgY29uc3QgaGVhZGVycyA9IHRoaXMuZ2V0SGVhZGVyKG9wdGlvbnMuc2VjdXJlKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmh0dHBDbGllbnRcbiAgICAgIC5wdXQ8SXRlbUR0bzxUPj4odXJsLCBvYmplY3QsIHtcbiAgICAgICAgaGVhZGVyc1xuICAgICAgfSlcbiAgICAgIC50b1Byb21pc2UoKTtcblxuICAgIGlmIChEdG8uaXNFcnJvcihyZXN1bHQuc3RhdHVzLmNvZGUsIG9wdGlvbnMuc3VwcHJlc3NlZEVycm9ycykpIHtcbiAgICAgIGF3YWl0IHRoaXMuZXJyb3JEaWFsb2dTZXJ2aWNlLm9wZW5FcnJvckRpYWxvZyhcbiAgICAgICAgcmVzdWx0LnN0YXR1cy50ZXh0LFxuICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2VcbiAgICAgICk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gIH1cblxuICBwcm90ZWN0ZWQgYXN5bmMgX3NlYXJjaFdpdGhPcHRpb25zPFQ+KFxuICAgIG9wdGlvbnM6IE9wdGlvbnNcbiAgKTogUHJvbWlzZTxTZWFyY2hSZXN1bHRzQ29udGFpbmVyPFQ+PiB7XG4gICAgbGV0IHVybDogc3RyaW5nO1xuICAgIGlmIChvcHRpb25zLnVybCkge1xuICAgICAgdXJsID0gb3B0aW9ucy51cmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IFVybFV0aWwuam9pbih0aGlzLmFwaVJvb3QsIHRoaXMuYmFzZUVuZHBvaW50LCBvcHRpb25zLnVybCk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmlkKSB7XG4gICAgICB1cmwgPSBVcmxVdGlsLmpvaW4odXJsLCBvcHRpb25zLmlkKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMucGFyYW1ldGVycy5oYXNQYXJhbWV0ZXJzKSB7XG4gICAgICB1cmwgPSBVcmxVdGlsLmpvaW4odXJsLCBvcHRpb25zLnBhcmFtZXRlcnMuZ2V0UGFyYW10ZXJTdHJpbmcoKSk7XG4gICAgICBjb25zb2xlLmxvZygnQ2FjaGUgYnVzdGluZyBVUkw6JyArIHVybCk7XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLmdldEhlYWRlcihvcHRpb25zLnNlY3VyZSk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5odHRwQ2xpZW50XG4gICAgICAuZ2V0PFNlYXJjaFJlc3VsdHNEdG88VD4+KHVybCwge1xuICAgICAgICBoZWFkZXJzXG4gICAgICB9KVxuICAgICAgLnRvUHJvbWlzZSgpO1xuXG4gICAgaWYgKFxuICAgICAgU2VhcmNoUmVzdWx0c0R0by5pc0Vycm9yKHJlc3VsdC5zdGF0dXMuY29kZSwgb3B0aW9ucy5zdXBwcmVzc2VkRXJyb3JzKVxuICAgICkge1xuICAgICAgYXdhaXQgdGhpcy5lcnJvckRpYWxvZ1NlcnZpY2Uub3BlbkVycm9yRGlhbG9nKFxuICAgICAgICByZXN1bHQuc3RhdHVzLnRleHQsXG4gICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZVxuICAgICAgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHNlYXJjaFJlc3VsdHNDb250YWluZXIgPSBuZXcgU2VhcmNoUmVzdWx0c0NvbnRhaW5lcjxUPihyZXN1bHQpO1xuICAgIHJldHVybiBzZWFyY2hSZXN1bHRzQ29udGFpbmVyO1xuICB9XG5cbiAgcHJvdGVjdGVkIF91cGxvYWRGb3JtRGF0YShcbiAgICB1cmw6IHN0cmluZyxcbiAgICBkYXRhOiBGb3JtRGF0YSxcbiAgICBzZWN1cmU6IFNlY3VyZVxuICApOiBPYnNlcnZhYmxlPFVwbG9hZEV2ZW50PiB7XG4gICAgY29uc3QgaGVhZGVycyA9IHRoaXMuZ2V0SGVhZGVyKHNlY3VyZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudFxuICAgICAgLnBvc3Q8YW55Pih1cmwsIGRhdGEsIHtcbiAgICAgICAgaGVhZGVycyxcbiAgICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHRydWUsXG4gICAgICAgIG9ic2VydmU6ICdldmVudHMnXG4gICAgICB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChldmVudCA9PiB7XG4gICAgICAgICAgbGV0IHVwbG9hZEV2ZW50OiBVcGxvYWRFdmVudDtcbiAgICAgICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgSHR0cEV2ZW50VHlwZS5VcGxvYWRQcm9ncmVzczpcbiAgICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLnJvdW5kKCgxMDAgKiBldmVudC5sb2FkZWQpIC8gZXZlbnQudG90YWwpO1xuICAgICAgICAgICAgICB1cGxvYWRFdmVudCA9IG5ldyBVcGxvYWRFdmVudCgnUHJvZ3Jlc3MnKTtcbiAgICAgICAgICAgICAgdXBsb2FkRXZlbnQucHJvZ3Jlc3NQZXJjZW50ID0gcHJvZ3Jlc3M7XG4gICAgICAgICAgICAgIHJldHVybiB1cGxvYWRFdmVudDtcblxuICAgICAgICAgICAgY2FzZSBIdHRwRXZlbnRUeXBlLlJlc3BvbnNlOlxuICAgICAgICAgICAgICB1cGxvYWRFdmVudCA9IG5ldyBVcGxvYWRFdmVudCgnUmVzcG9uc2UnLCBldmVudC5ib2R5KTtcbiAgICAgICAgICAgICAgcmV0dXJuIHVwbG9hZEV2ZW50O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgdXBsb2FkRXZlbnQgPSBuZXcgVXBsb2FkRXZlbnQoXG4gICAgICAgICAgICAgICAgJ0Vycm9yJyxcbiAgICAgICAgICAgICAgICBgVW5oYW5kbGVkIGV2ZW50OiAke2V2ZW50LnR5cGV9YFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICByZXR1cm4gdXBsb2FkRXZlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgYW4gZXJyb3IgZm9yIGFuIG9ic2VydmFibGUgcmVxdWVzdFxuICAgKiBAcGFyYW0gc2VydmljZU5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgc2VydmljZSByZXBvcnRpbmcgdGhlIGVycm9yXG4gICAqIEBwYXJhbSByZXN1bHQgLSBUaGUgcmV0dXJuIHRvIHJldHVyblxuICAgKi9cbiAgcHJvdGVjdGVkIGhhbmRsZU9ic2VydmFibGVFcnJvcihzZXJ2aWNlTmFtZTogc3RyaW5nLCByZXN1bHQgPSB7fSkge1xuICAgIHJldHVybiAoZXJyb3I6IENsaWVudEVycm9yUmVwb3J0KTogT2JzZXJ2YWJsZTxhbnk+ID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioc2VydmljZU5hbWUsIGVycm9yKTtcbiAgICAgIGNvbnNvbGUuZXJyb3Ioc2VydmljZU5hbWUgKyAnIGVycm9yIHN0YXR1cycsIGVycm9yLnN0YXR1cyk7XG4gICAgICByZXR1cm4gb2YocmVzdWx0KTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSBhbiBlcnJvciBmb3IgYSBzdGFuZGFyZCBwcm9taXNlIHJlcXVlc3RcbiAgICogQHBhcmFtIHNlcnZpY2VOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHNlcnZpY2UgcmVwb3J0aW5nIHRoZSBlcnJvclxuICAgKiBAcGFyYW0gbWV0aG9kIC0gVGhlIG5hbWUgb2YgdGhlIG1ldGhvZCByZXBvcnRpbmcgdGhlIGVycm9yXG4gICAqIEBwYXJhbSBlcnJvciAtIFRoZSBlcnJvciBvYmplY3RcbiAgICogQGFzeW5jXG4gICAqL1xuICBwcm90ZWN0ZWQgYXN5bmMgaGFuZGxlUHJvbWlzZUVycm9yKFxuICAgIHNlcnZpY2VOYW1lOiBzdHJpbmcsXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgZXJyb3I6IGFueVxuICApOiBQcm9taXNlPG51bGw+IHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgICdTZXJ2aWNlOiAnICtcbiAgICAgIHNlcnZpY2VOYW1lICtcbiAgICAgICcgTWV0aG9kOiAnICtcbiAgICAgIG1ldGhvZCArXG4gICAgICAnIE1lc3NhZ2U6ICcgK1xuICAgICAgZXJyb3IubWVzc2FnZVxuICAgICk7XG5cbiAgICBhd2FpdCB0aGlzLmVycm9yRGlhbG9nU2VydmljZS5vcGVuRXJyb3JEaWFsb2coXG4gICAgICAnVW5oYW5kbGVkIEV4Y2VwdGlvbicsXG4gICAgICAnQW4gdW5oYW5kbGVkIGV4Y2VwdGlvbiBlcnJvciBvY2N1cnJlZDogJyArIGVycm9yLm1lc3NhZ2VcbiAgICApO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcmVxdWVzdCBoZWFkZXJcbiAgICogQHBhcmFtIHNlY3VyZSAtIEVudW0gaW5kaWNhdGluZyB0aGUgdHlwZSBvZiBBUEkgZW5kcG9pbmcgc2VjdXJpdHlcbiAgICogQHJldHVybnMgQW4gSFRUUCBoZWFkZXJcbiAgICovXG4gIHByb3RlY3RlZCBnZXRIZWFkZXIoc2VjdXJlOiBTZWN1cmUpOiBIdHRwSGVhZGVycyB7XG4gICAgc3dpdGNoIChzZWN1cmUpIHtcbiAgICAgIGNhc2UgU2VjdXJlLnRydWU6XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhIZWFkZXI7XG4gICAgICBjYXNlIFNlY3VyZS5hcGk6XG4gICAgICAgIHJldHVybiB0aGlzLmFwaUhlYWRlcjtcbiAgICAgIGNhc2UgU2VjdXJlLmZhbHNlOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMubm9Ub2tlbkhlYWRlcjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGUgdGhlIElEIG9mIGEgbW9kZWxcbiAgICogQHBhcmFtIG1vZGVsIC0gVGhlIG1vZGVsIHRvIHZhbGlkYXRlXG4gICAqIEBwYXJhbSBtZXNzYWdlIC0gVGhlIG1lc3NhZ2UgdG8gZGlzcGxheSBpZiB2YWxpZGF0aW5nIGZhaWxzXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbGlkYXRpb24gc3VjY2VlZGVkXG4gICAqIEBhc3luY1xuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyB2YWxpZGF0ZU1vZGVsSWQobW9kZWw6IGFueSwgbWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFtb2RlbC5faWQpIHtcbiAgICAgIGF3YWl0IHRoaXMuZXJyb3JEaWFsb2dTZXJ2aWNlLm9wZW5FcnJvckRpYWxvZyhcbiAgICAgICAgJ0ludmFsaWQgTW9kZWwgSUQnLFxuICAgICAgICBtZXNzYWdlXG4gICAgICApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSB0aGUgSUQgb2YgYSBtb2RlbFxuICAgKiBAcGFyYW0gaWQgLSBUaGUgSUQgdG8gdmFsaWRhdGVcbiAgICogQHBhcmFtIG1lc3NhZ2UgLSBUaGUgbWVzc2FnZSB0byBkaXNwbGF5IGlmIHZhbGlkYXRpbmcgZmFpbHNcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsaWRhdGlvbiBzdWNjZWVkZWRcbiAgICogQGFzeW5jXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIHZhbGlkYXRlSWQoaWQ6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpZCkge1xuICAgICAgYXdhaXQgdGhpcy5lcnJvckRpYWxvZ1NlcnZpY2Uub3BlbkVycm9yRGlhbG9nKFxuICAgICAgICAnSW52YWxpZCBNb2RlbCBJRCcsXG4gICAgICAgIG1lc3NhZ2VcbiAgICAgICk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=
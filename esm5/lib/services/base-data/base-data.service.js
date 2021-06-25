import { __awaiter, __decorate, __generator, __param } from "tslib";
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
import { SessionState } from 'projects/leatherman-bootstrap/src/public-api';
import * as i0 from "@angular/core";
import * as i1 from "../../config/injection-tokens/leatherman-app-config.injection-token";
import * as i2 from "../../config/injection-tokens/error-dialog-service.injection-token";
import * as i3 from "@angular/router";
import * as i4 from "@angular/common/http";
/**
 * The base data service for communicating with API endpoints
 */
var BaseDataService = /** @class */ (function () {
    /**
     * Constructor
     * @param config - The app config object
     * @param errorDialogService - A reference to the error dialog service
     * @param router - A reference to the router
     * @param httpClient - A reference to the HTTP client service
     */
    function BaseDataService(config, errorDialogService, router, httpClient) {
        this.config = config;
        this.errorDialogService = errorDialogService;
        this.router = router;
        this.httpClient = httpClient;
    }
    Object.defineProperty(BaseDataService.prototype, "baseEndpoint", {
        /** Set accessor for the base endpoint */
        get: function () {
            return this._baseEndpoint;
        },
        // **********************
        // * Protected properties
        // **********************
        /** Set accessor for the base endpoint */
        set: function (baseEndpoint) {
            this._baseEndpoint = baseEndpoint;
            if (this._baseEndpoint.startsWith('/') === false) {
                this._baseEndpoint = '/' + this._baseEndpoint;
            }
            if (this._baseEndpoint.endsWith('/') === false) {
                this._baseEndpoint = this._baseEndpoint + '/';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataService.prototype, "type", {
        /** Set accessor for the data service's item data type */
        set: function (type) {
            this._type = type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataService.prototype, "apiRoot", {
        /** Set accessor for the api root */
        get: function () {
            if (this.config.apiRoot) {
                return this.config.serverUrl + '/' + this.config.apiRoot;
            }
            return this.config.serverUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataService.prototype, "apiKey", {
        /** Get accessor for the API key  */
        get: function () {
            return this.config.apiKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataService.prototype, "noTokenHeader", {
        /** Get accessor for the no token header */
        get: function () {
            return new HttpHeaders({
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                Pragma: 'no-cache',
                Expires: 'Sat, 01 Jan 2000 00:00:00 GMT'
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataService.prototype, "apiHeader", {
        /** Get accessor to the header to use when the API endpoint is secured with an API key */
        get: function () {
            var token = this.apiKey ? 'Bearer ' + this.apiKey : '';
            var apiHeader = new HttpHeaders({
                Authorization: token,
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                Pragma: 'no-cache',
                Expires: 'Sat, 01 Jan 2000 00:00:00 GMT'
            });
            return apiHeader;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataService.prototype, "authHeader", {
        /** Get acccessor for the header to use when the API endpoit is secured with a JWT token */
        get: function () {
            var storageToken = '';
            var store = this.config.store || SessionState.LocalStorage;
            if (SessionState.SessionStorage === store) {
                storageToken = sessionStorage.getItem(this.config.jwtTokenName);
            }
            else {
                storageToken = localStorage.getItem(this.config.jwtTokenName);
            }
            var token = storageToken ? 'Bearer ' + storageToken : '';
            var authHeader = new HttpHeaders({
                Authorization: token,
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                Pragma: 'no-cache',
                Expires: 'Sat, 01 Jan 2000 00:00:00 GMT'
            });
            return authHeader;
        },
        enumerable: true,
        configurable: true
    });
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
    BaseDataService.prototype._delete = function (id, secure) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validateId(id, 'Error deleting a record. Invalid ID.')];
                    case 1:
                        if ((_a.sent()) ===
                            false) {
                            return [2 /*return*/, false];
                        }
                        headers = this.getHeader(secure);
                        return [4 /*yield*/, this.httpClient
                                .delete(UrlUtil.join(this.apiRoot, this._baseEndpoint, id), {
                                headers: headers
                            })
                                .toPromise()];
                    case 2:
                        result = _a.sent();
                        if (!Dto.isError(result.status.code)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.errorDialogService.openErrorDialog(result.status.text, result.status.message)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * Call a non-standard delete API endpoint
     * @param options - The request options
     * @returns True if the delete succeeded
     * @async
     */
    BaseDataService.prototype._deleteWithOptions = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var url, headers, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
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
                        headers = this.getHeader(options.secure);
                        return [4 /*yield*/, this.httpClient
                                .delete(url, {
                                headers: headers
                            })
                                .toPromise()];
                    case 1:
                        result = _a.sent();
                        if (!Dto.isError(result.status.code, options.suppressedErrors)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.errorDialogService.openErrorDialog(result.status.text, result.status.message)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * Delete all test artifacts
     * @returns True if the delete succeded
     * @async
     */
    BaseDataService.prototype._deleteTestArtifacts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = new Options();
                        options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'deletetestartifacts');
                        options.secure = Secure.true;
                        return [4 /*yield*/, this._deleteWithOptions(options).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.handlePromiseError('BaseDataService', '_deleteTestArtifacts', err)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Call a standard get API endpoint
     * @param id - The ID of the item to get
     * @param secure - Enum indicating whether the API endpoint is secure
     * @returns The item if the get succeeded
     * @async
     */
    BaseDataService.prototype._get = function (id, secure) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Validate the passed ID
                        this.validateId(id, 'Error getting a record. Invalid ID.');
                        headers = this.getHeader(secure);
                        return [4 /*yield*/, this.httpClient
                                .get(UrlUtil.join(this.apiRoot, this._baseEndpoint, id), {
                                headers: headers
                            })
                                // Convert the result to a promise
                                .toPromise()];
                    case 1:
                        result = _a.sent();
                        // If the returned status code is not a success code then
                        if (Dto.isError(result.status.code)) {
                            // Open the error dialog
                            this.errorDialogService.openErrorDialog(result.status.text, result.status.message);
                            // Return null
                            return [2 /*return*/, null];
                        }
                        // If the returned data is not an object, return the object with casting it
                        if (typeof result.data !== 'object') {
                            return [2 /*return*/, result.data];
                        }
                        // // Cast the object to the appropriate class
                        // const data = plainToClassFromExist(this._type, result.data);
                        // Return the object
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    // _getObservable
    BaseDataService.prototype._getObservable = function (id, secure) {
        // Validate the passed ID
        this.validateId(id, 'Error getting a record. Invalid ID.');
        // Get the appropriate header object
        var headers = this.getHeader(secure);
        // Make an async call using the httpClient. Expect the result to be an ItemDto object
        return this.httpClient
            .get(UrlUtil.join(this.apiRoot, this._baseEndpoint, id), {
            headers: headers
        })
            .pipe(map(function (result) {
            return result.data;
        }));
    };
    /**
     * Call a non-standard get API endpoint that returns an observable
     * @param id - The ID of the item to get
     * @param options - The request options
     * @returns The item if the get succeeded (as an observable)
     * @async
     */
    BaseDataService.prototype._getObservableWithOptions = function (options) {
        var url;
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
        var headers = this.getHeader(options.secure);
        return this.httpClient
            .get(url, {
            headers: headers
        })
            .pipe(map(function (result) {
            return result.data;
        }));
    };
    /**
     * Call a non-standard get API endpoint
     * @param options - The request options
     * @returns The item if the get succeeded
     * @async
     */
    BaseDataService.prototype._getWithOptions = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var url, headers, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
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
                        headers = this.getHeader(options.secure);
                        return [4 /*yield*/, this.httpClient
                                .get(url, {
                                headers: headers
                            })
                                .toPromise()];
                    case 1:
                        result = _a.sent();
                        if (!Dto.isError(result.status.code, options.suppressedErrors)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.errorDialogService.openErrorDialog(result.status.text, result.status.message)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, null];
                    case 3:
                        if (result.data === null || result.data === undefined) {
                            return [2 /*return*/, null];
                        }
                        if (typeof result.data !== 'object') {
                            return [2 /*return*/, result.data];
                        }
                        // let data: T;
                        // if (options.objectType) {
                        //   data = plainToClassFromExist(options.objectType, result.data);
                        // } else {
                        //   data = plainToClassFromExist(this._type, result.data);
                        // }
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    /**
     * Call a standard get many API endpoint
     * @param secure - Enum indicating whether the API endpoint is secure
     * @returns An array of items if the get succeeded
     * @async
     */
    BaseDataService.prototype._getMany = function (secure) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = this.getHeader(secure);
                        return [4 /*yield*/, this.httpClient
                                .get(UrlUtil.join(this.apiRoot, this._baseEndpoint), {
                                headers: headers
                            })
                                .toPromise()];
                    case 1:
                        result = _a.sent();
                        if (!Dto.isError(result.status.code)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.errorDialogService.openErrorDialog(result.status.text, result.status.message)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/, result.data];
                }
            });
        });
    };
    /**
     * Call a non-standard get many API endpoint
     * @param options - The request options
     * @returns An array of items if the get succeeded
     * @async
     */
    BaseDataService.prototype._getManyWithOptions = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var url, headers, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
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
                        headers = this.getHeader(options.secure);
                        return [4 /*yield*/, this.httpClient
                                .get(url, { headers: headers })
                                .toPromise()];
                    case 1:
                        result = _a.sent();
                        if (!Dto.isError(result.status.code, options.suppressedErrors)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.errorDialogService.openErrorDialog(result.status.text, result.status.message)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/, result.data];
                }
            });
        });
    };
    /**
     * Call a standard post API endpoint
     * @param object - The object to post
     * @param secure - Enum indicating whether the API endpoint is secure
     * @param validateId - Boolean indicating whether then object's ID should be validated
     * @returns The posted object
     * @async
     */
    BaseDataService.prototype._post = function (object, secure, validateId) {
        if (validateId === void 0) { validateId = true; }
        return __awaiter(this, void 0, void 0, function () {
            var headers, url, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (validateId) {
                            if (!this.validateModelId(object, 'Error posting a record. Invalid model ID.')) {
                                return [2 /*return*/, null];
                            }
                        }
                        headers = this.getHeader(secure);
                        url = UrlUtil.join(this.apiRoot, this._baseEndpoint);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.httpClient
                                .post(UrlUtil.join(this.apiRoot, this._baseEndpoint), object, {
                                headers: headers
                            })
                                .toPromise()];
                    case 2:
                        result = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log('**********');
                        console.log('HTTP Post Error');
                        console.log('URL: ' + url);
                        console.log(object);
                        throw error_1;
                    case 4:
                        if (!Dto.isError(result.status.code)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.errorDialogService.openErrorDialog(result.status.text, result.status.message)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, null];
                    case 6: return [2 /*return*/, result.data];
                }
            });
        });
    };
    /**
     * Call a non-standard post API endpoint
     * @param object - The object to post
     * @param options - The request options
     * @returns The posted object
     * @async
     */
    BaseDataService.prototype._postWithOptions = function (object, options) {
        return __awaiter(this, void 0, void 0, function () {
            var url, headers, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (options.validateId) {
                            if (!this.validateModelId(object, 'Error posting a record. Invalid model ID.')) {
                                return [2 /*return*/, null];
                            }
                        }
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
                        headers = this.getHeader(options.secure);
                        return [4 /*yield*/, this.httpClient
                                .post(url, object, {
                                headers: headers
                            })
                                .toPromise()];
                    case 1:
                        result = _a.sent();
                        if (!Dto.isError(result.status.code, options.suppressedErrors)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.errorDialogService.openErrorDialog(result.status.text, result.status.message)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/, result.data];
                }
            });
        });
    };
    /**
     * Call a standard put API endpoint
     * @param object - The object to put
     * @param secure - Enum indicating whether the API endpoint is secure
     * @param validateId - Boolean indicating whether then object's ID should be validated
     * @returns The updated object
     * @async
     */
    BaseDataService.prototype._put = function (object, secure, validateId) {
        if (validateId === void 0) { validateId = true; }
        return __awaiter(this, void 0, void 0, function () {
            var headers, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (object && validateId) {
                            if (!this.validateModelId(object, 'Error putting a record. Invalid model ID.')) {
                                return [2 /*return*/, null];
                            }
                        }
                        headers = this.getHeader(secure);
                        return [4 /*yield*/, this.httpClient
                                .put(UrlUtil.join(this.apiRoot, this._baseEndpoint, object._id), object, {
                                headers: headers
                            })
                                .toPromise()];
                    case 1:
                        result = _a.sent();
                        if (!Dto.isError(result.status.code)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.errorDialogService.openErrorDialog(result.status.text, result.status.message)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/, result.data];
                }
            });
        });
    };
    /**
     * Call a non-standard put API endpoint
     * @param object - The object to put
     * @param options - The request options
     * @returns The updated object
     * @async
     */
    BaseDataService.prototype._putWithOptions = function (options, object) {
        return __awaiter(this, void 0, void 0, function () {
            var url, headers, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (object && options.validateId) {
                            if (!this.validateModelId(object, 'Error putting a record. Invalid model ID.')) {
                                return [2 /*return*/, null];
                            }
                        }
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
                        headers = this.getHeader(options.secure);
                        return [4 /*yield*/, this.httpClient
                                .put(url, object, {
                                headers: headers
                            })
                                .toPromise()];
                    case 1:
                        result = _a.sent();
                        if (!Dto.isError(result.status.code, options.suppressedErrors)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.errorDialogService.openErrorDialog(result.status.text, result.status.message)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, null];
                    case 3: return [2 /*return*/, result.data];
                }
            });
        });
    };
    BaseDataService.prototype._searchWithOptions = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var url, headers, result, searchResultsContainer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
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
                        headers = this.getHeader(options.secure);
                        return [4 /*yield*/, this.httpClient
                                .get(url, {
                                headers: headers
                            })
                                .toPromise()];
                    case 1:
                        result = _a.sent();
                        if (!SearchResultsDto.isError(result.status.code, options.suppressedErrors)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.errorDialogService.openErrorDialog(result.status.text, result.status.message)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, null];
                    case 3:
                        searchResultsContainer = new SearchResultsContainer(result);
                        return [2 /*return*/, searchResultsContainer];
                }
            });
        });
    };
    BaseDataService.prototype._uploadFormData = function (url, data, secure) {
        var headers = this.getHeader(secure);
        return this.httpClient
            .post(url, data, {
            headers: headers,
            reportProgress: true,
            observe: 'events'
        })
            .pipe(map(function (event) {
            var uploadEvent;
            switch (event.type) {
                case HttpEventType.UploadProgress:
                    var progress = Math.round((100 * event.loaded) / event.total);
                    uploadEvent = new UploadEvent('Progress');
                    uploadEvent.progressPercent = progress;
                    return uploadEvent;
                case HttpEventType.Response:
                    uploadEvent = new UploadEvent('Response', event.body);
                    return uploadEvent;
                default:
                    uploadEvent = new UploadEvent('Error', "Unhandled event: " + event.type);
                    return uploadEvent;
            }
        }));
    };
    /**
     * Handle an error for an observable request
     * @param serviceName - The name of the service reporting the error
     * @param result - The return to return
     */
    BaseDataService.prototype.handleObservableError = function (serviceName, result) {
        if (result === void 0) { result = {}; }
        return function (error) {
            console.error(serviceName, error);
            console.error(serviceName + ' error status', error.status);
            return of(result);
        };
    };
    /**
     * Handle an error for a standard promise request
     * @param serviceName - The name of the service reporting the error
     * @param method - The name of the method reporting the error
     * @param error - The error object
     * @async
     */
    BaseDataService.prototype.handlePromiseError = function (serviceName, method, error) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Service: ' +
                            serviceName +
                            ' Method: ' +
                            method +
                            ' Message: ' +
                            error.message);
                        return [4 /*yield*/, this.errorDialogService.openErrorDialog('Unhandled Exception', 'An unhandled exception error occurred: ' + error.message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, null];
                }
            });
        });
    };
    /**
     * Get the request header
     * @param secure - Enum indicating the type of API endpoing security
     * @returns An HTTP header
     */
    BaseDataService.prototype.getHeader = function (secure) {
        switch (secure) {
            case Secure.true:
                return this.authHeader;
            case Secure.api:
                return this.apiHeader;
            case Secure.false:
            default:
                return this.noTokenHeader;
        }
    };
    /**
     * Validate the ID of a model
     * @param model - The model to validate
     * @param message - The message to display if validating fails
     * @returns True if the validation succeeded
     * @async
     */
    BaseDataService.prototype.validateModelId = function (model, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!model._id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.errorDialogService.openErrorDialog('Invalid Model ID', message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 2: return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * Validate the ID of a model
     * @param id - The ID to validate
     * @param message - The message to display if validating fails
     * @returns True if the validation succeeded
     * @async
     */
    BaseDataService.prototype.validateId = function (id, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.errorDialogService.openErrorDialog('Invalid Model ID', message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 2: return [2 /*return*/, true];
                }
            });
        });
    };
    BaseDataService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [LeathermanAppConfigInjectionToken,] }] },
        { type: ErrorDialogService, decorators: [{ type: Inject, args: [ErrorDialogServiceInjectionToken,] }] },
        { type: Router },
        { type: HttpClient }
    ]; };
    BaseDataService.ɵprov = i0.ɵɵdefineInjectable({ factory: function BaseDataService_Factory() { return new BaseDataService(i0.ɵɵinject(i1.LeathermanAppConfigInjectionToken), i0.ɵɵinject(i2.ErrorDialogServiceInjectionToken), i0.ɵɵinject(i3.Router), i0.ɵɵinject(i4.HttpClient)); }, token: BaseDataService, providedIn: "root" });
    BaseDataService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Inject(LeathermanAppConfigInjectionToken)),
        __param(1, Inject(ErrorDialogServiceInjectionToken))
    ], BaseDataService);
    return BaseDataService;
}());
export { BaseDataService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9iYXNlLWRhdGEvYmFzZS1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDNUQsNkRBQTZEO0FBQzdELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBRXhILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ3RILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUVyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOENBQThDLENB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TUFBTSxTQUFDLGlDQUFpQztnQkFHWCxrQkFBa0IsdUJBRC9DLE1BQU0sU0FBQyxnQ0FBZ0M7Z0JBRXRCLE1BQU07Z0JBQ0YsVUFBVTs7O0lBckd2QixlQUFlO1FBSDNCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7UUFpR0csV0FBQSxNQUFNLENBQUMsaUNBQWlDLENBQUMsQ0FBQTtRQUV6QyxXQUFBLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO09BbEdoQyxlQUFlLENBdXdCM0I7MEJBcHlCRDtDQW95QkMsQUF2d0JELElBdXdCQztTQXZ3QlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBFdmVudFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNlY3VyZSB9IGZyb20gJy4uLy4uL2VudW1zL3NlY3VyZS5lbnVtJztcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuL19tb2RlbHMvYmFzZS1kYXRhLW9wdGlvbnMubW9kZWwnO1xuLy8gaW1wb3J0IHsgcGxhaW5Ub0NsYXNzRnJvbUV4aXN0IH0gZnJvbSAnY2xhc3MtdHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgVXJsVXRpbCB9IGZyb20gJy4uLy4uL3V0aWwvdXJsL3VybC51dGlsJztcbmltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlL2Jhc2UubW9kZWwnO1xuaW1wb3J0IHsgRXJyb3JEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGlhbG9ncy9lcnJvci9lcnJvci1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBEdG8gfSBmcm9tICcuLi8uLi9tb2RlbHMvZHRvL2R0by5tb2RlbCc7XG5pbXBvcnQgeyBJdGVtRHRvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2R0by9pdGVtLWR0by5tb2RlbCc7XG5pbXBvcnQgeyBDbGllbnRFcnJvclJlcG9ydCB9IGZyb20gJy4uLy4uL21vZGVscy9lcnJvci9jbGllbnQtZXJyb3ItcmVwb3J0Lm1vZGVsJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IExlYXRoZXJtYW5BcHBDb25maWdJbmplY3Rpb25Ub2tlbiB9IGZyb20gJy4uLy4uL2NvbmZpZy9pbmplY3Rpb24tdG9rZW5zL2xlYXRoZXJtYW4tYXBwLWNvbmZpZy5pbmplY3Rpb24tdG9rZW4nO1xuaW1wb3J0IHsgSUxlYXRoZXJtYW5BcHBDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvYXBwLmNvbmZpZyc7XG5pbXBvcnQgeyBFcnJvckRpYWxvZ1NlcnZpY2VJbmplY3Rpb25Ub2tlbiB9IGZyb20gJy4uLy4uL2NvbmZpZy9pbmplY3Rpb24tdG9rZW5zL2Vycm9yLWRpYWxvZy1zZXJ2aWNlLmluamVjdGlvbi10b2tlbic7XG5pbXBvcnQgeyBTZWFyY2hSZXN1bHRzRHRvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2R0by9zZWFyY2gtcmVzdWx0cy1kdG8ubW9kZWwnO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0c0NvbnRhaW5lciB9IGZyb20gJy4uLy4uL21vZGVscy9kdG8vc2VhcmNoLXJlc3VsdHMtY29udGFpbmVyLm1vZGVsJztcbmltcG9ydCB7IFVwbG9hZEV2ZW50IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2V2ZW50cy91cGxvYWQtZXZlbnQubW9kZWwnO1xuaW1wb3J0IHsgQXJyYXlEdG8gfSBmcm9tICcuLi8uLi9tb2RlbHMvZHRvL2FycmF5LWR0by5tb2RlbCc7XG5pbXBvcnQgeyBTZXNzaW9uU3RhdGUgfSBmcm9tICdwcm9qZWN0cy9sZWF0aGVybWFuLWJvb3RzdHJhcC9zcmMvcHVibGljLWFwaSc7XG5cbi8qKlxuICogVGhlIGJhc2UgZGF0YSBzZXJ2aWNlIGZvciBjb21tdW5pY2F0aW5nIHdpdGggQVBJIGVuZHBvaW50c1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBCYXNlRGF0YVNlcnZpY2Uge1xuICAvLyAqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vICogUHJvdGVjdGVkIHByb3BlcnRpZXNcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKlxuXG4gIC8qKiBTZXQgYWNjZXNzb3IgZm9yIHRoZSBiYXNlIGVuZHBvaW50ICovXG4gIHByb3RlY3RlZCBzZXQgYmFzZUVuZHBvaW50KGJhc2VFbmRwb2ludDogc3RyaW5nKSB7XG4gICAgdGhpcy5fYmFzZUVuZHBvaW50ID0gYmFzZUVuZHBvaW50O1xuICAgIGlmICh0aGlzLl9iYXNlRW5kcG9pbnQuc3RhcnRzV2l0aCgnLycpID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5fYmFzZUVuZHBvaW50ID0gJy8nICsgdGhpcy5fYmFzZUVuZHBvaW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5fYmFzZUVuZHBvaW50LmVuZHNXaXRoKCcvJykgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLl9iYXNlRW5kcG9pbnQgPSB0aGlzLl9iYXNlRW5kcG9pbnQgKyAnLyc7XG4gICAgfVxuICB9XG5cbiAgLyoqIFNldCBhY2Nlc3NvciBmb3IgdGhlIGJhc2UgZW5kcG9pbnQgKi9cbiAgcHJvdGVjdGVkIGdldCBiYXNlRW5kcG9pbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fYmFzZUVuZHBvaW50O1xuICB9XG5cbiAgLyoqIFRoZSBiYXNlIGVuZHBvaW50ICovXG4gIHByaXZhdGUgX2Jhc2VFbmRwb2ludDogc3RyaW5nO1xuXG4gIC8qKiBTZXQgYWNjZXNzb3IgZm9yIHRoZSBkYXRhIHNlcnZpY2UncyBpdGVtIGRhdGEgdHlwZSAqL1xuICBwcm90ZWN0ZWQgc2V0IHR5cGUodHlwZTogYW55KSB7XG4gICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gIH1cblxuICAvKiogVGhlIGRhdGEgc2VydmljZSdzIGl0ZW0gZGF0YSB0eXBlICovXG4gIHByaXZhdGUgX3R5cGU6IGFueTtcblxuICAvKiogU2V0IGFjY2Vzc29yIGZvciB0aGUgYXBpIHJvb3QgKi9cbiAgcHJvdGVjdGVkIGdldCBhcGlSb290KCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmFwaVJvb3QpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5zZXJ2ZXJVcmwgKyAnLycgKyB0aGlzLmNvbmZpZy5hcGlSb290O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb25maWcuc2VydmVyVXJsO1xuICB9XG5cbiAgLyoqIEdldCBhY2Nlc3NvciBmb3IgdGhlIEFQSSBrZXkgICovXG4gIHByb3RlY3RlZCBnZXQgYXBpS2V5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmFwaUtleTtcbiAgfVxuXG4gIC8qKiBHZXQgYWNjZXNzb3IgZm9yIHRoZSBubyB0b2tlbiBoZWFkZXIgKi9cbiAgcHJvdGVjdGVkIGdldCBub1Rva2VuSGVhZGVyKCk6IEh0dHBIZWFkZXJzIHtcbiAgICByZXR1cm4gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScsXG4gICAgICBQcmFnbWE6ICduby1jYWNoZScsXG4gICAgICBFeHBpcmVzOiAnU2F0LCAwMSBKYW4gMjAwMCAwMDowMDowMCBHTVQnXG4gICAgfSk7XG4gIH1cblxuICAvKiogR2V0IGFjY2Vzc29yIHRvIHRoZSBoZWFkZXIgdG8gdXNlIHdoZW4gdGhlIEFQSSBlbmRwb2ludCBpcyBzZWN1cmVkIHdpdGggYW4gQVBJIGtleSAqL1xuICBwcm90ZWN0ZWQgZ2V0IGFwaUhlYWRlcigpOiBIdHRwSGVhZGVycyB7XG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLmFwaUtleSA/ICdCZWFyZXIgJyArIHRoaXMuYXBpS2V5IDogJyc7XG4gICAgY29uc3QgYXBpSGVhZGVyID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDYWNoZS1Db250cm9sJzogJ25vLWNhY2hlJyxcbiAgICAgIFByYWdtYTogJ25vLWNhY2hlJyxcbiAgICAgIEV4cGlyZXM6ICdTYXQsIDAxIEphbiAyMDAwIDAwOjAwOjAwIEdNVCdcbiAgICB9KTtcbiAgICByZXR1cm4gYXBpSGVhZGVyO1xuICB9XG5cbiAgLyoqIEdldCBhY2NjZXNzb3IgZm9yIHRoZSBoZWFkZXIgdG8gdXNlIHdoZW4gdGhlIEFQSSBlbmRwb2l0IGlzIHNlY3VyZWQgd2l0aCBhIEpXVCB0b2tlbiAqL1xuICBwcm90ZWN0ZWQgZ2V0IGF1dGhIZWFkZXIoKTogSHR0cEhlYWRlcnMge1xuICAgIGxldCBzdG9yYWdlVG9rZW46c3RyaW5nID0gJyc7XG4gICAgY29uc3Qgc3RvcmUgPSB0aGlzLmNvbmZpZy5zdG9yZSB8fCBTZXNzaW9uU3RhdGUuTG9jYWxTdG9yYWdlO1xuICAgIGlmKFNlc3Npb25TdGF0ZS5TZXNzaW9uU3RvcmFnZSA9PT0gc3RvcmUpIHtcbiAgICAgIHN0b3JhZ2VUb2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0odGhpcy5jb25maWcuand0VG9rZW5OYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RvcmFnZVRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5jb25maWcuand0VG9rZW5OYW1lKTtcbiAgICB9XG4gICAgY29uc3QgdG9rZW4gPSBzdG9yYWdlVG9rZW4gPyAnQmVhcmVyICcgKyBzdG9yYWdlVG9rZW4gOiAnJztcbiAgICBjb25zdCBhdXRoSGVhZGVyID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDYWNoZS1Db250cm9sJzogJ25vLWNhY2hlJyxcbiAgICAgIFByYWdtYTogJ25vLWNhY2hlJyxcbiAgICAgIEV4cGlyZXM6ICdTYXQsIDAxIEphbiAyMDAwIDAwOjAwOjAwIEdNVCdcbiAgICB9KTtcbiAgICByZXR1cm4gYXV0aEhlYWRlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gY29uZmlnIC0gVGhlIGFwcCBjb25maWcgb2JqZWN0XG4gICAqIEBwYXJhbSBlcnJvckRpYWxvZ1NlcnZpY2UgLSBBIHJlZmVyZW5jZSB0byB0aGUgZXJyb3IgZGlhbG9nIHNlcnZpY2VcbiAgICogQHBhcmFtIHJvdXRlciAtIEEgcmVmZXJlbmNlIHRvIHRoZSByb3V0ZXJcbiAgICogQHBhcmFtIGh0dHBDbGllbnQgLSBBIHJlZmVyZW5jZSB0byB0aGUgSFRUUCBjbGllbnQgc2VydmljZVxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChMZWF0aGVybWFuQXBwQ29uZmlnSW5qZWN0aW9uVG9rZW4pXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogSUxlYXRoZXJtYW5BcHBDb25maWcsXG4gICAgQEluamVjdChFcnJvckRpYWxvZ1NlcnZpY2VJbmplY3Rpb25Ub2tlbilcbiAgICBwcm90ZWN0ZWQgZXJyb3JEaWFsb2dTZXJ2aWNlOiBFcnJvckRpYWxvZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyLFxuICAgIHByb3RlY3RlZCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50XG4gICkgeyB9XG5cbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKlxuICAvLyAqIFByb3RlY3RlZCBtZXRob2RzXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKipcblxuICAvKipcbiAgICogQ2FsbCBhIHN0YW5kYXJkIGRlbGV0ZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIGlkIC0gVGhlIElEIG9mIHRoZSBpdGVtIHRvIGJlIGRlbGV0ZWRcbiAgICogQHBhcmFtIHNlY3VyZSAtIEVudW0gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBBUEkgZW5kcG9pbnQgaXMgc2VjdXJlXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGRlbGV0ZSBzdWNjZWVkZWRcbiAgICogQGFzeW5jXG4gICAqL1xuICBwcm90ZWN0ZWQgYXN5bmMgX2RlbGV0ZShpZDogc3RyaW5nLCBzZWN1cmU6IFNlY3VyZSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmIChcbiAgICAgIChhd2FpdCB0aGlzLnZhbGlkYXRlSWQoaWQsICdFcnJvciBkZWxldGluZyBhIHJlY29yZC4gSW52YWxpZCBJRC4nKSkgPT09XG4gICAgICBmYWxzZVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5nZXRIZWFkZXIoc2VjdXJlKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmh0dHBDbGllbnRcbiAgICAgIC5kZWxldGU8RHRvPihVcmxVdGlsLmpvaW4odGhpcy5hcGlSb290LCB0aGlzLl9iYXNlRW5kcG9pbnQsIGlkKSwge1xuICAgICAgICBoZWFkZXJzXG4gICAgICB9KVxuICAgICAgLnRvUHJvbWlzZSgpO1xuXG4gICAgaWYgKER0by5pc0Vycm9yKHJlc3VsdC5zdGF0dXMuY29kZSkpIHtcbiAgICAgIGF3YWl0IHRoaXMuZXJyb3JEaWFsb2dTZXJ2aWNlLm9wZW5FcnJvckRpYWxvZyhcbiAgICAgICAgcmVzdWx0LnN0YXR1cy50ZXh0LFxuICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2VcbiAgICAgICk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbCBhIG5vbi1zdGFuZGFyZCBkZWxldGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBvcHRpb25zIC0gVGhlIHJlcXVlc3Qgb3B0aW9uc1xuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBkZWxldGUgc3VjY2VlZGVkXG4gICAqIEBhc3luY1xuICAgKi9cbiAgcHJvdGVjdGVkIGFzeW5jIF9kZWxldGVXaXRoT3B0aW9ucyhvcHRpb25zOiBPcHRpb25zKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgbGV0IHVybDogc3RyaW5nO1xuICAgIGlmIChvcHRpb25zLnVybCkge1xuICAgICAgdXJsID0gb3B0aW9ucy51cmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IFVybFV0aWwuam9pbih0aGlzLmFwaVJvb3QsIHRoaXMuX2Jhc2VFbmRwb2ludCwgb3B0aW9ucy51cmwpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5pZCkge1xuICAgICAgdXJsID0gVXJsVXRpbC5qb2luKHVybCwgb3B0aW9ucy5pZCk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnBhcmFtZXRlcnMuaGFzUGFyYW1ldGVycykge1xuICAgICAgdXJsID0gVXJsVXRpbC5qb2luKHVybCwgb3B0aW9ucy5wYXJhbWV0ZXJzLmdldFBhcmFtdGVyU3RyaW5nKCkpO1xuICAgIH1cbiAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5nZXRIZWFkZXIob3B0aW9ucy5zZWN1cmUpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuaHR0cENsaWVudFxuICAgICAgLmRlbGV0ZTxEdG8+KHVybCwge1xuICAgICAgICBoZWFkZXJzXG4gICAgICB9KVxuICAgICAgLnRvUHJvbWlzZSgpO1xuXG4gICAgaWYgKER0by5pc0Vycm9yKHJlc3VsdC5zdGF0dXMuY29kZSwgb3B0aW9ucy5zdXBwcmVzc2VkRXJyb3JzKSkge1xuICAgICAgYXdhaXQgdGhpcy5lcnJvckRpYWxvZ1NlcnZpY2Uub3BlbkVycm9yRGlhbG9nKFxuICAgICAgICByZXN1bHQuc3RhdHVzLnRleHQsXG4gICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZVxuICAgICAgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYWxsIHRlc3QgYXJ0aWZhY3RzXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGRlbGV0ZSBzdWNjZWRlZFxuICAgKiBAYXN5bmNcbiAgICovXG4gIHB1YmxpYyBhc3luYyBfZGVsZXRlVGVzdEFydGlmYWN0cygpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBvcHRpb25zID0gbmV3IE9wdGlvbnMoKTtcbiAgICBvcHRpb25zLnVybCA9IFVybFV0aWwuam9pbihcbiAgICAgIHRoaXMuYXBpUm9vdCxcbiAgICAgIHRoaXMuYmFzZUVuZHBvaW50LFxuICAgICAgJ2RlbGV0ZXRlc3RhcnRpZmFjdHMnXG4gICAgKTtcbiAgICBvcHRpb25zLnNlY3VyZSA9IFNlY3VyZS50cnVlO1xuICAgIHJldHVybiBhd2FpdCB0aGlzLl9kZWxldGVXaXRoT3B0aW9ucyhvcHRpb25zKS5jYXRjaChhc3luYyBlcnIgPT4ge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuaGFuZGxlUHJvbWlzZUVycm9yKFxuICAgICAgICAnQmFzZURhdGFTZXJ2aWNlJyxcbiAgICAgICAgJ19kZWxldGVUZXN0QXJ0aWZhY3RzJyxcbiAgICAgICAgZXJyXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgYSBzdGFuZGFyZCBnZXQgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBpZCAtIFRoZSBJRCBvZiB0aGUgaXRlbSB0byBnZXRcbiAgICogQHBhcmFtIHNlY3VyZSAtIEVudW0gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBBUEkgZW5kcG9pbnQgaXMgc2VjdXJlXG4gICAqIEByZXR1cm5zIFRoZSBpdGVtIGlmIHRoZSBnZXQgc3VjY2VlZGVkXG4gICAqIEBhc3luY1xuICAgKi9cbiAgcHJvdGVjdGVkIGFzeW5jIF9nZXQ8VD4oaWQ6IHN0cmluZywgc2VjdXJlOiBTZWN1cmUpOiBQcm9taXNlPFQ+IHtcbiAgICAvLyBWYWxpZGF0ZSB0aGUgcGFzc2VkIElEXG4gICAgdGhpcy52YWxpZGF0ZUlkKGlkLCAnRXJyb3IgZ2V0dGluZyBhIHJlY29yZC4gSW52YWxpZCBJRC4nKTtcbiAgICAvLyBHZXQgdGhlIGFwcHJvcHJpYXRlIGhlYWRlciBvYmplY3RcbiAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5nZXRIZWFkZXIoc2VjdXJlKTtcbiAgICAvLyBNYWtlIGFuIGFzeW5jIGNhbGwgdXNpbmcgdGhlIGh0dHBDbGllbnQuIEV4cGVjdCB0aGUgcmVzdWx0IHRvIGJlIGFuIEl0ZW1EdG8gb2JqZWN0XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5odHRwQ2xpZW50XG4gICAgICAuZ2V0PEl0ZW1EdG88VD4+KFVybFV0aWwuam9pbih0aGlzLmFwaVJvb3QsIHRoaXMuX2Jhc2VFbmRwb2ludCwgaWQpLCB7XG4gICAgICAgIGhlYWRlcnNcbiAgICAgIH0pXG4gICAgICAvLyBDb252ZXJ0IHRoZSByZXN1bHQgdG8gYSBwcm9taXNlXG4gICAgICAudG9Qcm9taXNlKCk7XG5cbiAgICAvLyBJZiB0aGUgcmV0dXJuZWQgc3RhdHVzIGNvZGUgaXMgbm90IGEgc3VjY2VzcyBjb2RlIHRoZW5cbiAgICBpZiAoRHRvLmlzRXJyb3IocmVzdWx0LnN0YXR1cy5jb2RlKSkge1xuICAgICAgLy8gT3BlbiB0aGUgZXJyb3IgZGlhbG9nXG4gICAgICB0aGlzLmVycm9yRGlhbG9nU2VydmljZS5vcGVuRXJyb3JEaWFsb2coXG4gICAgICAgIHJlc3VsdC5zdGF0dXMudGV4dCxcbiAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlXG4gICAgICApO1xuICAgICAgLy8gUmV0dXJuIG51bGxcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSByZXR1cm5lZCBkYXRhIGlzIG5vdCBhbiBvYmplY3QsIHJldHVybiB0aGUgb2JqZWN0IHdpdGggY2FzdGluZyBpdFxuICAgIGlmICh0eXBlb2YgcmVzdWx0LmRhdGEgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gICAgfVxuXG4gICAgLy8gLy8gQ2FzdCB0aGUgb2JqZWN0IHRvIHRoZSBhcHByb3ByaWF0ZSBjbGFzc1xuICAgIC8vIGNvbnN0IGRhdGEgPSBwbGFpblRvQ2xhc3NGcm9tRXhpc3QodGhpcy5fdHlwZSwgcmVzdWx0LmRhdGEpO1xuXG4gICAgLy8gUmV0dXJuIHRoZSBvYmplY3RcbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gIH1cblxuICAvLyBfZ2V0T2JzZXJ2YWJsZVxuICBwcm90ZWN0ZWQgX2dldE9ic2VydmFibGU8VD4oaWQ6IHN0cmluZywgc2VjdXJlOiBTZWN1cmUpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICAvLyBWYWxpZGF0ZSB0aGUgcGFzc2VkIElEXG4gICAgdGhpcy52YWxpZGF0ZUlkKGlkLCAnRXJyb3IgZ2V0dGluZyBhIHJlY29yZC4gSW52YWxpZCBJRC4nKTtcbiAgICAvLyBHZXQgdGhlIGFwcHJvcHJpYXRlIGhlYWRlciBvYmplY3RcbiAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5nZXRIZWFkZXIoc2VjdXJlKTtcbiAgICAvLyBNYWtlIGFuIGFzeW5jIGNhbGwgdXNpbmcgdGhlIGh0dHBDbGllbnQuIEV4cGVjdCB0aGUgcmVzdWx0IHRvIGJlIGFuIEl0ZW1EdG8gb2JqZWN0XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudFxuICAgICAgLmdldDxJdGVtRHRvPFQ+PihVcmxVdGlsLmpvaW4odGhpcy5hcGlSb290LCB0aGlzLl9iYXNlRW5kcG9pbnQsIGlkKSwge1xuICAgICAgICBoZWFkZXJzXG4gICAgICB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChyZXN1bHQgPT4ge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbCBhIG5vbi1zdGFuZGFyZCBnZXQgQVBJIGVuZHBvaW50IHRoYXQgcmV0dXJucyBhbiBvYnNlcnZhYmxlXG4gICAqIEBwYXJhbSBpZCAtIFRoZSBJRCBvZiB0aGUgaXRlbSB0byBnZXRcbiAgICogQHBhcmFtIG9wdGlvbnMgLSBUaGUgcmVxdWVzdCBvcHRpb25zXG4gICAqIEByZXR1cm5zIFRoZSBpdGVtIGlmIHRoZSBnZXQgc3VjY2VlZGVkIChhcyBhbiBvYnNlcnZhYmxlKVxuICAgKiBAYXN5bmNcbiAgICovXG4gIHByb3RlY3RlZCBfZ2V0T2JzZXJ2YWJsZVdpdGhPcHRpb25zPFQ+KG9wdGlvbnM6IE9wdGlvbnMpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBsZXQgdXJsOiBzdHJpbmc7XG4gICAgaWYgKG9wdGlvbnMudXJsKSB7XG4gICAgICB1cmwgPSBvcHRpb25zLnVybDtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gVXJsVXRpbC5qb2luKHRoaXMuYXBpUm9vdCwgdGhpcy5fYmFzZUVuZHBvaW50LCBvcHRpb25zLnVybCk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmlkKSB7XG4gICAgICB1cmwgPSBVcmxVdGlsLmpvaW4odXJsLCBvcHRpb25zLmlkKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMucGFyYW1ldGVycy5oYXNQYXJhbWV0ZXJzKSB7XG4gICAgICB1cmwgPSBVcmxVdGlsLmpvaW4odXJsLCBvcHRpb25zLnBhcmFtZXRlcnMuZ2V0UGFyYW10ZXJTdHJpbmcoKSk7XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLmdldEhlYWRlcihvcHRpb25zLnNlY3VyZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudFxuICAgICAgLmdldDxJdGVtRHRvPFQ+Pih1cmwsIHtcbiAgICAgICAgaGVhZGVyc1xuICAgICAgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAocmVzdWx0ID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgYSBub24tc3RhbmRhcmQgZ2V0IEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSByZXF1ZXN0IG9wdGlvbnNcbiAgICogQHJldHVybnMgVGhlIGl0ZW0gaWYgdGhlIGdldCBzdWNjZWVkZWRcbiAgICogQGFzeW5jXG4gICAqL1xuICBwcm90ZWN0ZWQgYXN5bmMgX2dldFdpdGhPcHRpb25zPFQ+KG9wdGlvbnM6IE9wdGlvbnMpOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgdXJsOiBzdHJpbmc7XG4gICAgaWYgKG9wdGlvbnMudXJsKSB7XG4gICAgICB1cmwgPSBvcHRpb25zLnVybDtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gVXJsVXRpbC5qb2luKHRoaXMuYXBpUm9vdCwgdGhpcy5fYmFzZUVuZHBvaW50LCBvcHRpb25zLnVybCk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmlkKSB7XG4gICAgICB1cmwgPSBVcmxVdGlsLmpvaW4odXJsLCBvcHRpb25zLmlkKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMucGFyYW1ldGVycy5oYXNQYXJhbWV0ZXJzKSB7XG4gICAgICB1cmwgPSBVcmxVdGlsLmpvaW4odXJsLCBvcHRpb25zLnBhcmFtZXRlcnMuZ2V0UGFyYW10ZXJTdHJpbmcoKSk7XG4gICAgICBjb25zb2xlLmxvZygnQ2FjaGUgYnVzdGluZyBVUkw6JyArIHVybCk7XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLmdldEhlYWRlcihvcHRpb25zLnNlY3VyZSk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5odHRwQ2xpZW50XG4gICAgICAuZ2V0PEl0ZW1EdG88VD4+KHVybCwge1xuICAgICAgICBoZWFkZXJzXG4gICAgICB9KVxuICAgICAgLnRvUHJvbWlzZSgpO1xuXG4gICAgaWYgKER0by5pc0Vycm9yKHJlc3VsdC5zdGF0dXMuY29kZSwgb3B0aW9ucy5zdXBwcmVzc2VkRXJyb3JzKSkge1xuICAgICAgYXdhaXQgdGhpcy5lcnJvckRpYWxvZ1NlcnZpY2Uub3BlbkVycm9yRGlhbG9nKFxuICAgICAgICByZXN1bHQuc3RhdHVzLnRleHQsXG4gICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZVxuICAgICAgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChyZXN1bHQuZGF0YSA9PT0gbnVsbCB8fCByZXN1bHQuZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlc3VsdC5kYXRhICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICAgIH1cblxuICAgIC8vIGxldCBkYXRhOiBUO1xuICAgIC8vIGlmIChvcHRpb25zLm9iamVjdFR5cGUpIHtcbiAgICAvLyAgIGRhdGEgPSBwbGFpblRvQ2xhc3NGcm9tRXhpc3Qob3B0aW9ucy5vYmplY3RUeXBlLCByZXN1bHQuZGF0YSk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGRhdGEgPSBwbGFpblRvQ2xhc3NGcm9tRXhpc3QodGhpcy5fdHlwZSwgcmVzdWx0LmRhdGEpO1xuICAgIC8vIH1cblxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIGEgc3RhbmRhcmQgZ2V0IG1hbnkgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBzZWN1cmUgLSBFbnVtIGluZGljYXRpbmcgd2hldGhlciB0aGUgQVBJIGVuZHBvaW50IGlzIHNlY3VyZVxuICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiBpdGVtcyBpZiB0aGUgZ2V0IHN1Y2NlZWRlZFxuICAgKiBAYXN5bmNcbiAgICovXG4gIHByb3RlY3RlZCBhc3luYyBfZ2V0TWFueTxUPihzZWN1cmU6IFNlY3VyZSk6IFByb21pc2U8VFtdPiB7XG4gICAgY29uc3QgaGVhZGVycyA9IHRoaXMuZ2V0SGVhZGVyKHNlY3VyZSk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5odHRwQ2xpZW50XG4gICAgICAuZ2V0PEFycmF5RHRvPFQ+PihVcmxVdGlsLmpvaW4odGhpcy5hcGlSb290LCB0aGlzLl9iYXNlRW5kcG9pbnQpLCB7XG4gICAgICAgIGhlYWRlcnNcbiAgICAgIH0pXG4gICAgICAudG9Qcm9taXNlKCk7XG5cbiAgICBpZiAoRHRvLmlzRXJyb3IocmVzdWx0LnN0YXR1cy5jb2RlKSkge1xuICAgICAgYXdhaXQgdGhpcy5lcnJvckRpYWxvZ1NlcnZpY2Uub3BlbkVycm9yRGlhbG9nKFxuICAgICAgICByZXN1bHQuc3RhdHVzLnRleHQsXG4gICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZVxuICAgICAgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIGEgbm9uLXN0YW5kYXJkIGdldCBtYW55IEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSByZXF1ZXN0IG9wdGlvbnNcbiAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgaXRlbXMgaWYgdGhlIGdldCBzdWNjZWVkZWRcbiAgICogQGFzeW5jXG4gICAqL1xuICBwcm90ZWN0ZWQgYXN5bmMgX2dldE1hbnlXaXRoT3B0aW9uczxUPihvcHRpb25zOiBPcHRpb25zKTogUHJvbWlzZTxUW10+IHtcbiAgICBsZXQgdXJsOiBzdHJpbmc7XG4gICAgaWYgKG9wdGlvbnMudXJsKSB7XG4gICAgICB1cmwgPSBvcHRpb25zLnVybDtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gVXJsVXRpbC5qb2luKHRoaXMuYXBpUm9vdCwgdGhpcy5fYmFzZUVuZHBvaW50LCBvcHRpb25zLnVybCk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmlkKSB7XG4gICAgICB1cmwgPSBVcmxVdGlsLmpvaW4odXJsLCBvcHRpb25zLmlkKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMucGFyYW1ldGVycy5oYXNQYXJhbWV0ZXJzKSB7XG4gICAgICB1cmwgPSBVcmxVdGlsLmpvaW4odXJsLCBvcHRpb25zLnBhcmFtZXRlcnMuZ2V0UGFyYW10ZXJTdHJpbmcoKSk7XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLmdldEhlYWRlcihvcHRpb25zLnNlY3VyZSk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5odHRwQ2xpZW50XG4gICAgICAuZ2V0PEFycmF5RHRvPFQ+Pih1cmwsIHsgaGVhZGVycyB9KVxuICAgICAgLnRvUHJvbWlzZSgpO1xuXG4gICAgaWYgKER0by5pc0Vycm9yKHJlc3VsdC5zdGF0dXMuY29kZSwgb3B0aW9ucy5zdXBwcmVzc2VkRXJyb3JzKSkge1xuICAgICAgYXdhaXQgdGhpcy5lcnJvckRpYWxvZ1NlcnZpY2Uub3BlbkVycm9yRGlhbG9nKFxuICAgICAgICByZXN1bHQuc3RhdHVzLnRleHQsXG4gICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZVxuICAgICAgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIGEgc3RhbmRhcmQgcG9zdCBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIG9iamVjdCAtIFRoZSBvYmplY3QgdG8gcG9zdFxuICAgKiBAcGFyYW0gc2VjdXJlIC0gRW51bSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIEFQSSBlbmRwb2ludCBpcyBzZWN1cmVcbiAgICogQHBhcmFtIHZhbGlkYXRlSWQgLSBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGVuIG9iamVjdCdzIElEIHNob3VsZCBiZSB2YWxpZGF0ZWRcbiAgICogQHJldHVybnMgVGhlIHBvc3RlZCBvYmplY3RcbiAgICogQGFzeW5jXG4gICAqL1xuICBwcm90ZWN0ZWQgYXN5bmMgX3Bvc3Q8VD4oXG4gICAgb2JqZWN0OiBhbnksXG4gICAgc2VjdXJlOiBTZWN1cmUsXG4gICAgdmFsaWRhdGVJZDogYm9vbGVhbiA9IHRydWVcbiAgKTogUHJvbWlzZTxUPiB7XG4gICAgaWYgKHZhbGlkYXRlSWQpIHtcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMudmFsaWRhdGVNb2RlbElkKFxuICAgICAgICAgIG9iamVjdCxcbiAgICAgICAgICAnRXJyb3IgcG9zdGluZyBhIHJlY29yZC4gSW52YWxpZCBtb2RlbCBJRC4nXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgaGVhZGVycyA9IHRoaXMuZ2V0SGVhZGVyKHNlY3VyZSk7XG4gICAgY29uc3QgdXJsID0gVXJsVXRpbC5qb2luKHRoaXMuYXBpUm9vdCwgdGhpcy5fYmFzZUVuZHBvaW50KTtcblxuICAgIGxldCByZXN1bHQ6IEl0ZW1EdG88VD47XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IGF3YWl0IHRoaXMuaHR0cENsaWVudFxuICAgICAgICAucG9zdDxJdGVtRHRvPFQ+PihcbiAgICAgICAgICBVcmxVdGlsLmpvaW4odGhpcy5hcGlSb290LCB0aGlzLl9iYXNlRW5kcG9pbnQpLFxuICAgICAgICAgIG9iamVjdCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXJzXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIC50b1Byb21pc2UoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coJyoqKioqKioqKionKTtcbiAgICAgIGNvbnNvbGUubG9nKCdIVFRQIFBvc3QgRXJyb3InKTtcbiAgICAgIGNvbnNvbGUubG9nKCdVUkw6ICcgKyB1cmwpO1xuICAgICAgY29uc29sZS5sb2cob2JqZWN0KTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cblxuICAgIGlmIChEdG8uaXNFcnJvcihyZXN1bHQuc3RhdHVzLmNvZGUpKSB7XG4gICAgICBhd2FpdCB0aGlzLmVycm9yRGlhbG9nU2VydmljZS5vcGVuRXJyb3JEaWFsb2coXG4gICAgICAgIHJlc3VsdC5zdGF0dXMudGV4dCxcbiAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlXG4gICAgICApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGwgYSBub24tc3RhbmRhcmQgcG9zdCBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIG9iamVjdCAtIFRoZSBvYmplY3QgdG8gcG9zdFxuICAgKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSByZXF1ZXN0IG9wdGlvbnNcbiAgICogQHJldHVybnMgVGhlIHBvc3RlZCBvYmplY3RcbiAgICogQGFzeW5jXG4gICAqL1xuICBwcm90ZWN0ZWQgYXN5bmMgX3Bvc3RXaXRoT3B0aW9uczxUPihcbiAgICBvYmplY3Q6IGFueSxcbiAgICBvcHRpb25zOiBPcHRpb25zXG4gICk6IFByb21pc2U8VD4ge1xuICAgIGlmIChvcHRpb25zLnZhbGlkYXRlSWQpIHtcbiAgICAgIGlmIChcbiAgICAgICAgIXRoaXMudmFsaWRhdGVNb2RlbElkKFxuICAgICAgICAgIG9iamVjdCxcbiAgICAgICAgICAnRXJyb3IgcG9zdGluZyBhIHJlY29yZC4gSW52YWxpZCBtb2RlbCBJRC4nXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHVybDogc3RyaW5nO1xuICAgIGlmIChvcHRpb25zLnVybCkge1xuICAgICAgdXJsID0gb3B0aW9ucy51cmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybCA9IFVybFV0aWwuam9pbih0aGlzLmFwaVJvb3QsIHRoaXMuX2Jhc2VFbmRwb2ludCwgb3B0aW9ucy51cmwpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5pZCkge1xuICAgICAgdXJsICs9IG9wdGlvbnMuaWQ7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnBhcmFtZXRlcnMuaGFzUGFyYW1ldGVycykge1xuICAgICAgdXJsICs9IG9wdGlvbnMucGFyYW1ldGVycy5nZXRQYXJhbXRlclN0cmluZygpO1xuICAgIH1cbiAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5nZXRIZWFkZXIob3B0aW9ucy5zZWN1cmUpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5odHRwQ2xpZW50XG4gICAgICAucG9zdDxJdGVtRHRvPFQ+Pih1cmwsIG9iamVjdCwge1xuICAgICAgICBoZWFkZXJzXG4gICAgICB9KVxuICAgICAgLnRvUHJvbWlzZSgpO1xuXG4gICAgaWYgKER0by5pc0Vycm9yKHJlc3VsdC5zdGF0dXMuY29kZSwgb3B0aW9ucy5zdXBwcmVzc2VkRXJyb3JzKSkge1xuICAgICAgYXdhaXQgdGhpcy5lcnJvckRpYWxvZ1NlcnZpY2Uub3BlbkVycm9yRGlhbG9nKFxuICAgICAgICByZXN1bHQuc3RhdHVzLnRleHQsXG4gICAgICAgIHJlc3VsdC5zdGF0dXMubWVzc2FnZVxuICAgICAgKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQuZGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIGEgc3RhbmRhcmQgcHV0IEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0gb2JqZWN0IC0gVGhlIG9iamVjdCB0byBwdXRcbiAgICogQHBhcmFtIHNlY3VyZSAtIEVudW0gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBBUEkgZW5kcG9pbnQgaXMgc2VjdXJlXG4gICAqIEBwYXJhbSB2YWxpZGF0ZUlkIC0gQm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlbiBvYmplY3QncyBJRCBzaG91bGQgYmUgdmFsaWRhdGVkXG4gICAqIEByZXR1cm5zIFRoZSB1cGRhdGVkIG9iamVjdFxuICAgKiBAYXN5bmNcbiAgICovXG4gIHByb3RlY3RlZCBhc3luYyBfcHV0PFQgZXh0ZW5kcyBCYXNlTW9kZWw+KFxuICAgIG9iamVjdDogYW55LFxuICAgIHNlY3VyZTogU2VjdXJlLFxuICAgIHZhbGlkYXRlSWQ6IGJvb2xlYW4gPSB0cnVlXG4gICk6IFByb21pc2U8VD4ge1xuICAgIGlmIChvYmplY3QgJiYgdmFsaWRhdGVJZCkge1xuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy52YWxpZGF0ZU1vZGVsSWQoXG4gICAgICAgICAgb2JqZWN0LFxuICAgICAgICAgICdFcnJvciBwdXR0aW5nIGEgcmVjb3JkLiBJbnZhbGlkIG1vZGVsIElELidcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5nZXRIZWFkZXIoc2VjdXJlKTtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmh0dHBDbGllbnRcbiAgICAgIC5wdXQ8SXRlbUR0bzxUPj4oXG4gICAgICAgIFVybFV0aWwuam9pbih0aGlzLmFwaVJvb3QsIHRoaXMuX2Jhc2VFbmRwb2ludCwgb2JqZWN0Ll9pZCksXG4gICAgICAgIG9iamVjdCxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnNcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnRvUHJvbWlzZSgpO1xuXG4gICAgaWYgKER0by5pc0Vycm9yKHJlc3VsdC5zdGF0dXMuY29kZSkpIHtcbiAgICAgIGF3YWl0IHRoaXMuZXJyb3JEaWFsb2dTZXJ2aWNlLm9wZW5FcnJvckRpYWxvZyhcbiAgICAgICAgcmVzdWx0LnN0YXR1cy50ZXh0LFxuICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2VcbiAgICAgICk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbCBhIG5vbi1zdGFuZGFyZCBwdXQgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSBvYmplY3QgLSBUaGUgb2JqZWN0IHRvIHB1dFxuICAgKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSByZXF1ZXN0IG9wdGlvbnNcbiAgICogQHJldHVybnMgVGhlIHVwZGF0ZWQgb2JqZWN0XG4gICAqIEBhc3luY1xuICAgKi9cbiAgcHJvdGVjdGVkIGFzeW5jIF9wdXRXaXRoT3B0aW9uczxUPihcbiAgICBvcHRpb25zOiBPcHRpb25zLFxuICAgIG9iamVjdD86IGFueVxuICApOiBQcm9taXNlPFQ+IHtcbiAgICBpZiAob2JqZWN0ICYmIG9wdGlvbnMudmFsaWRhdGVJZCkge1xuICAgICAgaWYgKFxuICAgICAgICAhdGhpcy52YWxpZGF0ZU1vZGVsSWQoXG4gICAgICAgICAgb2JqZWN0LFxuICAgICAgICAgICdFcnJvciBwdXR0aW5nIGEgcmVjb3JkLiBJbnZhbGlkIG1vZGVsIElELidcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgdXJsOiBzdHJpbmc7XG4gICAgaWYgKG9wdGlvbnMudXJsKSB7XG4gICAgICB1cmwgPSBvcHRpb25zLnVybDtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gVXJsVXRpbC5qb2luKHRoaXMuYXBpUm9vdCwgdGhpcy5fYmFzZUVuZHBvaW50LCBvcHRpb25zLnVybCk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmlkKSB7XG4gICAgICB1cmwgPSBVcmxVdGlsLmpvaW4odXJsLCBvcHRpb25zLmlkKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMucGFyYW1ldGVycy5oYXNQYXJhbWV0ZXJzKSB7XG4gICAgICB1cmwgPSBVcmxVdGlsLmpvaW4odXJsLCBvcHRpb25zLnBhcmFtZXRlcnMuZ2V0UGFyYW10ZXJTdHJpbmcoKSk7XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLmdldEhlYWRlcihvcHRpb25zLnNlY3VyZSk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5odHRwQ2xpZW50XG4gICAgICAucHV0PEl0ZW1EdG88VD4+KHVybCwgb2JqZWN0LCB7XG4gICAgICAgIGhlYWRlcnNcbiAgICAgIH0pXG4gICAgICAudG9Qcm9taXNlKCk7XG5cbiAgICBpZiAoRHRvLmlzRXJyb3IocmVzdWx0LnN0YXR1cy5jb2RlLCBvcHRpb25zLnN1cHByZXNzZWRFcnJvcnMpKSB7XG4gICAgICBhd2FpdCB0aGlzLmVycm9yRGlhbG9nU2VydmljZS5vcGVuRXJyb3JEaWFsb2coXG4gICAgICAgIHJlc3VsdC5zdGF0dXMudGV4dCxcbiAgICAgICAgcmVzdWx0LnN0YXR1cy5tZXNzYWdlXG4gICAgICApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdC5kYXRhO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFzeW5jIF9zZWFyY2hXaXRoT3B0aW9uczxUPihcbiAgICBvcHRpb25zOiBPcHRpb25zXG4gICk6IFByb21pc2U8U2VhcmNoUmVzdWx0c0NvbnRhaW5lcjxUPj4ge1xuICAgIGxldCB1cmw6IHN0cmluZztcbiAgICBpZiAob3B0aW9ucy51cmwpIHtcbiAgICAgIHVybCA9IG9wdGlvbnMudXJsO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cmwgPSBVcmxVdGlsLmpvaW4odGhpcy5hcGlSb290LCB0aGlzLmJhc2VFbmRwb2ludCwgb3B0aW9ucy51cmwpO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5pZCkge1xuICAgICAgdXJsID0gVXJsVXRpbC5qb2luKHVybCwgb3B0aW9ucy5pZCk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnBhcmFtZXRlcnMuaGFzUGFyYW1ldGVycykge1xuICAgICAgdXJsID0gVXJsVXRpbC5qb2luKHVybCwgb3B0aW9ucy5wYXJhbWV0ZXJzLmdldFBhcmFtdGVyU3RyaW5nKCkpO1xuICAgICAgY29uc29sZS5sb2coJ0NhY2hlIGJ1c3RpbmcgVVJMOicgKyB1cmwpO1xuICAgIH1cbiAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5nZXRIZWFkZXIob3B0aW9ucy5zZWN1cmUpO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuaHR0cENsaWVudFxuICAgICAgLmdldDxTZWFyY2hSZXN1bHRzRHRvPFQ+Pih1cmwsIHtcbiAgICAgICAgaGVhZGVyc1xuICAgICAgfSlcbiAgICAgIC50b1Byb21pc2UoKTtcblxuICAgIGlmIChcbiAgICAgIFNlYXJjaFJlc3VsdHNEdG8uaXNFcnJvcihyZXN1bHQuc3RhdHVzLmNvZGUsIG9wdGlvbnMuc3VwcHJlc3NlZEVycm9ycylcbiAgICApIHtcbiAgICAgIGF3YWl0IHRoaXMuZXJyb3JEaWFsb2dTZXJ2aWNlLm9wZW5FcnJvckRpYWxvZyhcbiAgICAgICAgcmVzdWx0LnN0YXR1cy50ZXh0LFxuICAgICAgICByZXN1bHQuc3RhdHVzLm1lc3NhZ2VcbiAgICAgICk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzZWFyY2hSZXN1bHRzQ29udGFpbmVyID0gbmV3IFNlYXJjaFJlc3VsdHNDb250YWluZXI8VD4ocmVzdWx0KTtcbiAgICByZXR1cm4gc2VhcmNoUmVzdWx0c0NvbnRhaW5lcjtcbiAgfVxuXG4gIHByb3RlY3RlZCBfdXBsb2FkRm9ybURhdGEoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgZGF0YTogRm9ybURhdGEsXG4gICAgc2VjdXJlOiBTZWN1cmVcbiAgKTogT2JzZXJ2YWJsZTxVcGxvYWRFdmVudD4ge1xuICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLmdldEhlYWRlcihzZWN1cmUpO1xuICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnRcbiAgICAgIC5wb3N0PGFueT4odXJsLCBkYXRhLCB7XG4gICAgICAgIGhlYWRlcnMsXG4gICAgICAgIHJlcG9ydFByb2dyZXNzOiB0cnVlLFxuICAgICAgICBvYnNlcnZlOiAnZXZlbnRzJ1xuICAgICAgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoZXZlbnQgPT4ge1xuICAgICAgICAgIGxldCB1cGxvYWRFdmVudDogVXBsb2FkRXZlbnQ7XG4gICAgICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEh0dHBFdmVudFR5cGUuVXBsb2FkUHJvZ3Jlc3M6XG4gICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5yb3VuZCgoMTAwICogZXZlbnQubG9hZGVkKSAvIGV2ZW50LnRvdGFsKTtcbiAgICAgICAgICAgICAgdXBsb2FkRXZlbnQgPSBuZXcgVXBsb2FkRXZlbnQoJ1Byb2dyZXNzJyk7XG4gICAgICAgICAgICAgIHVwbG9hZEV2ZW50LnByb2dyZXNzUGVyY2VudCA9IHByb2dyZXNzO1xuICAgICAgICAgICAgICByZXR1cm4gdXBsb2FkRXZlbnQ7XG5cbiAgICAgICAgICAgIGNhc2UgSHR0cEV2ZW50VHlwZS5SZXNwb25zZTpcbiAgICAgICAgICAgICAgdXBsb2FkRXZlbnQgPSBuZXcgVXBsb2FkRXZlbnQoJ1Jlc3BvbnNlJywgZXZlbnQuYm9keSk7XG4gICAgICAgICAgICAgIHJldHVybiB1cGxvYWRFdmVudDtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHVwbG9hZEV2ZW50ID0gbmV3IFVwbG9hZEV2ZW50KFxuICAgICAgICAgICAgICAgICdFcnJvcicsXG4gICAgICAgICAgICAgICAgYFVuaGFuZGxlZCBldmVudDogJHtldmVudC50eXBlfWBcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHVwbG9hZEV2ZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlIGFuIGVycm9yIGZvciBhbiBvYnNlcnZhYmxlIHJlcXVlc3RcbiAgICogQHBhcmFtIHNlcnZpY2VOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHNlcnZpY2UgcmVwb3J0aW5nIHRoZSBlcnJvclxuICAgKiBAcGFyYW0gcmVzdWx0IC0gVGhlIHJldHVybiB0byByZXR1cm5cbiAgICovXG4gIHByb3RlY3RlZCBoYW5kbGVPYnNlcnZhYmxlRXJyb3Ioc2VydmljZU5hbWU6IHN0cmluZywgcmVzdWx0ID0ge30pIHtcbiAgICByZXR1cm4gKGVycm9yOiBDbGllbnRFcnJvclJlcG9ydCk6IE9ic2VydmFibGU8YW55PiA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKHNlcnZpY2VOYW1lLCBlcnJvcik7XG4gICAgICBjb25zb2xlLmVycm9yKHNlcnZpY2VOYW1lICsgJyBlcnJvciBzdGF0dXMnLCBlcnJvci5zdGF0dXMpO1xuICAgICAgcmV0dXJuIG9mKHJlc3VsdCk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgYW4gZXJyb3IgZm9yIGEgc3RhbmRhcmQgcHJvbWlzZSByZXF1ZXN0XG4gICAqIEBwYXJhbSBzZXJ2aWNlTmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlIHJlcG9ydGluZyB0aGUgZXJyb3JcbiAgICogQHBhcmFtIG1ldGhvZCAtIFRoZSBuYW1lIG9mIHRoZSBtZXRob2QgcmVwb3J0aW5nIHRoZSBlcnJvclxuICAgKiBAcGFyYW0gZXJyb3IgLSBUaGUgZXJyb3Igb2JqZWN0XG4gICAqIEBhc3luY1xuICAgKi9cbiAgcHJvdGVjdGVkIGFzeW5jIGhhbmRsZVByb21pc2VFcnJvcihcbiAgICBzZXJ2aWNlTmFtZTogc3RyaW5nLFxuICAgIG1ldGhvZDogc3RyaW5nLFxuICAgIGVycm9yOiBhbnlcbiAgKTogUHJvbWlzZTxudWxsPiB7XG4gICAgY29uc29sZS5sb2coXG4gICAgICAnU2VydmljZTogJyArXG4gICAgICBzZXJ2aWNlTmFtZSArXG4gICAgICAnIE1ldGhvZDogJyArXG4gICAgICBtZXRob2QgK1xuICAgICAgJyBNZXNzYWdlOiAnICtcbiAgICAgIGVycm9yLm1lc3NhZ2VcbiAgICApO1xuXG4gICAgYXdhaXQgdGhpcy5lcnJvckRpYWxvZ1NlcnZpY2Uub3BlbkVycm9yRGlhbG9nKFxuICAgICAgJ1VuaGFuZGxlZCBFeGNlcHRpb24nLFxuICAgICAgJ0FuIHVuaGFuZGxlZCBleGNlcHRpb24gZXJyb3Igb2NjdXJyZWQ6ICcgKyBlcnJvci5tZXNzYWdlXG4gICAgKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHJlcXVlc3QgaGVhZGVyXG4gICAqIEBwYXJhbSBzZWN1cmUgLSBFbnVtIGluZGljYXRpbmcgdGhlIHR5cGUgb2YgQVBJIGVuZHBvaW5nIHNlY3VyaXR5XG4gICAqIEByZXR1cm5zIEFuIEhUVFAgaGVhZGVyXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0SGVhZGVyKHNlY3VyZTogU2VjdXJlKTogSHR0cEhlYWRlcnMge1xuICAgIHN3aXRjaCAoc2VjdXJlKSB7XG4gICAgICBjYXNlIFNlY3VyZS50cnVlOlxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoSGVhZGVyO1xuICAgICAgY2FzZSBTZWN1cmUuYXBpOlxuICAgICAgICByZXR1cm4gdGhpcy5hcGlIZWFkZXI7XG4gICAgICBjYXNlIFNlY3VyZS5mYWxzZTpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLm5vVG9rZW5IZWFkZXI7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIHRoZSBJRCBvZiBhIG1vZGVsXG4gICAqIEBwYXJhbSBtb2RlbCAtIFRoZSBtb2RlbCB0byB2YWxpZGF0ZVxuICAgKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSBtZXNzYWdlIHRvIGRpc3BsYXkgaWYgdmFsaWRhdGluZyBmYWlsc1xuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWxpZGF0aW9uIHN1Y2NlZWRlZFxuICAgKiBAYXN5bmNcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgdmFsaWRhdGVNb2RlbElkKG1vZGVsOiBhbnksIG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghbW9kZWwuX2lkKSB7XG4gICAgICBhd2FpdCB0aGlzLmVycm9yRGlhbG9nU2VydmljZS5vcGVuRXJyb3JEaWFsb2coXG4gICAgICAgICdJbnZhbGlkIE1vZGVsIElEJyxcbiAgICAgICAgbWVzc2FnZVxuICAgICAgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGUgdGhlIElEIG9mIGEgbW9kZWxcbiAgICogQHBhcmFtIGlkIC0gVGhlIElEIHRvIHZhbGlkYXRlXG4gICAqIEBwYXJhbSBtZXNzYWdlIC0gVGhlIG1lc3NhZ2UgdG8gZGlzcGxheSBpZiB2YWxpZGF0aW5nIGZhaWxzXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbGlkYXRpb24gc3VjY2VlZGVkXG4gICAqIEBhc3luY1xuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyB2YWxpZGF0ZUlkKGlkOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaWQpIHtcbiAgICAgIGF3YWl0IHRoaXMuZXJyb3JEaWFsb2dTZXJ2aWNlLm9wZW5FcnJvckRpYWxvZyhcbiAgICAgICAgJ0ludmFsaWQgTW9kZWwgSUQnLFxuICAgICAgICBtZXNzYWdlXG4gICAgICApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl19
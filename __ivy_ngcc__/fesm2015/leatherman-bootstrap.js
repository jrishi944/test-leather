import { __awaiter, __decorate, __param } from 'tslib';
import { Component, Pipe, InjectionToken, NgModule, Input, ɵɵdefineInjectable, ɵɵinject, Injectable, Inject, EventEmitter, Output, Directive } from '@angular/core';
import { takeUntil, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Subject, of } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpHeaders, HttpEventType, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JwtHelperService } from '@auth0/angular-jwt';
import { isEqual, cloneDeep, slice } from 'lodash';
import { plainToClass } from 'class-transformer';
import { generate } from 'shortid';

/**
 * Base Leatherman component
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/platform-browser';
import * as ɵngcc2 from '@ng-bootstrap/ng-bootstrap';
import * as ɵngcc3 from '@angular/router';
import * as ɵngcc4 from '@angular/common/http';
let BaseComponent = class BaseComponent {
    // constructor
    constructor() {
        /** Boolean indicating whether the component has been initialized */
        this.isInitialized = false;
        /** Boolean indicating whether the component's data is loading */
        this.isLoading = false;
        /** An RXJS subject used to destroy subscriptions when the component is destroyed */
        this.destroySubject$ = new Subject();
    }
    /**
     * Trigger the destroy subject  when the component is destroyed
     */
    ngOnDestroy() {
        this.destroySubject$.next();
    }
    decodeURIComponent(uriComponent) {
        if (!uriComponent) {
            return uriComponent;
        }
        return decodeURIComponent(uriComponent);
    }
    encodeURIComponent(uriComponent) {
        if (!uriComponent) {
            return uriComponent;
        }
        return encodeURIComponent(uriComponent);
    }
    /**
     * Subscribe to a subject
     * @param subject$ - The subject to subscribe to
     * @param callback - The callback method to call when the subject is triggered
     * @returns Void
     */
    subscribeSubject(subject$, callback) {
        subject$.pipe(takeUntil(this.destroySubject$)).subscribe((result) => __awaiter(this, void 0, void 0, function* () {
            yield callback(result);
        }));
    }
    /**
     * Subscribe to a subject synchronously
     * @param subject$ - The subject to subscribe to
     * @param callback - The callback method to call when the subject is triggered
     * @returns Void
     */
    subscribeSubjectSync(subject$, callback) {
        subject$.pipe(takeUntil(this.destroySubject$)).subscribe(result => {
            callback(result);
        });
    }
    /**
     * Subscribe to value change events for a control
     * @param control - The control to listen to
     * @param callback - The functiion to call when the control value changes
     */
    subscribeValueChanges(control, callback) {
        control.valueChanges
            .pipe(debounceTime(400), distinctUntilChanged())
            .pipe(takeUntil(this.destroySubject$))
            .subscribe((result) => __awaiter(this, void 0, void 0, function* () {
            yield callback(result);
        }));
    }
};
BaseComponent.ɵfac = function BaseComponent_Factory(t) { return new (t || BaseComponent)(); };
BaseComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BaseComponent, selectors: [["lm-base-component"]], decls: 1, vars: 0, template: function BaseComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtext(0, "No UI Here");
    } }, encapsulation: 2 });

/**
 * A pipe to transform HTML to safe HTML
 */
let SafeHtmlPipe = class SafeHtmlPipe {
    /**
     * Constructor
     * @param sanitizer - A reference to the DomSanitizer service
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * Transform the passed HTML
     * @param html - The HTML to transform
     * @returns The transformed HTML
     */
    transform(html) {
        const sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(html);
        return sanitizedHtml;
    }
};
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DomSanitizer)); };
SafeHtmlPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "safeHtml", type: SafeHtmlPipe, pure: true });
SafeHtmlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];

const LeathermanAppConfigInjectionToken = new InjectionToken('LeathermanAppConfig');

const ErrorDialogServiceInjectionToken = new InjectionToken('ErrorDialogService');

const ConfirmDialogServiceInjectionToken = new InjectionToken('ConfirmDialogService');

let AngularModule = 
/**
 * A module importing and exporting common Angular modules
 */
class AngularModule {
};
AngularModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: AngularModule });
AngularModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function AngularModule_Factory(t) { return new (t || AngularModule)(); }, imports: [[
            CommonModule,
            RouterModule,
            HttpClientModule,
            ReactiveFormsModule,
        ],
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        HttpClientModule,
        ReactiveFormsModule] });

/**
 * A dialog component to display an error message
 */
let ErrorDialogComponent = class ErrorDialogComponent {
    /**
     * @param activeModal - A reference to the dialog
     */
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() {
        this.title = this.data.title;
        this.message = this.data.message;
    }
    /**
     * Method called when the dialog is cancelled
     */
    onClose() {
        this.activeModal.close();
    }
};
ErrorDialogComponent.ɵfac = function ErrorDialogComponent_Factory(t) { return new (t || ErrorDialogComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NgbActiveModal)); };
ErrorDialogComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ErrorDialogComponent, selectors: [["lm-error-dialog"]], inputs: { data: "data" }, decls: 9, vars: 2, consts: [[1, "modal-header"], [1, "modal-title"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"]], template: function ErrorDialogComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "h4", 1);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵelementStart(4, "p");
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 3);
        ɵngcc0.ɵɵelementStart(7, "button", 4);
        ɵngcc0.ɵɵlistener("click", function ErrorDialogComponent_Template_button_click_7_listener() { return ctx.onClose(); });
        ɵngcc0.ɵɵtext(8, " Ok ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.title);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.message);
    } }, styles: [""] });
ErrorDialogComponent.ctorParameters = () => [
    { type: NgbActiveModal }
];
__decorate([
    Input()
], ErrorDialogComponent.prototype, "data", void 0);

/**
 * A class to store the results from a dialog
 */
class DialogResult {
    /**
     * @param button - The clicked button
     * @param data - The data returned by the dialog
     * @param data2 - Additional data returned by the diaoig
     * @param data3 - Additional data returned by the dialog
     */
    constructor(button, data, data2, data3) {
        this.button = button;
        this.data = data;
        this.data2 = data2;
        this.data3 = data3;
    }
}

/**
 * Enumeration representing return values from dialogs
 */
var DialogButton;
(function (DialogButton) {
    /** An error occurred in the dialog */
    DialogButton[DialogButton["Error"] = -1] = "Error";
    /** The user clicked the OK button */
    DialogButton[DialogButton["OK"] = 0] = "OK";
    /** The user clicked the cancel button */
    DialogButton[DialogButton["Cancel"] = 1] = "Cancel";
})(DialogButton || (DialogButton = {}));

/**
 * A dialog component to prompt the user for a YES/NO answer
 */
let ConfirmDialogComponent = class ConfirmDialogComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() {
    }
    onCancel() {
        const dialogResult = new DialogResult(DialogButton.Cancel);
        this.activeModal.close(dialogResult);
    }
    onConfirm() {
        const dialogResult = new DialogResult(DialogButton.OK);
        this.activeModal.close(dialogResult);
    }
};
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.NgbActiveModal)); };
ConfirmDialogComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ConfirmDialogComponent, selectors: [["lm-confirm-dialog"]], inputs: { dialogData: "dialogData" }, decls: 14, vars: 2, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "h4", 1);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "button", 2);
        ɵngcc0.ɵɵlistener("click", function ConfirmDialogComponent_Template_button_click_3_listener() { return ctx.onCancel(); });
        ɵngcc0.ɵɵelementStart(4, "span", 3);
        ɵngcc0.ɵɵtext(5, "\u00D7");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 4);
        ɵngcc0.ɵɵelementStart(7, "p");
        ɵngcc0.ɵɵtext(8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(9, "div", 5);
        ɵngcc0.ɵɵelementStart(10, "button", 6);
        ɵngcc0.ɵɵlistener("click", function ConfirmDialogComponent_Template_button_click_10_listener() { return ctx.onCancel(); });
        ɵngcc0.ɵɵtext(11, " Cancel ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "button", 7);
        ɵngcc0.ɵɵlistener("click", function ConfirmDialogComponent_Template_button_click_12_listener() { return ctx.onConfirm(); });
        ɵngcc0.ɵɵtext(13, " Confirm ");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.dialogData.title);
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵtextInterpolate(ctx.dialogData.message);
    } }, styles: [""] });
ConfirmDialogComponent.ctorParameters = () => [
    { type: NgbActiveModal }
];
__decorate([
    Input()
], ConfirmDialogComponent.prototype, "dialogData", void 0);

var LeathermanModule_1;
let LeathermanModule = LeathermanModule_1 = 
/**
 * A module declaring and exporting Leatherman components
 */
class LeathermanModule {
    static forRoot(appConfig, errorDialogService, confirmDialogService) {
        return {
            ngModule: LeathermanModule_1,
            providers: [
                {
                    provide: LeathermanAppConfigInjectionToken,
                    useValue: appConfig
                },
                {
                    provide: ErrorDialogServiceInjectionToken,
                    useClass: errorDialogService
                },
                {
                    provide: ConfirmDialogServiceInjectionToken,
                    useClass: confirmDialogService
                }
            ]
        };
    }
};
LeathermanModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LeathermanModule });
LeathermanModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LeathermanModule_Factory(t) { return new (t || LeathermanModule)(); }, imports: [[AngularModule]] });

/**
 * Array of state abbrevations
 */
const STATE_ABBREVIATIONS = [
    'AK',
    'AL',
    'AR',
    'AS',
    'AZ',
    'CA',
    'CO',
    'CT',
    'DC',
    'DE',
    'FL',
    'GA',
    'GU',
    'HI',
    'IA',
    'ID',
    'IL',
    'IN',
    'KS',
    'KY',
    'LA',
    'MA',
    'MD',
    'ME',
    'MI',
    'MN',
    'MO',
    'MS',
    'MT',
    'NC',
    'ND',
    'NE',
    'NH',
    'NJ',
    'NM',
    'NV',
    'NY',
    'OH',
    'OK',
    'OR',
    'PA',
    'PR',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VA',
    'VI',
    'VT',
    'WA',
    'WI',
    'WV',
    'WY'
];

/**
 * A class to store confirm dialog data
 */
class ConfirmDialogData {
    /**
     * @param title - The title of the confirm dialog
     * @param message - The message to display in the confirm dialog
     */
    constructor(title, message) {
        this.title = title;
        this.message = message;
    }
}

let ConfirmDialogService = class ConfirmDialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openConfirmDialog(title, message) {
        return __awaiter(this, void 0, void 0, function* () {
            const confirmDialogData = new ConfirmDialogData(title, message);
            const dialogRef = this.dialog.open(ConfirmDialogComponent, {
                backdrop: "static",
                keyboard: false,
            });
            dialogRef.componentInstance.dialogData = confirmDialogData;
            const result = yield dialogRef.result;
            return result;
        });
    }
};
ConfirmDialogService.ɵfac = function ConfirmDialogService_Factory(t) { return new (t || ConfirmDialogService)(ɵngcc0.ɵɵinject(ɵngcc2.NgbModal)); };
ConfirmDialogService.ctorParameters = () => [
    { type: NgbModal }
];
ConfirmDialogService.ɵprov = ɵɵdefineInjectable({ factory: function ConfirmDialogService_Factory() { return new ConfirmDialogService(ɵɵinject(NgbModal)); }, token: ConfirmDialogService, providedIn: "root" });

/**
 * A service to mock the confirm dialog service
 */
let MockConfirmDialogService = class MockConfirmDialogService extends ConfirmDialogService {
    /**
     * @param dialog - A reference to the NgbModal service
     */
    constructor(dialog) {
        super(dialog);
    }
    /**
     * Display a confirm dialog
     * @param title - The title of the confirm dialog
     * @param message - The message to display in the confirm dialog
     */
    openConfirmDialog(title, message) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Using mock confirm dialog service.');
            return Promise.resolve(new DialogResult(DialogButton.OK));
        });
    }
};
MockConfirmDialogService.ɵfac = function MockConfirmDialogService_Factory(t) { return new (t || MockConfirmDialogService)(ɵngcc0.ɵɵinject(ɵngcc2.NgbModal)); };
MockConfirmDialogService.ctorParameters = () => [
    { type: NgbModal }
];
MockConfirmDialogService.ɵprov = ɵɵdefineInjectable({ factory: function MockConfirmDialogService_Factory() { return new MockConfirmDialogService(ɵɵinject(NgbModal)); }, token: MockConfirmDialogService, providedIn: "root" });

/**
 * A class to store error/confirm dialog data
 */
class ErrorDialogData {
    /**
     * @param title - The title of the error dialog
     * @param message - The message to display in the error dialog
     */
    constructor(title, message) {
        this.title = title;
        this.message = message;
    }
}

/**
 *  A service to manage and display error dialogs
 */
let ErrorDialogService = class ErrorDialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    /**
     * Open an error dialog
     * @param title - The title of the error dialog
     * @param message - The message to display to the user
     */
    openErrorDialog(title, message) {
        return __awaiter(this, void 0, void 0, function* () {
            const dialogData = new ErrorDialogData(title, message);
            const dialogRef = this.dialog.open(ErrorDialogComponent);
            dialogRef.componentInstance.data = dialogData;
            return new DialogResult(DialogButton.OK);
        });
    }
};
ErrorDialogService.ɵfac = function ErrorDialogService_Factory(t) { return new (t || ErrorDialogService)(ɵngcc0.ɵɵinject(ɵngcc2.NgbModal)); };
ErrorDialogService.ctorParameters = () => [
    { type: NgbModal }
];
ErrorDialogService.ɵprov = ɵɵdefineInjectable({ factory: function ErrorDialogService_Factory() { return new ErrorDialogService(ɵɵinject(NgbModal)); }, token: ErrorDialogService, providedIn: "root" });

/**
 * A service to mock the confirm dialog service
 */
let MockErrorDialogService = class MockErrorDialogService extends ErrorDialogService {
    /**
     * Open an error dialog
     * @param title - The title of the error dialog
     * @param message - The message to display to the user
     */
    openErrorDialog(title, message) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Using mock error dialog service.');
            console.log('Title: ' + title);
            console.log('Title: ' + message);
            return Promise.resolve(new DialogResult(DialogButton.OK));
        });
    }
};
MockErrorDialogService.ɵfac = function MockErrorDialogService_Factory(t) { return ɵMockErrorDialogService_BaseFactory(t || MockErrorDialogService); };
MockErrorDialogService.ɵprov = ɵɵdefineInjectable({ factory: function MockErrorDialogService_Factory() { return new MockErrorDialogService(ɵɵinject(NgbModal)); }, token: MockErrorDialogService, providedIn: "root" });

/**
 * Enumeration representing security options for an API endpoint
 */
var Secure;
(function (Secure) {
    /** The endpoint request a JWT token */
    Secure[Secure["true"] = 0] = "true";
    /** The endpoint is not secure */
    Secure[Secure["false"] = 1] = "false";
    /** The endpoint is secured with an API key */
    Secure[Secure["api"] = 2] = "api";
})(Secure || (Secure = {}));

/**
 * Enumeration representing controller result statuses
 */
var Status;
(function (Status) {
    /** The request succeeded */
    Status[Status["OK"] = 200] = "OK";
    /** The request succeeded and a record was created */
    Status[Status["Created"] = 201] = "Created";
    /** The request succeeded but there was not data to return */
    Status[Status["NoData"] = 204] = "NoData";
    /** The request did not result in any data being changed */
    Status[Status["NotModifed"] = 304] = "NotModifed";
    /** The request was invalid */
    Status[Status["BadRequest"] = 400] = "BadRequest";
    /** The user is not authorized to make the request */
    Status[Status["NotAuthorized"] = 401] = "NotAuthorized";
    /** ;-) */
    Status[Status["ImATeapot"] = 418] = "ImATeapot";
    /** A server error occurred */
    Status[Status["Error"] = 500] = "Error";
})(Status || (Status = {}));

/**
 * Enumeration representing test artifact states
 */
var TestArtifact;
(function (TestArtifact) {
    /** A test artifact */
    TestArtifact[TestArtifact["true"] = 0] = "true";
    /** Not a test artifact */
    TestArtifact[TestArtifact["false"] = 1] = "false";
})(TestArtifact || (TestArtifact = {}));

class GetOptions {
    constructor(currentPage = 1, pageSize = 10) {
        this.query = '';
        this.filter = '';
        this.skip = 0;
        this.take = 10;
        this.sort = '';
        this.sortColumn = '';
        this.sortAscending = true;
        this.take = pageSize;
        this.skip = (currentPage - 1) * pageSize;
    }
    static calculatePageCount(rowCount, pageSize) {
        const pageCount = Math.floor((rowCount - 1) / pageSize) + 1;
        return pageCount;
    }
    setSort(field, ascending = true) {
        this.sortColumn = field;
        this.sortAscending = ascending;
        if (ascending === true) {
            this.sort = field + ':ASC';
        }
        else {
            this.sort = field + ':DESC';
        }
    }
}

class AuthenticationDetails {
    constructor() {
        this.roles = [];
    }
}

class AuthenticationTokenExpiry {
}

/**
 * A class to store login request data
 */
class LoginRequest {
    constructor(
    /** The user's email address */
    email, 
    /** The user's password */
    password) {
        this.email = email;
        this.password = password;
    }
}

/**
 * The base model class
 */
class BaseModel {
    /**
     * @param testArtifact - Enum indicating whether the model is a test artifact
     */
    constructor(testArtifact) {
        if (testArtifact === TestArtifact.true) {
            this.testArtifact = true;
        }
    }
}

class SearchFacetField {
    constructor(field, label, token, isString, facetLabelCallback) {
        this.field = field;
        this.label = label;
        this.token = token;
        this.isString = isString;
        this.facetLabelCallback = facetLabelCallback;
    }
}

class SearchFacetFilterProperties {
    constructor(field, label, isString) {
        this.field = field;
        this.label = label;
        this.isString = isString;
    }
}

class SearchFacetFilter {
    constructor() {
        this.token = '';
        this.value = '';
        this.label = '';
        this.query = '';
        this.field = '';
        this.excludedFacet = false;
        this.isString = false;
    }
}

class SearchFacetOptions {
    constructor() {
        this.fields = [];
        this.rangeQueries = [];
    }
    getRangeQuery(query) {
        const cleanedQuery = query.replace(/{[^}]+}/i, '').trim();
        for (const rangeQuery of this.rangeQueries) {
            if (rangeQuery.query === cleanedQuery) {
                return rangeQuery;
            }
        }
        return null;
    }
}

class SearchFacetRangeFilterProperties {
    constructor(field, label, fromValue, toValue, query, value) {
        this.field = field;
        this.label = label;
        this.fromValue = fromValue;
        this.toValue = toValue;
        this.query = query;
        this.value = value;
    }
}

class SearchFacetRangeFilter {
    constructor() {
        this.token = '';
        this.fromValue = '';
        this.toValue = '';
        this.label = '';
        this.query = '';
        this.field = '';
        this.value = '';
        this.excludedFacet = false;
    }
}

class SearchFacetRangeQuery {
    constructor(field, fromValue, toValue, facetLabel, label, value, token) {
        this.field = field;
        this.fromValue = fromValue;
        this.toValue = toValue;
        this.facetLabel = facetLabel;
        this.label = label;
        this.value = value;
        this.token = token;
        this.query = field + ':[' + fromValue + ' TO ' + toValue + ']';
    }
}

class SearchMatchFilter {
}

class SearchRangeFilter {
}

class SearchOptions {
    constructor() {
        this.facetFilters = [];
        this.facetRangeFilters = [];
        this.otherFilters = [];
    }
    getMatchFilters() {
        const matchFilters = [];
        for (const facetFilter of this.facetFilters) {
            const matchFilter = new SearchMatchFilter();
            if (facetFilter.excludedFacet) {
                matchFilter.field =
                    '{!tag=' + facetFilter.token + '}' + facetFilter.field;
            }
            else {
                matchFilter.field = facetFilter.field;
            }
            if (facetFilter.isString === true) {
                matchFilter.value = '"' + this.urlDecode(facetFilter.value) + '"';
            }
            else {
                matchFilter.value = this.urlDecode(facetFilter.value);
            }
            matchFilters.push(matchFilter);
        }
        for (const otherFilter of this.otherFilters) {
            matchFilters.push(otherFilter);
        }
        return matchFilters;
    }
    getRangeFilters() {
        const matchFilters = [];
        for (const facetFilter of this.facetRangeFilters) {
            const rangeFilter = new SearchRangeFilter();
            if (facetFilter.excludedFacet) {
                rangeFilter.field =
                    '{!tag=' + facetFilter.token + '}' + facetFilter.field;
            }
            else {
                rangeFilter.field = facetFilter.field;
            }
            rangeFilter.query = facetFilter.query;
            rangeFilter.start = this.urlDecode(facetFilter.fromValue);
            rangeFilter.end = this.urlDecode(facetFilter.toValue);
            matchFilters.push(rangeFilter);
        }
        return matchFilters;
    }
    urlDecode(text) {
        const decodedText = decodeURIComponent(text);
        return decodedText;
    }
}

class SearchResultFacetItem {
    constructor() {
        this.label = '';
        this.count = 0;
        this.query = '';
        this.active = false;
    }
    createQuery(q, facetFilters, rangeQueries) {
        let queryString = '';
        queryString = this.appendQueryString(queryString, 'f=');
        let activeFilter = null;
        let foundToken = false;
        for (const facetFilter of facetFilters) {
            if (facetFilter.token === this.token &&
                facetFilter.value === this.value) {
                activeFilter = facetFilter;
                foundToken = true;
                this.active = true;
                continue;
            }
            else if (facetFilter.token === this.token) {
                continue;
            }
            queryString +=
                facetFilter.token + ':' + this.urlEncode(facetFilter.value) + ';';
        }
        let activeRangeQuery = null;
        for (const rangeQuery of rangeQueries) {
            if (rangeQuery.token === this.token && rangeQuery.value === this.value) {
                activeRangeQuery = rangeQuery;
                foundToken = true;
                this.active = true;
                continue;
            }
            else if (rangeQuery.token === this.token) {
                continue;
            }
            queryString +=
                rangeQuery.token + ':' + this.urlEncode(rangeQuery.value) + ';';
        }
        if (foundToken === false) {
            queryString += this.token + ':' + this.urlEncode(this.value);
        }
        if (queryString.endsWith(';')) {
            queryString = queryString.substr(0, queryString.length - 1);
        }
        if (queryString === 'f=') {
            queryString = '';
        }
        if (activeFilter) {
            activeFilter.query = queryString;
            this.active = true;
        }
        if (activeRangeQuery) {
            activeRangeQuery.query = queryString;
            this.active = true;
        }
        this.query = queryString;
    }
    appendQueryString(queryString, appendString) {
        let appendedQueryString;
        if (!queryString) {
            appendedQueryString = '';
        }
        else {
            appendedQueryString = queryString + '&';
        }
        appendedQueryString += appendString;
        return appendedQueryString;
    }
    urlEncode(text) {
        const encodedText = encodeURIComponent(text);
        return encodedText;
    }
}

class SearchResultFacet {
    constructor(field, label) {
        this.field = field;
        this.label = label;
        this.items = [];
    }
    createQuery(q, facetFilters, rangeQueries) {
        for (const item of this.items) {
            item.createQuery(q, facetFilters, rangeQueries);
        }
    }
}

class SearchResultMeta {
    constructor(solrResults) {
        this.qTime = solrResults.responseHeader.QTime;
        this.resultCount = solrResults.response.docs.length;
        this.numFound = solrResults.response.numFound;
        this.start = solrResults.response.start;
    }
}

class SearchResultRequest {
    constructor(solrResults, options) {
        this.q = options.q;
        this.facetOptions = options.facetOptions;
        this.facetFilters = options.facetFilters;
        this.facetRangeFilters = options.facetRangeFilters;
        this.start = solrResults.responseHeader.params.start;
        this.rows = solrResults.responseHeader.params.rows;
    }
}

/**
 * A container to store DTO status data
 */
class DtoStatusContainer {
    /**
     * @param code - The DTO's status code
     */
    constructor(code = Status.OK) {
        this.code = code;
    }
    /** A get accessor for the DTO's status text */
    get text() {
        switch (this.code) {
            case Status.OK:
                return 'OK';
            case Status.Created:
                return 'Created';
            case Status.NoData:
                return 'No Data';
            case Status.NotModifed:
                return 'No Modified';
            case Status.BadRequest:
                return 'Bad Request';
            case Status.NotAuthorized:
                return 'Not Athorized';
            case Status.ImATeapot:
                // tslint:disable-next-line:quotemark
                return "I'm a Teapot";
            case Status.Error:
                return 'Error';
            default:
                return 'Unknown';
        }
    }
    /**
     * Determine whether the status is an error code
     */
    isError() {
        if (this.code === Status.OK ||
            this.code === Status.NoData ||
            this.code === Status.Created ||
            this.code === Status.NotModifed) {
            return false;
        }
        return true;
    }
    /**
     * Determine whether the status is not an error code
     */
    isNotError() {
        if (this.code === Status.OK ||
            this.code === Status.NoData ||
            this.code === Status.Created ||
            this.code === Status.NotModifed) {
            return true;
        }
        return false;
    }
}

/**
 * A data transfer object class
 */
class Dto {
    /**
     * @param code = The status code
     */
    constructor(code = Status.OK) {
        this.status = new DtoStatusContainer(code);
    }
    /**
     * Determine whether the passed status code is an error
     * @param code - The status code
     * @param suppressErrors  - A list of error codes to suppress (i.e. not treat as errors)
     * @returns True if the status code is an error code
     */
    static isError(code, suppressErrors) {
        if (suppressErrors && suppressErrors.findIndex(c => c === code) >= 0) {
            return false;
        }
        if (code === Status.OK ||
            code === Status.NoData ||
            code === Status.Created ||
            code === Status.NotModifed) {
            return false;
        }
        return true;
    }
    /**
     * Determine whether the passed status code is not an error
     * @param code - The status code
     * @returns True if the status code is not an error code
     */
    static isNotError(code) {
        if (code === Status.OK ||
            code === Status.NoData ||
            code === Status.Created ||
            code === Status.NotModifed) {
            return true;
        }
        return false;
    }
}

/**
 * A DTO class to use if a controller returns an array of items
 */
class ArrayDto extends Dto {
    /**
     * @param code - The DTO's status code
     * @param data - The DTO's data (an array of objects)
     */
    constructor(code, data) {
        super(code);
        this.data = data;
    }
}

/**
 * A DTO class to use if a controller returns a single item
 */
class ItemDto extends Dto {
    /**
     * @param code - The DTO's status code
     * @param data - The DTO's data
     */
    constructor(code, data) {
        super(code);
        this.data = data;
    }
}

class SearchResultsContainer {
    constructor(searchResultsDto) {
        this.data = [];
        this.facets = [];
        this.data = searchResultsDto.data;
        this.facets = searchResultsDto.facets;
        this.request = searchResultsDto.request;
        this.meta = searchResultsDto.meta;
    }
}

class SearchResultsDto extends Dto {
    constructor(code, data) {
        super(code);
        this.data = data;
        this.facets = [];
    }
}

/**
 * A class to store an error report
 */
class ClientErrorReport extends BaseModel {
    /**
     * @param serviceName - The name of the service reporting the error
     * @param message - The error message
     * @param status - The error status
     * @param statusText - The status text
     * @param url - The offending URL
     * @param stackTrace - A stack trace
     */
    constructor(serviceName, message, status, statusText, url, stackTrace) {
        super();
        this.serviceName = serviceName;
        this.message = message;
        this.status = status;
        this.statusText = statusText;
        this.url = url;
        this.stackTrace = stackTrace;
    }
}

class UploadEvent {
    constructor(type, message = null, callbackId) {
        this.type = type;
        this.message = message;
        this.callbackId = callbackId;
    }
}

/**
 * A class to store new user request data. This class serves as the base class for other user new user request
 * classes.
 */
class BaseNewUserRequest {
    /**
     * @param firstName - The user's first name
     * @param lastName - The user's last name
     * @param email - THe user's email address
     * @param password - The user's password
     * @param roles - THe user's roles
     * @param testArtifact - An enum indicating whether the new user request is a test artifact
     */
    constructor(firstName, lastName, email, password, roles, testArtifact) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.roles = roles;
        if (testArtifact === TestArtifact.true) {
            this.testArtifact = true;
        }
    }
}

/**
 * A class to store password reset requests
 */
class BasePasswordResetRequest {
    /**
     * @param email - The user's email address
     */
    constructor(email) {
        this.email = email;
    }
}

/**
 * The base user class
 */
class BaseUser extends BaseModel {
    constructor() {
        super(...arguments);
        /** An array containing the user's roles */
        this.roles = [];
    }
    /** Get accessor for the user's full name */
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

/**
 * A class to return the result of validating a password reset request token
 */
class ValidatePasswordResetTokenResponse {
}

/**
 * A class to return the result of validating a verify email request token
 */
class ValidateVerifyEmailTokenResponse {
}

/**
 * A class to store a query parameter
 */
class Parameter {
    /**
     * Constructor
     * @param name - The name of the parameter
     * @param value - THe paramter's value
     */
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

/**
 * A class to store query parameters
 */
class Parameters {
    constructor() {
        /** An array of parameters */
        this._parameters = [];
    }
    /** Get accessor for hasParameters */
    get hasParameters() {
        return this._parameters.length > 0 ? true : false;
    }
    /**
     * Add a parameter to the Parameters object
     * @param name - The name of the paramter to add
     * @param value - The value of the parameter to add
     */
    add(name, value) {
        this._parameters.push(new Parameter(name, value));
    }
    /**
     * Get the parameter string
     * @returns A parameter string
     */
    getParamterString() {
        let parameterString = '?';
        for (const parameter of this._parameters) {
            if (parameterString !== '?') {
                parameterString += '&';
            }
            parameterString += parameter.name + '=' + parameter.value;
        }
        return parameterString;
    }
}

/**
 * A class to store HTTP request options
 */
class Options {
    /**
     * Constructor
     */
    constructor() {
        /** An array of errors that should be suppressed (i.e. no error dialog shown) */
        this.suppressedErrors = [];
        this.parameters = new Parameters();
    }
}

/**
 * A utility for working with URLs
 */
class UrlUtil {
    /**
     * Join the passed URL elements
     * @param urlElements - The URL elements to join
     * @returns The concatenated URL elements
     */
    static join(...urlElements) {
        const resultArray = [];
        // If the first part is a plain protocol, we combine it with the next part.
        if (urlElements[0].match(/^[^/:]+:\/*$/) && urlElements.length > 1) {
            const first = urlElements.shift();
            urlElements[0] = first + urlElements[0];
        }
        // There must be two or three slashes in the file protocol, two slashes in anything else.
        if (urlElements[0].match(/^file:\/\/\//)) {
            urlElements[0] = urlElements[0].replace(/^([^/:]+):\/*/, '$1:///');
        }
        else {
            urlElements[0] = urlElements[0].replace(/^([^/:]+):\/*/, '$1://');
        }
        for (let i = 0; i < urlElements.length; i++) {
            let component = urlElements[i];
            if (typeof component !== 'string') {
                throw new TypeError('Url must be a string. Received ' + component);
            }
            if (component === '') {
                continue;
            }
            if (i > 0) {
                // Removing the starting slashes for each component but the first.
                component = component.replace(/^[\/]+/, '');
            }
            if (i < urlElements.length - 1) {
                // Removing the ending slashes for each component but the last.
                component = component.replace(/[\/]+$/, '');
            }
            else {
                // For the last component we will combine multiple slashes to a single one.
                component = component.replace(/[\/]+$/, '/');
            }
            resultArray.push(component);
        }
        let joinedString = resultArray.join('/');
        // Each input component is now separated by a single slash except the possible first plain protocol part.
        // remove trailing slash before parameters or hash
        joinedString = joinedString.replace(/\/(\?|&|#[^!])/g, '$1');
        // replace ? in parameters with &
        const parts = joinedString.split('?');
        joinedString =
            parts.shift() + (parts.length > 0 ? '?' : '') + parts.join('&');
        return joinedString;
    }
}

/**
 * The base data service for communicating with API endpoints
 */
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
BaseDataService.ɵfac = function BaseDataService_Factory(t) { return new (t || BaseDataService)(ɵngcc0.ɵɵinject(LeathermanAppConfigInjectionToken), ɵngcc0.ɵɵinject(ErrorDialogServiceInjectionToken), ɵngcc0.ɵɵinject(ɵngcc3.Router), ɵngcc0.ɵɵinject(ɵngcc4.HttpClient)); };
BaseDataService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [LeathermanAppConfigInjectionToken,] }] },
    { type: ErrorDialogService, decorators: [{ type: Inject, args: [ErrorDialogServiceInjectionToken,] }] },
    { type: Router },
    { type: HttpClient }
];
BaseDataService.ɵprov = ɵɵdefineInjectable({ factory: function BaseDataService_Factory() { return new BaseDataService(ɵɵinject(LeathermanAppConfigInjectionToken), ɵɵinject(ErrorDialogServiceInjectionToken), ɵɵinject(Router), ɵɵinject(HttpClient)); }, token: BaseDataService, providedIn: "root" });
BaseDataService = __decorate([ __param(0, Inject(LeathermanAppConfigInjectionToken)),
    __param(1, Inject(ErrorDialogServiceInjectionToken))
], BaseDataService);

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
AuthenticationDataService.ɵfac = function AuthenticationDataService_Factory(t) { return new (t || AuthenticationDataService)(ɵngcc0.ɵɵinject(LeathermanAppConfigInjectionToken), ɵngcc0.ɵɵinject(ErrorDialogServiceInjectionToken), ɵngcc0.ɵɵinject(ɵngcc3.Router), ɵngcc0.ɵɵinject(ɵngcc4.HttpClient)); };
AuthenticationDataService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [LeathermanAppConfigInjectionToken,] }] },
    { type: ErrorDialogService, decorators: [{ type: Inject, args: [ErrorDialogServiceInjectionToken,] }] },
    { type: Router },
    { type: HttpClient }
];
AuthenticationDataService.ɵprov = ɵɵdefineInjectable({ factory: function AuthenticationDataService_Factory() { return new AuthenticationDataService(ɵɵinject(LeathermanAppConfigInjectionToken), ɵɵinject(ErrorDialogServiceInjectionToken), ɵɵinject(Router), ɵɵinject(HttpClient)); }, token: AuthenticationDataService, providedIn: "root" });
AuthenticationDataService = __decorate([ __param(0, Inject(LeathermanAppConfigInjectionToken)),
    __param(1, Inject(ErrorDialogServiceInjectionToken))
], AuthenticationDataService);

/**
 * A service to handle client authentication
 */
let AuthenticationService = class AuthenticationService {
    /**
     * Constructor
     * @param config - The app config object
     * @param authenticationDataService - A reference to the authentication data service
     */
    constructor(config, authenticationDataService) {
        this.config = config;
        this.authenticationDataService = authenticationDataService;
        /** Reference to the JWT helper service */
        this.jwtHelper = new JwtHelperService();
    }
    // **********************
    // * Private properties
    // **********************
    /** Get accessor for the JWT token */
    get token() {
        if (!this._token) {
            this._token = this.getTokenFromLocalStorage();
        }
        return this._token;
    }
    /** Set accessor for the JWT token */
    set token(token) {
        this.setLocalStorage(token);
        this._token = token;
    }
    // **********************
    // * Public methods
    // **********************
    authenticate(loginRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const authenticationDetails = yield this.authenticationDataService.authenticate(loginRequest);
            if (authenticationDetails.token && authenticationDetails.token.length > 0) {
                this.token = authenticationDetails.token;
            }
            else {
                this.clearToken();
            }
            return authenticationDetails;
        });
    }
    /**
     * Clear the JWT token
     */
    clearToken() {
        this._token = '';
        this.clearLocalStorage();
    }
    /**
     * Get the user's primary role
     * @returns The user's primary role
     * @async
     */
    getPrimaryUserRole() {
        const userRoles = this.getUserRoles();
        if (userRoles.find(role => role === 'admin')) {
            return 'admin';
        }
        if (userRoles.find(role => role === 'user')) {
            return 'user';
        }
        return userRoles[0];
    }
    /**
     * Get the JWT token expiration date
     * @returns The date the token expires
     */
    getTokenExpirationDate() {
        const expirationDate = this.jwtHelper.getTokenExpirationDate(this.token);
        return expirationDate;
    }
    /**
     * Get the logged in user's ID
     * @returns The user's ID
     */
    getUserId() {
        if (this.isAuthenticated() === false) {
            return null;
        }
        const tokenPayload = this.jwtHelper.decodeToken(this.token);
        return tokenPayload.userId;
    }
    /**
     * Get the user's roles
     * @returns An array of the user's roles
     */
    getUserRoles() {
        if (this.isAuthenticated() === false) {
            return [];
        }
        const tokenPayload = this.jwtHelper.decodeToken(this.token);
        return tokenPayload.roles;
    }
    /**
     * Determine if the user is authenticated
     * @returns True if the user is authenticated
     */
    isAuthenticated() {
        if (!this.token) {
            return false;
        }
        if (this.jwtHelper.isTokenExpired(this.token)) {
            this.clearLocalStorage();
            return false;
        }
        return true;
    }
    /**
     * Log in a user
     * @param loginRequest - The login request object
     * @returns True if the login succeeded
     * @async
     */
    loginUser(loginRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const authenticationDetails = yield this.authenticationDataService.authenticate(loginRequest);
            if (authenticationDetails.token && authenticationDetails.token.length > 0) {
                this.token = authenticationDetails.token;
            }
            else {
                this.clearToken();
            }
            return authenticationDetails;
        });
    }
    /**
     * Log out a user
     */
    logoutUser() {
        this.clearToken();
    }
    /**
     * Register a new user
     * @param newUserRequest - The new user request
     * @param secure - An enum indicating whether the endpoing is secure
     */
    registerUser(newUserRequest, secure = Secure.false) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.authenticationDataService.register(newUserRequest, secure);
            return user;
        });
    }
    /**
     * Set the JWT token
     * @param token - The JWT token
     */
    setToken(token) {
        this.setLocalStorage(token);
        this._token = token;
    }
    // **********************
    // * Private methods
    // **********************
    /**
     * Remove the JWT token from local storage
     */
    clearLocalStorage() {
        localStorage.removeItem(this.config.jwtTokenName);
    }
    /**
     * Get the JWT token from local storage
     * @returns The JWT token
     */
    getTokenFromLocalStorage() {
        const token = localStorage.getItem(this.config.jwtTokenName);
        if (!token) {
            return '';
        }
        return token;
    }
    /**
     * Save the JWT token to local storage
     * @param token - The JWT token
     */
    setLocalStorage(token) {
        localStorage.setItem(this.config.jwtTokenName, token);
    }
};
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(ɵngcc0.ɵɵinject(LeathermanAppConfigInjectionToken), ɵngcc0.ɵɵinject(AuthenticationDataService)); };
AuthenticationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [LeathermanAppConfigInjectionToken,] }] },
    { type: AuthenticationDataService }
];
AuthenticationService.ɵprov = ɵɵdefineInjectable({ factory: function AuthenticationService_Factory() { return new AuthenticationService(ɵɵinject(LeathermanAppConfigInjectionToken), ɵɵinject(AuthenticationDataService)); }, token: AuthenticationService, providedIn: "root" });
AuthenticationService = __decorate([ __param(0, Inject(LeathermanAppConfigInjectionToken))
], AuthenticationService);

/**
 * A service used to limit access to a route to administrators
 */
let AdminAuthGuardService = class AdminAuthGuardService {
    /**
     * Constructor
     * @param authenticationService - A reference to the authentication service
     * @param router - A reference to the router
     */
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    /**
     * Determine whether a route can be activated
     * @param route - The activated route snapshot
     * @param state - The router state snapshot
     * @returns An observable boolean or a promise of a boolean
     */
    canActivate(route, state) {
        const isAuthenticated = this.authenticationService.isAuthenticated();
        if (isAuthenticated) {
            const userRole = this.authenticationService.getPrimaryUserRole();
            if (userRole === 'admin') {
                return true;
            }
        }
        this.router.navigate(['/admin/login']);
        return false;
    }
};
AdminAuthGuardService.ɵfac = function AdminAuthGuardService_Factory(t) { return new (t || AdminAuthGuardService)(ɵngcc0.ɵɵinject(AuthenticationService), ɵngcc0.ɵɵinject(ɵngcc3.Router)); };
AdminAuthGuardService.ctorParameters = () => [
    { type: AuthenticationService },
    { type: Router }
];
AdminAuthGuardService.ɵprov = ɵɵdefineInjectable({ factory: function AdminAuthGuardService_Factory() { return new AdminAuthGuardService(ɵɵinject(AuthenticationService), ɵɵinject(Router)); }, token: AdminAuthGuardService, providedIn: "root" });

/**
 * A service used to limit access to a route to registered users
 */
let UserAuthGuardService = class UserAuthGuardService {
    /**
     * Constructor
     * @param authenticationService - A reference to the authentication service
     * @param router - A reference to the router
     */
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    /**
     * Determine whether a route can be activated
     * @param route - The activated route snapshot
     * @param state - The router state snapshot
     * @returns An observable boolean or a promise of a boolean
     */
    canActivate(route, state) {
        if (this.authenticationService.isAuthenticated()) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
};
UserAuthGuardService.ɵfac = function UserAuthGuardService_Factory(t) { return new (t || UserAuthGuardService)(ɵngcc0.ɵɵinject(AuthenticationService), ɵngcc0.ɵɵinject(ɵngcc3.Router)); };
UserAuthGuardService.ctorParameters = () => [
    { type: AuthenticationService },
    { type: Router }
];
UserAuthGuardService.ɵprov = ɵɵdefineInjectable({ factory: function UserAuthGuardService_Factory() { return new UserAuthGuardService(ɵɵinject(AuthenticationService), ɵɵinject(Router)); }, token: UserAuthGuardService, providedIn: "root" });

/**
 * A base UI service for components. This service allows sub-components to communicate the components
 * without maintaining a direct reference.
 */
let BaseComponentUIService = class BaseComponentUIService {
    constructor() {
        /** A delete request RXJS subject */
        this.deleteRequestSubject$ = new Subject();
        /** An edit request RXJS subject */
        this.editRequestSubject$ = new Subject();
        /** A clone request RXJS subject */
        this.cloneRequestSubject$ = new Subject();
    }
    /**
     * Broadcast a clone request
     * @param id - The ID of the object associated with the request
     */
    cloneRequest(id) {
        this.cloneRequestSubject$.next(id);
    }
    /**
     * Broadcast a delete request
     * @param id - The ID of the object associated with the request
     */
    deleteRequest(id) {
        this.deleteRequestSubject$.next(id);
    }
    /**
     * Broadcast an edit request
     * @param id - The ID of the object associated with the request
     */
    editRequest(id) {
        this.editRequestSubject$.next(id);
    }
    /**
     * Subscribe to an RXJS subject
     * @param subjectName - The name of the subject to subscribe to
     * @param callback - The method to callback
     */
    subscribe(subjectName, callback) {
        this[subjectName].subscribe(callback);
    }
};
BaseComponentUIService.ɵfac = function BaseComponentUIService_Factory(t) { return new (t || BaseComponentUIService)(); };
BaseComponentUIService.ɵprov = ɵɵdefineInjectable({ factory: function BaseComponentUIService_Factory() { return new BaseComponentUIService(); }, token: BaseComponentUIService, providedIn: "root" });

/**
 * The base service
 */
class BaseService {
}

/**
 * A custom error handler service for unhandled exceptions
 */
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
CustomErrorHandlerService.ɵfac = function CustomErrorHandlerService_Factory(t) { return new (t || CustomErrorHandlerService)(ɵngcc0.ɵɵinject(LeathermanAppConfigInjectionToken), ɵngcc0.ɵɵinject(ErrorDialogServiceInjectionToken), ɵngcc0.ɵɵinject(ɵngcc3.Router), ɵngcc0.ɵɵinject(ɵngcc4.HttpClient)); };
CustomErrorHandlerService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [LeathermanAppConfigInjectionToken,] }] },
    { type: ErrorDialogService, decorators: [{ type: Inject, args: [ErrorDialogServiceInjectionToken,] }] },
    { type: Router },
    { type: HttpClient }
];
CustomErrorHandlerService.ɵprov = ɵɵdefineInjectable({ factory: function CustomErrorHandlerService_Factory() { return new CustomErrorHandlerService(ɵɵinject(LeathermanAppConfigInjectionToken), ɵɵinject(ErrorDialogServiceInjectionToken), ɵɵinject(Router), ɵɵinject(HttpClient)); }, token: CustomErrorHandlerService, providedIn: "root" });
CustomErrorHandlerService = __decorate([ __param(0, Inject(LeathermanAppConfigInjectionToken)),
    __param(1, Inject(ErrorDialogServiceInjectionToken))
], CustomErrorHandlerService);

/**
 * A service to parse route parts
 */
let RoutePartsService = class RoutePartsService {
    /**
     * Constructor
     * @param router - A reference to the router
     * @param activatedRoute - A reference to the activated route
     */
    constructor(router, activatedRoute) {
        this.router = router;
        /** An event emitter that will trigger when a route changes */
        this.routeChanged = new EventEmitter();
        const me = this;
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                const state = this.router.routerState;
                const snapshot = state.snapshot;
                const root = snapshot.root;
                const routeParts = this.generateRouteParts(root);
                me.routeParts = this.formatRouteParts(routeParts);
                this.routeChanged.emit(me.routeParts);
            }
        });
    }
    /**
     * Generate the route parts
     * @param snapshot - The activated route snapshot
     * @returns An array of route parts
     */
    generateRouteParts(snapshot) {
        let routeParts = [];
        if (snapshot) {
            if (snapshot.firstChild) {
                routeParts = routeParts.concat(this.generateRouteParts(snapshot.firstChild));
            }
            if (snapshot.url.length) {
                routeParts.push({
                    title: snapshot.data['title'],
                    breadcrumb: snapshot.data['breadcrumb'],
                    url: snapshot.url[0].path,
                    urlSegments: snapshot.url,
                    params: snapshot.params
                });
            }
        }
        return routeParts;
    }
    /**
     * Format the route parts
     * @param routeParts - An array of route parts
     * @returns An array of formatted route parts
     */
    formatRouteParts(routeParts) {
        // routeParts.push({
        //     title: 'Home',
        //     breadcrumb: 'Home',
        //     url: '/',
        //     urlSegments: [],
        //     params: {},
        // });
        routeParts.reverse();
        let fullUrl = '';
        for (const routePart of routeParts) {
            if (fullUrl === '') {
                fullUrl = routePart.url;
            }
            else {
                if (fullUrl.endsWith('/') === false) {
                    fullUrl += '/';
                }
                fullUrl = fullUrl + routePart.url;
            }
            routePart.url = fullUrl;
        }
        return routeParts;
    }
};
RoutePartsService.ɵfac = function RoutePartsService_Factory(t) { return new (t || RoutePartsService)(ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Router), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.ActivatedRoute)); };
RoutePartsService.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: RoutePartsService, outputs: { routeChanged: "routeChanged" } });
RoutePartsService.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute }
];
RoutePartsService.ɵprov = ɵɵdefineInjectable({ factory: function RoutePartsService_Factory() { return new RoutePartsService(ɵɵinject(Router), ɵɵinject(ActivatedRoute)); }, token: RoutePartsService, providedIn: "root" });
__decorate([
    Output()
], RoutePartsService.prototype, "routeChanged", void 0);

/**
 * The base user data service
 */
let BaseUserDataService = class BaseUserDataService extends BaseDataService {
    /**
     * Constructor
     * @param config - The app config object
     * @param errorDialogService - A reference to the error dialog service
     * @param router - A reference to the router
     * @param httpClient - A reference to the HTTP client service
     */
    constructor(config, errorDialogService, router, httpClient) {
        super(config, errorDialogService, router, httpClient);
        this.config = config;
        this.baseEndpoint = config.userBaseEndpoint;
        this.type = BaseUser;
    }
    /**
     * Add a role to a user
     * @param userId - The user's ID
     * @param role - The role to add to the user
     * @returns The updated user
     * @async
     */
    _addUserRole(userId, role) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = new Options();
            options.secure = Secure.true;
            options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, userId, 'addrole');
            options.parameters.add('role', role);
            return this._putWithOptions(options).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'addUserRole', err);
            }));
        });
    }
    /**
     * Delete a user
     * @param userId - The ID of the user to delete
     * @returns True if the delete succeeded
     * @async
     */
    _deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._delete(userId, Secure.true).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'deleteUser', err);
            }));
        });
    }
    /**
     * Get all admin users
     * @returns An array of admin users
     * @asyncs
     */
    _getAdminUsers(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const getManyOptions = new Options();
            getManyOptions.secure = Secure.true;
            getManyOptions.url = UrlUtil.join(this.apiRoot, this.baseEndpoint);
            getManyOptions.parameters.add('role', 'admin');
            if (options) {
                getManyOptions.parameters.add('skip', options.skip.toString());
                getManyOptions.parameters.add('trace', options.take.toString());
                if (options.sort.length > 0) {
                    getManyOptions.parameters.add('sort', options.sort);
                }
            }
            const adminUsers = yield this._getManyWithOptions(getManyOptions).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'getAdminUsers', err);
            }));
            return adminUsers;
        });
    }
    /**
     * Get a user
     * @param id - The ID of the user to get
     * @returns A user object
     * @async
     */
    _getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = new Options();
            options.secure = Secure.true;
            options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, id);
            const user = yield this._getWithOptions(options).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'getUser', err);
            }));
            return user;
        });
    }
    // getBasicUsers
    _getBasicUsers(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const getManyOptions = new Options();
            getManyOptions.secure = Secure.true;
            getManyOptions.url = UrlUtil.join(this.apiRoot, this.baseEndpoint);
            getManyOptions.parameters.add('onlyrole', 'user');
            if (options) {
                getManyOptions.parameters.add('skip', options.skip.toString());
                getManyOptions.parameters.add('trace', options.take.toString());
                if (options.sort.length > 0) {
                    getManyOptions.parameters.add('sort', options.sort);
                }
            }
            const assessmentUsers = yield this._getManyWithOptions(getManyOptions).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'getAssessmentUsers', err);
            }));
            return assessmentUsers;
        });
    }
    /**
     * Get all users
     * @returns An array of users
     * @async
     */
    _getUsers(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const getManyOptions = new Options();
            getManyOptions.secure = Secure.true;
            getManyOptions.url = UrlUtil.join(this.apiRoot, this.baseEndpoint);
            if (options) {
                getManyOptions.parameters.add('skip', options.skip.toString());
                getManyOptions.parameters.add('trace', options.take.toString());
                if (options.sort.length > 0) {
                    getManyOptions.parameters.add('sort', options.sort);
                }
            }
            const assessmentUsers = yield this._getManyWithOptions(getManyOptions).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'getUsers', err);
            }));
            return assessmentUsers;
        });
    }
    /**
     * Remove a role from a user
     * @param userId - The ID of the user
     * @param role - The role to remove from the user
     */
    _removeUserRole(userId, role) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = new Options();
            options.secure = Secure.true;
            options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, userId, 'remove-role');
            options.parameters.add('role', role);
            return this._putWithOptions(options).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'removeUserRole', err);
            }));
        });
    }
    /**
     * Request a password reset
     * @param passwordResetRequest - A password reset request object
     * @returns True if the request succeeded
     * @async
     */
    _requestPasswordReset(passwordResetRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = new Options();
            options.secure = Secure.false;
            options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'request-password-reset');
            options.objectType = BasePasswordResetRequest;
            yield this._postWithOptions(passwordResetRequest, options).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'requestPasswordReset', err);
            }));
            return true;
        });
    }
    /**
     * Request a password reset token. This method is only used for testing.
     * @param passwordResetRequest - A password reset request object
     * @returns A password reset token
     * @async
     */
    _requestPasswordResetToken(passwordResetRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = new Options();
            options.secure = Secure.false;
            options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'request-password-reset-token');
            options.objectType = BasePasswordResetRequest;
            const passwordResetToken = yield this._postWithOptions(passwordResetRequest, options).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'requestPasswordResetToken', err);
            }));
            return passwordResetToken;
        });
    }
    /**
     * Resend Verification email
     * @param verifyEmail - A verification email
     * @returns True if the verification email is sent
     */
    _resendVerificationEmail(verificationEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = new Options();
            options.secure = Secure.false;
            options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'resend-verification-email');
            options.parameters.add('email', verificationEmail);
            return this._getWithOptions(options).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'resendVerificationEmail', err);
            }));
        });
    }
    /**
     * Reset a password
     * @param passwordReset - A password reset object
     * @returns True if the password was successfully reset
     * @async
     */
    _resetPassword(passwordReset) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = new Options();
            options.secure = Secure.false;
            options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'reset-password');
            const result = yield this._postWithOptions(passwordReset, options);
            return result;
        });
    }
    /**
     * Update a user
     * @param user - The user to update
     * @returns The updated user
     * @async
     */
    _updateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._put(user, Secure.true).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'updateUser', err);
            }));
        });
    }
    /**
     * Validate a password reset token
     * @param passwordResetToken - The password reset token to validate
     * @returns A validate password reset token response
     * @async
     */
    _validatePasswordResetToken(passwordResetToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = new Options();
            options.secure = Secure.false;
            options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'validate-password-reset-token');
            options.parameters.add('token', passwordResetToken);
            return this._getWithOptions(options).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'validatePasswordResetToken', err);
            }));
        });
    }
    /**
     * Validate an email address
     * @param email - The email address to validate
     * @returns True if the email address is not currently in the user table
     * @async
     */
    _validateEmail(email) {
        return this.httpClient.get(UrlUtil.join(this.apiRoot, this.baseEndpoint, 'validate-email' + '?email=' + email), {
            headers: this.noTokenHeader
        });
    }
    _validateVerifyEmailToken(verifyEmailToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = new Options();
            options.secure = Secure.false;
            options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'validate-verify-email-token');
            options.parameters.add('token', verifyEmailToken);
            return this._getWithOptions(options).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield this.handlePromiseError('UserDataService', 'validateVerifyEmailToken', err);
            }));
        });
    }
};
BaseUserDataService.ɵfac = function BaseUserDataService_Factory(t) { return new (t || BaseUserDataService)(ɵngcc0.ɵɵinject(LeathermanAppConfigInjectionToken), ɵngcc0.ɵɵinject(ErrorDialogServiceInjectionToken), ɵngcc0.ɵɵinject(ɵngcc3.Router), ɵngcc0.ɵɵinject(ɵngcc4.HttpClient)); };
BaseUserDataService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [LeathermanAppConfigInjectionToken,] }] },
    { type: ErrorDialogService, decorators: [{ type: Inject, args: [ErrorDialogServiceInjectionToken,] }] },
    { type: Router },
    { type: HttpClient }
];
BaseUserDataService.ɵprov = ɵɵdefineInjectable({ factory: function BaseUserDataService_Factory() { return new BaseUserDataService(ɵɵinject(LeathermanAppConfigInjectionToken), ɵɵinject(ErrorDialogServiceInjectionToken), ɵɵinject(Router), ɵɵinject(HttpClient)); }, token: BaseUserDataService, providedIn: "root" });
BaseUserDataService = __decorate([ __param(0, Inject(LeathermanAppConfigInjectionToken)),
    __param(1, Inject(ErrorDialogServiceInjectionToken))
], BaseUserDataService);

/**
 * A class to store a password reset
 */
class PasswordReset {
    /**
     * @param token - The password reset token
     * @param userId - The ID of the user requesting the password reset
     * @param newPassword - The user's new password
     */
    constructor(token, userId, newPassword) {
        this.token = token;
        this.userId = userId;
        this.newPassword = newPassword;
    }
}

/**
 * The base user service
 */
let BaseUserService = class BaseUserService extends BaseService {
    /**
     * Constructor
     * @param authenticationService - A reference to the authentication service
     * @param dataService - A reference to the user data service
     * @param confirmDialogService - A reference to the confirm dialog service
     * @param router - A reference to the router
     */
    constructor(authenticationService, dataService, confirmDialogService, router) {
        super();
        this.authenticationService = authenticationService;
        this.dataService = dataService;
        this.confirmDialogService = confirmDialogService;
        this.router = router;
    }
    // **********************
    // * Public properties
    // **********************
    /** Get accessor for the user ID */
    get userId() {
        if (!this._userId) {
            this._userId = this.authenticationService.getUserId();
        }
        return this._userId;
    }
    /** Get accessor for user role */
    get userRole() {
        if (!this._primaryUserRole) {
            this._primaryUserRole = this.authenticationService.getPrimaryUserRole();
        }
        return this._primaryUserRole;
    }
    // **********************
    // * Public methods
    // **********************
    /**
     * Delete a user
     * @param userId - The ID of the user to delete
     * @returns True if the delete succeeded
     * @async
     */
    _deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const confirmStatus = yield this.confirmDialogService.openConfirmDialog('Delete User', 'Do you want to delete the selected user? This action cannot be undone.');
            if (confirmStatus.button === DialogButton.Cancel) {
                return false;
            }
            const result = yield this.dataService._deleteUser(userId);
            return result;
        });
    }
    /**
     * Get all admin users
     * @returns An array of admin users
     * @async
     */
    _getAdminUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.dataService._getAdminUsers();
            return users;
        });
    }
    /**
     * Get all basic users
     * @returns An array of basic (non-admin) users
     * @async
     */
    _getBasicUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.dataService._getBasicUsers();
            return users;
        });
    }
    /**
     * Get the logged in user
     * @returns The user object
     * @async
     */
    _getCurrentUser() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.userId) {
                return null;
            }
            const id = this.userId;
            const user = yield this.dataService._getUser(id);
            return user;
        });
    }
    /**
     * Get all users
     * @returns An array of users
     * @async
     */
    _getUsers(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.dataService._getUsers(options);
            return users;
        });
    }
    /**
     * Get the user's primary role
     * @returns The user's primary role
     * @async
     */
    _getPrimaryUserRole() {
        return this.authenticationService.getPrimaryUserRole();
    }
    /**
     * Get the user
     * @param userId - ID of the user to get
     * @returns The user object
     * @async
     */
    _getUser(userID) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.dataService._getUser(userID);
            return user;
        });
    }
    /**
     * Login a user
     * @param user - The login request
     * @returns True if the login succeeded
     * @async
     */
    _loginUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const authenticationDetails = yield this.authenticationService.authenticate(user);
            if (authenticationDetails.authenticated === true) {
                this._userId = this.authenticationService.getUserId();
                this._primaryUserRole = this.authenticationService.getPrimaryUserRole();
            }
            return authenticationDetails;
        });
    }
    /**
     * Logout the user
     * @param redirectRoute - The route to redirect to after logging out
     */
    _logoutUser(redirectRoute = '') {
        this._userId = null;
        this.authenticationService.logoutUser();
        if (redirectRoute) {
            this.router.navigate([redirectRoute]);
        }
    }
    /**
     * Register a new user
     * @param newUser - The new user request object
     * @param secure - An enum indicating whether the API endpoint is secure
     * @returs The new user
     * @async
     */
    _registerUser(newUser, secure = Secure.false) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.authenticationService.registerUser(newUser, secure);
            // if (user) {
            //   this._userId = this.authenticationService.getUserId();
            //   this._primaryUserRole = this.authenticationService.getPrimaryUserRole();
            // }
            return user;
        });
    }
    /**
     * Request a password reset
     * @param email - The email address of the user requesting the password reset
     * @returns true if the request succeeded
     * @async
     */
    _requestPasswordReset(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const passwordResetRequest = new BasePasswordResetRequest(email);
            const result = yield this.dataService._requestPasswordReset(passwordResetRequest);
            return result;
        });
    }
    /**
     * Request a password reset token. This method is only used for testing.
     * @param email - The email address of the user requesting the password reset
     * @returns The password reset token
     * @async
     */
    _requestPasswordResetToken(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const passwordResetRequest = new BasePasswordResetRequest(email);
            const result = yield this.dataService._requestPasswordResetToken(passwordResetRequest);
            return result;
        });
    }
    _resendVerificationEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.dataService._resendVerificationEmail(email);
        });
    }
    /**
     * Reset a user password
     * @param token - The password reset token
     * @param userId - The ID of the user
     * @param newPassword - The user's new password
     * @returns True if the password reset succeeded
     * @async
     */
    _resetPassword(token, userId, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const resetRequest = new PasswordReset(token, userId, newPassword);
            const result = this.dataService._resetPassword(resetRequest);
            return result;
        });
    }
    /**
     * Update a user
     * @param user - The user to update
     * @returns The updated user
     * @async
     */
    _updateUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.dataService._updateUser(user);
            return result;
        });
    }
    /**
     * Validate a password reset token
     * @param passwordResetToken - The password reset token
     * @returns A validate password reset token response object
     * @async
     */
    _validatePasswordResetToken(passwordResetToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.dataService._validatePasswordResetToken(passwordResetToken);
            return result;
        });
    }
    /**
     * Validate a verify email token
     * @param verifyEmailToken - The verify email token
     * @returns A validate verify email token response object
     */
    _validateVerifyEmailToken(verifyEmailToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.dataService._validateVerifyEmailToken(verifyEmailToken);
            return result;
        });
    }
};
BaseUserService.ɵfac = function BaseUserService_Factory(t) { return new (t || BaseUserService)(ɵngcc0.ɵɵinject(AuthenticationService), ɵngcc0.ɵɵinject(BaseUserDataService), ɵngcc0.ɵɵinject(ConfirmDialogService), ɵngcc0.ɵɵinject(ɵngcc3.Router)); };
BaseUserService.ctorParameters = () => [
    { type: AuthenticationService },
    { type: BaseUserDataService },
    { type: ConfirmDialogService },
    { type: Router }
];
BaseUserService.ɵprov = ɵɵdefineInjectable({ factory: function BaseUserService_Factory() { return new BaseUserService(ɵɵinject(AuthenticationService), ɵɵinject(BaseUserDataService), ɵɵinject(ConfirmDialogService), ɵɵinject(Router)); }, token: BaseUserService, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BaseComponent, [{
        type: Component,
        args: [{
                selector: 'lm-base-component',
                template: 'No UI Here'
            }]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SafeHtmlPipe, [{
        type: Pipe,
        args: [{
                name: 'safeHtml'
            }]
    }], function () { return [{ type: ɵngcc1.DomSanitizer }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(AngularModule, { imports: function () { return [CommonModule,
        RouterModule,
        HttpClientModule,
        ReactiveFormsModule]; }, exports: function () { return [ReactiveFormsModule,
        CommonModule,
        RouterModule,
        HttpClientModule,
        ReactiveFormsModule]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AngularModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    HttpClientModule,
                    ReactiveFormsModule,
                ],
                exports: [
                    ReactiveFormsModule,
                    CommonModule,
                    RouterModule,
                    HttpClientModule,
                    ReactiveFormsModule,
                ]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ErrorDialogComponent, [{
        type: Component,
        args: [{
                selector: 'lm-error-dialog',
                template: "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ title }}</h4>\n</div>\n<div class=\"modal-body\">\n  <p>{{ message }}</p>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-light\" (click)=\"onClose()\">\n    Ok\n  </button>\n</div>",
                styles: [""]
            }]
    }], function () { return [{ type: ɵngcc2.NgbActiveModal }]; }, { data: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ConfirmDialogComponent, [{
        type: Component,
        args: [{
                selector: 'lm-confirm-dialog',
                template: "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ dialogData.title }}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onCancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <p>{{ dialogData.message }}</p>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-light\" (click)=\"onCancel()\"> Cancel </button>\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"onConfirm()\"> Confirm </button>\n</div>",
                styles: [""]
            }]
    }], function () { return [{ type: ɵngcc2.NgbActiveModal }]; }, { dialogData: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LeathermanModule, { declarations: [SafeHtmlPipe,
        BaseComponent,
        ErrorDialogComponent,
        ConfirmDialogComponent], imports: [AngularModule], exports: [SafeHtmlPipe,
        BaseComponent,
        ErrorDialogComponent,
        ConfirmDialogComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LeathermanModule, [{
        type: NgModule,
        args: [{
                imports: [AngularModule],
                declarations: [
                    SafeHtmlPipe,
                    BaseComponent,
                    ErrorDialogComponent,
                    ConfirmDialogComponent,
                ],
                exports: [
                    SafeHtmlPipe,
                    BaseComponent,
                    ErrorDialogComponent,
                    ConfirmDialogComponent,
                ]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ConfirmDialogService, [{
        type: Injectable,
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: ɵngcc2.NgbModal }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MockConfirmDialogService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc2.NgbModal }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ErrorDialogService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc2.NgbModal }]; }, null); })();
const ɵMockErrorDialogService_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MockErrorDialogService);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MockErrorDialogService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
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
            }] }, { type: ɵngcc3.Router }, { type: ɵngcc4.HttpClient }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AuthenticationDataService, [{
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
            }] }, { type: ɵngcc3.Router }, { type: ɵngcc4.HttpClient }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AuthenticationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [LeathermanAppConfigInjectionToken]
            }] }, { type: AuthenticationDataService }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AdminAuthGuardService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: AuthenticationService }, { type: ɵngcc3.Router }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UserAuthGuardService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: AuthenticationService }, { type: ɵngcc3.Router }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BaseComponentUIService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
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
            }] }, { type: ɵngcc3.Router }, { type: ɵngcc4.HttpClient }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(RoutePartsService, [{
        type: Directive
    }, {
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc3.Router }, { type: ɵngcc3.ActivatedRoute }]; }, { routeChanged: [{
            type: Output
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BaseUserDataService, [{
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
            }] }, { type: ɵngcc3.Router }, { type: ɵngcc4.HttpClient }]; }, null); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BaseUserService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: AuthenticationService }, { type: BaseUserDataService }, { type: ConfirmDialogService }, { type: ɵngcc3.Router }]; }, null); })();

/**
 * An enum that represents filter cases
 */
var FilterCase;
(function (FilterCase) {
    /** Case insensitive */
    FilterCase[FilterCase["CaseInsensitive"] = 0] = "CaseInsensitive";
    /** Case sensitive */
    FilterCase[FilterCase["CaseSensitive"] = 1] = "CaseSensitive";
})(FilterCase || (FilterCase = {}));

/** An enum that represents filter scope */
var FilterScope;
(function (FilterScope) {
    /** The filtered content must contain the filter text */
    FilterScope[FilterScope["Contains"] = 0] = "Contains";
    /** The filtered content must start with the filter text */
    FilterScope[FilterScope["StartsWith"] = 1] = "StartsWith";
    /** The filtered content must end with the filte text */
    FilterScope[FilterScope["EndsWith"] = 2] = "EndsWith";
})(FilterScope || (FilterScope = {}));

/**
 * An enum representing sort order
 */
var Sort;
(function (Sort) {
    /** Sort ascending */
    Sort[Sort["Ascending"] = 0] = "Ascending";
    /** Sort descending */
    Sort[Sort["Descending"] = 1] = "Descending";
})(Sort || (Sort = {}));

/**
 * An enum representing the way the collection utility determines uniqueness
 */
var UniqueMode;
(function (UniqueMode) {
    /** Use the object's ID to determine uniqueness */
    UniqueMode[UniqueMode["Id"] = 0] = "Id";
    /** Use the object's properties to determine uniqueness */
    UniqueMode[UniqueMode["Object"] = 1] = "Object";
})(UniqueMode || (UniqueMode = {}));

/**
 * An enum representing whether a collection utility action should enforce uniqueness
 */
var Unique;
(function (Unique) {
    /** Enforce unqiueness */
    Unique[Unique["True"] = 0] = "True";
    /** Do not enforce uniqueness */
    Unique[Unique["False"] = 1] = "False";
})(Unique || (Unique = {}));

/**
 * A class store store filter options
 */
class FilterOptions {
    /**
     * Constructor
     * @param fitlerCase - Enum indicating the filter case option
     * @param fitlerScope - Enum indicating the filter scope option
     */
    constructor(fitlerCase = FilterCase.CaseInsensitive, fitlerScope = FilterScope.Contains) {
        this.fitlerCase = fitlerCase;
        this.fitlerScope = fitlerScope;
    }
}

/**
 * A class to store sort options
 */
class SortOption {
    /**
     * Constructor
     * @param key - The object property to use for sorting
     * @param order - The sort order
     */
    constructor(key, order) {
        this.key = key;
        this.order = order;
    }
}

/**
 * A regex object to validate strong passwords
 */
const STRONG_PASSWORD_REGEX = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);

/**
 * A regex object to validate ISO dates
 */
// tslint:disable-next-line:max-line-length
const ISO_DATE_REGEX = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;

/**
 * A regex object to validate latitudes
 */
const LATITUDE_REGEX = /^[-+]?(?:[1-8]?\d(?:\.\d+)?|90(\.0+)?)$/;

/**
 * A regex object to validate longitudes
 */
const LONGITUDE_REGEX = /^[-+]?(?:180(?:\.0+)?|(?:(?:1[0-7]\d)|(?:[1-9]?\d))(?:\.\d+)?)$/;

/**
 * A regex object to validate phone numbers
 */
const PHONE_NUMBER_REGEX = /^(?:[\+0]?\d[\s-]?)?(?:(?:\(\d{3}\)[\s-]?)|(?:\d{3})[\s-]?)?\d{3}[\s\-]?\d{4}$/;
/*
Handles the following cases

1234567
123-4567
5551234567
555-123-4567
(555) 123-4567
15551234567
1-555-123-4567
1 555 123-4567
1 (555) 123-4567
+1 (555) 123-4567
01 (555) 123-4567
*/

/**
 * A regex object to validate URLs
 */
// export const ValidUrlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(?:\)\*\+,;=.]+$/gim;
const URL_REGEX = /^(?:http(?:s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(?:\)\*\+,;=.]+$/i;

/**
 * A regex object to validate zip codes
 */
const ZIP_CODE_REGEX = /^\d{5}(?:[-\s]\d{4})?$/;

/**
 * A regular expression utility
 */
class RegexUtil {
    /**
     * Determine if the passed string is an ISO date
     * @param text - The text to test
     * @returns True if the passed text is an ISO date
     */
    static isIsoDate(text) {
        if (ISO_DATE_REGEX.test(text) === true) {
            return true;
        }
        return false;
    }
    /**
     * Determine if the passed string is a latitude
     * @param text - The text to test
     * @returns True if the passed text is a latitude
     */
    static isLatitude(text) {
        if (LATITUDE_REGEX.test(text) === true) {
            return true;
        }
        return false;
    }
    /**
     * Determine if the passed string is a longitude
     * @param text - The text to test
     * @returns True if the passed text is a longitude
     */
    static isLongitude(text) {
        if (LONGITUDE_REGEX.test(text) === true) {
            return true;
        }
        return false;
    }
    /**
     * Determine if the passed string is a phone number
     * @param text - The text to test
     * @returns True if the passed text is a phone number
     */
    static isPhoneNumber(text) {
        if (PHONE_NUMBER_REGEX.test(text) === true) {
            return true;
        }
        return false;
    }
    /**
     * Determine if the passed string is a strong password
     * @param text - The text to test
     * @returns True if the passed text is a strong password
     */
    static isStrongPassword(text) {
        if (STRONG_PASSWORD_REGEX.test(text) === true) {
            return true;
        }
        return false;
    }
    /**
     * Determine if the passed text is a URL
     * @param text - The text to test
     * @returns True if the passed text is a URL
     */
    static isUrl(text) {
        if (URL_REGEX.test(text) === true) {
            return true;
        }
        return false;
    }
    /**
     * Determine if the passed text is a zip code
     * @param text - The text to test
     * @returns True if the passed text is a zip code
     */
    static isZipCode(text) {
        if (ZIP_CODE_REGEX.test(text) === true) {
            return true;
        }
        return false;
    }
}

/**
 * A utility for sorting and filtering arrays
 */
class CollectionUtil {
    // ********************
    // Public Static methods
    // ********************
    /**
     * Append an item to an array
     * @param collection - The array of items
     * @param item - The item to append to the array
     * @param unique - Enum indicating whether uniqueness is enforced
     * @param uniqueMode - Enum indicating how uniqueness will be determined
     * @returns True if the item was successfully appended
     */
    static append(collection, item, unique = Unique.True, uniqueMode = UniqueMode.Id) {
        if (unique === Unique.True) {
            if (uniqueMode === UniqueMode.Id &&
                item.hasOwnProperty('_id') &&
                CollectionUtil.isUniqueById(collection, item) === false) {
                return false;
            }
            else if (uniqueMode === UniqueMode.Object &&
                CollectionUtil.isUniqueByObject(collection, item) === false) {
                return false;
            }
        }
        collection.push(item);
        return true;
    }
    /**
     * Fitler an array of objects
     * @param collection - The array of objects to filter
     * @param filter - The filter string
     * @param filterColumns - The object properties to use when filtering
     * @param filterOptions - The filter options
     * @returns An array of filtered objects
     */
    static filter(collection, filter, filterColumns, filterOptions) {
        // If the filter string or collection are not valid then just return the collection unchanged
        if (!filter || !collection) {
            return collection;
        }
        if (!filterOptions) {
            filterOptions = new FilterOptions();
        }
        // Filter the collection using a lambda expression
        const filteredData = collection.filter(o => {
            // For each of the filter columns
            for (const filterColumn of filterColumns) {
                // Get the text of the current column
                const text = o[filterColumn];
                // Create a regular expression for the passed filter string and filter options
                const regExp = this.getFilterRegex(filter, filterOptions);
                // If the contents of the current column matches the filter string then
                if (text.search(regExp) >= 0) {
                    // Return true (collection row is included in the filtered data)
                    return true;
                }
            }
            // Return false (collection row is not included in the filtered data)
            return false;
        });
        // Return the filtered data
        return filteredData;
    }
    /**
     * Find an object in an array of objects by matching an object property
     * @param collection - The array of objects to search
     * @param property - The object property to search
     * @param value - The value to match
     * @returns The matching object
     */
    static find(collection, property, value) {
        const object = collection.find(o => o[property] === value);
        return object;
    }
    /**
     * Find an object in an array of objects by matching the object's ID
     * @param collection - The array of objects to search
     * @param id - The object ID to search for
     * @returns The matching object
     */
    static findById(collection, id) {
        const object = collection.find(o => o._id === id);
        return object;
    }
    /**
     * Get the index of an object in an array of objects
     * @param collection - The array of objects to search
     * @param item - The item to search for
     * @returns The index of the item in the array (zero-based)
     */
    static findIndex(collection, item) {
        const index = collection.findIndex(o => o === item);
        return index;
    }
    /**
     * Insert an object into an array of objects
     * @param collection - The array of objects into which the object will be inserted
     * @param item - The item to insert into the array
     * @param index - The desired location of the item in the array
     * @returns True if the insert succeeded
     */
    static insert(collection, item, index = 0) {
        collection.splice(index, 0, item);
        return true;
    }
    /**
     * Sort an array of objects by mutliple keys. The method sorts the passed array in-place as opposed to
     * returning the sorted array.
     * @param collection - The array of objects to sort
     * @param sortOptions - The sort options
     */
    static multiKeySort(collection, ...sortOptions) {
        collection.sort((a, b) => {
            for (const sortOption of sortOptions) {
                if (typeof a[sortOption.key] === 'boolean') {
                    if (!a[sortOption.key] && b[sortOption.key]) {
                        return sortOption.order === Sort.Ascending ? -1 : 1;
                    }
                    else if (a[sortOption.key] && !b[sortOption.key]) {
                        return sortOption.order === Sort.Ascending ? 1 : -1;
                    }
                }
                else if (!RegexUtil.isIsoDate(a[sortOption.key]) &&
                    typeof a[sortOption.key] === 'string') {
                    if (a[sortOption.key].toLowerCase() < b[sortOption.key].toLowerCase()) {
                        return sortOption.order === Sort.Ascending ? -1 : 1;
                    }
                    else if (a[sortOption.key].toLowerCase() > b[sortOption.key].toLowerCase()) {
                        return sortOption.order === Sort.Ascending ? 1 : -1;
                    }
                }
                else {
                    if (a[sortOption.key] < b[sortOption.key]) {
                        return sortOption.order === Sort.Ascending ? -1 : 1;
                    }
                    else if (a[sortOption.key] > b[sortOption.key]) {
                        return sortOption.order === Sort.Ascending ? 1 : -1;
                    }
                }
            }
            return 0;
        });
    }
    /**
     * Remove an object from an array of objects by matching the object ID
     * @param collection - The array of objects from which to remove an object
     * @param item - The item to remove from the array
     * @returns The array of objects with the item removed
     */
    static remove(collection, item) {
        const updatedCollection = collection.filter(o => o._id !== item._id);
        return updatedCollection;
    }
    /**
     * Remove an object from an array of object by matching the passed object ID
     * @param collection - The array of objects from which to remove an object
     * @param ID - The ID of the item to remove from the array
     * @returns The array of objects with the item removed
     */
    static removeById(collection, id) {
        const updatedCollection = collection.filter(o => o._id !== id);
        return updatedCollection;
    }
    /**
     * Shuffly an array of objects
     * @param collection - The array of objects to shuffly
     * @returns The shuffled array of objects
     */
    static shuffle(collection) {
        let currentIndex = collection.length;
        let temporaryValue;
        let randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // Swap it with the current element.
            temporaryValue = collection[currentIndex];
            collection[currentIndex] = collection[randomIndex];
            collection[randomIndex] = temporaryValue;
        }
        return collection;
    }
    /**
     * Sort an array of objects by a single property. The method sorts the passed array in-place as opposed to
     * returning the sorted array.
     * @param collection - The array of objects to sort
     * @param key - The property to use for sorting
     * @param order - The sort order
     */
    static sort(collection, key, order) {
        collection.sort((a, b) => {
            if (!RegexUtil.isIsoDate(a[key]) && typeof a[key] === 'string') {
                if (a[key].toLowerCase() < b[key].toLowerCase()) {
                    return order === Sort.Ascending ? -1 : 1;
                }
                else if (a[key].toLowerCase() > b[key].toLowerCase()) {
                    return order === Sort.Ascending ? 1 : -1;
                }
                return 0;
            }
            else {
                if (a[key] < b[key]) {
                    return order === Sort.Ascending ? -1 : 1;
                }
                else if (a[key] > b[key]) {
                    return order === Sort.Ascending ? 1 : -1;
                }
                return 0;
            }
        });
    }
    /**
     * Update an object in an array of objects. Use the object's ID to match objects.
     * @param collection - The array of objects that contains the object to update
     * @param item - The item to update
     * @param addIfMissing - Boolean indicating whether to add the item if it is not present in the array
     * @returns The array of objects with the updated item
     */
    static update(collection, item, addIfMissing = false) {
        const index = collection.findIndex(o => o._id === item._id);
        if (index < 0) {
            if (addIfMissing === true) {
                collection.push(item);
                return collection;
            }
            else {
                return collection;
            }
        }
        collection[index] = item;
        return collection;
    }
    // ********************
    // Private Static methods
    // ********************
    /**
     * Create a regular expression object that implements the passed filter options
     * @param filter - The filter text
     * @param filterOptions - The filter options
     * @returns A regular expression object
     */
    static getFilterRegex(filter, filterOptions) {
        filter = this.escapeRegexCharacters(filter);
        let regexString;
        switch (filterOptions.fitlerScope) {
            case FilterScope.StartsWith:
                regexString = '^' + filter;
                break;
            case FilterScope.EndsWith:
                regexString = filter + '$';
                break;
            default:
                regexString = filter;
                break;
        }
        let regExp;
        if (filterOptions.fitlerCase === FilterCase.CaseSensitive) {
            regExp = new RegExp('.*' + regexString + '.*');
        }
        else {
            regExp = new RegExp('.*' + regexString + '.*', 'i');
        }
        return regExp;
    }
    /**
     * Determine whether an object exists in an array of objects by comparing the object properties
     * @param collection - The array of objects to search
     * @param item - The item to search for
     * @returns True if the object is unique
     */
    static isUniqueByObject(collection, item) {
        for (const collectionItem of collection) {
            if (isEqual(collectionItem, item)) {
                return false;
            }
        }
        return true;
    }
    /**
     * Determine whether an object exists in an array of objects by comparing the object IDs
     * @param collection - The array of objects to search
     * @param item - The item to search for
     * @returns True if the object is unique
     */
    static isUniqueById(collection, item) {
        const matchingItem = collection.find(o => o._id === item._id);
        if (matchingItem) {
            return false;
        }
        return true;
    }
    /**
     * Escape a regular expression string
     * @param regexString - The regex string to escape
     * @returns The escaped regular expression string
     */
    static escapeRegexCharacters(regexString) {
        const escapedText = regexString.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        return escapedText;
    }
}

/**
 * A utility for copying objects
 */
class ObjectCopyUtil {
    // ********************
    // Static methods
    // ********************
    /**
     * Perform a default (deep) copy of the object
     * @param objectToCopy - The object to copy
     * @returns The copied object
     */
    static copy(objectToCopy) {
        return ObjectCopyUtil.deepCopy(objectToCopy);
    }
    /**
     * Perform a deep copy of the object
     * @param objectToCopy - The object to copy
     * @returns The copied object
     */
    static deepCopy(objectToCopy) {
        const cloneObj = cloneDeep(objectToCopy);
        return cloneObj;
    }
    /**
     * Perform a shallow copy of the object
     * @param objectToCopy - The object to copy
     * @returns The copied object
     */
    static shallowCopy(objectToCopy) {
        return Object.assign({}, objectToCopy);
    }
    /**
     * Perform a typed of the object. Copy the object and then apply the properties of the passed class.
     * @param objectToCopy - The object to copy
     * @param type - The prototype whose methods will be copied
     * @returns The copied object
     */
    static typedCopy(objectToCopy, type) {
        let cloneObj = this.deepCopy(objectToCopy);
        cloneObj = plainToClass(type, cloneObj);
        return cloneObj;
    }
}

/**
 * A utility to combine the properties of multiple classes
 */
class MixinUtil {
    /**
     *
     * @param derivedCtor - The object to receive the new properties
     * @param baseCtors - The objects from which to copy properties
     */
    static ApplyMixins(derivedCtor, baseCtors) {
        baseCtors.forEach(baseCtor => {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });
    }
}

/**
 * A utility to implement pagination
 */
class PaginatorUtil {
    /**
     * Constructor
     * @param pageSize - The page size
     * @param pageSizeOptions - The page size options
     * @param sortOptions - The sort options
     */
    constructor(pageSize = 5, pageSizeOptions = [5, 10, 20, 50], ...sortOptions) {
        // **********************
        // * Public properties
        // **********************
        /** An RXJS subject that will emit events when pagination properties change */
        this.paginationSubject$ = new Subject();
        /** The current page index */
        this._pageIndex = 0;
        /** The page size */
        this._pageSize = 5;
        /** The columns to use when filtering */
        this._filterColumns = [];
        /** The filter options */
        this._filterOptions = new FilterOptions();
        this._pageSize = pageSize;
        this._pageSizeOptions = pageSizeOptions;
        this._sortOptions = sortOptions;
    }
    /** A get accessor for the query string */
    get query() {
        return this._query;
    }
    /** A get accessor for the hasFilter property */
    get hasFilter() {
        return this._query ? true : false;
    }
    /** A get accessor for the array length */
    get length() {
        return this._length;
    }
    /** A set accessor for the array length */
    set length(length) {
        this._length = length;
    }
    /** A get accessor for the current page index */
    get pageIndex() {
        return this._pageIndex;
    }
    /** A set accessor for the current page index */
    set pageIndex(pageIndex) {
        this._pageIndex = pageIndex;
    }
    /** A get accessor for the page size */
    get pageSize() {
        return this._pageSize;
    }
    /** A set accessor for the page size */
    set pageSize(pageSize) {
        this._pageSize = pageSize;
    }
    /** A get accessor for the previous page index */
    get previousPageIndex() {
        return this._previousPageIndex;
    }
    /** A get accessor for the page size options */
    get pageSizeOptions() {
        return this._pageSizeOptions;
    }
    /** A get accessor for the noData property */
    get noData() {
        return this._noData;
    }
    /** A get accessor for the sort optioins */
    get sortOptions() {
        return this._sortOptions;
    }
    // **********************
    // * Public methods
    // **********************
    /**
     * Append an object to the data array
     * @param object - The object to append
     * @param pageIndex - The page to go to after appending the object
     * @returns The modified page of data
     */
    append(object, pageIndex) {
        if (object) {
            this._data.push(object);
            // this._length = this._data.length;
        }
        return this.paginate(pageIndex);
    }
    /**
     * Delete an object from the data array. Use the object ID to locate the object to delete.
     * @param id - The ID of the object to delete.
     * @param pageIndex - The page to go to after deleting the object
     * @returns The modified page of data
     */
    deleteById(id, pageIndex) {
        if (id) {
            this._data = this._data.filter(f => f._id !== id);
        }
        return this.paginate(pageIndex);
    }
    /**
     * Find an object in the data array
     * @param property - The object property to use for matching
     * @param value - The property value to look for
     * @returns The matching object
     */
    find(property, value) {
        const result = CollectionUtil.find(this._data, property, value);
        return result;
    }
    /**
     * Find an object in the data array by matching the object ID
     * @param id - The ID of the object to find
     * @returns The matching object
     */
    getById(id) {
        const object = CollectionUtil.findById(this._data, id);
        return object;
    }
    /**
     * Go to the start of the data array
     */
    goFirst() {
        this._pageIndex = 0;
        return this.paginate();
    }
    /** Go to the end of the data array */
    goLast() {
        const pageCount = Math.floor(this._length / this._pageSize);
        this._pageIndex = pageCount - 1;
        if (this._pageIndex < 0) {
            this._pageIndex = 0;
        }
    }
    /**
     * Insert an object in the data array
     * @param object - The object to insert
     * @param pageIndex - The page to go to after inserting the object
     * @returns The modified page of data
     */
    insert(object, pageIndex) {
        if (object) {
            this._data.unshift(object);
        }
        return this.paginate(pageIndex);
    }
    /**
     * Load the passed data into the data array
     * @param data - The data to load
     * @returns The first page of data
     */
    loadData(data) {
        this._data = data;
        this._length = data.length;
        this._noData = data.length === 0 ? true : false;
        const filteredData = this.paginate();
        return filteredData;
    }
    /**
     * Update the paginator properties and trigger a pagination event
     * @param pageData - The paginator properties to update
     */
    onPagination(pageData) {
        return __awaiter(this, void 0, void 0, function* () {
            pageData.pageSizeChanged = this._pageSize !== pageData.pageSize;
            this._length = pageData.length;
            this._pageIndex = pageData.pageIndex;
            this._pageSize = pageData.pageSize;
            this._previousPageIndex = pageData.previousPageIndex;
            this.paginationSubject$.next(pageData);
        });
    }
    /**
     * Trigger a pagination event
     * @param pageIndex - The page to go to after re-sorting and filtering
     * @Returns The current page of data
     */
    paginate(pageIndex) {
        this.sort();
        this._filteredData = this.filter();
        this._length = this._filteredData.length;
        if (pageIndex !== undefined) {
            this._pageIndex = pageIndex;
        }
        let start = this._pageIndex * this._pageSize;
        if (start >= this.length) {
            this._pageIndex--;
            if (this.pageIndex < 0) {
                this.pageIndex = 0;
            }
            start = this._pageIndex * this._pageSize;
        }
        const end = start + this._pageSize;
        const dataToReturn = slice(this._filteredData, start, end);
        return dataToReturn;
    }
    /**
     * Set the sort options
     * @param sortOptions - The sort options
     */
    setSortOptions(...sortOptions) {
        this._sortOptions = sortOptions;
    }
    /**
     * Set the filter columns
     * @param filterColumns - The filter columns
     */
    setFilterColumns(...filterColumns) {
        this._filterColumns = filterColumns;
    }
    /**
     * Set the filter options
     * @param fitlerCase - The filter case option
     * @param fitlerScope - The filter scope option
     */
    setFilterOptions(fitlerCase, fitlerScope) {
        this._filterOptions = new FilterOptions(fitlerCase, fitlerScope);
    }
    /**
     * Set the filter query
     * @param query - The filter query
     * @returns A page of data
     */
    setQuery(query) {
        this._query = query;
        return this.paginate();
    }
    /**
     * Update an object in the data array
     * @param object - The object to update
     * @param pageIndex - The page to go to after updating
     * @Returns The current page of data
     */
    update(object, pageIndex) {
        const index = this._data.findIndex(o => o._id === object._id);
        if (index < 0) {
            this._data.push(object);
            // this._length = this._data.length;
        }
        else {
            this._data[index] = object;
        }
        return this.paginate(pageIndex);
    }
    /**
     * Apply the current filter
     */
    filter() {
        if (!this._query || !this._data) {
            return this._data;
        }
        const filteredData = CollectionUtil.filter(this._data, this._query, this._filterColumns, this._filterOptions);
        return filteredData;
    }
    /**
     * Apply the current sort options
     */
    sort() {
        if (!this._sortOptions) {
            return;
        }
        if (!this._data) {
            return;
        }
        CollectionUtil.multiKeySort(this._data, ...this._sortOptions);
    }
}

/**
 * A utility for generating Short IDs
 */
class ShortIdUtil {
    /**
     * Generate a short ID
     * @returns A short ID string
     */
    static generateId() {
        let id = generate();
        while (id.indexOf('_') >= 0 || id.indexOf('-') >= 0) {
            id = generate();
        }
        return id;
    }
}

class MatDialogMock {
    constructor() {
        this.dialogResult = new DialogResult(DialogButton.OK);
    }
    open() {
        return {
            afterClosed: () => of(this.dialogResult)
        };
    }
}

const validateStrongPassword = (control) => {
    try {
        const value = control.value;
        if (/(?=.*[a-z])/.test(value) === false) {
            return {
                lowerCase: {
                    invalid: true
                }
            };
        }
        if (/(?=.*[A-Z])/.test(value) === false) {
            return {
                upperCase: {
                    invalid: true
                }
            };
        }
        if (/(?=.*[0-9])/.test(value) === false) {
            return {
                number: {
                    invalid: true
                }
            };
        }
        if (/(?=.[@%/'"!#,~&;`_<>\:\.\^\$\*\+\-\?\(\)\[\]\{\}\\\|])/.test(value) ===
            false) {
            return {
                specialCharacter: {
                    invalid: true
                }
            };
        }
        const stringValue = value;
        if (value.length < 8) {
            return {
                minLength: {
                    invalid: true
                }
            };
        }
        if (value.length > 20) {
            return {
                maxLength: {
                    invalid: true
                }
            };
        }
        return {};
    }
    catch (error) {
        return {
            invalidPassword: {
                invalid: true
            }
        };
    }
};

/*
 * Public API Surface of leatherman
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AdminAuthGuardService, ArrayDto, AuthenticationDataService, AuthenticationDetails, AuthenticationService, AuthenticationTokenExpiry, BaseComponent, BaseComponentUIService, BaseDataService, BaseModel, BaseNewUserRequest, BasePasswordResetRequest, BaseService, BaseUser, BaseUserDataService, BaseUserService, ClientErrorReport, CollectionUtil, ConfirmDialogComponent, ConfirmDialogData, ConfirmDialogService, ConfirmDialogServiceInjectionToken, CustomErrorHandlerService, DialogButton, DialogResult, Dto, DtoStatusContainer, ErrorDialogComponent, ErrorDialogData, ErrorDialogService, ErrorDialogServiceInjectionToken, FilterCase, FilterOptions, FilterScope, GetOptions, ISO_DATE_REGEX, ItemDto, LATITUDE_REGEX, LONGITUDE_REGEX, LeathermanAppConfigInjectionToken, LeathermanModule, LoginRequest, MatDialogMock, MixinUtil, MockConfirmDialogService, MockErrorDialogService, ObjectCopyUtil, Options, PHONE_NUMBER_REGEX, PaginatorUtil, Parameter, Parameters, RegexUtil, RoutePartsService, STATE_ABBREVIATIONS, STRONG_PASSWORD_REGEX, SafeHtmlPipe, SearchFacetField, SearchFacetFilter, SearchFacetFilterProperties, SearchFacetOptions, SearchFacetRangeFilter, SearchFacetRangeFilterProperties, SearchFacetRangeQuery, SearchMatchFilter, SearchOptions, SearchRangeFilter, SearchResultFacet, SearchResultFacetItem, SearchResultMeta, SearchResultRequest, SearchResultsContainer, SearchResultsDto, Secure, ShortIdUtil, Sort, SortOption, Status, TestArtifact, URL_REGEX, Unique, UniqueMode, UploadEvent, UrlUtil, UserAuthGuardService, ValidatePasswordResetTokenResponse, ValidateVerifyEmailTokenResponse, ZIP_CODE_REGEX, validateStrongPassword, AngularModule as ɵa };

//# sourceMappingURL=leatherman-bootstrap.js.map
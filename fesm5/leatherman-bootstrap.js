import { __awaiter, __generator, __decorate, __extends, __values, __param, __assign, __spread } from 'tslib';
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
var BaseComponent = /** @class */ (function () {
    // constructor
    function BaseComponent() {
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
    BaseComponent.prototype.ngOnDestroy = function () {
        this.destroySubject$.next();
    };
    BaseComponent.prototype.decodeURIComponent = function (uriComponent) {
        if (!uriComponent) {
            return uriComponent;
        }
        return decodeURIComponent(uriComponent);
    };
    BaseComponent.prototype.encodeURIComponent = function (uriComponent) {
        if (!uriComponent) {
            return uriComponent;
        }
        return encodeURIComponent(uriComponent);
    };
    /**
     * Subscribe to a subject
     * @param subject$ - The subject to subscribe to
     * @param callback - The callback method to call when the subject is triggered
     * @returns Void
     */
    BaseComponent.prototype.subscribeSubject = function (subject$, callback) {
        var _this = this;
        subject$.pipe(takeUntil(this.destroySubject$)).subscribe(function (result) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, callback(result)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     * Subscribe to a subject synchronously
     * @param subject$ - The subject to subscribe to
     * @param callback - The callback method to call when the subject is triggered
     * @returns Void
     */
    BaseComponent.prototype.subscribeSubjectSync = function (subject$, callback) {
        subject$.pipe(takeUntil(this.destroySubject$)).subscribe(function (result) {
            callback(result);
        });
    };
    /**
     * Subscribe to value change events for a control
     * @param control - The control to listen to
     * @param callback - The functiion to call when the control value changes
     */
    BaseComponent.prototype.subscribeValueChanges = function (control, callback) {
        var _this = this;
        control.valueChanges
            .pipe(debounceTime(400), distinctUntilChanged())
            .pipe(takeUntil(this.destroySubject$))
            .subscribe(function (result) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, callback(result)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
BaseComponent.ɵfac = function BaseComponent_Factory(t) { return new (t || BaseComponent)(); };
BaseComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: BaseComponent, selectors: [["lm-base-component"]], decls: 1, vars: 0, template: function BaseComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtext(0, "No UI Here");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BaseComponent, [{
        type: Component,
        args: [{
                selector: 'lm-base-component',
                template: 'No UI Here'
            }]
    }], function () { return []; }, null); })();
    return BaseComponent;
}());

/**
 * A pipe to transform HTML to safe HTML
 */
var SafeHtmlPipe = /** @class */ (function () {
    /**
     * Constructor
     * @param sanitizer - A reference to the DomSanitizer service
     */
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * Transform the passed HTML
     * @param html - The HTML to transform
     * @returns The transformed HTML
     */
    SafeHtmlPipe.prototype.transform = function (html) {
        var sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(html);
        return sanitizedHtml;
    };
    SafeHtmlPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DomSanitizer)); };
SafeHtmlPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "safeHtml", type: SafeHtmlPipe, pure: true });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SafeHtmlPipe, [{
        type: Pipe,
        args: [{
                name: 'safeHtml'
            }]
    }], function () { return [{ type: ɵngcc1.DomSanitizer }]; }, null); })();
    return SafeHtmlPipe;
}());

var LeathermanAppConfigInjectionToken = new InjectionToken('LeathermanAppConfig');

var ErrorDialogServiceInjectionToken = new InjectionToken('ErrorDialogService');

var ConfirmDialogServiceInjectionToken = new InjectionToken('ConfirmDialogService');

var AngularModule = /** @class */ (function () {
    /**
     * A module importing and exporting common Angular modules
     */
    function AngularModule() {
    }
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
    }], function () { return []; }, null); })();
    return AngularModule;
}());

/**
 * A dialog component to display an error message
 */
var ErrorDialogComponent = /** @class */ (function () {
    /**
     * @param activeModal - A reference to the dialog
     */
    function ErrorDialogComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ErrorDialogComponent.prototype.ngOnInit = function () {
        this.title = this.data.title;
        this.message = this.data.message;
    };
    /**
     * Method called when the dialog is cancelled
     */
    ErrorDialogComponent.prototype.onClose = function () {
        this.activeModal.close();
    };
    ErrorDialogComponent.ctorParameters = function () { return [
        { type: NgbActiveModal }
    ]; };
    __decorate([
        Input()
    ], ErrorDialogComponent.prototype, "data", void 0);
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
    return ErrorDialogComponent;
}());

/**
 * A class to store the results from a dialog
 */
var DialogResult = /** @class */ (function () {
    /**
     * @param button - The clicked button
     * @param data - The data returned by the dialog
     * @param data2 - Additional data returned by the diaoig
     * @param data3 - Additional data returned by the dialog
     */
    function DialogResult(button, data, data2, data3) {
        this.button = button;
        this.data = data;
        this.data2 = data2;
        this.data3 = data3;
    }
    return DialogResult;
}());

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
var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent.prototype.onCancel = function () {
        var dialogResult = new DialogResult(DialogButton.Cancel);
        this.activeModal.close(dialogResult);
    };
    ConfirmDialogComponent.prototype.onConfirm = function () {
        var dialogResult = new DialogResult(DialogButton.OK);
        this.activeModal.close(dialogResult);
    };
    ConfirmDialogComponent.ctorParameters = function () { return [
        { type: NgbActiveModal }
    ]; };
    __decorate([
        Input()
    ], ConfirmDialogComponent.prototype, "dialogData", void 0);
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
    return ConfirmDialogComponent;
}());

var LeathermanModule = /** @class */ (function () {
    /**
     * A module declaring and exporting Leatherman components
     */
    function LeathermanModule() {
    }
    LeathermanModule_1 = LeathermanModule;
    LeathermanModule.forRoot = function (appConfig, errorDialogService, confirmDialogService) {
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
    };
    var LeathermanModule_1;
LeathermanModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LeathermanModule });
LeathermanModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LeathermanModule_Factory(t) { return new (t || LeathermanModule)(); }, imports: [[AngularModule]] });
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
    }], function () { return []; }, null); })();
    return LeathermanModule;
}());

/**
 * Array of state abbrevations
 */
var STATE_ABBREVIATIONS = [
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
var ConfirmDialogData = /** @class */ (function () {
    /**
     * @param title - The title of the confirm dialog
     * @param message - The message to display in the confirm dialog
     */
    function ConfirmDialogData(title, message) {
        this.title = title;
        this.message = message;
    }
    return ConfirmDialogData;
}());

var ConfirmDialogService = /** @class */ (function () {
    function ConfirmDialogService(dialog) {
        this.dialog = dialog;
    }
    ConfirmDialogService.prototype.openConfirmDialog = function (title, message) {
        return __awaiter(this, void 0, void 0, function () {
            var confirmDialogData, dialogRef, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        confirmDialogData = new ConfirmDialogData(title, message);
                        dialogRef = this.dialog.open(ConfirmDialogComponent, {
                            backdrop: "static",
                            keyboard: false,
                        });
                        dialogRef.componentInstance.dialogData = confirmDialogData;
                        return [4 /*yield*/, dialogRef.result];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ConfirmDialogService.ctorParameters = function () { return [
        { type: NgbModal }
    ]; };
    ConfirmDialogService.ɵprov = ɵɵdefineInjectable({ factory: function ConfirmDialogService_Factory() { return new ConfirmDialogService(ɵɵinject(NgbModal)); }, token: ConfirmDialogService, providedIn: "root" });
ConfirmDialogService.ɵfac = function ConfirmDialogService_Factory(t) { return new (t || ConfirmDialogService)(ɵngcc0.ɵɵinject(ɵngcc2.NgbModal)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ConfirmDialogService, [{
        type: Injectable,
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: ɵngcc2.NgbModal }]; }, null); })();
    return ConfirmDialogService;
}());

/**
 * A service to mock the confirm dialog service
 */
var MockConfirmDialogService = /** @class */ (function (_super) {
    __extends(MockConfirmDialogService, _super);
    /**
     * @param dialog - A reference to the NgbModal service
     */
    function MockConfirmDialogService(dialog) {
        return _super.call(this, dialog) || this;
    }
    /**
     * Display a confirm dialog
     * @param title - The title of the confirm dialog
     * @param message - The message to display in the confirm dialog
     */
    MockConfirmDialogService.prototype.openConfirmDialog = function (title, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('Using mock confirm dialog service.');
                return [2 /*return*/, Promise.resolve(new DialogResult(DialogButton.OK))];
            });
        });
    };
    MockConfirmDialogService.ctorParameters = function () { return [
        { type: NgbModal }
    ]; };
    MockConfirmDialogService.ɵprov = ɵɵdefineInjectable({ factory: function MockConfirmDialogService_Factory() { return new MockConfirmDialogService(ɵɵinject(NgbModal)); }, token: MockConfirmDialogService, providedIn: "root" });
MockConfirmDialogService.ɵfac = function MockConfirmDialogService_Factory(t) { return new (t || MockConfirmDialogService)(ɵngcc0.ɵɵinject(ɵngcc2.NgbModal)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MockConfirmDialogService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc2.NgbModal }]; }, null); })();
    return MockConfirmDialogService;
}(ConfirmDialogService));

/**
 * A class to store error/confirm dialog data
 */
var ErrorDialogData = /** @class */ (function () {
    /**
     * @param title - The title of the error dialog
     * @param message - The message to display in the error dialog
     */
    function ErrorDialogData(title, message) {
        this.title = title;
        this.message = message;
    }
    return ErrorDialogData;
}());

/**
 *  A service to manage and display error dialogs
 */
var ErrorDialogService = /** @class */ (function () {
    function ErrorDialogService(dialog) {
        this.dialog = dialog;
    }
    /**
     * Open an error dialog
     * @param title - The title of the error dialog
     * @param message - The message to display to the user
     */
    ErrorDialogService.prototype.openErrorDialog = function (title, message) {
        return __awaiter(this, void 0, void 0, function () {
            var dialogData, dialogRef;
            return __generator(this, function (_a) {
                dialogData = new ErrorDialogData(title, message);
                dialogRef = this.dialog.open(ErrorDialogComponent);
                dialogRef.componentInstance.data = dialogData;
                return [2 /*return*/, new DialogResult(DialogButton.OK)];
            });
        });
    };
    ErrorDialogService.ctorParameters = function () { return [
        { type: NgbModal }
    ]; };
    ErrorDialogService.ɵprov = ɵɵdefineInjectable({ factory: function ErrorDialogService_Factory() { return new ErrorDialogService(ɵɵinject(NgbModal)); }, token: ErrorDialogService, providedIn: "root" });
ErrorDialogService.ɵfac = function ErrorDialogService_Factory(t) { return new (t || ErrorDialogService)(ɵngcc0.ɵɵinject(ɵngcc2.NgbModal)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ErrorDialogService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc2.NgbModal }]; }, null); })();
    return ErrorDialogService;
}());

/**
 * A service to mock the confirm dialog service
 */
var MockErrorDialogService = /** @class */ (function (_super) {
    __extends(MockErrorDialogService, _super);
    function MockErrorDialogService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Open an error dialog
     * @param title - The title of the error dialog
     * @param message - The message to display to the user
     */
    MockErrorDialogService.prototype.openErrorDialog = function (title, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('Using mock error dialog service.');
                console.log('Title: ' + title);
                console.log('Title: ' + message);
                return [2 /*return*/, Promise.resolve(new DialogResult(DialogButton.OK))];
            });
        });
    };
    MockErrorDialogService.ɵprov = ɵɵdefineInjectable({ factory: function MockErrorDialogService_Factory() { return new MockErrorDialogService(ɵɵinject(NgbModal)); }, token: MockErrorDialogService, providedIn: "root" });
MockErrorDialogService.ɵfac = function MockErrorDialogService_Factory(t) { return ɵMockErrorDialogService_BaseFactory(t || MockErrorDialogService); };
var ɵMockErrorDialogService_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MockErrorDialogService);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MockErrorDialogService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
    return MockErrorDialogService;
}(ErrorDialogService));

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

var GetOptions = /** @class */ (function () {
    function GetOptions(currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
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
    GetOptions.calculatePageCount = function (rowCount, pageSize) {
        var pageCount = Math.floor((rowCount - 1) / pageSize) + 1;
        return pageCount;
    };
    GetOptions.prototype.setSort = function (field, ascending) {
        if (ascending === void 0) { ascending = true; }
        this.sortColumn = field;
        this.sortAscending = ascending;
        if (ascending === true) {
            this.sort = field + ':ASC';
        }
        else {
            this.sort = field + ':DESC';
        }
    };
    return GetOptions;
}());

var AuthenticationDetails = /** @class */ (function () {
    function AuthenticationDetails() {
        this.roles = [];
    }
    return AuthenticationDetails;
}());

var AuthenticationTokenExpiry = /** @class */ (function () {
    function AuthenticationTokenExpiry() {
    }
    return AuthenticationTokenExpiry;
}());

/**
 * A class to store login request data
 */
var LoginRequest = /** @class */ (function () {
    function LoginRequest(
    /** The user's email address */
    email, 
    /** The user's password */
    password) {
        this.email = email;
        this.password = password;
    }
    return LoginRequest;
}());

/**
 * The base model class
 */
var BaseModel = /** @class */ (function () {
    /**
     * @param testArtifact - Enum indicating whether the model is a test artifact
     */
    function BaseModel(testArtifact) {
        if (testArtifact === TestArtifact.true) {
            this.testArtifact = true;
        }
    }
    return BaseModel;
}());

var SearchFacetField = /** @class */ (function () {
    function SearchFacetField(field, label, token, isString, facetLabelCallback) {
        this.field = field;
        this.label = label;
        this.token = token;
        this.isString = isString;
        this.facetLabelCallback = facetLabelCallback;
    }
    return SearchFacetField;
}());

var SearchFacetFilterProperties = /** @class */ (function () {
    function SearchFacetFilterProperties(field, label, isString) {
        this.field = field;
        this.label = label;
        this.isString = isString;
    }
    return SearchFacetFilterProperties;
}());

var SearchFacetFilter = /** @class */ (function () {
    function SearchFacetFilter() {
        this.token = '';
        this.value = '';
        this.label = '';
        this.query = '';
        this.field = '';
        this.excludedFacet = false;
        this.isString = false;
    }
    return SearchFacetFilter;
}());

var SearchFacetOptions = /** @class */ (function () {
    function SearchFacetOptions() {
        this.fields = [];
        this.rangeQueries = [];
    }
    SearchFacetOptions.prototype.getRangeQuery = function (query) {
        var e_1, _a;
        var cleanedQuery = query.replace(/{[^}]+}/i, '').trim();
        try {
            for (var _b = __values(this.rangeQueries), _c = _b.next(); !_c.done; _c = _b.next()) {
                var rangeQuery = _c.value;
                if (rangeQuery.query === cleanedQuery) {
                    return rangeQuery;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    return SearchFacetOptions;
}());

var SearchFacetRangeFilterProperties = /** @class */ (function () {
    function SearchFacetRangeFilterProperties(field, label, fromValue, toValue, query, value) {
        this.field = field;
        this.label = label;
        this.fromValue = fromValue;
        this.toValue = toValue;
        this.query = query;
        this.value = value;
    }
    return SearchFacetRangeFilterProperties;
}());

var SearchFacetRangeFilter = /** @class */ (function () {
    function SearchFacetRangeFilter() {
        this.token = '';
        this.fromValue = '';
        this.toValue = '';
        this.label = '';
        this.query = '';
        this.field = '';
        this.value = '';
        this.excludedFacet = false;
    }
    return SearchFacetRangeFilter;
}());

var SearchFacetRangeQuery = /** @class */ (function () {
    function SearchFacetRangeQuery(field, fromValue, toValue, facetLabel, label, value, token) {
        this.field = field;
        this.fromValue = fromValue;
        this.toValue = toValue;
        this.facetLabel = facetLabel;
        this.label = label;
        this.value = value;
        this.token = token;
        this.query = field + ':[' + fromValue + ' TO ' + toValue + ']';
    }
    return SearchFacetRangeQuery;
}());

var SearchMatchFilter = /** @class */ (function () {
    function SearchMatchFilter() {
    }
    return SearchMatchFilter;
}());

var SearchRangeFilter = /** @class */ (function () {
    function SearchRangeFilter() {
    }
    return SearchRangeFilter;
}());

var SearchOptions = /** @class */ (function () {
    function SearchOptions() {
        this.facetFilters = [];
        this.facetRangeFilters = [];
        this.otherFilters = [];
    }
    SearchOptions.prototype.getMatchFilters = function () {
        var e_1, _a, e_2, _b;
        var matchFilters = [];
        try {
            for (var _c = __values(this.facetFilters), _d = _c.next(); !_d.done; _d = _c.next()) {
                var facetFilter = _d.value;
                var matchFilter = new SearchMatchFilter();
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
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var _e = __values(this.otherFilters), _f = _e.next(); !_f.done; _f = _e.next()) {
                var otherFilter = _f.value;
                matchFilters.push(otherFilter);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return matchFilters;
    };
    SearchOptions.prototype.getRangeFilters = function () {
        var e_3, _a;
        var matchFilters = [];
        try {
            for (var _b = __values(this.facetRangeFilters), _c = _b.next(); !_c.done; _c = _b.next()) {
                var facetFilter = _c.value;
                var rangeFilter = new SearchRangeFilter();
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
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return matchFilters;
    };
    SearchOptions.prototype.urlDecode = function (text) {
        var decodedText = decodeURIComponent(text);
        return decodedText;
    };
    return SearchOptions;
}());

var SearchResultFacetItem = /** @class */ (function () {
    function SearchResultFacetItem() {
        this.label = '';
        this.count = 0;
        this.query = '';
        this.active = false;
    }
    SearchResultFacetItem.prototype.createQuery = function (q, facetFilters, rangeQueries) {
        var e_1, _a, e_2, _b;
        var queryString = '';
        queryString = this.appendQueryString(queryString, 'f=');
        var activeFilter = null;
        var foundToken = false;
        try {
            for (var facetFilters_1 = __values(facetFilters), facetFilters_1_1 = facetFilters_1.next(); !facetFilters_1_1.done; facetFilters_1_1 = facetFilters_1.next()) {
                var facetFilter = facetFilters_1_1.value;
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
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (facetFilters_1_1 && !facetFilters_1_1.done && (_a = facetFilters_1.return)) _a.call(facetFilters_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var activeRangeQuery = null;
        try {
            for (var rangeQueries_1 = __values(rangeQueries), rangeQueries_1_1 = rangeQueries_1.next(); !rangeQueries_1_1.done; rangeQueries_1_1 = rangeQueries_1.next()) {
                var rangeQuery = rangeQueries_1_1.value;
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
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (rangeQueries_1_1 && !rangeQueries_1_1.done && (_b = rangeQueries_1.return)) _b.call(rangeQueries_1);
            }
            finally { if (e_2) throw e_2.error; }
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
    };
    SearchResultFacetItem.prototype.appendQueryString = function (queryString, appendString) {
        var appendedQueryString;
        if (!queryString) {
            appendedQueryString = '';
        }
        else {
            appendedQueryString = queryString + '&';
        }
        appendedQueryString += appendString;
        return appendedQueryString;
    };
    SearchResultFacetItem.prototype.urlEncode = function (text) {
        var encodedText = encodeURIComponent(text);
        return encodedText;
    };
    return SearchResultFacetItem;
}());

var SearchResultFacet = /** @class */ (function () {
    function SearchResultFacet(field, label) {
        this.field = field;
        this.label = label;
        this.items = [];
    }
    SearchResultFacet.prototype.createQuery = function (q, facetFilters, rangeQueries) {
        var e_1, _a;
        try {
            for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                item.createQuery(q, facetFilters, rangeQueries);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    return SearchResultFacet;
}());

var SearchResultMeta = /** @class */ (function () {
    function SearchResultMeta(solrResults) {
        this.qTime = solrResults.responseHeader.QTime;
        this.resultCount = solrResults.response.docs.length;
        this.numFound = solrResults.response.numFound;
        this.start = solrResults.response.start;
    }
    return SearchResultMeta;
}());

var SearchResultRequest = /** @class */ (function () {
    function SearchResultRequest(solrResults, options) {
        this.q = options.q;
        this.facetOptions = options.facetOptions;
        this.facetFilters = options.facetFilters;
        this.facetRangeFilters = options.facetRangeFilters;
        this.start = solrResults.responseHeader.params.start;
        this.rows = solrResults.responseHeader.params.rows;
    }
    return SearchResultRequest;
}());

/**
 * A container to store DTO status data
 */
var DtoStatusContainer = /** @class */ (function () {
    /**
     * @param code - The DTO's status code
     */
    function DtoStatusContainer(code) {
        if (code === void 0) { code = Status.OK; }
        this.code = code;
    }
    Object.defineProperty(DtoStatusContainer.prototype, "text", {
        /** A get accessor for the DTO's status text */
        get: function () {
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Determine whether the status is an error code
     */
    DtoStatusContainer.prototype.isError = function () {
        if (this.code === Status.OK ||
            this.code === Status.NoData ||
            this.code === Status.Created ||
            this.code === Status.NotModifed) {
            return false;
        }
        return true;
    };
    /**
     * Determine whether the status is not an error code
     */
    DtoStatusContainer.prototype.isNotError = function () {
        if (this.code === Status.OK ||
            this.code === Status.NoData ||
            this.code === Status.Created ||
            this.code === Status.NotModifed) {
            return true;
        }
        return false;
    };
    return DtoStatusContainer;
}());

/**
 * A data transfer object class
 */
var Dto = /** @class */ (function () {
    /**
     * @param code = The status code
     */
    function Dto(code) {
        if (code === void 0) { code = Status.OK; }
        this.status = new DtoStatusContainer(code);
    }
    /**
     * Determine whether the passed status code is an error
     * @param code - The status code
     * @param suppressErrors  - A list of error codes to suppress (i.e. not treat as errors)
     * @returns True if the status code is an error code
     */
    Dto.isError = function (code, suppressErrors) {
        if (suppressErrors && suppressErrors.findIndex(function (c) { return c === code; }) >= 0) {
            return false;
        }
        if (code === Status.OK ||
            code === Status.NoData ||
            code === Status.Created ||
            code === Status.NotModifed) {
            return false;
        }
        return true;
    };
    /**
     * Determine whether the passed status code is not an error
     * @param code - The status code
     * @returns True if the status code is not an error code
     */
    Dto.isNotError = function (code) {
        if (code === Status.OK ||
            code === Status.NoData ||
            code === Status.Created ||
            code === Status.NotModifed) {
            return true;
        }
        return false;
    };
    return Dto;
}());

/**
 * A DTO class to use if a controller returns an array of items
 */
var ArrayDto = /** @class */ (function (_super) {
    __extends(ArrayDto, _super);
    /**
     * @param code - The DTO's status code
     * @param data - The DTO's data (an array of objects)
     */
    function ArrayDto(code, data) {
        var _this = _super.call(this, code) || this;
        _this.data = data;
        return _this;
    }
    return ArrayDto;
}(Dto));

/**
 * A DTO class to use if a controller returns a single item
 */
var ItemDto = /** @class */ (function (_super) {
    __extends(ItemDto, _super);
    /**
     * @param code - The DTO's status code
     * @param data - The DTO's data
     */
    function ItemDto(code, data) {
        var _this = _super.call(this, code) || this;
        _this.data = data;
        return _this;
    }
    return ItemDto;
}(Dto));

var SearchResultsContainer = /** @class */ (function () {
    function SearchResultsContainer(searchResultsDto) {
        this.data = [];
        this.facets = [];
        this.data = searchResultsDto.data;
        this.facets = searchResultsDto.facets;
        this.request = searchResultsDto.request;
        this.meta = searchResultsDto.meta;
    }
    return SearchResultsContainer;
}());

var SearchResultsDto = /** @class */ (function (_super) {
    __extends(SearchResultsDto, _super);
    function SearchResultsDto(code, data) {
        var _this = _super.call(this, code) || this;
        _this.data = data;
        _this.facets = [];
        return _this;
    }
    return SearchResultsDto;
}(Dto));

/**
 * A class to store an error report
 */
var ClientErrorReport = /** @class */ (function (_super) {
    __extends(ClientErrorReport, _super);
    /**
     * @param serviceName - The name of the service reporting the error
     * @param message - The error message
     * @param status - The error status
     * @param statusText - The status text
     * @param url - The offending URL
     * @param stackTrace - A stack trace
     */
    function ClientErrorReport(serviceName, message, status, statusText, url, stackTrace) {
        var _this = _super.call(this) || this;
        _this.serviceName = serviceName;
        _this.message = message;
        _this.status = status;
        _this.statusText = statusText;
        _this.url = url;
        _this.stackTrace = stackTrace;
        return _this;
    }
    return ClientErrorReport;
}(BaseModel));

var UploadEvent = /** @class */ (function () {
    function UploadEvent(type, message, callbackId) {
        if (message === void 0) { message = null; }
        this.type = type;
        this.message = message;
        this.callbackId = callbackId;
    }
    return UploadEvent;
}());

/**
 * A class to store new user request data. This class serves as the base class for other user new user request
 * classes.
 */
var BaseNewUserRequest = /** @class */ (function () {
    /**
     * @param firstName - The user's first name
     * @param lastName - The user's last name
     * @param email - THe user's email address
     * @param password - The user's password
     * @param roles - THe user's roles
     * @param testArtifact - An enum indicating whether the new user request is a test artifact
     */
    function BaseNewUserRequest(firstName, lastName, email, password, roles, testArtifact) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.roles = roles;
        if (testArtifact === TestArtifact.true) {
            this.testArtifact = true;
        }
    }
    return BaseNewUserRequest;
}());

/**
 * A class to store password reset requests
 */
var BasePasswordResetRequest = /** @class */ (function () {
    /**
     * @param email - The user's email address
     */
    function BasePasswordResetRequest(email) {
        this.email = email;
    }
    return BasePasswordResetRequest;
}());

/**
 * The base user class
 */
var BaseUser = /** @class */ (function (_super) {
    __extends(BaseUser, _super);
    function BaseUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** An array containing the user's roles */
        _this.roles = [];
        return _this;
    }
    Object.defineProperty(BaseUser.prototype, "fullName", {
        /** Get accessor for the user's full name */
        get: function () {
            return this.firstName + ' ' + this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    return BaseUser;
}(BaseModel));

/**
 * A class to return the result of validating a password reset request token
 */
var ValidatePasswordResetTokenResponse = /** @class */ (function () {
    function ValidatePasswordResetTokenResponse() {
    }
    return ValidatePasswordResetTokenResponse;
}());

/**
 * A class to return the result of validating a verify email request token
 */
var ValidateVerifyEmailTokenResponse = /** @class */ (function () {
    function ValidateVerifyEmailTokenResponse() {
    }
    return ValidateVerifyEmailTokenResponse;
}());

/**
 * A class to store a query parameter
 */
var Parameter = /** @class */ (function () {
    /**
     * Constructor
     * @param name - The name of the parameter
     * @param value - THe paramter's value
     */
    function Parameter(name, value) {
        this.name = name;
        this.value = value;
    }
    return Parameter;
}());

/**
 * A class to store query parameters
 */
var Parameters = /** @class */ (function () {
    function Parameters() {
        /** An array of parameters */
        this._parameters = [];
    }
    Object.defineProperty(Parameters.prototype, "hasParameters", {
        /** Get accessor for hasParameters */
        get: function () {
            return this._parameters.length > 0 ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Add a parameter to the Parameters object
     * @param name - The name of the paramter to add
     * @param value - The value of the parameter to add
     */
    Parameters.prototype.add = function (name, value) {
        this._parameters.push(new Parameter(name, value));
    };
    /**
     * Get the parameter string
     * @returns A parameter string
     */
    Parameters.prototype.getParamterString = function () {
        var e_1, _a;
        var parameterString = '?';
        try {
            for (var _b = __values(this._parameters), _c = _b.next(); !_c.done; _c = _b.next()) {
                var parameter = _c.value;
                if (parameterString !== '?') {
                    parameterString += '&';
                }
                parameterString += parameter.name + '=' + parameter.value;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return parameterString;
    };
    return Parameters;
}());

/**
 * A class to store HTTP request options
 */
var Options = /** @class */ (function () {
    /**
     * Constructor
     */
    function Options() {
        /** An array of errors that should be suppressed (i.e. no error dialog shown) */
        this.suppressedErrors = [];
        this.parameters = new Parameters();
    }
    return Options;
}());

/**
 * A utility for working with URLs
 */
var UrlUtil = /** @class */ (function () {
    function UrlUtil() {
    }
    /**
     * Join the passed URL elements
     * @param urlElements - The URL elements to join
     * @returns The concatenated URL elements
     */
    UrlUtil.join = function () {
        var urlElements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            urlElements[_i] = arguments[_i];
        }
        var resultArray = [];
        // If the first part is a plain protocol, we combine it with the next part.
        if (urlElements[0].match(/^[^/:]+:\/*$/) && urlElements.length > 1) {
            var first = urlElements.shift();
            urlElements[0] = first + urlElements[0];
        }
        // There must be two or three slashes in the file protocol, two slashes in anything else.
        if (urlElements[0].match(/^file:\/\/\//)) {
            urlElements[0] = urlElements[0].replace(/^([^/:]+):\/*/, '$1:///');
        }
        else {
            urlElements[0] = urlElements[0].replace(/^([^/:]+):\/*/, '$1://');
        }
        for (var i = 0; i < urlElements.length; i++) {
            var component = urlElements[i];
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
        var joinedString = resultArray.join('/');
        // Each input component is now separated by a single slash except the possible first plain protocol part.
        // remove trailing slash before parameters or hash
        joinedString = joinedString.replace(/\/(\?|&|#[^!])/g, '$1');
        // replace ? in parameters with &
        var parts = joinedString.split('?');
        joinedString =
            parts.shift() + (parts.length > 0 ? '?' : '') + parts.join('&');
        return joinedString;
    };
    return UrlUtil;
}());

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
            var localStorageToken = localStorage.getItem(this.config.jwtTokenName);
            var token = localStorageToken ? 'Bearer ' + localStorageToken : '';
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
    BaseDataService.ɵprov = ɵɵdefineInjectable({ factory: function BaseDataService_Factory() { return new BaseDataService(ɵɵinject(LeathermanAppConfigInjectionToken), ɵɵinject(ErrorDialogServiceInjectionToken), ɵɵinject(Router), ɵɵinject(HttpClient)); }, token: BaseDataService, providedIn: "root" });
    BaseDataService = __decorate([ __param(0, Inject(LeathermanAppConfigInjectionToken)),
        __param(1, Inject(ErrorDialogServiceInjectionToken))
    ], BaseDataService);
BaseDataService.ɵfac = function BaseDataService_Factory(t) { return new (t || BaseDataService)(ɵngcc0.ɵɵinject(LeathermanAppConfigInjectionToken), ɵngcc0.ɵɵinject(ErrorDialogServiceInjectionToken), ɵngcc0.ɵɵinject(ɵngcc3.Router), ɵngcc0.ɵɵinject(ɵngcc4.HttpClient)); };
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
    return BaseDataService;
}());

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
    AuthenticationDataService.ɵprov = ɵɵdefineInjectable({ factory: function AuthenticationDataService_Factory() { return new AuthenticationDataService(ɵɵinject(LeathermanAppConfigInjectionToken), ɵɵinject(ErrorDialogServiceInjectionToken), ɵɵinject(Router), ɵɵinject(HttpClient)); }, token: AuthenticationDataService, providedIn: "root" });
    AuthenticationDataService = __decorate([ __param(0, Inject(LeathermanAppConfigInjectionToken)),
        __param(1, Inject(ErrorDialogServiceInjectionToken))
    ], AuthenticationDataService);
AuthenticationDataService.ɵfac = function AuthenticationDataService_Factory(t) { return new (t || AuthenticationDataService)(ɵngcc0.ɵɵinject(LeathermanAppConfigInjectionToken), ɵngcc0.ɵɵinject(ErrorDialogServiceInjectionToken), ɵngcc0.ɵɵinject(ɵngcc3.Router), ɵngcc0.ɵɵinject(ɵngcc4.HttpClient)); };
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
    return AuthenticationDataService;
}(BaseDataService));

/**
 * A service to handle client authentication
 */
var AuthenticationService = /** @class */ (function () {
    /**
     * Constructor
     * @param config - The app config object
     * @param authenticationDataService - A reference to the authentication data service
     */
    function AuthenticationService(config, authenticationDataService) {
        this.config = config;
        this.authenticationDataService = authenticationDataService;
        /** Reference to the JWT helper service */
        this.jwtHelper = new JwtHelperService();
    }
    Object.defineProperty(AuthenticationService.prototype, "token", {
        // **********************
        // * Private properties
        // **********************
        /** Get accessor for the JWT token */
        get: function () {
            if (!this._token) {
                this._token = this.getTokenFromLocalStorage();
            }
            return this._token;
        },
        /** Set accessor for the JWT token */
        set: function (token) {
            this.setLocalStorage(token);
            this._token = token;
        },
        enumerable: true,
        configurable: true
    });
    // **********************
    // * Public methods
    // **********************
    AuthenticationService.prototype.authenticate = function (loginRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var authenticationDetails;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authenticationDataService.authenticate(loginRequest)];
                    case 1:
                        authenticationDetails = _a.sent();
                        if (authenticationDetails.token && authenticationDetails.token.length > 0) {
                            this.token = authenticationDetails.token;
                        }
                        else {
                            this.clearToken();
                        }
                        return [2 /*return*/, authenticationDetails];
                }
            });
        });
    };
    /**
     * Clear the JWT token
     */
    AuthenticationService.prototype.clearToken = function () {
        this._token = '';
        this.clearLocalStorage();
    };
    /**
     * Get the user's primary role
     * @returns The user's primary role
     * @async
     */
    AuthenticationService.prototype.getPrimaryUserRole = function () {
        var userRoles = this.getUserRoles();
        if (userRoles.find(function (role) { return role === 'admin'; })) {
            return 'admin';
        }
        if (userRoles.find(function (role) { return role === 'user'; })) {
            return 'user';
        }
        return userRoles[0];
    };
    /**
     * Get the JWT token expiration date
     * @returns The date the token expires
     */
    AuthenticationService.prototype.getTokenExpirationDate = function () {
        var expirationDate = this.jwtHelper.getTokenExpirationDate(this.token);
        return expirationDate;
    };
    /**
     * Get the logged in user's ID
     * @returns The user's ID
     */
    AuthenticationService.prototype.getUserId = function () {
        if (this.isAuthenticated() === false) {
            return null;
        }
        var tokenPayload = this.jwtHelper.decodeToken(this.token);
        return tokenPayload.userId;
    };
    /**
     * Get the user's roles
     * @returns An array of the user's roles
     */
    AuthenticationService.prototype.getUserRoles = function () {
        if (this.isAuthenticated() === false) {
            return [];
        }
        var tokenPayload = this.jwtHelper.decodeToken(this.token);
        return tokenPayload.roles;
    };
    /**
     * Determine if the user is authenticated
     * @returns True if the user is authenticated
     */
    AuthenticationService.prototype.isAuthenticated = function () {
        if (!this.token) {
            return false;
        }
        if (this.jwtHelper.isTokenExpired(this.token)) {
            this.clearLocalStorage();
            return false;
        }
        return true;
    };
    /**
     * Log in a user
     * @param loginRequest - The login request object
     * @returns True if the login succeeded
     * @async
     */
    AuthenticationService.prototype.loginUser = function (loginRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var authenticationDetails;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authenticationDataService.authenticate(loginRequest)];
                    case 1:
                        authenticationDetails = _a.sent();
                        if (authenticationDetails.token && authenticationDetails.token.length > 0) {
                            this.token = authenticationDetails.token;
                        }
                        else {
                            this.clearToken();
                        }
                        return [2 /*return*/, authenticationDetails];
                }
            });
        });
    };
    /**
     * Log out a user
     */
    AuthenticationService.prototype.logoutUser = function () {
        this.clearToken();
    };
    /**
     * Register a new user
     * @param newUserRequest - The new user request
     * @param secure - An enum indicating whether the endpoing is secure
     */
    AuthenticationService.prototype.registerUser = function (newUserRequest, secure) {
        if (secure === void 0) { secure = Secure.false; }
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authenticationDataService.register(newUserRequest, secure)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    /**
     * Set the JWT token
     * @param token - The JWT token
     */
    AuthenticationService.prototype.setToken = function (token) {
        this.setLocalStorage(token);
        this._token = token;
    };
    // **********************
    // * Private methods
    // **********************
    /**
     * Remove the JWT token from local storage
     */
    AuthenticationService.prototype.clearLocalStorage = function () {
        localStorage.removeItem(this.config.jwtTokenName);
    };
    /**
     * Get the JWT token from local storage
     * @returns The JWT token
     */
    AuthenticationService.prototype.getTokenFromLocalStorage = function () {
        var token = localStorage.getItem(this.config.jwtTokenName);
        if (!token) {
            return '';
        }
        return token;
    };
    /**
     * Save the JWT token to local storage
     * @param token - The JWT token
     */
    AuthenticationService.prototype.setLocalStorage = function (token) {
        localStorage.setItem(this.config.jwtTokenName, token);
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [LeathermanAppConfigInjectionToken,] }] },
        { type: AuthenticationDataService }
    ]; };
    AuthenticationService.ɵprov = ɵɵdefineInjectable({ factory: function AuthenticationService_Factory() { return new AuthenticationService(ɵɵinject(LeathermanAppConfigInjectionToken), ɵɵinject(AuthenticationDataService)); }, token: AuthenticationService, providedIn: "root" });
    AuthenticationService = __decorate([ __param(0, Inject(LeathermanAppConfigInjectionToken))
    ], AuthenticationService);
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(ɵngcc0.ɵɵinject(LeathermanAppConfigInjectionToken), ɵngcc0.ɵɵinject(AuthenticationDataService)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AuthenticationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [LeathermanAppConfigInjectionToken]
            }] }, { type: AuthenticationDataService }]; }, null); })();
    return AuthenticationService;
}());

/**
 * A service used to limit access to a route to administrators
 */
var AdminAuthGuardService = /** @class */ (function () {
    /**
     * Constructor
     * @param authenticationService - A reference to the authentication service
     * @param router - A reference to the router
     */
    function AdminAuthGuardService(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    /**
     * Determine whether a route can be activated
     * @param route - The activated route snapshot
     * @param state - The router state snapshot
     * @returns An observable boolean or a promise of a boolean
     */
    AdminAuthGuardService.prototype.canActivate = function (route, state) {
        var isAuthenticated = this.authenticationService.isAuthenticated();
        if (isAuthenticated) {
            var userRole = this.authenticationService.getPrimaryUserRole();
            if (userRole === 'admin') {
                return true;
            }
        }
        this.router.navigate(['/admin/login']);
        return false;
    };
    AdminAuthGuardService.ctorParameters = function () { return [
        { type: AuthenticationService },
        { type: Router }
    ]; };
    AdminAuthGuardService.ɵprov = ɵɵdefineInjectable({ factory: function AdminAuthGuardService_Factory() { return new AdminAuthGuardService(ɵɵinject(AuthenticationService), ɵɵinject(Router)); }, token: AdminAuthGuardService, providedIn: "root" });
AdminAuthGuardService.ɵfac = function AdminAuthGuardService_Factory(t) { return new (t || AdminAuthGuardService)(ɵngcc0.ɵɵinject(AuthenticationService), ɵngcc0.ɵɵinject(ɵngcc3.Router)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(AdminAuthGuardService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: AuthenticationService }, { type: ɵngcc3.Router }]; }, null); })();
    return AdminAuthGuardService;
}());

/**
 * A service used to limit access to a route to registered users
 */
var UserAuthGuardService = /** @class */ (function () {
    /**
     * Constructor
     * @param authenticationService - A reference to the authentication service
     * @param router - A reference to the router
     */
    function UserAuthGuardService(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    /**
     * Determine whether a route can be activated
     * @param route - The activated route snapshot
     * @param state - The router state snapshot
     * @returns An observable boolean or a promise of a boolean
     */
    UserAuthGuardService.prototype.canActivate = function (route, state) {
        if (this.authenticationService.isAuthenticated()) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    UserAuthGuardService.ctorParameters = function () { return [
        { type: AuthenticationService },
        { type: Router }
    ]; };
    UserAuthGuardService.ɵprov = ɵɵdefineInjectable({ factory: function UserAuthGuardService_Factory() { return new UserAuthGuardService(ɵɵinject(AuthenticationService), ɵɵinject(Router)); }, token: UserAuthGuardService, providedIn: "root" });
UserAuthGuardService.ɵfac = function UserAuthGuardService_Factory(t) { return new (t || UserAuthGuardService)(ɵngcc0.ɵɵinject(AuthenticationService), ɵngcc0.ɵɵinject(ɵngcc3.Router)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(UserAuthGuardService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: AuthenticationService }, { type: ɵngcc3.Router }]; }, null); })();
    return UserAuthGuardService;
}());

/**
 * A base UI service for components. This service allows sub-components to communicate the components
 * without maintaining a direct reference.
 */
var BaseComponentUIService = /** @class */ (function () {
    function BaseComponentUIService() {
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
    BaseComponentUIService.prototype.cloneRequest = function (id) {
        this.cloneRequestSubject$.next(id);
    };
    /**
     * Broadcast a delete request
     * @param id - The ID of the object associated with the request
     */
    BaseComponentUIService.prototype.deleteRequest = function (id) {
        this.deleteRequestSubject$.next(id);
    };
    /**
     * Broadcast an edit request
     * @param id - The ID of the object associated with the request
     */
    BaseComponentUIService.prototype.editRequest = function (id) {
        this.editRequestSubject$.next(id);
    };
    /**
     * Subscribe to an RXJS subject
     * @param subjectName - The name of the subject to subscribe to
     * @param callback - The method to callback
     */
    BaseComponentUIService.prototype.subscribe = function (subjectName, callback) {
        this[subjectName].subscribe(callback);
    };
    BaseComponentUIService.ɵprov = ɵɵdefineInjectable({ factory: function BaseComponentUIService_Factory() { return new BaseComponentUIService(); }, token: BaseComponentUIService, providedIn: "root" });
BaseComponentUIService.ɵfac = function BaseComponentUIService_Factory(t) { return new (t || BaseComponentUIService)(); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BaseComponentUIService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
    return BaseComponentUIService;
}());

/**
 * The base service
 */
var BaseService = /** @class */ (function () {
    function BaseService() {
    }
    return BaseService;
}());

/**
 * A custom error handler service for unhandled exceptions
 */
var CustomErrorHandlerService = /** @class */ (function (_super) {
    __extends(CustomErrorHandlerService, _super);
    /**
     * Constructor
     * @param config - The app config object
     * @param errorDialogService - A reference to the error dialog service
     * @param router - A reference to the router
     * @param httpClient - A reference to the HTTP client
     */
    function CustomErrorHandlerService(config, errorDialogService, router, httpClient) {
        var _this = _super.call(this, config, errorDialogService, router, httpClient) || this;
        _this.baseEndpoint = 'error/client';
        return _this;
    }
    /**
     * Delete a client error from the database
     * @param clientErrorId - The ID of the client error to delete
     * @returns True if the delete suceeded
     * @async
     */
    CustomErrorHandlerService.prototype.deleteClientError = function (clientErrorId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this._delete(clientErrorId, Secure.true).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.handlePromiseError('CustomErrorHandlerService', 'deleteClientError', err)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Get the details of a client error record
     * @param clientErrorId - The ID of the client error to get
     * @returns A client error object
     * @async
     */
    CustomErrorHandlerService.prototype.getClientError = function (clientErrorId) {
        return __awaiter(this, void 0, void 0, function () {
            var clientError;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._get(clientErrorId, Secure.true).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.handlePromiseError('CustomErrorHandlerService', 'getClientError', err)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1:
                        clientError = _a.sent();
                        return [2 /*return*/, clientError];
                }
            });
        });
    };
    /**
     * Handle a standard error
     * @param error - The error object
     * @async
     */
    CustomErrorHandlerService.prototype.handleError = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var errorReport, clientErrorReport;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Default error handler caught an error');
                        console.log(error);
                        if (!(this.config.production === false)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.errorDialogService.openErrorDialog('Unexpected Error', 'An unexpected error occurred: ' + error.message)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        errorReport = new ClientErrorReport('unknown', error.message, error.status, error.statusText, error.url);
                        return [4 /*yield*/, this.reportClientError(errorReport)];
                    case 3:
                        clientErrorReport = _a.sent();
                        document.location.href =
                            this.config.errorRoute + '?errorReportId=' + clientErrorReport._id;
                        return [2 /*return*/, null];
                }
            });
        });
    };
    /**
     * Report a client error
     * @param errorReport - The client error object
     * @returns The client error report
     * @async
     */
    CustomErrorHandlerService.prototype.reportClientError = function (errorReport) {
        return __awaiter(this, void 0, void 0, function () {
            var error;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._post(errorReport, Secure.true, false).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.handlePromiseError('CustomErrorHandlerService', 'reportHttpError', err)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1:
                        error = _a.sent();
                        return [2 /*return*/, error];
                }
            });
        });
    };
    CustomErrorHandlerService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [LeathermanAppConfigInjectionToken,] }] },
        { type: ErrorDialogService, decorators: [{ type: Inject, args: [ErrorDialogServiceInjectionToken,] }] },
        { type: Router },
        { type: HttpClient }
    ]; };
    CustomErrorHandlerService.ɵprov = ɵɵdefineInjectable({ factory: function CustomErrorHandlerService_Factory() { return new CustomErrorHandlerService(ɵɵinject(LeathermanAppConfigInjectionToken), ɵɵinject(ErrorDialogServiceInjectionToken), ɵɵinject(Router), ɵɵinject(HttpClient)); }, token: CustomErrorHandlerService, providedIn: "root" });
    CustomErrorHandlerService = __decorate([ __param(0, Inject(LeathermanAppConfigInjectionToken)),
        __param(1, Inject(ErrorDialogServiceInjectionToken))
    ], CustomErrorHandlerService);
CustomErrorHandlerService.ɵfac = function CustomErrorHandlerService_Factory(t) { return new (t || CustomErrorHandlerService)(ɵngcc0.ɵɵinject(LeathermanAppConfigInjectionToken), ɵngcc0.ɵɵinject(ErrorDialogServiceInjectionToken), ɵngcc0.ɵɵinject(ɵngcc3.Router), ɵngcc0.ɵɵinject(ɵngcc4.HttpClient)); };
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
    return CustomErrorHandlerService;
}(BaseDataService));

/**
 * A service to parse route parts
 */
var RoutePartsService = /** @class */ (function () {
    /**
     * Constructor
     * @param router - A reference to the router
     * @param activatedRoute - A reference to the activated route
     */
    function RoutePartsService(router, activatedRoute) {
        var _this = this;
        this.router = router;
        /** An event emitter that will trigger when a route changes */
        this.routeChanged = new EventEmitter();
        var me = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof NavigationEnd) {
                var state = _this.router.routerState;
                var snapshot = state.snapshot;
                var root = snapshot.root;
                var routeParts = _this.generateRouteParts(root);
                me.routeParts = _this.formatRouteParts(routeParts);
                _this.routeChanged.emit(me.routeParts);
            }
        });
    }
    /**
     * Generate the route parts
     * @param snapshot - The activated route snapshot
     * @returns An array of route parts
     */
    RoutePartsService.prototype.generateRouteParts = function (snapshot) {
        var routeParts = [];
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
    };
    /**
     * Format the route parts
     * @param routeParts - An array of route parts
     * @returns An array of formatted route parts
     */
    RoutePartsService.prototype.formatRouteParts = function (routeParts) {
        var e_1, _a;
        // routeParts.push({
        //     title: 'Home',
        //     breadcrumb: 'Home',
        //     url: '/',
        //     urlSegments: [],
        //     params: {},
        // });
        routeParts.reverse();
        var fullUrl = '';
        try {
            for (var routeParts_1 = __values(routeParts), routeParts_1_1 = routeParts_1.next(); !routeParts_1_1.done; routeParts_1_1 = routeParts_1.next()) {
                var routePart = routeParts_1_1.value;
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
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (routeParts_1_1 && !routeParts_1_1.done && (_a = routeParts_1.return)) _a.call(routeParts_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return routeParts;
    };
    RoutePartsService.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute }
    ]; };
    RoutePartsService.ɵprov = ɵɵdefineInjectable({ factory: function RoutePartsService_Factory() { return new RoutePartsService(ɵɵinject(Router), ɵɵinject(ActivatedRoute)); }, token: RoutePartsService, providedIn: "root" });
    __decorate([
        Output()
    ], RoutePartsService.prototype, "routeChanged", void 0);
RoutePartsService.ɵfac = function RoutePartsService_Factory(t) { return new (t || RoutePartsService)(ɵngcc0.ɵɵdirectiveInject(ɵngcc3.Router), ɵngcc0.ɵɵdirectiveInject(ɵngcc3.ActivatedRoute)); };
RoutePartsService.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: RoutePartsService, outputs: { routeChanged: "routeChanged" } });
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
    return RoutePartsService;
}());

/**
 * The base user data service
 */
var BaseUserDataService = /** @class */ (function (_super) {
    __extends(BaseUserDataService, _super);
    /**
     * Constructor
     * @param config - The app config object
     * @param errorDialogService - A reference to the error dialog service
     * @param router - A reference to the router
     * @param httpClient - A reference to the HTTP client service
     */
    function BaseUserDataService(config, errorDialogService, router, httpClient) {
        var _this = _super.call(this, config, errorDialogService, router, httpClient) || this;
        _this.config = config;
        _this.baseEndpoint = config.userBaseEndpoint;
        _this.type = BaseUser;
        return _this;
    }
    /**
     * Add a role to a user
     * @param userId - The user's ID
     * @param role - The role to add to the user
     * @returns The updated user
     * @async
     */
    BaseUserDataService.prototype._addUserRole = function (userId, role) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            var _this = this;
            return __generator(this, function (_a) {
                options = new Options();
                options.secure = Secure.true;
                options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, userId, 'addrole');
                options.parameters.add('role', role);
                return [2 /*return*/, this._putWithOptions(options).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'addUserRole', err)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Delete a user
     * @param userId - The ID of the user to delete
     * @returns True if the delete succeeded
     * @async
     */
    BaseUserDataService.prototype._deleteUser = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this._delete(userId, Secure.true).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'deleteUser', err)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Get all admin users
     * @returns An array of admin users
     * @asyncs
     */
    BaseUserDataService.prototype._getAdminUsers = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var getManyOptions, adminUsers;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getManyOptions = new Options();
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
                        return [4 /*yield*/, this._getManyWithOptions(getManyOptions).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'getAdminUsers', err)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); })];
                    case 1:
                        adminUsers = _a.sent();
                        return [2 /*return*/, adminUsers];
                }
            });
        });
    };
    /**
     * Get a user
     * @param id - The ID of the user to get
     * @returns A user object
     * @async
     */
    BaseUserDataService.prototype._getUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var options, user;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = new Options();
                        options.secure = Secure.true;
                        options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, id);
                        return [4 /*yield*/, this._getWithOptions(options).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'getUser', err)];
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
    // getBasicUsers
    BaseUserDataService.prototype._getBasicUsers = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var getManyOptions, assessmentUsers;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getManyOptions = new Options();
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
                        return [4 /*yield*/, this._getManyWithOptions(getManyOptions).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'getAssessmentUsers', err)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); })];
                    case 1:
                        assessmentUsers = _a.sent();
                        return [2 /*return*/, assessmentUsers];
                }
            });
        });
    };
    /**
     * Get all users
     * @returns An array of users
     * @async
     */
    BaseUserDataService.prototype._getUsers = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var getManyOptions, assessmentUsers;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getManyOptions = new Options();
                        getManyOptions.secure = Secure.true;
                        getManyOptions.url = UrlUtil.join(this.apiRoot, this.baseEndpoint);
                        if (options) {
                            getManyOptions.parameters.add('skip', options.skip.toString());
                            getManyOptions.parameters.add('trace', options.take.toString());
                            if (options.sort.length > 0) {
                                getManyOptions.parameters.add('sort', options.sort);
                            }
                        }
                        return [4 /*yield*/, this._getManyWithOptions(getManyOptions).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'getUsers', err)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); })];
                    case 1:
                        assessmentUsers = _a.sent();
                        return [2 /*return*/, assessmentUsers];
                }
            });
        });
    };
    /**
     * Remove a role from a user
     * @param userId - The ID of the user
     * @param role - The role to remove from the user
     */
    BaseUserDataService.prototype._removeUserRole = function (userId, role) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            var _this = this;
            return __generator(this, function (_a) {
                options = new Options();
                options.secure = Secure.true;
                options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, userId, 'remove-role');
                options.parameters.add('role', role);
                return [2 /*return*/, this._putWithOptions(options).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'removeUserRole', err)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Request a password reset
     * @param passwordResetRequest - A password reset request object
     * @returns True if the request succeeded
     * @async
     */
    BaseUserDataService.prototype._requestPasswordReset = function (passwordResetRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = new Options();
                        options.secure = Secure.false;
                        options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'request-password-reset');
                        options.objectType = BasePasswordResetRequest;
                        return [4 /*yield*/, this._postWithOptions(passwordResetRequest, options).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'requestPasswordReset', err)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    /**
     * Request a password reset token. This method is only used for testing.
     * @param passwordResetRequest - A password reset request object
     * @returns A password reset token
     * @async
     */
    BaseUserDataService.prototype._requestPasswordResetToken = function (passwordResetRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var options, passwordResetToken;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = new Options();
                        options.secure = Secure.false;
                        options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'request-password-reset-token');
                        options.objectType = BasePasswordResetRequest;
                        return [4 /*yield*/, this._postWithOptions(passwordResetRequest, options).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'requestPasswordResetToken', err)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); })];
                    case 1:
                        passwordResetToken = _a.sent();
                        return [2 /*return*/, passwordResetToken];
                }
            });
        });
    };
    /**
     * Resend Verification email
     * @param verifyEmail - A verification email
     * @returns True if the verification email is sent
     */
    BaseUserDataService.prototype._resendVerificationEmail = function (verificationEmail) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            var _this = this;
            return __generator(this, function (_a) {
                options = new Options();
                options.secure = Secure.false;
                options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'resend-verification-email');
                options.parameters.add('email', verificationEmail);
                return [2 /*return*/, this._getWithOptions(options).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'resendVerificationEmail', err)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Reset a password
     * @param passwordReset - A password reset object
     * @returns True if the password was successfully reset
     * @async
     */
    BaseUserDataService.prototype._resetPassword = function (passwordReset) {
        return __awaiter(this, void 0, void 0, function () {
            var options, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = new Options();
                        options.secure = Secure.false;
                        options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'reset-password');
                        return [4 /*yield*/, this._postWithOptions(passwordReset, options)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Update a user
     * @param user - The user to update
     * @returns The updated user
     * @async
     */
    BaseUserDataService.prototype._updateUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this._put(user, Secure.true).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'updateUser', err)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Validate a password reset token
     * @param passwordResetToken - The password reset token to validate
     * @returns A validate password reset token response
     * @async
     */
    BaseUserDataService.prototype._validatePasswordResetToken = function (passwordResetToken) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            var _this = this;
            return __generator(this, function (_a) {
                options = new Options();
                options.secure = Secure.false;
                options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'validate-password-reset-token');
                options.parameters.add('token', passwordResetToken);
                return [2 /*return*/, this._getWithOptions(options).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'validatePasswordResetToken', err)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Validate an email address
     * @param email - The email address to validate
     * @returns True if the email address is not currently in the user table
     * @async
     */
    BaseUserDataService.prototype._validateEmail = function (email) {
        return this.httpClient.get(UrlUtil.join(this.apiRoot, this.baseEndpoint, 'validate-email' + '?email=' + email), {
            headers: this.noTokenHeader
        });
    };
    BaseUserDataService.prototype._validateVerifyEmailToken = function (verifyEmailToken) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            var _this = this;
            return __generator(this, function (_a) {
                options = new Options();
                options.secure = Secure.false;
                options.url = UrlUtil.join(this.apiRoot, this.baseEndpoint, 'validate-verify-email-token');
                options.parameters.add('token', verifyEmailToken);
                return [2 /*return*/, this._getWithOptions(options).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.handlePromiseError('UserDataService', 'validateVerifyEmailToken', err)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            });
        });
    };
    BaseUserDataService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [LeathermanAppConfigInjectionToken,] }] },
        { type: ErrorDialogService, decorators: [{ type: Inject, args: [ErrorDialogServiceInjectionToken,] }] },
        { type: Router },
        { type: HttpClient }
    ]; };
    BaseUserDataService.ɵprov = ɵɵdefineInjectable({ factory: function BaseUserDataService_Factory() { return new BaseUserDataService(ɵɵinject(LeathermanAppConfigInjectionToken), ɵɵinject(ErrorDialogServiceInjectionToken), ɵɵinject(Router), ɵɵinject(HttpClient)); }, token: BaseUserDataService, providedIn: "root" });
    BaseUserDataService = __decorate([ __param(0, Inject(LeathermanAppConfigInjectionToken)),
        __param(1, Inject(ErrorDialogServiceInjectionToken))
    ], BaseUserDataService);
BaseUserDataService.ɵfac = function BaseUserDataService_Factory(t) { return new (t || BaseUserDataService)(ɵngcc0.ɵɵinject(LeathermanAppConfigInjectionToken), ɵngcc0.ɵɵinject(ErrorDialogServiceInjectionToken), ɵngcc0.ɵɵinject(ɵngcc3.Router), ɵngcc0.ɵɵinject(ɵngcc4.HttpClient)); };
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
    return BaseUserDataService;
}(BaseDataService));

/**
 * A class to store a password reset
 */
var PasswordReset = /** @class */ (function () {
    /**
     * @param token - The password reset token
     * @param userId - The ID of the user requesting the password reset
     * @param newPassword - The user's new password
     */
    function PasswordReset(token, userId, newPassword) {
        this.token = token;
        this.userId = userId;
        this.newPassword = newPassword;
    }
    return PasswordReset;
}());

/**
 * The base user service
 */
var BaseUserService = /** @class */ (function (_super) {
    __extends(BaseUserService, _super);
    /**
     * Constructor
     * @param authenticationService - A reference to the authentication service
     * @param dataService - A reference to the user data service
     * @param confirmDialogService - A reference to the confirm dialog service
     * @param router - A reference to the router
     */
    function BaseUserService(authenticationService, dataService, confirmDialogService, router) {
        var _this = _super.call(this) || this;
        _this.authenticationService = authenticationService;
        _this.dataService = dataService;
        _this.confirmDialogService = confirmDialogService;
        _this.router = router;
        return _this;
    }
    Object.defineProperty(BaseUserService.prototype, "userId", {
        // **********************
        // * Public properties
        // **********************
        /** Get accessor for the user ID */
        get: function () {
            if (!this._userId) {
                this._userId = this.authenticationService.getUserId();
            }
            return this._userId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseUserService.prototype, "userRole", {
        /** Get accessor for user role */
        get: function () {
            if (!this._primaryUserRole) {
                this._primaryUserRole = this.authenticationService.getPrimaryUserRole();
            }
            return this._primaryUserRole;
        },
        enumerable: true,
        configurable: true
    });
    // **********************
    // * Public methods
    // **********************
    /**
     * Delete a user
     * @param userId - The ID of the user to delete
     * @returns True if the delete succeeded
     * @async
     */
    BaseUserService.prototype._deleteUser = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var confirmStatus, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.confirmDialogService.openConfirmDialog('Delete User', 'Do you want to delete the selected user? This action cannot be undone.')];
                    case 1:
                        confirmStatus = _a.sent();
                        if (confirmStatus.button === DialogButton.Cancel) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.dataService._deleteUser(userId)];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Get all admin users
     * @returns An array of admin users
     * @async
     */
    BaseUserService.prototype._getAdminUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService._getAdminUsers()];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users];
                }
            });
        });
    };
    /**
     * Get all basic users
     * @returns An array of basic (non-admin) users
     * @async
     */
    BaseUserService.prototype._getBasicUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService._getBasicUsers()];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users];
                }
            });
        });
    };
    /**
     * Get the logged in user
     * @returns The user object
     * @async
     */
    BaseUserService.prototype._getCurrentUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var id, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.userId) {
                            return [2 /*return*/, null];
                        }
                        id = this.userId;
                        return [4 /*yield*/, this.dataService._getUser(id)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    /**
     * Get all users
     * @returns An array of users
     * @async
     */
    BaseUserService.prototype._getUsers = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService._getUsers(options)];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users];
                }
            });
        });
    };
    /**
     * Get the user's primary role
     * @returns The user's primary role
     * @async
     */
    BaseUserService.prototype._getPrimaryUserRole = function () {
        return this.authenticationService.getPrimaryUserRole();
    };
    /**
     * Get the user
     * @param userId - ID of the user to get
     * @returns The user object
     * @async
     */
    BaseUserService.prototype._getUser = function (userID) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService._getUser(userID)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    /**
     * Login a user
     * @param user - The login request
     * @returns True if the login succeeded
     * @async
     */
    BaseUserService.prototype._loginUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var authenticationDetails;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authenticationService.authenticate(user)];
                    case 1:
                        authenticationDetails = _a.sent();
                        if (authenticationDetails.authenticated === true) {
                            this._userId = this.authenticationService.getUserId();
                            this._primaryUserRole = this.authenticationService.getPrimaryUserRole();
                        }
                        return [2 /*return*/, authenticationDetails];
                }
            });
        });
    };
    /**
     * Logout the user
     * @param redirectRoute - The route to redirect to after logging out
     */
    BaseUserService.prototype._logoutUser = function (redirectRoute) {
        if (redirectRoute === void 0) { redirectRoute = ''; }
        this._userId = null;
        this.authenticationService.logoutUser();
        if (redirectRoute) {
            this.router.navigate([redirectRoute]);
        }
    };
    /**
     * Register a new user
     * @param newUser - The new user request object
     * @param secure - An enum indicating whether the API endpoint is secure
     * @returs The new user
     * @async
     */
    BaseUserService.prototype._registerUser = function (newUser, secure) {
        if (secure === void 0) { secure = Secure.false; }
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authenticationService.registerUser(newUser, secure)];
                    case 1:
                        user = _a.sent();
                        // if (user) {
                        //   this._userId = this.authenticationService.getUserId();
                        //   this._primaryUserRole = this.authenticationService.getPrimaryUserRole();
                        // }
                        return [2 /*return*/, user];
                }
            });
        });
    };
    /**
     * Request a password reset
     * @param email - The email address of the user requesting the password reset
     * @returns true if the request succeeded
     * @async
     */
    BaseUserService.prototype._requestPasswordReset = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var passwordResetRequest, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        passwordResetRequest = new BasePasswordResetRequest(email);
                        return [4 /*yield*/, this.dataService._requestPasswordReset(passwordResetRequest)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Request a password reset token. This method is only used for testing.
     * @param email - The email address of the user requesting the password reset
     * @returns The password reset token
     * @async
     */
    BaseUserService.prototype._requestPasswordResetToken = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var passwordResetRequest, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        passwordResetRequest = new BasePasswordResetRequest(email);
                        return [4 /*yield*/, this.dataService._requestPasswordResetToken(passwordResetRequest)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    BaseUserService.prototype._resendVerificationEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService._resendVerificationEmail(email)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Reset a user password
     * @param token - The password reset token
     * @param userId - The ID of the user
     * @param newPassword - The user's new password
     * @returns True if the password reset succeeded
     * @async
     */
    BaseUserService.prototype._resetPassword = function (token, userId, newPassword) {
        return __awaiter(this, void 0, void 0, function () {
            var resetRequest, result;
            return __generator(this, function (_a) {
                resetRequest = new PasswordReset(token, userId, newPassword);
                result = this.dataService._resetPassword(resetRequest);
                return [2 /*return*/, result];
            });
        });
    };
    /**
     * Update a user
     * @param user - The user to update
     * @returns The updated user
     * @async
     */
    BaseUserService.prototype._updateUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService._updateUser(user)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Validate a password reset token
     * @param passwordResetToken - The password reset token
     * @returns A validate password reset token response object
     * @async
     */
    BaseUserService.prototype._validatePasswordResetToken = function (passwordResetToken) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService._validatePasswordResetToken(passwordResetToken)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * Validate a verify email token
     * @param verifyEmailToken - The verify email token
     * @returns A validate verify email token response object
     */
    BaseUserService.prototype._validateVerifyEmailToken = function (verifyEmailToken) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dataService._validateVerifyEmailToken(verifyEmailToken)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    BaseUserService.ctorParameters = function () { return [
        { type: AuthenticationService },
        { type: BaseUserDataService },
        { type: ConfirmDialogService },
        { type: Router }
    ]; };
    BaseUserService.ɵprov = ɵɵdefineInjectable({ factory: function BaseUserService_Factory() { return new BaseUserService(ɵɵinject(AuthenticationService), ɵɵinject(BaseUserDataService), ɵɵinject(ConfirmDialogService), ɵɵinject(Router)); }, token: BaseUserService, providedIn: "root" });
BaseUserService.ɵfac = function BaseUserService_Factory(t) { return new (t || BaseUserService)(ɵngcc0.ɵɵinject(AuthenticationService), ɵngcc0.ɵɵinject(BaseUserDataService), ɵngcc0.ɵɵinject(ConfirmDialogService), ɵngcc0.ɵɵinject(ɵngcc3.Router)); };
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(BaseUserService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: AuthenticationService }, { type: BaseUserDataService }, { type: ConfirmDialogService }, { type: ɵngcc3.Router }]; }, null); })();
    return BaseUserService;
}(BaseService));

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
var FilterOptions = /** @class */ (function () {
    /**
     * Constructor
     * @param fitlerCase - Enum indicating the filter case option
     * @param fitlerScope - Enum indicating the filter scope option
     */
    function FilterOptions(fitlerCase, fitlerScope) {
        if (fitlerCase === void 0) { fitlerCase = FilterCase.CaseInsensitive; }
        if (fitlerScope === void 0) { fitlerScope = FilterScope.Contains; }
        this.fitlerCase = fitlerCase;
        this.fitlerScope = fitlerScope;
    }
    return FilterOptions;
}());

/**
 * A class to store sort options
 */
var SortOption = /** @class */ (function () {
    /**
     * Constructor
     * @param key - The object property to use for sorting
     * @param order - The sort order
     */
    function SortOption(key, order) {
        this.key = key;
        this.order = order;
    }
    return SortOption;
}());

/**
 * A regex object to validate strong passwords
 */
var STRONG_PASSWORD_REGEX = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);

/**
 * A regex object to validate ISO dates
 */
// tslint:disable-next-line:max-line-length
var ISO_DATE_REGEX = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;

/**
 * A regex object to validate latitudes
 */
var LATITUDE_REGEX = /^[-+]?(?:[1-8]?\d(?:\.\d+)?|90(\.0+)?)$/;

/**
 * A regex object to validate longitudes
 */
var LONGITUDE_REGEX = /^[-+]?(?:180(?:\.0+)?|(?:(?:1[0-7]\d)|(?:[1-9]?\d))(?:\.\d+)?)$/;

/**
 * A regex object to validate phone numbers
 */
var PHONE_NUMBER_REGEX = /^(?:[\+0]?\d[\s-]?)?(?:(?:\(\d{3}\)[\s-]?)|(?:\d{3})[\s-]?)?\d{3}[\s\-]?\d{4}$/;
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
var URL_REGEX = /^(?:http(?:s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(?:\)\*\+,;=.]+$/i;

/**
 * A regex object to validate zip codes
 */
var ZIP_CODE_REGEX = /^\d{5}(?:[-\s]\d{4})?$/;

/**
 * A regular expression utility
 */
var RegexUtil = /** @class */ (function () {
    function RegexUtil() {
    }
    /**
     * Determine if the passed string is an ISO date
     * @param text - The text to test
     * @returns True if the passed text is an ISO date
     */
    RegexUtil.isIsoDate = function (text) {
        if (ISO_DATE_REGEX.test(text) === true) {
            return true;
        }
        return false;
    };
    /**
     * Determine if the passed string is a latitude
     * @param text - The text to test
     * @returns True if the passed text is a latitude
     */
    RegexUtil.isLatitude = function (text) {
        if (LATITUDE_REGEX.test(text) === true) {
            return true;
        }
        return false;
    };
    /**
     * Determine if the passed string is a longitude
     * @param text - The text to test
     * @returns True if the passed text is a longitude
     */
    RegexUtil.isLongitude = function (text) {
        if (LONGITUDE_REGEX.test(text) === true) {
            return true;
        }
        return false;
    };
    /**
     * Determine if the passed string is a phone number
     * @param text - The text to test
     * @returns True if the passed text is a phone number
     */
    RegexUtil.isPhoneNumber = function (text) {
        if (PHONE_NUMBER_REGEX.test(text) === true) {
            return true;
        }
        return false;
    };
    /**
     * Determine if the passed string is a strong password
     * @param text - The text to test
     * @returns True if the passed text is a strong password
     */
    RegexUtil.isStrongPassword = function (text) {
        if (STRONG_PASSWORD_REGEX.test(text) === true) {
            return true;
        }
        return false;
    };
    /**
     * Determine if the passed text is a URL
     * @param text - The text to test
     * @returns True if the passed text is a URL
     */
    RegexUtil.isUrl = function (text) {
        if (URL_REGEX.test(text) === true) {
            return true;
        }
        return false;
    };
    /**
     * Determine if the passed text is a zip code
     * @param text - The text to test
     * @returns True if the passed text is a zip code
     */
    RegexUtil.isZipCode = function (text) {
        if (ZIP_CODE_REGEX.test(text) === true) {
            return true;
        }
        return false;
    };
    return RegexUtil;
}());

/**
 * A utility for sorting and filtering arrays
 */
var CollectionUtil = /** @class */ (function () {
    function CollectionUtil() {
    }
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
    CollectionUtil.append = function (collection, item, unique, uniqueMode) {
        if (unique === void 0) { unique = Unique.True; }
        if (uniqueMode === void 0) { uniqueMode = UniqueMode.Id; }
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
    };
    /**
     * Fitler an array of objects
     * @param collection - The array of objects to filter
     * @param filter - The filter string
     * @param filterColumns - The object properties to use when filtering
     * @param filterOptions - The filter options
     * @returns An array of filtered objects
     */
    CollectionUtil.filter = function (collection, filter, filterColumns, filterOptions) {
        var _this = this;
        // If the filter string or collection are not valid then just return the collection unchanged
        if (!filter || !collection) {
            return collection;
        }
        if (!filterOptions) {
            filterOptions = new FilterOptions();
        }
        // Filter the collection using a lambda expression
        var filteredData = collection.filter(function (o) {
            var e_1, _a;
            try {
                // For each of the filter columns
                for (var filterColumns_1 = __values(filterColumns), filterColumns_1_1 = filterColumns_1.next(); !filterColumns_1_1.done; filterColumns_1_1 = filterColumns_1.next()) {
                    var filterColumn = filterColumns_1_1.value;
                    // Get the text of the current column
                    var text = o[filterColumn];
                    // Create a regular expression for the passed filter string and filter options
                    var regExp = _this.getFilterRegex(filter, filterOptions);
                    // If the contents of the current column matches the filter string then
                    if (text.search(regExp) >= 0) {
                        // Return true (collection row is included in the filtered data)
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (filterColumns_1_1 && !filterColumns_1_1.done && (_a = filterColumns_1.return)) _a.call(filterColumns_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            // Return false (collection row is not included in the filtered data)
            return false;
        });
        // Return the filtered data
        return filteredData;
    };
    /**
     * Find an object in an array of objects by matching an object property
     * @param collection - The array of objects to search
     * @param property - The object property to search
     * @param value - The value to match
     * @returns The matching object
     */
    CollectionUtil.find = function (collection, property, value) {
        var object = collection.find(function (o) { return o[property] === value; });
        return object;
    };
    /**
     * Find an object in an array of objects by matching the object's ID
     * @param collection - The array of objects to search
     * @param id - The object ID to search for
     * @returns The matching object
     */
    CollectionUtil.findById = function (collection, id) {
        var object = collection.find(function (o) { return o._id === id; });
        return object;
    };
    /**
     * Get the index of an object in an array of objects
     * @param collection - The array of objects to search
     * @param item - The item to search for
     * @returns The index of the item in the array (zero-based)
     */
    CollectionUtil.findIndex = function (collection, item) {
        var index = collection.findIndex(function (o) { return o === item; });
        return index;
    };
    /**
     * Insert an object into an array of objects
     * @param collection - The array of objects into which the object will be inserted
     * @param item - The item to insert into the array
     * @param index - The desired location of the item in the array
     * @returns True if the insert succeeded
     */
    CollectionUtil.insert = function (collection, item, index) {
        if (index === void 0) { index = 0; }
        collection.splice(index, 0, item);
        return true;
    };
    /**
     * Sort an array of objects by mutliple keys. The method sorts the passed array in-place as opposed to
     * returning the sorted array.
     * @param collection - The array of objects to sort
     * @param sortOptions - The sort options
     */
    CollectionUtil.multiKeySort = function (collection) {
        var sortOptions = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sortOptions[_i - 1] = arguments[_i];
        }
        collection.sort(function (a, b) {
            var e_2, _a;
            try {
                for (var sortOptions_1 = __values(sortOptions), sortOptions_1_1 = sortOptions_1.next(); !sortOptions_1_1.done; sortOptions_1_1 = sortOptions_1.next()) {
                    var sortOption = sortOptions_1_1.value;
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
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (sortOptions_1_1 && !sortOptions_1_1.done && (_a = sortOptions_1.return)) _a.call(sortOptions_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return 0;
        });
    };
    /**
     * Remove an object from an array of objects by matching the object ID
     * @param collection - The array of objects from which to remove an object
     * @param item - The item to remove from the array
     * @returns The array of objects with the item removed
     */
    CollectionUtil.remove = function (collection, item) {
        var updatedCollection = collection.filter(function (o) { return o._id !== item._id; });
        return updatedCollection;
    };
    /**
     * Remove an object from an array of object by matching the passed object ID
     * @param collection - The array of objects from which to remove an object
     * @param ID - The ID of the item to remove from the array
     * @returns The array of objects with the item removed
     */
    CollectionUtil.removeById = function (collection, id) {
        var updatedCollection = collection.filter(function (o) { return o._id !== id; });
        return updatedCollection;
    };
    /**
     * Shuffly an array of objects
     * @param collection - The array of objects to shuffly
     * @returns The shuffled array of objects
     */
    CollectionUtil.shuffle = function (collection) {
        var currentIndex = collection.length;
        var temporaryValue;
        var randomIndex;
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
    };
    /**
     * Sort an array of objects by a single property. The method sorts the passed array in-place as opposed to
     * returning the sorted array.
     * @param collection - The array of objects to sort
     * @param key - The property to use for sorting
     * @param order - The sort order
     */
    CollectionUtil.sort = function (collection, key, order) {
        collection.sort(function (a, b) {
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
    };
    /**
     * Update an object in an array of objects. Use the object's ID to match objects.
     * @param collection - The array of objects that contains the object to update
     * @param item - The item to update
     * @param addIfMissing - Boolean indicating whether to add the item if it is not present in the array
     * @returns The array of objects with the updated item
     */
    CollectionUtil.update = function (collection, item, addIfMissing) {
        if (addIfMissing === void 0) { addIfMissing = false; }
        var index = collection.findIndex(function (o) { return o._id === item._id; });
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
    };
    // ********************
    // Private Static methods
    // ********************
    /**
     * Create a regular expression object that implements the passed filter options
     * @param filter - The filter text
     * @param filterOptions - The filter options
     * @returns A regular expression object
     */
    CollectionUtil.getFilterRegex = function (filter, filterOptions) {
        filter = this.escapeRegexCharacters(filter);
        var regexString;
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
        var regExp;
        if (filterOptions.fitlerCase === FilterCase.CaseSensitive) {
            regExp = new RegExp('.*' + regexString + '.*');
        }
        else {
            regExp = new RegExp('.*' + regexString + '.*', 'i');
        }
        return regExp;
    };
    /**
     * Determine whether an object exists in an array of objects by comparing the object properties
     * @param collection - The array of objects to search
     * @param item - The item to search for
     * @returns True if the object is unique
     */
    CollectionUtil.isUniqueByObject = function (collection, item) {
        var e_3, _a;
        try {
            for (var collection_1 = __values(collection), collection_1_1 = collection_1.next(); !collection_1_1.done; collection_1_1 = collection_1.next()) {
                var collectionItem = collection_1_1.value;
                if (isEqual(collectionItem, item)) {
                    return false;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (collection_1_1 && !collection_1_1.done && (_a = collection_1.return)) _a.call(collection_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return true;
    };
    /**
     * Determine whether an object exists in an array of objects by comparing the object IDs
     * @param collection - The array of objects to search
     * @param item - The item to search for
     * @returns True if the object is unique
     */
    CollectionUtil.isUniqueById = function (collection, item) {
        var matchingItem = collection.find(function (o) { return o._id === item._id; });
        if (matchingItem) {
            return false;
        }
        return true;
    };
    /**
     * Escape a regular expression string
     * @param regexString - The regex string to escape
     * @returns The escaped regular expression string
     */
    CollectionUtil.escapeRegexCharacters = function (regexString) {
        var escapedText = regexString.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        return escapedText;
    };
    return CollectionUtil;
}());

/**
 * A utility for copying objects
 */
var ObjectCopyUtil = /** @class */ (function () {
    function ObjectCopyUtil() {
    }
    // ********************
    // Static methods
    // ********************
    /**
     * Perform a default (deep) copy of the object
     * @param objectToCopy - The object to copy
     * @returns The copied object
     */
    ObjectCopyUtil.copy = function (objectToCopy) {
        return ObjectCopyUtil.deepCopy(objectToCopy);
    };
    /**
     * Perform a deep copy of the object
     * @param objectToCopy - The object to copy
     * @returns The copied object
     */
    ObjectCopyUtil.deepCopy = function (objectToCopy) {
        var cloneObj = cloneDeep(objectToCopy);
        return cloneObj;
    };
    /**
     * Perform a shallow copy of the object
     * @param objectToCopy - The object to copy
     * @returns The copied object
     */
    ObjectCopyUtil.shallowCopy = function (objectToCopy) {
        return __assign({}, objectToCopy);
    };
    /**
     * Perform a typed of the object. Copy the object and then apply the properties of the passed class.
     * @param objectToCopy - The object to copy
     * @param type - The prototype whose methods will be copied
     * @returns The copied object
     */
    ObjectCopyUtil.typedCopy = function (objectToCopy, type) {
        var cloneObj = this.deepCopy(objectToCopy);
        cloneObj = plainToClass(type, cloneObj);
        return cloneObj;
    };
    return ObjectCopyUtil;
}());

/**
 * A utility to combine the properties of multiple classes
 */
var MixinUtil = /** @class */ (function () {
    function MixinUtil() {
    }
    /**
     *
     * @param derivedCtor - The object to receive the new properties
     * @param baseCtors - The objects from which to copy properties
     */
    MixinUtil.ApplyMixins = function (derivedCtor, baseCtors) {
        baseCtors.forEach(function (baseCtor) {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });
    };
    return MixinUtil;
}());

/**
 * A utility to implement pagination
 */
var PaginatorUtil = /** @class */ (function () {
    /**
     * Constructor
     * @param pageSize - The page size
     * @param pageSizeOptions - The page size options
     * @param sortOptions - The sort options
     */
    function PaginatorUtil(pageSize, pageSizeOptions) {
        if (pageSize === void 0) { pageSize = 5; }
        if (pageSizeOptions === void 0) { pageSizeOptions = [5, 10, 20, 50]; }
        var sortOptions = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            sortOptions[_i - 2] = arguments[_i];
        }
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
    Object.defineProperty(PaginatorUtil.prototype, "query", {
        /** A get accessor for the query string */
        get: function () {
            return this._query;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginatorUtil.prototype, "hasFilter", {
        /** A get accessor for the hasFilter property */
        get: function () {
            return this._query ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginatorUtil.prototype, "length", {
        /** A get accessor for the array length */
        get: function () {
            return this._length;
        },
        /** A set accessor for the array length */
        set: function (length) {
            this._length = length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginatorUtil.prototype, "pageIndex", {
        /** A get accessor for the current page index */
        get: function () {
            return this._pageIndex;
        },
        /** A set accessor for the current page index */
        set: function (pageIndex) {
            this._pageIndex = pageIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginatorUtil.prototype, "pageSize", {
        /** A get accessor for the page size */
        get: function () {
            return this._pageSize;
        },
        /** A set accessor for the page size */
        set: function (pageSize) {
            this._pageSize = pageSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginatorUtil.prototype, "previousPageIndex", {
        /** A get accessor for the previous page index */
        get: function () {
            return this._previousPageIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginatorUtil.prototype, "pageSizeOptions", {
        /** A get accessor for the page size options */
        get: function () {
            return this._pageSizeOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginatorUtil.prototype, "noData", {
        /** A get accessor for the noData property */
        get: function () {
            return this._noData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginatorUtil.prototype, "sortOptions", {
        /** A get accessor for the sort optioins */
        get: function () {
            return this._sortOptions;
        },
        enumerable: true,
        configurable: true
    });
    // **********************
    // * Public methods
    // **********************
    /**
     * Append an object to the data array
     * @param object - The object to append
     * @param pageIndex - The page to go to after appending the object
     * @returns The modified page of data
     */
    PaginatorUtil.prototype.append = function (object, pageIndex) {
        if (object) {
            this._data.push(object);
            // this._length = this._data.length;
        }
        return this.paginate(pageIndex);
    };
    /**
     * Delete an object from the data array. Use the object ID to locate the object to delete.
     * @param id - The ID of the object to delete.
     * @param pageIndex - The page to go to after deleting the object
     * @returns The modified page of data
     */
    PaginatorUtil.prototype.deleteById = function (id, pageIndex) {
        if (id) {
            this._data = this._data.filter(function (f) { return f._id !== id; });
        }
        return this.paginate(pageIndex);
    };
    /**
     * Find an object in the data array
     * @param property - The object property to use for matching
     * @param value - The property value to look for
     * @returns The matching object
     */
    PaginatorUtil.prototype.find = function (property, value) {
        var result = CollectionUtil.find(this._data, property, value);
        return result;
    };
    /**
     * Find an object in the data array by matching the object ID
     * @param id - The ID of the object to find
     * @returns The matching object
     */
    PaginatorUtil.prototype.getById = function (id) {
        var object = CollectionUtil.findById(this._data, id);
        return object;
    };
    /**
     * Go to the start of the data array
     */
    PaginatorUtil.prototype.goFirst = function () {
        this._pageIndex = 0;
        return this.paginate();
    };
    /** Go to the end of the data array */
    PaginatorUtil.prototype.goLast = function () {
        var pageCount = Math.floor(this._length / this._pageSize);
        this._pageIndex = pageCount - 1;
        if (this._pageIndex < 0) {
            this._pageIndex = 0;
        }
    };
    /**
     * Insert an object in the data array
     * @param object - The object to insert
     * @param pageIndex - The page to go to after inserting the object
     * @returns The modified page of data
     */
    PaginatorUtil.prototype.insert = function (object, pageIndex) {
        if (object) {
            this._data.unshift(object);
        }
        return this.paginate(pageIndex);
    };
    /**
     * Load the passed data into the data array
     * @param data - The data to load
     * @returns The first page of data
     */
    PaginatorUtil.prototype.loadData = function (data) {
        this._data = data;
        this._length = data.length;
        this._noData = data.length === 0 ? true : false;
        var filteredData = this.paginate();
        return filteredData;
    };
    /**
     * Update the paginator properties and trigger a pagination event
     * @param pageData - The paginator properties to update
     */
    PaginatorUtil.prototype.onPagination = function (pageData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                pageData.pageSizeChanged = this._pageSize !== pageData.pageSize;
                this._length = pageData.length;
                this._pageIndex = pageData.pageIndex;
                this._pageSize = pageData.pageSize;
                this._previousPageIndex = pageData.previousPageIndex;
                this.paginationSubject$.next(pageData);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Trigger a pagination event
     * @param pageIndex - The page to go to after re-sorting and filtering
     * @Returns The current page of data
     */
    PaginatorUtil.prototype.paginate = function (pageIndex) {
        this.sort();
        this._filteredData = this.filter();
        this._length = this._filteredData.length;
        if (pageIndex !== undefined) {
            this._pageIndex = pageIndex;
        }
        var start = this._pageIndex * this._pageSize;
        if (start >= this.length) {
            this._pageIndex--;
            if (this.pageIndex < 0) {
                this.pageIndex = 0;
            }
            start = this._pageIndex * this._pageSize;
        }
        var end = start + this._pageSize;
        var dataToReturn = slice(this._filteredData, start, end);
        return dataToReturn;
    };
    /**
     * Set the sort options
     * @param sortOptions - The sort options
     */
    PaginatorUtil.prototype.setSortOptions = function () {
        var sortOptions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sortOptions[_i] = arguments[_i];
        }
        this._sortOptions = sortOptions;
    };
    /**
     * Set the filter columns
     * @param filterColumns - The filter columns
     */
    PaginatorUtil.prototype.setFilterColumns = function () {
        var filterColumns = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            filterColumns[_i] = arguments[_i];
        }
        this._filterColumns = filterColumns;
    };
    /**
     * Set the filter options
     * @param fitlerCase - The filter case option
     * @param fitlerScope - The filter scope option
     */
    PaginatorUtil.prototype.setFilterOptions = function (fitlerCase, fitlerScope) {
        this._filterOptions = new FilterOptions(fitlerCase, fitlerScope);
    };
    /**
     * Set the filter query
     * @param query - The filter query
     * @returns A page of data
     */
    PaginatorUtil.prototype.setQuery = function (query) {
        this._query = query;
        return this.paginate();
    };
    /**
     * Update an object in the data array
     * @param object - The object to update
     * @param pageIndex - The page to go to after updating
     * @Returns The current page of data
     */
    PaginatorUtil.prototype.update = function (object, pageIndex) {
        var index = this._data.findIndex(function (o) { return o._id === object._id; });
        if (index < 0) {
            this._data.push(object);
            // this._length = this._data.length;
        }
        else {
            this._data[index] = object;
        }
        return this.paginate(pageIndex);
    };
    /**
     * Apply the current filter
     */
    PaginatorUtil.prototype.filter = function () {
        if (!this._query || !this._data) {
            return this._data;
        }
        var filteredData = CollectionUtil.filter(this._data, this._query, this._filterColumns, this._filterOptions);
        return filteredData;
    };
    /**
     * Apply the current sort options
     */
    PaginatorUtil.prototype.sort = function () {
        if (!this._sortOptions) {
            return;
        }
        if (!this._data) {
            return;
        }
        CollectionUtil.multiKeySort.apply(CollectionUtil, __spread([this._data], this._sortOptions));
    };
    return PaginatorUtil;
}());

/**
 * A utility for generating Short IDs
 */
var ShortIdUtil = /** @class */ (function () {
    function ShortIdUtil() {
    }
    /**
     * Generate a short ID
     * @returns A short ID string
     */
    ShortIdUtil.generateId = function () {
        var id = generate();
        while (id.indexOf('_') >= 0 || id.indexOf('-') >= 0) {
            id = generate();
        }
        return id;
    };
    return ShortIdUtil;
}());

var MatDialogMock = /** @class */ (function () {
    function MatDialogMock() {
        this.dialogResult = new DialogResult(DialogButton.OK);
    }
    MatDialogMock.prototype.open = function () {
        var _this = this;
        return {
            afterClosed: function () { return of(_this.dialogResult); }
        };
    };
    return MatDialogMock;
}());

var validateStrongPassword = function (control) {
    try {
        var value = control.value;
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
        var stringValue = value;
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
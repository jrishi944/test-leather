import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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
    ErrorDialogComponent = __decorate([
        Component({
            selector: 'lm-error-dialog',
            template: "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ title }}</h4>\n</div>\n<div class=\"modal-body\">\n  <p>{{ message }}</p>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-light\" (click)=\"onClose()\">\n    Ok\n  </button>\n</div>",
            styles: [""]
        })
    ], ErrorDialogComponent);
    return ErrorDialogComponent;
}());
export { ErrorDialogComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZ3MvZXJyb3IvZXJyb3ItZGlhbG9nL2Vycm9yLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWtCLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFNUQ7O0dBRUc7QUFNSDtJQVFFOztPQUVHO0lBQ0gsOEJBQ1MsV0FBMkI7UUFBM0IsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO0lBRXBDLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7T0FFRztJQUNILHNDQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQWRxQixjQUFjOztJQUwzQjtRQUFSLEtBQUssRUFBRTtzREFBNkI7SUFQMUIsb0JBQW9CO1FBTGhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsK1JBQTRDOztTQUU3QyxDQUFDO09BQ1csb0JBQW9CLENBMkJoQztJQUFELDJCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0EzQlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVycm9yRGlhbG9nRGF0YSB9IGZyb20gJy4vX21vZGVscy9lcnJvci1kaWFsb2ctZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuLyoqXG4gKiBBIGRpYWxvZyBjb21wb25lbnQgdG8gZGlzcGxheSBhbiBlcnJvciBtZXNzYWdlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xtLWVycm9yLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9lcnJvci1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9lcnJvci1kaWFsb2cuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFcnJvckRpYWxvZ0NvbXBvbmVudCB7XG4gIC8qKiBUaGUgdGl0bGUgb2YgdGhlIGVycm9yIGRpYWxvZyAqL1xuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcblxuICAvKiogVGhlIGRpYWxvZyBlcnJvciBtZXNzYWdlICovXG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgcHVibGljIGRhdGE6IEVycm9yRGlhbG9nRGF0YVxuICAvKipcbiAgICogQHBhcmFtIGFjdGl2ZU1vZGFsIC0gQSByZWZlcmVuY2UgdG8gdGhlIGRpYWxvZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCxcbiAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnRpdGxlID0gdGhpcy5kYXRhLnRpdGxlO1xuICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuZGF0YS5tZXNzYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBjYWxsZWQgd2hlbiB0aGUgZGlhbG9nIGlzIGNhbmNlbGxlZFxuICAgKi9cbiAgb25DbG9zZSgpIHtcbiAgICB0aGlzLmFjdGl2ZU1vZGFsLmNsb3NlKCk7XG4gIH1cbn1cbiJdfQ==
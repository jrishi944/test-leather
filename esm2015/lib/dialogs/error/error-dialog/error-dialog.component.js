import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * A dialog component to display an error message
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@ng-bootstrap/ng-bootstrap';
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
ErrorDialogComponent.ɵfac = function ErrorDialogComponent_Factory(t) { return new (t || ErrorDialogComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NgbActiveModal)); };
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ErrorDialogComponent, [{
        type: Component,
        args: [{
                selector: 'lm-error-dialog',
                template: "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ title }}</h4>\n</div>\n<div class=\"modal-body\">\n  <p>{{ message }}</p>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-light\" (click)=\"onClose()\">\n    Ok\n  </button>\n</div>",
                styles: [""]
            }]
    }], function () { return [{ type: ɵngcc1.NgbActiveModal }]; }, { data: [{
            type: Input
        }] }); })();
export { ErrorDialogComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2xlYXRoZXJtYW4tYm9vdHN0cmFwL2xpYi9kaWFsb2dzL2Vycm9yL2Vycm9yLWRpYWxvZy9lcnJvci1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFrQixLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTVEO0FBQ0E7QUFDQSxHQUFHOzs7QUFNSCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtBQUNqQyxJQU9FO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFBRSxZQUNTLFdBQTJCO0FBQ3BDLFFBRFMsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO0FBQUMsSUFFckMsQ0FBQztBQUNILElBQ0UsUUFBUTtBQUNWLFFBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNqQyxRQUFJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDckMsSUFBRSxDQUFDO0FBQ0gsSUFDRTtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQUUsT0FBTztBQUNULFFBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUM3QixJQUFFLENBQUM7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBQUE7QUFDRDtBQUE4QyxZQWhCdEIsY0FBYztBQUNyQztBQU5VO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsa0RBQTRCO0FBUDFCLG9CQUFvQixvQkFMaEMsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFO1FBQWlCLFVBQzNCOzs7ME5BQTRDLDRCQUU3QyxDQUFDLElBQ1csb0JBQW9CLENBMkJoQzs7Ozs7b0JBQ0Q7QUFBQyxTQTVCWSxvQkFBb0I7QUFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXJyb3JEaWFsb2dEYXRhIH0gZnJvbSAnLi9fbW9kZWxzL2Vycm9yLWRpYWxvZy1kYXRhLm1vZGVsJztcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG4vKipcbiAqIEEgZGlhbG9nIGNvbXBvbmVudCB0byBkaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2VcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbG0tZXJyb3ItZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Vycm9yLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Vycm9yLWRpYWxvZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yRGlhbG9nQ29tcG9uZW50IHtcbiAgLyoqIFRoZSB0aXRsZSBvZiB0aGUgZXJyb3IgZGlhbG9nICovXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuXG4gIC8qKiBUaGUgZGlhbG9nIGVycm9yIG1lc3NhZ2UgKi9cbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcblxuICBASW5wdXQoKSBwdWJsaWMgZGF0YTogRXJyb3JEaWFsb2dEYXRhXG4gIC8qKlxuICAgKiBAcGFyYW0gYWN0aXZlTW9kYWwgLSBBIHJlZmVyZW5jZSB0byB0aGUgZGlhbG9nXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsLFxuICApIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudGl0bGUgPSB0aGlzLmRhdGEudGl0bGU7XG4gICAgdGhpcy5tZXNzYWdlID0gdGhpcy5kYXRhLm1lc3NhZ2U7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIGNhbGxlZCB3aGVuIHRoZSBkaWFsb2cgaXMgY2FuY2VsbGVkXG4gICAqL1xuICBvbkNsb3NlKCkge1xuICAgIHRoaXMuYWN0aXZlTW9kYWwuY2xvc2UoKTtcbiAgfVxufVxuIl19
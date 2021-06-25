import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogResult } from '../../../models/dialog/dialog-result.model';
import { DialogButton } from '../../../enums/dialog-button.enum';
/**
 * A dialog component to prompt the user for a YES/NO answer
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@ng-bootstrap/ng-bootstrap';
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
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NgbActiveModal)); };
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ConfirmDialogComponent, [{
        type: Component,
        args: [{
                selector: 'lm-confirm-dialog',
                template: "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ dialogData.title }}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onCancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <p>{{ dialogData.message }}</p>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-light\" (click)=\"onCancel()\"> Cancel </button>\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"onConfirm()\"> Confirm </button>\n</div>",
                styles: [""]
            }]
    }], function () { return [{ type: ɵngcc1.NgbActiveModal }]; }, { dialogData: [{
            type: Input
        }] }); })();
export { ConfirmDialogComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovbGVhdGhlcm1hbi1ib290c3RyYXAvbGliL2RpYWxvZ3MvY29uZmlybS9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWtCLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRTtBQUNBO0FBQ0EsR0FBRzs7O0FBTUgsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7QUFBRyxJQUVwQyxZQUNTLFdBQTJCO0FBQ25DLFFBRFEsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO0FBQ3RDLElBQ0UsQ0FBQztBQUNILElBQ0UsUUFBUTtBQUNWLElBQUUsQ0FBQztBQUNILElBQ1MsUUFBUTtBQUNqQixRQUFJLE1BQU0sWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMvRCxRQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3pDLElBQUUsQ0FBQztBQUNILElBQ1MsU0FBUztBQUFLLFFBQ25CLE1BQU0sWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMzRCxRQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3pDLElBQUUsQ0FBQztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBQUE7QUFDRDtBQUFnRCxZQWpCeEIsY0FBYztBQUNwQztBQUhTO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsMERBQW9DO0FBRGxDLHNCQUFzQixvQkFMbEMsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFO1VBQW1CLFVBQzdCOzs7Z2VBQThDLDRCQUUvQyxDQUFDLElBQ1csc0JBQXNCLENBbUJsQzs7Ozs7b0JBQ0Q7QUFBQyxTQXBCWSxzQkFBc0I7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IENvbmZpcm1EaWFsb2dEYXRhIH0gZnJvbSAnLi9fbW9kZWxzL2NvbmZpcm0tZGlhbG9nLWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgRGlhbG9nUmVzdWx0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2RpYWxvZy9kaWFsb2ctcmVzdWx0Lm1vZGVsJztcbmltcG9ydCB7IERpYWxvZ0J1dHRvbiB9IGZyb20gJy4uLy4uLy4uL2VudW1zL2RpYWxvZy1idXR0b24uZW51bSc7XG4vKipcbiAqIEEgZGlhbG9nIGNvbXBvbmVudCB0byBwcm9tcHQgdGhlIHVzZXIgZm9yIGEgWUVTL05PIGFuc3dlclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsbS1jb25maXJtLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybURpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBkaWFsb2dEYXRhOiBDb25maXJtRGlhbG9nRGF0YVxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsXG4gICkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBwdWJsaWMgb25DYW5jZWwoKSB7XG4gICAgY29uc3QgZGlhbG9nUmVzdWx0ID0gbmV3IERpYWxvZ1Jlc3VsdChEaWFsb2dCdXR0b24uQ2FuY2VsKTtcbiAgICB0aGlzLmFjdGl2ZU1vZGFsLmNsb3NlKGRpYWxvZ1Jlc3VsdCk7XG4gIH1cblxuICBwdWJsaWMgb25Db25maXJtKCk6IHZvaWQge1xuICAgIGNvbnN0IGRpYWxvZ1Jlc3VsdCA9IG5ldyBEaWFsb2dSZXN1bHQoRGlhbG9nQnV0dG9uLk9LKTtcbiAgICB0aGlzLmFjdGl2ZU1vZGFsLmNsb3NlKGRpYWxvZ1Jlc3VsdCk7XG4gIH1cbn1cbiJdfQ==
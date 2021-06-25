import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogResult } from '../../../models/dialog/dialog-result.model';
import { DialogButton } from '../../../enums/dialog-button.enum';
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
    ConfirmDialogComponent = __decorate([
        Component({
            selector: 'lm-confirm-dialog',
            template: "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">{{ dialogData.title }}</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onCancel()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <p>{{ dialogData.message }}</p>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-light\" (click)=\"onCancel()\"> Cancel </button>\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"onConfirm()\"> Confirm </button>\n</div>",
            styles: [""]
        })
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());
export { ConfirmDialogComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGVhdGhlcm1hbi1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvZGlhbG9ncy9jb25maXJtL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBa0IsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pFOztHQUVHO0FBTUg7SUFFRSxnQ0FDUyxXQUEyQjtRQUEzQixnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7SUFFcEMsQ0FBQztJQUVELHlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRU0seUNBQVEsR0FBZjtRQUNFLElBQU0sWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sMENBQVMsR0FBaEI7UUFDRSxJQUFNLFlBQVksR0FBRyxJQUFJLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Z0JBZnFCLGNBQWM7O0lBRjNCO1FBQVIsS0FBSyxFQUFFOzhEQUFxQztJQURsQyxzQkFBc0I7UUFMbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixxaUJBQThDOztTQUUvQyxDQUFDO09BQ1csc0JBQXNCLENBbUJsQztJQUFELDZCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FuQlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgQ29uZmlybURpYWxvZ0RhdGEgfSBmcm9tICcuL19tb2RlbHMvY29uZmlybS1kaWFsb2ctZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBEaWFsb2dSZXN1bHQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvZGlhbG9nL2RpYWxvZy1yZXN1bHQubW9kZWwnO1xuaW1wb3J0IHsgRGlhbG9nQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vZW51bXMvZGlhbG9nLWJ1dHRvbi5lbnVtJztcbi8qKlxuICogQSBkaWFsb2cgY29tcG9uZW50IHRvIHByb21wdCB0aGUgdXNlciBmb3IgYSBZRVMvTk8gYW5zd2VyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xtLWNvbmZpcm0tZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb25maXJtRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcHVibGljIGRpYWxvZ0RhdGE6IENvbmZpcm1EaWFsb2dEYXRhXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWxcbiAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHB1YmxpYyBvbkNhbmNlbCgpIHtcbiAgICBjb25zdCBkaWFsb2dSZXN1bHQgPSBuZXcgRGlhbG9nUmVzdWx0KERpYWxvZ0J1dHRvbi5DYW5jZWwpO1xuICAgIHRoaXMuYWN0aXZlTW9kYWwuY2xvc2UoZGlhbG9nUmVzdWx0KTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNvbmZpcm0oKTogdm9pZCB7XG4gICAgY29uc3QgZGlhbG9nUmVzdWx0ID0gbmV3IERpYWxvZ1Jlc3VsdChEaWFsb2dCdXR0b24uT0spO1xuICAgIHRoaXMuYWN0aXZlTW9kYWwuY2xvc2UoZGlhbG9nUmVzdWx0KTtcbiAgfVxufVxuIl19
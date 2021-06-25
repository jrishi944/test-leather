import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogResult } from '../../../models/dialog/dialog-result.model';
import { DialogButton } from '../../../enums/dialog-button.enum';
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
ConfirmDialogComponent.ctorParameters = () => [
    { type: NgbActiveModal }
];
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
export { ConfirmDialogComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGVhdGhlcm1hbi1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvZGlhbG9ncy9jb25maXJtL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBa0IsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pFOztHQUVHO0FBTUgsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFFakMsWUFDUyxXQUEyQjtRQUEzQixnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7SUFFcEMsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRU0sUUFBUTtRQUNiLE1BQU0sWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sU0FBUztRQUNkLE1BQU0sWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0YsQ0FBQTs7WUFoQnVCLGNBQWM7O0FBRjNCO0lBQVIsS0FBSyxFQUFFOzBEQUFxQztBQURsQyxzQkFBc0I7SUFMbEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixxaUJBQThDOztLQUUvQyxDQUFDO0dBQ1csc0JBQXNCLENBbUJsQztTQW5CWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBDb25maXJtRGlhbG9nRGF0YSB9IGZyb20gJy4vX21vZGVscy9jb25maXJtLWRpYWxvZy1kYXRhLm1vZGVsJztcbmltcG9ydCB7IERpYWxvZ1Jlc3VsdCB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9kaWFsb2cvZGlhbG9nLXJlc3VsdC5tb2RlbCc7XG5pbXBvcnQgeyBEaWFsb2dCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9lbnVtcy9kaWFsb2ctYnV0dG9uLmVudW0nO1xuLyoqXG4gKiBBIGRpYWxvZyBjb21wb25lbnQgdG8gcHJvbXB0IHRoZSB1c2VyIGZvciBhIFlFUy9OTyBhbnN3ZXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbG0tY29uZmlybS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29uZmlybS1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb25maXJtLWRpYWxvZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1EaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwdWJsaWMgZGlhbG9nRGF0YTogQ29uZmlybURpYWxvZ0RhdGFcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbFxuICApIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcHVibGljIG9uQ2FuY2VsKCkge1xuICAgIGNvbnN0IGRpYWxvZ1Jlc3VsdCA9IG5ldyBEaWFsb2dSZXN1bHQoRGlhbG9nQnV0dG9uLkNhbmNlbCk7XG4gICAgdGhpcy5hY3RpdmVNb2RhbC5jbG9zZShkaWFsb2dSZXN1bHQpO1xuICB9XG5cbiAgcHVibGljIG9uQ29uZmlybSgpOiB2b2lkIHtcbiAgICBjb25zdCBkaWFsb2dSZXN1bHQgPSBuZXcgRGlhbG9nUmVzdWx0KERpYWxvZ0J1dHRvbi5PSyk7XG4gICAgdGhpcy5hY3RpdmVNb2RhbC5jbG9zZShkaWFsb2dSZXN1bHQpO1xuICB9XG59XG4iXX0=
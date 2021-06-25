import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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
ErrorDialogComponent.ctorParameters = () => [
    { type: NgbActiveModal }
];
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
export { ErrorDialogComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZ3MvZXJyb3IvZXJyb3ItZGlhbG9nL2Vycm9yLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWtCLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFNUQ7O0dBRUc7QUFNSCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQVEvQjs7T0FFRztJQUNILFlBQ1MsV0FBMkI7UUFBM0IsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO0lBRXBDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7T0FFRztJQUNILE9BQU87UUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7Q0FDRixDQUFBOztZQWZ1QixjQUFjOztBQUwzQjtJQUFSLEtBQUssRUFBRTtrREFBNkI7QUFQMUIsb0JBQW9CO0lBTGhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsK1JBQTRDOztLQUU3QyxDQUFDO0dBQ1csb0JBQW9CLENBMkJoQztTQTNCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXJyb3JEaWFsb2dEYXRhIH0gZnJvbSAnLi9fbW9kZWxzL2Vycm9yLWRpYWxvZy1kYXRhLm1vZGVsJztcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG4vKipcbiAqIEEgZGlhbG9nIGNvbXBvbmVudCB0byBkaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2VcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbG0tZXJyb3ItZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Vycm9yLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Vycm9yLWRpYWxvZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yRGlhbG9nQ29tcG9uZW50IHtcbiAgLyoqIFRoZSB0aXRsZSBvZiB0aGUgZXJyb3IgZGlhbG9nICovXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuXG4gIC8qKiBUaGUgZGlhbG9nIGVycm9yIG1lc3NhZ2UgKi9cbiAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcblxuICBASW5wdXQoKSBwdWJsaWMgZGF0YTogRXJyb3JEaWFsb2dEYXRhXG4gIC8qKlxuICAgKiBAcGFyYW0gYWN0aXZlTW9kYWwgLSBBIHJlZmVyZW5jZSB0byB0aGUgZGlhbG9nXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsLFxuICApIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudGl0bGUgPSB0aGlzLmRhdGEudGl0bGU7XG4gICAgdGhpcy5tZXNzYWdlID0gdGhpcy5kYXRhLm1lc3NhZ2U7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIGNhbGxlZCB3aGVuIHRoZSBkaWFsb2cgaXMgY2FuY2VsbGVkXG4gICAqL1xuICBvbkNsb3NlKCkge1xuICAgIHRoaXMuYWN0aXZlTW9kYWwuY2xvc2UoKTtcbiAgfVxufVxuIl19
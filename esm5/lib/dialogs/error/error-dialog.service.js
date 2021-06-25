import { __awaiter, __decorate, __generator } from "tslib";
import { Injectable } from '@angular/core';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { ErrorDialogData } from './error-dialog/_models/error-dialog-data.model';
import { DialogResult } from '../../models/dialog/dialog-result.model';
import { DialogButton } from '../../enums/dialog-button.enum';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
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
    ErrorDialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ErrorDialogService_Factory() { return new ErrorDialogService(i0.ɵɵinject(i1.NgbModal)); }, token: ErrorDialogService, providedIn: "root" });
    ErrorDialogService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], ErrorDialogService);
    return ErrorDialogService;
}());
export { ErrorDialogService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9kaWFsb2dzL2Vycm9yL2Vycm9yLWRpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNqRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBRXREOztHQUVHO0FBSUg7SUFDRSw0QkFBbUIsTUFBZ0I7UUFBaEIsV0FBTSxHQUFOLE1BQU0sQ0FBVTtJQUFJLENBQUM7SUFFeEM7Ozs7T0FJRztJQUNVLDRDQUFlLEdBQTVCLFVBQ0UsS0FBYSxFQUNiLE9BQWU7Ozs7Z0JBRVQsVUFBVSxHQUFHLElBQUksZUFBZSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFFakQsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQ3pELFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO2dCQUU5QyxzQkFBTyxJQUFJLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUM7OztLQUMxQzs7Z0JBakIwQixRQUFROzs7SUFEeEIsa0JBQWtCO1FBSDlCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxrQkFBa0IsQ0FtQjlCOzZCQWpDRDtDQWlDQyxBQW5CRCxJQW1CQztTQW5CWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFcnJvckRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZXJyb3ItZGlhbG9nL2Vycm9yLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXJyb3JEaWFsb2dEYXRhIH0gZnJvbSAnLi9lcnJvci1kaWFsb2cvX21vZGVscy9lcnJvci1kaWFsb2ctZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBEaWFsb2dSZXN1bHQgfSBmcm9tICcuLi8uLi9tb2RlbHMvZGlhbG9nL2RpYWxvZy1yZXN1bHQubW9kZWwnO1xuaW1wb3J0IHsgRGlhbG9nQnV0dG9uIH0gZnJvbSAnLi4vLi4vZW51bXMvZGlhbG9nLWJ1dHRvbi5lbnVtJztcbmltcG9ydCB7IElFcnJvckRpYWxvZ1NlcnZpY2UgfSBmcm9tICcuL19pbnRlcmZhY2VzL2Vycm9yLWRpYWxvZy1zZXJ2aWNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuLyoqXG4gKiAgQSBzZXJ2aWNlIHRvIG1hbmFnZSBhbmQgZGlzcGxheSBlcnJvciBkaWFsb2dzXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEVycm9yRGlhbG9nU2VydmljZSBpbXBsZW1lbnRzIElFcnJvckRpYWxvZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBOZ2JNb2RhbCkgeyB9XG5cbiAgLyoqXG4gICAqIE9wZW4gYW4gZXJyb3IgZGlhbG9nXG4gICAqIEBwYXJhbSB0aXRsZSAtIFRoZSB0aXRsZSBvZiB0aGUgZXJyb3IgZGlhbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIC0gVGhlIG1lc3NhZ2UgdG8gZGlzcGxheSB0byB0aGUgdXNlclxuICAgKi9cbiAgcHVibGljIGFzeW5jIG9wZW5FcnJvckRpYWxvZyhcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIG1lc3NhZ2U6IHN0cmluZ1xuICApOiBQcm9taXNlPERpYWxvZ1Jlc3VsdDxudWxsPj4ge1xuICAgIGNvbnN0IGRpYWxvZ0RhdGEgPSBuZXcgRXJyb3JEaWFsb2dEYXRhKHRpdGxlLCBtZXNzYWdlKTtcblxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRXJyb3JEaWFsb2dDb21wb25lbnQpO1xuICAgIGRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS5kYXRhID0gZGlhbG9nRGF0YTtcbiAgICBcbiAgICByZXR1cm4gbmV3IERpYWxvZ1Jlc3VsdChEaWFsb2dCdXR0b24uT0spO1xuICB9XG59XG4iXX0=
import { __awaiter, __decorate } from "tslib";
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
ErrorDialogService.ctorParameters = () => [
    { type: NgbModal }
];
ErrorDialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ErrorDialogService_Factory() { return new ErrorDialogService(i0.ɵɵinject(i1.NgbModal)); }, token: ErrorDialogService, providedIn: "root" });
ErrorDialogService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ErrorDialogService);
export { ErrorDialogService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9kaWFsb2dzL2Vycm9yL2Vycm9yLWRpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNqRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBRXREOztHQUVHO0FBSUgsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFDN0IsWUFBbUIsTUFBZ0I7UUFBaEIsV0FBTSxHQUFOLE1BQU0sQ0FBVTtJQUFJLENBQUM7SUFFeEM7Ozs7T0FJRztJQUNVLGVBQWUsQ0FDMUIsS0FBYSxFQUNiLE9BQWU7O1lBRWYsTUFBTSxVQUFVLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRXZELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDekQsU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7WUFFOUMsT0FBTyxJQUFJLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0MsQ0FBQztLQUFBO0NBQ0YsQ0FBQTs7WUFsQjRCLFFBQVE7OztBQUR4QixrQkFBa0I7SUFIOUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGtCQUFrQixDQW1COUI7U0FuQlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXJyb3JEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2Vycm9yLWRpYWxvZy9lcnJvci1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IEVycm9yRGlhbG9nRGF0YSB9IGZyb20gJy4vZXJyb3ItZGlhbG9nL19tb2RlbHMvZXJyb3ItZGlhbG9nLWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgRGlhbG9nUmVzdWx0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RpYWxvZy9kaWFsb2ctcmVzdWx0Lm1vZGVsJztcbmltcG9ydCB7IERpYWxvZ0J1dHRvbiB9IGZyb20gJy4uLy4uL2VudW1zL2RpYWxvZy1idXR0b24uZW51bSc7XG5pbXBvcnQgeyBJRXJyb3JEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9faW50ZXJmYWNlcy9lcnJvci1kaWFsb2ctc2VydmljZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbi8qKlxuICogIEEgc2VydmljZSB0byBtYW5hZ2UgYW5kIGRpc3BsYXkgZXJyb3IgZGlhbG9nc1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFcnJvckRpYWxvZ1NlcnZpY2UgaW1wbGVtZW50cyBJRXJyb3JEaWFsb2dTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTmdiTW9kYWwpIHsgfVxuXG4gIC8qKlxuICAgKiBPcGVuIGFuIGVycm9yIGRpYWxvZ1xuICAgKiBAcGFyYW0gdGl0bGUgLSBUaGUgdGl0bGUgb2YgdGhlIGVycm9yIGRpYWxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSBtZXNzYWdlIHRvIGRpc3BsYXkgdG8gdGhlIHVzZXJcbiAgICovXG4gIHB1YmxpYyBhc3luYyBvcGVuRXJyb3JEaWFsb2coXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBtZXNzYWdlOiBzdHJpbmdcbiAgKTogUHJvbWlzZTxEaWFsb2dSZXN1bHQ8bnVsbD4+IHtcbiAgICBjb25zdCBkaWFsb2dEYXRhID0gbmV3IEVycm9yRGlhbG9nRGF0YSh0aXRsZSwgbWVzc2FnZSk7XG5cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEVycm9yRGlhbG9nQ29tcG9uZW50KTtcbiAgICBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UuZGF0YSA9IGRpYWxvZ0RhdGE7XG4gICAgXG4gICAgcmV0dXJuIG5ldyBEaWFsb2dSZXN1bHQoRGlhbG9nQnV0dG9uLk9LKTtcbiAgfVxufVxuIl19
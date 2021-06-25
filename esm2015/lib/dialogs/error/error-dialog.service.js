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
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@ng-bootstrap/ng-bootstrap';
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
ErrorDialogService.ɵfac = function ErrorDialogService_Factory(t) { return new (t || ErrorDialogService)(ɵngcc0.ɵɵinject(ɵngcc1.NgbModal)); };
ErrorDialogService.ctorParameters = () => [
    { type: NgbModal }
];
ErrorDialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ErrorDialogService_Factory() { return new ErrorDialogService(i0.ɵɵinject(i1.NgbModal)); }, token: ErrorDialogService, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ErrorDialogService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc1.NgbModal }]; }, null); })();
export { ErrorDialogService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIm5nOi9sZWF0aGVybWFuLWJvb3RzdHJhcC9saWIvZGlhbG9ncy9lcnJvci9lcnJvci1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDakYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEQ7QUFFZ0M7QUFEaEM7QUFDQTtBQUNBLEdBQUc7OztBQUlILElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0FBQUcsSUFDaEMsWUFBbUIsTUFBZ0I7QUFBSSxRQUFwQixXQUFNLEdBQU4sTUFBTSxDQUFVO0FBQUMsSUFBRyxDQUFDO0FBQzFDLElBQ0U7QUFDRjtBQUNFO0FBQ0U7QUFFSixPQURLO0FBQ0wsSUFBZSxlQUFlLENBQzFCLEtBQWEsRUFDYixPQUFlO0FBQ2hCO0FBQzJCLFlBQTFCLE1BQU0sVUFBVSxHQUFHLElBQUksZUFBZSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMzRCxZQUNJLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDN0QsWUFBSSxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztBQUNsRCxZQUNJLE9BQU8sSUFBSSxZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdDLFFBQUUsQ0FBQztBQUVILEtBRkc7QUFDSCxDQUFDOzZJQUFBO0FBQ0Q7QUFBNEMsWUFuQmYsUUFBUTtBQUFHO0FBQ3hDO0FBRmEsa0JBQWtCLG9CQUg5QixVQUFVLENBQUMsVUFDVixVQUFVLEVBQUU7QUFBTSxNQUNuQixDQUFDLElBQ1c7R0FBa0IsQ0FtQjlCOzs7eUVBQ0Q7QUFBQyxTQXBCWSxrQkFBa0I7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVycm9yRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9lcnJvci1kaWFsb2cvZXJyb3ItZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFcnJvckRpYWxvZ0RhdGEgfSBmcm9tICcuL2Vycm9yLWRpYWxvZy9fbW9kZWxzL2Vycm9yLWRpYWxvZy1kYXRhLm1vZGVsJztcbmltcG9ydCB7IERpYWxvZ1Jlc3VsdCB9IGZyb20gJy4uLy4uL21vZGVscy9kaWFsb2cvZGlhbG9nLXJlc3VsdC5tb2RlbCc7XG5pbXBvcnQgeyBEaWFsb2dCdXR0b24gfSBmcm9tICcuLi8uLi9lbnVtcy9kaWFsb2ctYnV0dG9uLmVudW0nO1xuaW1wb3J0IHsgSUVycm9yRGlhbG9nU2VydmljZSB9IGZyb20gJy4vX2ludGVyZmFjZXMvZXJyb3ItZGlhbG9nLXNlcnZpY2UuaW50ZXJmYWNlJztcbmltcG9ydCB7IE5nYk1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG4vKipcbiAqICBBIHNlcnZpY2UgdG8gbWFuYWdlIGFuZCBkaXNwbGF5IGVycm9yIGRpYWxvZ3NcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRXJyb3JEaWFsb2dTZXJ2aWNlIGltcGxlbWVudHMgSUVycm9yRGlhbG9nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE5nYk1vZGFsKSB7IH1cblxuICAvKipcbiAgICogT3BlbiBhbiBlcnJvciBkaWFsb2dcbiAgICogQHBhcmFtIHRpdGxlIC0gVGhlIHRpdGxlIG9mIHRoZSBlcnJvciBkaWFsb2dcbiAgICogQHBhcmFtIG1lc3NhZ2UgLSBUaGUgbWVzc2FnZSB0byBkaXNwbGF5IHRvIHRoZSB1c2VyXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgb3BlbkVycm9yRGlhbG9nKFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogc3RyaW5nXG4gICk6IFByb21pc2U8RGlhbG9nUmVzdWx0PG51bGw+PiB7XG4gICAgY29uc3QgZGlhbG9nRGF0YSA9IG5ldyBFcnJvckRpYWxvZ0RhdGEodGl0bGUsIG1lc3NhZ2UpO1xuXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihFcnJvckRpYWxvZ0NvbXBvbmVudCk7XG4gICAgZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlLmRhdGEgPSBkaWFsb2dEYXRhO1xuICAgIFxuICAgIHJldHVybiBuZXcgRGlhbG9nUmVzdWx0KERpYWxvZ0J1dHRvbi5PSyk7XG4gIH1cbn1cbiJdfQ==
import { __awaiter, __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";
import { ConfirmDialogData } from "./confirm-dialog/_models/confirm-dialog-data.model";
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@ng-bootstrap/ng-bootstrap';
let ConfirmDialogService = class ConfirmDialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openConfirmDialog(title, message) {
        return __awaiter(this, void 0, void 0, function* () {
            const confirmDialogData = new ConfirmDialogData(title, message);
            const dialogRef = this.dialog.open(ConfirmDialogComponent, {
                backdrop: "static",
                keyboard: false,
            });
            dialogRef.componentInstance.dialogData = confirmDialogData;
            const result = yield dialogRef.result;
            return result;
        });
    }
};
ConfirmDialogService.ɵfac = function ConfirmDialogService_Factory(t) { return new (t || ConfirmDialogService)(ɵngcc0.ɵɵinject(ɵngcc1.NgbModal)); };
ConfirmDialogService.ctorParameters = () => [
    { type: NgbModal }
];
ConfirmDialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConfirmDialogService_Factory() { return new ConfirmDialogService(i0.ɵɵinject(i1.NgbModal)); }, token: ConfirmDialogService, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ConfirmDialogService, [{
        type: Injectable,
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: ɵngcc1.NgbModal }]; }, null); })();
export { ConfirmDialogService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZXMiOlsibmc6L2xlYXRoZXJtYW4tYm9vdHN0cmFwL2xpYi9kaWFsb2dzL2NvbmZpcm0vY29uZmlybS1kaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDdkY7QUFBcUM7OztBQU9yQyxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtBQUFHLElBQ2xDLFlBQW1CLE1BQWdCO0FBQUksUUFBcEIsV0FBTSxHQUFOLE1BQU0sQ0FBVTtBQUFDLElBQUUsQ0FBQztBQUN6QyxJQUNlLGlCQUFpQixDQUM1QixLQUFhLEVBQ2IsT0FBZTtBQUNoQjtBQUNtQixZQUFsQixNQUFNLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3BFLFlBQUksTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7QUFDL0QsZ0JBQU0sUUFBUSxFQUFFLFFBQVE7QUFDeEIsZ0JBQU0sUUFBUSxFQUFFLEtBQUs7QUFDckIsYUFBSyxDQUFDLENBQUM7QUFDUCxZQUFJLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEdBQUcsaUJBQWlCLENBQUM7QUFDL0QsWUFBSSxNQUFNLE1BQU0sR0FBK0IsTUFBTSxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQ3RFLFlBQUksT0FBTyxNQUFNLENBQUM7QUFDbEIsUUFBRSxDQUFDO0FBRUgsS0FGRztBQUNILENBQUM7bUpBQUE7QUFDRDtBQUE4QyxZQWhCakIsUUFBUTtBQUFHO0FBRXhDO0FBSGEsb0JBQW9CLG9CQUhoQyxVQUFVLENBQUMsVUFDVixVQUFVLEVBQUU7QUFBTSxPQUNuQixDQUFDLElBQ1c7TUFBb0IsQ0FnQmhDOzs7eUVBQ0Q7QUFBQyxTQWpCWSxvQkFBb0I7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tIFwiQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXBcIjtcbmltcG9ydCB7IENvbmZpcm1EaWFsb2dDb21wb25lbnQgfSBmcm9tIFwiLi9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy5jb21wb25lbnRcIjtcbmltcG9ydCB7IENvbmZpcm1EaWFsb2dEYXRhIH0gZnJvbSBcIi4vY29uZmlybS1kaWFsb2cvX21vZGVscy9jb25maXJtLWRpYWxvZy1kYXRhLm1vZGVsXCI7XG5pbXBvcnQgeyBEaWFsb2dSZXN1bHQgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL2RpYWxvZy9kaWFsb2ctcmVzdWx0Lm1vZGVsXCI7XG5pbXBvcnQgeyBJQ29uZmlybURpYWxvZ1NlcnZpY2UgfSBmcm9tIFwiLi9faW50ZXJmYWNlcy9jb25maXJtLWRpYWxvZy1zZXJ2aWNlLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgRGlhbG9nQnV0dG9uIH0gZnJvbSBcIi4uLy4uL2VudW1zL2RpYWxvZy1idXR0b24uZW51bVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maXJtRGlhbG9nU2VydmljZSBpbXBsZW1lbnRzIElDb25maXJtRGlhbG9nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE5nYk1vZGFsKSB7fVxuXG4gIHB1YmxpYyBhc3luYyBvcGVuQ29uZmlybURpYWxvZyhcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIG1lc3NhZ2U6IHN0cmluZ1xuICApOiBQcm9taXNlPERpYWxvZ1Jlc3VsdDxEaWFsb2dCdXR0b24+PiB7XG4gICAgY29uc3QgY29uZmlybURpYWxvZ0RhdGEgPSBuZXcgQ29uZmlybURpYWxvZ0RhdGEodGl0bGUsIG1lc3NhZ2UpO1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybURpYWxvZ0NvbXBvbmVudCwge1xuICAgICAgYmFja2Ryb3A6IFwic3RhdGljXCIsXG4gICAgICBrZXlib2FyZDogZmFsc2UsXG4gICAgfSk7XG4gICAgZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlLmRpYWxvZ0RhdGEgPSBjb25maXJtRGlhbG9nRGF0YTtcbiAgICBjb25zdCByZXN1bHQ6IERpYWxvZ1Jlc3VsdDxEaWFsb2dCdXR0b24+ID0gYXdhaXQgZGlhbG9nUmVmLnJlc3VsdDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXX0=
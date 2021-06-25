import { __awaiter, __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";
import { ConfirmDialogData } from "./confirm-dialog/_models/confirm-dialog-data.model";
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
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
ConfirmDialogService.ctorParameters = () => [
    { type: NgbModal }
];
ConfirmDialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConfirmDialogService_Factory() { return new ConfirmDialogService(i0.ɵɵinject(i1.NgbModal)); }, token: ConfirmDialogService, providedIn: "root" });
ConfirmDialogService = __decorate([
    Injectable({
        providedIn: "root",
    })
], ConfirmDialogService);
export { ConfirmDialogService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZ3MvY29uZmlybS9jb25maXJtLWRpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7O0FBUXZGLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBQy9CLFlBQW1CLE1BQWdCO1FBQWhCLFdBQU0sR0FBTixNQUFNLENBQVU7SUFBRyxDQUFDO0lBRTFCLGlCQUFpQixDQUM1QixLQUFhLEVBQ2IsT0FBZTs7WUFFZixNQUFNLGlCQUFpQixHQUFHLElBQUksaUJBQWlCLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2hFLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFO2dCQUN6RCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsUUFBUSxFQUFFLEtBQUs7YUFDaEIsQ0FBQyxDQUFDO1lBQ0gsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQztZQUMzRCxNQUFNLE1BQU0sR0FBK0IsTUFBTSxTQUFTLENBQUMsTUFBTSxDQUFDO1lBQ2xFLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7S0FBQTtDQUNGLENBQUE7O1lBZjRCLFFBQVE7OztBQUR4QixvQkFBb0I7SUFIaEMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLG9CQUFvQixDQWdCaEM7U0FoQlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOZ2JNb2RhbCB9IGZyb20gXCJAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcFwiO1xuaW1wb3J0IHsgQ29uZmlybURpYWxvZ0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29uZmlybURpYWxvZ0RhdGEgfSBmcm9tIFwiLi9jb25maXJtLWRpYWxvZy9fbW9kZWxzL2NvbmZpcm0tZGlhbG9nLWRhdGEubW9kZWxcIjtcbmltcG9ydCB7IERpYWxvZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZGlhbG9nL2RpYWxvZy1yZXN1bHQubW9kZWxcIjtcbmltcG9ydCB7IElDb25maXJtRGlhbG9nU2VydmljZSB9IGZyb20gXCIuL19pbnRlcmZhY2VzL2NvbmZpcm0tZGlhbG9nLXNlcnZpY2UuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBEaWFsb2dCdXR0b24gfSBmcm9tIFwiLi4vLi4vZW51bXMvZGlhbG9nLWJ1dHRvbi5lbnVtXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCIsXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1EaWFsb2dTZXJ2aWNlIGltcGxlbWVudHMgSUNvbmZpcm1EaWFsb2dTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTmdiTW9kYWwpIHt9XG5cbiAgcHVibGljIGFzeW5jIG9wZW5Db25maXJtRGlhbG9nKFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogc3RyaW5nXG4gICk6IFByb21pc2U8RGlhbG9nUmVzdWx0PERpYWxvZ0J1dHRvbj4+IHtcbiAgICBjb25zdCBjb25maXJtRGlhbG9nRGF0YSA9IG5ldyBDb25maXJtRGlhbG9nRGF0YSh0aXRsZSwgbWVzc2FnZSk7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtRGlhbG9nQ29tcG9uZW50LCB7XG4gICAgICBiYWNrZHJvcDogXCJzdGF0aWNcIixcbiAgICAgIGtleWJvYXJkOiBmYWxzZSxcbiAgICB9KTtcbiAgICBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UuZGlhbG9nRGF0YSA9IGNvbmZpcm1EaWFsb2dEYXRhO1xuICAgIGNvbnN0IHJlc3VsdDogRGlhbG9nUmVzdWx0PERpYWxvZ0J1dHRvbj4gPSBhd2FpdCBkaWFsb2dSZWYucmVzdWx0O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdfQ==
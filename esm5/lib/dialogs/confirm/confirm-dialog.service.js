import { __awaiter, __decorate, __generator } from "tslib";
import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";
import { ConfirmDialogData } from "./confirm-dialog/_models/confirm-dialog-data.model";
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
var ConfirmDialogService = /** @class */ (function () {
    function ConfirmDialogService(dialog) {
        this.dialog = dialog;
    }
    ConfirmDialogService.prototype.openConfirmDialog = function (title, message) {
        return __awaiter(this, void 0, void 0, function () {
            var confirmDialogData, dialogRef, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        confirmDialogData = new ConfirmDialogData(title, message);
                        dialogRef = this.dialog.open(ConfirmDialogComponent, {
                            backdrop: "static",
                            keyboard: false,
                        });
                        dialogRef.componentInstance.dialogData = confirmDialogData;
                        return [4 /*yield*/, dialogRef.result];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ConfirmDialogService.ctorParameters = function () { return [
        { type: NgbModal }
    ]; };
    ConfirmDialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConfirmDialogService_Factory() { return new ConfirmDialogService(i0.ɵɵinject(i1.NgbModal)); }, token: ConfirmDialogService, providedIn: "root" });
    ConfirmDialogService = __decorate([
        Injectable({
            providedIn: "root",
        })
    ], ConfirmDialogService);
    return ConfirmDialogService;
}());
export { ConfirmDialogService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZ3MvY29uZmlybS9jb25maXJtLWRpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQzs7O0FBUXZGO0lBQ0UsOEJBQW1CLE1BQWdCO1FBQWhCLFdBQU0sR0FBTixNQUFNLENBQVU7SUFBRyxDQUFDO0lBRTFCLGdEQUFpQixHQUE5QixVQUNFLEtBQWEsRUFDYixPQUFlOzs7Ozs7d0JBRVQsaUJBQWlCLEdBQUcsSUFBSSxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7d0JBQzFELFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRTs0QkFDekQsUUFBUSxFQUFFLFFBQVE7NEJBQ2xCLFFBQVEsRUFBRSxLQUFLO3lCQUNoQixDQUFDLENBQUM7d0JBQ0gsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQzt3QkFDaEIscUJBQU0sU0FBUyxDQUFDLE1BQU0sRUFBQTs7d0JBQTNELE1BQU0sR0FBK0IsU0FBc0I7d0JBQ2pFLHNCQUFPLE1BQU0sRUFBQzs7OztLQUNmOztnQkFkMEIsUUFBUTs7O0lBRHhCLG9CQUFvQjtRQUhoQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csb0JBQW9CLENBZ0JoQzsrQkEzQkQ7Q0EyQkMsQUFoQkQsSUFnQkM7U0FoQlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOZ2JNb2RhbCB9IGZyb20gXCJAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcFwiO1xuaW1wb3J0IHsgQ29uZmlybURpYWxvZ0NvbXBvbmVudCB9IGZyb20gXCIuL2NvbmZpcm0tZGlhbG9nL2NvbmZpcm0tZGlhbG9nLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ29uZmlybURpYWxvZ0RhdGEgfSBmcm9tIFwiLi9jb25maXJtLWRpYWxvZy9fbW9kZWxzL2NvbmZpcm0tZGlhbG9nLWRhdGEubW9kZWxcIjtcbmltcG9ydCB7IERpYWxvZ1Jlc3VsdCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZGlhbG9nL2RpYWxvZy1yZXN1bHQubW9kZWxcIjtcbmltcG9ydCB7IElDb25maXJtRGlhbG9nU2VydmljZSB9IGZyb20gXCIuL19pbnRlcmZhY2VzL2NvbmZpcm0tZGlhbG9nLXNlcnZpY2UuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBEaWFsb2dCdXR0b24gfSBmcm9tIFwiLi4vLi4vZW51bXMvZGlhbG9nLWJ1dHRvbi5lbnVtXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCIsXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1EaWFsb2dTZXJ2aWNlIGltcGxlbWVudHMgSUNvbmZpcm1EaWFsb2dTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTmdiTW9kYWwpIHt9XG5cbiAgcHVibGljIGFzeW5jIG9wZW5Db25maXJtRGlhbG9nKFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogc3RyaW5nXG4gICk6IFByb21pc2U8RGlhbG9nUmVzdWx0PERpYWxvZ0J1dHRvbj4+IHtcbiAgICBjb25zdCBjb25maXJtRGlhbG9nRGF0YSA9IG5ldyBDb25maXJtRGlhbG9nRGF0YSh0aXRsZSwgbWVzc2FnZSk7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtRGlhbG9nQ29tcG9uZW50LCB7XG4gICAgICBiYWNrZHJvcDogXCJzdGF0aWNcIixcbiAgICAgIGtleWJvYXJkOiBmYWxzZSxcbiAgICB9KTtcbiAgICBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UuZGlhbG9nRGF0YSA9IGNvbmZpcm1EaWFsb2dEYXRhO1xuICAgIGNvbnN0IHJlc3VsdDogRGlhbG9nUmVzdWx0PERpYWxvZ0J1dHRvbj4gPSBhd2FpdCBkaWFsb2dSZWYucmVzdWx0O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdfQ==
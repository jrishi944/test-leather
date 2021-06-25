import { __awaiter, __decorate, __extends, __generator } from "tslib";
import { Injectable } from '@angular/core';
import { ConfirmDialogService } from '../confirm-dialog.service';
import { DialogResult } from '../../../models/dialog/dialog-result.model';
import { DialogButton } from '../../../enums/dialog-button.enum';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
/**
 * A service to mock the confirm dialog service
 */
var MockConfirmDialogService = /** @class */ (function (_super) {
    __extends(MockConfirmDialogService, _super);
    /**
     * @param dialog - A reference to the NgbModal service
     */
    function MockConfirmDialogService(dialog) {
        return _super.call(this, dialog) || this;
    }
    /**
     * Display a confirm dialog
     * @param title - The title of the confirm dialog
     * @param message - The message to display in the confirm dialog
     */
    MockConfirmDialogService.prototype.openConfirmDialog = function (title, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('Using mock confirm dialog service.');
                return [2 /*return*/, Promise.resolve(new DialogResult(DialogButton.OK))];
            });
        });
    };
    MockConfirmDialogService.ctorParameters = function () { return [
        { type: NgbModal }
    ]; };
    MockConfirmDialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MockConfirmDialogService_Factory() { return new MockConfirmDialogService(i0.ɵɵinject(i1.NgbModal)); }, token: MockConfirmDialogService, providedIn: "root" });
    MockConfirmDialogService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], MockConfirmDialogService);
    return MockConfirmDialogService;
}(ConfirmDialogService));
export { MockConfirmDialogService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cubW9jay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGVhdGhlcm1hbi1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvZGlhbG9ncy9jb25maXJtL19tb2NrL2NvbmZpcm0tZGlhbG9nLm1vY2suc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7O0FBRXREOztHQUVHO0FBSUg7SUFBOEMsNENBQW9CO0lBQ2hFOztPQUVHO0lBQ0gsa0NBQVksTUFBZ0I7ZUFDMUIsa0JBQU0sTUFBTSxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7O09BSUc7SUFDVSxvREFBaUIsR0FBOUIsVUFDRSxLQUFhLEVBQ2IsT0FBZTs7O2dCQUVmLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQztnQkFDbEQsc0JBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFlBQVksQ0FBZSxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQzs7O0tBQ3pFOztnQkFmbUIsUUFBUTs7O0lBSmpCLHdCQUF3QjtRQUhwQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csd0JBQXdCLENBb0JwQzttQ0FoQ0Q7Q0FnQ0MsQUFwQkQsQ0FBOEMsb0JBQW9CLEdBb0JqRTtTQXBCWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maXJtRGlhbG9nU2VydmljZSB9IGZyb20gJy4uL2NvbmZpcm0tZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGlhbG9nUmVzdWx0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2RpYWxvZy9kaWFsb2ctcmVzdWx0Lm1vZGVsJztcbmltcG9ydCB7IERpYWxvZ0J1dHRvbiB9IGZyb20gJy4uLy4uLy4uL2VudW1zL2RpYWxvZy1idXR0b24uZW51bSc7XG5pbXBvcnQgeyBOZ2JNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuLyoqXG4gKiBBIHNlcnZpY2UgdG8gbW9jayB0aGUgY29uZmlybSBkaWFsb2cgc2VydmljZVxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNb2NrQ29uZmlybURpYWxvZ1NlcnZpY2UgZXh0ZW5kcyBDb25maXJtRGlhbG9nU2VydmljZSB7XG4gIC8qKlxuICAgKiBAcGFyYW0gZGlhbG9nIC0gQSByZWZlcmVuY2UgdG8gdGhlIE5nYk1vZGFsIHNlcnZpY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKGRpYWxvZzogTmdiTW9kYWwpIHsgXG4gICAgc3VwZXIoZGlhbG9nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5IGEgY29uZmlybSBkaWFsb2dcbiAgICogQHBhcmFtIHRpdGxlIC0gVGhlIHRpdGxlIG9mIHRoZSBjb25maXJtIGRpYWxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSBtZXNzYWdlIHRvIGRpc3BsYXkgaW4gdGhlIGNvbmZpcm0gZGlhbG9nXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgb3BlbkNvbmZpcm1EaWFsb2coXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBtZXNzYWdlOiBzdHJpbmdcbiAgKTogUHJvbWlzZTxEaWFsb2dSZXN1bHQ8RGlhbG9nQnV0dG9uPj4ge1xuICAgIGNvbnNvbGUubG9nKCdVc2luZyBtb2NrIGNvbmZpcm0gZGlhbG9nIHNlcnZpY2UuJyk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgRGlhbG9nUmVzdWx0PERpYWxvZ0J1dHRvbj4oRGlhbG9nQnV0dG9uLk9LKSk7XG4gIH1cbn1cbiJdfQ==
import { __awaiter, __decorate, __extends, __generator } from "tslib";
import { Injectable } from '@angular/core';
import { ErrorDialogService } from '../error-dialog.service';
import { DialogResult } from '../../../models/dialog/dialog-result.model';
import { DialogButton } from '../../../enums/dialog-button.enum';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
/**
 * A service to mock the confirm dialog service
 */
var MockErrorDialogService = /** @class */ (function (_super) {
    __extends(MockErrorDialogService, _super);
    function MockErrorDialogService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Open an error dialog
     * @param title - The title of the error dialog
     * @param message - The message to display to the user
     */
    MockErrorDialogService.prototype.openErrorDialog = function (title, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('Using mock error dialog service.');
                console.log('Title: ' + title);
                console.log('Title: ' + message);
                return [2 /*return*/, Promise.resolve(new DialogResult(DialogButton.OK))];
            });
        });
    };
    MockErrorDialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MockErrorDialogService_Factory() { return new MockErrorDialogService(i0.ɵɵinject(i1.NgbModal)); }, token: MockErrorDialogService, providedIn: "root" });
    MockErrorDialogService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], MockErrorDialogService);
    return MockErrorDialogService;
}(ErrorDialogService));
export { MockErrorDialogService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItZGlhbG9nLm1vY2suc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZ3MvZXJyb3IvX21vY2svZXJyb3ItZGlhbG9nLm1vY2suc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7QUFFakU7O0dBRUc7QUFJSDtJQUE0QywwQ0FBa0I7SUFBOUQ7O0tBZUM7SUFkQzs7OztPQUlHO0lBQ1UsZ0RBQWUsR0FBNUIsVUFDRSxLQUFhLEVBQ2IsT0FBZTs7O2dCQUVmLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztnQkFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxDQUFDO2dCQUNqQyxzQkFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksWUFBWSxDQUFPLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDOzs7S0FDakU7O0lBZFUsc0JBQXNCO1FBSGxDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxzQkFBc0IsQ0FlbEM7aUNBMUJEO0NBMEJDLEFBZkQsQ0FBNEMsa0JBQWtCLEdBZTdEO1NBZlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXJyb3JEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vZXJyb3ItZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGlhbG9nUmVzdWx0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2RpYWxvZy9kaWFsb2ctcmVzdWx0Lm1vZGVsJztcbmltcG9ydCB7IERpYWxvZ0J1dHRvbiB9IGZyb20gJy4uLy4uLy4uL2VudW1zL2RpYWxvZy1idXR0b24uZW51bSc7XG5cbi8qKlxuICogQSBzZXJ2aWNlIHRvIG1vY2sgdGhlIGNvbmZpcm0gZGlhbG9nIHNlcnZpY2VcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTW9ja0Vycm9yRGlhbG9nU2VydmljZSBleHRlbmRzIEVycm9yRGlhbG9nU2VydmljZSB7XG4gIC8qKlxuICAgKiBPcGVuIGFuIGVycm9yIGRpYWxvZ1xuICAgKiBAcGFyYW0gdGl0bGUgLSBUaGUgdGl0bGUgb2YgdGhlIGVycm9yIGRpYWxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSBtZXNzYWdlIHRvIGRpc3BsYXkgdG8gdGhlIHVzZXJcbiAgICovXG4gIHB1YmxpYyBhc3luYyBvcGVuRXJyb3JEaWFsb2coXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBtZXNzYWdlOiBzdHJpbmdcbiAgKTogUHJvbWlzZTxEaWFsb2dSZXN1bHQ8bnVsbD4+IHtcbiAgICBjb25zb2xlLmxvZygnVXNpbmcgbW9jayBlcnJvciBkaWFsb2cgc2VydmljZS4nKTtcbiAgICBjb25zb2xlLmxvZygnVGl0bGU6ICcgKyB0aXRsZSk7XG4gICAgY29uc29sZS5sb2coJ1RpdGxlOiAnICsgbWVzc2FnZSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgRGlhbG9nUmVzdWx0PG51bGw+KERpYWxvZ0J1dHRvbi5PSykpO1xuICB9XG59XG4iXX0=
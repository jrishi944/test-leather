import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ErrorDialogService } from '../error-dialog.service';
import { DialogResult } from '../../../models/dialog/dialog-result.model';
import { DialogButton } from '../../../enums/dialog-button.enum';
import * as i0 from "@angular/core";
import * as i1 from "@ng-bootstrap/ng-bootstrap";
/**
 * A service to mock the confirm dialog service
 */
let MockErrorDialogService = class MockErrorDialogService extends ErrorDialogService {
    /**
     * Open an error dialog
     * @param title - The title of the error dialog
     * @param message - The message to display to the user
     */
    openErrorDialog(title, message) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Using mock error dialog service.');
            console.log('Title: ' + title);
            console.log('Title: ' + message);
            return Promise.resolve(new DialogResult(DialogButton.OK));
        });
    }
};
MockErrorDialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MockErrorDialogService_Factory() { return new MockErrorDialogService(i0.ɵɵinject(i1.NgbModal)); }, token: MockErrorDialogService, providedIn: "root" });
MockErrorDialogService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MockErrorDialogService);
export { MockErrorDialogService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItZGlhbG9nLm1vY2suc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL2RpYWxvZ3MvZXJyb3IvX21vY2svZXJyb3ItZGlhbG9nLm1vY2suc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7QUFFakU7O0dBRUc7QUFJSCxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUF1QixTQUFRLGtCQUFrQjtJQUM1RDs7OztPQUlHO0lBQ1UsZUFBZSxDQUMxQixLQUFhLEVBQ2IsT0FBZTs7WUFFZixPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7WUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUM7WUFDakMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksWUFBWSxDQUFPLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7S0FBQTtDQUNGLENBQUE7O0FBZlksc0JBQXNCO0lBSGxDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxzQkFBc0IsQ0FlbEM7U0FmWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFcnJvckRpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLi9lcnJvci1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBEaWFsb2dSZXN1bHQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvZGlhbG9nL2RpYWxvZy1yZXN1bHQubW9kZWwnO1xuaW1wb3J0IHsgRGlhbG9nQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vZW51bXMvZGlhbG9nLWJ1dHRvbi5lbnVtJztcblxuLyoqXG4gKiBBIHNlcnZpY2UgdG8gbW9jayB0aGUgY29uZmlybSBkaWFsb2cgc2VydmljZVxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNb2NrRXJyb3JEaWFsb2dTZXJ2aWNlIGV4dGVuZHMgRXJyb3JEaWFsb2dTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIE9wZW4gYW4gZXJyb3IgZGlhbG9nXG4gICAqIEBwYXJhbSB0aXRsZSAtIFRoZSB0aXRsZSBvZiB0aGUgZXJyb3IgZGlhbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIC0gVGhlIG1lc3NhZ2UgdG8gZGlzcGxheSB0byB0aGUgdXNlclxuICAgKi9cbiAgcHVibGljIGFzeW5jIG9wZW5FcnJvckRpYWxvZyhcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIG1lc3NhZ2U6IHN0cmluZ1xuICApOiBQcm9taXNlPERpYWxvZ1Jlc3VsdDxudWxsPj4ge1xuICAgIGNvbnNvbGUubG9nKCdVc2luZyBtb2NrIGVycm9yIGRpYWxvZyBzZXJ2aWNlLicpO1xuICAgIGNvbnNvbGUubG9nKCdUaXRsZTogJyArIHRpdGxlKTtcbiAgICBjb25zb2xlLmxvZygnVGl0bGU6ICcgKyBtZXNzYWdlKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBEaWFsb2dSZXN1bHQ8bnVsbD4oRGlhbG9nQnV0dG9uLk9LKSk7XG4gIH1cbn1cbiJdfQ==
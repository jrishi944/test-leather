import { __awaiter, __decorate } from "tslib";
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
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@ng-bootstrap/ng-bootstrap';
let MockConfirmDialogService = class MockConfirmDialogService extends ConfirmDialogService {
    /**
     * @param dialog - A reference to the NgbModal service
     */
    constructor(dialog) {
        super(dialog);
    }
    /**
     * Display a confirm dialog
     * @param title - The title of the confirm dialog
     * @param message - The message to display in the confirm dialog
     */
    openConfirmDialog(title, message) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Using mock confirm dialog service.');
            return Promise.resolve(new DialogResult(DialogButton.OK));
        });
    }
};
MockConfirmDialogService.ɵfac = function MockConfirmDialogService_Factory(t) { return new (t || MockConfirmDialogService)(ɵngcc0.ɵɵinject(ɵngcc1.NgbModal)); };
MockConfirmDialogService.ctorParameters = () => [
    { type: NgbModal }
];
MockConfirmDialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MockConfirmDialogService_Factory() { return new MockConfirmDialogService(i0.ɵɵinject(i1.NgbModal)); }, token: MockConfirmDialogService, providedIn: "root" });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MockConfirmDialogService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc1.NgbModal }]; }, null); })();
export { MockConfirmDialogService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cubW9jay5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyJuZzovbGVhdGhlcm1hbi1ib290c3RyYXAvbGliL2RpYWxvZ3MvY29uZmlybS9fbW9jay9jb25maXJtLWRpYWxvZy5tb2NrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEQ7QUFFZ0M7QUFEaEM7QUFDQTtBQUNBLEdBQUc7OztBQUlILElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXlCLFNBQVEsb0JBQW9CO0FBQ2xFLElBQUU7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFFLFlBQVksTUFBZ0I7QUFBSSxRQUM5QixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbEIsSUFBRSxDQUFDO0FBQ0gsSUFDRTtBQUNGO0FBQ0U7QUFDRTtBQUVKLE9BREs7QUFDTCxJQUFlLGlCQUFpQixDQUM1QixLQUFhLEVBQ2IsT0FBZTtBQUNoQjtBQUNtQixZQUFsQixPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7QUFDdEQsWUFBSSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxZQUFZLENBQWUsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUUsUUFBRSxDQUFDO0FBRUgsS0FGRztBQUNILENBQUM7K0pBQUE7QUFDRDtBQUFrRCxZQWpCNUIsUUFBUTtBQUFHO0FBQ2hDO0FBTFksd0JBQXdCLG9CQUhwQyxVQUFVLENBQUMsVUFDVixVQUFVLEVBQUU7QUFBTSxNQUNuQixDQUFDLElBQ1c7U0FBd0IsQ0FvQnBDOzs7eUVBQ0Q7QUFBQyxTQXJCWSx3QkFBd0I7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpcm1EaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlybS1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBEaWFsb2dSZXN1bHQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvZGlhbG9nL2RpYWxvZy1yZXN1bHQubW9kZWwnO1xuaW1wb3J0IHsgRGlhbG9nQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vZW51bXMvZGlhbG9nLWJ1dHRvbi5lbnVtJztcbmltcG9ydCB7IE5nYk1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG4vKipcbiAqIEEgc2VydmljZSB0byBtb2NrIHRoZSBjb25maXJtIGRpYWxvZyBzZXJ2aWNlXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1vY2tDb25maXJtRGlhbG9nU2VydmljZSBleHRlbmRzIENvbmZpcm1EaWFsb2dTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIEBwYXJhbSBkaWFsb2cgLSBBIHJlZmVyZW5jZSB0byB0aGUgTmdiTW9kYWwgc2VydmljZVxuICAgKi9cbiAgY29uc3RydWN0b3IoZGlhbG9nOiBOZ2JNb2RhbCkgeyBcbiAgICBzdXBlcihkaWFsb2cpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXkgYSBjb25maXJtIGRpYWxvZ1xuICAgKiBAcGFyYW0gdGl0bGUgLSBUaGUgdGl0bGUgb2YgdGhlIGNvbmZpcm0gZGlhbG9nXG4gICAqIEBwYXJhbSBtZXNzYWdlIC0gVGhlIG1lc3NhZ2UgdG8gZGlzcGxheSBpbiB0aGUgY29uZmlybSBkaWFsb2dcbiAgICovXG4gIHB1YmxpYyBhc3luYyBvcGVuQ29uZmlybURpYWxvZyhcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIG1lc3NhZ2U6IHN0cmluZ1xuICApOiBQcm9taXNlPERpYWxvZ1Jlc3VsdDxEaWFsb2dCdXR0b24+PiB7XG4gICAgY29uc29sZS5sb2coJ1VzaW5nIG1vY2sgY29uZmlybSBkaWFsb2cgc2VydmljZS4nKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBEaWFsb2dSZXN1bHQ8RGlhbG9nQnV0dG9uPihEaWFsb2dCdXR0b24uT0spKTtcbiAgfVxufVxuIl19
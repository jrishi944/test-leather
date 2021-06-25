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
import * as ɵngcc0 from '@angular/core';
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
MockErrorDialogService.ɵfac = function MockErrorDialogService_Factory(t) { return ɵMockErrorDialogService_BaseFactory(t || MockErrorDialogService); };
MockErrorDialogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MockErrorDialogService_Factory() { return new MockErrorDialogService(i0.ɵɵinject(i1.NgbModal)); }, token: MockErrorDialogService, providedIn: "root" });
const ɵMockErrorDialogService_BaseFactory = ɵngcc0.ɵɵgetInheritedFactory(MockErrorDialogService);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MockErrorDialogService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
export { MockErrorDialogService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItZGlhbG9nLm1vY2suc2VydmljZS5qcyIsInNvdXJjZXMiOlsibmc6L2xlYXRoZXJtYW4tYm9vdHN0cmFwL2xpYi9kaWFsb2dzL2Vycm9yL19tb2NrL2Vycm9yLWRpYWxvZy5tb2NrLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRTtBQUVnQztBQURoQztBQUNBO0FBQ0EsR0FBRzs7QUFJSCxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUF1QixTQUFRLGtCQUFrQjtBQUM5RCxJQUFFO0FBQ0Y7QUFDRTtBQUNFO0FBRUosT0FESztBQUNMLElBQWUsZUFBZSxDQUMxQixLQUFhLEVBQ2IsT0FBZTtBQUNoQjtBQUMyQixZQUExQixPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFDcEQsWUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUNuQyxZQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBQ3JDLFlBQUksT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksWUFBWSxDQUFPLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3BFLFFBQUUsQ0FBQztBQUVILEtBRkc7QUFDSCxDQUFDO3NKQUFBO0FBQ0Q7QUFoQmEsc0JBQXNCLG9CQUhsQyxVQUFVLENBQUMsVUFDVixVQUFVLEVBQUUsTUFBTSxNQUNuQixDQUFDLElBQ1c7Z0JBQXNCLENBZWxDOzs7OzswQkFDRDtBQUFDLFNBaEJZLHNCQUFzQjtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXJyb3JEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vZXJyb3ItZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGlhbG9nUmVzdWx0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2RpYWxvZy9kaWFsb2ctcmVzdWx0Lm1vZGVsJztcbmltcG9ydCB7IERpYWxvZ0J1dHRvbiB9IGZyb20gJy4uLy4uLy4uL2VudW1zL2RpYWxvZy1idXR0b24uZW51bSc7XG5cbi8qKlxuICogQSBzZXJ2aWNlIHRvIG1vY2sgdGhlIGNvbmZpcm0gZGlhbG9nIHNlcnZpY2VcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTW9ja0Vycm9yRGlhbG9nU2VydmljZSBleHRlbmRzIEVycm9yRGlhbG9nU2VydmljZSB7XG4gIC8qKlxuICAgKiBPcGVuIGFuIGVycm9yIGRpYWxvZ1xuICAgKiBAcGFyYW0gdGl0bGUgLSBUaGUgdGl0bGUgb2YgdGhlIGVycm9yIGRpYWxvZ1xuICAgKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSBtZXNzYWdlIHRvIGRpc3BsYXkgdG8gdGhlIHVzZXJcbiAgICovXG4gIHB1YmxpYyBhc3luYyBvcGVuRXJyb3JEaWFsb2coXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBtZXNzYWdlOiBzdHJpbmdcbiAgKTogUHJvbWlzZTxEaWFsb2dSZXN1bHQ8bnVsbD4+IHtcbiAgICBjb25zb2xlLmxvZygnVXNpbmcgbW9jayBlcnJvciBkaWFsb2cgc2VydmljZS4nKTtcbiAgICBjb25zb2xlLmxvZygnVGl0bGU6ICcgKyB0aXRsZSk7XG4gICAgY29uc29sZS5sb2coJ1RpdGxlOiAnICsgbWVzc2FnZSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgRGlhbG9nUmVzdWx0PG51bGw+KERpYWxvZ0J1dHRvbi5PSykpO1xuICB9XG59XG4iXX0=
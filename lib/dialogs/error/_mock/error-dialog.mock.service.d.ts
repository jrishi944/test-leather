import { ErrorDialogService } from '../error-dialog.service';
import { DialogResult } from '../../../models/dialog/dialog-result.model';
/**
 * A service to mock the confirm dialog service
 */
import * as ɵngcc0 from '@angular/core';
export declare class MockErrorDialogService extends ErrorDialogService {
    /**
     * Open an error dialog
     * @param title - The title of the error dialog
     * @param message - The message to display to the user
     */
    openErrorDialog(title: string, message: string): Promise<DialogResult<null>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MockErrorDialogService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItZGlhbG9nLm1vY2suc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJlcnJvci1kaWFsb2cubW9jay5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVycm9yRGlhbG9nU2VydmljZSB9IGZyb20gJy4uL2Vycm9yLWRpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IERpYWxvZ1Jlc3VsdCB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9kaWFsb2cvZGlhbG9nLXJlc3VsdC5tb2RlbCc7XG4vKipcbiAqIEEgc2VydmljZSB0byBtb2NrIHRoZSBjb25maXJtIGRpYWxvZyBzZXJ2aWNlXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE1vY2tFcnJvckRpYWxvZ1NlcnZpY2UgZXh0ZW5kcyBFcnJvckRpYWxvZ1NlcnZpY2Uge1xuICAgIC8qKlxuICAgICAqIE9wZW4gYW4gZXJyb3IgZGlhbG9nXG4gICAgICogQHBhcmFtIHRpdGxlIC0gVGhlIHRpdGxlIG9mIHRoZSBlcnJvciBkaWFsb2dcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSBtZXNzYWdlIHRvIGRpc3BsYXkgdG8gdGhlIHVzZXJcbiAgICAgKi9cbiAgICBvcGVuRXJyb3JEaWFsb2codGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxEaWFsb2dSZXN1bHQ8bnVsbD4+O1xufVxuIl19
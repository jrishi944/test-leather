import { DialogResult } from '../../models/dialog/dialog-result.model';
import { IErrorDialogService } from './_interfaces/error-dialog-service.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
/**
 *  A service to manage and display error dialogs
 */
import * as ɵngcc0 from '@angular/core';
export declare class ErrorDialogService implements IErrorDialogService {
    dialog: NgbModal;
    constructor(dialog: NgbModal);
    /**
     * Open an error dialog
     * @param title - The title of the error dialog
     * @param message - The message to display to the user
     */
    openErrorDialog(title: string, message: string): Promise<DialogResult<null>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ErrorDialogService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItZGlhbG9nLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiZXJyb3ItZGlhbG9nLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlhbG9nUmVzdWx0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2RpYWxvZy9kaWFsb2ctcmVzdWx0Lm1vZGVsJztcbmltcG9ydCB7IElFcnJvckRpYWxvZ1NlcnZpY2UgfSBmcm9tICcuL19pbnRlcmZhY2VzL2Vycm9yLWRpYWxvZy1zZXJ2aWNlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbi8qKlxuICogIEEgc2VydmljZSB0byBtYW5hZ2UgYW5kIGRpc3BsYXkgZXJyb3IgZGlhbG9nc1xuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBFcnJvckRpYWxvZ1NlcnZpY2UgaW1wbGVtZW50cyBJRXJyb3JEaWFsb2dTZXJ2aWNlIHtcbiAgICBkaWFsb2c6IE5nYk1vZGFsO1xuICAgIGNvbnN0cnVjdG9yKGRpYWxvZzogTmdiTW9kYWwpO1xuICAgIC8qKlxuICAgICAqIE9wZW4gYW4gZXJyb3IgZGlhbG9nXG4gICAgICogQHBhcmFtIHRpdGxlIC0gVGhlIHRpdGxlIG9mIHRoZSBlcnJvciBkaWFsb2dcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSBtZXNzYWdlIHRvIGRpc3BsYXkgdG8gdGhlIHVzZXJcbiAgICAgKi9cbiAgICBvcGVuRXJyb3JEaWFsb2codGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxEaWFsb2dSZXN1bHQ8bnVsbD4+O1xufVxuIl19
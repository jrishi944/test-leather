import { ConfirmDialogService } from '../confirm-dialog.service';
import { DialogResult } from '../../../models/dialog/dialog-result.model';
import { DialogButton } from '../../../enums/dialog-button.enum';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * A service to mock the confirm dialog service
 */
import * as ɵngcc0 from '@angular/core';
export declare class MockConfirmDialogService extends ConfirmDialogService {
    /**
     * @param dialog - A reference to the NgbModal service
     */
    constructor(dialog: NgbModal);
    /**
     * Display a confirm dialog
     * @param title - The title of the confirm dialog
     * @param message - The message to display in the confirm dialog
     */
    openConfirmDialog(title: string, message: string): Promise<DialogResult<DialogButton>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MockConfirmDialogService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cubW9jay5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImNvbmZpcm0tZGlhbG9nLm1vY2suc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maXJtRGlhbG9nU2VydmljZSB9IGZyb20gJy4uL2NvbmZpcm0tZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGlhbG9nUmVzdWx0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2RpYWxvZy9kaWFsb2ctcmVzdWx0Lm1vZGVsJztcbmltcG9ydCB7IERpYWxvZ0J1dHRvbiB9IGZyb20gJy4uLy4uLy4uL2VudW1zL2RpYWxvZy1idXR0b24uZW51bSc7XG5pbXBvcnQgeyBOZ2JNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbi8qKlxuICogQSBzZXJ2aWNlIHRvIG1vY2sgdGhlIGNvbmZpcm0gZGlhbG9nIHNlcnZpY2VcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTW9ja0NvbmZpcm1EaWFsb2dTZXJ2aWNlIGV4dGVuZHMgQ29uZmlybURpYWxvZ1NlcnZpY2Uge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBkaWFsb2cgLSBBIHJlZmVyZW5jZSB0byB0aGUgTmdiTW9kYWwgc2VydmljZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRpYWxvZzogTmdiTW9kYWwpO1xuICAgIC8qKlxuICAgICAqIERpc3BsYXkgYSBjb25maXJtIGRpYWxvZ1xuICAgICAqIEBwYXJhbSB0aXRsZSAtIFRoZSB0aXRsZSBvZiB0aGUgY29uZmlybSBkaWFsb2dcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSAtIFRoZSBtZXNzYWdlIHRvIGRpc3BsYXkgaW4gdGhlIGNvbmZpcm0gZGlhbG9nXG4gICAgICovXG4gICAgb3BlbkNvbmZpcm1EaWFsb2codGl0bGU6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxEaWFsb2dSZXN1bHQ8RGlhbG9nQnV0dG9uPj47XG59XG4iXX0=
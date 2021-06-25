import { DialogResult } from '../../models/dialog/dialog-result.model';
import { IErrorDialogService } from './_interfaces/error-dialog-service.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
/**
 *  A service to manage and display error dialogs
 */
export declare class ErrorDialogService implements IErrorDialogService {
    dialog: NgbModal;
    constructor(dialog: NgbModal);
    /**
     * Open an error dialog
     * @param title - The title of the error dialog
     * @param message - The message to display to the user
     */
    openErrorDialog(title: string, message: string): Promise<DialogResult<null>>;
}

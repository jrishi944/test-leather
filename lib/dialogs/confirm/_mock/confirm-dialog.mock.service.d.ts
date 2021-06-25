import { ConfirmDialogService } from '../confirm-dialog.service';
import { DialogResult } from '../../../models/dialog/dialog-result.model';
import { DialogButton } from '../../../enums/dialog-button.enum';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * A service to mock the confirm dialog service
 */
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
}

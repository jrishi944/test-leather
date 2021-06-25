import { DialogResult } from "../../../models/dialog/dialog-result.model";
import { DialogButton } from "../../../enums/dialog-button.enum";
/**
 * An interface to define the methods required by the confirm dialog service and its mock service
 */
export interface IConfirmDialogService {
    /**
     * Open a confirm dialog
     * @param title - The title of the confirm dialog
     * @param message - The message to display to the user
     */
    openConfirmDialog(title: string, message: string): Promise<DialogResult<DialogButton>>;
}

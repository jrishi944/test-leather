import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DialogResult } from "../../models/dialog/dialog-result.model";
import { IConfirmDialogService } from "./_interfaces/confirm-dialog-service.interface";
import { DialogButton } from "../../enums/dialog-button.enum";
export declare class ConfirmDialogService implements IConfirmDialogService {
    dialog: NgbModal;
    constructor(dialog: NgbModal);
    openConfirmDialog(title: string, message: string): Promise<DialogResult<DialogButton>>;
}

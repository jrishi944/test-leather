import { ErrorDialogData } from './_models/error-dialog-data.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * A dialog component to display an error message
 */
export declare class ErrorDialogComponent {
    activeModal: NgbActiveModal;
    /** The title of the error dialog */
    title: string;
    /** The dialog error message */
    message: string;
    data: ErrorDialogData;
    /**
     * @param activeModal - A reference to the dialog
     */
    constructor(activeModal: NgbActiveModal);
    ngOnInit(): void;
    /**
     * Method called when the dialog is cancelled
     */
    onClose(): void;
}

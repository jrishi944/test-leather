import { OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogData } from './_models/confirm-dialog-data.model';
/**
 * A dialog component to prompt the user for a YES/NO answer
 */
export declare class ConfirmDialogComponent implements OnInit {
    activeModal: NgbActiveModal;
    dialogData: ConfirmDialogData;
    constructor(activeModal: NgbActiveModal);
    ngOnInit(): void;
    onCancel(): void;
    onConfirm(): void;
}

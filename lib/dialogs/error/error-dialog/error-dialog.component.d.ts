import { ErrorDialogData } from './_models/error-dialog-data.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
/**
 * A dialog component to display an error message
 */
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ErrorDialogComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ErrorDialogComponent, "lm-error-dialog", never, { "data": "data"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItZGlhbG9nLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJlcnJvci1kaWFsb2cuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFcnJvckRpYWxvZ0RhdGEgfSBmcm9tICcuL19tb2RlbHMvZXJyb3ItZGlhbG9nLWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG4vKipcbiAqIEEgZGlhbG9nIGNvbXBvbmVudCB0byBkaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2VcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRXJyb3JEaWFsb2dDb21wb25lbnQge1xuICAgIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbDtcbiAgICAvKiogVGhlIHRpdGxlIG9mIHRoZSBlcnJvciBkaWFsb2cgKi9cbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIC8qKiBUaGUgZGlhbG9nIGVycm9yIG1lc3NhZ2UgKi9cbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgZGF0YTogRXJyb3JEaWFsb2dEYXRhO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBhY3RpdmVNb2RhbCAtIEEgcmVmZXJlbmNlIHRvIHRoZSBkaWFsb2dcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogTWV0aG9kIGNhbGxlZCB3aGVuIHRoZSBkaWFsb2cgaXMgY2FuY2VsbGVkXG4gICAgICovXG4gICAgb25DbG9zZSgpOiB2b2lkO1xufVxuIl19
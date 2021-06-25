import { OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogData } from './_models/confirm-dialog-data.model';
/**
 * A dialog component to prompt the user for a YES/NO answer
 */
import * as ɵngcc0 from '@angular/core';
export declare class ConfirmDialogComponent implements OnInit {
    activeModal: NgbActiveModal;
    dialogData: ConfirmDialogData;
    constructor(activeModal: NgbActiveModal);
    ngOnInit(): void;
    onCancel(): void;
    onConfirm(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConfirmDialogComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ConfirmDialogComponent, "lm-confirm-dialog", never, { "dialogData": "dialogData"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgQ29uZmlybURpYWxvZ0RhdGEgfSBmcm9tICcuL19tb2RlbHMvY29uZmlybS1kaWFsb2ctZGF0YS5tb2RlbCc7XG4vKipcbiAqIEEgZGlhbG9nIGNvbXBvbmVudCB0byBwcm9tcHQgdGhlIHVzZXIgZm9yIGEgWUVTL05PIGFuc3dlclxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDb25maXJtRGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWw7XG4gICAgZGlhbG9nRGF0YTogQ29uZmlybURpYWxvZ0RhdGE7XG4gICAgY29uc3RydWN0b3IoYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG9uQ2FuY2VsKCk6IHZvaWQ7XG4gICAgb25Db25maXJtKCk6IHZvaWQ7XG59XG4iXX0=
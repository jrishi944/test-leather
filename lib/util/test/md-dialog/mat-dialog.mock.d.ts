import { DialogResult } from '../../../models/dialog/dialog-result.model';
export declare class MatDialogMock {
    dialogResult: DialogResult<unknown>;
    open(): {
        afterClosed: () => import("rxjs").Observable<DialogResult<unknown>>;
    };
}

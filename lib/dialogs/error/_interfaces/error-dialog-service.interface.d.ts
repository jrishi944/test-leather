import { DialogResult } from '../../../models/dialog/dialog-result.model';
export interface IErrorDialogService {
    openErrorDialog(title: string, message: string): Promise<DialogResult<null>>;
}

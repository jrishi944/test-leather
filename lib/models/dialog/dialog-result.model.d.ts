import { DialogButton } from '../../enums/dialog-button.enum';
/**
 * A class to store the results from a dialog
 */
export declare class DialogResult<T> {
    button: DialogButton;
    data?: T;
    data2?: any;
    data3?: any;
    /**
     * @param button - The clicked button
     * @param data - The data returned by the dialog
     * @param data2 - Additional data returned by the diaoig
     * @param data3 - Additional data returned by the dialog
     */
    constructor(button: DialogButton, data?: T, data2?: any, data3?: any);
}

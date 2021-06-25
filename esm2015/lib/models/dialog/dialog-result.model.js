/**
 * A class to store the results from a dialog
 */
export class DialogResult {
    /**
     * @param button - The clicked button
     * @param data - The data returned by the dialog
     * @param data2 - Additional data returned by the diaoig
     * @param data3 - Additional data returned by the dialog
     */
    constructor(button, data, data2, data3) {
        this.button = button;
        this.data = data;
        this.data2 = data2;
        this.data3 = data3;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLXJlc3VsdC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9kaWFsb2cvZGlhbG9nLXJlc3VsdC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7R0FFRztBQUNILE1BQU0sT0FBTyxZQUFZO0lBQ3ZCOzs7OztPQUtHO0lBQ0gsWUFDUyxNQUFvQixFQUNwQixJQUFRLEVBQ1IsS0FBVyxFQUNYLEtBQVc7UUFIWCxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQUk7UUFDUixVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQ1gsVUFBSyxHQUFMLEtBQUssQ0FBTTtJQUNqQixDQUFDO0NBQ0wiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaWFsb2dCdXR0b24gfSBmcm9tICcuLi8uLi9lbnVtcy9kaWFsb2ctYnV0dG9uLmVudW0nO1xuXG4vKipcbiAqIEEgY2xhc3MgdG8gc3RvcmUgdGhlIHJlc3VsdHMgZnJvbSBhIGRpYWxvZ1xuICovXG5leHBvcnQgY2xhc3MgRGlhbG9nUmVzdWx0PFQ+IHtcbiAgLyoqXG4gICAqIEBwYXJhbSBidXR0b24gLSBUaGUgY2xpY2tlZCBidXR0b25cbiAgICogQHBhcmFtIGRhdGEgLSBUaGUgZGF0YSByZXR1cm5lZCBieSB0aGUgZGlhbG9nXG4gICAqIEBwYXJhbSBkYXRhMiAtIEFkZGl0aW9uYWwgZGF0YSByZXR1cm5lZCBieSB0aGUgZGlhb2lnXG4gICAqIEBwYXJhbSBkYXRhMyAtIEFkZGl0aW9uYWwgZGF0YSByZXR1cm5lZCBieSB0aGUgZGlhbG9nXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYnV0dG9uOiBEaWFsb2dCdXR0b24sXG4gICAgcHVibGljIGRhdGE/OiBULFxuICAgIHB1YmxpYyBkYXRhMj86IGFueSxcbiAgICBwdWJsaWMgZGF0YTM/OiBhbnlcbiAgKSB7fVxufVxuIl19
import { Parameter } from './parameter.model';
/**
 * A class to store query parameters
 */
export class Parameters {
    constructor() {
        /** An array of parameters */
        this._parameters = [];
    }
    /** Get accessor for hasParameters */
    get hasParameters() {
        return this._parameters.length > 0 ? true : false;
    }
    /**
     * Add a parameter to the Parameters object
     * @param name - The name of the paramter to add
     * @param value - The value of the parameter to add
     */
    add(name, value) {
        this._parameters.push(new Parameter(name, value));
    }
    /**
     * Get the parameter string
     * @returns A parameter string
     */
    getParamterString() {
        let parameterString = '?';
        for (const parameter of this._parameters) {
            if (parameterString !== '?') {
                parameterString += '&';
            }
            parameterString += parameter.name + '=' + parameter.value;
        }
        return parameterString;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVycy5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2Jhc2UtZGF0YS9fbW9kZWxzL3BhcmFtZXRlcnMubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTlDOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFVBQVU7SUFBdkI7UUFNRSw2QkFBNkI7UUFDckIsZ0JBQVcsR0FBZ0IsRUFBRSxDQUFDO0lBeUJ4QyxDQUFDO0lBL0JDLHFDQUFxQztJQUNyQyxJQUFXLGFBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3BELENBQUM7SUFLRDs7OztPQUlHO0lBQ0ksR0FBRyxDQUFDLElBQVksRUFBRSxLQUFhO1FBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7O09BR0c7SUFDSSxpQkFBaUI7UUFDdEIsSUFBSSxlQUFlLEdBQUcsR0FBRyxDQUFDO1FBQzFCLEtBQUssTUFBTSxTQUFTLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN4QyxJQUFJLGVBQWUsS0FBSyxHQUFHLEVBQUU7Z0JBQzNCLGVBQWUsSUFBSSxHQUFHLENBQUM7YUFDeEI7WUFDRCxlQUFlLElBQUksU0FBUyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztTQUMzRDtRQUNELE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhcmFtZXRlciB9IGZyb20gJy4vcGFyYW1ldGVyLm1vZGVsJztcblxuLyoqXG4gKiBBIGNsYXNzIHRvIHN0b3JlIHF1ZXJ5IHBhcmFtZXRlcnNcbiAqL1xuZXhwb3J0IGNsYXNzIFBhcmFtZXRlcnMge1xuICAvKiogR2V0IGFjY2Vzc29yIGZvciBoYXNQYXJhbWV0ZXJzICovXG4gIHB1YmxpYyBnZXQgaGFzUGFyYW1ldGVycygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcGFyYW1ldGVycy5sZW5ndGggPiAwID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgLyoqIEFuIGFycmF5IG9mIHBhcmFtZXRlcnMgKi9cbiAgcHJpdmF0ZSBfcGFyYW1ldGVyczogUGFyYW1ldGVyW10gPSBbXTtcblxuICAvKipcbiAgICogQWRkIGEgcGFyYW1ldGVyIHRvIHRoZSBQYXJhbWV0ZXJzIG9iamVjdFxuICAgKiBAcGFyYW0gbmFtZSAtIFRoZSBuYW1lIG9mIHRoZSBwYXJhbXRlciB0byBhZGRcbiAgICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIG9mIHRoZSBwYXJhbWV0ZXIgdG8gYWRkXG4gICAqL1xuICBwdWJsaWMgYWRkKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BhcmFtZXRlcnMucHVzaChuZXcgUGFyYW1ldGVyKG5hbWUsIHZhbHVlKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBwYXJhbWV0ZXIgc3RyaW5nXG4gICAqIEByZXR1cm5zIEEgcGFyYW1ldGVyIHN0cmluZ1xuICAgKi9cbiAgcHVibGljIGdldFBhcmFtdGVyU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgbGV0IHBhcmFtZXRlclN0cmluZyA9ICc/JztcbiAgICBmb3IgKGNvbnN0IHBhcmFtZXRlciBvZiB0aGlzLl9wYXJhbWV0ZXJzKSB7XG4gICAgICBpZiAocGFyYW1ldGVyU3RyaW5nICE9PSAnPycpIHtcbiAgICAgICAgcGFyYW1ldGVyU3RyaW5nICs9ICcmJztcbiAgICAgIH1cbiAgICAgIHBhcmFtZXRlclN0cmluZyArPSBwYXJhbWV0ZXIubmFtZSArICc9JyArIHBhcmFtZXRlci52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtZXRlclN0cmluZztcbiAgfVxufVxuIl19
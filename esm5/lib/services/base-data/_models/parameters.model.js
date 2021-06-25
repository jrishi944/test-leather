import { __values } from "tslib";
import { Parameter } from './parameter.model';
/**
 * A class to store query parameters
 */
var Parameters = /** @class */ (function () {
    function Parameters() {
        /** An array of parameters */
        this._parameters = [];
    }
    Object.defineProperty(Parameters.prototype, "hasParameters", {
        /** Get accessor for hasParameters */
        get: function () {
            return this._parameters.length > 0 ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Add a parameter to the Parameters object
     * @param name - The name of the paramter to add
     * @param value - The value of the parameter to add
     */
    Parameters.prototype.add = function (name, value) {
        this._parameters.push(new Parameter(name, value));
    };
    /**
     * Get the parameter string
     * @returns A parameter string
     */
    Parameters.prototype.getParamterString = function () {
        var e_1, _a;
        var parameterString = '?';
        try {
            for (var _b = __values(this._parameters), _c = _b.next(); !_c.done; _c = _b.next()) {
                var parameter = _c.value;
                if (parameterString !== '?') {
                    parameterString += '&';
                }
                parameterString += parameter.name + '=' + parameter.value;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return parameterString;
    };
    return Parameters;
}());
export { Parameters };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVycy5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2Jhc2UtZGF0YS9fbW9kZWxzL3BhcmFtZXRlcnMubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUU5Qzs7R0FFRztBQUNIO0lBQUE7UUFNRSw2QkFBNkI7UUFDckIsZ0JBQVcsR0FBZ0IsRUFBRSxDQUFDO0lBeUJ4QyxDQUFDO0lBOUJDLHNCQUFXLHFDQUFhO1FBRHhCLHFDQUFxQzthQUNyQztZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNwRCxDQUFDOzs7T0FBQTtJQUtEOzs7O09BSUc7SUFDSSx3QkFBRyxHQUFWLFVBQVcsSUFBWSxFQUFFLEtBQWE7UUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHNDQUFpQixHQUF4Qjs7UUFDRSxJQUFJLGVBQWUsR0FBRyxHQUFHLENBQUM7O1lBQzFCLEtBQXdCLElBQUEsS0FBQSxTQUFBLElBQUksQ0FBQyxXQUFXLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQXJDLElBQU0sU0FBUyxXQUFBO2dCQUNsQixJQUFJLGVBQWUsS0FBSyxHQUFHLEVBQUU7b0JBQzNCLGVBQWUsSUFBSSxHQUFHLENBQUM7aUJBQ3hCO2dCQUNELGVBQWUsSUFBSSxTQUFTLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO2FBQzNEOzs7Ozs7Ozs7UUFDRCxPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBaENELElBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFyYW1ldGVyIH0gZnJvbSAnLi9wYXJhbWV0ZXIubW9kZWwnO1xuXG4vKipcbiAqIEEgY2xhc3MgdG8gc3RvcmUgcXVlcnkgcGFyYW1ldGVyc1xuICovXG5leHBvcnQgY2xhc3MgUGFyYW1ldGVycyB7XG4gIC8qKiBHZXQgYWNjZXNzb3IgZm9yIGhhc1BhcmFtZXRlcnMgKi9cbiAgcHVibGljIGdldCBoYXNQYXJhbWV0ZXJzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9wYXJhbWV0ZXJzLmxlbmd0aCA+IDAgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICAvKiogQW4gYXJyYXkgb2YgcGFyYW1ldGVycyAqL1xuICBwcml2YXRlIF9wYXJhbWV0ZXJzOiBQYXJhbWV0ZXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBBZGQgYSBwYXJhbWV0ZXIgdG8gdGhlIFBhcmFtZXRlcnMgb2JqZWN0XG4gICAqIEBwYXJhbSBuYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHBhcmFtdGVyIHRvIGFkZFxuICAgKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgb2YgdGhlIHBhcmFtZXRlciB0byBhZGRcbiAgICovXG4gIHB1YmxpYyBhZGQobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGFyYW1ldGVycy5wdXNoKG5ldyBQYXJhbWV0ZXIobmFtZSwgdmFsdWUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHBhcmFtZXRlciBzdHJpbmdcbiAgICogQHJldHVybnMgQSBwYXJhbWV0ZXIgc3RyaW5nXG4gICAqL1xuICBwdWJsaWMgZ2V0UGFyYW10ZXJTdHJpbmcoKTogc3RyaW5nIHtcbiAgICBsZXQgcGFyYW1ldGVyU3RyaW5nID0gJz8nO1xuICAgIGZvciAoY29uc3QgcGFyYW1ldGVyIG9mIHRoaXMuX3BhcmFtZXRlcnMpIHtcbiAgICAgIGlmIChwYXJhbWV0ZXJTdHJpbmcgIT09ICc/Jykge1xuICAgICAgICBwYXJhbWV0ZXJTdHJpbmcgKz0gJyYnO1xuICAgICAgfVxuICAgICAgcGFyYW1ldGVyU3RyaW5nICs9IHBhcmFtZXRlci5uYW1lICsgJz0nICsgcGFyYW1ldGVyLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1ldGVyU3RyaW5nO1xuICB9XG59XG4iXX0=
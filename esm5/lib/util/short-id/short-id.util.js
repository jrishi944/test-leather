import * as ShortId from 'shortid';
/**
 * A utility for generating Short IDs
 */
var ShortIdUtil = /** @class */ (function () {
    function ShortIdUtil() {
    }
    /**
     * Generate a short ID
     * @returns A short ID string
     */
    ShortIdUtil.generateId = function () {
        var id = ShortId.generate();
        while (id.indexOf('_') >= 0 || id.indexOf('-') >= 0) {
            id = ShortId.generate();
        }
        return id;
    };
    return ShortIdUtil;
}());
export { ShortIdUtil };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnQtaWQudXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL3V0aWwvc2hvcnQtaWQvc2hvcnQtaWQudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUVuQzs7R0FFRztBQUNIO0lBQUE7SUFZQSxDQUFDO0lBWEM7OztPQUdHO0lBQ1csc0JBQVUsR0FBeEI7UUFDRSxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNuRCxFQUFFLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XG5cbi8qKlxuICogQSB1dGlsaXR5IGZvciBnZW5lcmF0aW5nIFNob3J0IElEc1xuICovXG5leHBvcnQgY2xhc3MgU2hvcnRJZFV0aWwge1xuICAvKipcbiAgICogR2VuZXJhdGUgYSBzaG9ydCBJRFxuICAgKiBAcmV0dXJucyBBIHNob3J0IElEIHN0cmluZ1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUlkKCk6IHN0cmluZyB7XG4gICAgbGV0IGlkID0gU2hvcnRJZC5nZW5lcmF0ZSgpO1xuICAgIHdoaWxlIChpZC5pbmRleE9mKCdfJykgPj0gMCB8fCBpZC5pbmRleE9mKCctJykgPj0gMCkge1xuICAgICAgaWQgPSBTaG9ydElkLmdlbmVyYXRlKCk7XG4gICAgfVxuICAgIHJldHVybiBpZDtcbiAgfVxufVxuIl19
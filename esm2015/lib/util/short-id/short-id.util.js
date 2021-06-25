import * as ShortId from 'shortid';
/**
 * A utility for generating Short IDs
 */
export class ShortIdUtil {
    /**
     * Generate a short ID
     * @returns A short ID string
     */
    static generateId() {
        let id = ShortId.generate();
        while (id.indexOf('_') >= 0 || id.indexOf('-') >= 0) {
            id = ShortId.generate();
        }
        return id;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnQtaWQudXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL3V0aWwvc2hvcnQtaWQvc2hvcnQtaWQudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEtBQUssT0FBTyxNQUFNLFNBQVMsQ0FBQztBQUVuQzs7R0FFRztBQUNILE1BQU0sT0FBTyxXQUFXO0lBQ3RCOzs7T0FHRztJQUNJLE1BQU0sQ0FBQyxVQUFVO1FBQ3RCLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25ELEVBQUUsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDekI7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XG5cbi8qKlxuICogQSB1dGlsaXR5IGZvciBnZW5lcmF0aW5nIFNob3J0IElEc1xuICovXG5leHBvcnQgY2xhc3MgU2hvcnRJZFV0aWwge1xuICAvKipcbiAgICogR2VuZXJhdGUgYSBzaG9ydCBJRFxuICAgKiBAcmV0dXJucyBBIHNob3J0IElEIHN0cmluZ1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBnZW5lcmF0ZUlkKCk6IHN0cmluZyB7XG4gICAgbGV0IGlkID0gU2hvcnRJZC5nZW5lcmF0ZSgpO1xuICAgIHdoaWxlIChpZC5pbmRleE9mKCdfJykgPj0gMCB8fCBpZC5pbmRleE9mKCctJykgPj0gMCkge1xuICAgICAgaWQgPSBTaG9ydElkLmdlbmVyYXRlKCk7XG4gICAgfVxuICAgIHJldHVybiBpZDtcbiAgfVxufVxuIl19
import { Parameters } from './parameters.model';
/**
 * A class to store HTTP request options
 */
export class Options {
    /**
     * Constructor
     */
    constructor() {
        /** An array of errors that should be suppressed (i.e. no error dialog shown) */
        this.suppressedErrors = [];
        this.parameters = new Parameters();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kYXRhLW9wdGlvbnMubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9iYXNlLWRhdGEvX21vZGVscy9iYXNlLWRhdGEtb3B0aW9ucy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHaEQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sT0FBTztJQXNCbEI7O09BRUc7SUFDSDtRQU5BLGdGQUFnRjtRQUN6RSxxQkFBZ0IsR0FBYSxFQUFFLENBQUM7UUFNckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO0lBQ3JDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlY3VyZSB9IGZyb20gJy4uLy4uLy4uL2VudW1zL3NlY3VyZS5lbnVtJztcbmltcG9ydCB7IFBhcmFtZXRlcnMgfSBmcm9tICcuL3BhcmFtZXRlcnMubW9kZWwnO1xuaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSAnLi4vLi4vLi4vZW51bXMvc3RhdHVzLmVudW0nO1xuXG4vKipcbiAqIEEgY2xhc3MgdG8gc3RvcmUgSFRUUCByZXF1ZXN0IG9wdGlvbnNcbiAqL1xuZXhwb3J0IGNsYXNzIE9wdGlvbnMge1xuICAvKiogVGhlIElEIG9mIHRoZSBvYmplY3QgKi9cbiAgcHVibGljIGlkOiBzdHJpbmc7XG5cbiAgLyoqIEFuIGVudW0gaW5kaWNhdGluZyB3aGV0aGVyIHRoZW4gQVBJIGVuZHBvaW50IGlzIHNlY3VyZSAqL1xuICBwdWJsaWMgc2VjdXJlOiBTZWN1cmU7XG5cbiAgLyoqIFRoZSBBUEkgZW5kcG9pbnQgVVJMICovXG4gIHB1YmxpYyB1cmw6IHN0cmluZztcblxuICAvKiogQm9vbGVhbiBpbmRvY2F0aW5nIHdoZXRoZXIgdGhlIElEIHNob3VsZCBiZSB2YWxpZGF0ZWQgKi9cbiAgcHVibGljIHZhbGlkYXRlSWQ6IGJvb2xlYW47XG5cbiAgLyoqIFRoZSB0eXBlIG9mIHRoZSBvYmplY3QgKi9cbiAgcHVibGljIG9iamVjdFR5cGU6IGFueTtcblxuICAvKiogQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHF1ZXJ5IHBhcmFtZXRlcnMgKi9cbiAgcHVibGljIHBhcmFtZXRlcnM6IFBhcmFtZXRlcnM7XG5cbiAgLyoqIEFuIGFycmF5IG9mIGVycm9ycyB0aGF0IHNob3VsZCBiZSBzdXBwcmVzc2VkIChpLmUuIG5vIGVycm9yIGRpYWxvZyBzaG93bikgKi9cbiAgcHVibGljIHN1cHByZXNzZWRFcnJvcnM6IFN0YXR1c1tdID0gW107XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBuZXcgUGFyYW1ldGVycygpO1xuICB9XG59XG4iXX0=
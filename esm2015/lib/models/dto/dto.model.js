import { DtoStatusContainer } from './dto-status-container.model';
import { Status } from '../../enums/status.enum';
/**
 * A data transfer object class
 */
export class Dto {
    /**
     * @param code = The status code
     */
    constructor(code = Status.OK) {
        this.status = new DtoStatusContainer(code);
    }
    /**
     * Determine whether the passed status code is an error
     * @param code - The status code
     * @param suppressErrors  - A list of error codes to suppress (i.e. not treat as errors)
     * @returns True if the status code is an error code
     */
    static isError(code, suppressErrors) {
        if (suppressErrors && suppressErrors.findIndex(c => c === code) >= 0) {
            return false;
        }
        if (code === Status.OK ||
            code === Status.NoData ||
            code === Status.Created ||
            code === Status.NotModifed) {
            return false;
        }
        return true;
    }
    /**
     * Determine whether the passed status code is not an error
     * @param code - The status code
     * @returns True if the status code is not an error code
     */
    static isNotError(code) {
        if (code === Status.OK ||
            code === Status.NoData ||
            code === Status.Created ||
            code === Status.NotModifed) {
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHRvLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGVhdGhlcm1hbi1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2R0by9kdG8ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRWpEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLEdBQUc7SUFJZDs7T0FFRztJQUNILFlBQVksT0FBZSxNQUFNLENBQUMsRUFBRTtRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFZLEVBQUUsY0FBeUI7UUFDcEQsSUFBSSxjQUFjLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEUsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQ0UsSUFBSSxLQUFLLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLElBQUksS0FBSyxNQUFNLENBQUMsTUFBTTtZQUN0QixJQUFJLEtBQUssTUFBTSxDQUFDLE9BQU87WUFDdkIsSUFBSSxLQUFLLE1BQU0sQ0FBQyxVQUFVLEVBQzFCO1lBQ0EsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsVUFBVSxDQUFDLElBQVk7UUFDNUIsSUFDRSxJQUFJLEtBQUssTUFBTSxDQUFDLEVBQUU7WUFDbEIsSUFBSSxLQUFLLE1BQU0sQ0FBQyxNQUFNO1lBQ3RCLElBQUksS0FBSyxNQUFNLENBQUMsT0FBTztZQUN2QixJQUFJLEtBQUssTUFBTSxDQUFDLFVBQVUsRUFDMUI7WUFDQSxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEdG9TdGF0dXNDb250YWluZXIgfSBmcm9tICcuL2R0by1zdGF0dXMtY29udGFpbmVyLm1vZGVsJztcbmltcG9ydCB7IFN0YXR1cyB9IGZyb20gJy4uLy4uL2VudW1zL3N0YXR1cy5lbnVtJztcblxuLyoqXG4gKiBBIGRhdGEgdHJhbnNmZXIgb2JqZWN0IGNsYXNzXG4gKi9cbmV4cG9ydCBjbGFzcyBEdG8ge1xuICAvKiogQSBjb250YWluZXIgb2JqZWN0IGZvciB0aGUgRFRPIHN0YXR1cyAqL1xuICBwdWJsaWMgc3RhdHVzOiBEdG9TdGF0dXNDb250YWluZXI7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBjb2RlID0gVGhlIHN0YXR1cyBjb2RlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb2RlOiBTdGF0dXMgPSBTdGF0dXMuT0spIHtcbiAgICB0aGlzLnN0YXR1cyA9IG5ldyBEdG9TdGF0dXNDb250YWluZXIoY29kZSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHBhc3NlZCBzdGF0dXMgY29kZSBpcyBhbiBlcnJvclxuICAgKiBAcGFyYW0gY29kZSAtIFRoZSBzdGF0dXMgY29kZVxuICAgKiBAcGFyYW0gc3VwcHJlc3NFcnJvcnMgIC0gQSBsaXN0IG9mIGVycm9yIGNvZGVzIHRvIHN1cHByZXNzIChpLmUuIG5vdCB0cmVhdCBhcyBlcnJvcnMpXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0YXR1cyBjb2RlIGlzIGFuIGVycm9yIGNvZGVcbiAgICovXG4gIHN0YXRpYyBpc0Vycm9yKGNvZGU6IFN0YXR1cywgc3VwcHJlc3NFcnJvcnM/OiBTdGF0dXNbXSk6IGJvb2xlYW4ge1xuICAgIGlmIChzdXBwcmVzc0Vycm9ycyAmJiBzdXBwcmVzc0Vycm9ycy5maW5kSW5kZXgoYyA9PiBjID09PSBjb2RlKSA+PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IFN0YXR1cy5PSyB8fFxuICAgICAgY29kZSA9PT0gU3RhdHVzLk5vRGF0YSB8fFxuICAgICAgY29kZSA9PT0gU3RhdHVzLkNyZWF0ZWQgfHxcbiAgICAgIGNvZGUgPT09IFN0YXR1cy5Ob3RNb2RpZmVkXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSB3aGV0aGVyIHRoZSBwYXNzZWQgc3RhdHVzIGNvZGUgaXMgbm90IGFuIGVycm9yXG4gICAqIEBwYXJhbSBjb2RlIC0gVGhlIHN0YXR1cyBjb2RlXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHN0YXR1cyBjb2RlIGlzIG5vdCBhbiBlcnJvciBjb2RlXG4gICAqL1xuICBzdGF0aWMgaXNOb3RFcnJvcihjb2RlOiBTdGF0dXMpOiBib29sZWFuIHtcbiAgICBpZiAoXG4gICAgICBjb2RlID09PSBTdGF0dXMuT0sgfHxcbiAgICAgIGNvZGUgPT09IFN0YXR1cy5Ob0RhdGEgfHxcbiAgICAgIGNvZGUgPT09IFN0YXR1cy5DcmVhdGVkIHx8XG4gICAgICBjb2RlID09PSBTdGF0dXMuTm90TW9kaWZlZFxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19
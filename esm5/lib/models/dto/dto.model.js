import { DtoStatusContainer } from './dto-status-container.model';
import { Status } from '../../enums/status.enum';
/**
 * A data transfer object class
 */
var Dto = /** @class */ (function () {
    /**
     * @param code = The status code
     */
    function Dto(code) {
        if (code === void 0) { code = Status.OK; }
        this.status = new DtoStatusContainer(code);
    }
    /**
     * Determine whether the passed status code is an error
     * @param code - The status code
     * @param suppressErrors  - A list of error codes to suppress (i.e. not treat as errors)
     * @returns True if the status code is an error code
     */
    Dto.isError = function (code, suppressErrors) {
        if (suppressErrors && suppressErrors.findIndex(function (c) { return c === code; }) >= 0) {
            return false;
        }
        if (code === Status.OK ||
            code === Status.NoData ||
            code === Status.Created ||
            code === Status.NotModifed) {
            return false;
        }
        return true;
    };
    /**
     * Determine whether the passed status code is not an error
     * @param code - The status code
     * @returns True if the status code is not an error code
     */
    Dto.isNotError = function (code) {
        if (code === Status.OK ||
            code === Status.NoData ||
            code === Status.Created ||
            code === Status.NotModifed) {
            return true;
        }
        return false;
    };
    return Dto;
}());
export { Dto };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHRvLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGVhdGhlcm1hbi1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2R0by9kdG8ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRWpEOztHQUVHO0FBQ0g7SUFJRTs7T0FFRztJQUNILGFBQVksSUFBd0I7UUFBeEIscUJBQUEsRUFBQSxPQUFlLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxXQUFPLEdBQWQsVUFBZSxJQUFZLEVBQUUsY0FBeUI7UUFDcEQsSUFBSSxjQUFjLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxJQUFJLEVBQVYsQ0FBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BFLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUNFLElBQUksS0FBSyxNQUFNLENBQUMsRUFBRTtZQUNsQixJQUFJLEtBQUssTUFBTSxDQUFDLE1BQU07WUFDdEIsSUFBSSxLQUFLLE1BQU0sQ0FBQyxPQUFPO1lBQ3ZCLElBQUksS0FBSyxNQUFNLENBQUMsVUFBVSxFQUMxQjtZQUNBLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksY0FBVSxHQUFqQixVQUFrQixJQUFZO1FBQzVCLElBQ0UsSUFBSSxLQUFLLE1BQU0sQ0FBQyxFQUFFO1lBQ2xCLElBQUksS0FBSyxNQUFNLENBQUMsTUFBTTtZQUN0QixJQUFJLEtBQUssTUFBTSxDQUFDLE9BQU87WUFDdkIsSUFBSSxLQUFLLE1BQU0sQ0FBQyxVQUFVLEVBQzFCO1lBQ0EsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNILFVBQUM7QUFBRCxDQUFDLEFBaERELElBZ0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHRvU3RhdHVzQ29udGFpbmVyIH0gZnJvbSAnLi9kdG8tc3RhdHVzLWNvbnRhaW5lci5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0dXMgfSBmcm9tICcuLi8uLi9lbnVtcy9zdGF0dXMuZW51bSc7XG5cbi8qKlxuICogQSBkYXRhIHRyYW5zZmVyIG9iamVjdCBjbGFzc1xuICovXG5leHBvcnQgY2xhc3MgRHRvIHtcbiAgLyoqIEEgY29udGFpbmVyIG9iamVjdCBmb3IgdGhlIERUTyBzdGF0dXMgKi9cbiAgcHVibGljIHN0YXR1czogRHRvU3RhdHVzQ29udGFpbmVyO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gY29kZSA9IFRoZSBzdGF0dXMgY29kZVxuICAgKi9cbiAgY29uc3RydWN0b3IoY29kZTogU3RhdHVzID0gU3RhdHVzLk9LKSB7XG4gICAgdGhpcy5zdGF0dXMgPSBuZXcgRHRvU3RhdHVzQ29udGFpbmVyKGNvZGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSB3aGV0aGVyIHRoZSBwYXNzZWQgc3RhdHVzIGNvZGUgaXMgYW4gZXJyb3JcbiAgICogQHBhcmFtIGNvZGUgLSBUaGUgc3RhdHVzIGNvZGVcbiAgICogQHBhcmFtIHN1cHByZXNzRXJyb3JzICAtIEEgbGlzdCBvZiBlcnJvciBjb2RlcyB0byBzdXBwcmVzcyAoaS5lLiBub3QgdHJlYXQgYXMgZXJyb3JzKVxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdGF0dXMgY29kZSBpcyBhbiBlcnJvciBjb2RlXG4gICAqL1xuICBzdGF0aWMgaXNFcnJvcihjb2RlOiBTdGF0dXMsIHN1cHByZXNzRXJyb3JzPzogU3RhdHVzW10pOiBib29sZWFuIHtcbiAgICBpZiAoc3VwcHJlc3NFcnJvcnMgJiYgc3VwcHJlc3NFcnJvcnMuZmluZEluZGV4KGMgPT4gYyA9PT0gY29kZSkgPj0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBjb2RlID09PSBTdGF0dXMuT0sgfHxcbiAgICAgIGNvZGUgPT09IFN0YXR1cy5Ob0RhdGEgfHxcbiAgICAgIGNvZGUgPT09IFN0YXR1cy5DcmVhdGVkIHx8XG4gICAgICBjb2RlID09PSBTdGF0dXMuTm90TW9kaWZlZFxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgcGFzc2VkIHN0YXR1cyBjb2RlIGlzIG5vdCBhbiBlcnJvclxuICAgKiBAcGFyYW0gY29kZSAtIFRoZSBzdGF0dXMgY29kZVxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdGF0dXMgY29kZSBpcyBub3QgYW4gZXJyb3IgY29kZVxuICAgKi9cbiAgc3RhdGljIGlzTm90RXJyb3IoY29kZTogU3RhdHVzKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gU3RhdHVzLk9LIHx8XG4gICAgICBjb2RlID09PSBTdGF0dXMuTm9EYXRhIHx8XG4gICAgICBjb2RlID09PSBTdGF0dXMuQ3JlYXRlZCB8fFxuICAgICAgY29kZSA9PT0gU3RhdHVzLk5vdE1vZGlmZWRcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==
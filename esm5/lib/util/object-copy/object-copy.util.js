import { __assign } from "tslib";
import { plainToClass } from 'class-transformer';
import * as _ from 'lodash';
/**
 * A utility for copying objects
 */
var ObjectCopyUtil = /** @class */ (function () {
    function ObjectCopyUtil() {
    }
    // ********************
    // Static methods
    // ********************
    /**
     * Perform a default (deep) copy of the object
     * @param objectToCopy - The object to copy
     * @returns The copied object
     */
    ObjectCopyUtil.copy = function (objectToCopy) {
        return ObjectCopyUtil.deepCopy(objectToCopy);
    };
    /**
     * Perform a deep copy of the object
     * @param objectToCopy - The object to copy
     * @returns The copied object
     */
    ObjectCopyUtil.deepCopy = function (objectToCopy) {
        var cloneObj = _.cloneDeep(objectToCopy);
        return cloneObj;
    };
    /**
     * Perform a shallow copy of the object
     * @param objectToCopy - The object to copy
     * @returns The copied object
     */
    ObjectCopyUtil.shallowCopy = function (objectToCopy) {
        return __assign({}, objectToCopy);
    };
    /**
     * Perform a typed of the object. Copy the object and then apply the properties of the passed class.
     * @param objectToCopy - The object to copy
     * @param type - The prototype whose methods will be copied
     * @returns The copied object
     */
    ObjectCopyUtil.typedCopy = function (objectToCopy, type) {
        var cloneObj = this.deepCopy(objectToCopy);
        cloneObj = plainToClass(type, cloneObj);
        return cloneObj;
    };
    return ObjectCopyUtil;
}());
export { ObjectCopyUtil };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LWNvcHkudXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL3V0aWwvb2JqZWN0LWNvcHkvb2JqZWN0LWNvcHkudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpELE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRTVCOztHQUVHO0FBQ0g7SUFBQTtJQTRDQSxDQUFDO0lBM0NDLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsdUJBQXVCO0lBRXZCOzs7O09BSUc7SUFDSSxtQkFBSSxHQUFYLFVBQWUsWUFBZTtRQUM1QixPQUFPLGNBQWMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSx1QkFBUSxHQUFmLFVBQW1CLFlBQWU7UUFDaEMsSUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzQyxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDBCQUFXLEdBQWxCLFVBQW1CLFlBQWlCO1FBQ2xDLG9CQUFZLFlBQVksRUFBRztJQUM3QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSx3QkFBUyxHQUFoQixVQUFvQixZQUFpQixFQUFFLElBQWtCO1FBQ3ZELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0MsUUFBUSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDeEMsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQTVDRCxJQTRDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBsYWluVG9DbGFzcyB9IGZyb20gJ2NsYXNzLXRyYW5zZm9ybWVyJztcbmltcG9ydCB7IENsYXNzVHlwZSB9IGZyb20gJ2NsYXNzLXRyYW5zZm9ybWVyL0NsYXNzVHJhbnNmb3JtZXInO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG4vKipcbiAqIEEgdXRpbGl0eSBmb3IgY29weWluZyBvYmplY3RzXG4gKi9cbmV4cG9ydCBjbGFzcyBPYmplY3RDb3B5VXRpbCB7XG4gIC8vICoqKioqKioqKioqKioqKioqKioqXG4gIC8vIFN0YXRpYyBtZXRob2RzXG4gIC8vICoqKioqKioqKioqKioqKioqKioqXG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSBkZWZhdWx0IChkZWVwKSBjb3B5IG9mIHRoZSBvYmplY3RcbiAgICogQHBhcmFtIG9iamVjdFRvQ29weSAtIFRoZSBvYmplY3QgdG8gY29weVxuICAgKiBAcmV0dXJucyBUaGUgY29waWVkIG9iamVjdFxuICAgKi9cbiAgc3RhdGljIGNvcHk8VD4ob2JqZWN0VG9Db3B5OiBUKTogVCB7XG4gICAgcmV0dXJuIE9iamVjdENvcHlVdGlsLmRlZXBDb3B5KG9iamVjdFRvQ29weSk7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybSBhIGRlZXAgY29weSBvZiB0aGUgb2JqZWN0XG4gICAqIEBwYXJhbSBvYmplY3RUb0NvcHkgLSBUaGUgb2JqZWN0IHRvIGNvcHlcbiAgICogQHJldHVybnMgVGhlIGNvcGllZCBvYmplY3RcbiAgICovXG4gIHN0YXRpYyBkZWVwQ29weTxUPihvYmplY3RUb0NvcHk6IFQpOiBUIHtcbiAgICBjb25zdCBjbG9uZU9iaiA9IF8uY2xvbmVEZWVwKG9iamVjdFRvQ29weSk7XG4gICAgcmV0dXJuIGNsb25lT2JqO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSBzaGFsbG93IGNvcHkgb2YgdGhlIG9iamVjdFxuICAgKiBAcGFyYW0gb2JqZWN0VG9Db3B5IC0gVGhlIG9iamVjdCB0byBjb3B5XG4gICAqIEByZXR1cm5zIFRoZSBjb3BpZWQgb2JqZWN0XG4gICAqL1xuICBzdGF0aWMgc2hhbGxvd0NvcHkob2JqZWN0VG9Db3B5OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB7IC4uLm9iamVjdFRvQ29weSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gYSB0eXBlZCBvZiB0aGUgb2JqZWN0LiBDb3B5IHRoZSBvYmplY3QgYW5kIHRoZW4gYXBwbHkgdGhlIHByb3BlcnRpZXMgb2YgdGhlIHBhc3NlZCBjbGFzcy5cbiAgICogQHBhcmFtIG9iamVjdFRvQ29weSAtIFRoZSBvYmplY3QgdG8gY29weVxuICAgKiBAcGFyYW0gdHlwZSAtIFRoZSBwcm90b3R5cGUgd2hvc2UgbWV0aG9kcyB3aWxsIGJlIGNvcGllZFxuICAgKiBAcmV0dXJucyBUaGUgY29waWVkIG9iamVjdFxuICAgKi9cbiAgc3RhdGljIHR5cGVkQ29weTxUPihvYmplY3RUb0NvcHk6IGFueSwgdHlwZTogQ2xhc3NUeXBlPFQ+KTogVCB7XG4gICAgbGV0IGNsb25lT2JqID0gdGhpcy5kZWVwQ29weShvYmplY3RUb0NvcHkpO1xuICAgIGNsb25lT2JqID0gcGxhaW5Ub0NsYXNzKHR5cGUsIGNsb25lT2JqKTtcbiAgICByZXR1cm4gY2xvbmVPYmo7XG4gIH1cbn1cbiJdfQ==
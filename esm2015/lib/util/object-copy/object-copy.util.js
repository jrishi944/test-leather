import { plainToClass } from 'class-transformer';
import * as _ from 'lodash';
/**
 * A utility for copying objects
 */
export class ObjectCopyUtil {
    // ********************
    // Static methods
    // ********************
    /**
     * Perform a default (deep) copy of the object
     * @param objectToCopy - The object to copy
     * @returns The copied object
     */
    static copy(objectToCopy) {
        return ObjectCopyUtil.deepCopy(objectToCopy);
    }
    /**
     * Perform a deep copy of the object
     * @param objectToCopy - The object to copy
     * @returns The copied object
     */
    static deepCopy(objectToCopy) {
        const cloneObj = _.cloneDeep(objectToCopy);
        return cloneObj;
    }
    /**
     * Perform a shallow copy of the object
     * @param objectToCopy - The object to copy
     * @returns The copied object
     */
    static shallowCopy(objectToCopy) {
        return Object.assign({}, objectToCopy);
    }
    /**
     * Perform a typed of the object. Copy the object and then apply the properties of the passed class.
     * @param objectToCopy - The object to copy
     * @param type - The prototype whose methods will be copied
     * @returns The copied object
     */
    static typedCopy(objectToCopy, type) {
        let cloneObj = this.deepCopy(objectToCopy);
        cloneObj = plainToClass(type, cloneObj);
        return cloneObj;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LWNvcHkudXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL3V0aWwvb2JqZWN0LWNvcHkvb2JqZWN0LWNvcHkudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFakQsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUI7O0dBRUc7QUFDSCxNQUFNLE9BQU8sY0FBYztJQUN6Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUV2Qjs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBSSxZQUFlO1FBQzVCLE9BQU8sY0FBYyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyxRQUFRLENBQUksWUFBZTtRQUNoQyxNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNDLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFpQjtRQUNsQyx5QkFBWSxZQUFZLEVBQUc7SUFDN0IsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsTUFBTSxDQUFDLFNBQVMsQ0FBSSxZQUFpQixFQUFFLElBQWtCO1FBQ3ZELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0MsUUFBUSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDeEMsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGxhaW5Ub0NsYXNzIH0gZnJvbSAnY2xhc3MtdHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgQ2xhc3NUeXBlIH0gZnJvbSAnY2xhc3MtdHJhbnNmb3JtZXIvQ2xhc3NUcmFuc2Zvcm1lcic7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbi8qKlxuICogQSB1dGlsaXR5IGZvciBjb3B5aW5nIG9iamVjdHNcbiAqL1xuZXhwb3J0IGNsYXNzIE9iamVjdENvcHlVdGlsIHtcbiAgLy8gKioqKioqKioqKioqKioqKioqKipcbiAgLy8gU3RhdGljIG1ldGhvZHNcbiAgLy8gKioqKioqKioqKioqKioqKioqKipcblxuICAvKipcbiAgICogUGVyZm9ybSBhIGRlZmF1bHQgKGRlZXApIGNvcHkgb2YgdGhlIG9iamVjdFxuICAgKiBAcGFyYW0gb2JqZWN0VG9Db3B5IC0gVGhlIG9iamVjdCB0byBjb3B5XG4gICAqIEByZXR1cm5zIFRoZSBjb3BpZWQgb2JqZWN0XG4gICAqL1xuICBzdGF0aWMgY29weTxUPihvYmplY3RUb0NvcHk6IFQpOiBUIHtcbiAgICByZXR1cm4gT2JqZWN0Q29weVV0aWwuZGVlcENvcHkob2JqZWN0VG9Db3B5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgZGVlcCBjb3B5IG9mIHRoZSBvYmplY3RcbiAgICogQHBhcmFtIG9iamVjdFRvQ29weSAtIFRoZSBvYmplY3QgdG8gY29weVxuICAgKiBAcmV0dXJucyBUaGUgY29waWVkIG9iamVjdFxuICAgKi9cbiAgc3RhdGljIGRlZXBDb3B5PFQ+KG9iamVjdFRvQ29weTogVCk6IFQge1xuICAgIGNvbnN0IGNsb25lT2JqID0gXy5jbG9uZURlZXAob2JqZWN0VG9Db3B5KTtcbiAgICByZXR1cm4gY2xvbmVPYmo7XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybSBhIHNoYWxsb3cgY29weSBvZiB0aGUgb2JqZWN0XG4gICAqIEBwYXJhbSBvYmplY3RUb0NvcHkgLSBUaGUgb2JqZWN0IHRvIGNvcHlcbiAgICogQHJldHVybnMgVGhlIGNvcGllZCBvYmplY3RcbiAgICovXG4gIHN0YXRpYyBzaGFsbG93Q29weShvYmplY3RUb0NvcHk6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHsgLi4ub2JqZWN0VG9Db3B5IH07XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybSBhIHR5cGVkIG9mIHRoZSBvYmplY3QuIENvcHkgdGhlIG9iamVjdCBhbmQgdGhlbiBhcHBseSB0aGUgcHJvcGVydGllcyBvZiB0aGUgcGFzc2VkIGNsYXNzLlxuICAgKiBAcGFyYW0gb2JqZWN0VG9Db3B5IC0gVGhlIG9iamVjdCB0byBjb3B5XG4gICAqIEBwYXJhbSB0eXBlIC0gVGhlIHByb3RvdHlwZSB3aG9zZSBtZXRob2RzIHdpbGwgYmUgY29waWVkXG4gICAqIEByZXR1cm5zIFRoZSBjb3BpZWQgb2JqZWN0XG4gICAqL1xuICBzdGF0aWMgdHlwZWRDb3B5PFQ+KG9iamVjdFRvQ29weTogYW55LCB0eXBlOiBDbGFzc1R5cGU8VD4pOiBUIHtcbiAgICBsZXQgY2xvbmVPYmogPSB0aGlzLmRlZXBDb3B5KG9iamVjdFRvQ29weSk7XG4gICAgY2xvbmVPYmogPSBwbGFpblRvQ2xhc3ModHlwZSwgY2xvbmVPYmopO1xuICAgIHJldHVybiBjbG9uZU9iajtcbiAgfVxufVxuIl19
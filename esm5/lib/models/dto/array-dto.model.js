import { __extends } from "tslib";
import { Dto } from './dto.model';
/**
 * A DTO class to use if a controller returns an array of items
 */
var ArrayDto = /** @class */ (function (_super) {
    __extends(ArrayDto, _super);
    /**
     * @param code - The DTO's status code
     * @param data - The DTO's data (an array of objects)
     */
    function ArrayDto(code, data) {
        var _this = _super.call(this, code) || this;
        _this.data = data;
        return _this;
    }
    return ArrayDto;
}(Dto));
export { ArrayDto };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktZHRvLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGVhdGhlcm1hbi1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2R0by9hcnJheS1kdG8ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHbEM7O0dBRUc7QUFDSDtJQUFpQyw0QkFBRztJQUNsQzs7O09BR0c7SUFDSCxrQkFBWSxJQUFZLEVBQVMsSUFBUztRQUExQyxZQUNFLGtCQUFNLElBQUksQ0FBQyxTQUNaO1FBRmdDLFVBQUksR0FBSixJQUFJLENBQUs7O0lBRTFDLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQVJELENBQWlDLEdBQUcsR0FRbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEdG8gfSBmcm9tICcuL2R0by5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0dXMgfSBmcm9tICcuLi8uLi9lbnVtcy9zdGF0dXMuZW51bSc7XG5cbi8qKlxuICogQSBEVE8gY2xhc3MgdG8gdXNlIGlmIGEgY29udHJvbGxlciByZXR1cm5zIGFuIGFycmF5IG9mIGl0ZW1zXG4gKi9cbmV4cG9ydCBjbGFzcyBBcnJheUR0bzxUPiBleHRlbmRzIER0byB7XG4gIC8qKlxuICAgKiBAcGFyYW0gY29kZSAtIFRoZSBEVE8ncyBzdGF0dXMgY29kZVxuICAgKiBAcGFyYW0gZGF0YSAtIFRoZSBEVE8ncyBkYXRhIChhbiBhcnJheSBvZiBvYmplY3RzKVxuICAgKi9cbiAgY29uc3RydWN0b3IoY29kZTogU3RhdHVzLCBwdWJsaWMgZGF0YTogVFtdKSB7XG4gICAgc3VwZXIoY29kZSk7XG4gIH1cbn1cbiJdfQ==
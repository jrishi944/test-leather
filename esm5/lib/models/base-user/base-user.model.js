import { __extends } from "tslib";
import { BaseModel } from '../base/base.model';
/**
 * The base user class
 */
var BaseUser = /** @class */ (function (_super) {
    __extends(BaseUser, _super);
    function BaseUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** An array containing the user's roles */
        _this.roles = [];
        return _this;
    }
    Object.defineProperty(BaseUser.prototype, "fullName", {
        /** Get accessor for the user's full name */
        get: function () {
            return this.firstName + ' ' + this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    return BaseUser;
}(BaseModel));
export { BaseUser };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS11c2VyLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGVhdGhlcm1hbi1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2Jhc2UtdXNlci9iYXNlLXVzZXIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQzs7R0FFRztBQUNIO0lBQThCLDRCQUFTO0lBQXZDO1FBQUEscUVBZ0NDO1FBRkMsMkNBQTJDO1FBQ3BDLFdBQUssR0FBYSxFQUFFLENBQUM7O0lBQzlCLENBQUM7SUF4QkMsc0JBQVcsOEJBQVE7UUFEbkIsNENBQTRDO2FBQzVDO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlDLENBQUM7OztPQUFBO0lBc0JILGVBQUM7QUFBRCxDQUFDLEFBaENELENBQThCLFNBQVMsR0FnQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi4vYmFzZS9iYXNlLm1vZGVsJztcblxuLyoqXG4gKiBUaGUgYmFzZSB1c2VyIGNsYXNzXG4gKi9cbmV4cG9ydCBjbGFzcyBCYXNlVXNlciBleHRlbmRzIEJhc2VNb2RlbCB7XG4gIC8qKiBUaGUgdXNlcidzIGZpcnN0IG5hbWUgKi9cbiAgcHVibGljIGZpcnN0TmFtZTogc3RyaW5nO1xuXG4gIC8qKiBUaGUgdXNlcidzIGxhc3QgbmFtZSAqL1xuICBwdWJsaWMgbGFzdE5hbWU6IHN0cmluZztcblxuICAvKiogR2V0IGFjY2Vzc29yIGZvciB0aGUgdXNlcidzIGZ1bGwgbmFtZSAqL1xuICBwdWJsaWMgZ2V0IGZ1bGxOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3ROYW1lICsgJyAnICsgdGhpcy5sYXN0TmFtZTtcbiAgfVxuXG4gIC8qKiBUaGUgdXNlcidzIGVtYWlsIGFkZHJlc3MgKi9cbiAgcHVibGljIGVtYWlsOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSB1c2VyJ3MgZW1haWwgdmVyaWZpZWQgKi9cbiAgcHVibGljIGVtYWlsVmVyaWZpZWQ6IGJvb2xlYW47XG5cbiAgLyoqIFRoZSBkYXRlIG9mIHRoZSB1c2VyJ3MgbGFzdCBsb2dpbiAqL1xuICBsYXN0TG9naW5EYXRlOiBEYXRlO1xuXG4gIC8qKiBUaGUgdG90YWwgbnVtYmVyIG9mIHVzZXIgbG9naW5zICovXG4gIGxvZ2luQ291bnQ6IG51bWJlcjtcblxuICAvKiogQSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgdXNlcidzIGFjY291bnQgaGFzIGJlZW4gZGlzYWJsZWQgKi9cbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgLyoqIFRoZSBudW1iZXIgb2YgcGFzc3dvcmQgcmVzZXRzICovXG4gIHBhc3N3b3JkUmVzZXRDb3VudDogbnVtYmVyO1xuXG4gIC8qKiBBbiBhcnJheSBjb250YWluaW5nIHRoZSB1c2VyJ3Mgcm9sZXMgKi9cbiAgcHVibGljIHJvbGVzOiBzdHJpbmdbXSA9IFtdO1xufVxuIl19
import { BaseModel } from '../base/base.model';
/**
 * The base user class
 */
export class BaseUser extends BaseModel {
    constructor() {
        super(...arguments);
        /** An array containing the user's roles */
        this.roles = [];
    }
    /** Get accessor for the user's full name */
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS11c2VyLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGVhdGhlcm1hbi1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2Jhc2UtdXNlci9iYXNlLXVzZXIubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRS9DOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFFBQVMsU0FBUSxTQUFTO0lBQXZDOztRQThCRSwyQ0FBMkM7UUFDcEMsVUFBSyxHQUFhLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBekJDLDRDQUE0QztJQUM1QyxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzlDLENBQUM7Q0FzQkYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuLi9iYXNlL2Jhc2UubW9kZWwnO1xuXG4vKipcbiAqIFRoZSBiYXNlIHVzZXIgY2xhc3NcbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VVc2VyIGV4dGVuZHMgQmFzZU1vZGVsIHtcbiAgLyoqIFRoZSB1c2VyJ3MgZmlyc3QgbmFtZSAqL1xuICBwdWJsaWMgZmlyc3ROYW1lOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSB1c2VyJ3MgbGFzdCBuYW1lICovXG4gIHB1YmxpYyBsYXN0TmFtZTogc3RyaW5nO1xuXG4gIC8qKiBHZXQgYWNjZXNzb3IgZm9yIHRoZSB1c2VyJ3MgZnVsbCBuYW1lICovXG4gIHB1YmxpYyBnZXQgZnVsbE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdE5hbWUgKyAnICcgKyB0aGlzLmxhc3ROYW1lO1xuICB9XG5cbiAgLyoqIFRoZSB1c2VyJ3MgZW1haWwgYWRkcmVzcyAqL1xuICBwdWJsaWMgZW1haWw6IHN0cmluZztcblxuICAvKiogVGhlIHVzZXIncyBlbWFpbCB2ZXJpZmllZCAqL1xuICBwdWJsaWMgZW1haWxWZXJpZmllZDogYm9vbGVhbjtcblxuICAvKiogVGhlIGRhdGUgb2YgdGhlIHVzZXIncyBsYXN0IGxvZ2luICovXG4gIGxhc3RMb2dpbkRhdGU6IERhdGU7XG5cbiAgLyoqIFRoZSB0b3RhbCBudW1iZXIgb2YgdXNlciBsb2dpbnMgKi9cbiAgbG9naW5Db3VudDogbnVtYmVyO1xuXG4gIC8qKiBBIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSB1c2VyJ3MgYWNjb3VudCBoYXMgYmVlbiBkaXNhYmxlZCAqL1xuICBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKiogVGhlIG51bWJlciBvZiBwYXNzd29yZCByZXNldHMgKi9cbiAgcGFzc3dvcmRSZXNldENvdW50OiBudW1iZXI7XG5cbiAgLyoqIEFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHVzZXIncyByb2xlcyAqL1xuICBwdWJsaWMgcm9sZXM6IHN0cmluZ1tdID0gW107XG59XG4iXX0=
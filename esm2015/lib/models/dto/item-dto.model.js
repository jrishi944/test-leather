import { Dto } from './dto.model';
/**
 * A DTO class to use if a controller returns a single item
 */
export class ItemDto extends Dto {
    /**
     * @param code - The DTO's status code
     * @param data - The DTO's data
     */
    constructor(code, data) {
        super(code);
        this.data = data;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kdG8ubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZHRvL2l0ZW0tZHRvLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHbEM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sT0FBVyxTQUFRLEdBQUc7SUFDakM7OztPQUdHO0lBQ0gsWUFBWSxJQUFZLEVBQVMsSUFBTztRQUN0QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFEbUIsU0FBSSxHQUFKLElBQUksQ0FBRztJQUV4QyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEdG8gfSBmcm9tICcuL2R0by5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0dXMgfSBmcm9tICcuLi8uLi9lbnVtcy9zdGF0dXMuZW51bSc7XG5cbi8qKlxuICogQSBEVE8gY2xhc3MgdG8gdXNlIGlmIGEgY29udHJvbGxlciByZXR1cm5zIGEgc2luZ2xlIGl0ZW1cbiAqL1xuZXhwb3J0IGNsYXNzIEl0ZW1EdG88VD4gZXh0ZW5kcyBEdG8ge1xuICAvKipcbiAgICogQHBhcmFtIGNvZGUgLSBUaGUgRFRPJ3Mgc3RhdHVzIGNvZGVcbiAgICogQHBhcmFtIGRhdGEgLSBUaGUgRFRPJ3MgZGF0YVxuICAgKi9cbiAgY29uc3RydWN0b3IoY29kZTogU3RhdHVzLCBwdWJsaWMgZGF0YTogVCkge1xuICAgIHN1cGVyKGNvZGUpO1xuICB9XG59XG4iXX0=
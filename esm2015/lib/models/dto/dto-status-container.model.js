import { Status } from '../../enums/status.enum';
/**
 * A container to store DTO status data
 */
export class DtoStatusContainer {
    /**
     * @param code - The DTO's status code
     */
    constructor(code = Status.OK) {
        this.code = code;
    }
    /** A get accessor for the DTO's status text */
    get text() {
        switch (this.code) {
            case Status.OK:
                return 'OK';
            case Status.Created:
                return 'Created';
            case Status.NoData:
                return 'No Data';
            case Status.NotModifed:
                return 'No Modified';
            case Status.BadRequest:
                return 'Bad Request';
            case Status.NotAuthorized:
                return 'Not Athorized';
            case Status.ImATeapot:
                // tslint:disable-next-line:quotemark
                return "I'm a Teapot";
            case Status.Error:
                return 'Error';
            default:
                return 'Unknown';
        }
    }
    /**
     * Determine whether the status is an error code
     */
    isError() {
        if (this.code === Status.OK ||
            this.code === Status.NoData ||
            this.code === Status.Created ||
            this.code === Status.NotModifed) {
            return false;
        }
        return true;
    }
    /**
     * Determine whether the status is not an error code
     */
    isNotError() {
        if (this.code === Status.OK ||
            this.code === Status.NoData ||
            this.code === Status.Created ||
            this.code === Status.NotModifed) {
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHRvLXN0YXR1cy1jb250YWluZXIubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZHRvL2R0by1zdGF0dXMtY29udGFpbmVyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVqRDs7R0FFRztBQUNILE1BQU0sT0FBTyxrQkFBa0I7SUErQjdCOztPQUVHO0lBQ0gsWUFBbUIsT0FBZSxNQUFNLENBQUMsRUFBRTtRQUF4QixTQUFJLEdBQUosSUFBSSxDQUFvQjtJQUFHLENBQUM7SUFqQy9DLCtDQUErQztJQUMvQyxJQUFXLElBQUk7UUFDYixRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDakIsS0FBSyxNQUFNLENBQUMsRUFBRTtnQkFDWixPQUFPLElBQUksQ0FBQztZQUNkLEtBQUssTUFBTSxDQUFDLE9BQU87Z0JBQ2pCLE9BQU8sU0FBUyxDQUFDO1lBQ25CLEtBQUssTUFBTSxDQUFDLE1BQU07Z0JBQ2hCLE9BQU8sU0FBUyxDQUFDO1lBQ25CLEtBQUssTUFBTSxDQUFDLFVBQVU7Z0JBQ3BCLE9BQU8sYUFBYSxDQUFDO1lBQ3ZCLEtBQUssTUFBTSxDQUFDLFVBQVU7Z0JBQ3BCLE9BQU8sYUFBYSxDQUFDO1lBQ3ZCLEtBQUssTUFBTSxDQUFDLGFBQWE7Z0JBQ3ZCLE9BQU8sZUFBZSxDQUFDO1lBQ3pCLEtBQUssTUFBTSxDQUFDLFNBQVM7Z0JBQ25CLHFDQUFxQztnQkFDckMsT0FBTyxjQUFjLENBQUM7WUFDeEIsS0FBSyxNQUFNLENBQUMsS0FBSztnQkFDZixPQUFPLE9BQU8sQ0FBQztZQUNqQjtnQkFDRSxPQUFPLFNBQVMsQ0FBQztTQUNwQjtJQUNILENBQUM7SUFZRDs7T0FFRztJQUNJLE9BQU87UUFDWixJQUNFLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsTUFBTTtZQUMzQixJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxPQUFPO1lBQzVCLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLFVBQVUsRUFDL0I7WUFDQSxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxVQUFVO1FBQ2YsSUFDRSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLE1BQU07WUFDM0IsSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsT0FBTztZQUM1QixJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxVQUFVLEVBQy9CO1lBQ0EsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSAnLi4vLi4vZW51bXMvc3RhdHVzLmVudW0nO1xuXG4vKipcbiAqIEEgY29udGFpbmVyIHRvIHN0b3JlIERUTyBzdGF0dXMgZGF0YVxuICovXG5leHBvcnQgY2xhc3MgRHRvU3RhdHVzQ29udGFpbmVyIHtcbiAgLyoqIEEgZ2V0IGFjY2Vzc29yIGZvciB0aGUgRFRPJ3Mgc3RhdHVzIHRleHQgKi9cbiAgcHVibGljIGdldCB0ZXh0KCk6IHN0cmluZyB7XG4gICAgc3dpdGNoICh0aGlzLmNvZGUpIHtcbiAgICAgIGNhc2UgU3RhdHVzLk9LOlxuICAgICAgICByZXR1cm4gJ09LJztcbiAgICAgIGNhc2UgU3RhdHVzLkNyZWF0ZWQ6XG4gICAgICAgIHJldHVybiAnQ3JlYXRlZCc7XG4gICAgICBjYXNlIFN0YXR1cy5Ob0RhdGE6XG4gICAgICAgIHJldHVybiAnTm8gRGF0YSc7XG4gICAgICBjYXNlIFN0YXR1cy5Ob3RNb2RpZmVkOlxuICAgICAgICByZXR1cm4gJ05vIE1vZGlmaWVkJztcbiAgICAgIGNhc2UgU3RhdHVzLkJhZFJlcXVlc3Q6XG4gICAgICAgIHJldHVybiAnQmFkIFJlcXVlc3QnO1xuICAgICAgY2FzZSBTdGF0dXMuTm90QXV0aG9yaXplZDpcbiAgICAgICAgcmV0dXJuICdOb3QgQXRob3JpemVkJztcbiAgICAgIGNhc2UgU3RhdHVzLkltQVRlYXBvdDpcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnF1b3RlbWFya1xuICAgICAgICByZXR1cm4gXCJJJ20gYSBUZWFwb3RcIjtcbiAgICAgIGNhc2UgU3RhdHVzLkVycm9yOlxuICAgICAgICByZXR1cm4gJ0Vycm9yJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnVW5rbm93bic7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBEVE8ncyBtZXNzYWdlIHRleHRcbiAgICovXG4gIHB1YmxpYyBtZXNzYWdlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gY29kZSAtIFRoZSBEVE8ncyBzdGF0dXMgY29kZVxuICAgKi9cbiAgY29uc3RydWN0b3IocHVibGljIGNvZGU6IFN0YXR1cyA9IFN0YXR1cy5PSykge31cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHN0YXR1cyBpcyBhbiBlcnJvciBjb2RlXG4gICAqL1xuICBwdWJsaWMgaXNFcnJvcigpOiBib29sZWFuIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNvZGUgPT09IFN0YXR1cy5PSyB8fFxuICAgICAgdGhpcy5jb2RlID09PSBTdGF0dXMuTm9EYXRhIHx8XG4gICAgICB0aGlzLmNvZGUgPT09IFN0YXR1cy5DcmVhdGVkIHx8XG4gICAgICB0aGlzLmNvZGUgPT09IFN0YXR1cy5Ob3RNb2RpZmVkXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSB3aGV0aGVyIHRoZSBzdGF0dXMgaXMgbm90IGFuIGVycm9yIGNvZGVcbiAgICovXG4gIHB1YmxpYyBpc05vdEVycm9yKCk6IGJvb2xlYW4ge1xuICAgIGlmIChcbiAgICAgIHRoaXMuY29kZSA9PT0gU3RhdHVzLk9LIHx8XG4gICAgICB0aGlzLmNvZGUgPT09IFN0YXR1cy5Ob0RhdGEgfHxcbiAgICAgIHRoaXMuY29kZSA9PT0gU3RhdHVzLkNyZWF0ZWQgfHxcbiAgICAgIHRoaXMuY29kZSA9PT0gU3RhdHVzLk5vdE1vZGlmZWRcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==
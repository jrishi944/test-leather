import { Status } from '../../enums/status.enum';
/**
 * A container to store DTO status data
 */
var DtoStatusContainer = /** @class */ (function () {
    /**
     * @param code - The DTO's status code
     */
    function DtoStatusContainer(code) {
        if (code === void 0) { code = Status.OK; }
        this.code = code;
    }
    Object.defineProperty(DtoStatusContainer.prototype, "text", {
        /** A get accessor for the DTO's status text */
        get: function () {
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Determine whether the status is an error code
     */
    DtoStatusContainer.prototype.isError = function () {
        if (this.code === Status.OK ||
            this.code === Status.NoData ||
            this.code === Status.Created ||
            this.code === Status.NotModifed) {
            return false;
        }
        return true;
    };
    /**
     * Determine whether the status is not an error code
     */
    DtoStatusContainer.prototype.isNotError = function () {
        if (this.code === Status.OK ||
            this.code === Status.NoData ||
            this.code === Status.Created ||
            this.code === Status.NotModifed) {
            return true;
        }
        return false;
    };
    return DtoStatusContainer;
}());
export { DtoStatusContainer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHRvLXN0YXR1cy1jb250YWluZXIubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZHRvL2R0by1zdGF0dXMtY29udGFpbmVyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVqRDs7R0FFRztBQUNIO0lBK0JFOztPQUVHO0lBQ0gsNEJBQW1CLElBQXdCO1FBQXhCLHFCQUFBLEVBQUEsT0FBZSxNQUFNLENBQUMsRUFBRTtRQUF4QixTQUFJLEdBQUosSUFBSSxDQUFvQjtJQUFHLENBQUM7SUFoQy9DLHNCQUFXLG9DQUFJO1FBRGYsK0NBQStDO2FBQy9DO1lBQ0UsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNqQixLQUFLLE1BQU0sQ0FBQyxFQUFFO29CQUNaLE9BQU8sSUFBSSxDQUFDO2dCQUNkLEtBQUssTUFBTSxDQUFDLE9BQU87b0JBQ2pCLE9BQU8sU0FBUyxDQUFDO2dCQUNuQixLQUFLLE1BQU0sQ0FBQyxNQUFNO29CQUNoQixPQUFPLFNBQVMsQ0FBQztnQkFDbkIsS0FBSyxNQUFNLENBQUMsVUFBVTtvQkFDcEIsT0FBTyxhQUFhLENBQUM7Z0JBQ3ZCLEtBQUssTUFBTSxDQUFDLFVBQVU7b0JBQ3BCLE9BQU8sYUFBYSxDQUFDO2dCQUN2QixLQUFLLE1BQU0sQ0FBQyxhQUFhO29CQUN2QixPQUFPLGVBQWUsQ0FBQztnQkFDekIsS0FBSyxNQUFNLENBQUMsU0FBUztvQkFDbkIscUNBQXFDO29CQUNyQyxPQUFPLGNBQWMsQ0FBQztnQkFDeEIsS0FBSyxNQUFNLENBQUMsS0FBSztvQkFDZixPQUFPLE9BQU8sQ0FBQztnQkFDakI7b0JBQ0UsT0FBTyxTQUFTLENBQUM7YUFDcEI7UUFDSCxDQUFDOzs7T0FBQTtJQVlEOztPQUVHO0lBQ0ksb0NBQU8sR0FBZDtRQUNFLElBQ0UsSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxNQUFNO1lBQzNCLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLE9BQU87WUFDNUIsSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsVUFBVSxFQUMvQjtZQUNBLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7T0FFRztJQUNJLHVDQUFVLEdBQWpCO1FBQ0UsSUFDRSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLE1BQU07WUFDM0IsSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsT0FBTztZQUM1QixJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxVQUFVLEVBQy9CO1lBQ0EsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQWpFRCxJQWlFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXR1cyB9IGZyb20gJy4uLy4uL2VudW1zL3N0YXR1cy5lbnVtJztcblxuLyoqXG4gKiBBIGNvbnRhaW5lciB0byBzdG9yZSBEVE8gc3RhdHVzIGRhdGFcbiAqL1xuZXhwb3J0IGNsYXNzIER0b1N0YXR1c0NvbnRhaW5lciB7XG4gIC8qKiBBIGdldCBhY2Nlc3NvciBmb3IgdGhlIERUTydzIHN0YXR1cyB0ZXh0ICovXG4gIHB1YmxpYyBnZXQgdGV4dCgpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAodGhpcy5jb2RlKSB7XG4gICAgICBjYXNlIFN0YXR1cy5PSzpcbiAgICAgICAgcmV0dXJuICdPSyc7XG4gICAgICBjYXNlIFN0YXR1cy5DcmVhdGVkOlxuICAgICAgICByZXR1cm4gJ0NyZWF0ZWQnO1xuICAgICAgY2FzZSBTdGF0dXMuTm9EYXRhOlxuICAgICAgICByZXR1cm4gJ05vIERhdGEnO1xuICAgICAgY2FzZSBTdGF0dXMuTm90TW9kaWZlZDpcbiAgICAgICAgcmV0dXJuICdObyBNb2RpZmllZCc7XG4gICAgICBjYXNlIFN0YXR1cy5CYWRSZXF1ZXN0OlxuICAgICAgICByZXR1cm4gJ0JhZCBSZXF1ZXN0JztcbiAgICAgIGNhc2UgU3RhdHVzLk5vdEF1dGhvcml6ZWQ6XG4gICAgICAgIHJldHVybiAnTm90IEF0aG9yaXplZCc7XG4gICAgICBjYXNlIFN0YXR1cy5JbUFUZWFwb3Q6XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpxdW90ZW1hcmtcbiAgICAgICAgcmV0dXJuIFwiSSdtIGEgVGVhcG90XCI7XG4gICAgICBjYXNlIFN0YXR1cy5FcnJvcjpcbiAgICAgICAgcmV0dXJuICdFcnJvcic7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ1Vua25vd24nO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgRFRPJ3MgbWVzc2FnZSB0ZXh0XG4gICAqL1xuICBwdWJsaWMgbWVzc2FnZT86IHN0cmluZztcblxuICAvKipcbiAgICogQHBhcmFtIGNvZGUgLSBUaGUgRFRPJ3Mgc3RhdHVzIGNvZGVcbiAgICovXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb2RlOiBTdGF0dXMgPSBTdGF0dXMuT0spIHt9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSB3aGV0aGVyIHRoZSBzdGF0dXMgaXMgYW4gZXJyb3IgY29kZVxuICAgKi9cbiAgcHVibGljIGlzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5jb2RlID09PSBTdGF0dXMuT0sgfHxcbiAgICAgIHRoaXMuY29kZSA9PT0gU3RhdHVzLk5vRGF0YSB8fFxuICAgICAgdGhpcy5jb2RlID09PSBTdGF0dXMuQ3JlYXRlZCB8fFxuICAgICAgdGhpcy5jb2RlID09PSBTdGF0dXMuTm90TW9kaWZlZFxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgc3RhdHVzIGlzIG5vdCBhbiBlcnJvciBjb2RlXG4gICAqL1xuICBwdWJsaWMgaXNOb3RFcnJvcigpOiBib29sZWFuIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNvZGUgPT09IFN0YXR1cy5PSyB8fFxuICAgICAgdGhpcy5jb2RlID09PSBTdGF0dXMuTm9EYXRhIHx8XG4gICAgICB0aGlzLmNvZGUgPT09IFN0YXR1cy5DcmVhdGVkIHx8XG4gICAgICB0aGlzLmNvZGUgPT09IFN0YXR1cy5Ob3RNb2RpZmVkXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=
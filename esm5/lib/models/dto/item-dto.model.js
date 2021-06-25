import { __extends } from "tslib";
import { Dto } from './dto.model';
/**
 * A DTO class to use if a controller returns a single item
 */
var ItemDto = /** @class */ (function (_super) {
    __extends(ItemDto, _super);
    /**
     * @param code - The DTO's status code
     * @param data - The DTO's data
     */
    function ItemDto(code, data) {
        var _this = _super.call(this, code) || this;
        _this.data = data;
        return _this;
    }
    return ItemDto;
}(Dto));
export { ItemDto };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kdG8ubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZHRvL2l0ZW0tZHRvLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR2xDOztHQUVHO0FBQ0g7SUFBZ0MsMkJBQUc7SUFDakM7OztPQUdHO0lBQ0gsaUJBQVksSUFBWSxFQUFTLElBQU87UUFBeEMsWUFDRSxrQkFBTSxJQUFJLENBQUMsU0FDWjtRQUZnQyxVQUFJLEdBQUosSUFBSSxDQUFHOztJQUV4QyxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUFSRCxDQUFnQyxHQUFHLEdBUWxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHRvIH0gZnJvbSAnLi9kdG8ubW9kZWwnO1xuaW1wb3J0IHsgU3RhdHVzIH0gZnJvbSAnLi4vLi4vZW51bXMvc3RhdHVzLmVudW0nO1xuXG4vKipcbiAqIEEgRFRPIGNsYXNzIHRvIHVzZSBpZiBhIGNvbnRyb2xsZXIgcmV0dXJucyBhIHNpbmdsZSBpdGVtXG4gKi9cbmV4cG9ydCBjbGFzcyBJdGVtRHRvPFQ+IGV4dGVuZHMgRHRvIHtcbiAgLyoqXG4gICAqIEBwYXJhbSBjb2RlIC0gVGhlIERUTydzIHN0YXR1cyBjb2RlXG4gICAqIEBwYXJhbSBkYXRhIC0gVGhlIERUTydzIGRhdGFcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvZGU6IFN0YXR1cywgcHVibGljIGRhdGE6IFQpIHtcbiAgICBzdXBlcihjb2RlKTtcbiAgfVxufVxuIl19
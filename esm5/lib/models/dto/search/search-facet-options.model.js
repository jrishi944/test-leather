import { __values } from "tslib";
var SearchFacetOptions = /** @class */ (function () {
    function SearchFacetOptions() {
        this.fields = [];
        this.rangeQueries = [];
    }
    SearchFacetOptions.prototype.getRangeQuery = function (query) {
        var e_1, _a;
        var cleanedQuery = query.replace(/{[^}]+}/i, '').trim();
        try {
            for (var _b = __values(this.rangeQueries), _c = _b.next(); !_c.done; _c = _b.next()) {
                var rangeQuery = _c.value;
                if (rangeQuery.query === cleanedQuery) {
                    return rangeQuery;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    return SearchFacetOptions;
}());
export { SearchFacetOptions };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0LW9wdGlvbnMubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZHRvL3NlYXJjaC9zZWFyY2gtZmFjZXQtb3B0aW9ucy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7SUFBQTtRQUNFLFdBQU0sR0FBdUIsRUFBRSxDQUFDO1FBQ2hDLGlCQUFZLEdBQTRCLEVBQUUsQ0FBQztJQWE3QyxDQUFDO0lBVFEsMENBQWEsR0FBcEIsVUFBcUIsS0FBYTs7UUFDaEMsSUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7O1lBQzFELEtBQXlCLElBQUEsS0FBQSxTQUFBLElBQUksQ0FBQyxZQUFZLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQXZDLElBQU0sVUFBVSxXQUFBO2dCQUNuQixJQUFJLFVBQVUsQ0FBQyxLQUFLLEtBQUssWUFBWSxFQUFFO29CQUNyQyxPQUFPLFVBQVUsQ0FBQztpQkFDbkI7YUFDRjs7Ozs7Ozs7O1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaEZhY2V0RmllbGQgfSBmcm9tICcuL3NlYXJjaC1mYWNldC1maWVsZC5tb2RlbCc7XG5pbXBvcnQgeyBTZWFyY2hGYWNldFJhbmdlUXVlcnkgfSBmcm9tICcuL3NlYXJjaC1mYWNldC1yYW5nZS1xdWVyeS5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hGYWNldE9wdGlvbnMge1xuICBmaWVsZHM6IFNlYXJjaEZhY2V0RmllbGRbXSA9IFtdO1xuICByYW5nZVF1ZXJpZXM6IFNlYXJjaEZhY2V0UmFuZ2VRdWVyeVtdID0gW107XG4gIGxpbWl0PzogbnVtYmVyO1xuICBtaW5Db3VudD86IG51bWJlcjtcblxuICBwdWJsaWMgZ2V0UmFuZ2VRdWVyeShxdWVyeTogc3RyaW5nKTogU2VhcmNoRmFjZXRSYW5nZVF1ZXJ5IHwgbnVsbCB7XG4gICAgY29uc3QgY2xlYW5lZFF1ZXJ5ID0gcXVlcnkucmVwbGFjZSgve1tefV0rfS9pLCAnJykudHJpbSgpO1xuICAgIGZvciAoY29uc3QgcmFuZ2VRdWVyeSBvZiB0aGlzLnJhbmdlUXVlcmllcykge1xuICAgICAgaWYgKHJhbmdlUXVlcnkucXVlcnkgPT09IGNsZWFuZWRRdWVyeSkge1xuICAgICAgICByZXR1cm4gcmFuZ2VRdWVyeTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdfQ==
import { FilterCase } from '../_enums/filter-case.enum';
import { FilterScope } from '../_enums/filter-scope.enum';
/**
 * A class store store filter options
 */
var FilterOptions = /** @class */ (function () {
    /**
     * Constructor
     * @param fitlerCase - Enum indicating the filter case option
     * @param fitlerScope - Enum indicating the filter scope option
     */
    function FilterOptions(fitlerCase, fitlerScope) {
        if (fitlerCase === void 0) { fitlerCase = FilterCase.CaseInsensitive; }
        if (fitlerScope === void 0) { fitlerScope = FilterScope.Contains; }
        this.fitlerCase = fitlerCase;
        this.fitlerScope = fitlerScope;
    }
    return FilterOptions;
}());
export { FilterOptions };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW9wdGlvbnMubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi91dGlsL2NvbGxlY3Rpb24vX21vZGVscy9maWx0ZXItb3B0aW9ucy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRTFEOztHQUVHO0FBQ0g7SUFDRTs7OztPQUlHO0lBQ0gsdUJBQ1MsVUFBbUQsRUFDbkQsV0FBK0M7UUFEL0MsMkJBQUEsRUFBQSxhQUF5QixVQUFVLENBQUMsZUFBZTtRQUNuRCw0QkFBQSxFQUFBLGNBQTJCLFdBQVcsQ0FBQyxRQUFRO1FBRC9DLGVBQVUsR0FBVixVQUFVLENBQXlDO1FBQ25ELGdCQUFXLEdBQVgsV0FBVyxDQUFvQztJQUNyRCxDQUFDO0lBQ04sb0JBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpbHRlckNhc2UgfSBmcm9tICcuLi9fZW51bXMvZmlsdGVyLWNhc2UuZW51bSc7XG5pbXBvcnQgeyBGaWx0ZXJTY29wZSB9IGZyb20gJy4uL19lbnVtcy9maWx0ZXItc2NvcGUuZW51bSc7XG5cbi8qKlxuICogQSBjbGFzcyBzdG9yZSBzdG9yZSBmaWx0ZXIgb3B0aW9uc1xuICovXG5leHBvcnQgY2xhc3MgRmlsdGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gZml0bGVyQ2FzZSAtIEVudW0gaW5kaWNhdGluZyB0aGUgZmlsdGVyIGNhc2Ugb3B0aW9uXG4gICAqIEBwYXJhbSBmaXRsZXJTY29wZSAtIEVudW0gaW5kaWNhdGluZyB0aGUgZmlsdGVyIHNjb3BlIG9wdGlvblxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGZpdGxlckNhc2U6IEZpbHRlckNhc2UgPSBGaWx0ZXJDYXNlLkNhc2VJbnNlbnNpdGl2ZSxcbiAgICBwdWJsaWMgZml0bGVyU2NvcGU6IEZpbHRlclNjb3BlID0gRmlsdGVyU2NvcGUuQ29udGFpbnNcbiAgKSB7fVxufVxuIl19
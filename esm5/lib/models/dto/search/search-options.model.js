import { __values } from "tslib";
import { SearchMatchFilter } from './search-match-filter.model';
import { SearchRangeFilter } from './search-range-filter.model';
var SearchOptions = /** @class */ (function () {
    function SearchOptions() {
        this.facetFilters = [];
        this.facetRangeFilters = [];
        this.otherFilters = [];
    }
    SearchOptions.prototype.getMatchFilters = function () {
        var e_1, _a, e_2, _b;
        var matchFilters = [];
        try {
            for (var _c = __values(this.facetFilters), _d = _c.next(); !_d.done; _d = _c.next()) {
                var facetFilter = _d.value;
                var matchFilter = new SearchMatchFilter();
                if (facetFilter.excludedFacet) {
                    matchFilter.field =
                        '{!tag=' + facetFilter.token + '}' + facetFilter.field;
                }
                else {
                    matchFilter.field = facetFilter.field;
                }
                if (facetFilter.isString === true) {
                    matchFilter.value = '"' + this.urlDecode(facetFilter.value) + '"';
                }
                else {
                    matchFilter.value = this.urlDecode(facetFilter.value);
                }
                matchFilters.push(matchFilter);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var _e = __values(this.otherFilters), _f = _e.next(); !_f.done; _f = _e.next()) {
                var otherFilter = _f.value;
                matchFilters.push(otherFilter);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return matchFilters;
    };
    SearchOptions.prototype.getRangeFilters = function () {
        var e_3, _a;
        var matchFilters = [];
        try {
            for (var _b = __values(this.facetRangeFilters), _c = _b.next(); !_c.done; _c = _b.next()) {
                var facetFilter = _c.value;
                var rangeFilter = new SearchRangeFilter();
                if (facetFilter.excludedFacet) {
                    rangeFilter.field =
                        '{!tag=' + facetFilter.token + '}' + facetFilter.field;
                }
                else {
                    rangeFilter.field = facetFilter.field;
                }
                rangeFilter.query = facetFilter.query;
                rangeFilter.start = this.urlDecode(facetFilter.fromValue);
                rangeFilter.end = this.urlDecode(facetFilter.toValue);
                matchFilters.push(rangeFilter);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return matchFilters;
    };
    SearchOptions.prototype.urlDecode = function (text) {
        var decodedText = decodeURIComponent(text);
        return decodedText;
    };
    return SearchOptions;
}());
export { SearchOptions };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLW9wdGlvbnMubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZHRvL3NlYXJjaC9zZWFyY2gtb3B0aW9ucy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFaEU7SUFBQTtRQU1TLGlCQUFZLEdBQXdCLEVBQUUsQ0FBQztRQUN2QyxzQkFBaUIsR0FBNkIsRUFBRSxDQUFDO1FBQ2pELGlCQUFZLEdBQXdCLEVBQUUsQ0FBQztJQStDaEQsQ0FBQztJQTdDUSx1Q0FBZSxHQUF0Qjs7UUFDRSxJQUFNLFlBQVksR0FBd0IsRUFBRSxDQUFDOztZQUM3QyxLQUEwQixJQUFBLEtBQUEsU0FBQSxJQUFJLENBQUMsWUFBWSxDQUFBLGdCQUFBLDRCQUFFO2dCQUF4QyxJQUFNLFdBQVcsV0FBQTtnQkFDcEIsSUFBTSxXQUFXLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO2dCQUM1QyxJQUFJLFdBQVcsQ0FBQyxhQUFhLEVBQUU7b0JBQzdCLFdBQVcsQ0FBQyxLQUFLO3dCQUNmLFFBQVEsR0FBRyxXQUFXLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO2lCQUMxRDtxQkFBTTtvQkFDTCxXQUFXLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7aUJBQ3ZDO2dCQUNELElBQUksV0FBVyxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7b0JBQ2pDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQztpQkFDbkU7cUJBQU07b0JBQ0wsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdkQ7Z0JBQ0QsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNoQzs7Ozs7Ozs7OztZQUNELEtBQTBCLElBQUEsS0FBQSxTQUFBLElBQUksQ0FBQyxZQUFZLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQXhDLElBQU0sV0FBVyxXQUFBO2dCQUNwQixZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2hDOzs7Ozs7Ozs7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRU0sdUNBQWUsR0FBdEI7O1FBQ0UsSUFBTSxZQUFZLEdBQXdCLEVBQUUsQ0FBQzs7WUFDN0MsS0FBMEIsSUFBQSxLQUFBLFNBQUEsSUFBSSxDQUFDLGlCQUFpQixDQUFBLGdCQUFBLDRCQUFFO2dCQUE3QyxJQUFNLFdBQVcsV0FBQTtnQkFDcEIsSUFBTSxXQUFXLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO2dCQUM1QyxJQUFJLFdBQVcsQ0FBQyxhQUFhLEVBQUU7b0JBQzdCLFdBQVcsQ0FBQyxLQUFLO3dCQUNmLFFBQVEsR0FBRyxXQUFXLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO2lCQUMxRDtxQkFBTTtvQkFDTCxXQUFXLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7aUJBQ3ZDO2dCQUNELFdBQVcsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDdEMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDMUQsV0FBVyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdEQsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNoQzs7Ozs7Ozs7O1FBQ0QsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVPLGlDQUFTLEdBQWpCLFVBQWtCLElBQVk7UUFDNUIsSUFBTSxXQUFXLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXZERCxJQXVEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaEZhY2V0T3B0aW9ucyB9IGZyb20gJy4vc2VhcmNoLWZhY2V0LW9wdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgU2VhcmNoRmFjZXRGaWx0ZXIgfSBmcm9tICcuL3NlYXJjaC1mYWNldC1maWx0ZXIubW9kZWwnO1xuaW1wb3J0IHsgU2VhcmNoRmFjZXRSYW5nZUZpbHRlciB9IGZyb20gJy4vc2VhcmNoLWZhY2V0LXJhbmdlLWZpbHRlci5tb2RlbCc7XG5pbXBvcnQgeyBTZWFyY2hNYXRjaEZpbHRlciB9IGZyb20gJy4vc2VhcmNoLW1hdGNoLWZpbHRlci5tb2RlbCc7XG5pbXBvcnQgeyBTZWFyY2hSYW5nZUZpbHRlciB9IGZyb20gJy4vc2VhcmNoLXJhbmdlLWZpbHRlci5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hPcHRpb25zIHtcbiAgcHVibGljIHE6IHN0cmluZztcbiAgcHVibGljIHNvdXJjZTogc3RyaW5nO1xuICBwdWJsaWMgc3RhcnQ6IG51bWJlcjtcbiAgcHVibGljIHJvd3M6IG51bWJlcjtcbiAgcHVibGljIGZhY2V0T3B0aW9uczogU2VhcmNoRmFjZXRPcHRpb25zO1xuICBwdWJsaWMgZmFjZXRGaWx0ZXJzOiBTZWFyY2hGYWNldEZpbHRlcltdID0gW107XG4gIHB1YmxpYyBmYWNldFJhbmdlRmlsdGVyczogU2VhcmNoRmFjZXRSYW5nZUZpbHRlcltdID0gW107XG4gIHB1YmxpYyBvdGhlckZpbHRlcnM6IFNlYXJjaE1hdGNoRmlsdGVyW10gPSBbXTtcblxuICBwdWJsaWMgZ2V0TWF0Y2hGaWx0ZXJzKCk6IFNlYXJjaE1hdGNoRmlsdGVyW10ge1xuICAgIGNvbnN0IG1hdGNoRmlsdGVyczogU2VhcmNoTWF0Y2hGaWx0ZXJbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZmFjZXRGaWx0ZXIgb2YgdGhpcy5mYWNldEZpbHRlcnMpIHtcbiAgICAgIGNvbnN0IG1hdGNoRmlsdGVyID0gbmV3IFNlYXJjaE1hdGNoRmlsdGVyKCk7XG4gICAgICBpZiAoZmFjZXRGaWx0ZXIuZXhjbHVkZWRGYWNldCkge1xuICAgICAgICBtYXRjaEZpbHRlci5maWVsZCA9XG4gICAgICAgICAgJ3shdGFnPScgKyBmYWNldEZpbHRlci50b2tlbiArICd9JyArIGZhY2V0RmlsdGVyLmZpZWxkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWF0Y2hGaWx0ZXIuZmllbGQgPSBmYWNldEZpbHRlci5maWVsZDtcbiAgICAgIH1cbiAgICAgIGlmIChmYWNldEZpbHRlci5pc1N0cmluZyA9PT0gdHJ1ZSkge1xuICAgICAgICBtYXRjaEZpbHRlci52YWx1ZSA9ICdcIicgKyB0aGlzLnVybERlY29kZShmYWNldEZpbHRlci52YWx1ZSkgKyAnXCInO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWF0Y2hGaWx0ZXIudmFsdWUgPSB0aGlzLnVybERlY29kZShmYWNldEZpbHRlci52YWx1ZSk7XG4gICAgICB9XG4gICAgICBtYXRjaEZpbHRlcnMucHVzaChtYXRjaEZpbHRlcik7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgb3RoZXJGaWx0ZXIgb2YgdGhpcy5vdGhlckZpbHRlcnMpIHtcbiAgICAgIG1hdGNoRmlsdGVycy5wdXNoKG90aGVyRmlsdGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoRmlsdGVycztcbiAgfVxuXG4gIHB1YmxpYyBnZXRSYW5nZUZpbHRlcnMoKTogU2VhcmNoUmFuZ2VGaWx0ZXJbXSB7XG4gICAgY29uc3QgbWF0Y2hGaWx0ZXJzOiBTZWFyY2hSYW5nZUZpbHRlcltdID0gW107XG4gICAgZm9yIChjb25zdCBmYWNldEZpbHRlciBvZiB0aGlzLmZhY2V0UmFuZ2VGaWx0ZXJzKSB7XG4gICAgICBjb25zdCByYW5nZUZpbHRlciA9IG5ldyBTZWFyY2hSYW5nZUZpbHRlcigpO1xuICAgICAgaWYgKGZhY2V0RmlsdGVyLmV4Y2x1ZGVkRmFjZXQpIHtcbiAgICAgICAgcmFuZ2VGaWx0ZXIuZmllbGQgPVxuICAgICAgICAgICd7IXRhZz0nICsgZmFjZXRGaWx0ZXIudG9rZW4gKyAnfScgKyBmYWNldEZpbHRlci5maWVsZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJhbmdlRmlsdGVyLmZpZWxkID0gZmFjZXRGaWx0ZXIuZmllbGQ7XG4gICAgICB9XG4gICAgICByYW5nZUZpbHRlci5xdWVyeSA9IGZhY2V0RmlsdGVyLnF1ZXJ5O1xuICAgICAgcmFuZ2VGaWx0ZXIuc3RhcnQgPSB0aGlzLnVybERlY29kZShmYWNldEZpbHRlci5mcm9tVmFsdWUpO1xuICAgICAgcmFuZ2VGaWx0ZXIuZW5kID0gdGhpcy51cmxEZWNvZGUoZmFjZXRGaWx0ZXIudG9WYWx1ZSk7XG4gICAgICBtYXRjaEZpbHRlcnMucHVzaChyYW5nZUZpbHRlcik7XG4gICAgfVxuICAgIHJldHVybiBtYXRjaEZpbHRlcnM7XG4gIH1cblxuICBwcml2YXRlIHVybERlY29kZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGRlY29kZWRUZXh0ID0gZGVjb2RlVVJJQ29tcG9uZW50KHRleHQpO1xuICAgIHJldHVybiBkZWNvZGVkVGV4dDtcbiAgfVxufVxuIl19
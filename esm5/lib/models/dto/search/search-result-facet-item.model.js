import { __values } from "tslib";
var SearchResultFacetItem = /** @class */ (function () {
    function SearchResultFacetItem() {
        this.label = '';
        this.count = 0;
        this.query = '';
        this.active = false;
    }
    SearchResultFacetItem.prototype.createQuery = function (q, facetFilters, rangeQueries) {
        var e_1, _a, e_2, _b;
        var queryString = '';
        queryString = this.appendQueryString(queryString, 'f=');
        var activeFilter = null;
        var foundToken = false;
        try {
            for (var facetFilters_1 = __values(facetFilters), facetFilters_1_1 = facetFilters_1.next(); !facetFilters_1_1.done; facetFilters_1_1 = facetFilters_1.next()) {
                var facetFilter = facetFilters_1_1.value;
                if (facetFilter.token === this.token &&
                    facetFilter.value === this.value) {
                    activeFilter = facetFilter;
                    foundToken = true;
                    this.active = true;
                    continue;
                }
                else if (facetFilter.token === this.token) {
                    continue;
                }
                queryString +=
                    facetFilter.token + ':' + this.urlEncode(facetFilter.value) + ';';
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (facetFilters_1_1 && !facetFilters_1_1.done && (_a = facetFilters_1.return)) _a.call(facetFilters_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var activeRangeQuery = null;
        try {
            for (var rangeQueries_1 = __values(rangeQueries), rangeQueries_1_1 = rangeQueries_1.next(); !rangeQueries_1_1.done; rangeQueries_1_1 = rangeQueries_1.next()) {
                var rangeQuery = rangeQueries_1_1.value;
                if (rangeQuery.token === this.token && rangeQuery.value === this.value) {
                    activeRangeQuery = rangeQuery;
                    foundToken = true;
                    this.active = true;
                    continue;
                }
                else if (rangeQuery.token === this.token) {
                    continue;
                }
                queryString +=
                    rangeQuery.token + ':' + this.urlEncode(rangeQuery.value) + ';';
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (rangeQueries_1_1 && !rangeQueries_1_1.done && (_b = rangeQueries_1.return)) _b.call(rangeQueries_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (foundToken === false) {
            queryString += this.token + ':' + this.urlEncode(this.value);
        }
        if (queryString.endsWith(';')) {
            queryString = queryString.substr(0, queryString.length - 1);
        }
        if (queryString === 'f=') {
            queryString = '';
        }
        if (activeFilter) {
            activeFilter.query = queryString;
            this.active = true;
        }
        if (activeRangeQuery) {
            activeRangeQuery.query = queryString;
            this.active = true;
        }
        this.query = queryString;
    };
    SearchResultFacetItem.prototype.appendQueryString = function (queryString, appendString) {
        var appendedQueryString;
        if (!queryString) {
            appendedQueryString = '';
        }
        else {
            appendedQueryString = queryString + '&';
        }
        appendedQueryString += appendString;
        return appendedQueryString;
    };
    SearchResultFacetItem.prototype.urlEncode = function (text) {
        var encodedText = encodeURIComponent(text);
        return encodedText;
    };
    return SearchResultFacetItem;
}());
export { SearchResultFacetItem };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdC1mYWNldC1pdGVtLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGVhdGhlcm1hbi1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2R0by9zZWFyY2gvc2VhcmNoLXJlc3VsdC1mYWNldC1pdGVtLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQTtJQVFFO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRU0sMkNBQVcsR0FBbEIsVUFDRSxDQUFTLEVBQ1QsWUFBaUMsRUFDakMsWUFBc0M7O1FBRXRDLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUNyQixXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV4RCxJQUFJLFlBQVksR0FBNkIsSUFBSSxDQUFDO1FBQ2xELElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQzs7WUFFdkIsS0FBMEIsSUFBQSxpQkFBQSxTQUFBLFlBQVksQ0FBQSwwQ0FBQSxvRUFBRTtnQkFBbkMsSUFBTSxXQUFXLHlCQUFBO2dCQUNwQixJQUNFLFdBQVcsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUs7b0JBQ2hDLFdBQVcsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssRUFDaEM7b0JBQ0EsWUFBWSxHQUFHLFdBQVcsQ0FBQztvQkFDM0IsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25CLFNBQVM7aUJBQ1Y7cUJBQU0sSUFBSSxXQUFXLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQzNDLFNBQVM7aUJBQ1Y7Z0JBRUQsV0FBVztvQkFDVCxXQUFXLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDckU7Ozs7Ozs7OztRQUVELElBQUksZ0JBQWdCLEdBQWtDLElBQUksQ0FBQzs7WUFDM0QsS0FBeUIsSUFBQSxpQkFBQSxTQUFBLFlBQVksQ0FBQSwwQ0FBQSxvRUFBRTtnQkFBbEMsSUFBTSxVQUFVLHlCQUFBO2dCQUNuQixJQUFJLFVBQVUsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxVQUFVLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ3RFLGdCQUFnQixHQUFHLFVBQVUsQ0FBQztvQkFDOUIsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ25CLFNBQVM7aUJBQ1Y7cUJBQU0sSUFBSSxVQUFVLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQzFDLFNBQVM7aUJBQ1Y7Z0JBRUQsV0FBVztvQkFDVCxVQUFVLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDbkU7Ozs7Ozs7OztRQUVELElBQUksVUFBVSxLQUFLLEtBQUssRUFBRTtZQUN4QixXQUFXLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUQ7UUFFRCxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDN0Q7UUFFRCxJQUFJLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDeEIsV0FBVyxHQUFHLEVBQUUsQ0FBQztTQUNsQjtRQUVELElBQUksWUFBWSxFQUFFO1lBQ2hCLFlBQVksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUM7SUFDM0IsQ0FBQztJQUVPLGlEQUFpQixHQUF6QixVQUEwQixXQUFtQixFQUFFLFlBQW9CO1FBQ2pFLElBQUksbUJBQTJCLENBQUM7UUFFaEMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixtQkFBbUIsR0FBRyxFQUFFLENBQUM7U0FDMUI7YUFBTTtZQUNMLG1CQUFtQixHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUM7U0FDekM7UUFFRCxtQkFBbUIsSUFBSSxZQUFZLENBQUM7UUFFcEMsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBRU8seUNBQVMsR0FBakIsVUFBa0IsSUFBWTtRQUM1QixJQUFNLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBckdELElBcUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VhcmNoRmFjZXRGaWx0ZXIgfSBmcm9tICcuL3NlYXJjaC1mYWNldC1maWx0ZXIubW9kZWwnO1xuaW1wb3J0IHsgU2VhcmNoRmFjZXRSYW5nZUZpbHRlciB9IGZyb20gJy4vc2VhcmNoLWZhY2V0LXJhbmdlLWZpbHRlci5tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hSZXN1bHRGYWNldEl0ZW0ge1xuICBwdWJsaWMgdG9rZW46IHN0cmluZztcbiAgcHVibGljIHZhbHVlOiBzdHJpbmc7XG4gIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuICBwdWJsaWMgY291bnQ6IG51bWJlcjtcbiAgcHVibGljIHF1ZXJ5OiBzdHJpbmc7XG4gIHB1YmxpYyBhY3RpdmU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5sYWJlbCA9ICcnO1xuICAgIHRoaXMuY291bnQgPSAwO1xuICAgIHRoaXMucXVlcnkgPSAnJztcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZVF1ZXJ5KFxuICAgIHE6IHN0cmluZyxcbiAgICBmYWNldEZpbHRlcnM6IFNlYXJjaEZhY2V0RmlsdGVyW10sXG4gICAgcmFuZ2VRdWVyaWVzOiBTZWFyY2hGYWNldFJhbmdlRmlsdGVyW11cbiAgKSB7XG4gICAgbGV0IHF1ZXJ5U3RyaW5nID0gJyc7XG4gICAgcXVlcnlTdHJpbmcgPSB0aGlzLmFwcGVuZFF1ZXJ5U3RyaW5nKHF1ZXJ5U3RyaW5nLCAnZj0nKTtcblxuICAgIGxldCBhY3RpdmVGaWx0ZXI6IFNlYXJjaEZhY2V0RmlsdGVyIHwgbnVsbCA9IG51bGw7XG4gICAgbGV0IGZvdW5kVG9rZW4gPSBmYWxzZTtcblxuICAgIGZvciAoY29uc3QgZmFjZXRGaWx0ZXIgb2YgZmFjZXRGaWx0ZXJzKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGZhY2V0RmlsdGVyLnRva2VuID09PSB0aGlzLnRva2VuICYmXG4gICAgICAgIGZhY2V0RmlsdGVyLnZhbHVlID09PSB0aGlzLnZhbHVlXG4gICAgICApIHtcbiAgICAgICAgYWN0aXZlRmlsdGVyID0gZmFjZXRGaWx0ZXI7XG4gICAgICAgIGZvdW5kVG9rZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIGlmIChmYWNldEZpbHRlci50b2tlbiA9PT0gdGhpcy50b2tlbikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcXVlcnlTdHJpbmcgKz1cbiAgICAgICAgZmFjZXRGaWx0ZXIudG9rZW4gKyAnOicgKyB0aGlzLnVybEVuY29kZShmYWNldEZpbHRlci52YWx1ZSkgKyAnOyc7XG4gICAgfVxuXG4gICAgbGV0IGFjdGl2ZVJhbmdlUXVlcnk6IFNlYXJjaEZhY2V0UmFuZ2VGaWx0ZXIgfCBudWxsID0gbnVsbDtcbiAgICBmb3IgKGNvbnN0IHJhbmdlUXVlcnkgb2YgcmFuZ2VRdWVyaWVzKSB7XG4gICAgICBpZiAocmFuZ2VRdWVyeS50b2tlbiA9PT0gdGhpcy50b2tlbiAmJiByYW5nZVF1ZXJ5LnZhbHVlID09PSB0aGlzLnZhbHVlKSB7XG4gICAgICAgIGFjdGl2ZVJhbmdlUXVlcnkgPSByYW5nZVF1ZXJ5O1xuICAgICAgICBmb3VuZFRva2VuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSBpZiAocmFuZ2VRdWVyeS50b2tlbiA9PT0gdGhpcy50b2tlbikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcXVlcnlTdHJpbmcgKz1cbiAgICAgICAgcmFuZ2VRdWVyeS50b2tlbiArICc6JyArIHRoaXMudXJsRW5jb2RlKHJhbmdlUXVlcnkudmFsdWUpICsgJzsnO1xuICAgIH1cblxuICAgIGlmIChmb3VuZFRva2VuID09PSBmYWxzZSkge1xuICAgICAgcXVlcnlTdHJpbmcgKz0gdGhpcy50b2tlbiArICc6JyArIHRoaXMudXJsRW5jb2RlKHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIGlmIChxdWVyeVN0cmluZy5lbmRzV2l0aCgnOycpKSB7XG4gICAgICBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nLnN1YnN0cigwLCBxdWVyeVN0cmluZy5sZW5ndGggLSAxKTtcbiAgICB9XG5cbiAgICBpZiAocXVlcnlTdHJpbmcgPT09ICdmPScpIHtcbiAgICAgIHF1ZXJ5U3RyaW5nID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZUZpbHRlcikge1xuICAgICAgYWN0aXZlRmlsdGVyLnF1ZXJ5ID0gcXVlcnlTdHJpbmc7XG4gICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZVJhbmdlUXVlcnkpIHtcbiAgICAgIGFjdGl2ZVJhbmdlUXVlcnkucXVlcnkgPSBxdWVyeVN0cmluZztcbiAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlTdHJpbmc7XG4gIH1cblxuICBwcml2YXRlIGFwcGVuZFF1ZXJ5U3RyaW5nKHF1ZXJ5U3RyaW5nOiBzdHJpbmcsIGFwcGVuZFN0cmluZzogc3RyaW5nKSB7XG4gICAgbGV0IGFwcGVuZGVkUXVlcnlTdHJpbmc6IHN0cmluZztcblxuICAgIGlmICghcXVlcnlTdHJpbmcpIHtcbiAgICAgIGFwcGVuZGVkUXVlcnlTdHJpbmcgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgYXBwZW5kZWRRdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nICsgJyYnO1xuICAgIH1cblxuICAgIGFwcGVuZGVkUXVlcnlTdHJpbmcgKz0gYXBwZW5kU3RyaW5nO1xuXG4gICAgcmV0dXJuIGFwcGVuZGVkUXVlcnlTdHJpbmc7XG4gIH1cblxuICBwcml2YXRlIHVybEVuY29kZSh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGVuY29kZWRUZXh0ID0gZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpO1xuICAgIHJldHVybiBlbmNvZGVkVGV4dDtcbiAgfVxufVxuIl19
export class SearchResultFacetItem {
    constructor() {
        this.label = '';
        this.count = 0;
        this.query = '';
        this.active = false;
    }
    createQuery(q, facetFilters, rangeQueries) {
        let queryString = '';
        queryString = this.appendQueryString(queryString, 'f=');
        let activeFilter = null;
        let foundToken = false;
        for (const facetFilter of facetFilters) {
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
        let activeRangeQuery = null;
        for (const rangeQuery of rangeQueries) {
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
    }
    appendQueryString(queryString, appendString) {
        let appendedQueryString;
        if (!queryString) {
            appendedQueryString = '';
        }
        else {
            appendedQueryString = queryString + '&';
        }
        appendedQueryString += appendString;
        return appendedQueryString;
    }
    urlEncode(text) {
        const encodedText = encodeURIComponent(text);
        return encodedText;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdC1mYWNldC1pdGVtLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGVhdGhlcm1hbi1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2R0by9zZWFyY2gvc2VhcmNoLXJlc3VsdC1mYWNldC1pdGVtLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sT0FBTyxxQkFBcUI7SUFRaEM7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxXQUFXLENBQ2hCLENBQVMsRUFDVCxZQUFpQyxFQUNqQyxZQUFzQztRQUV0QyxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDckIsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFeEQsSUFBSSxZQUFZLEdBQTZCLElBQUksQ0FBQztRQUNsRCxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFFdkIsS0FBSyxNQUFNLFdBQVcsSUFBSSxZQUFZLEVBQUU7WUFDdEMsSUFDRSxXQUFXLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLO2dCQUNoQyxXQUFXLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQ2hDO2dCQUNBLFlBQVksR0FBRyxXQUFXLENBQUM7Z0JBQzNCLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixTQUFTO2FBQ1Y7aUJBQU0sSUFBSSxXQUFXLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQzNDLFNBQVM7YUFDVjtZQUVELFdBQVc7Z0JBQ1QsV0FBVyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQ3JFO1FBRUQsSUFBSSxnQkFBZ0IsR0FBa0MsSUFBSSxDQUFDO1FBQzNELEtBQUssTUFBTSxVQUFVLElBQUksWUFBWSxFQUFFO1lBQ3JDLElBQUksVUFBVSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLFVBQVUsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDdEUsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDO2dCQUM5QixVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsU0FBUzthQUNWO2lCQUFNLElBQUksVUFBVSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUMxQyxTQUFTO2FBQ1Y7WUFFRCxXQUFXO2dCQUNULFVBQVUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUNuRTtRQUVELElBQUksVUFBVSxLQUFLLEtBQUssRUFBRTtZQUN4QixXQUFXLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUQ7UUFFRCxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDN0IsV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDN0Q7UUFFRCxJQUFJLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDeEIsV0FBVyxHQUFHLEVBQUUsQ0FBQztTQUNsQjtRQUVELElBQUksWUFBWSxFQUFFO1lBQ2hCLFlBQVksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUM7SUFDM0IsQ0FBQztJQUVPLGlCQUFpQixDQUFDLFdBQW1CLEVBQUUsWUFBb0I7UUFDakUsSUFBSSxtQkFBMkIsQ0FBQztRQUVoQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztTQUMxQjthQUFNO1lBQ0wsbUJBQW1CLEdBQUcsV0FBVyxHQUFHLEdBQUcsQ0FBQztTQUN6QztRQUVELG1CQUFtQixJQUFJLFlBQVksQ0FBQztRQUVwQyxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFTyxTQUFTLENBQUMsSUFBWTtRQUM1QixNQUFNLFdBQVcsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hGYWNldEZpbHRlciB9IGZyb20gJy4vc2VhcmNoLWZhY2V0LWZpbHRlci5tb2RlbCc7XG5pbXBvcnQgeyBTZWFyY2hGYWNldFJhbmdlRmlsdGVyIH0gZnJvbSAnLi9zZWFyY2gtZmFjZXQtcmFuZ2UtZmlsdGVyLm1vZGVsJztcblxuZXhwb3J0IGNsYXNzIFNlYXJjaFJlc3VsdEZhY2V0SXRlbSB7XG4gIHB1YmxpYyB0b2tlbjogc3RyaW5nO1xuICBwdWJsaWMgdmFsdWU6IHN0cmluZztcbiAgcHVibGljIGxhYmVsOiBzdHJpbmc7XG4gIHB1YmxpYyBjb3VudDogbnVtYmVyO1xuICBwdWJsaWMgcXVlcnk6IHN0cmluZztcbiAgcHVibGljIGFjdGl2ZTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxhYmVsID0gJyc7XG4gICAgdGhpcy5jb3VudCA9IDA7XG4gICAgdGhpcy5xdWVyeSA9ICcnO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlUXVlcnkoXG4gICAgcTogc3RyaW5nLFxuICAgIGZhY2V0RmlsdGVyczogU2VhcmNoRmFjZXRGaWx0ZXJbXSxcbiAgICByYW5nZVF1ZXJpZXM6IFNlYXJjaEZhY2V0UmFuZ2VGaWx0ZXJbXVxuICApIHtcbiAgICBsZXQgcXVlcnlTdHJpbmcgPSAnJztcbiAgICBxdWVyeVN0cmluZyA9IHRoaXMuYXBwZW5kUXVlcnlTdHJpbmcocXVlcnlTdHJpbmcsICdmPScpO1xuXG4gICAgbGV0IGFjdGl2ZUZpbHRlcjogU2VhcmNoRmFjZXRGaWx0ZXIgfCBudWxsID0gbnVsbDtcbiAgICBsZXQgZm91bmRUb2tlbiA9IGZhbHNlO1xuXG4gICAgZm9yIChjb25zdCBmYWNldEZpbHRlciBvZiBmYWNldEZpbHRlcnMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZmFjZXRGaWx0ZXIudG9rZW4gPT09IHRoaXMudG9rZW4gJiZcbiAgICAgICAgZmFjZXRGaWx0ZXIudmFsdWUgPT09IHRoaXMudmFsdWVcbiAgICAgICkge1xuICAgICAgICBhY3RpdmVGaWx0ZXIgPSBmYWNldEZpbHRlcjtcbiAgICAgICAgZm91bmRUb2tlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IGVsc2UgaWYgKGZhY2V0RmlsdGVyLnRva2VuID09PSB0aGlzLnRva2VuKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBxdWVyeVN0cmluZyArPVxuICAgICAgICBmYWNldEZpbHRlci50b2tlbiArICc6JyArIHRoaXMudXJsRW5jb2RlKGZhY2V0RmlsdGVyLnZhbHVlKSArICc7JztcbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlUmFuZ2VRdWVyeTogU2VhcmNoRmFjZXRSYW5nZUZpbHRlciB8IG51bGwgPSBudWxsO1xuICAgIGZvciAoY29uc3QgcmFuZ2VRdWVyeSBvZiByYW5nZVF1ZXJpZXMpIHtcbiAgICAgIGlmIChyYW5nZVF1ZXJ5LnRva2VuID09PSB0aGlzLnRva2VuICYmIHJhbmdlUXVlcnkudmFsdWUgPT09IHRoaXMudmFsdWUpIHtcbiAgICAgICAgYWN0aXZlUmFuZ2VRdWVyeSA9IHJhbmdlUXVlcnk7XG4gICAgICAgIGZvdW5kVG9rZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIGlmIChyYW5nZVF1ZXJ5LnRva2VuID09PSB0aGlzLnRva2VuKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBxdWVyeVN0cmluZyArPVxuICAgICAgICByYW5nZVF1ZXJ5LnRva2VuICsgJzonICsgdGhpcy51cmxFbmNvZGUocmFuZ2VRdWVyeS52YWx1ZSkgKyAnOyc7XG4gICAgfVxuXG4gICAgaWYgKGZvdW5kVG9rZW4gPT09IGZhbHNlKSB7XG4gICAgICBxdWVyeVN0cmluZyArPSB0aGlzLnRva2VuICsgJzonICsgdGhpcy51cmxFbmNvZGUodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHF1ZXJ5U3RyaW5nLmVuZHNXaXRoKCc7JykpIHtcbiAgICAgIHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmcuc3Vic3RyKDAsIHF1ZXJ5U3RyaW5nLmxlbmd0aCAtIDEpO1xuICAgIH1cblxuICAgIGlmIChxdWVyeVN0cmluZyA9PT0gJ2Y9Jykge1xuICAgICAgcXVlcnlTdHJpbmcgPSAnJztcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlRmlsdGVyKSB7XG4gICAgICBhY3RpdmVGaWx0ZXIucXVlcnkgPSBxdWVyeVN0cmluZztcbiAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlUmFuZ2VRdWVyeSkge1xuICAgICAgYWN0aXZlUmFuZ2VRdWVyeS5xdWVyeSA9IHF1ZXJ5U3RyaW5nO1xuICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVN0cmluZztcbiAgfVxuXG4gIHByaXZhdGUgYXBwZW5kUXVlcnlTdHJpbmcocXVlcnlTdHJpbmc6IHN0cmluZywgYXBwZW5kU3RyaW5nOiBzdHJpbmcpIHtcbiAgICBsZXQgYXBwZW5kZWRRdWVyeVN0cmluZzogc3RyaW5nO1xuXG4gICAgaWYgKCFxdWVyeVN0cmluZykge1xuICAgICAgYXBwZW5kZWRRdWVyeVN0cmluZyA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcHBlbmRlZFF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmcgKyAnJic7XG4gICAgfVxuXG4gICAgYXBwZW5kZWRRdWVyeVN0cmluZyArPSBhcHBlbmRTdHJpbmc7XG5cbiAgICByZXR1cm4gYXBwZW5kZWRRdWVyeVN0cmluZztcbiAgfVxuXG4gIHByaXZhdGUgdXJsRW5jb2RlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgZW5jb2RlZFRleHQgPSBlbmNvZGVVUklDb21wb25lbnQodGV4dCk7XG4gICAgcmV0dXJuIGVuY29kZWRUZXh0O1xuICB9XG59XG4iXX0=
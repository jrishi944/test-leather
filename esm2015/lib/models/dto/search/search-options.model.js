import { SearchMatchFilter } from './search-match-filter.model';
import { SearchRangeFilter } from './search-range-filter.model';
export class SearchOptions {
    constructor() {
        this.facetFilters = [];
        this.facetRangeFilters = [];
        this.otherFilters = [];
    }
    getMatchFilters() {
        const matchFilters = [];
        for (const facetFilter of this.facetFilters) {
            const matchFilter = new SearchMatchFilter();
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
        for (const otherFilter of this.otherFilters) {
            matchFilters.push(otherFilter);
        }
        return matchFilters;
    }
    getRangeFilters() {
        const matchFilters = [];
        for (const facetFilter of this.facetRangeFilters) {
            const rangeFilter = new SearchRangeFilter();
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
        return matchFilters;
    }
    urlDecode(text) {
        const decodedText = decodeURIComponent(text);
        return decodedText;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLW9wdGlvbnMubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvZHRvL3NlYXJjaC9zZWFyY2gtb3B0aW9ucy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVoRSxNQUFNLE9BQU8sYUFBYTtJQUExQjtRQU1TLGlCQUFZLEdBQXdCLEVBQUUsQ0FBQztRQUN2QyxzQkFBaUIsR0FBNkIsRUFBRSxDQUFDO1FBQ2pELGlCQUFZLEdBQXdCLEVBQUUsQ0FBQztJQStDaEQsQ0FBQztJQTdDUSxlQUFlO1FBQ3BCLE1BQU0sWUFBWSxHQUF3QixFQUFFLENBQUM7UUFDN0MsS0FBSyxNQUFNLFdBQVcsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzNDLE1BQU0sV0FBVyxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztZQUM1QyxJQUFJLFdBQVcsQ0FBQyxhQUFhLEVBQUU7Z0JBQzdCLFdBQVcsQ0FBQyxLQUFLO29CQUNmLFFBQVEsR0FBRyxXQUFXLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO2FBQzFEO2lCQUFNO2dCQUNMLFdBQVcsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQzthQUN2QztZQUNELElBQUksV0FBVyxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7Z0JBQ2pDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQzthQUNuRTtpQkFBTTtnQkFDTCxXQUFXLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3ZEO1lBQ0QsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNoQztRQUNELEtBQUssTUFBTSxXQUFXLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUMzQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVNLGVBQWU7UUFDcEIsTUFBTSxZQUFZLEdBQXdCLEVBQUUsQ0FBQztRQUM3QyxLQUFLLE1BQU0sV0FBVyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUNoRCxNQUFNLFdBQVcsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7WUFDNUMsSUFBSSxXQUFXLENBQUMsYUFBYSxFQUFFO2dCQUM3QixXQUFXLENBQUMsS0FBSztvQkFDZixRQUFRLEdBQUcsV0FBVyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQzthQUMxRDtpQkFBTTtnQkFDTCxXQUFXLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7YUFDdkM7WUFDRCxXQUFXLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDdEMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxRCxXQUFXLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RELFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDaEM7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRU8sU0FBUyxDQUFDLElBQVk7UUFDNUIsTUFBTSxXQUFXLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VhcmNoRmFjZXRPcHRpb25zIH0gZnJvbSAnLi9zZWFyY2gtZmFjZXQtb3B0aW9ucy5tb2RlbCc7XG5pbXBvcnQgeyBTZWFyY2hGYWNldEZpbHRlciB9IGZyb20gJy4vc2VhcmNoLWZhY2V0LWZpbHRlci5tb2RlbCc7XG5pbXBvcnQgeyBTZWFyY2hGYWNldFJhbmdlRmlsdGVyIH0gZnJvbSAnLi9zZWFyY2gtZmFjZXQtcmFuZ2UtZmlsdGVyLm1vZGVsJztcbmltcG9ydCB7IFNlYXJjaE1hdGNoRmlsdGVyIH0gZnJvbSAnLi9zZWFyY2gtbWF0Y2gtZmlsdGVyLm1vZGVsJztcbmltcG9ydCB7IFNlYXJjaFJhbmdlRmlsdGVyIH0gZnJvbSAnLi9zZWFyY2gtcmFuZ2UtZmlsdGVyLm1vZGVsJztcblxuZXhwb3J0IGNsYXNzIFNlYXJjaE9wdGlvbnMge1xuICBwdWJsaWMgcTogc3RyaW5nO1xuICBwdWJsaWMgc291cmNlOiBzdHJpbmc7XG4gIHB1YmxpYyBzdGFydDogbnVtYmVyO1xuICBwdWJsaWMgcm93czogbnVtYmVyO1xuICBwdWJsaWMgZmFjZXRPcHRpb25zOiBTZWFyY2hGYWNldE9wdGlvbnM7XG4gIHB1YmxpYyBmYWNldEZpbHRlcnM6IFNlYXJjaEZhY2V0RmlsdGVyW10gPSBbXTtcbiAgcHVibGljIGZhY2V0UmFuZ2VGaWx0ZXJzOiBTZWFyY2hGYWNldFJhbmdlRmlsdGVyW10gPSBbXTtcbiAgcHVibGljIG90aGVyRmlsdGVyczogU2VhcmNoTWF0Y2hGaWx0ZXJbXSA9IFtdO1xuXG4gIHB1YmxpYyBnZXRNYXRjaEZpbHRlcnMoKTogU2VhcmNoTWF0Y2hGaWx0ZXJbXSB7XG4gICAgY29uc3QgbWF0Y2hGaWx0ZXJzOiBTZWFyY2hNYXRjaEZpbHRlcltdID0gW107XG4gICAgZm9yIChjb25zdCBmYWNldEZpbHRlciBvZiB0aGlzLmZhY2V0RmlsdGVycykge1xuICAgICAgY29uc3QgbWF0Y2hGaWx0ZXIgPSBuZXcgU2VhcmNoTWF0Y2hGaWx0ZXIoKTtcbiAgICAgIGlmIChmYWNldEZpbHRlci5leGNsdWRlZEZhY2V0KSB7XG4gICAgICAgIG1hdGNoRmlsdGVyLmZpZWxkID1cbiAgICAgICAgICAneyF0YWc9JyArIGZhY2V0RmlsdGVyLnRva2VuICsgJ30nICsgZmFjZXRGaWx0ZXIuZmllbGQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXRjaEZpbHRlci5maWVsZCA9IGZhY2V0RmlsdGVyLmZpZWxkO1xuICAgICAgfVxuICAgICAgaWYgKGZhY2V0RmlsdGVyLmlzU3RyaW5nID09PSB0cnVlKSB7XG4gICAgICAgIG1hdGNoRmlsdGVyLnZhbHVlID0gJ1wiJyArIHRoaXMudXJsRGVjb2RlKGZhY2V0RmlsdGVyLnZhbHVlKSArICdcIic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXRjaEZpbHRlci52YWx1ZSA9IHRoaXMudXJsRGVjb2RlKGZhY2V0RmlsdGVyLnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIG1hdGNoRmlsdGVycy5wdXNoKG1hdGNoRmlsdGVyKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBvdGhlckZpbHRlciBvZiB0aGlzLm90aGVyRmlsdGVycykge1xuICAgICAgbWF0Y2hGaWx0ZXJzLnB1c2gob3RoZXJGaWx0ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hGaWx0ZXJzO1xuICB9XG5cbiAgcHVibGljIGdldFJhbmdlRmlsdGVycygpOiBTZWFyY2hSYW5nZUZpbHRlcltdIHtcbiAgICBjb25zdCBtYXRjaEZpbHRlcnM6IFNlYXJjaFJhbmdlRmlsdGVyW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGZhY2V0RmlsdGVyIG9mIHRoaXMuZmFjZXRSYW5nZUZpbHRlcnMpIHtcbiAgICAgIGNvbnN0IHJhbmdlRmlsdGVyID0gbmV3IFNlYXJjaFJhbmdlRmlsdGVyKCk7XG4gICAgICBpZiAoZmFjZXRGaWx0ZXIuZXhjbHVkZWRGYWNldCkge1xuICAgICAgICByYW5nZUZpbHRlci5maWVsZCA9XG4gICAgICAgICAgJ3shdGFnPScgKyBmYWNldEZpbHRlci50b2tlbiArICd9JyArIGZhY2V0RmlsdGVyLmZpZWxkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmFuZ2VGaWx0ZXIuZmllbGQgPSBmYWNldEZpbHRlci5maWVsZDtcbiAgICAgIH1cbiAgICAgIHJhbmdlRmlsdGVyLnF1ZXJ5ID0gZmFjZXRGaWx0ZXIucXVlcnk7XG4gICAgICByYW5nZUZpbHRlci5zdGFydCA9IHRoaXMudXJsRGVjb2RlKGZhY2V0RmlsdGVyLmZyb21WYWx1ZSk7XG4gICAgICByYW5nZUZpbHRlci5lbmQgPSB0aGlzLnVybERlY29kZShmYWNldEZpbHRlci50b1ZhbHVlKTtcbiAgICAgIG1hdGNoRmlsdGVycy5wdXNoKHJhbmdlRmlsdGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hdGNoRmlsdGVycztcbiAgfVxuXG4gIHByaXZhdGUgdXJsRGVjb2RlKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgZGVjb2RlZFRleHQgPSBkZWNvZGVVUklDb21wb25lbnQodGV4dCk7XG4gICAgcmV0dXJuIGRlY29kZWRUZXh0O1xuICB9XG59XG4iXX0=
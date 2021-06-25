var SearchResultRequest = /** @class */ (function () {
    function SearchResultRequest(solrResults, options) {
        this.q = options.q;
        this.facetOptions = options.facetOptions;
        this.facetFilters = options.facetFilters;
        this.facetRangeFilters = options.facetRangeFilters;
        this.start = solrResults.responseHeader.params.start;
        this.rows = solrResults.responseHeader.params.rows;
    }
    return SearchResultRequest;
}());
export { SearchResultRequest };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdC1yZXF1ZXN0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGVhdGhlcm1hbi1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2R0by9zZWFyY2gvc2VhcmNoLXJlc3VsdC1yZXF1ZXN0Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0lBUUUsNkJBQVksV0FBZ0IsRUFBRSxPQUFzQjtRQUNsRCxJQUFJLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUN6QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1FBRW5ELElBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3JELElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3JELENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hGYWNldE9wdGlvbnMgfSBmcm9tICcuL3NlYXJjaC1mYWNldC1vcHRpb25zLm1vZGVsJztcbmltcG9ydCB7IFNlYXJjaEZhY2V0RmlsdGVyIH0gZnJvbSAnLi9zZWFyY2gtZmFjZXQtZmlsdGVyLm1vZGVsJztcbmltcG9ydCB7IFNlYXJjaEZhY2V0UmFuZ2VGaWx0ZXIgfSBmcm9tICcuL3NlYXJjaC1mYWNldC1yYW5nZS1maWx0ZXIubW9kZWwnO1xuaW1wb3J0IHsgU2VhcmNoT3B0aW9ucyB9IGZyb20gJy4vc2VhcmNoLW9wdGlvbnMubW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoUmVzdWx0UmVxdWVzdCB7XG4gIHB1YmxpYyBxOiBzdHJpbmc7XG4gIHB1YmxpYyBmYWNldE9wdGlvbnM6IFNlYXJjaEZhY2V0T3B0aW9ucztcbiAgcHVibGljIGZhY2V0RmlsdGVyczogU2VhcmNoRmFjZXRGaWx0ZXJbXTtcbiAgcHVibGljIGZhY2V0UmFuZ2VGaWx0ZXJzOiBTZWFyY2hGYWNldFJhbmdlRmlsdGVyW107XG4gIHB1YmxpYyBzdGFydDogbnVtYmVyO1xuICBwdWJsaWMgcm93czogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHNvbHJSZXN1bHRzOiBhbnksIG9wdGlvbnM6IFNlYXJjaE9wdGlvbnMpIHtcbiAgICB0aGlzLnEgPSBvcHRpb25zLnE7XG4gICAgdGhpcy5mYWNldE9wdGlvbnMgPSBvcHRpb25zLmZhY2V0T3B0aW9ucztcbiAgICB0aGlzLmZhY2V0RmlsdGVycyA9IG9wdGlvbnMuZmFjZXRGaWx0ZXJzO1xuICAgIHRoaXMuZmFjZXRSYW5nZUZpbHRlcnMgPSBvcHRpb25zLmZhY2V0UmFuZ2VGaWx0ZXJzO1xuXG4gICAgdGhpcy5zdGFydCA9IHNvbHJSZXN1bHRzLnJlc3BvbnNlSGVhZGVyLnBhcmFtcy5zdGFydDtcbiAgICB0aGlzLnJvd3MgPSBzb2xyUmVzdWx0cy5yZXNwb25zZUhlYWRlci5wYXJhbXMucm93cztcbiAgfVxufVxuIl19
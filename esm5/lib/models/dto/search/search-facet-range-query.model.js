var SearchFacetRangeQuery = /** @class */ (function () {
    function SearchFacetRangeQuery(field, fromValue, toValue, facetLabel, label, value, token) {
        this.field = field;
        this.fromValue = fromValue;
        this.toValue = toValue;
        this.facetLabel = facetLabel;
        this.label = label;
        this.value = value;
        this.token = token;
        this.query = field + ':[' + fromValue + ' TO ' + toValue + ']';
    }
    return SearchFacetRangeQuery;
}());
export { SearchFacetRangeQuery };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0LXJhbmdlLXF1ZXJ5Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGVhdGhlcm1hbi1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2R0by9zZWFyY2gvc2VhcmNoLWZhY2V0LXJhbmdlLXF1ZXJ5Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBSUUsK0JBQ1MsS0FBYSxFQUNiLFNBQWlCLEVBQ2pCLE9BQWUsRUFDZixVQUFrQixFQUNsQixLQUFhLEVBQ2IsS0FBYSxFQUNiLEtBQWE7UUFOYixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUNqQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLFVBQUssR0FBTCxLQUFLLENBQVE7UUFFcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSSxHQUFHLFNBQVMsR0FBRyxNQUFNLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUNqRSxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTZWFyY2hGYWNldFJhbmdlUXVlcnkge1xuICBwdWJsaWMgZXhjbHVkZWRGYWNldDogYm9vbGVhbjtcbiAgcHVibGljIHF1ZXJ5OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGZpZWxkOiBzdHJpbmcsXG4gICAgcHVibGljIGZyb21WYWx1ZTogc3RyaW5nLFxuICAgIHB1YmxpYyB0b1ZhbHVlOiBzdHJpbmcsXG4gICAgcHVibGljIGZhY2V0TGFiZWw6IHN0cmluZyxcbiAgICBwdWJsaWMgbGFiZWw6IHN0cmluZyxcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZyxcbiAgICBwdWJsaWMgdG9rZW46IHN0cmluZ1xuICApIHtcbiAgICB0aGlzLnF1ZXJ5ID0gZmllbGQgKyAnOlsnICsgZnJvbVZhbHVlICsgJyBUTyAnICsgdG9WYWx1ZSArICddJztcbiAgfVxufVxuIl19
export class SearchFacetRangeQuery {
    constructor(field, fromValue, toValue, facetLabel, label, value, token) {
        this.field = field;
        this.fromValue = fromValue;
        this.toValue = toValue;
        this.facetLabel = facetLabel;
        this.label = label;
        this.value = value;
        this.token = token;
        this.query = field + ':[' + fromValue + ' TO ' + toValue + ']';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZhY2V0LXJhbmdlLXF1ZXJ5Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGVhdGhlcm1hbi1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2R0by9zZWFyY2gvc2VhcmNoLWZhY2V0LXJhbmdlLXF1ZXJ5Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxxQkFBcUI7SUFJaEMsWUFDUyxLQUFhLEVBQ2IsU0FBaUIsRUFDakIsT0FBZSxFQUNmLFVBQWtCLEVBQ2xCLEtBQWEsRUFDYixLQUFhLEVBQ2IsS0FBYTtRQU5iLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ2xCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUVwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsU0FBUyxHQUFHLE1BQU0sR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFDO0lBQ2pFLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTZWFyY2hGYWNldFJhbmdlUXVlcnkge1xuICBwdWJsaWMgZXhjbHVkZWRGYWNldDogYm9vbGVhbjtcbiAgcHVibGljIHF1ZXJ5OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGZpZWxkOiBzdHJpbmcsXG4gICAgcHVibGljIGZyb21WYWx1ZTogc3RyaW5nLFxuICAgIHB1YmxpYyB0b1ZhbHVlOiBzdHJpbmcsXG4gICAgcHVibGljIGZhY2V0TGFiZWw6IHN0cmluZyxcbiAgICBwdWJsaWMgbGFiZWw6IHN0cmluZyxcbiAgICBwdWJsaWMgdmFsdWU6IHN0cmluZyxcbiAgICBwdWJsaWMgdG9rZW46IHN0cmluZ1xuICApIHtcbiAgICB0aGlzLnF1ZXJ5ID0gZmllbGQgKyAnOlsnICsgZnJvbVZhbHVlICsgJyBUTyAnICsgdG9WYWx1ZSArICddJztcbiAgfVxufVxuIl19
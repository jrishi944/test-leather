import { __values } from "tslib";
var SearchResultFacet = /** @class */ (function () {
    function SearchResultFacet(field, label) {
        this.field = field;
        this.label = label;
        this.items = [];
    }
    SearchResultFacet.prototype.createQuery = function (q, facetFilters, rangeQueries) {
        var e_1, _a;
        try {
            for (var _b = __values(this.items), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                item.createQuery(q, facetFilters, rangeQueries);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    return SearchResultFacet;
}());
export { SearchResultFacet };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXJlc3VsdC1mYWNldC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9kdG8vc2VhcmNoL3NlYXJjaC1yZXN1bHQtZmFjZXQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUlBO0lBR0UsMkJBQW1CLEtBQWEsRUFBUyxLQUFhO1FBQW5DLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFTSx1Q0FBVyxHQUFsQixVQUNFLENBQVMsRUFDVCxZQUFpQyxFQUNqQyxZQUFzQzs7O1lBRXRDLEtBQW1CLElBQUEsS0FBQSxTQUFBLElBQUksQ0FBQyxLQUFLLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQTFCLElBQU0sSUFBSSxXQUFBO2dCQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQzthQUNqRDs7Ozs7Ozs7O0lBQ0gsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaFJlc3VsdEZhY2V0SXRlbSB9IGZyb20gJy4vc2VhcmNoLXJlc3VsdC1mYWNldC1pdGVtLm1vZGVsJztcbmltcG9ydCB7IFNlYXJjaEZhY2V0RmlsdGVyIH0gZnJvbSAnLi9zZWFyY2gtZmFjZXQtZmlsdGVyLm1vZGVsJztcbmltcG9ydCB7IFNlYXJjaEZhY2V0UmFuZ2VGaWx0ZXIgfSBmcm9tICcuL3NlYXJjaC1mYWNldC1yYW5nZS1maWx0ZXIubW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoUmVzdWx0RmFjZXQge1xuICBwdWJsaWMgaXRlbXM6IFNlYXJjaFJlc3VsdEZhY2V0SXRlbVtdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmaWVsZDogc3RyaW5nLCBwdWJsaWMgbGFiZWw6IHN0cmluZykge1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVRdWVyeShcbiAgICBxOiBzdHJpbmcsXG4gICAgZmFjZXRGaWx0ZXJzOiBTZWFyY2hGYWNldEZpbHRlcltdLFxuICAgIHJhbmdlUXVlcmllczogU2VhcmNoRmFjZXRSYW5nZUZpbHRlcltdXG4gICkge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XG4gICAgICBpdGVtLmNyZWF0ZVF1ZXJ5KHEsIGZhY2V0RmlsdGVycywgcmFuZ2VRdWVyaWVzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
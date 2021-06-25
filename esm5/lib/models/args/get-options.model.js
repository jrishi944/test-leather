var GetOptions = /** @class */ (function () {
    function GetOptions(currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        this.query = '';
        this.filter = '';
        this.skip = 0;
        this.take = 10;
        this.sort = '';
        this.sortColumn = '';
        this.sortAscending = true;
        this.take = pageSize;
        this.skip = (currentPage - 1) * pageSize;
    }
    GetOptions.calculatePageCount = function (rowCount, pageSize) {
        var pageCount = Math.floor((rowCount - 1) / pageSize) + 1;
        return pageCount;
    };
    GetOptions.prototype.setSort = function (field, ascending) {
        if (ascending === void 0) { ascending = true; }
        this.sortColumn = field;
        this.sortAscending = ascending;
        if (ascending === true) {
            this.sort = field + ':ASC';
        }
        else {
            this.sort = field + ':DESC';
        }
    };
    return GetOptions;
}());
export { GetOptions };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LW9wdGlvbnMubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvYXJncy9nZXQtb3B0aW9ucy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtJQVNFLG9CQUFZLFdBQXVCLEVBQUUsUUFBcUI7UUFBOUMsNEJBQUEsRUFBQSxlQUF1QjtRQUFFLHlCQUFBLEVBQUEsYUFBcUI7UUFSbkQsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBRzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDO0lBQzNDLENBQUM7SUFFYSw2QkFBa0IsR0FBaEMsVUFBaUMsUUFBZ0IsRUFBRSxRQUFnQjtRQUNqRSxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1RCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRU0sNEJBQU8sR0FBZCxVQUFlLEtBQWEsRUFBRSxTQUF5QjtRQUF6QiwwQkFBQSxFQUFBLGdCQUF5QjtRQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztRQUMvQixJQUFJLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDO1NBQzVCO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJ2V4cHJlc3MnO1xuXG5leHBvcnQgY2xhc3MgR2V0T3B0aW9ucyB7XG4gIHB1YmxpYyBxdWVyeSA9ICcnO1xuICBwdWJsaWMgZmlsdGVyID0gJyc7XG4gIHB1YmxpYyBza2lwID0gMDtcbiAgcHVibGljIHRha2UgPSAxMDtcbiAgcHVibGljIHNvcnQgPSAnJztcbiAgcHVibGljIHNvcnRDb2x1bW4gPSAnJztcbiAgcHVibGljIHNvcnRBc2NlbmRpbmcgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKGN1cnJlbnRQYWdlOiBudW1iZXIgPSAxLCBwYWdlU2l6ZTogbnVtYmVyID0gMTApIHtcbiAgICB0aGlzLnRha2UgPSBwYWdlU2l6ZTtcbiAgICB0aGlzLnNraXAgPSAoY3VycmVudFBhZ2UgLSAxKSAqIHBhZ2VTaXplO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjYWxjdWxhdGVQYWdlQ291bnQocm93Q291bnQ6IG51bWJlciwgcGFnZVNpemU6IG51bWJlcikge1xuICAgIGNvbnN0IHBhZ2VDb3VudCA9IE1hdGguZmxvb3IoKHJvd0NvdW50IC0gMSkgLyBwYWdlU2l6ZSkgKyAxO1xuICAgIHJldHVybiBwYWdlQ291bnQ7XG4gIH1cblxuICBwdWJsaWMgc2V0U29ydChmaWVsZDogc3RyaW5nLCBhc2NlbmRpbmc6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgdGhpcy5zb3J0Q29sdW1uID0gZmllbGQ7XG4gICAgdGhpcy5zb3J0QXNjZW5kaW5nID0gYXNjZW5kaW5nO1xuICAgIGlmIChhc2NlbmRpbmcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuc29ydCA9IGZpZWxkICsgJzpBU0MnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNvcnQgPSBmaWVsZCArICc6REVTQyc7XG4gICAgfVxuICB9XG59XG4iXX0=
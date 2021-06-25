export class GetOptions {
    constructor(currentPage = 1, pageSize = 10) {
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
    static calculatePageCount(rowCount, pageSize) {
        const pageCount = Math.floor((rowCount - 1) / pageSize) + 1;
        return pageCount;
    }
    setSort(field, ascending = true) {
        this.sortColumn = field;
        this.sortAscending = ascending;
        if (ascending === true) {
            this.sort = field + ':ASC';
        }
        else {
            this.sort = field + ':DESC';
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LW9wdGlvbnMubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvYXJncy9nZXQtb3B0aW9ucy5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE9BQU8sVUFBVTtJQVNyQixZQUFZLGNBQXNCLENBQUMsRUFBRSxXQUFtQixFQUFFO1FBUm5ELFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUcxQixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUMzQyxDQUFDO0lBRU0sTUFBTSxDQUFDLGtCQUFrQixDQUFDLFFBQWdCLEVBQUUsUUFBZ0I7UUFDakUsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVNLE9BQU8sQ0FBQyxLQUFhLEVBQUUsWUFBcUIsSUFBSTtRQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztRQUMvQixJQUFJLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDO1NBQzVCO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUM7U0FDN0I7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnZXhwcmVzcyc7XG5cbmV4cG9ydCBjbGFzcyBHZXRPcHRpb25zIHtcbiAgcHVibGljIHF1ZXJ5ID0gJyc7XG4gIHB1YmxpYyBmaWx0ZXIgPSAnJztcbiAgcHVibGljIHNraXAgPSAwO1xuICBwdWJsaWMgdGFrZSA9IDEwO1xuICBwdWJsaWMgc29ydCA9ICcnO1xuICBwdWJsaWMgc29ydENvbHVtbiA9ICcnO1xuICBwdWJsaWMgc29ydEFzY2VuZGluZyA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoY3VycmVudFBhZ2U6IG51bWJlciA9IDEsIHBhZ2VTaXplOiBudW1iZXIgPSAxMCkge1xuICAgIHRoaXMudGFrZSA9IHBhZ2VTaXplO1xuICAgIHRoaXMuc2tpcCA9IChjdXJyZW50UGFnZSAtIDEpICogcGFnZVNpemU7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGNhbGN1bGF0ZVBhZ2VDb3VudChyb3dDb3VudDogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFnZUNvdW50ID0gTWF0aC5mbG9vcigocm93Q291bnQgLSAxKSAvIHBhZ2VTaXplKSArIDE7XG4gICAgcmV0dXJuIHBhZ2VDb3VudDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTb3J0KGZpZWxkOiBzdHJpbmcsIGFzY2VuZGluZzogYm9vbGVhbiA9IHRydWUpIHtcbiAgICB0aGlzLnNvcnRDb2x1bW4gPSBmaWVsZDtcbiAgICB0aGlzLnNvcnRBc2NlbmRpbmcgPSBhc2NlbmRpbmc7XG4gICAgaWYgKGFzY2VuZGluZyA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5zb3J0ID0gZmllbGQgKyAnOkFTQyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc29ydCA9IGZpZWxkICsgJzpERVNDJztcbiAgICB9XG4gIH1cbn1cbiJdfQ==
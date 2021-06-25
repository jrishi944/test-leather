import { __awaiter } from "tslib";
import * as _ from 'lodash';
import { Subject } from 'rxjs';
import { CollectionUtil } from '../collection/collection.util';
import { FilterOptions } from '../collection/_models/filter-options.model';
/**
 * A utility to implement pagination
 */
export class PaginatorUtil {
    /**
     * Constructor
     * @param pageSize - The page size
     * @param pageSizeOptions - The page size options
     * @param sortOptions - The sort options
     */
    constructor(pageSize = 5, pageSizeOptions = [5, 10, 20, 50], ...sortOptions) {
        // **********************
        // * Public properties
        // **********************
        /** An RXJS subject that will emit events when pagination properties change */
        this.paginationSubject$ = new Subject();
        /** The current page index */
        this._pageIndex = 0;
        /** The page size */
        this._pageSize = 5;
        /** The columns to use when filtering */
        this._filterColumns = [];
        /** The filter options */
        this._filterOptions = new FilterOptions();
        this._pageSize = pageSize;
        this._pageSizeOptions = pageSizeOptions;
        this._sortOptions = sortOptions;
    }
    /** A get accessor for the query string */
    get query() {
        return this._query;
    }
    /** A get accessor for the hasFilter property */
    get hasFilter() {
        return this._query ? true : false;
    }
    /** A get accessor for the array length */
    get length() {
        return this._length;
    }
    /** A set accessor for the array length */
    set length(length) {
        this._length = length;
    }
    /** A get accessor for the current page index */
    get pageIndex() {
        return this._pageIndex;
    }
    /** A set accessor for the current page index */
    set pageIndex(pageIndex) {
        this._pageIndex = pageIndex;
    }
    /** A get accessor for the page size */
    get pageSize() {
        return this._pageSize;
    }
    /** A set accessor for the page size */
    set pageSize(pageSize) {
        this._pageSize = pageSize;
    }
    /** A get accessor for the previous page index */
    get previousPageIndex() {
        return this._previousPageIndex;
    }
    /** A get accessor for the page size options */
    get pageSizeOptions() {
        return this._pageSizeOptions;
    }
    /** A get accessor for the noData property */
    get noData() {
        return this._noData;
    }
    /** A get accessor for the sort optioins */
    get sortOptions() {
        return this._sortOptions;
    }
    // **********************
    // * Public methods
    // **********************
    /**
     * Append an object to the data array
     * @param object - The object to append
     * @param pageIndex - The page to go to after appending the object
     * @returns The modified page of data
     */
    append(object, pageIndex) {
        if (object) {
            this._data.push(object);
            // this._length = this._data.length;
        }
        return this.paginate(pageIndex);
    }
    /**
     * Delete an object from the data array. Use the object ID to locate the object to delete.
     * @param id - The ID of the object to delete.
     * @param pageIndex - The page to go to after deleting the object
     * @returns The modified page of data
     */
    deleteById(id, pageIndex) {
        if (id) {
            this._data = this._data.filter(f => f._id !== id);
        }
        return this.paginate(pageIndex);
    }
    /**
     * Find an object in the data array
     * @param property - The object property to use for matching
     * @param value - The property value to look for
     * @returns The matching object
     */
    find(property, value) {
        const result = CollectionUtil.find(this._data, property, value);
        return result;
    }
    /**
     * Find an object in the data array by matching the object ID
     * @param id - The ID of the object to find
     * @returns The matching object
     */
    getById(id) {
        const object = CollectionUtil.findById(this._data, id);
        return object;
    }
    /**
     * Go to the start of the data array
     */
    goFirst() {
        this._pageIndex = 0;
        return this.paginate();
    }
    /** Go to the end of the data array */
    goLast() {
        const pageCount = Math.floor(this._length / this._pageSize);
        this._pageIndex = pageCount - 1;
        if (this._pageIndex < 0) {
            this._pageIndex = 0;
        }
    }
    /**
     * Insert an object in the data array
     * @param object - The object to insert
     * @param pageIndex - The page to go to after inserting the object
     * @returns The modified page of data
     */
    insert(object, pageIndex) {
        if (object) {
            this._data.unshift(object);
        }
        return this.paginate(pageIndex);
    }
    /**
     * Load the passed data into the data array
     * @param data - The data to load
     * @returns The first page of data
     */
    loadData(data) {
        this._data = data;
        this._length = data.length;
        this._noData = data.length === 0 ? true : false;
        const filteredData = this.paginate();
        return filteredData;
    }
    /**
     * Update the paginator properties and trigger a pagination event
     * @param pageData - The paginator properties to update
     */
    onPagination(pageData) {
        return __awaiter(this, void 0, void 0, function* () {
            pageData.pageSizeChanged = this._pageSize !== pageData.pageSize;
            this._length = pageData.length;
            this._pageIndex = pageData.pageIndex;
            this._pageSize = pageData.pageSize;
            this._previousPageIndex = pageData.previousPageIndex;
            this.paginationSubject$.next(pageData);
        });
    }
    /**
     * Trigger a pagination event
     * @param pageIndex - The page to go to after re-sorting and filtering
     * @Returns The current page of data
     */
    paginate(pageIndex) {
        this.sort();
        this._filteredData = this.filter();
        this._length = this._filteredData.length;
        if (pageIndex !== undefined) {
            this._pageIndex = pageIndex;
        }
        let start = this._pageIndex * this._pageSize;
        if (start >= this.length) {
            this._pageIndex--;
            if (this.pageIndex < 0) {
                this.pageIndex = 0;
            }
            start = this._pageIndex * this._pageSize;
        }
        const end = start + this._pageSize;
        const dataToReturn = _.slice(this._filteredData, start, end);
        return dataToReturn;
    }
    /**
     * Set the sort options
     * @param sortOptions - The sort options
     */
    setSortOptions(...sortOptions) {
        this._sortOptions = sortOptions;
    }
    /**
     * Set the filter columns
     * @param filterColumns - The filter columns
     */
    setFilterColumns(...filterColumns) {
        this._filterColumns = filterColumns;
    }
    /**
     * Set the filter options
     * @param fitlerCase - The filter case option
     * @param fitlerScope - The filter scope option
     */
    setFilterOptions(fitlerCase, fitlerScope) {
        this._filterOptions = new FilterOptions(fitlerCase, fitlerScope);
    }
    /**
     * Set the filter query
     * @param query - The filter query
     * @returns A page of data
     */
    setQuery(query) {
        this._query = query;
        return this.paginate();
    }
    /**
     * Update an object in the data array
     * @param object - The object to update
     * @param pageIndex - The page to go to after updating
     * @Returns The current page of data
     */
    update(object, pageIndex) {
        const index = this._data.findIndex(o => o._id === object._id);
        if (index < 0) {
            this._data.push(object);
            // this._length = this._data.length;
        }
        else {
            this._data[index] = object;
        }
        return this.paginate(pageIndex);
    }
    /**
     * Apply the current filter
     */
    filter() {
        if (!this._query || !this._data) {
            return this._data;
        }
        const filteredData = CollectionUtil.filter(this._data, this._query, this._filterColumns, this._filterOptions);
        return filteredData;
    }
    /**
     * Apply the current sort options
     */
    sort() {
        if (!this._sortOptions) {
            return;
        }
        if (!this._data) {
            return;
        }
        CollectionUtil.multiKeySort(this._data, ...this._sortOptions);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLnV0aWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi91dGlsL3BhZ2luYXRvci9wYWdpbmF0b3IudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUkvQixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBSTNFOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGFBQWE7SUE0R3hCOzs7OztPQUtHO0lBQ0gsWUFDRSxXQUFtQixDQUFDLEVBQ3BCLGtCQUE0QixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUMzQyxHQUFHLFdBQXlCO1FBcEg5Qix5QkFBeUI7UUFDekIsc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUV6Qiw4RUFBOEU7UUFDdkUsdUJBQWtCLEdBQUcsSUFBSSxPQUFPLEVBQW1CLENBQUM7UUEyRTNELDZCQUE2QjtRQUNyQixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRXZCLG9CQUFvQjtRQUNaLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFpQnRCLHdDQUF3QztRQUNoQyxtQkFBYyxHQUFhLEVBQUUsQ0FBQztRQUV0Qyx5QkFBeUI7UUFDakIsbUJBQWMsR0FBa0IsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQWExRCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZUFBZSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO0lBQ2xDLENBQUM7SUFsSEQsMENBQTBDO0lBQzFDLElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQsZ0RBQWdEO0lBQ2hELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3BDLENBQUM7SUFFRCwwQ0FBMEM7SUFDMUMsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCwwQ0FBMEM7SUFDMUMsSUFBVyxNQUFNLENBQUMsTUFBYztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUN4QixDQUFDO0lBRUQsZ0RBQWdEO0lBQ2hELElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVELGdEQUFnRDtJQUNoRCxJQUFXLFNBQVMsQ0FBQyxTQUFpQjtRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUM5QixDQUFDO0lBRUQsdUNBQXVDO0lBQ3ZDLElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELHVDQUF1QztJQUN2QyxJQUFXLFFBQVEsQ0FBQyxRQUFnQjtRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM1QixDQUFDO0lBRUQsaURBQWlEO0lBQ2pELElBQVcsaUJBQWlCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7SUFFRCwrQ0FBK0M7SUFDL0MsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFFRCw2Q0FBNkM7SUFDN0MsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCwyQ0FBMkM7SUFDM0MsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBMERELHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBRXpCOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLE1BQVMsRUFBRSxTQUFrQjtRQUN6QyxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hCLG9DQUFvQztTQUNyQztRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxVQUFVLENBQUMsRUFBVSxFQUFFLFNBQWtCO1FBQzlDLElBQUksRUFBRSxFQUFFO1lBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDbkQ7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksSUFBSSxDQUFDLFFBQWdCLEVBQUUsS0FBVTtRQUN0QyxNQUFNLE1BQU0sR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksT0FBTyxDQUFDLEVBQVU7UUFDdkIsTUFBTSxNQUFNLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7T0FFRztJQUNJLE9BQU87UUFDWixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsc0NBQXNDO0lBQy9CLE1BQU07UUFDWCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLE1BQVMsRUFBRSxTQUFrQjtRQUN6QyxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksUUFBUSxDQUFDLElBQVM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2hELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQyxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRUQ7OztPQUdHO0lBQ1UsWUFBWSxDQUFDLFFBQXlCOztZQUNqRCxRQUFRLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLEtBQUssUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUNoRSxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1lBQ3JELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsQ0FBQztLQUFBO0lBRUQ7Ozs7T0FJRztJQUNJLFFBQVEsQ0FBQyxTQUFrQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ3pDLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztTQUM3QjtRQUNELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUM3QyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFO2dCQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQzthQUNwQjtZQUNELEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDMUM7UUFDRCxNQUFNLEdBQUcsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxNQUFNLFlBQVksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzdELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxjQUFjLENBQUMsR0FBRyxXQUF5QjtRQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksZ0JBQWdCLENBQUMsR0FBRyxhQUF1QjtRQUNoRCxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGdCQUFnQixDQUNyQixVQUFzQixFQUN0QixXQUF3QjtRQUV4QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksYUFBYSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFFBQVEsQ0FBQyxLQUFhO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxNQUFTLEVBQUUsU0FBa0I7UUFDekMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5RCxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QixvQ0FBb0M7U0FDckM7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNLLE1BQU07UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25CO1FBQ0QsTUFBTSxZQUFZLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FDeEMsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxjQUFjLEVBQ25CLElBQUksQ0FBQyxjQUFjLENBQ3BCLENBQUM7UUFDRixPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRUQ7O09BRUc7SUFDSyxJQUFJO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixPQUFPO1NBQ1I7UUFDRCxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEUsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkV2ZW50IH0gZnJvbSAnLi9fbW9kZWxzL3BhZ2luYXRpb24tZXZlbnQubW9kZWwnO1xuaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UvYmFzZS5tb2RlbCc7XG5pbXBvcnQgeyBTb3J0T3B0aW9uIH0gZnJvbSAnLi4vY29sbGVjdGlvbi9fbW9kZWxzL3NvcnQtb3B0aW9uLm1vZGVsJztcbmltcG9ydCB7IENvbGxlY3Rpb25VdGlsIH0gZnJvbSAnLi4vY29sbGVjdGlvbi9jb2xsZWN0aW9uLnV0aWwnO1xuaW1wb3J0IHsgRmlsdGVyT3B0aW9ucyB9IGZyb20gJy4uL2NvbGxlY3Rpb24vX21vZGVscy9maWx0ZXItb3B0aW9ucy5tb2RlbCc7XG5pbXBvcnQgeyBGaWx0ZXJDYXNlIH0gZnJvbSAnLi4vY29sbGVjdGlvbi9fZW51bXMvZmlsdGVyLWNhc2UuZW51bSc7XG5pbXBvcnQgeyBGaWx0ZXJTY29wZSB9IGZyb20gJy4uL2NvbGxlY3Rpb24vX2VudW1zL2ZpbHRlci1zY29wZS5lbnVtJztcblxuLyoqXG4gKiBBIHV0aWxpdHkgdG8gaW1wbGVtZW50IHBhZ2luYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFBhZ2luYXRvclV0aWw8VCBleHRlbmRzIEJhc2VNb2RlbD4ge1xuICAvLyAqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vICogUHVibGljIHByb3BlcnRpZXNcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKlxuXG4gIC8qKiBBbiBSWEpTIHN1YmplY3QgdGhhdCB3aWxsIGVtaXQgZXZlbnRzIHdoZW4gcGFnaW5hdGlvbiBwcm9wZXJ0aWVzIGNoYW5nZSAqL1xuICBwdWJsaWMgcGFnaW5hdGlvblN1YmplY3QkID0gbmV3IFN1YmplY3Q8UGFnaW5hdGlvbkV2ZW50PigpO1xuXG4gIC8qKiBBIGdldCBhY2Nlc3NvciBmb3IgdGhlIHF1ZXJ5IHN0cmluZyAqL1xuICBwdWJsaWMgZ2V0IHF1ZXJ5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5O1xuICB9XG5cbiAgLyoqIEEgZ2V0IGFjY2Vzc29yIGZvciB0aGUgaGFzRmlsdGVyIHByb3BlcnR5ICovXG4gIHB1YmxpYyBnZXQgaGFzRmlsdGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9xdWVyeSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBBIGdldCBhY2Nlc3NvciBmb3IgdGhlIGFycmF5IGxlbmd0aCAqL1xuICBwdWJsaWMgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9sZW5ndGg7XG4gIH1cblxuICAvKiogQSBzZXQgYWNjZXNzb3IgZm9yIHRoZSBhcnJheSBsZW5ndGggKi9cbiAgcHVibGljIHNldCBsZW5ndGgobGVuZ3RoOiBudW1iZXIpIHtcbiAgICB0aGlzLl9sZW5ndGggPSBsZW5ndGg7XG4gIH1cblxuICAvKiogQSBnZXQgYWNjZXNzb3IgZm9yIHRoZSBjdXJyZW50IHBhZ2UgaW5kZXggKi9cbiAgcHVibGljIGdldCBwYWdlSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZUluZGV4O1xuICB9XG5cbiAgLyoqIEEgc2V0IGFjY2Vzc29yIGZvciB0aGUgY3VycmVudCBwYWdlIGluZGV4ICovXG4gIHB1YmxpYyBzZXQgcGFnZUluZGV4KHBhZ2VJbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGFnZUluZGV4ID0gcGFnZUluZGV4O1xuICB9XG5cbiAgLyoqIEEgZ2V0IGFjY2Vzc29yIGZvciB0aGUgcGFnZSBzaXplICovXG4gIHB1YmxpYyBnZXQgcGFnZVNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVNpemU7XG4gIH1cblxuICAvKiogQSBzZXQgYWNjZXNzb3IgZm9yIHRoZSBwYWdlIHNpemUgKi9cbiAgcHVibGljIHNldCBwYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgfVxuXG4gIC8qKiBBIGdldCBhY2Nlc3NvciBmb3IgdGhlIHByZXZpb3VzIHBhZ2UgaW5kZXggKi9cbiAgcHVibGljIGdldCBwcmV2aW91c1BhZ2VJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wcmV2aW91c1BhZ2VJbmRleDtcbiAgfVxuXG4gIC8qKiBBIGdldCBhY2Nlc3NvciBmb3IgdGhlIHBhZ2Ugc2l6ZSBvcHRpb25zICovXG4gIHB1YmxpYyBnZXQgcGFnZVNpemVPcHRpb25zKCk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVNpemVPcHRpb25zO1xuICB9XG5cbiAgLyoqIEEgZ2V0IGFjY2Vzc29yIGZvciB0aGUgbm9EYXRhIHByb3BlcnR5ICovXG4gIHB1YmxpYyBnZXQgbm9EYXRhKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9ub0RhdGE7XG4gIH1cblxuICAvKiogQSBnZXQgYWNjZXNzb3IgZm9yIHRoZSBzb3J0IG9wdGlvaW5zICovXG4gIHB1YmxpYyBnZXQgc29ydE9wdGlvbnMoKTogU29ydE9wdGlvbltdIHtcbiAgICByZXR1cm4gdGhpcy5fc29ydE9wdGlvbnM7XG4gIH1cblxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vICogUHJpdmF0ZSBwcm9wZXJ0aWVzXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKipcblxuICAvKiogVGhlIG9yaWdpbmFsIGRhdGEgYXJyYXkgKi9cbiAgcHJpdmF0ZSBfZGF0YTogYW55W107XG5cbiAgLyoqIFRoZSBmaWx0ZXJlZCBkYXRhIGFycmF5ICovXG4gIHByaXZhdGUgX2ZpbHRlcmVkRGF0YTogYW55W107XG5cbiAgLyoqIFRoZSBsZW5ndGggb2YgdGhlIGZpbHRlcmVkIGFycmF5ICovXG4gIHByaXZhdGUgX2xlbmd0aDogbnVtYmVyO1xuXG4gIC8qKiBUaGUgY3VycmVudCBwYWdlIGluZGV4ICovXG4gIHByaXZhdGUgX3BhZ2VJbmRleCA9IDA7XG5cbiAgLyoqIFRoZSBwYWdlIHNpemUgKi9cbiAgcHJpdmF0ZSBfcGFnZVNpemUgPSA1O1xuXG4gIC8qKiBUaGUgcHJldmlvdXMgcGFnZSBpbmRleCAqL1xuICBwcml2YXRlIF9wcmV2aW91c1BhZ2VJbmRleDogbnVtYmVyO1xuXG4gIC8qKiBUaGUgcGFnZSBzaXplIG9wdGlvbnMgKi9cbiAgcHJpdmF0ZSBfcGFnZVNpemVPcHRpb25zOiBudW1iZXJbXTtcblxuICAvKiogVGhlIG5vIGRhdGEgZmxhZyAqL1xuICBwcml2YXRlIF9ub0RhdGE6IGJvb2xlYW47XG5cbiAgLyoqIFRoZSBzb3J0IG9wdGlvbnMgKi9cbiAgcHJpdmF0ZSBfc29ydE9wdGlvbnM6IFNvcnRPcHRpb25bXTtcblxuICAvKiogVGhlIHF1ZXJ5IHN0cmluZyAqL1xuICBwcml2YXRlIF9xdWVyeTogc3RyaW5nO1xuXG4gIC8qKiBUaGUgY29sdW1ucyB0byB1c2Ugd2hlbiBmaWx0ZXJpbmcgKi9cbiAgcHJpdmF0ZSBfZmlsdGVyQ29sdW1uczogc3RyaW5nW10gPSBbXTtcblxuICAvKiogVGhlIGZpbHRlciBvcHRpb25zICovXG4gIHByaXZhdGUgX2ZpbHRlck9wdGlvbnM6IEZpbHRlck9wdGlvbnMgPSBuZXcgRmlsdGVyT3B0aW9ucygpO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gcGFnZVNpemUgLSBUaGUgcGFnZSBzaXplXG4gICAqIEBwYXJhbSBwYWdlU2l6ZU9wdGlvbnMgLSBUaGUgcGFnZSBzaXplIG9wdGlvbnNcbiAgICogQHBhcmFtIHNvcnRPcHRpb25zIC0gVGhlIHNvcnQgb3B0aW9uc1xuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcGFnZVNpemU6IG51bWJlciA9IDUsXG4gICAgcGFnZVNpemVPcHRpb25zOiBudW1iZXJbXSA9IFs1LCAxMCwgMjAsIDUwXSxcbiAgICAuLi5zb3J0T3B0aW9uczogU29ydE9wdGlvbltdXG4gICkge1xuICAgIHRoaXMuX3BhZ2VTaXplID0gcGFnZVNpemU7XG4gICAgdGhpcy5fcGFnZVNpemVPcHRpb25zID0gcGFnZVNpemVPcHRpb25zO1xuICAgIHRoaXMuX3NvcnRPcHRpb25zID0gc29ydE9wdGlvbnM7XG4gIH1cblxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqXG4gIC8vICogUHVibGljIG1ldGhvZHNcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKlxuXG4gIC8qKlxuICAgKiBBcHBlbmQgYW4gb2JqZWN0IHRvIHRoZSBkYXRhIGFycmF5XG4gICAqIEBwYXJhbSBvYmplY3QgLSBUaGUgb2JqZWN0IHRvIGFwcGVuZFxuICAgKiBAcGFyYW0gcGFnZUluZGV4IC0gVGhlIHBhZ2UgdG8gZ28gdG8gYWZ0ZXIgYXBwZW5kaW5nIHRoZSBvYmplY3RcbiAgICogQHJldHVybnMgVGhlIG1vZGlmaWVkIHBhZ2Ugb2YgZGF0YVxuICAgKi9cbiAgcHVibGljIGFwcGVuZChvYmplY3Q6IFQsIHBhZ2VJbmRleD86IG51bWJlcik6IFRbXSB7XG4gICAgaWYgKG9iamVjdCkge1xuICAgICAgdGhpcy5fZGF0YS5wdXNoKG9iamVjdCk7XG4gICAgICAvLyB0aGlzLl9sZW5ndGggPSB0aGlzLl9kYXRhLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucGFnaW5hdGUocGFnZUluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgYW4gb2JqZWN0IGZyb20gdGhlIGRhdGEgYXJyYXkuIFVzZSB0aGUgb2JqZWN0IElEIHRvIGxvY2F0ZSB0aGUgb2JqZWN0IHRvIGRlbGV0ZS5cbiAgICogQHBhcmFtIGlkIC0gVGhlIElEIG9mIHRoZSBvYmplY3QgdG8gZGVsZXRlLlxuICAgKiBAcGFyYW0gcGFnZUluZGV4IC0gVGhlIHBhZ2UgdG8gZ28gdG8gYWZ0ZXIgZGVsZXRpbmcgdGhlIG9iamVjdFxuICAgKiBAcmV0dXJucyBUaGUgbW9kaWZpZWQgcGFnZSBvZiBkYXRhXG4gICAqL1xuICBwdWJsaWMgZGVsZXRlQnlJZChpZDogc3RyaW5nLCBwYWdlSW5kZXg/OiBudW1iZXIpOiBUW10ge1xuICAgIGlmIChpZCkge1xuICAgICAgdGhpcy5fZGF0YSA9IHRoaXMuX2RhdGEuZmlsdGVyKGYgPT4gZi5faWQgIT09IGlkKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucGFnaW5hdGUocGFnZUluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGFuIG9iamVjdCBpbiB0aGUgZGF0YSBhcnJheVxuICAgKiBAcGFyYW0gcHJvcGVydHkgLSBUaGUgb2JqZWN0IHByb3BlcnR5IHRvIHVzZSBmb3IgbWF0Y2hpbmdcbiAgICogQHBhcmFtIHZhbHVlIC0gVGhlIHByb3BlcnR5IHZhbHVlIHRvIGxvb2sgZm9yXG4gICAqIEByZXR1cm5zIFRoZSBtYXRjaGluZyBvYmplY3RcbiAgICovXG4gIHB1YmxpYyBmaW5kKHByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBUIHtcbiAgICBjb25zdCByZXN1bHQgPSBDb2xsZWN0aW9uVXRpbC5maW5kKHRoaXMuX2RhdGEsIHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGFuIG9iamVjdCBpbiB0aGUgZGF0YSBhcnJheSBieSBtYXRjaGluZyB0aGUgb2JqZWN0IElEXG4gICAqIEBwYXJhbSBpZCAtIFRoZSBJRCBvZiB0aGUgb2JqZWN0IHRvIGZpbmRcbiAgICogQHJldHVybnMgVGhlIG1hdGNoaW5nIG9iamVjdFxuICAgKi9cbiAgcHVibGljIGdldEJ5SWQoaWQ6IHN0cmluZyk6IFQge1xuICAgIGNvbnN0IG9iamVjdCA9IENvbGxlY3Rpb25VdGlsLmZpbmRCeUlkKHRoaXMuX2RhdGEsIGlkKTtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdvIHRvIHRoZSBzdGFydCBvZiB0aGUgZGF0YSBhcnJheVxuICAgKi9cbiAgcHVibGljIGdvRmlyc3QoKSB7XG4gICAgdGhpcy5fcGFnZUluZGV4ID0gMDtcbiAgICByZXR1cm4gdGhpcy5wYWdpbmF0ZSgpO1xuICB9XG5cbiAgLyoqIEdvIHRvIHRoZSBlbmQgb2YgdGhlIGRhdGEgYXJyYXkgKi9cbiAgcHVibGljIGdvTGFzdCgpIHtcbiAgICBjb25zdCBwYWdlQ291bnQgPSBNYXRoLmZsb29yKHRoaXMuX2xlbmd0aCAvIHRoaXMuX3BhZ2VTaXplKTtcbiAgICB0aGlzLl9wYWdlSW5kZXggPSBwYWdlQ291bnQgLSAxO1xuICAgIGlmICh0aGlzLl9wYWdlSW5kZXggPCAwKSB7XG4gICAgICB0aGlzLl9wYWdlSW5kZXggPSAwO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnQgYW4gb2JqZWN0IGluIHRoZSBkYXRhIGFycmF5XG4gICAqIEBwYXJhbSBvYmplY3QgLSBUaGUgb2JqZWN0IHRvIGluc2VydFxuICAgKiBAcGFyYW0gcGFnZUluZGV4IC0gVGhlIHBhZ2UgdG8gZ28gdG8gYWZ0ZXIgaW5zZXJ0aW5nIHRoZSBvYmplY3RcbiAgICogQHJldHVybnMgVGhlIG1vZGlmaWVkIHBhZ2Ugb2YgZGF0YVxuICAgKi9cbiAgcHVibGljIGluc2VydChvYmplY3Q6IFQsIHBhZ2VJbmRleD86IG51bWJlcik6IFRbXSB7XG4gICAgaWYgKG9iamVjdCkge1xuICAgICAgdGhpcy5fZGF0YS51bnNoaWZ0KG9iamVjdCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBhZ2luYXRlKHBhZ2VJbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCB0aGUgcGFzc2VkIGRhdGEgaW50byB0aGUgZGF0YSBhcnJheVxuICAgKiBAcGFyYW0gZGF0YSAtIFRoZSBkYXRhIHRvIGxvYWRcbiAgICogQHJldHVybnMgVGhlIGZpcnN0IHBhZ2Ugb2YgZGF0YVxuICAgKi9cbiAgcHVibGljIGxvYWREYXRhKGRhdGE6IFRbXSk6IFRbXSB7XG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5fbGVuZ3RoID0gZGF0YS5sZW5ndGg7XG4gICAgdGhpcy5fbm9EYXRhID0gZGF0YS5sZW5ndGggPT09IDAgPyB0cnVlIDogZmFsc2U7XG4gICAgY29uc3QgZmlsdGVyZWREYXRhID0gdGhpcy5wYWdpbmF0ZSgpO1xuICAgIHJldHVybiBmaWx0ZXJlZERhdGE7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRoZSBwYWdpbmF0b3IgcHJvcGVydGllcyBhbmQgdHJpZ2dlciBhIHBhZ2luYXRpb24gZXZlbnRcbiAgICogQHBhcmFtIHBhZ2VEYXRhIC0gVGhlIHBhZ2luYXRvciBwcm9wZXJ0aWVzIHRvIHVwZGF0ZVxuICAgKi9cbiAgcHVibGljIGFzeW5jIG9uUGFnaW5hdGlvbihwYWdlRGF0YTogUGFnaW5hdGlvbkV2ZW50KSB7XG4gICAgcGFnZURhdGEucGFnZVNpemVDaGFuZ2VkID0gdGhpcy5fcGFnZVNpemUgIT09IHBhZ2VEYXRhLnBhZ2VTaXplO1xuICAgIHRoaXMuX2xlbmd0aCA9IHBhZ2VEYXRhLmxlbmd0aDtcbiAgICB0aGlzLl9wYWdlSW5kZXggPSBwYWdlRGF0YS5wYWdlSW5kZXg7XG4gICAgdGhpcy5fcGFnZVNpemUgPSBwYWdlRGF0YS5wYWdlU2l6ZTtcbiAgICB0aGlzLl9wcmV2aW91c1BhZ2VJbmRleCA9IHBhZ2VEYXRhLnByZXZpb3VzUGFnZUluZGV4O1xuICAgIHRoaXMucGFnaW5hdGlvblN1YmplY3QkLm5leHQocGFnZURhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYSBwYWdpbmF0aW9uIGV2ZW50XG4gICAqIEBwYXJhbSBwYWdlSW5kZXggLSBUaGUgcGFnZSB0byBnbyB0byBhZnRlciByZS1zb3J0aW5nIGFuZCBmaWx0ZXJpbmdcbiAgICogQFJldHVybnMgVGhlIGN1cnJlbnQgcGFnZSBvZiBkYXRhXG4gICAqL1xuICBwdWJsaWMgcGFnaW5hdGUocGFnZUluZGV4PzogbnVtYmVyKTogVFtdIHtcbiAgICB0aGlzLnNvcnQoKTtcbiAgICB0aGlzLl9maWx0ZXJlZERhdGEgPSB0aGlzLmZpbHRlcigpO1xuICAgIHRoaXMuX2xlbmd0aCA9IHRoaXMuX2ZpbHRlcmVkRGF0YS5sZW5ndGg7XG4gICAgaWYgKHBhZ2VJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9wYWdlSW5kZXggPSBwYWdlSW5kZXg7XG4gICAgfVxuICAgIGxldCBzdGFydCA9IHRoaXMuX3BhZ2VJbmRleCAqIHRoaXMuX3BhZ2VTaXplO1xuICAgIGlmIChzdGFydCA+PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fcGFnZUluZGV4LS07XG4gICAgICBpZiAodGhpcy5wYWdlSW5kZXggPCAwKSB7XG4gICAgICAgIHRoaXMucGFnZUluZGV4ID0gMDtcbiAgICAgIH1cbiAgICAgIHN0YXJ0ID0gdGhpcy5fcGFnZUluZGV4ICogdGhpcy5fcGFnZVNpemU7XG4gICAgfVxuICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgdGhpcy5fcGFnZVNpemU7XG4gICAgY29uc3QgZGF0YVRvUmV0dXJuID0gXy5zbGljZSh0aGlzLl9maWx0ZXJlZERhdGEsIHN0YXJ0LCBlbmQpO1xuICAgIHJldHVybiBkYXRhVG9SZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBzb3J0IG9wdGlvbnNcbiAgICogQHBhcmFtIHNvcnRPcHRpb25zIC0gVGhlIHNvcnQgb3B0aW9uc1xuICAgKi9cbiAgcHVibGljIHNldFNvcnRPcHRpb25zKC4uLnNvcnRPcHRpb25zOiBTb3J0T3B0aW9uW10pIHtcbiAgICB0aGlzLl9zb3J0T3B0aW9ucyA9IHNvcnRPcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZmlsdGVyIGNvbHVtbnNcbiAgICogQHBhcmFtIGZpbHRlckNvbHVtbnMgLSBUaGUgZmlsdGVyIGNvbHVtbnNcbiAgICovXG4gIHB1YmxpYyBzZXRGaWx0ZXJDb2x1bW5zKC4uLmZpbHRlckNvbHVtbnM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgdGhpcy5fZmlsdGVyQ29sdW1ucyA9IGZpbHRlckNvbHVtbnM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBmaWx0ZXIgb3B0aW9uc1xuICAgKiBAcGFyYW0gZml0bGVyQ2FzZSAtIFRoZSBmaWx0ZXIgY2FzZSBvcHRpb25cbiAgICogQHBhcmFtIGZpdGxlclNjb3BlIC0gVGhlIGZpbHRlciBzY29wZSBvcHRpb25cbiAgICovXG4gIHB1YmxpYyBzZXRGaWx0ZXJPcHRpb25zKFxuICAgIGZpdGxlckNhc2U6IEZpbHRlckNhc2UsXG4gICAgZml0bGVyU2NvcGU6IEZpbHRlclNjb3BlXG4gICk6IHZvaWQge1xuICAgIHRoaXMuX2ZpbHRlck9wdGlvbnMgPSBuZXcgRmlsdGVyT3B0aW9ucyhmaXRsZXJDYXNlLCBmaXRsZXJTY29wZSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBmaWx0ZXIgcXVlcnlcbiAgICogQHBhcmFtIHF1ZXJ5IC0gVGhlIGZpbHRlciBxdWVyeVxuICAgKiBAcmV0dXJucyBBIHBhZ2Ugb2YgZGF0YVxuICAgKi9cbiAgcHVibGljIHNldFF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpOiBUW10ge1xuICAgIHRoaXMuX3F1ZXJ5ID0gcXVlcnk7XG4gICAgcmV0dXJuIHRoaXMucGFnaW5hdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYW4gb2JqZWN0IGluIHRoZSBkYXRhIGFycmF5XG4gICAqIEBwYXJhbSBvYmplY3QgLSBUaGUgb2JqZWN0IHRvIHVwZGF0ZVxuICAgKiBAcGFyYW0gcGFnZUluZGV4IC0gVGhlIHBhZ2UgdG8gZ28gdG8gYWZ0ZXIgdXBkYXRpbmdcbiAgICogQFJldHVybnMgVGhlIGN1cnJlbnQgcGFnZSBvZiBkYXRhXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKG9iamVjdDogVCwgcGFnZUluZGV4PzogbnVtYmVyKTogVFtdIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuX2RhdGEuZmluZEluZGV4KG8gPT4gby5faWQgPT09IG9iamVjdC5faWQpO1xuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIHRoaXMuX2RhdGEucHVzaChvYmplY3QpO1xuICAgICAgLy8gdGhpcy5fbGVuZ3RoID0gdGhpcy5fZGF0YS5sZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGFbaW5kZXhdID0gb2JqZWN0O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wYWdpbmF0ZShwYWdlSW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IHRoZSBjdXJyZW50IGZpbHRlclxuICAgKi9cbiAgcHJpdmF0ZSBmaWx0ZXIoKTogVFtdIHtcbiAgICBpZiAoIXRoaXMuX3F1ZXJ5IHx8ICF0aGlzLl9kYXRhKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9XG4gICAgY29uc3QgZmlsdGVyZWREYXRhID0gQ29sbGVjdGlvblV0aWwuZmlsdGVyKFxuICAgICAgdGhpcy5fZGF0YSxcbiAgICAgIHRoaXMuX3F1ZXJ5LFxuICAgICAgdGhpcy5fZmlsdGVyQ29sdW1ucyxcbiAgICAgIHRoaXMuX2ZpbHRlck9wdGlvbnNcbiAgICApO1xuICAgIHJldHVybiBmaWx0ZXJlZERhdGE7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhlIGN1cnJlbnQgc29ydCBvcHRpb25zXG4gICAqL1xuICBwcml2YXRlIHNvcnQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9zb3J0T3B0aW9ucykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX2RhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgQ29sbGVjdGlvblV0aWwubXVsdGlLZXlTb3J0KHRoaXMuX2RhdGEsIC4uLnRoaXMuX3NvcnRPcHRpb25zKTtcbiAgfVxufVxuIl19
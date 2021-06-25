import { __awaiter, __generator, __read, __spread } from "tslib";
import * as _ from 'lodash';
import { Subject } from 'rxjs';
import { CollectionUtil } from '../collection/collection.util';
import { FilterOptions } from '../collection/_models/filter-options.model';
/**
 * A utility to implement pagination
 */
var PaginatorUtil = /** @class */ (function () {
    /**
     * Constructor
     * @param pageSize - The page size
     * @param pageSizeOptions - The page size options
     * @param sortOptions - The sort options
     */
    function PaginatorUtil(pageSize, pageSizeOptions) {
        if (pageSize === void 0) { pageSize = 5; }
        if (pageSizeOptions === void 0) { pageSizeOptions = [5, 10, 20, 50]; }
        var sortOptions = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            sortOptions[_i - 2] = arguments[_i];
        }
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
    Object.defineProperty(PaginatorUtil.prototype, "query", {
        /** A get accessor for the query string */
        get: function () {
            return this._query;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginatorUtil.prototype, "hasFilter", {
        /** A get accessor for the hasFilter property */
        get: function () {
            return this._query ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginatorUtil.prototype, "length", {
        /** A get accessor for the array length */
        get: function () {
            return this._length;
        },
        /** A set accessor for the array length */
        set: function (length) {
            this._length = length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginatorUtil.prototype, "pageIndex", {
        /** A get accessor for the current page index */
        get: function () {
            return this._pageIndex;
        },
        /** A set accessor for the current page index */
        set: function (pageIndex) {
            this._pageIndex = pageIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginatorUtil.prototype, "pageSize", {
        /** A get accessor for the page size */
        get: function () {
            return this._pageSize;
        },
        /** A set accessor for the page size */
        set: function (pageSize) {
            this._pageSize = pageSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginatorUtil.prototype, "previousPageIndex", {
        /** A get accessor for the previous page index */
        get: function () {
            return this._previousPageIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginatorUtil.prototype, "pageSizeOptions", {
        /** A get accessor for the page size options */
        get: function () {
            return this._pageSizeOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginatorUtil.prototype, "noData", {
        /** A get accessor for the noData property */
        get: function () {
            return this._noData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginatorUtil.prototype, "sortOptions", {
        /** A get accessor for the sort optioins */
        get: function () {
            return this._sortOptions;
        },
        enumerable: true,
        configurable: true
    });
    // **********************
    // * Public methods
    // **********************
    /**
     * Append an object to the data array
     * @param object - The object to append
     * @param pageIndex - The page to go to after appending the object
     * @returns The modified page of data
     */
    PaginatorUtil.prototype.append = function (object, pageIndex) {
        if (object) {
            this._data.push(object);
            // this._length = this._data.length;
        }
        return this.paginate(pageIndex);
    };
    /**
     * Delete an object from the data array. Use the object ID to locate the object to delete.
     * @param id - The ID of the object to delete.
     * @param pageIndex - The page to go to after deleting the object
     * @returns The modified page of data
     */
    PaginatorUtil.prototype.deleteById = function (id, pageIndex) {
        if (id) {
            this._data = this._data.filter(function (f) { return f._id !== id; });
        }
        return this.paginate(pageIndex);
    };
    /**
     * Find an object in the data array
     * @param property - The object property to use for matching
     * @param value - The property value to look for
     * @returns The matching object
     */
    PaginatorUtil.prototype.find = function (property, value) {
        var result = CollectionUtil.find(this._data, property, value);
        return result;
    };
    /**
     * Find an object in the data array by matching the object ID
     * @param id - The ID of the object to find
     * @returns The matching object
     */
    PaginatorUtil.prototype.getById = function (id) {
        var object = CollectionUtil.findById(this._data, id);
        return object;
    };
    /**
     * Go to the start of the data array
     */
    PaginatorUtil.prototype.goFirst = function () {
        this._pageIndex = 0;
        return this.paginate();
    };
    /** Go to the end of the data array */
    PaginatorUtil.prototype.goLast = function () {
        var pageCount = Math.floor(this._length / this._pageSize);
        this._pageIndex = pageCount - 1;
        if (this._pageIndex < 0) {
            this._pageIndex = 0;
        }
    };
    /**
     * Insert an object in the data array
     * @param object - The object to insert
     * @param pageIndex - The page to go to after inserting the object
     * @returns The modified page of data
     */
    PaginatorUtil.prototype.insert = function (object, pageIndex) {
        if (object) {
            this._data.unshift(object);
        }
        return this.paginate(pageIndex);
    };
    /**
     * Load the passed data into the data array
     * @param data - The data to load
     * @returns The first page of data
     */
    PaginatorUtil.prototype.loadData = function (data) {
        this._data = data;
        this._length = data.length;
        this._noData = data.length === 0 ? true : false;
        var filteredData = this.paginate();
        return filteredData;
    };
    /**
     * Update the paginator properties and trigger a pagination event
     * @param pageData - The paginator properties to update
     */
    PaginatorUtil.prototype.onPagination = function (pageData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                pageData.pageSizeChanged = this._pageSize !== pageData.pageSize;
                this._length = pageData.length;
                this._pageIndex = pageData.pageIndex;
                this._pageSize = pageData.pageSize;
                this._previousPageIndex = pageData.previousPageIndex;
                this.paginationSubject$.next(pageData);
                return [2 /*return*/];
            });
        });
    };
    /**
     * Trigger a pagination event
     * @param pageIndex - The page to go to after re-sorting and filtering
     * @Returns The current page of data
     */
    PaginatorUtil.prototype.paginate = function (pageIndex) {
        this.sort();
        this._filteredData = this.filter();
        this._length = this._filteredData.length;
        if (pageIndex !== undefined) {
            this._pageIndex = pageIndex;
        }
        var start = this._pageIndex * this._pageSize;
        if (start >= this.length) {
            this._pageIndex--;
            if (this.pageIndex < 0) {
                this.pageIndex = 0;
            }
            start = this._pageIndex * this._pageSize;
        }
        var end = start + this._pageSize;
        var dataToReturn = _.slice(this._filteredData, start, end);
        return dataToReturn;
    };
    /**
     * Set the sort options
     * @param sortOptions - The sort options
     */
    PaginatorUtil.prototype.setSortOptions = function () {
        var sortOptions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sortOptions[_i] = arguments[_i];
        }
        this._sortOptions = sortOptions;
    };
    /**
     * Set the filter columns
     * @param filterColumns - The filter columns
     */
    PaginatorUtil.prototype.setFilterColumns = function () {
        var filterColumns = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            filterColumns[_i] = arguments[_i];
        }
        this._filterColumns = filterColumns;
    };
    /**
     * Set the filter options
     * @param fitlerCase - The filter case option
     * @param fitlerScope - The filter scope option
     */
    PaginatorUtil.prototype.setFilterOptions = function (fitlerCase, fitlerScope) {
        this._filterOptions = new FilterOptions(fitlerCase, fitlerScope);
    };
    /**
     * Set the filter query
     * @param query - The filter query
     * @returns A page of data
     */
    PaginatorUtil.prototype.setQuery = function (query) {
        this._query = query;
        return this.paginate();
    };
    /**
     * Update an object in the data array
     * @param object - The object to update
     * @param pageIndex - The page to go to after updating
     * @Returns The current page of data
     */
    PaginatorUtil.prototype.update = function (object, pageIndex) {
        var index = this._data.findIndex(function (o) { return o._id === object._id; });
        if (index < 0) {
            this._data.push(object);
            // this._length = this._data.length;
        }
        else {
            this._data[index] = object;
        }
        return this.paginate(pageIndex);
    };
    /**
     * Apply the current filter
     */
    PaginatorUtil.prototype.filter = function () {
        if (!this._query || !this._data) {
            return this._data;
        }
        var filteredData = CollectionUtil.filter(this._data, this._query, this._filterColumns, this._filterOptions);
        return filteredData;
    };
    /**
     * Apply the current sort options
     */
    PaginatorUtil.prototype.sort = function () {
        if (!this._sortOptions) {
            return;
        }
        if (!this._data) {
            return;
        }
        CollectionUtil.multiKeySort.apply(CollectionUtil, __spread([this._data], this._sortOptions));
    };
    return PaginatorUtil;
}());
export { PaginatorUtil };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLnV0aWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi91dGlsL3BhZ2luYXRvci9wYWdpbmF0b3IudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUkvQixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBSTNFOztHQUVHO0FBQ0g7SUE0R0U7Ozs7O09BS0c7SUFDSCx1QkFDRSxRQUFvQixFQUNwQixlQUEyQztRQUQzQyx5QkFBQSxFQUFBLFlBQW9CO1FBQ3BCLGdDQUFBLEVBQUEsbUJBQTZCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUMzQyxxQkFBNEI7YUFBNUIsVUFBNEIsRUFBNUIscUJBQTRCLEVBQTVCLElBQTRCO1lBQTVCLG9DQUE0Qjs7UUFwSDlCLHlCQUF5QjtRQUN6QixzQkFBc0I7UUFDdEIseUJBQXlCO1FBRXpCLDhFQUE4RTtRQUN2RSx1QkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBbUIsQ0FBQztRQTJFM0QsNkJBQTZCO1FBQ3JCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFFdkIsb0JBQW9CO1FBQ1osY0FBUyxHQUFHLENBQUMsQ0FBQztRQWlCdEIsd0NBQXdDO1FBQ2hDLG1CQUFjLEdBQWEsRUFBRSxDQUFDO1FBRXRDLHlCQUF5QjtRQUNqQixtQkFBYyxHQUFrQixJQUFJLGFBQWEsRUFBRSxDQUFDO1FBYTFELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFlLENBQUM7UUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENB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QUU7WUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QixvQ0FBb0M7U0FDckM7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNLLDhCQUFNLEdBQWQ7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25CO1FBQ0QsSUFBTSxZQUFZLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FDeEMsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxjQUFjLEVBQ25CLElBQUksQ0FBQyxjQUFjLENBQ3BCLENBQUM7UUFDRixPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRUQ7O09BRUc7SUFDSyw0QkFBSSxHQUFaO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixPQUFPO1NBQ1I7UUFDRCxjQUFjLENBQUMsWUFBWSxPQUEzQixjQUFjLFlBQWMsSUFBSSxDQUFDLEtBQUssR0FBSyxJQUFJLENBQUMsWUFBWSxHQUFFO0lBQ2hFLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFwVkQsSUFvVkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQYWdpbmF0aW9uRXZlbnQgfSBmcm9tICcuL19tb2RlbHMvcGFnaW5hdGlvbi1ldmVudC5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvYmFzZS9iYXNlLm1vZGVsJztcbmltcG9ydCB7IFNvcnRPcHRpb24gfSBmcm9tICcuLi9jb2xsZWN0aW9uL19tb2RlbHMvc29ydC1vcHRpb24ubW9kZWwnO1xuaW1wb3J0IHsgQ29sbGVjdGlvblV0aWwgfSBmcm9tICcuLi9jb2xsZWN0aW9uL2NvbGxlY3Rpb24udXRpbCc7XG5pbXBvcnQgeyBGaWx0ZXJPcHRpb25zIH0gZnJvbSAnLi4vY29sbGVjdGlvbi9fbW9kZWxzL2ZpbHRlci1vcHRpb25zLm1vZGVsJztcbmltcG9ydCB7IEZpbHRlckNhc2UgfSBmcm9tICcuLi9jb2xsZWN0aW9uL19lbnVtcy9maWx0ZXItY2FzZS5lbnVtJztcbmltcG9ydCB7IEZpbHRlclNjb3BlIH0gZnJvbSAnLi4vY29sbGVjdGlvbi9fZW51bXMvZmlsdGVyLXNjb3BlLmVudW0nO1xuXG4vKipcbiAqIEEgdXRpbGl0eSB0byBpbXBsZW1lbnQgcGFnaW5hdGlvblxuICovXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9yVXRpbDxUIGV4dGVuZHMgQmFzZU1vZGVsPiB7XG4gIC8vICoqKioqKioqKioqKioqKioqKioqKipcbiAgLy8gKiBQdWJsaWMgcHJvcGVydGllc1xuICAvLyAqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgLyoqIEFuIFJYSlMgc3ViamVjdCB0aGF0IHdpbGwgZW1pdCBldmVudHMgd2hlbiBwYWdpbmF0aW9uIHByb3BlcnRpZXMgY2hhbmdlICovXG4gIHB1YmxpYyBwYWdpbmF0aW9uU3ViamVjdCQgPSBuZXcgU3ViamVjdDxQYWdpbmF0aW9uRXZlbnQ+KCk7XG5cbiAgLyoqIEEgZ2V0IGFjY2Vzc29yIGZvciB0aGUgcXVlcnkgc3RyaW5nICovXG4gIHB1YmxpYyBnZXQgcXVlcnkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcXVlcnk7XG4gIH1cblxuICAvKiogQSBnZXQgYWNjZXNzb3IgZm9yIHRoZSBoYXNGaWx0ZXIgcHJvcGVydHkgKi9cbiAgcHVibGljIGdldCBoYXNGaWx0ZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3F1ZXJ5ID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgLyoqIEEgZ2V0IGFjY2Vzc29yIGZvciB0aGUgYXJyYXkgbGVuZ3RoICovXG4gIHB1YmxpYyBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xlbmd0aDtcbiAgfVxuXG4gIC8qKiBBIHNldCBhY2Nlc3NvciBmb3IgdGhlIGFycmF5IGxlbmd0aCAqL1xuICBwdWJsaWMgc2V0IGxlbmd0aChsZW5ndGg6IG51bWJlcikge1xuICAgIHRoaXMuX2xlbmd0aCA9IGxlbmd0aDtcbiAgfVxuXG4gIC8qKiBBIGdldCBhY2Nlc3NvciBmb3IgdGhlIGN1cnJlbnQgcGFnZSBpbmRleCAqL1xuICBwdWJsaWMgZ2V0IHBhZ2VJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlSW5kZXg7XG4gIH1cblxuICAvKiogQSBzZXQgYWNjZXNzb3IgZm9yIHRoZSBjdXJyZW50IHBhZ2UgaW5kZXggKi9cbiAgcHVibGljIHNldCBwYWdlSW5kZXgocGFnZUluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYWdlSW5kZXggPSBwYWdlSW5kZXg7XG4gIH1cblxuICAvKiogQSBnZXQgYWNjZXNzb3IgZm9yIHRoZSBwYWdlIHNpemUgKi9cbiAgcHVibGljIGdldCBwYWdlU2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlU2l6ZTtcbiAgfVxuXG4gIC8qKiBBIHNldCBhY2Nlc3NvciBmb3IgdGhlIHBhZ2Ugc2l6ZSAqL1xuICBwdWJsaWMgc2V0IHBhZ2VTaXplKHBhZ2VTaXplOiBudW1iZXIpIHtcbiAgICB0aGlzLl9wYWdlU2l6ZSA9IHBhZ2VTaXplO1xuICB9XG5cbiAgLyoqIEEgZ2V0IGFjY2Vzc29yIGZvciB0aGUgcHJldmlvdXMgcGFnZSBpbmRleCAqL1xuICBwdWJsaWMgZ2V0IHByZXZpb3VzUGFnZUluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZXZpb3VzUGFnZUluZGV4O1xuICB9XG5cbiAgLyoqIEEgZ2V0IGFjY2Vzc29yIGZvciB0aGUgcGFnZSBzaXplIG9wdGlvbnMgKi9cbiAgcHVibGljIGdldCBwYWdlU2l6ZU9wdGlvbnMoKTogbnVtYmVyW10ge1xuICAgIHJldHVybiB0aGlzLl9wYWdlU2l6ZU9wdGlvbnM7XG4gIH1cblxuICAvKiogQSBnZXQgYWNjZXNzb3IgZm9yIHRoZSBub0RhdGEgcHJvcGVydHkgKi9cbiAgcHVibGljIGdldCBub0RhdGEoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX25vRGF0YTtcbiAgfVxuXG4gIC8qKiBBIGdldCBhY2Nlc3NvciBmb3IgdGhlIHNvcnQgb3B0aW9pbnMgKi9cbiAgcHVibGljIGdldCBzb3J0T3B0aW9ucygpOiBTb3J0T3B0aW9uW10ge1xuICAgIHJldHVybiB0aGlzLl9zb3J0T3B0aW9ucztcbiAgfVxuXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKipcbiAgLy8gKiBQcml2YXRlIHByb3BlcnRpZXNcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKlxuXG4gIC8qKiBUaGUgb3JpZ2luYWwgZGF0YSBhcnJheSAqL1xuICBwcml2YXRlIF9kYXRhOiBhbnlbXTtcblxuICAvKiogVGhlIGZpbHRlcmVkIGRhdGEgYXJyYXkgKi9cbiAgcHJpdmF0ZSBfZmlsdGVyZWREYXRhOiBhbnlbXTtcblxuICAvKiogVGhlIGxlbmd0aCBvZiB0aGUgZmlsdGVyZWQgYXJyYXkgKi9cbiAgcHJpdmF0ZSBfbGVuZ3RoOiBudW1iZXI7XG5cbiAgLyoqIFRoZSBjdXJyZW50IHBhZ2UgaW5kZXggKi9cbiAgcHJpdmF0ZSBfcGFnZUluZGV4ID0gMDtcblxuICAvKiogVGhlIHBhZ2Ugc2l6ZSAqL1xuICBwcml2YXRlIF9wYWdlU2l6ZSA9IDU7XG5cbiAgLyoqIFRoZSBwcmV2aW91cyBwYWdlIGluZGV4ICovXG4gIHByaXZhdGUgX3ByZXZpb3VzUGFnZUluZGV4OiBudW1iZXI7XG5cbiAgLyoqIFRoZSBwYWdlIHNpemUgb3B0aW9ucyAqL1xuICBwcml2YXRlIF9wYWdlU2l6ZU9wdGlvbnM6IG51bWJlcltdO1xuXG4gIC8qKiBUaGUgbm8gZGF0YSBmbGFnICovXG4gIHByaXZhdGUgX25vRGF0YTogYm9vbGVhbjtcblxuICAvKiogVGhlIHNvcnQgb3B0aW9ucyAqL1xuICBwcml2YXRlIF9zb3J0T3B0aW9uczogU29ydE9wdGlvbltdO1xuXG4gIC8qKiBUaGUgcXVlcnkgc3RyaW5nICovXG4gIHByaXZhdGUgX3F1ZXJ5OiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBjb2x1bW5zIHRvIHVzZSB3aGVuIGZpbHRlcmluZyAqL1xuICBwcml2YXRlIF9maWx0ZXJDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xuXG4gIC8qKiBUaGUgZmlsdGVyIG9wdGlvbnMgKi9cbiAgcHJpdmF0ZSBfZmlsdGVyT3B0aW9uczogRmlsdGVyT3B0aW9ucyA9IG5ldyBGaWx0ZXJPcHRpb25zKCk7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSBwYWdlU2l6ZSAtIFRoZSBwYWdlIHNpemVcbiAgICogQHBhcmFtIHBhZ2VTaXplT3B0aW9ucyAtIFRoZSBwYWdlIHNpemUgb3B0aW9uc1xuICAgKiBAcGFyYW0gc29ydE9wdGlvbnMgLSBUaGUgc29ydCBvcHRpb25zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwYWdlU2l6ZTogbnVtYmVyID0gNSxcbiAgICBwYWdlU2l6ZU9wdGlvbnM6IG51bWJlcltdID0gWzUsIDEwLCAyMCwgNTBdLFxuICAgIC4uLnNvcnRPcHRpb25zOiBTb3J0T3B0aW9uW11cbiAgKSB7XG4gICAgdGhpcy5fcGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgICB0aGlzLl9wYWdlU2l6ZU9wdGlvbnMgPSBwYWdlU2l6ZU9wdGlvbnM7XG4gICAgdGhpcy5fc29ydE9wdGlvbnMgPSBzb3J0T3B0aW9ucztcbiAgfVxuXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKipcbiAgLy8gKiBQdWJsaWMgbWV0aG9kc1xuICAvLyAqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgLyoqXG4gICAqIEFwcGVuZCBhbiBvYmplY3QgdG8gdGhlIGRhdGEgYXJyYXlcbiAgICogQHBhcmFtIG9iamVjdCAtIFRoZSBvYmplY3QgdG8gYXBwZW5kXG4gICAqIEBwYXJhbSBwYWdlSW5kZXggLSBUaGUgcGFnZSB0byBnbyB0byBhZnRlciBhcHBlbmRpbmcgdGhlIG9iamVjdFxuICAgKiBAcmV0dXJucyBUaGUgbW9kaWZpZWQgcGFnZSBvZiBkYXRhXG4gICAqL1xuICBwdWJsaWMgYXBwZW5kKG9iamVjdDogVCwgcGFnZUluZGV4PzogbnVtYmVyKTogVFtdIHtcbiAgICBpZiAob2JqZWN0KSB7XG4gICAgICB0aGlzLl9kYXRhLnB1c2gob2JqZWN0KTtcbiAgICAgIC8vIHRoaXMuX2xlbmd0aCA9IHRoaXMuX2RhdGEubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wYWdpbmF0ZShwYWdlSW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhbiBvYmplY3QgZnJvbSB0aGUgZGF0YSBhcnJheS4gVXNlIHRoZSBvYmplY3QgSUQgdG8gbG9jYXRlIHRoZSBvYmplY3QgdG8gZGVsZXRlLlxuICAgKiBAcGFyYW0gaWQgLSBUaGUgSUQgb2YgdGhlIG9iamVjdCB0byBkZWxldGUuXG4gICAqIEBwYXJhbSBwYWdlSW5kZXggLSBUaGUgcGFnZSB0byBnbyB0byBhZnRlciBkZWxldGluZyB0aGUgb2JqZWN0XG4gICAqIEByZXR1cm5zIFRoZSBtb2RpZmllZCBwYWdlIG9mIGRhdGFcbiAgICovXG4gIHB1YmxpYyBkZWxldGVCeUlkKGlkOiBzdHJpbmcsIHBhZ2VJbmRleD86IG51bWJlcik6IFRbXSB7XG4gICAgaWYgKGlkKSB7XG4gICAgICB0aGlzLl9kYXRhID0gdGhpcy5fZGF0YS5maWx0ZXIoZiA9PiBmLl9pZCAhPT0gaWQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wYWdpbmF0ZShwYWdlSW5kZXgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYW4gb2JqZWN0IGluIHRoZSBkYXRhIGFycmF5XG4gICAqIEBwYXJhbSBwcm9wZXJ0eSAtIFRoZSBvYmplY3QgcHJvcGVydHkgdG8gdXNlIGZvciBtYXRjaGluZ1xuICAgKiBAcGFyYW0gdmFsdWUgLSBUaGUgcHJvcGVydHkgdmFsdWUgdG8gbG9vayBmb3JcbiAgICogQHJldHVybnMgVGhlIG1hdGNoaW5nIG9iamVjdFxuICAgKi9cbiAgcHVibGljIGZpbmQocHJvcGVydHk6IHN0cmluZywgdmFsdWU6IGFueSk6IFQge1xuICAgIGNvbnN0IHJlc3VsdCA9IENvbGxlY3Rpb25VdGlsLmZpbmQodGhpcy5fZGF0YSwgcHJvcGVydHksIHZhbHVlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYW4gb2JqZWN0IGluIHRoZSBkYXRhIGFycmF5IGJ5IG1hdGNoaW5nIHRoZSBvYmplY3QgSURcbiAgICogQHBhcmFtIGlkIC0gVGhlIElEIG9mIHRoZSBvYmplY3QgdG8gZmluZFxuICAgKiBAcmV0dXJucyBUaGUgbWF0Y2hpbmcgb2JqZWN0XG4gICAqL1xuICBwdWJsaWMgZ2V0QnlJZChpZDogc3RyaW5nKTogVCB7XG4gICAgY29uc3Qgb2JqZWN0ID0gQ29sbGVjdGlvblV0aWwuZmluZEJ5SWQodGhpcy5fZGF0YSwgaWQpO1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogR28gdG8gdGhlIHN0YXJ0IG9mIHRoZSBkYXRhIGFycmF5XG4gICAqL1xuICBwdWJsaWMgZ29GaXJzdCgpIHtcbiAgICB0aGlzLl9wYWdlSW5kZXggPSAwO1xuICAgIHJldHVybiB0aGlzLnBhZ2luYXRlKCk7XG4gIH1cblxuICAvKiogR28gdG8gdGhlIGVuZCBvZiB0aGUgZGF0YSBhcnJheSAqL1xuICBwdWJsaWMgZ29MYXN0KCkge1xuICAgIGNvbnN0IHBhZ2VDb3VudCA9IE1hdGguZmxvb3IodGhpcy5fbGVuZ3RoIC8gdGhpcy5fcGFnZVNpemUpO1xuICAgIHRoaXMuX3BhZ2VJbmRleCA9IHBhZ2VDb3VudCAtIDE7XG4gICAgaWYgKHRoaXMuX3BhZ2VJbmRleCA8IDApIHtcbiAgICAgIHRoaXMuX3BhZ2VJbmRleCA9IDA7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydCBhbiBvYmplY3QgaW4gdGhlIGRhdGEgYXJyYXlcbiAgICogQHBhcmFtIG9iamVjdCAtIFRoZSBvYmplY3QgdG8gaW5zZXJ0XG4gICAqIEBwYXJhbSBwYWdlSW5kZXggLSBUaGUgcGFnZSB0byBnbyB0byBhZnRlciBpbnNlcnRpbmcgdGhlIG9iamVjdFxuICAgKiBAcmV0dXJucyBUaGUgbW9kaWZpZWQgcGFnZSBvZiBkYXRhXG4gICAqL1xuICBwdWJsaWMgaW5zZXJ0KG9iamVjdDogVCwgcGFnZUluZGV4PzogbnVtYmVyKTogVFtdIHtcbiAgICBpZiAob2JqZWN0KSB7XG4gICAgICB0aGlzLl9kYXRhLnVuc2hpZnQob2JqZWN0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucGFnaW5hdGUocGFnZUluZGV4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIHRoZSBwYXNzZWQgZGF0YSBpbnRvIHRoZSBkYXRhIGFycmF5XG4gICAqIEBwYXJhbSBkYXRhIC0gVGhlIGRhdGEgdG8gbG9hZFxuICAgKiBAcmV0dXJucyBUaGUgZmlyc3QgcGFnZSBvZiBkYXRhXG4gICAqL1xuICBwdWJsaWMgbG9hZERhdGEoZGF0YTogVFtdKTogVFtdIHtcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICB0aGlzLl9sZW5ndGggPSBkYXRhLmxlbmd0aDtcbiAgICB0aGlzLl9ub0RhdGEgPSBkYXRhLmxlbmd0aCA9PT0gMCA/IHRydWUgOiBmYWxzZTtcbiAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSB0aGlzLnBhZ2luYXRlKCk7XG4gICAgcmV0dXJuIGZpbHRlcmVkRGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIHBhZ2luYXRvciBwcm9wZXJ0aWVzIGFuZCB0cmlnZ2VyIGEgcGFnaW5hdGlvbiBldmVudFxuICAgKiBAcGFyYW0gcGFnZURhdGEgLSBUaGUgcGFnaW5hdG9yIHByb3BlcnRpZXMgdG8gdXBkYXRlXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgb25QYWdpbmF0aW9uKHBhZ2VEYXRhOiBQYWdpbmF0aW9uRXZlbnQpIHtcbiAgICBwYWdlRGF0YS5wYWdlU2l6ZUNoYW5nZWQgPSB0aGlzLl9wYWdlU2l6ZSAhPT0gcGFnZURhdGEucGFnZVNpemU7XG4gICAgdGhpcy5fbGVuZ3RoID0gcGFnZURhdGEubGVuZ3RoO1xuICAgIHRoaXMuX3BhZ2VJbmRleCA9IHBhZ2VEYXRhLnBhZ2VJbmRleDtcbiAgICB0aGlzLl9wYWdlU2l6ZSA9IHBhZ2VEYXRhLnBhZ2VTaXplO1xuICAgIHRoaXMuX3ByZXZpb3VzUGFnZUluZGV4ID0gcGFnZURhdGEucHJldmlvdXNQYWdlSW5kZXg7XG4gICAgdGhpcy5wYWdpbmF0aW9uU3ViamVjdCQubmV4dChwYWdlRGF0YSk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZ2dlciBhIHBhZ2luYXRpb24gZXZlbnRcbiAgICogQHBhcmFtIHBhZ2VJbmRleCAtIFRoZSBwYWdlIHRvIGdvIHRvIGFmdGVyIHJlLXNvcnRpbmcgYW5kIGZpbHRlcmluZ1xuICAgKiBAUmV0dXJucyBUaGUgY3VycmVudCBwYWdlIG9mIGRhdGFcbiAgICovXG4gIHB1YmxpYyBwYWdpbmF0ZShwYWdlSW5kZXg/OiBudW1iZXIpOiBUW10ge1xuICAgIHRoaXMuc29ydCgpO1xuICAgIHRoaXMuX2ZpbHRlcmVkRGF0YSA9IHRoaXMuZmlsdGVyKCk7XG4gICAgdGhpcy5fbGVuZ3RoID0gdGhpcy5fZmlsdGVyZWREYXRhLmxlbmd0aDtcbiAgICBpZiAocGFnZUluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3BhZ2VJbmRleCA9IHBhZ2VJbmRleDtcbiAgICB9XG4gICAgbGV0IHN0YXJ0ID0gdGhpcy5fcGFnZUluZGV4ICogdGhpcy5fcGFnZVNpemU7XG4gICAgaWYgKHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9wYWdlSW5kZXgtLTtcbiAgICAgIGlmICh0aGlzLnBhZ2VJbmRleCA8IDApIHtcbiAgICAgICAgdGhpcy5wYWdlSW5kZXggPSAwO1xuICAgICAgfVxuICAgICAgc3RhcnQgPSB0aGlzLl9wYWdlSW5kZXggKiB0aGlzLl9wYWdlU2l6ZTtcbiAgICB9XG4gICAgY29uc3QgZW5kID0gc3RhcnQgKyB0aGlzLl9wYWdlU2l6ZTtcbiAgICBjb25zdCBkYXRhVG9SZXR1cm4gPSBfLnNsaWNlKHRoaXMuX2ZpbHRlcmVkRGF0YSwgc3RhcnQsIGVuZCk7XG4gICAgcmV0dXJuIGRhdGFUb1JldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHNvcnQgb3B0aW9uc1xuICAgKiBAcGFyYW0gc29ydE9wdGlvbnMgLSBUaGUgc29ydCBvcHRpb25zXG4gICAqL1xuICBwdWJsaWMgc2V0U29ydE9wdGlvbnMoLi4uc29ydE9wdGlvbnM6IFNvcnRPcHRpb25bXSkge1xuICAgIHRoaXMuX3NvcnRPcHRpb25zID0gc29ydE9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBmaWx0ZXIgY29sdW1uc1xuICAgKiBAcGFyYW0gZmlsdGVyQ29sdW1ucyAtIFRoZSBmaWx0ZXIgY29sdW1uc1xuICAgKi9cbiAgcHVibGljIHNldEZpbHRlckNvbHVtbnMoLi4uZmlsdGVyQ29sdW1uczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0aGlzLl9maWx0ZXJDb2x1bW5zID0gZmlsdGVyQ29sdW1ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGZpbHRlciBvcHRpb25zXG4gICAqIEBwYXJhbSBmaXRsZXJDYXNlIC0gVGhlIGZpbHRlciBjYXNlIG9wdGlvblxuICAgKiBAcGFyYW0gZml0bGVyU2NvcGUgLSBUaGUgZmlsdGVyIHNjb3BlIG9wdGlvblxuICAgKi9cbiAgcHVibGljIHNldEZpbHRlck9wdGlvbnMoXG4gICAgZml0bGVyQ2FzZTogRmlsdGVyQ2FzZSxcbiAgICBmaXRsZXJTY29wZTogRmlsdGVyU2NvcGVcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5fZmlsdGVyT3B0aW9ucyA9IG5ldyBGaWx0ZXJPcHRpb25zKGZpdGxlckNhc2UsIGZpdGxlclNjb3BlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGZpbHRlciBxdWVyeVxuICAgKiBAcGFyYW0gcXVlcnkgLSBUaGUgZmlsdGVyIHF1ZXJ5XG4gICAqIEByZXR1cm5zIEEgcGFnZSBvZiBkYXRhXG4gICAqL1xuICBwdWJsaWMgc2V0UXVlcnkocXVlcnk6IHN0cmluZyk6IFRbXSB7XG4gICAgdGhpcy5fcXVlcnkgPSBxdWVyeTtcbiAgICByZXR1cm4gdGhpcy5wYWdpbmF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBhbiBvYmplY3QgaW4gdGhlIGRhdGEgYXJyYXlcbiAgICogQHBhcmFtIG9iamVjdCAtIFRoZSBvYmplY3QgdG8gdXBkYXRlXG4gICAqIEBwYXJhbSBwYWdlSW5kZXggLSBUaGUgcGFnZSB0byBnbyB0byBhZnRlciB1cGRhdGluZ1xuICAgKiBAUmV0dXJucyBUaGUgY3VycmVudCBwYWdlIG9mIGRhdGFcbiAgICovXG4gIHB1YmxpYyB1cGRhdGUob2JqZWN0OiBULCBwYWdlSW5kZXg/OiBudW1iZXIpOiBUW10ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fZGF0YS5maW5kSW5kZXgobyA9PiBvLl9pZCA9PT0gb2JqZWN0Ll9pZCk7XG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgdGhpcy5fZGF0YS5wdXNoKG9iamVjdCk7XG4gICAgICAvLyB0aGlzLl9sZW5ndGggPSB0aGlzLl9kYXRhLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGF0YVtpbmRleF0gPSBvYmplY3Q7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBhZ2luYXRlKHBhZ2VJbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogQXBwbHkgdGhlIGN1cnJlbnQgZmlsdGVyXG4gICAqL1xuICBwcml2YXRlIGZpbHRlcigpOiBUW10ge1xuICAgIGlmICghdGhpcy5fcXVlcnkgfHwgIXRoaXMuX2RhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgIH1cbiAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBDb2xsZWN0aW9uVXRpbC5maWx0ZXIoXG4gICAgICB0aGlzLl9kYXRhLFxuICAgICAgdGhpcy5fcXVlcnksXG4gICAgICB0aGlzLl9maWx0ZXJDb2x1bW5zLFxuICAgICAgdGhpcy5fZmlsdGVyT3B0aW9uc1xuICAgICk7XG4gICAgcmV0dXJuIGZpbHRlcmVkRGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSB0aGUgY3VycmVudCBzb3J0IG9wdGlvbnNcbiAgICovXG4gIHByaXZhdGUgc29ydCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX3NvcnRPcHRpb25zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5fZGF0YSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBDb2xsZWN0aW9uVXRpbC5tdWx0aUtleVNvcnQodGhpcy5fZGF0YSwgLi4udGhpcy5fc29ydE9wdGlvbnMpO1xuICB9XG59XG4iXX0=
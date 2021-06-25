import { Subject } from 'rxjs';
import { PaginationEvent } from './_models/pagination-event.model';
import { BaseModel } from '../../models/base/base.model';
import { SortOption } from '../collection/_models/sort-option.model';
import { FilterCase } from '../collection/_enums/filter-case.enum';
import { FilterScope } from '../collection/_enums/filter-scope.enum';
/**
 * A utility to implement pagination
 */
export declare class PaginatorUtil<T extends BaseModel> {
    /** An RXJS subject that will emit events when pagination properties change */
    paginationSubject$: Subject<PaginationEvent>;
    /** A get accessor for the query string */
    get query(): string;
    /** A get accessor for the hasFilter property */
    get hasFilter(): boolean;
    /** A get accessor for the array length */
    get length(): number;
    /** A set accessor for the array length */
    set length(length: number);
    /** A get accessor for the current page index */
    get pageIndex(): number;
    /** A set accessor for the current page index */
    set pageIndex(pageIndex: number);
    /** A get accessor for the page size */
    get pageSize(): number;
    /** A set accessor for the page size */
    set pageSize(pageSize: number);
    /** A get accessor for the previous page index */
    get previousPageIndex(): number;
    /** A get accessor for the page size options */
    get pageSizeOptions(): number[];
    /** A get accessor for the noData property */
    get noData(): boolean;
    /** A get accessor for the sort optioins */
    get sortOptions(): SortOption[];
    /** The original data array */
    private _data;
    /** The filtered data array */
    private _filteredData;
    /** The length of the filtered array */
    private _length;
    /** The current page index */
    private _pageIndex;
    /** The page size */
    private _pageSize;
    /** The previous page index */
    private _previousPageIndex;
    /** The page size options */
    private _pageSizeOptions;
    /** The no data flag */
    private _noData;
    /** The sort options */
    private _sortOptions;
    /** The query string */
    private _query;
    /** The columns to use when filtering */
    private _filterColumns;
    /** The filter options */
    private _filterOptions;
    /**
     * Constructor
     * @param pageSize - The page size
     * @param pageSizeOptions - The page size options
     * @param sortOptions - The sort options
     */
    constructor(pageSize?: number, pageSizeOptions?: number[], ...sortOptions: SortOption[]);
    /**
     * Append an object to the data array
     * @param object - The object to append
     * @param pageIndex - The page to go to after appending the object
     * @returns The modified page of data
     */
    append(object: T, pageIndex?: number): T[];
    /**
     * Delete an object from the data array. Use the object ID to locate the object to delete.
     * @param id - The ID of the object to delete.
     * @param pageIndex - The page to go to after deleting the object
     * @returns The modified page of data
     */
    deleteById(id: string, pageIndex?: number): T[];
    /**
     * Find an object in the data array
     * @param property - The object property to use for matching
     * @param value - The property value to look for
     * @returns The matching object
     */
    find(property: string, value: any): T;
    /**
     * Find an object in the data array by matching the object ID
     * @param id - The ID of the object to find
     * @returns The matching object
     */
    getById(id: string): T;
    /**
     * Go to the start of the data array
     */
    goFirst(): T[];
    /** Go to the end of the data array */
    goLast(): void;
    /**
     * Insert an object in the data array
     * @param object - The object to insert
     * @param pageIndex - The page to go to after inserting the object
     * @returns The modified page of data
     */
    insert(object: T, pageIndex?: number): T[];
    /**
     * Load the passed data into the data array
     * @param data - The data to load
     * @returns The first page of data
     */
    loadData(data: T[]): T[];
    /**
     * Update the paginator properties and trigger a pagination event
     * @param pageData - The paginator properties to update
     */
    onPagination(pageData: PaginationEvent): Promise<void>;
    /**
     * Trigger a pagination event
     * @param pageIndex - The page to go to after re-sorting and filtering
     * @Returns The current page of data
     */
    paginate(pageIndex?: number): T[];
    /**
     * Set the sort options
     * @param sortOptions - The sort options
     */
    setSortOptions(...sortOptions: SortOption[]): void;
    /**
     * Set the filter columns
     * @param filterColumns - The filter columns
     */
    setFilterColumns(...filterColumns: string[]): void;
    /**
     * Set the filter options
     * @param fitlerCase - The filter case option
     * @param fitlerScope - The filter scope option
     */
    setFilterOptions(fitlerCase: FilterCase, fitlerScope: FilterScope): void;
    /**
     * Set the filter query
     * @param query - The filter query
     * @returns A page of data
     */
    setQuery(query: string): T[];
    /**
     * Update an object in the data array
     * @param object - The object to update
     * @param pageIndex - The page to go to after updating
     * @Returns The current page of data
     */
    update(object: T, pageIndex?: number): T[];
    /**
     * Apply the current filter
     */
    private filter;
    /**
     * Apply the current sort options
     */
    private sort;
}

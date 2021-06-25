/**
 * A class to pass pagination event data
 */
export interface PaginationEvent {
    /** The current length of the array */
    length: number;
    /** The index of the newly selected page */
    pageIndex: number;
    /** The current page size */
    pageSize: number;
    /** The index of the previously selected page */
    previousPageIndex: number;
    /** Boolean indicating whether the page size just changed */
    pageSizeChanged: boolean;
}

export declare class GetOptions {
    query: string;
    filter: string;
    skip: number;
    take: number;
    sort: string;
    sortColumn: string;
    sortAscending: boolean;
    constructor(currentPage?: number, pageSize?: number);
    static calculatePageCount(rowCount: number, pageSize: number): number;
    setSort(field: string, ascending?: boolean): void;
}

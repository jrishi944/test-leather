import { Sort } from '../_enums/sort.enum';
/**
 * A class to store sort options
 */
export declare class SortOption {
    key: string;
    order: Sort;
    /**
     * Constructor
     * @param key - The object property to use for sorting
     * @param order - The sort order
     */
    constructor(key: string, order: Sort);
}

import { SortOption } from './_models/sort-option.model';
import { BaseModel } from '../../models/base/base.model';
import { FilterOptions } from './_models/filter-options.model';
import { UniqueMode } from './_enums/unique-mode.enum';
import { Unique } from './_enums/unique.enum';
import { Sort } from './_enums/sort.enum';
/**
 * A utility for sorting and filtering arrays
 */
export declare class CollectionUtil {
    /**
     * Append an item to an array
     * @param collection - The array of items
     * @param item - The item to append to the array
     * @param unique - Enum indicating whether uniqueness is enforced
     * @param uniqueMode - Enum indicating how uniqueness will be determined
     * @returns True if the item was successfully appended
     */
    static append<T>(collection: T[], item: T, unique?: Unique, uniqueMode?: UniqueMode): boolean;
    /**
     * Fitler an array of objects
     * @param collection - The array of objects to filter
     * @param filter - The filter string
     * @param filterColumns - The object properties to use when filtering
     * @param filterOptions - The filter options
     * @returns An array of filtered objects
     */
    static filter<T>(collection: T[], filter: string, filterColumns: string[], filterOptions?: FilterOptions): T[];
    /**
     * Find an object in an array of objects by matching an object property
     * @param collection - The array of objects to search
     * @param property - The object property to search
     * @param value - The value to match
     * @returns The matching object
     */
    static find<T>(collection: T[], property: string, value: any): T;
    /**
     * Find an object in an array of objects by matching the object's ID
     * @param collection - The array of objects to search
     * @param id - The object ID to search for
     * @returns The matching object
     */
    static findById<T extends BaseModel>(collection: T[], id: string): T;
    /**
     * Get the index of an object in an array of objects
     * @param collection - The array of objects to search
     * @param item - The item to search for
     * @returns The index of the item in the array (zero-based)
     */
    static findIndex<T>(collection: T[], item: T): number;
    /**
     * Insert an object into an array of objects
     * @param collection - The array of objects into which the object will be inserted
     * @param item - The item to insert into the array
     * @param index - The desired location of the item in the array
     * @returns True if the insert succeeded
     */
    static insert<T>(collection: T[], item: T, index?: number): boolean;
    /**
     * Sort an array of objects by mutliple keys. The method sorts the passed array in-place as opposed to
     * returning the sorted array.
     * @param collection - The array of objects to sort
     * @param sortOptions - The sort options
     */
    static multiKeySort<T>(collection: T[], ...sortOptions: SortOption[]): void;
    /**
     * Remove an object from an array of objects by matching the object ID
     * @param collection - The array of objects from which to remove an object
     * @param item - The item to remove from the array
     * @returns The array of objects with the item removed
     */
    static remove<T extends BaseModel>(collection: T[], item: T): T[];
    /**
     * Remove an object from an array of object by matching the passed object ID
     * @param collection - The array of objects from which to remove an object
     * @param ID - The ID of the item to remove from the array
     * @returns The array of objects with the item removed
     */
    static removeById<T extends BaseModel>(collection: T[], id: string): T[];
    /**
     * Shuffly an array of objects
     * @param collection - The array of objects to shuffly
     * @returns The shuffled array of objects
     */
    static shuffle<T>(collection: T[]): T[];
    /**
     * Sort an array of objects by a single property. The method sorts the passed array in-place as opposed to
     * returning the sorted array.
     * @param collection - The array of objects to sort
     * @param key - The property to use for sorting
     * @param order - The sort order
     */
    static sort<T>(collection: T[], key: string, order: Sort): void;
    /**
     * Update an object in an array of objects. Use the object's ID to match objects.
     * @param collection - The array of objects that contains the object to update
     * @param item - The item to update
     * @param addIfMissing - Boolean indicating whether to add the item if it is not present in the array
     * @returns The array of objects with the updated item
     */
    static update<T extends BaseModel>(collection: T[], item: T, addIfMissing?: boolean): T[];
    /**
     * Create a regular expression object that implements the passed filter options
     * @param filter - The filter text
     * @param filterOptions - The filter options
     * @returns A regular expression object
     */
    private static getFilterRegex;
    /**
     * Determine whether an object exists in an array of objects by comparing the object properties
     * @param collection - The array of objects to search
     * @param item - The item to search for
     * @returns True if the object is unique
     */
    private static isUniqueByObject;
    /**
     * Determine whether an object exists in an array of objects by comparing the object IDs
     * @param collection - The array of objects to search
     * @param item - The item to search for
     * @returns True if the object is unique
     */
    private static isUniqueById;
    /**
     * Escape a regular expression string
     * @param regexString - The regex string to escape
     * @returns The escaped regular expression string
     */
    private static escapeRegexCharacters;
}

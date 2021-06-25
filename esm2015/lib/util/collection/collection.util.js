import { FilterOptions } from './_models/filter-options.model';
import { UniqueMode } from './_enums/unique-mode.enum';
import { Unique } from './_enums/unique.enum';
import { Sort } from './_enums/sort.enum';
import { FilterScope } from './_enums/filter-scope.enum';
import { FilterCase } from './_enums/filter-case.enum';
import { RegexUtil } from '../regex/regex.util';
import * as _ from 'lodash';
/**
 * A utility for sorting and filtering arrays
 */
export class CollectionUtil {
    // ********************
    // Public Static methods
    // ********************
    /**
     * Append an item to an array
     * @param collection - The array of items
     * @param item - The item to append to the array
     * @param unique - Enum indicating whether uniqueness is enforced
     * @param uniqueMode - Enum indicating how uniqueness will be determined
     * @returns True if the item was successfully appended
     */
    static append(collection, item, unique = Unique.True, uniqueMode = UniqueMode.Id) {
        if (unique === Unique.True) {
            if (uniqueMode === UniqueMode.Id &&
                item.hasOwnProperty('_id') &&
                CollectionUtil.isUniqueById(collection, item) === false) {
                return false;
            }
            else if (uniqueMode === UniqueMode.Object &&
                CollectionUtil.isUniqueByObject(collection, item) === false) {
                return false;
            }
        }
        collection.push(item);
        return true;
    }
    /**
     * Fitler an array of objects
     * @param collection - The array of objects to filter
     * @param filter - The filter string
     * @param filterColumns - The object properties to use when filtering
     * @param filterOptions - The filter options
     * @returns An array of filtered objects
     */
    static filter(collection, filter, filterColumns, filterOptions) {
        // If the filter string or collection are not valid then just return the collection unchanged
        if (!filter || !collection) {
            return collection;
        }
        if (!filterOptions) {
            filterOptions = new FilterOptions();
        }
        // Filter the collection using a lambda expression
        const filteredData = collection.filter(o => {
            // For each of the filter columns
            for (const filterColumn of filterColumns) {
                // Get the text of the current column
                const text = o[filterColumn];
                // Create a regular expression for the passed filter string and filter options
                const regExp = this.getFilterRegex(filter, filterOptions);
                // If the contents of the current column matches the filter string then
                if (text.search(regExp) >= 0) {
                    // Return true (collection row is included in the filtered data)
                    return true;
                }
            }
            // Return false (collection row is not included in the filtered data)
            return false;
        });
        // Return the filtered data
        return filteredData;
    }
    /**
     * Find an object in an array of objects by matching an object property
     * @param collection - The array of objects to search
     * @param property - The object property to search
     * @param value - The value to match
     * @returns The matching object
     */
    static find(collection, property, value) {
        const object = collection.find(o => o[property] === value);
        return object;
    }
    /**
     * Find an object in an array of objects by matching the object's ID
     * @param collection - The array of objects to search
     * @param id - The object ID to search for
     * @returns The matching object
     */
    static findById(collection, id) {
        const object = collection.find(o => o._id === id);
        return object;
    }
    /**
     * Get the index of an object in an array of objects
     * @param collection - The array of objects to search
     * @param item - The item to search for
     * @returns The index of the item in the array (zero-based)
     */
    static findIndex(collection, item) {
        const index = collection.findIndex(o => o === item);
        return index;
    }
    /**
     * Insert an object into an array of objects
     * @param collection - The array of objects into which the object will be inserted
     * @param item - The item to insert into the array
     * @param index - The desired location of the item in the array
     * @returns True if the insert succeeded
     */
    static insert(collection, item, index = 0) {
        collection.splice(index, 0, item);
        return true;
    }
    /**
     * Sort an array of objects by mutliple keys. The method sorts the passed array in-place as opposed to
     * returning the sorted array.
     * @param collection - The array of objects to sort
     * @param sortOptions - The sort options
     */
    static multiKeySort(collection, ...sortOptions) {
        collection.sort((a, b) => {
            for (const sortOption of sortOptions) {
                if (typeof a[sortOption.key] === 'boolean') {
                    if (!a[sortOption.key] && b[sortOption.key]) {
                        return sortOption.order === Sort.Ascending ? -1 : 1;
                    }
                    else if (a[sortOption.key] && !b[sortOption.key]) {
                        return sortOption.order === Sort.Ascending ? 1 : -1;
                    }
                }
                else if (!RegexUtil.isIsoDate(a[sortOption.key]) &&
                    typeof a[sortOption.key] === 'string') {
                    if (a[sortOption.key].toLowerCase() < b[sortOption.key].toLowerCase()) {
                        return sortOption.order === Sort.Ascending ? -1 : 1;
                    }
                    else if (a[sortOption.key].toLowerCase() > b[sortOption.key].toLowerCase()) {
                        return sortOption.order === Sort.Ascending ? 1 : -1;
                    }
                }
                else {
                    if (a[sortOption.key] < b[sortOption.key]) {
                        return sortOption.order === Sort.Ascending ? -1 : 1;
                    }
                    else if (a[sortOption.key] > b[sortOption.key]) {
                        return sortOption.order === Sort.Ascending ? 1 : -1;
                    }
                }
            }
            return 0;
        });
    }
    /**
     * Remove an object from an array of objects by matching the object ID
     * @param collection - The array of objects from which to remove an object
     * @param item - The item to remove from the array
     * @returns The array of objects with the item removed
     */
    static remove(collection, item) {
        const updatedCollection = collection.filter(o => o._id !== item._id);
        return updatedCollection;
    }
    /**
     * Remove an object from an array of object by matching the passed object ID
     * @param collection - The array of objects from which to remove an object
     * @param ID - The ID of the item to remove from the array
     * @returns The array of objects with the item removed
     */
    static removeById(collection, id) {
        const updatedCollection = collection.filter(o => o._id !== id);
        return updatedCollection;
    }
    /**
     * Shuffly an array of objects
     * @param collection - The array of objects to shuffly
     * @returns The shuffled array of objects
     */
    static shuffle(collection) {
        let currentIndex = collection.length;
        let temporaryValue;
        let randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // Swap it with the current element.
            temporaryValue = collection[currentIndex];
            collection[currentIndex] = collection[randomIndex];
            collection[randomIndex] = temporaryValue;
        }
        return collection;
    }
    /**
     * Sort an array of objects by a single property. The method sorts the passed array in-place as opposed to
     * returning the sorted array.
     * @param collection - The array of objects to sort
     * @param key - The property to use for sorting
     * @param order - The sort order
     */
    static sort(collection, key, order) {
        collection.sort((a, b) => {
            if (!RegexUtil.isIsoDate(a[key]) && typeof a[key] === 'string') {
                if (a[key].toLowerCase() < b[key].toLowerCase()) {
                    return order === Sort.Ascending ? -1 : 1;
                }
                else if (a[key].toLowerCase() > b[key].toLowerCase()) {
                    return order === Sort.Ascending ? 1 : -1;
                }
                return 0;
            }
            else {
                if (a[key] < b[key]) {
                    return order === Sort.Ascending ? -1 : 1;
                }
                else if (a[key] > b[key]) {
                    return order === Sort.Ascending ? 1 : -1;
                }
                return 0;
            }
        });
    }
    /**
     * Update an object in an array of objects. Use the object's ID to match objects.
     * @param collection - The array of objects that contains the object to update
     * @param item - The item to update
     * @param addIfMissing - Boolean indicating whether to add the item if it is not present in the array
     * @returns The array of objects with the updated item
     */
    static update(collection, item, addIfMissing = false) {
        const index = collection.findIndex(o => o._id === item._id);
        if (index < 0) {
            if (addIfMissing === true) {
                collection.push(item);
                return collection;
            }
            else {
                return collection;
            }
        }
        collection[index] = item;
        return collection;
    }
    // ********************
    // Private Static methods
    // ********************
    /**
     * Create a regular expression object that implements the passed filter options
     * @param filter - The filter text
     * @param filterOptions - The filter options
     * @returns A regular expression object
     */
    static getFilterRegex(filter, filterOptions) {
        filter = this.escapeRegexCharacters(filter);
        let regexString;
        switch (filterOptions.fitlerScope) {
            case FilterScope.StartsWith:
                regexString = '^' + filter;
                break;
            case FilterScope.EndsWith:
                regexString = filter + '$';
                break;
            default:
                regexString = filter;
                break;
        }
        let regExp;
        if (filterOptions.fitlerCase === FilterCase.CaseSensitive) {
            regExp = new RegExp('.*' + regexString + '.*');
        }
        else {
            regExp = new RegExp('.*' + regexString + '.*', 'i');
        }
        return regExp;
    }
    /**
     * Determine whether an object exists in an array of objects by comparing the object properties
     * @param collection - The array of objects to search
     * @param item - The item to search for
     * @returns True if the object is unique
     */
    static isUniqueByObject(collection, item) {
        for (const collectionItem of collection) {
            if (_.isEqual(collectionItem, item)) {
                return false;
            }
        }
        return true;
    }
    /**
     * Determine whether an object exists in an array of objects by comparing the object IDs
     * @param collection - The array of objects to search
     * @param item - The item to search for
     * @returns True if the object is unique
     */
    static isUniqueById(collection, item) {
        const matchingItem = collection.find(o => o._id === item._id);
        if (matchingItem) {
            return false;
        }
        return true;
    }
    /**
     * Escape a regular expression string
     * @param regexString - The regex string to escape
     * @returns The escaped regular expression string
     */
    static escapeRegexCharacters(regexString) {
        const escapedText = regexString.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        return escapedText;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi51dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGVhdGhlcm1hbi1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvdXRpbC9jb2xsZWN0aW9uL2NvbGxlY3Rpb24udXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFNUI7O0dBRUc7QUFDSCxNQUFNLE9BQU8sY0FBYztJQUN6Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUV2Qjs7Ozs7OztPQU9HO0lBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FDbEIsVUFBZSxFQUNmLElBQU8sRUFDUCxTQUFpQixNQUFNLENBQUMsSUFBSSxFQUM1QixhQUF5QixVQUFVLENBQUMsRUFBRTtRQUV0QyxJQUFJLE1BQU0sS0FBSyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQzFCLElBQ0UsVUFBVSxLQUFLLFVBQVUsQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztnQkFDMUIsY0FBYyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUN2RDtnQkFDQSxPQUFPLEtBQUssQ0FBQzthQUNkO2lCQUFNLElBQ0wsVUFBVSxLQUFL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SyxDQUFDO2FBQ2Q7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssTUFBTSxDQUFDLFlBQVksQ0FBSSxVQUFpQixFQUFFLElBQVM7UUFDekQsTUFBTSxZQUFZLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlELElBQUksWUFBWSxFQUFFO1lBQ2hCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssTUFBTSxDQUFDLHFCQUFxQixDQUFDLFdBQW1CO1FBQ3RELE1BQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUUsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU29ydE9wdGlvbiB9IGZyb20gJy4vX21vZGVscy9zb3J0LW9wdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlTW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMvYmFzZS9iYXNlLm1vZGVsJztcbmltcG9ydCB7IEZpbHRlck9wdGlvbnMgfSBmcm9tICcuL19tb2RlbHMvZmlsdGVyLW9wdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgVW5pcXVlTW9kZSB9IGZyb20gJy4vX2VudW1zL3VuaXF1ZS1tb2RlLmVudW0nO1xuaW1wb3J0IHsgVW5pcXVlIH0gZnJvbSAnLi9fZW51bXMvdW5pcXVlLmVudW0nO1xuaW1wb3J0IHsgU29ydCB9IGZyb20gJy4vX2VudW1zL3NvcnQuZW51bSc7XG5pbXBvcnQgeyBGaWx0ZXJTY29wZSB9IGZyb20gJy4vX2VudW1zL2ZpbHRlci1zY29wZS5lbnVtJztcbmltcG9ydCB7IEZpbHRlckNhc2UgfSBmcm9tICcuL19lbnVtcy9maWx0ZXItY2FzZS5lbnVtJztcbmltcG9ydCB7IFJlZ2V4VXRpbCB9IGZyb20gJy4uL3JlZ2V4L3JlZ2V4LnV0aWwnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG4vKipcbiAqIEEgdXRpbGl0eSBmb3Igc29ydGluZyBhbmQgZmlsdGVyaW5nIGFycmF5c1xuICovXG5leHBvcnQgY2xhc3MgQ29sbGVjdGlvblV0aWwge1xuICAvLyAqKioqKioqKioqKioqKioqKioqKlxuICAvLyBQdWJsaWMgU3RhdGljIG1ldGhvZHNcbiAgLy8gKioqKioqKioqKioqKioqKioqKipcblxuICAvKipcbiAgICogQXBwZW5kIGFuIGl0ZW0gdG8gYW4gYXJyYXlcbiAgICogQHBhcmFtIGNvbGxlY3Rpb24gLSBUaGUgYXJyYXkgb2YgaXRlbXNcbiAgICogQHBhcmFtIGl0ZW0gLSBUaGUgaXRlbSB0byBhcHBlbmQgdG8gdGhlIGFycmF5XG4gICAqIEBwYXJhbSB1bmlxdWUgLSBFbnVtIGluZGljYXRpbmcgd2hldGhlciB1bmlxdWVuZXNzIGlzIGVuZm9yY2VkXG4gICAqIEBwYXJhbSB1bmlxdWVNb2RlIC0gRW51bSBpbmRpY2F0aW5nIGhvdyB1bmlxdWVuZXNzIHdpbGwgYmUgZGV0ZXJtaW5lZFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBpdGVtIHdhcyBzdWNjZXNzZnVsbHkgYXBwZW5kZWRcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXBwZW5kPFQ+KFxuICAgIGNvbGxlY3Rpb246IFRbXSxcbiAgICBpdGVtOiBULFxuICAgIHVuaXF1ZTogVW5pcXVlID0gVW5pcXVlLlRydWUsXG4gICAgdW5pcXVlTW9kZTogVW5pcXVlTW9kZSA9IFVuaXF1ZU1vZGUuSWRcbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKHVuaXF1ZSA9PT0gVW5pcXVlLlRydWUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdW5pcXVlTW9kZSA9PT0gVW5pcXVlTW9kZS5JZCAmJlxuICAgICAgICBpdGVtLmhhc093blByb3BlcnR5KCdfaWQnKSAmJlxuICAgICAgICBDb2xsZWN0aW9uVXRpbC5pc1VuaXF1ZUJ5SWQoY29sbGVjdGlvbiwgaXRlbSkgPT09IGZhbHNlXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgdW5pcXVlTW9kZSA9PT0gVW5pcXVlTW9kZS5PYmplY3QgJiZcbiAgICAgICAgQ29sbGVjdGlvblV0aWwuaXNVbmlxdWVCeU9iamVjdChjb2xsZWN0aW9uLCBpdGVtKSA9PT0gZmFsc2VcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbGxlY3Rpb24ucHVzaChpdGVtKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXRsZXIgYW4gYXJyYXkgb2Ygb2JqZWN0c1xuICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIFRoZSBhcnJheSBvZiBvYmplY3RzIHRvIGZpbHRlclxuICAgKiBAcGFyYW0gZmlsdGVyIC0gVGhlIGZpbHRlciBzdHJpbmdcbiAgICogQHBhcmFtIGZpbHRlckNvbHVtbnMgLSBUaGUgb2JqZWN0IHByb3BlcnRpZXMgdG8gdXNlIHdoZW4gZmlsdGVyaW5nXG4gICAqIEBwYXJhbSBmaWx0ZXJPcHRpb25zIC0gVGhlIGZpbHRlciBvcHRpb25zXG4gICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIGZpbHRlcmVkIG9iamVjdHNcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZmlsdGVyPFQ+KFxuICAgIGNvbGxlY3Rpb246IFRbXSxcbiAgICBmaWx0ZXI6IHN0cmluZyxcbiAgICBmaWx0ZXJDb2x1bW5zOiBzdHJpbmdbXSxcbiAgICBmaWx0ZXJPcHRpb25zPzogRmlsdGVyT3B0aW9uc1xuICApOiBUW10ge1xuICAgIC8vIElmIHRoZSBmaWx0ZXIgc3RyaW5nIG9yIGNvbGxlY3Rpb24gYXJlIG5vdCB2YWxpZCB0aGVuIGp1c3QgcmV0dXJuIHRoZSBjb2xsZWN0aW9uIHVuY2hhbmdlZFxuICAgIGlmICghZmlsdGVyIHx8ICFjb2xsZWN0aW9uKSB7XG4gICAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgICB9XG4gICAgaWYgKCFmaWx0ZXJPcHRpb25zKSB7XG4gICAgICBmaWx0ZXJPcHRpb25zID0gbmV3IEZpbHRlck9wdGlvbnMoKTtcbiAgICB9XG4gICAgLy8gRmlsdGVyIHRoZSBjb2xsZWN0aW9uIHVzaW5nIGEgbGFtYmRhIGV4cHJlc3Npb25cbiAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBjb2xsZWN0aW9uLmZpbHRlcihvID0+IHtcbiAgICAgIC8vIEZvciBlYWNoIG9mIHRoZSBmaWx0ZXIgY29sdW1uc1xuICAgICAgZm9yIChjb25zdCBmaWx0ZXJDb2x1bW4gb2YgZmlsdGVyQ29sdW1ucykge1xuICAgICAgICAvLyBHZXQgdGhlIHRleHQgb2YgdGhlIGN1cnJlbnQgY29sdW1uXG4gICAgICAgIGNvbnN0IHRleHQ6IHN0cmluZyA9IG9bZmlsdGVyQ29sdW1uXTtcbiAgICAgICAgLy8gQ3JlYXRlIGEgcmVndWxhciBleHByZXNzaW9uIGZvciB0aGUgcGFzc2VkIGZpbHRlciBzdHJpbmcgYW5kIGZpbHRlciBvcHRpb25zXG4gICAgICAgIGNvbnN0IHJlZ0V4cCA9IHRoaXMuZ2V0RmlsdGVyUmVnZXgoZmlsdGVyLCBmaWx0ZXJPcHRpb25zKTtcbiAgICAgICAgLy8gSWYgdGhlIGNvbnRlbnRzIG9mIHRoZSBjdXJyZW50IGNvbHVtbiBtYXRjaGVzIHRoZSBmaWx0ZXIgc3RyaW5nIHRoZW5cbiAgICAgICAgaWYgKHRleHQuc2VhcmNoKHJlZ0V4cCkgPj0gMCkge1xuICAgICAgICAgIC8vIFJldHVybiB0cnVlIChjb2xsZWN0aW9uIHJvdyBpcyBpbmNsdWRlZCBpbiB0aGUgZmlsdGVyZWQgZGF0YSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gUmV0dXJuIGZhbHNlIChjb2xsZWN0aW9uIHJvdyBpcyBub3QgaW5jbHVkZWQgaW4gdGhlIGZpbHRlcmVkIGRhdGEpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgLy8gUmV0dXJuIHRoZSBmaWx0ZXJlZCBkYXRhXG4gICAgcmV0dXJuIGZpbHRlcmVkRGF0YTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGFuIG9iamVjdCBpbiBhbiBhcnJheSBvZiBvYmplY3RzIGJ5IG1hdGNoaW5nIGFuIG9iamVjdCBwcm9wZXJ0eVxuICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIFRoZSBhcnJheSBvZiBvYmplY3RzIHRvIHNlYXJjaFxuICAgKiBAcGFyYW0gcHJvcGVydHkgLSBUaGUgb2JqZWN0IHByb3BlcnR5IHRvIHNlYXJjaFxuICAgKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gbWF0Y2hcbiAgICogQHJldHVybnMgVGhlIG1hdGNoaW5nIG9iamVjdFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmaW5kPFQ+KGNvbGxlY3Rpb246IFRbXSwgcHJvcGVydHk6IHN0cmluZywgdmFsdWU6IGFueSk6IFQge1xuICAgIGNvbnN0IG9iamVjdCA9IGNvbGxlY3Rpb24uZmluZChvID0+IG9bcHJvcGVydHldID09PSB2YWx1ZSk7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGFuIG9iamVjdCBpbiBhbiBhcnJheSBvZiBvYmplY3RzIGJ5IG1hdGNoaW5nIHRoZSBvYmplY3QncyBJRFxuICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIFRoZSBhcnJheSBvZiBvYmplY3RzIHRvIHNlYXJjaFxuICAgKiBAcGFyYW0gaWQgLSBUaGUgb2JqZWN0IElEIHRvIHNlYXJjaCBmb3JcbiAgICogQHJldHVybnMgVGhlIG1hdGNoaW5nIG9iamVjdFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmaW5kQnlJZDxUIGV4dGVuZHMgQmFzZU1vZGVsPihjb2xsZWN0aW9uOiBUW10sIGlkOiBzdHJpbmcpOiBUIHtcbiAgICBjb25zdCBvYmplY3QgPSBjb2xsZWN0aW9uLmZpbmQobyA9PiBvLl9pZCA9PT0gaWQpO1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBpbmRleCBvZiBhbiBvYmplY3QgaW4gYW4gYXJyYXkgb2Ygb2JqZWN0c1xuICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIFRoZSBhcnJheSBvZiBvYmplY3RzIHRvIHNlYXJjaFxuICAgKiBAcGFyYW0gaXRlbSAtIFRoZSBpdGVtIHRvIHNlYXJjaCBmb3JcbiAgICogQHJldHVybnMgVGhlIGluZGV4IG9mIHRoZSBpdGVtIGluIHRoZSBhcnJheSAoemVyby1iYXNlZClcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgZmluZEluZGV4PFQ+KGNvbGxlY3Rpb246IFRbXSwgaXRlbTogVCk6IG51bWJlciB7XG4gICAgY29uc3QgaW5kZXggPSBjb2xsZWN0aW9uLmZpbmRJbmRleChvID0+IG8gPT09IGl0ZW0pO1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnQgYW4gb2JqZWN0IGludG8gYW4gYXJyYXkgb2Ygb2JqZWN0c1xuICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIFRoZSBhcnJheSBvZiBvYmplY3RzIGludG8gd2hpY2ggdGhlIG9iamVjdCB3aWxsIGJlIGluc2VydGVkXG4gICAqIEBwYXJhbSBpdGVtIC0gVGhlIGl0ZW0gdG8gaW5zZXJ0IGludG8gdGhlIGFycmF5XG4gICAqIEBwYXJhbSBpbmRleCAtIFRoZSBkZXNpcmVkIGxvY2F0aW9uIG9mIHRoZSBpdGVtIGluIHRoZSBhcnJheVxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBpbnNlcnQgc3VjY2VlZGVkXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGluc2VydDxUPihcbiAgICBjb2xsZWN0aW9uOiBUW10sXG4gICAgaXRlbTogVCxcbiAgICBpbmRleDogbnVtYmVyID0gMFxuICApOiBib29sZWFuIHtcbiAgICBjb2xsZWN0aW9uLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogU29ydCBhbiBhcnJheSBvZiBvYmplY3RzIGJ5IG11dGxpcGxlIGtleXMuIFRoZSBtZXRob2Qgc29ydHMgdGhlIHBhc3NlZCBhcnJheSBpbi1wbGFjZSBhcyBvcHBvc2VkIHRvXG4gICAqIHJldHVybmluZyB0aGUgc29ydGVkIGFycmF5LlxuICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIFRoZSBhcnJheSBvZiBvYmplY3RzIHRvIHNvcnRcbiAgICogQHBhcmFtIHNvcnRPcHRpb25zIC0gVGhlIHNvcnQgb3B0aW9uc1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBtdWx0aUtleVNvcnQ8VD4oXG4gICAgY29sbGVjdGlvbjogVFtdLFxuICAgIC4uLnNvcnRPcHRpb25zOiBTb3J0T3B0aW9uW11cbiAgKTogdm9pZCB7XG4gICAgY29sbGVjdGlvbi5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgZm9yIChjb25zdCBzb3J0T3B0aW9uIG9mIHNvcnRPcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYVtzb3J0T3B0aW9uLmtleV0gPT09ICdib29sZWFuJykge1xuICAgICAgICAgIGlmICghYVtzb3J0T3B0aW9uLmtleV0gJiYgYltzb3J0T3B0aW9uLmtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBzb3J0T3B0aW9uLm9yZGVyID09PSBTb3J0LkFzY2VuZGluZyA/IC0xIDogMTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGFbc29ydE9wdGlvbi5rZXldICYmICFiW3NvcnRPcHRpb24ua2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHNvcnRPcHRpb24ub3JkZXIgPT09IFNvcnQuQXNjZW5kaW5nID8gMSA6IC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAhUmVnZXhVdGlsLmlzSXNvRGF0ZShhW3NvcnRPcHRpb24ua2V5XSkgJiZcbiAgICAgICAgICB0eXBlb2YgYVtzb3J0T3B0aW9uLmtleV0gPT09ICdzdHJpbmcnXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGFbc29ydE9wdGlvbi5rZXldLnRvTG93ZXJDYXNlKCkgPCBiW3NvcnRPcHRpb24ua2V5XS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gc29ydE9wdGlvbi5vcmRlciA9PT0gU29ydC5Bc2NlbmRpbmcgPyAtMSA6IDE7XG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIGFbc29ydE9wdGlvbi5rZXldLnRvTG93ZXJDYXNlKCkgPiBiW3NvcnRPcHRpb24ua2V5XS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gc29ydE9wdGlvbi5vcmRlciA9PT0gU29ydC5Bc2NlbmRpbmcgPyAxIDogLTE7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChhW3NvcnRPcHRpb24ua2V5XSA8IGJbc29ydE9wdGlvbi5rZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gc29ydE9wdGlvbi5vcmRlciA9PT0gU29ydC5Bc2NlbmRpbmcgPyAtMSA6IDE7XG4gICAgICAgICAgfSBlbHNlIGlmIChhW3NvcnRPcHRpb24ua2V5XSA+IGJbc29ydE9wdGlvbi5rZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gc29ydE9wdGlvbi5vcmRlciA9PT0gU29ydC5Bc2NlbmRpbmcgPyAxIDogLTE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW4gb2JqZWN0IGZyb20gYW4gYXJyYXkgb2Ygb2JqZWN0cyBieSBtYXRjaGluZyB0aGUgb2JqZWN0IElEXG4gICAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gVGhlIGFycmF5IG9mIG9iamVjdHMgZnJvbSB3aGljaCB0byByZW1vdmUgYW4gb2JqZWN0XG4gICAqIEBwYXJhbSBpdGVtIC0gVGhlIGl0ZW0gdG8gcmVtb3ZlIGZyb20gdGhlIGFycmF5XG4gICAqIEByZXR1cm5zIFRoZSBhcnJheSBvZiBvYmplY3RzIHdpdGggdGhlIGl0ZW0gcmVtb3ZlZFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyByZW1vdmU8VCBleHRlbmRzIEJhc2VNb2RlbD4oY29sbGVjdGlvbjogVFtdLCBpdGVtOiBUKTogVFtdIHtcbiAgICBjb25zdCB1cGRhdGVkQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb24uZmlsdGVyKG8gPT4gby5faWQgIT09IGl0ZW0uX2lkKTtcbiAgICByZXR1cm4gdXBkYXRlZENvbGxlY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFuIG9iamVjdCBmcm9tIGFuIGFycmF5IG9mIG9iamVjdCBieSBtYXRjaGluZyB0aGUgcGFzc2VkIG9iamVjdCBJRFxuICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIFRoZSBhcnJheSBvZiBvYmplY3RzIGZyb20gd2hpY2ggdG8gcmVtb3ZlIGFuIG9iamVjdFxuICAgKiBAcGFyYW0gSUQgLSBUaGUgSUQgb2YgdGhlIGl0ZW0gdG8gcmVtb3ZlIGZyb20gdGhlIGFycmF5XG4gICAqIEByZXR1cm5zIFRoZSBhcnJheSBvZiBvYmplY3RzIHdpdGggdGhlIGl0ZW0gcmVtb3ZlZFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyByZW1vdmVCeUlkPFQgZXh0ZW5kcyBCYXNlTW9kZWw+KFxuICAgIGNvbGxlY3Rpb246IFRbXSxcbiAgICBpZDogc3RyaW5nXG4gICk6IFRbXSB7XG4gICAgY29uc3QgdXBkYXRlZENvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLmZpbHRlcihvID0+IG8uX2lkICE9PSBpZCk7XG4gICAgcmV0dXJuIHVwZGF0ZWRDb2xsZWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFNodWZmbHkgYW4gYXJyYXkgb2Ygb2JqZWN0c1xuICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIFRoZSBhcnJheSBvZiBvYmplY3RzIHRvIHNodWZmbHlcbiAgICogQHJldHVybnMgVGhlIHNodWZmbGVkIGFycmF5IG9mIG9iamVjdHNcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc2h1ZmZsZTxUPihjb2xsZWN0aW9uOiBUW10pOiBUW10ge1xuICAgIGxldCBjdXJyZW50SW5kZXggPSBjb2xsZWN0aW9uLmxlbmd0aDtcbiAgICBsZXQgdGVtcG9yYXJ5VmFsdWU6IFQ7XG4gICAgbGV0IHJhbmRvbUluZGV4OiBudW1iZXI7XG5cbiAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxuICAgIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxuICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgY3VycmVudEluZGV4IC09IDE7XG5cbiAgICAgIC8vIFN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAgdGVtcG9yYXJ5VmFsdWUgPSBjb2xsZWN0aW9uW2N1cnJlbnRJbmRleF07XG4gICAgICBjb2xsZWN0aW9uW2N1cnJlbnRJbmRleF0gPSBjb2xsZWN0aW9uW3JhbmRvbUluZGV4XTtcbiAgICAgIGNvbGxlY3Rpb25bcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogU29ydCBhbiBhcnJheSBvZiBvYmplY3RzIGJ5IGEgc2luZ2xlIHByb3BlcnR5LiBUaGUgbWV0aG9kIHNvcnRzIHRoZSBwYXNzZWQgYXJyYXkgaW4tcGxhY2UgYXMgb3Bwb3NlZCB0b1xuICAgKiByZXR1cm5pbmcgdGhlIHNvcnRlZCBhcnJheS5cbiAgICogQHBhcmFtIGNvbGxlY3Rpb24gLSBUaGUgYXJyYXkgb2Ygb2JqZWN0cyB0byBzb3J0XG4gICAqIEBwYXJhbSBrZXkgLSBUaGUgcHJvcGVydHkgdG8gdXNlIGZvciBzb3J0aW5nXG4gICAqIEBwYXJhbSBvcmRlciAtIFRoZSBzb3J0IG9yZGVyXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNvcnQ8VD4oY29sbGVjdGlvbjogVFtdLCBrZXk6IHN0cmluZywgb3JkZXI6IFNvcnQpOiB2b2lkIHtcbiAgICBjb2xsZWN0aW9uLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICBpZiAoIVJlZ2V4VXRpbC5pc0lzb0RhdGUoYVtrZXldKSAmJiB0eXBlb2YgYVtrZXldID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoYVtrZXldLnRvTG93ZXJDYXNlKCkgPCBiW2tleV0udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgIHJldHVybiBvcmRlciA9PT0gU29ydC5Bc2NlbmRpbmcgPyAtMSA6IDE7XG4gICAgICAgIH0gZWxzZSBpZiAoYVtrZXldLnRvTG93ZXJDYXNlKCkgPiBiW2tleV0udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgIHJldHVybiBvcmRlciA9PT0gU29ydC5Bc2NlbmRpbmcgPyAxIDogLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoYVtrZXldIDwgYltrZXldKSB7XG4gICAgICAgICAgcmV0dXJuIG9yZGVyID09PSBTb3J0LkFzY2VuZGluZyA/IC0xIDogMTtcbiAgICAgICAgfSBlbHNlIGlmIChhW2tleV0gPiBiW2tleV0pIHtcbiAgICAgICAgICByZXR1cm4gb3JkZXIgPT09IFNvcnQuQXNjZW5kaW5nID8gMSA6IC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBhbiBvYmplY3QgaW4gYW4gYXJyYXkgb2Ygb2JqZWN0cy4gVXNlIHRoZSBvYmplY3QncyBJRCB0byBtYXRjaCBvYmplY3RzLlxuICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIFRoZSBhcnJheSBvZiBvYmplY3RzIHRoYXQgY29udGFpbnMgdGhlIG9iamVjdCB0byB1cGRhdGVcbiAgICogQHBhcmFtIGl0ZW0gLSBUaGUgaXRlbSB0byB1cGRhdGVcbiAgICogQHBhcmFtIGFkZElmTWlzc2luZyAtIEJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRvIGFkZCB0aGUgaXRlbSBpZiBpdCBpcyBub3QgcHJlc2VudCBpbiB0aGUgYXJyYXlcbiAgICogQHJldHVybnMgVGhlIGFycmF5IG9mIG9iamVjdHMgd2l0aCB0aGUgdXBkYXRlZCBpdGVtXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHVwZGF0ZTxUIGV4dGVuZHMgQmFzZU1vZGVsPihcbiAgICBjb2xsZWN0aW9uOiBUW10sXG4gICAgaXRlbTogVCxcbiAgICBhZGRJZk1pc3Npbmc6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBUW10ge1xuICAgIGNvbnN0IGluZGV4ID0gY29sbGVjdGlvbi5maW5kSW5kZXgobyA9PiBvLl9pZCA9PT0gaXRlbS5faWQpO1xuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIGlmIChhZGRJZk1pc3NpbmcgPT09IHRydWUpIHtcbiAgICAgICAgY29sbGVjdGlvbi5wdXNoKGl0ZW0pO1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgICBjb2xsZWN0aW9uW2luZGV4XSA9IGl0ZW07XG4gICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gIH1cblxuICAvLyAqKioqKioqKioqKioqKioqKioqKlxuICAvLyBQcml2YXRlIFN0YXRpYyBtZXRob2RzXG4gIC8vICoqKioqKioqKioqKioqKioqKioqXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIHRoZSBwYXNzZWQgZmlsdGVyIG9wdGlvbnNcbiAgICogQHBhcmFtIGZpbHRlciAtIFRoZSBmaWx0ZXIgdGV4dFxuICAgKiBAcGFyYW0gZmlsdGVyT3B0aW9ucyAtIFRoZSBmaWx0ZXIgb3B0aW9uc1xuICAgKiBAcmV0dXJucyBBIHJlZ3VsYXIgZXhwcmVzc2lvbiBvYmplY3RcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIGdldEZpbHRlclJlZ2V4KFxuICAgIGZpbHRlcjogc3RyaW5nLFxuICAgIGZpbHRlck9wdGlvbnM6IEZpbHRlck9wdGlvbnNcbiAgKTogUmVnRXhwIHtcbiAgICBmaWx0ZXIgPSB0aGlzLmVzY2FwZVJlZ2V4Q2hhcmFjdGVycyhmaWx0ZXIpO1xuICAgIGxldCByZWdleFN0cmluZzogc3RyaW5nO1xuICAgIHN3aXRjaCAoZmlsdGVyT3B0aW9ucy5maXRsZXJTY29wZSkge1xuICAgICAgY2FzZSBGaWx0ZXJTY29wZS5TdGFydHNXaXRoOlxuICAgICAgICByZWdleFN0cmluZyA9ICdeJyArIGZpbHRlcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEZpbHRlclNjb3BlLkVuZHNXaXRoOlxuICAgICAgICByZWdleFN0cmluZyA9IGZpbHRlciArICckJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZWdleFN0cmluZyA9IGZpbHRlcjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGxldCByZWdFeHA6IFJlZ0V4cDtcbiAgICBpZiAoZmlsdGVyT3B0aW9ucy5maXRsZXJDYXNlID09PSBGaWx0ZXJDYXNlLkNhc2VTZW5zaXRpdmUpIHtcbiAgICAgIHJlZ0V4cCA9IG5ldyBSZWdFeHAoJy4qJyArIHJlZ2V4U3RyaW5nICsgJy4qJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZ0V4cCA9IG5ldyBSZWdFeHAoJy4qJyArIHJlZ2V4U3RyaW5nICsgJy4qJywgJ2knKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlZ0V4cDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgd2hldGhlciBhbiBvYmplY3QgZXhpc3RzIGluIGFuIGFycmF5IG9mIG9iamVjdHMgYnkgY29tcGFyaW5nIHRoZSBvYmplY3QgcHJvcGVydGllc1xuICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIFRoZSBhcnJheSBvZiBvYmplY3RzIHRvIHNlYXJjaFxuICAgKiBAcGFyYW0gaXRlbSAtIFRoZSBpdGVtIHRvIHNlYXJjaCBmb3JcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIHVuaXF1ZVxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgaXNVbmlxdWVCeU9iamVjdDxUPihjb2xsZWN0aW9uOiBUW10sIGl0ZW06IFQpIHtcbiAgICBmb3IgKGNvbnN0IGNvbGxlY3Rpb25JdGVtIG9mIGNvbGxlY3Rpb24pIHtcbiAgICAgIGlmIChfLmlzRXF1YWwoY29sbGVjdGlvbkl0ZW0sIGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgYW4gb2JqZWN0IGV4aXN0cyBpbiBhbiBhcnJheSBvZiBvYmplY3RzIGJ5IGNvbXBhcmluZyB0aGUgb2JqZWN0IElEc1xuICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIFRoZSBhcnJheSBvZiBvYmplY3RzIHRvIHNlYXJjaFxuICAgKiBAcGFyYW0gaXRlbSAtIFRoZSBpdGVtIHRvIHNlYXJjaCBmb3JcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIHVuaXF1ZVxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgaXNVbmlxdWVCeUlkPFQ+KGNvbGxlY3Rpb246IGFueVtdLCBpdGVtOiBhbnkpIHtcbiAgICBjb25zdCBtYXRjaGluZ0l0ZW0gPSBjb2xsZWN0aW9uLmZpbmQobyA9PiBvLl9pZCA9PT0gaXRlbS5faWQpO1xuICAgIGlmIChtYXRjaGluZ0l0ZW0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZ1xuICAgKiBAcGFyYW0gcmVnZXhTdHJpbmcgLSBUaGUgcmVnZXggc3RyaW5nIHRvIGVzY2FwZVxuICAgKiBAcmV0dXJucyBUaGUgZXNjYXBlZCByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBlc2NhcGVSZWdleENoYXJhY3RlcnMocmVnZXhTdHJpbmc6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgZXNjYXBlZFRleHQgPSByZWdleFN0cmluZy5yZXBsYWNlKC9bLVtcXF17fSgpKis/LixcXFxcXiR8I1xcc10vZywgJ1xcXFwkJicpO1xuICAgIHJldHVybiBlc2NhcGVkVGV4dDtcbiAgfVxufVxuIl19
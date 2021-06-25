import { __values } from "tslib";
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
var CollectionUtil = /** @class */ (function () {
    function CollectionUtil() {
    }
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
    CollectionUtil.append = function (collection, item, unique, uniqueMode) {
        if (unique === void 0) { unique = Unique.True; }
        if (uniqueMode === void 0) { uniqueMode = UniqueMode.Id; }
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
    };
    /**
     * Fitler an array of objects
     * @param collection - The array of objects to filter
     * @param filter - The filter string
     * @param filterColumns - The object properties to use when filtering
     * @param filterOptions - The filter options
     * @returns An array of filtered objects
     */
    CollectionUtil.filter = function (collection, filter, filterColumns, filterOptions) {
        var _this = this;
        // If the filter string or collection are not valid then just return the collection unchanged
        if (!filter || !collection) {
            return collection;
        }
        if (!filterOptions) {
            filterOptions = new FilterOptions();
        }
        // Filter the collection using a lambda expression
        var filteredData = collection.filter(function (o) {
            var e_1, _a;
            try {
                // For each of the filter columns
                for (var filterColumns_1 = __values(filterColumns), filterColumns_1_1 = filterColumns_1.next(); !filterColumns_1_1.done; filterColumns_1_1 = filterColumns_1.next()) {
                    var filterColumn = filterColumns_1_1.value;
                    // Get the text of the current column
                    var text = o[filterColumn];
                    // Create a regular expression for the passed filter string and filter options
                    var regExp = _this.getFilterRegex(filter, filterOptions);
                    // If the contents of the current column matches the filter string then
                    if (text.search(regExp) >= 0) {
                        // Return true (collection row is included in the filtered data)
                        return true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (filterColumns_1_1 && !filterColumns_1_1.done && (_a = filterColumns_1.return)) _a.call(filterColumns_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            // Return false (collection row is not included in the filtered data)
            return false;
        });
        // Return the filtered data
        return filteredData;
    };
    /**
     * Find an object in an array of objects by matching an object property
     * @param collection - The array of objects to search
     * @param property - The object property to search
     * @param value - The value to match
     * @returns The matching object
     */
    CollectionUtil.find = function (collection, property, value) {
        var object = collection.find(function (o) { return o[property] === value; });
        return object;
    };
    /**
     * Find an object in an array of objects by matching the object's ID
     * @param collection - The array of objects to search
     * @param id - The object ID to search for
     * @returns The matching object
     */
    CollectionUtil.findById = function (collection, id) {
        var object = collection.find(function (o) { return o._id === id; });
        return object;
    };
    /**
     * Get the index of an object in an array of objects
     * @param collection - The array of objects to search
     * @param item - The item to search for
     * @returns The index of the item in the array (zero-based)
     */
    CollectionUtil.findIndex = function (collection, item) {
        var index = collection.findIndex(function (o) { return o === item; });
        return index;
    };
    /**
     * Insert an object into an array of objects
     * @param collection - The array of objects into which the object will be inserted
     * @param item - The item to insert into the array
     * @param index - The desired location of the item in the array
     * @returns True if the insert succeeded
     */
    CollectionUtil.insert = function (collection, item, index) {
        if (index === void 0) { index = 0; }
        collection.splice(index, 0, item);
        return true;
    };
    /**
     * Sort an array of objects by mutliple keys. The method sorts the passed array in-place as opposed to
     * returning the sorted array.
     * @param collection - The array of objects to sort
     * @param sortOptions - The sort options
     */
    CollectionUtil.multiKeySort = function (collection) {
        var sortOptions = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sortOptions[_i - 1] = arguments[_i];
        }
        collection.sort(function (a, b) {
            var e_2, _a;
            try {
                for (var sortOptions_1 = __values(sortOptions), sortOptions_1_1 = sortOptions_1.next(); !sortOptions_1_1.done; sortOptions_1_1 = sortOptions_1.next()) {
                    var sortOption = sortOptions_1_1.value;
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
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (sortOptions_1_1 && !sortOptions_1_1.done && (_a = sortOptions_1.return)) _a.call(sortOptions_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return 0;
        });
    };
    /**
     * Remove an object from an array of objects by matching the object ID
     * @param collection - The array of objects from which to remove an object
     * @param item - The item to remove from the array
     * @returns The array of objects with the item removed
     */
    CollectionUtil.remove = function (collection, item) {
        var updatedCollection = collection.filter(function (o) { return o._id !== item._id; });
        return updatedCollection;
    };
    /**
     * Remove an object from an array of object by matching the passed object ID
     * @param collection - The array of objects from which to remove an object
     * @param ID - The ID of the item to remove from the array
     * @returns The array of objects with the item removed
     */
    CollectionUtil.removeById = function (collection, id) {
        var updatedCollection = collection.filter(function (o) { return o._id !== id; });
        return updatedCollection;
    };
    /**
     * Shuffly an array of objects
     * @param collection - The array of objects to shuffly
     * @returns The shuffled array of objects
     */
    CollectionUtil.shuffle = function (collection) {
        var currentIndex = collection.length;
        var temporaryValue;
        var randomIndex;
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
    };
    /**
     * Sort an array of objects by a single property. The method sorts the passed array in-place as opposed to
     * returning the sorted array.
     * @param collection - The array of objects to sort
     * @param key - The property to use for sorting
     * @param order - The sort order
     */
    CollectionUtil.sort = function (collection, key, order) {
        collection.sort(function (a, b) {
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
    };
    /**
     * Update an object in an array of objects. Use the object's ID to match objects.
     * @param collection - The array of objects that contains the object to update
     * @param item - The item to update
     * @param addIfMissing - Boolean indicating whether to add the item if it is not present in the array
     * @returns The array of objects with the updated item
     */
    CollectionUtil.update = function (collection, item, addIfMissing) {
        if (addIfMissing === void 0) { addIfMissing = false; }
        var index = collection.findIndex(function (o) { return o._id === item._id; });
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
    };
    // ********************
    // Private Static methods
    // ********************
    /**
     * Create a regular expression object that implements the passed filter options
     * @param filter - The filter text
     * @param filterOptions - The filter options
     * @returns A regular expression object
     */
    CollectionUtil.getFilterRegex = function (filter, filterOptions) {
        filter = this.escapeRegexCharacters(filter);
        var regexString;
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
        var regExp;
        if (filterOptions.fitlerCase === FilterCase.CaseSensitive) {
            regExp = new RegExp('.*' + regexString + '.*');
        }
        else {
            regExp = new RegExp('.*' + regexString + '.*', 'i');
        }
        return regExp;
    };
    /**
     * Determine whether an object exists in an array of objects by comparing the object properties
     * @param collection - The array of objects to search
     * @param item - The item to search for
     * @returns True if the object is unique
     */
    CollectionUtil.isUniqueByObject = function (collection, item) {
        var e_3, _a;
        try {
            for (var collection_1 = __values(collection), collection_1_1 = collection_1.next(); !collection_1_1.done; collection_1_1 = collection_1.next()) {
                var collectionItem = collection_1_1.value;
                if (_.isEqual(collectionItem, item)) {
                    return false;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (collection_1_1 && !collection_1_1.done && (_a = collection_1.return)) _a.call(collection_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return true;
    };
    /**
     * Determine whether an object exists in an array of objects by comparing the object IDs
     * @param collection - The array of objects to search
     * @param item - The item to search for
     * @returns True if the object is unique
     */
    CollectionUtil.isUniqueById = function (collection, item) {
        var matchingItem = collection.find(function (o) { return o._id === item._id; });
        if (matchingItem) {
            return false;
        }
        return true;
    };
    /**
     * Escape a regular expression string
     * @param regexString - The regex string to escape
     * @returns The escaped regular expression string
     */
    CollectionUtil.escapeRegexCharacters = function (regexString) {
        var escapedText = regexString.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        return escapedText;
    };
    return CollectionUtil;
}());
export { CollectionUtil };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbi51dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGVhdGhlcm1hbi1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvdXRpbC9jb2xsZWN0aW9uL2NvbGxlY3Rpb24udXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRTVCOztHQUVHO0FBQ0g7SUFBQTtJQTRWQSxDQUFDO0lBM1ZDLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBRXZCOzs7Ozs7O09BT0c7SUFDVyxxQkFBTSxHQUFwQixVQUNFLFVBQWUsRUFDZixJQUFPLEVBQ1AsTUFBNEIsRUFDNUIsVUFBc0M7UUFEdEMsdUJBQUEsRUFBQSxTQUFpQixNQUFNLENBQUMsSUFBSTtRQUM1QiwyQkFBQSxFQUFBLGFBQXlCLFVBQVUsQ0FBQyxFQUFFO1FBRXRDLElBQUksTUFBTSxLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDMUIsSUFDRSxVQUFVLEtBQUssVUFBVSxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO2dCQUMxQixjQUFjLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQ3ZEO2dCQUNBLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7aUJBQU0sSUFDTCxVQUFVLEtBQUssVUFBVSxDQUFDLE1BQU07Z0JBQ2hDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUMzRDtnQkFDQSxPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDVyxxQkFBTSxHQUFwQixVQUNFLFVBQWUsRUFDZixNQUFjLEVBQ2QsYUFBdUIsRUFDdkIsYUFBNkI7UUFKL0IsaUJBZ0NDO1FBMUJDLDZGQUE2RjtRQUM3RixJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzFCLE9BQU8sVUFBVSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQixhQUFhLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztTQUNyQztRQUNELGtEQUFrRDtRQUNsRCxJQUFNLFlBQVksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQzs7O2dCQUN0QyxpQ0FBaUM7Z0JBQ2pDLEtBQTJCLElBQUEsa0JBQUEsU0FBQSxhQUFhLENBQUEsNENBQUEsdUVBQUU7b0JBQXJDLElBQU0sWUFBWSwwQkFBQTtvQkFDckIscUNBQXFDO29CQUNyQyxJQUFNLElBQUksR0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3JDLDhFQUE4RTtvQkFDOUUsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7b0JBQzFELHVFQUF1RTtvQkFDdkUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDNUIsZ0VBQWdFO3dCQUNoRSxPQUFPLElBQUksQ0FBQztxQkFDYjtpQkFDRjs7Ozs7Ozs7O1lBQ0QscUVBQXFFO1lBQ3JFLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7UUFDSCwyQkFBMkI7UUFDM0IsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNXLG1CQUFJLEdBQWxCLFVBQXNCLFVBQWUsRUFBRSxRQUFnQixFQUFFLEtBQVU7UUFDakUsSUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLEVBQXJCLENBQXFCLENBQUMsQ0FBQztRQUMzRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDVyx1QkFBUSxHQUF0QixVQUE0QyxVQUFlLEVBQUUsRUFBVTtRQUNyRSxJQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQVosQ0FBWSxDQUFDLENBQUM7UUFDbEQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ1csd0JBQVMsR0FBdkIsVUFBMkIsVUFBZSxFQUFFLElBQU87UUFDakQsSUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsS0FBSyxJQUFJLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDcEQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ1cscUJBQU0sR0FBcEIsVUFDRSxVQUFlLEVBQ2YsSUFBTyxFQUNQLEtBQWlCO1FBQWpCLHNCQUFBLEVBQUEsU0FBaUI7UUFFakIsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ1csMkJBQVksR0FBMUIsVUFDRSxVQUFlO1FBQ2YscUJBQTRCO2FBQTVCLFVBQTRCLEVBQTVCLHFCQUE0QixFQUE1QixJQUE0QjtZQUE1QixvQ0FBNEI7O1FBRTVCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFNLEVBQUUsQ0FBTTs7O2dCQUM3QixLQUF5QixJQUFBLGdCQUFBLFNBQUEsV0FBVyxDQUFBLHdDQUFBLGlFQUFFO29CQUFqQyxJQUFNLFVBQVUsd0JBQUE7b0JBQ25CLElBQUksT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBRTt3QkFDMUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTs0QkFDM0MsT0FBTyxVQUFVLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ3JEOzZCQUFNLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7NEJBQ2xELE9BQU8sVUFBVSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUNyRDtxQkFDRjt5QkFBTSxJQUNMLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN2QyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxFQUNyQzt3QkFDQSxJQUNFLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFDakU7NEJBQ0EsT0FBTyxVQUFVLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ3JEOzZCQUFNLElBQ0wsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUNqRTs0QkFDQSxPQUFPLFVBQVUsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDckQ7cUJBQ0Y7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7NEJBQ3pDLE9BQU8sVUFBVSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUNyRDs2QkFBTSxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTs0QkFDaEQsT0FBTyxVQUFVLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ3JEO3FCQUNGO2lCQUNGOzs7Ozs7Ozs7WUFDRCxPQUFPLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ1cscUJBQU0sR0FBcEIsVUFBMEMsVUFBZSxFQUFFLElBQU87UUFDaEUsSUFBTSxpQkFBaUIsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFsQixDQUFrQixDQUFDLENBQUM7UUFDckUsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDVyx5QkFBVSxHQUF4QixVQUNFLFVBQWUsRUFDZixFQUFVO1FBRVYsSUFBTSxpQkFBaUIsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQVosQ0FBWSxDQUFDLENBQUM7UUFDL0QsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNXLHNCQUFPLEdBQXJCLFVBQXlCLFVBQWU7UUFDdEMsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLGNBQWlCLENBQUM7UUFDdEIsSUFBSSxXQUFtQixDQUFDO1FBRXhCLDRDQUE0QztRQUM1QyxPQUFPLENBQUMsS0FBSyxZQUFZLEVBQUU7WUFDekIsOEJBQThCO1lBQzlCLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxZQUFZLENBQUMsQ0FBQztZQUN2RCxZQUFZLElBQUksQ0FBQyxDQUFDO1lBRWxCLG9DQUFvQztZQUNwQyxjQUFjLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbkQsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLGNBQWMsQ0FBQztTQUMxQztRQUVELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDVyxtQkFBSSxHQUFsQixVQUFzQixVQUFlLEVBQUUsR0FBVyxFQUFFLEtBQVc7UUFDN0QsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQU0sRUFBRSxDQUFNO1lBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsRUFBRTtnQkFDOUQsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFO29CQUMvQyxPQUFPLEtBQUssS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMxQztxQkFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7b0JBQ3RELE9BQU8sS0FBSyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzFDO2dCQUNELE9BQU8sQ0FBQyxDQUFDO2FBQ1Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNuQixPQUFPLEtBQUssS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMxQztxQkFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzFCLE9BQU8sS0FBSyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzFDO2dCQUNELE9BQU8sQ0FBQyxDQUFDO2FBQ1Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDVyxxQkFBTSxHQUFwQixVQUNFLFVBQWUsRUFDZixJQUFPLEVBQ1AsWUFBNkI7UUFBN0IsNkJBQUEsRUFBQSxvQkFBNkI7UUFFN0IsSUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQzVELElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNiLElBQUksWUFBWSxLQUFLLElBQUksRUFBRTtnQkFDekIsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEIsT0FBTyxVQUFVLENBQUM7YUFDbkI7aUJBQU07Z0JBQ0wsT0FBTyxVQUFVLENBQUM7YUFDbkI7U0FDRjtRQUNELFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDekIsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVELHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsdUJBQXVCO0lBRXZCOzs7OztPQUtHO0lBQ1ksNkJBQWMsR0FBN0IsVUFDRSxNQUFjLEVBQ2QsYUFBNEI7UUFFNUIsTUFBTSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLFdBQW1CLENBQUM7UUFDeEIsUUFBUSxhQUFhLENBQUMsV0FBVyxFQUFFO1lBQ2pDLEtBQUssV0FBVyxDQUFDLFVBQVU7Z0JBQ3pCLFdBQVcsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO2dCQUMzQixNQUFNO1lBQ1IsS0FBSyxXQUFXLENBQUMsUUFBUTtnQkFDdkIsV0FBVyxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQzNCLE1BQU07WUFDUjtnQkFDRSxXQUFXLEdBQUcsTUFBTSxDQUFDO2dCQUNyQixNQUFNO1NBQ1Q7UUFDRCxJQUFJLE1BQWMsQ0FBQztRQUNuQixJQUFJLGFBQWEsQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUN6RCxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUNoRDthQUFNO1lBQ0wsTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksR0FBRyxXQUFXLEdBQUcsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ1ksK0JBQWdCLEdBQS9CLFVBQW1DLFVBQWUsRUFBRSxJQUFPOzs7WUFDekQsS0FBNkIsSUFBQSxlQUFBLFNBQUEsVUFBVSxDQUFBLHNDQUFBLDhEQUFFO2dCQUFwQyxJQUFNLGNBQWMsdUJBQUE7Z0JBQ3ZCLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLEVBQUU7b0JBQ25DLE9BQU8sS0FBSyxDQUFDO2lCQUNkO2FBQ0Y7Ozs7Ozs7OztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ1ksMkJBQVksR0FBM0IsVUFBK0IsVUFBaUIsRUFBRSxJQUFTO1FBQ3pELElBQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxHQUFHLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUM5RCxJQUFJLFlBQVksRUFBRTtZQUNoQixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNZLG9DQUFxQixHQUFwQyxVQUFxQyxXQUFtQjtRQUN0RCxJQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLDBCQUEwQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVFLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUE1VkQsSUE0VkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb3J0T3B0aW9uIH0gZnJvbSAnLi9fbW9kZWxzL3NvcnQtb3B0aW9uLm1vZGVsJztcbmltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlL2Jhc2UubW9kZWwnO1xuaW1wb3J0IHsgRmlsdGVyT3B0aW9ucyB9IGZyb20gJy4vX21vZGVscy9maWx0ZXItb3B0aW9ucy5tb2RlbCc7XG5pbXBvcnQgeyBVbmlxdWVNb2RlIH0gZnJvbSAnLi9fZW51bXMvdW5pcXVlLW1vZGUuZW51bSc7XG5pbXBvcnQgeyBVbmlxdWUgfSBmcm9tICcuL19lbnVtcy91bmlxdWUuZW51bSc7XG5pbXBvcnQgeyBTb3J0IH0gZnJvbSAnLi9fZW51bXMvc29ydC5lbnVtJztcbmltcG9ydCB7IEZpbHRlclNjb3BlIH0gZnJvbSAnLi9fZW51bXMvZmlsdGVyLXNjb3BlLmVudW0nO1xuaW1wb3J0IHsgRmlsdGVyQ2FzZSB9IGZyb20gJy4vX2VudW1zL2ZpbHRlci1jYXNlLmVudW0nO1xuaW1wb3J0IHsgUmVnZXhVdGlsIH0gZnJvbSAnLi4vcmVnZXgvcmVnZXgudXRpbCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbi8qKlxuICogQSB1dGlsaXR5IGZvciBzb3J0aW5nIGFuZCBmaWx0ZXJpbmcgYXJyYXlzXG4gKi9cbmV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uVXRpbCB7XG4gIC8vICoqKioqKioqKioqKioqKioqKioqXG4gIC8vIFB1YmxpYyBTdGF0aWMgbWV0aG9kc1xuICAvLyAqKioqKioqKioqKioqKioqKioqKlxuXG4gIC8qKlxuICAgKiBBcHBlbmQgYW4gaXRlbSB0byBhbiBhcnJheVxuICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIFRoZSBhcnJheSBvZiBpdGVtc1xuICAgKiBAcGFyYW0gaXRlbSAtIFRoZSBpdGVtIHRvIGFwcGVuZCB0byB0aGUgYXJyYXlcbiAgICogQHBhcmFtIHVuaXF1ZSAtIEVudW0gaW5kaWNhdGluZyB3aGV0aGVyIHVuaXF1ZW5lc3MgaXMgZW5mb3JjZWRcbiAgICogQHBhcmFtIHVuaXF1ZU1vZGUgLSBFbnVtIGluZGljYXRpbmcgaG93IHVuaXF1ZW5lc3Mgd2lsbCBiZSBkZXRlcm1pbmVkXG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGl0ZW0gd2FzIHN1Y2Nlc3NmdWxseSBhcHBlbmRlZFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhcHBlbmQ8VD4oXG4gICAgY29sbGVjdGlvbjogVFtdLFxuICAgIGl0ZW06IFQsXG4gICAgdW5pcXVlOiBVbmlxdWUgPSBVbmlxdWUuVHJ1ZSxcbiAgICB1bmlxdWVNb2RlOiBVbmlxdWVNb2RlID0gVW5pcXVlTW9kZS5JZFxuICApOiBib29sZWFuIHtcbiAgICBpZiAodW5pcXVlID09PSBVbmlxdWUuVHJ1ZSkge1xuICAgICAgaWYgKFxuICAgICAgICB1bmlxdWVNb2RlID09PSBVbmlxdWVNb2RlLklkICYmXG4gICAgICAgIGl0ZW0uaGFzT3duUHJvcGVydHkoJ19pZCcpICYmXG4gICAgICAgIENvbGxlY3Rpb25VdGlsLmlzVW5pcXVlQnlJZChjb2xsZWN0aW9uLCBpdGVtKSA9PT0gZmFsc2VcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICB1bmlxdWVNb2RlID09PSBVbmlxdWVNb2RlLk9iamVjdCAmJlxuICAgICAgICBDb2xsZWN0aW9uVXRpbC5pc1VuaXF1ZUJ5T2JqZWN0KGNvbGxlY3Rpb24sIGl0ZW0pID09PSBmYWxzZVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29sbGVjdGlvbi5wdXNoKGl0ZW0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpdGxlciBhbiBhcnJheSBvZiBvYmplY3RzXG4gICAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gVGhlIGFycmF5IG9mIG9iamVjdHMgdG8gZmlsdGVyXG4gICAqIEBwYXJhbSBmaWx0ZXIgLSBUaGUgZmlsdGVyIHN0cmluZ1xuICAgKiBAcGFyYW0gZmlsdGVyQ29sdW1ucyAtIFRoZSBvYmplY3QgcHJvcGVydGllcyB0byB1c2Ugd2hlbiBmaWx0ZXJpbmdcbiAgICogQHBhcmFtIGZpbHRlck9wdGlvbnMgLSBUaGUgZmlsdGVyIG9wdGlvbnNcbiAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgZmlsdGVyZWQgb2JqZWN0c1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmaWx0ZXI8VD4oXG4gICAgY29sbGVjdGlvbjogVFtdLFxuICAgIGZpbHRlcjogc3RyaW5nLFxuICAgIGZpbHRlckNvbHVtbnM6IHN0cmluZ1tdLFxuICAgIGZpbHRlck9wdGlvbnM/OiBGaWx0ZXJPcHRpb25zXG4gICk6IFRbXSB7XG4gICAgLy8gSWYgdGhlIGZpbHRlciBzdHJpbmcgb3IgY29sbGVjdGlvbiBhcmUgbm90IHZhbGlkIHRoZW4ganVzdCByZXR1cm4gdGhlIGNvbGxlY3Rpb24gdW5jaGFuZ2VkXG4gICAgaWYgKCFmaWx0ZXIgfHwgIWNvbGxlY3Rpb24pIHtcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgIH1cbiAgICBpZiAoIWZpbHRlck9wdGlvbnMpIHtcbiAgICAgIGZpbHRlck9wdGlvbnMgPSBuZXcgRmlsdGVyT3B0aW9ucygpO1xuICAgIH1cbiAgICAvLyBGaWx0ZXIgdGhlIGNvbGxlY3Rpb24gdXNpbmcgYSBsYW1iZGEgZXhwcmVzc2lvblxuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IGNvbGxlY3Rpb24uZmlsdGVyKG8gPT4ge1xuICAgICAgLy8gRm9yIGVhY2ggb2YgdGhlIGZpbHRlciBjb2x1bW5zXG4gICAgICBmb3IgKGNvbnN0IGZpbHRlckNvbHVtbiBvZiBmaWx0ZXJDb2x1bW5zKSB7XG4gICAgICAgIC8vIEdldCB0aGUgdGV4dCBvZiB0aGUgY3VycmVudCBjb2x1bW5cbiAgICAgICAgY29uc3QgdGV4dDogc3RyaW5nID0gb1tmaWx0ZXJDb2x1bW5dO1xuICAgICAgICAvLyBDcmVhdGUgYSByZWd1bGFyIGV4cHJlc3Npb24gZm9yIHRoZSBwYXNzZWQgZmlsdGVyIHN0cmluZyBhbmQgZmlsdGVyIG9wdGlvbnNcbiAgICAgICAgY29uc3QgcmVnRXhwID0gdGhpcy5nZXRGaWx0ZXJSZWdleChmaWx0ZXIsIGZpbHRlck9wdGlvbnMpO1xuICAgICAgICAvLyBJZiB0aGUgY29udGVudHMgb2YgdGhlIGN1cnJlbnQgY29sdW1uIG1hdGNoZXMgdGhlIGZpbHRlciBzdHJpbmcgdGhlblxuICAgICAgICBpZiAodGV4dC5zZWFyY2gocmVnRXhwKSA+PSAwKSB7XG4gICAgICAgICAgLy8gUmV0dXJuIHRydWUgKGNvbGxlY3Rpb24gcm93IGlzIGluY2x1ZGVkIGluIHRoZSBmaWx0ZXJlZCBkYXRhKVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBSZXR1cm4gZmFsc2UgKGNvbGxlY3Rpb24gcm93IGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgZmlsdGVyZWQgZGF0YSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICAvLyBSZXR1cm4gdGhlIGZpbHRlcmVkIGRhdGFcbiAgICByZXR1cm4gZmlsdGVyZWREYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYW4gb2JqZWN0IGluIGFuIGFycmF5IG9mIG9iamVjdHMgYnkgbWF0Y2hpbmcgYW4gb2JqZWN0IHByb3BlcnR5XG4gICAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gVGhlIGFycmF5IG9mIG9iamVjdHMgdG8gc2VhcmNoXG4gICAqIEBwYXJhbSBwcm9wZXJ0eSAtIFRoZSBvYmplY3QgcHJvcGVydHkgdG8gc2VhcmNoXG4gICAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBtYXRjaFxuICAgKiBAcmV0dXJucyBUaGUgbWF0Y2hpbmcgb2JqZWN0XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZpbmQ8VD4oY29sbGVjdGlvbjogVFtdLCBwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogYW55KTogVCB7XG4gICAgY29uc3Qgb2JqZWN0ID0gY29sbGVjdGlvbi5maW5kKG8gPT4gb1twcm9wZXJ0eV0gPT09IHZhbHVlKTtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYW4gb2JqZWN0IGluIGFuIGFycmF5IG9mIG9iamVjdHMgYnkgbWF0Y2hpbmcgdGhlIG9iamVjdCdzIElEXG4gICAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gVGhlIGFycmF5IG9mIG9iamVjdHMgdG8gc2VhcmNoXG4gICAqIEBwYXJhbSBpZCAtIFRoZSBvYmplY3QgSUQgdG8gc2VhcmNoIGZvclxuICAgKiBAcmV0dXJucyBUaGUgbWF0Y2hpbmcgb2JqZWN0XG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZpbmRCeUlkPFQgZXh0ZW5kcyBCYXNlTW9kZWw+KGNvbGxlY3Rpb246IFRbXSwgaWQ6IHN0cmluZyk6IFQge1xuICAgIGNvbnN0IG9iamVjdCA9IGNvbGxlY3Rpb24uZmluZChvID0+IG8uX2lkID09PSBpZCk7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGluZGV4IG9mIGFuIG9iamVjdCBpbiBhbiBhcnJheSBvZiBvYmplY3RzXG4gICAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gVGhlIGFycmF5IG9mIG9iamVjdHMgdG8gc2VhcmNoXG4gICAqIEBwYXJhbSBpdGVtIC0gVGhlIGl0ZW0gdG8gc2VhcmNoIGZvclxuICAgKiBAcmV0dXJucyBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIGFycmF5ICh6ZXJvLWJhc2VkKVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmaW5kSW5kZXg8VD4oY29sbGVjdGlvbjogVFtdLCBpdGVtOiBUKTogbnVtYmVyIHtcbiAgICBjb25zdCBpbmRleCA9IGNvbGxlY3Rpb24uZmluZEluZGV4KG8gPT4gbyA9PT0gaXRlbSk7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydCBhbiBvYmplY3QgaW50byBhbiBhcnJheSBvZiBvYmplY3RzXG4gICAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gVGhlIGFycmF5IG9mIG9iamVjdHMgaW50byB3aGljaCB0aGUgb2JqZWN0IHdpbGwgYmUgaW5zZXJ0ZWRcbiAgICogQHBhcmFtIGl0ZW0gLSBUaGUgaXRlbSB0byBpbnNlcnQgaW50byB0aGUgYXJyYXlcbiAgICogQHBhcmFtIGluZGV4IC0gVGhlIGRlc2lyZWQgbG9jYXRpb24gb2YgdGhlIGl0ZW0gaW4gdGhlIGFycmF5XG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGluc2VydCBzdWNjZWVkZWRcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaW5zZXJ0PFQ+KFxuICAgIGNvbGxlY3Rpb246IFRbXSxcbiAgICBpdGVtOiBULFxuICAgIGluZGV4OiBudW1iZXIgPSAwXG4gICk6IGJvb2xlYW4ge1xuICAgIGNvbGxlY3Rpb24uc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTb3J0IGFuIGFycmF5IG9mIG9iamVjdHMgYnkgbXV0bGlwbGUga2V5cy4gVGhlIG1ldGhvZCBzb3J0cyB0aGUgcGFzc2VkIGFycmF5IGluLXBsYWNlIGFzIG9wcG9zZWQgdG9cbiAgICogcmV0dXJuaW5nIHRoZSBzb3J0ZWQgYXJyYXkuXG4gICAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gVGhlIGFycmF5IG9mIG9iamVjdHMgdG8gc29ydFxuICAgKiBAcGFyYW0gc29ydE9wdGlvbnMgLSBUaGUgc29ydCBvcHRpb25zXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG11bHRpS2V5U29ydDxUPihcbiAgICBjb2xsZWN0aW9uOiBUW10sXG4gICAgLi4uc29ydE9wdGlvbnM6IFNvcnRPcHRpb25bXVxuICApOiB2b2lkIHtcbiAgICBjb2xsZWN0aW9uLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IHNvcnRPcHRpb24gb2Ygc29ydE9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhW3NvcnRPcHRpb24ua2V5XSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgaWYgKCFhW3NvcnRPcHRpb24ua2V5XSAmJiBiW3NvcnRPcHRpb24ua2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHNvcnRPcHRpb24ub3JkZXIgPT09IFNvcnQuQXNjZW5kaW5nID8gLTEgOiAxO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYVtzb3J0T3B0aW9uLmtleV0gJiYgIWJbc29ydE9wdGlvbi5rZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gc29ydE9wdGlvbi5vcmRlciA9PT0gU29ydC5Bc2NlbmRpbmcgPyAxIDogLTE7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICFSZWdleFV0aWwuaXNJc29EYXRlKGFbc29ydE9wdGlvbi5rZXldKSAmJlxuICAgICAgICAgIHR5cGVvZiBhW3NvcnRPcHRpb24ua2V5XSA9PT0gJ3N0cmluZydcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgYVtzb3J0T3B0aW9uLmtleV0udG9Mb3dlckNhc2UoKSA8IGJbc29ydE9wdGlvbi5rZXldLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBzb3J0T3B0aW9uLm9yZGVyID09PSBTb3J0LkFzY2VuZGluZyA/IC0xIDogMTtcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgYVtzb3J0T3B0aW9uLmtleV0udG9Mb3dlckNhc2UoKSA+IGJbc29ydE9wdGlvbi5rZXldLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBzb3J0T3B0aW9uLm9yZGVyID09PSBTb3J0LkFzY2VuZGluZyA/IDEgOiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGFbc29ydE9wdGlvbi5rZXldIDwgYltzb3J0T3B0aW9uLmtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBzb3J0T3B0aW9uLm9yZGVyID09PSBTb3J0LkFzY2VuZGluZyA/IC0xIDogMTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGFbc29ydE9wdGlvbi5rZXldID4gYltzb3J0T3B0aW9uLmtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBzb3J0T3B0aW9uLm9yZGVyID09PSBTb3J0LkFzY2VuZGluZyA/IDEgOiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbiBvYmplY3QgZnJvbSBhbiBhcnJheSBvZiBvYmplY3RzIGJ5IG1hdGNoaW5nIHRoZSBvYmplY3QgSURcbiAgICogQHBhcmFtIGNvbGxlY3Rpb24gLSBUaGUgYXJyYXkgb2Ygb2JqZWN0cyBmcm9tIHdoaWNoIHRvIHJlbW92ZSBhbiBvYmplY3RcbiAgICogQHBhcmFtIGl0ZW0gLSBUaGUgaXRlbSB0byByZW1vdmUgZnJvbSB0aGUgYXJyYXlcbiAgICogQHJldHVybnMgVGhlIGFycmF5IG9mIG9iamVjdHMgd2l0aCB0aGUgaXRlbSByZW1vdmVkXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlbW92ZTxUIGV4dGVuZHMgQmFzZU1vZGVsPihjb2xsZWN0aW9uOiBUW10sIGl0ZW06IFQpOiBUW10ge1xuICAgIGNvbnN0IHVwZGF0ZWRDb2xsZWN0aW9uID0gY29sbGVjdGlvbi5maWx0ZXIobyA9PiBvLl9pZCAhPT0gaXRlbS5faWQpO1xuICAgIHJldHVybiB1cGRhdGVkQ29sbGVjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW4gb2JqZWN0IGZyb20gYW4gYXJyYXkgb2Ygb2JqZWN0IGJ5IG1hdGNoaW5nIHRoZSBwYXNzZWQgb2JqZWN0IElEXG4gICAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gVGhlIGFycmF5IG9mIG9iamVjdHMgZnJvbSB3aGljaCB0byByZW1vdmUgYW4gb2JqZWN0XG4gICAqIEBwYXJhbSBJRCAtIFRoZSBJRCBvZiB0aGUgaXRlbSB0byByZW1vdmUgZnJvbSB0aGUgYXJyYXlcbiAgICogQHJldHVybnMgVGhlIGFycmF5IG9mIG9iamVjdHMgd2l0aCB0aGUgaXRlbSByZW1vdmVkXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHJlbW92ZUJ5SWQ8VCBleHRlbmRzIEJhc2VNb2RlbD4oXG4gICAgY29sbGVjdGlvbjogVFtdLFxuICAgIGlkOiBzdHJpbmdcbiAgKTogVFtdIHtcbiAgICBjb25zdCB1cGRhdGVkQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb24uZmlsdGVyKG8gPT4gby5faWQgIT09IGlkKTtcbiAgICByZXR1cm4gdXBkYXRlZENvbGxlY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogU2h1ZmZseSBhbiBhcnJheSBvZiBvYmplY3RzXG4gICAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gVGhlIGFycmF5IG9mIG9iamVjdHMgdG8gc2h1ZmZseVxuICAgKiBAcmV0dXJucyBUaGUgc2h1ZmZsZWQgYXJyYXkgb2Ygb2JqZWN0c1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzaHVmZmxlPFQ+KGNvbGxlY3Rpb246IFRbXSk6IFRbXSB7XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IGNvbGxlY3Rpb24ubGVuZ3RoO1xuICAgIGxldCB0ZW1wb3JhcnlWYWx1ZTogVDtcbiAgICBsZXQgcmFuZG9tSW5kZXg6IG51bWJlcjtcblxuICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXG4gICAgd2hpbGUgKDAgIT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50Li4uXG4gICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XG4gICAgICBjdXJyZW50SW5kZXggLT0gMTtcblxuICAgICAgLy8gU3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gICAgICB0ZW1wb3JhcnlWYWx1ZSA9IGNvbGxlY3Rpb25bY3VycmVudEluZGV4XTtcbiAgICAgIGNvbGxlY3Rpb25bY3VycmVudEluZGV4XSA9IGNvbGxlY3Rpb25bcmFuZG9tSW5kZXhdO1xuICAgICAgY29sbGVjdGlvbltyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTb3J0IGFuIGFycmF5IG9mIG9iamVjdHMgYnkgYSBzaW5nbGUgcHJvcGVydHkuIFRoZSBtZXRob2Qgc29ydHMgdGhlIHBhc3NlZCBhcnJheSBpbi1wbGFjZSBhcyBvcHBvc2VkIHRvXG4gICAqIHJldHVybmluZyB0aGUgc29ydGVkIGFycmF5LlxuICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIFRoZSBhcnJheSBvZiBvYmplY3RzIHRvIHNvcnRcbiAgICogQHBhcmFtIGtleSAtIFRoZSBwcm9wZXJ0eSB0byB1c2UgZm9yIHNvcnRpbmdcbiAgICogQHBhcmFtIG9yZGVyIC0gVGhlIHNvcnQgb3JkZXJcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgc29ydDxUPihjb2xsZWN0aW9uOiBUW10sIGtleTogc3RyaW5nLCBvcmRlcjogU29ydCk6IHZvaWQge1xuICAgIGNvbGxlY3Rpb24uc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgIGlmICghUmVnZXhVdGlsLmlzSXNvRGF0ZShhW2tleV0pICYmIHR5cGVvZiBhW2tleV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChhW2tleV0udG9Mb3dlckNhc2UoKSA8IGJba2V5XS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgcmV0dXJuIG9yZGVyID09PSBTb3J0LkFzY2VuZGluZyA/IC0xIDogMTtcbiAgICAgICAgfSBlbHNlIGlmIChhW2tleV0udG9Mb3dlckNhc2UoKSA+IGJba2V5XS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgcmV0dXJuIG9yZGVyID09PSBTb3J0LkFzY2VuZGluZyA/IDEgOiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChhW2tleV0gPCBiW2tleV0pIHtcbiAgICAgICAgICByZXR1cm4gb3JkZXIgPT09IFNvcnQuQXNjZW5kaW5nID8gLTEgOiAxO1xuICAgICAgICB9IGVsc2UgaWYgKGFba2V5XSA+IGJba2V5XSkge1xuICAgICAgICAgIHJldHVybiBvcmRlciA9PT0gU29ydC5Bc2NlbmRpbmcgPyAxIDogLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGFuIG9iamVjdCBpbiBhbiBhcnJheSBvZiBvYmplY3RzLiBVc2UgdGhlIG9iamVjdCdzIElEIHRvIG1hdGNoIG9iamVjdHMuXG4gICAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gVGhlIGFycmF5IG9mIG9iamVjdHMgdGhhdCBjb250YWlucyB0aGUgb2JqZWN0IHRvIHVwZGF0ZVxuICAgKiBAcGFyYW0gaXRlbSAtIFRoZSBpdGVtIHRvIHVwZGF0ZVxuICAgKiBAcGFyYW0gYWRkSWZNaXNzaW5nIC0gQm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gYWRkIHRoZSBpdGVtIGlmIGl0IGlzIG5vdCBwcmVzZW50IGluIHRoZSBhcnJheVxuICAgKiBAcmV0dXJucyBUaGUgYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIHRoZSB1cGRhdGVkIGl0ZW1cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgdXBkYXRlPFQgZXh0ZW5kcyBCYXNlTW9kZWw+KFxuICAgIGNvbGxlY3Rpb246IFRbXSxcbiAgICBpdGVtOiBULFxuICAgIGFkZElmTWlzc2luZzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFRbXSB7XG4gICAgY29uc3QgaW5kZXggPSBjb2xsZWN0aW9uLmZpbmRJbmRleChvID0+IG8uX2lkID09PSBpdGVtLl9pZCk7XG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgaWYgKGFkZElmTWlzc2luZyA9PT0gdHJ1ZSkge1xuICAgICAgICBjb2xsZWN0aW9uLnB1c2goaXRlbSk7XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gICAgICB9XG4gICAgfVxuICAgIGNvbGxlY3Rpb25baW5kZXhdID0gaXRlbTtcbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfVxuXG4gIC8vICoqKioqKioqKioqKioqKioqKioqXG4gIC8vIFByaXZhdGUgU3RhdGljIG1ldGhvZHNcbiAgLy8gKioqKioqKioqKioqKioqKioqKipcblxuICAvKipcbiAgICogQ3JlYXRlIGEgcmVndWxhciBleHByZXNzaW9uIG9iamVjdCB0aGF0IGltcGxlbWVudHMgdGhlIHBhc3NlZCBmaWx0ZXIgb3B0aW9uc1xuICAgKiBAcGFyYW0gZmlsdGVyIC0gVGhlIGZpbHRlciB0ZXh0XG4gICAqIEBwYXJhbSBmaWx0ZXJPcHRpb25zIC0gVGhlIGZpbHRlciBvcHRpb25zXG4gICAqIEByZXR1cm5zIEEgcmVndWxhciBleHByZXNzaW9uIG9iamVjdFxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0RmlsdGVyUmVnZXgoXG4gICAgZmlsdGVyOiBzdHJpbmcsXG4gICAgZmlsdGVyT3B0aW9uczogRmlsdGVyT3B0aW9uc1xuICApOiBSZWdFeHAge1xuICAgIGZpbHRlciA9IHRoaXMuZXNjYXBlUmVnZXhDaGFyYWN0ZXJzKGZpbHRlcik7XG4gICAgbGV0IHJlZ2V4U3RyaW5nOiBzdHJpbmc7XG4gICAgc3dpdGNoIChmaWx0ZXJPcHRpb25zLmZpdGxlclNjb3BlKSB7XG4gICAgICBjYXNlIEZpbHRlclNjb3BlLlN0YXJ0c1dpdGg6XG4gICAgICAgIHJlZ2V4U3RyaW5nID0gJ14nICsgZmlsdGVyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRmlsdGVyU2NvcGUuRW5kc1dpdGg6XG4gICAgICAgIHJlZ2V4U3RyaW5nID0gZmlsdGVyICsgJyQnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJlZ2V4U3RyaW5nID0gZmlsdGVyO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgbGV0IHJlZ0V4cDogUmVnRXhwO1xuICAgIGlmIChmaWx0ZXJPcHRpb25zLmZpdGxlckNhc2UgPT09IEZpbHRlckNhc2UuQ2FzZVNlbnNpdGl2ZSkge1xuICAgICAgcmVnRXhwID0gbmV3IFJlZ0V4cCgnLionICsgcmVnZXhTdHJpbmcgKyAnLionKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVnRXhwID0gbmV3IFJlZ0V4cCgnLionICsgcmVnZXhTdHJpbmcgKyAnLionLCAnaScpO1xuICAgIH1cbiAgICByZXR1cm4gcmVnRXhwO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSB3aGV0aGVyIGFuIG9iamVjdCBleGlzdHMgaW4gYW4gYXJyYXkgb2Ygb2JqZWN0cyBieSBjb21wYXJpbmcgdGhlIG9iamVjdCBwcm9wZXJ0aWVzXG4gICAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gVGhlIGFycmF5IG9mIG9iamVjdHMgdG8gc2VhcmNoXG4gICAqIEBwYXJhbSBpdGVtIC0gVGhlIGl0ZW0gdG8gc2VhcmNoIGZvclxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgdW5pcXVlXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBpc1VuaXF1ZUJ5T2JqZWN0PFQ+KGNvbGxlY3Rpb246IFRbXSwgaXRlbTogVCkge1xuICAgIGZvciAoY29uc3QgY29sbGVjdGlvbkl0ZW0gb2YgY29sbGVjdGlvbikge1xuICAgICAgaWYgKF8uaXNFcXVhbChjb2xsZWN0aW9uSXRlbSwgaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgd2hldGhlciBhbiBvYmplY3QgZXhpc3RzIGluIGFuIGFycmF5IG9mIG9iamVjdHMgYnkgY29tcGFyaW5nIHRoZSBvYmplY3QgSURzXG4gICAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gVGhlIGFycmF5IG9mIG9iamVjdHMgdG8gc2VhcmNoXG4gICAqIEBwYXJhbSBpdGVtIC0gVGhlIGl0ZW0gdG8gc2VhcmNoIGZvclxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBvYmplY3QgaXMgdW5pcXVlXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBpc1VuaXF1ZUJ5SWQ8VD4oY29sbGVjdGlvbjogYW55W10sIGl0ZW06IGFueSkge1xuICAgIGNvbnN0IG1hdGNoaW5nSXRlbSA9IGNvbGxlY3Rpb24uZmluZChvID0+IG8uX2lkID09PSBpdGVtLl9pZCk7XG4gICAgaWYgKG1hdGNoaW5nSXRlbSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nXG4gICAqIEBwYXJhbSByZWdleFN0cmluZyAtIFRoZSByZWdleCBzdHJpbmcgdG8gZXNjYXBlXG4gICAqIEByZXR1cm5zIFRoZSBlc2NhcGVkIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmdcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIGVzY2FwZVJlZ2V4Q2hhcmFjdGVycyhyZWdleFN0cmluZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBlc2NhcGVkVGV4dCA9IHJlZ2V4U3RyaW5nLnJlcGxhY2UoL1stW1xcXXt9KCkqKz8uLFxcXFxeJHwjXFxzXS9nLCAnXFxcXCQmJyk7XG4gICAgcmV0dXJuIGVzY2FwZWRUZXh0O1xuICB9XG59XG4iXX0=
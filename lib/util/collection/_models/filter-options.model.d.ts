import { FilterCase } from '../_enums/filter-case.enum';
import { FilterScope } from '../_enums/filter-scope.enum';
/**
 * A class store store filter options
 */
export declare class FilterOptions {
    fitlerCase: FilterCase;
    fitlerScope: FilterScope;
    /**
     * Constructor
     * @param fitlerCase - Enum indicating the filter case option
     * @param fitlerScope - Enum indicating the filter scope option
     */
    constructor(fitlerCase?: FilterCase, fitlerScope?: FilterScope);
}

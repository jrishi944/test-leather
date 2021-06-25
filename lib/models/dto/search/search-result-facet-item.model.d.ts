import { SearchFacetFilter } from './search-facet-filter.model';
import { SearchFacetRangeFilter } from './search-facet-range-filter.model';
export declare class SearchResultFacetItem {
    token: string;
    value: string;
    label: string;
    count: number;
    query: string;
    active: boolean;
    constructor();
    createQuery(q: string, facetFilters: SearchFacetFilter[], rangeQueries: SearchFacetRangeFilter[]): void;
    private appendQueryString;
    private urlEncode;
}

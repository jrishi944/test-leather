import { SearchResultFacetItem } from './search-result-facet-item.model';
import { SearchFacetFilter } from './search-facet-filter.model';
import { SearchFacetRangeFilter } from './search-facet-range-filter.model';
export declare class SearchResultFacet {
    field: string;
    label: string;
    items: SearchResultFacetItem[];
    constructor(field: string, label: string);
    createQuery(q: string, facetFilters: SearchFacetFilter[], rangeQueries: SearchFacetRangeFilter[]): void;
}

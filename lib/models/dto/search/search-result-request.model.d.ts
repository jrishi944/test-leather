import { SearchFacetOptions } from './search-facet-options.model';
import { SearchFacetFilter } from './search-facet-filter.model';
import { SearchFacetRangeFilter } from './search-facet-range-filter.model';
import { SearchOptions } from './search-options.model';
export declare class SearchResultRequest {
    q: string;
    facetOptions: SearchFacetOptions;
    facetFilters: SearchFacetFilter[];
    facetRangeFilters: SearchFacetRangeFilter[];
    start: number;
    rows: number;
    constructor(solrResults: any, options: SearchOptions);
}

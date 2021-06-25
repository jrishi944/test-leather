import { SearchFacetOptions } from './search-facet-options.model';
import { SearchFacetFilter } from './search-facet-filter.model';
import { SearchFacetRangeFilter } from './search-facet-range-filter.model';
import { SearchMatchFilter } from './search-match-filter.model';
import { SearchRangeFilter } from './search-range-filter.model';
export declare class SearchOptions {
    q: string;
    source: string;
    start: number;
    rows: number;
    facetOptions: SearchFacetOptions;
    facetFilters: SearchFacetFilter[];
    facetRangeFilters: SearchFacetRangeFilter[];
    otherFilters: SearchMatchFilter[];
    getMatchFilters(): SearchMatchFilter[];
    getRangeFilters(): SearchRangeFilter[];
    private urlDecode;
}

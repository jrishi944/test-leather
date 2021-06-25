import { SearchFacetField } from './search-facet-field.model';
import { SearchFacetRangeQuery } from './search-facet-range-query.model';
export declare class SearchFacetOptions {
    fields: SearchFacetField[];
    rangeQueries: SearchFacetRangeQuery[];
    limit?: number;
    minCount?: number;
    getRangeQuery(query: string): SearchFacetRangeQuery | null;
}

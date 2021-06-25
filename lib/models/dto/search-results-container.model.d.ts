import { SearchResultMeta } from './search/search-result-meta.model';
import { SearchResultRequest } from './search/search-result-request.model';
import { SearchResultFacet } from './search/search-result-facet.model';
import { SearchResultsDto } from './search-results-dto.model';
export declare class SearchResultsContainer<T> {
    data: T[];
    facets: SearchResultFacet[];
    request: SearchResultRequest;
    meta: SearchResultMeta;
    constructor(searchResultsDto: SearchResultsDto<T>);
}

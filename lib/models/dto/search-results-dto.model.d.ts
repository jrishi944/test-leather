import { SearchResultFacet } from './search/search-result-facet.model';
import { SearchResultRequest } from './search/search-result-request.model';
import { SearchResultMeta } from './search/search-result-meta.model';
import { Status } from '../../enums/status.enum';
import { Dto } from './dto.model';
export declare class SearchResultsDto<T> extends Dto {
    data: T[];
    facets: SearchResultFacet[];
    request: SearchResultRequest;
    meta: SearchResultMeta;
    constructor(code: Status, data: T[]);
}

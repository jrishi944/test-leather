export declare class SearchFacetField {
    field: string;
    label: string;
    token: string;
    isString: boolean;
    facetLabelCallback: (field: string, label: string, token: string, value: string) => any;
    excludedFacet: boolean;
    constructor(field: string, label: string, token: string, isString: boolean, facetLabelCallback: (field: string, label: string, token: string, value: string) => any);
}

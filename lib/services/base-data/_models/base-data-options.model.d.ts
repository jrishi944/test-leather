import { Secure } from '../../../enums/secure.enum';
import { Parameters } from './parameters.model';
import { Status } from '../../../enums/status.enum';
/**
 * A class to store HTTP request options
 */
export declare class Options {
    /** The ID of the object */
    id: string;
    /** An enum indicating whether then API endpoint is secure */
    secure: Secure;
    /** The API endpoint URL */
    url: string;
    /** Boolean indocating whether the ID should be validated */
    validateId: boolean;
    /** The type of the object */
    objectType: any;
    /** An object containing the query parameters */
    parameters: Parameters;
    /** An array of errors that should be suppressed (i.e. no error dialog shown) */
    suppressedErrors: Status[];
    /**
     * Constructor
     */
    constructor();
}

import { DtoStatusContainer } from './dto-status-container.model';
import { Status } from '../../enums/status.enum';
/**
 * A data transfer object class
 */
export declare class Dto {
    /** A container object for the DTO status */
    status: DtoStatusContainer;
    /**
     * @param code = The status code
     */
    constructor(code?: Status);
    /**
     * Determine whether the passed status code is an error
     * @param code - The status code
     * @param suppressErrors  - A list of error codes to suppress (i.e. not treat as errors)
     * @returns True if the status code is an error code
     */
    static isError(code: Status, suppressErrors?: Status[]): boolean;
    /**
     * Determine whether the passed status code is not an error
     * @param code - The status code
     * @returns True if the status code is not an error code
     */
    static isNotError(code: Status): boolean;
}

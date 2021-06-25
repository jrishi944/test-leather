import { Status } from '../../enums/status.enum';
/**
 * A container to store DTO status data
 */
export declare class DtoStatusContainer {
    code: Status;
    /** A get accessor for the DTO's status text */
    get text(): string;
    /**
     * The DTO's message text
     */
    message?: string;
    /**
     * @param code - The DTO's status code
     */
    constructor(code?: Status);
    /**
     * Determine whether the status is an error code
     */
    isError(): boolean;
    /**
     * Determine whether the status is not an error code
     */
    isNotError(): boolean;
}

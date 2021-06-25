import { Dto } from './dto.model';
import { Status } from '../../enums/status.enum';
/**
 * A DTO class to use if a controller returns an array of items
 */
export declare class ArrayDto<T> extends Dto {
    data: T[];
    /**
     * @param code - The DTO's status code
     * @param data - The DTO's data (an array of objects)
     */
    constructor(code: Status, data: T[]);
}

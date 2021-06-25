import { Dto } from './dto.model';
import { Status } from '../../enums/status.enum';
/**
 * A DTO class to use if a controller returns a single item
 */
export declare class ItemDto<T> extends Dto {
    data: T;
    /**
     * @param code - The DTO's status code
     * @param data - The DTO's data
     */
    constructor(code: Status, data: T);
}

import { ClassType } from 'class-transformer/ClassTransformer';
/**
 * A utility for copying objects
 */
export declare class ObjectCopyUtil {
    /**
     * Perform a default (deep) copy of the object
     * @param objectToCopy - The object to copy
     * @returns The copied object
     */
    static copy<T>(objectToCopy: T): T;
    /**
     * Perform a deep copy of the object
     * @param objectToCopy - The object to copy
     * @returns The copied object
     */
    static deepCopy<T>(objectToCopy: T): T;
    /**
     * Perform a shallow copy of the object
     * @param objectToCopy - The object to copy
     * @returns The copied object
     */
    static shallowCopy(objectToCopy: any): any;
    /**
     * Perform a typed of the object. Copy the object and then apply the properties of the passed class.
     * @param objectToCopy - The object to copy
     * @param type - The prototype whose methods will be copied
     * @returns The copied object
     */
    static typedCopy<T>(objectToCopy: any, type: ClassType<T>): T;
}

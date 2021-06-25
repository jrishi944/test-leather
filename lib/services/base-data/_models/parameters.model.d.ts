/**
 * A class to store query parameters
 */
export declare class Parameters {
    /** Get accessor for hasParameters */
    get hasParameters(): boolean;
    /** An array of parameters */
    private _parameters;
    /**
     * Add a parameter to the Parameters object
     * @param name - The name of the paramter to add
     * @param value - The value of the parameter to add
     */
    add(name: string, value: string): void;
    /**
     * Get the parameter string
     * @returns A parameter string
     */
    getParamterString(): string;
}

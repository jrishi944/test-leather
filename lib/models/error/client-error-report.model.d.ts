import { BaseModel } from '../base/base.model';
/**
 * A class to store an error report
 */
export declare class ClientErrorReport extends BaseModel {
    serviceName: string;
    message: string;
    status: number;
    statusText: string;
    url: string;
    stackTrace?: string;
    /**
     * @param serviceName - The name of the service reporting the error
     * @param message - The error message
     * @param status - The error status
     * @param statusText - The status text
     * @param url - The offending URL
     * @param stackTrace - A stack trace
     */
    constructor(serviceName: string, message: string, status: number, statusText: string, url: string, stackTrace?: string);
}

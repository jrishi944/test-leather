export declare class UploadEvent {
    type: string;
    message: string;
    progressPercent: number;
    callbackId?: string;
    constructor(type: string, message?: string, callbackId?: string);
}

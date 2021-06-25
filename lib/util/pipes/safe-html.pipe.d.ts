import { PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * A pipe to transform HTML to safe HTML
 */
import * as ɵngcc0 from '@angular/core';
export declare class SafeHtmlPipe implements PipeTransform {
    private sanitizer;
    /**
     * Constructor
     * @param sanitizer - A reference to the DomSanitizer service
     */
    constructor(sanitizer: DomSanitizer);
    /**
     * Transform the passed HTML
     * @param html - The HTML to transform
     * @returns The transformed HTML
     */
    transform(html: any): import("@angular/platform-browser").SafeHtml;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SafeHtmlPipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<SafeHtmlPipe, "safeHtml">;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1odG1sLnBpcGUuZC50cyIsInNvdXJjZXMiOlsic2FmZS1odG1sLnBpcGUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuLyoqXG4gKiBBIHBpcGUgdG8gdHJhbnNmb3JtIEhUTUwgdG8gc2FmZSBIVE1MXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNhZmVIdG1sUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHByaXZhdGUgc2FuaXRpemVyO1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHNhbml0aXplciAtIEEgcmVmZXJlbmNlIHRvIHRoZSBEb21TYW5pdGl6ZXIgc2VydmljZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNhbml0aXplcjogRG9tU2FuaXRpemVyKTtcbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm0gdGhlIHBhc3NlZCBIVE1MXG4gICAgICogQHBhcmFtIGh0bWwgLSBUaGUgSFRNTCB0byB0cmFuc2Zvcm1cbiAgICAgKiBAcmV0dXJucyBUaGUgdHJhbnNmb3JtZWQgSFRNTFxuICAgICAqL1xuICAgIHRyYW5zZm9ybShodG1sOiBhbnkpOiBpbXBvcnQoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpLlNhZmVIdG1sO1xufVxuIl19
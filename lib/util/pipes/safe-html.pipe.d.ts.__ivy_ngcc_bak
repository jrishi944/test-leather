import { PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * A pipe to transform HTML to safe HTML
 */
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
}

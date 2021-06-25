import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * A pipe to transform HTML to safe HTML
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/platform-browser';
let SafeHtmlPipe = class SafeHtmlPipe {
    /**
     * Constructor
     * @param sanitizer - A reference to the DomSanitizer service
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * Transform the passed HTML
     * @param html - The HTML to transform
     * @returns The transformed HTML
     */
    transform(html) {
        const sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(html);
        return sanitizedHtml;
    }
};
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.DomSanitizer)); };
SafeHtmlPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "safeHtml", type: SafeHtmlPipe, pure: true });
SafeHtmlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SafeHtmlPipe, [{
        type: Pipe,
        args: [{
                name: 'safeHtml'
            }]
    }], function () { return [{ type: ɵngcc1.DomSanitizer }]; }, null); })();
export { SafeHtmlPipe };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1odG1sLnBpcGUuanMiLCJzb3VyY2VzIjpbIm5nOi9sZWF0aGVybWFuLWJvb3RzdHJhcC9saWIvdXRpbC9waXBlcy9zYWZlLWh0bWwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpEO0FBQ0E7QUFDQSxHQUFHOzs7QUFJSCxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0FBQUcsSUFDMUI7QUFDRjtBQUNFO0FBQ0UsT0FBQztBQUNMLElBQUUsWUFBb0IsU0FBdUI7QUFBSSxRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFjO0FBQUMsSUFBRSxDQUFDO0FBQ2pELElBQ0U7QUFDRjtBQUNFO0FBQ0U7QUFFSixPQURLO0FBQ0wsSUFBUyxTQUFTLENBQUMsSUFBSTtBQUN2QixRQUFJLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkUsUUFBSSxPQUFPLGFBQWEsQ0FBQztBQUN6QixJQUFFLENBQUM7QUFDSCxDQUFDOzsrRkFBQTtBQUNEO0FBQXNDLFlBWkwsWUFBWTtBQUFHO0FBTG5DLFlBQVksb0JBSHhCLElBQUksQ0FBQyxVQUNKLElBQUksRUFBRSxVQUFVLE1BQ2pCLENBQUM7R0FDVyxZQUFZLENBZ0J4Qjs7Ozs2RUFDRDtBQUFDLFNBakJZLFlBQVk7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG4vKipcbiAqIEEgcGlwZSB0byB0cmFuc2Zvcm0gSFRNTCB0byBzYWZlIEhUTUxcbiAqL1xuQFBpcGUoe1xuICBuYW1lOiAnc2FmZUh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNhZmVIdG1sUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogQHBhcmFtIHNhbml0aXplciAtIEEgcmVmZXJlbmNlIHRvIHRoZSBEb21TYW5pdGl6ZXIgc2VydmljZVxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cblxuICAvKipcbiAgICogVHJhbnNmb3JtIHRoZSBwYXNzZWQgSFRNTFxuICAgKiBAcGFyYW0gaHRtbCAtIFRoZSBIVE1MIHRvIHRyYW5zZm9ybVxuICAgKiBAcmV0dXJucyBUaGUgdHJhbnNmb3JtZWQgSFRNTFxuICAgKi9cbiAgcHVibGljIHRyYW5zZm9ybShodG1sKSB7XG4gICAgY29uc3Qgc2FuaXRpemVkSHRtbCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWwpO1xuICAgIHJldHVybiBzYW5pdGl6ZWRIdG1sO1xuICB9XG59XG4iXX0=
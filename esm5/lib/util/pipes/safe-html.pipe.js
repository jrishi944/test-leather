import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * A pipe to transform HTML to safe HTML
 */
var SafeHtmlPipe = /** @class */ (function () {
    /**
     * Constructor
     * @param sanitizer - A reference to the DomSanitizer service
     */
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * Transform the passed HTML
     * @param html - The HTML to transform
     * @returns The transformed HTML
     */
    SafeHtmlPipe.prototype.transform = function (html) {
        var sanitizedHtml = this.sanitizer.bypassSecurityTrustHtml(html);
        return sanitizedHtml;
    };
    SafeHtmlPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    SafeHtmlPipe = __decorate([
        Pipe({
            name: 'safeHtml'
        })
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());
export { SafeHtmlPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1odG1sLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi91dGlsL3BpcGVzL3NhZmUtaHRtbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQ7O0dBRUc7QUFJSDtJQUNFOzs7T0FHRztJQUNILHNCQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQUcsQ0FBQztJQUUvQzs7OztPQUlHO0lBQ0ksZ0NBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUNuQixJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25FLE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7O2dCQVY4QixZQUFZOztJQUxoQyxZQUFZO1FBSHhCLElBQUksQ0FBQztZQUNKLElBQUksRUFBRSxVQUFVO1NBQ2pCLENBQUM7T0FDVyxZQUFZLENBZ0J4QjtJQUFELG1CQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FoQlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG4vKipcbiAqIEEgcGlwZSB0byB0cmFuc2Zvcm0gSFRNTCB0byBzYWZlIEhUTUxcbiAqL1xuQFBpcGUoe1xuICBuYW1lOiAnc2FmZUh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNhZmVIdG1sUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAvKipcbiAgICogQ29uc3RydWN0b3JcbiAgICogQHBhcmFtIHNhbml0aXplciAtIEEgcmVmZXJlbmNlIHRvIHRoZSBEb21TYW5pdGl6ZXIgc2VydmljZVxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cblxuICAvKipcbiAgICogVHJhbnNmb3JtIHRoZSBwYXNzZWQgSFRNTFxuICAgKiBAcGFyYW0gaHRtbCAtIFRoZSBIVE1MIHRvIHRyYW5zZm9ybVxuICAgKiBAcmV0dXJucyBUaGUgdHJhbnNmb3JtZWQgSFRNTFxuICAgKi9cbiAgcHVibGljIHRyYW5zZm9ybShodG1sKSB7XG4gICAgY29uc3Qgc2FuaXRpemVkSHRtbCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWwpO1xuICAgIHJldHVybiBzYW5pdGl6ZWRIdG1sO1xuICB9XG59XG4iXX0=
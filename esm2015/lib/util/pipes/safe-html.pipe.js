import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * A pipe to transform HTML to safe HTML
 */
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
SafeHtmlPipe.ctorParameters = () => [
    { type: DomSanitizer }
];
SafeHtmlPipe = __decorate([
    Pipe({
        name: 'safeHtml'
    })
], SafeHtmlPipe);
export { SafeHtmlPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1odG1sLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi91dGlsL3BpcGVzL3NhZmUtaHRtbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQ7O0dBRUc7QUFJSCxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBQ3ZCOzs7T0FHRztJQUNILFlBQW9CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFBRyxDQUFDO0lBRS9DOzs7O09BSUc7SUFDSSxTQUFTLENBQUMsSUFBSTtRQUNuQixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25FLE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRixDQUFBOztZQVhnQyxZQUFZOztBQUxoQyxZQUFZO0lBSHhCLElBQUksQ0FBQztRQUNKLElBQUksRUFBRSxVQUFVO0tBQ2pCLENBQUM7R0FDVyxZQUFZLENBZ0J4QjtTQWhCWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbi8qKlxuICogQSBwaXBlIHRvIHRyYW5zZm9ybSBIVE1MIHRvIHNhZmUgSFRNTFxuICovXG5AUGlwZSh7XG4gIG5hbWU6ICdzYWZlSHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU2FmZUh0bWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gc2FuaXRpemVyIC0gQSByZWZlcmVuY2UgdG8gdGhlIERvbVNhbml0aXplciBzZXJ2aWNlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxuXG4gIC8qKlxuICAgKiBUcmFuc2Zvcm0gdGhlIHBhc3NlZCBIVE1MXG4gICAqIEBwYXJhbSBodG1sIC0gVGhlIEhUTUwgdG8gdHJhbnNmb3JtXG4gICAqIEByZXR1cm5zIFRoZSB0cmFuc2Zvcm1lZCBIVE1MXG4gICAqL1xuICBwdWJsaWMgdHJhbnNmb3JtKGh0bWwpIHtcbiAgICBjb25zdCBzYW5pdGl6ZWRIdG1sID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCk7XG4gICAgcmV0dXJuIHNhbml0aXplZEh0bWw7XG4gIH1cbn1cbiJdfQ==
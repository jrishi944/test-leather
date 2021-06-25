/**
 * A utility for working with URLs
 */
var UrlUtil = /** @class */ (function () {
    function UrlUtil() {
    }
    /**
     * Join the passed URL elements
     * @param urlElements - The URL elements to join
     * @returns The concatenated URL elements
     */
    UrlUtil.join = function () {
        var urlElements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            urlElements[_i] = arguments[_i];
        }
        var resultArray = [];
        // If the first part is a plain protocol, we combine it with the next part.
        if (urlElements[0].match(/^[^/:]+:\/*$/) && urlElements.length > 1) {
            var first = urlElements.shift();
            urlElements[0] = first + urlElements[0];
        }
        // There must be two or three slashes in the file protocol, two slashes in anything else.
        if (urlElements[0].match(/^file:\/\/\//)) {
            urlElements[0] = urlElements[0].replace(/^([^/:]+):\/*/, '$1:///');
        }
        else {
            urlElements[0] = urlElements[0].replace(/^([^/:]+):\/*/, '$1://');
        }
        for (var i = 0; i < urlElements.length; i++) {
            var component = urlElements[i];
            if (typeof component !== 'string') {
                throw new TypeError('Url must be a string. Received ' + component);
            }
            if (component === '') {
                continue;
            }
            if (i > 0) {
                // Removing the starting slashes for each component but the first.
                component = component.replace(/^[\/]+/, '');
            }
            if (i < urlElements.length - 1) {
                // Removing the ending slashes for each component but the last.
                component = component.replace(/[\/]+$/, '');
            }
            else {
                // For the last component we will combine multiple slashes to a single one.
                component = component.replace(/[\/]+$/, '/');
            }
            resultArray.push(component);
        }
        var joinedString = resultArray.join('/');
        // Each input component is now separated by a single slash except the possible first plain protocol part.
        // remove trailing slash before parameters or hash
        joinedString = joinedString.replace(/\/(\?|&|#[^!])/g, '$1');
        // replace ? in parameters with &
        var parts = joinedString.split('?');
        joinedString =
            parts.shift() + (parts.length > 0 ? '?' : '') + parts.join('&');
        return joinedString;
    };
    return UrlUtil;
}());
export { UrlUtil };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnV0aWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi91dGlsL3VybC91cmwudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUNIO0lBQUE7SUE2REEsQ0FBQztJQTVEQzs7OztPQUlHO0lBQ1csWUFBSSxHQUFsQjtRQUFtQixxQkFBd0I7YUFBeEIsVUFBd0IsRUFBeEIscUJBQXdCLEVBQXhCLElBQXdCO1lBQXhCLGdDQUF3Qjs7UUFDekMsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBRXZCLDJFQUEyRTtRQUMzRSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbEUsSUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2xDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO1FBRUQseUZBQXlGO1FBQ3pGLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUN4QyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDcEU7YUFBTTtZQUNMLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNuRTtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNDLElBQUksU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUvQixJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRTtnQkFDakMsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQ0FBaUMsR0FBRyxTQUFTLENBQUMsQ0FBQzthQUNwRTtZQUVELElBQUksU0FBUyxLQUFLLEVBQUUsRUFBRTtnQkFDcEIsU0FBUzthQUNWO1lBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNULGtFQUFrRTtnQkFDbEUsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQzdDO1lBQ0QsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzlCLCtEQUErRDtnQkFDL0QsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQzdDO2lCQUFNO2dCQUNMLDJFQUEyRTtnQkFDM0UsU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQzlDO1lBRUQsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM3QjtRQUVELElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekMseUdBQXlHO1FBRXpHLGtEQUFrRDtRQUNsRCxZQUFZLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU3RCxpQ0FBaUM7UUFDakMsSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxZQUFZO1lBQ1YsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVsRSxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUE3REQsSUE2REMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgdXRpbGl0eSBmb3Igd29ya2luZyB3aXRoIFVSTHNcbiAqL1xuZXhwb3J0IGNsYXNzIFVybFV0aWwge1xuICAvKipcbiAgICogSm9pbiB0aGUgcGFzc2VkIFVSTCBlbGVtZW50c1xuICAgKiBAcGFyYW0gdXJsRWxlbWVudHMgLSBUaGUgVVJMIGVsZW1lbnRzIHRvIGpvaW5cbiAgICogQHJldHVybnMgVGhlIGNvbmNhdGVuYXRlZCBVUkwgZWxlbWVudHNcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgam9pbiguLi51cmxFbGVtZW50czogc3RyaW5nW10pIHtcbiAgICBjb25zdCByZXN1bHRBcnJheSA9IFtdO1xuXG4gICAgLy8gSWYgdGhlIGZpcnN0IHBhcnQgaXMgYSBwbGFpbiBwcm90b2NvbCwgd2UgY29tYmluZSBpdCB3aXRoIHRoZSBuZXh0IHBhcnQuXG4gICAgaWYgKHVybEVsZW1lbnRzWzBdLm1hdGNoKC9eW14vOl0rOlxcLyokLykgJiYgdXJsRWxlbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3QgZmlyc3QgPSB1cmxFbGVtZW50cy5zaGlmdCgpO1xuICAgICAgdXJsRWxlbWVudHNbMF0gPSBmaXJzdCArIHVybEVsZW1lbnRzWzBdO1xuICAgIH1cblxuICAgIC8vIFRoZXJlIG11c3QgYmUgdHdvIG9yIHRocmVlIHNsYXNoZXMgaW4gdGhlIGZpbGUgcHJvdG9jb2wsIHR3byBzbGFzaGVzIGluIGFueXRoaW5nIGVsc2UuXG4gICAgaWYgKHVybEVsZW1lbnRzWzBdLm1hdGNoKC9eZmlsZTpcXC9cXC9cXC8vKSkge1xuICAgICAgdXJsRWxlbWVudHNbMF0gPSB1cmxFbGVtZW50c1swXS5yZXBsYWNlKC9eKFteLzpdKyk6XFwvKi8sICckMTovLy8nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsRWxlbWVudHNbMF0gPSB1cmxFbGVtZW50c1swXS5yZXBsYWNlKC9eKFteLzpdKyk6XFwvKi8sICckMTovLycpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXJsRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSB1cmxFbGVtZW50c1tpXTtcblxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1VybCBtdXN0IGJlIGEgc3RyaW5nLiBSZWNlaXZlZCAnICsgY29tcG9uZW50KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbXBvbmVudCA9PT0gJycpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAvLyBSZW1vdmluZyB0aGUgc3RhcnRpbmcgc2xhc2hlcyBmb3IgZWFjaCBjb21wb25lbnQgYnV0IHRoZSBmaXJzdC5cbiAgICAgICAgY29tcG9uZW50ID0gY29tcG9uZW50LnJlcGxhY2UoL15bXFwvXSsvLCAnJyk7XG4gICAgICB9XG4gICAgICBpZiAoaSA8IHVybEVsZW1lbnRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgLy8gUmVtb3ZpbmcgdGhlIGVuZGluZyBzbGFzaGVzIGZvciBlYWNoIGNvbXBvbmVudCBidXQgdGhlIGxhc3QuXG4gICAgICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudC5yZXBsYWNlKC9bXFwvXSskLywgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIHRoZSBsYXN0IGNvbXBvbmVudCB3ZSB3aWxsIGNvbWJpbmUgbXVsdGlwbGUgc2xhc2hlcyB0byBhIHNpbmdsZSBvbmUuXG4gICAgICAgIGNvbXBvbmVudCA9IGNvbXBvbmVudC5yZXBsYWNlKC9bXFwvXSskLywgJy8nKTtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0QXJyYXkucHVzaChjb21wb25lbnQpO1xuICAgIH1cblxuICAgIGxldCBqb2luZWRTdHJpbmcgPSByZXN1bHRBcnJheS5qb2luKCcvJyk7XG4gICAgLy8gRWFjaCBpbnB1dCBjb21wb25lbnQgaXMgbm93IHNlcGFyYXRlZCBieSBhIHNpbmdsZSBzbGFzaCBleGNlcHQgdGhlIHBvc3NpYmxlIGZpcnN0IHBsYWluIHByb3RvY29sIHBhcnQuXG5cbiAgICAvLyByZW1vdmUgdHJhaWxpbmcgc2xhc2ggYmVmb3JlIHBhcmFtZXRlcnMgb3IgaGFzaFxuICAgIGpvaW5lZFN0cmluZyA9IGpvaW5lZFN0cmluZy5yZXBsYWNlKC9cXC8oXFw/fCZ8I1teIV0pL2csICckMScpO1xuXG4gICAgLy8gcmVwbGFjZSA/IGluIHBhcmFtZXRlcnMgd2l0aCAmXG4gICAgY29uc3QgcGFydHMgPSBqb2luZWRTdHJpbmcuc3BsaXQoJz8nKTtcbiAgICBqb2luZWRTdHJpbmcgPVxuICAgICAgcGFydHMuc2hpZnQoKSArIChwYXJ0cy5sZW5ndGggPiAwID8gJz8nIDogJycpICsgcGFydHMuam9pbignJicpO1xuXG4gICAgcmV0dXJuIGpvaW5lZFN0cmluZztcbiAgfVxufVxuIl19
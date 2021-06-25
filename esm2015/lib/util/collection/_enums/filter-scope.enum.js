/** An enum that represents filter scope */
export var FilterScope;
(function (FilterScope) {
    /** The filtered content must contain the filter text */
    FilterScope[FilterScope["Contains"] = 0] = "Contains";
    /** The filtered content must start with the filter text */
    FilterScope[FilterScope["StartsWith"] = 1] = "StartsWith";
    /** The filtered content must end with the filte text */
    FilterScope[FilterScope["EndsWith"] = 2] = "EndsWith";
})(FilterScope || (FilterScope = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXNjb3BlLmVudW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi91dGlsL2NvbGxlY3Rpb24vX2VudW1zL2ZpbHRlci1zY29wZS5lbnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUMzQyxNQUFNLENBQU4sSUFBWSxXQVNYO0FBVEQsV0FBWSxXQUFXO0lBQ3JCLHdEQUF3RDtJQUN4RCxxREFBUSxDQUFBO0lBRVIsMkRBQTJEO0lBQzNELHlEQUFVLENBQUE7SUFFVix3REFBd0Q7SUFDeEQscURBQVEsQ0FBQTtBQUNWLENBQUMsRUFUVyxXQUFXLEtBQVgsV0FBVyxRQVN0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBBbiBlbnVtIHRoYXQgcmVwcmVzZW50cyBmaWx0ZXIgc2NvcGUgKi9cbmV4cG9ydCBlbnVtIEZpbHRlclNjb3BlIHtcbiAgLyoqIFRoZSBmaWx0ZXJlZCBjb250ZW50IG11c3QgY29udGFpbiB0aGUgZmlsdGVyIHRleHQgKi9cbiAgQ29udGFpbnMsXG5cbiAgLyoqIFRoZSBmaWx0ZXJlZCBjb250ZW50IG11c3Qgc3RhcnQgd2l0aCB0aGUgZmlsdGVyIHRleHQgKi9cbiAgU3RhcnRzV2l0aCxcblxuICAvKiogVGhlIGZpbHRlcmVkIGNvbnRlbnQgbXVzdCBlbmQgd2l0aCB0aGUgZmlsdGUgdGV4dCAqL1xuICBFbmRzV2l0aFxufVxuIl19
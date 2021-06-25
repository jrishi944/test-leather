/**
 * A utility to combine the properties of multiple classes
 */
var MixinUtil = /** @class */ (function () {
    function MixinUtil() {
    }
    /**
     *
     * @param derivedCtor - The object to receive the new properties
     * @param baseCtors - The objects from which to copy properties
     */
    MixinUtil.ApplyMixins = function (derivedCtor, baseCtors) {
        baseCtors.forEach(function (baseCtor) {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });
    };
    return MixinUtil;
}());
export { MixinUtil };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWl4aW4udXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL3V0aWwvbWl4aW5zL21peGluLnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSDtJQUFBO0lBYUEsQ0FBQztJQVpDOzs7O09BSUc7SUFDVyxxQkFBVyxHQUF6QixVQUEwQixXQUFnQixFQUFFLFNBQWdCO1FBQzFELFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRO1lBQ3hCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtnQkFDekQsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pELENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSB1dGlsaXR5IHRvIGNvbWJpbmUgdGhlIHByb3BlcnRpZXMgb2YgbXVsdGlwbGUgY2xhc3Nlc1xuICovXG5leHBvcnQgY2xhc3MgTWl4aW5VdGlsIHtcbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBkZXJpdmVkQ3RvciAtIFRoZSBvYmplY3QgdG8gcmVjZWl2ZSB0aGUgbmV3IHByb3BlcnRpZXNcbiAgICogQHBhcmFtIGJhc2VDdG9ycyAtIFRoZSBvYmplY3RzIGZyb20gd2hpY2ggdG8gY29weSBwcm9wZXJ0aWVzXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIEFwcGx5TWl4aW5zKGRlcml2ZWRDdG9yOiBhbnksIGJhc2VDdG9yczogYW55W10pIHtcbiAgICBiYXNlQ3RvcnMuZm9yRWFjaChiYXNlQ3RvciA9PiB7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiYXNlQ3Rvci5wcm90b3R5cGUpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGRlcml2ZWRDdG9yLnByb3RvdHlwZVtuYW1lXSA9IGJhc2VDdG9yLnByb3RvdHlwZVtuYW1lXTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=
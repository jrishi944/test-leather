/**
 * A utility to combine the properties of multiple classes
 */
export class MixinUtil {
    /**
     *
     * @param derivedCtor - The object to receive the new properties
     * @param baseCtors - The objects from which to copy properties
     */
    static ApplyMixins(derivedCtor, baseCtors) {
        baseCtors.forEach(baseCtor => {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWl4aW4udXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL3V0aWwvbWl4aW5zL21peGluLnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCxNQUFNLE9BQU8sU0FBUztJQUNwQjs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFnQixFQUFFLFNBQWdCO1FBQzFELFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDM0IsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzVELFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6RCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIHV0aWxpdHkgdG8gY29tYmluZSB0aGUgcHJvcGVydGllcyBvZiBtdWx0aXBsZSBjbGFzc2VzXG4gKi9cbmV4cG9ydCBjbGFzcyBNaXhpblV0aWwge1xuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGRlcml2ZWRDdG9yIC0gVGhlIG9iamVjdCB0byByZWNlaXZlIHRoZSBuZXcgcHJvcGVydGllc1xuICAgKiBAcGFyYW0gYmFzZUN0b3JzIC0gVGhlIG9iamVjdHMgZnJvbSB3aGljaCB0byBjb3B5IHByb3BlcnRpZXNcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgQXBwbHlNaXhpbnMoZGVyaXZlZEN0b3I6IGFueSwgYmFzZUN0b3JzOiBhbnlbXSkge1xuICAgIGJhc2VDdG9ycy5mb3JFYWNoKGJhc2VDdG9yID0+IHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGJhc2VDdG9yLnByb3RvdHlwZSkuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgZGVyaXZlZEN0b3IucHJvdG90eXBlW25hbWVdID0gYmFzZUN0b3IucHJvdG90eXBlW25hbWVdO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
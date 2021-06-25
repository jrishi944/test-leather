import { Dto } from './dto.model';
/**
 * A DTO class to use if a controller returns an array of items
 */
export class ArrayDto extends Dto {
    /**
     * @param code - The DTO's status code
     * @param data - The DTO's data (an array of objects)
     */
    constructor(code, data) {
        super(code);
        this.data = data;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktZHRvLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGVhdGhlcm1hbi1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2R0by9hcnJheS1kdG8ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUdsQzs7R0FFRztBQUNILE1BQU0sT0FBTyxRQUFZLFNBQVEsR0FBRztJQUNsQzs7O09BR0c7SUFDSCxZQUFZLElBQVksRUFBUyxJQUFTO1FBQ3hDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQURtQixTQUFJLEdBQUosSUFBSSxDQUFLO0lBRTFDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER0byB9IGZyb20gJy4vZHRvLm1vZGVsJztcbmltcG9ydCB7IFN0YXR1cyB9IGZyb20gJy4uLy4uL2VudW1zL3N0YXR1cy5lbnVtJztcblxuLyoqXG4gKiBBIERUTyBjbGFzcyB0byB1c2UgaWYgYSBjb250cm9sbGVyIHJldHVybnMgYW4gYXJyYXkgb2YgaXRlbXNcbiAqL1xuZXhwb3J0IGNsYXNzIEFycmF5RHRvPFQ+IGV4dGVuZHMgRHRvIHtcbiAgLyoqXG4gICAqIEBwYXJhbSBjb2RlIC0gVGhlIERUTydzIHN0YXR1cyBjb2RlXG4gICAqIEBwYXJhbSBkYXRhIC0gVGhlIERUTydzIGRhdGEgKGFuIGFycmF5IG9mIG9iamVjdHMpXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb2RlOiBTdGF0dXMsIHB1YmxpYyBkYXRhOiBUW10pIHtcbiAgICBzdXBlcihjb2RlKTtcbiAgfVxufVxuIl19
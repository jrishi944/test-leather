import { TestArtifact } from '../../enums/test-artifact.enum';
/**
 * The base model class
 */
export class BaseModel {
    /**
     * @param testArtifact - Enum indicating whether the model is a test artifact
     */
    constructor(testArtifact) {
        if (testArtifact === TestArtifact.true) {
            this.testArtifact = true;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9iYXNlL2Jhc2UubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTlEOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFNBQVM7SUFhcEI7O09BRUc7SUFFSCxZQUFZLFlBQTJCO1FBQ3JDLElBQUksWUFBWSxLQUFLLFlBQVksQ0FBQyxJQUFJLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDMUI7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXN0QXJ0aWZhY3QgfSBmcm9tICcuLi8uLi9lbnVtcy90ZXN0LWFydGlmYWN0LmVudW0nO1xuXG4vKipcbiAqIFRoZSBiYXNlIG1vZGVsIGNsYXNzXG4gKi9cbmV4cG9ydCBjbGFzcyBCYXNlTW9kZWwge1xuICAvKiogVGhlIElEIG9mIHRoZSBtb2RlbCAqL1xuICBwdWJsaWMgX2lkOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBkYXRlIHRoZSBtb2RlbCB3YXMgY3JlYXRkICovXG4gIHB1YmxpYyBkYXRlQ3JlYXRlZDogRGF0ZTtcblxuICAvKiogVGhlIGRhdGUgdGhlIG1vZGVsIHdhcyBsYXN0IG1vZGlmaWVkICovXG4gIHB1YmxpYyBkYXRlTW9kaWZpZWQ6IERhdGU7XG5cbiAgLyoqIEJvb2xlYW4gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBtb2RlbCBpcyBhIHRlc3QgYXJ0aWZhY3QgKi9cbiAgcHVibGljIHRlc3RBcnRpZmFjdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB0ZXN0QXJ0aWZhY3QgLSBFbnVtIGluZGljYXRpbmcgd2hldGhlciB0aGUgbW9kZWwgaXMgYSB0ZXN0IGFydGlmYWN0XG4gICAqL1xuXG4gIGNvbnN0cnVjdG9yKHRlc3RBcnRpZmFjdD86IFRlc3RBcnRpZmFjdCkge1xuICAgIGlmICh0ZXN0QXJ0aWZhY3QgPT09IFRlc3RBcnRpZmFjdC50cnVlKSB7XG4gICAgICB0aGlzLnRlc3RBcnRpZmFjdCA9IHRydWU7XG4gICAgfVxuICB9XG59XG4iXX0=
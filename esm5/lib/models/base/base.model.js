import { TestArtifact } from '../../enums/test-artifact.enum';
/**
 * The base model class
 */
var BaseModel = /** @class */ (function () {
    /**
     * @param testArtifact - Enum indicating whether the model is a test artifact
     */
    function BaseModel(testArtifact) {
        if (testArtifact === TestArtifact.true) {
            this.testArtifact = true;
        }
    }
    return BaseModel;
}());
export { BaseModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9iYXNlL2Jhc2UubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTlEOztHQUVHO0FBQ0g7SUFhRTs7T0FFRztJQUVILG1CQUFZLFlBQTJCO1FBQ3JDLElBQUksWUFBWSxLQUFLLFlBQVksQ0FBQyxJQUFJLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdEFydGlmYWN0IH0gZnJvbSAnLi4vLi4vZW51bXMvdGVzdC1hcnRpZmFjdC5lbnVtJztcblxuLyoqXG4gKiBUaGUgYmFzZSBtb2RlbCBjbGFzc1xuICovXG5leHBvcnQgY2xhc3MgQmFzZU1vZGVsIHtcbiAgLyoqIFRoZSBJRCBvZiB0aGUgbW9kZWwgKi9cbiAgcHVibGljIF9pZDogc3RyaW5nO1xuXG4gIC8qKiBUaGUgZGF0ZSB0aGUgbW9kZWwgd2FzIGNyZWF0ZCAqL1xuICBwdWJsaWMgZGF0ZUNyZWF0ZWQ6IERhdGU7XG5cbiAgLyoqIFRoZSBkYXRlIHRoZSBtb2RlbCB3YXMgbGFzdCBtb2RpZmllZCAqL1xuICBwdWJsaWMgZGF0ZU1vZGlmaWVkOiBEYXRlO1xuXG4gIC8qKiBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgbW9kZWwgaXMgYSB0ZXN0IGFydGlmYWN0ICovXG4gIHB1YmxpYyB0ZXN0QXJ0aWZhY3Q/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gdGVzdEFydGlmYWN0IC0gRW51bSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIG1vZGVsIGlzIGEgdGVzdCBhcnRpZmFjdFxuICAgKi9cblxuICBjb25zdHJ1Y3Rvcih0ZXN0QXJ0aWZhY3Q/OiBUZXN0QXJ0aWZhY3QpIHtcbiAgICBpZiAodGVzdEFydGlmYWN0ID09PSBUZXN0QXJ0aWZhY3QudHJ1ZSkge1xuICAgICAgdGhpcy50ZXN0QXJ0aWZhY3QgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIl19
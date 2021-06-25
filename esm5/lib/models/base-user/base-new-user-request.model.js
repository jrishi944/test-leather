import { TestArtifact } from '../../enums/test-artifact.enum';
/**
 * A class to store new user request data. This class serves as the base class for other user new user request
 * classes.
 */
var BaseNewUserRequest = /** @class */ (function () {
    /**
     * @param firstName - The user's first name
     * @param lastName - The user's last name
     * @param email - THe user's email address
     * @param password - The user's password
     * @param roles - THe user's roles
     * @param testArtifact - An enum indicating whether the new user request is a test artifact
     */
    function BaseNewUserRequest(firstName, lastName, email, password, roles, testArtifact) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.roles = roles;
        if (testArtifact === TestArtifact.true) {
            this.testArtifact = true;
        }
    }
    return BaseNewUserRequest;
}());
export { BaseNewUserRequest };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1uZXctdXNlci1yZXF1ZXN0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGVhdGhlcm1hbi1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2Jhc2UtdXNlci9iYXNlLW5ldy11c2VyLXJlcXVlc3QubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTlEOzs7R0FHRztBQUNIO0lBSUU7Ozs7Ozs7T0FPRztJQUNILDRCQUNTLFNBQWlCLEVBQ2pCLFFBQWdCLEVBQ2hCLEtBQWEsRUFDYixRQUFnQixFQUNoQixLQUFlLEVBQ3RCLFlBQTJCO1FBTHBCLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQixVQUFLLEdBQUwsS0FBSyxDQUFVO1FBR3RCLElBQUksWUFBWSxLQUFLLFlBQVksQ0FBQyxJQUFJLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdEFydGlmYWN0IH0gZnJvbSAnLi4vLi4vZW51bXMvdGVzdC1hcnRpZmFjdC5lbnVtJztcblxuLyoqXG4gKiBBIGNsYXNzIHRvIHN0b3JlIG5ldyB1c2VyIHJlcXVlc3QgZGF0YS4gVGhpcyBjbGFzcyBzZXJ2ZXMgYXMgdGhlIGJhc2UgY2xhc3MgZm9yIG90aGVyIHVzZXIgbmV3IHVzZXIgcmVxdWVzdFxuICogY2xhc3Nlcy5cbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VOZXdVc2VyUmVxdWVzdCB7XG4gIC8qKiBCb29sZWFuIGluZGljYXRpbmcgd2hldGhlciB0aGUgb2JqZWN0IGlzIGEgdGVzdCBhcnRpZmFjdCAqL1xuICBwdWJsaWMgdGVzdEFydGlmYWN0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQHBhcmFtIGZpcnN0TmFtZSAtIFRoZSB1c2VyJ3MgZmlyc3QgbmFtZVxuICAgKiBAcGFyYW0gbGFzdE5hbWUgLSBUaGUgdXNlcidzIGxhc3QgbmFtZVxuICAgKiBAcGFyYW0gZW1haWwgLSBUSGUgdXNlcidzIGVtYWlsIGFkZHJlc3NcbiAgICogQHBhcmFtIHBhc3N3b3JkIC0gVGhlIHVzZXIncyBwYXNzd29yZFxuICAgKiBAcGFyYW0gcm9sZXMgLSBUSGUgdXNlcidzIHJvbGVzXG4gICAqIEBwYXJhbSB0ZXN0QXJ0aWZhY3QgLSBBbiBlbnVtIGluZGljYXRpbmcgd2hldGhlciB0aGUgbmV3IHVzZXIgcmVxdWVzdCBpcyBhIHRlc3QgYXJ0aWZhY3RcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBmaXJzdE5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgbGFzdE5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgZW1haWw6IHN0cmluZyxcbiAgICBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZyxcbiAgICBwdWJsaWMgcm9sZXM6IHN0cmluZ1tdLFxuICAgIHRlc3RBcnRpZmFjdD86IFRlc3RBcnRpZmFjdFxuICApIHtcbiAgICBpZiAodGVzdEFydGlmYWN0ID09PSBUZXN0QXJ0aWZhY3QudHJ1ZSkge1xuICAgICAgdGhpcy50ZXN0QXJ0aWZhY3QgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIl19
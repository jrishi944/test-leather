import { TestArtifact } from '../../enums/test-artifact.enum';
/**
 * A class to store new user request data. This class serves as the base class for other user new user request
 * classes.
 */
export class BaseNewUserRequest {
    /**
     * @param firstName - The user's first name
     * @param lastName - The user's last name
     * @param email - THe user's email address
     * @param password - The user's password
     * @param roles - THe user's roles
     * @param testArtifact - An enum indicating whether the new user request is a test artifact
     */
    constructor(firstName, lastName, email, password, roles, testArtifact) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.roles = roles;
        if (testArtifact === TestArtifact.true) {
            this.testArtifact = true;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1uZXctdXNlci1yZXF1ZXN0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGVhdGhlcm1hbi1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2Jhc2UtdXNlci9iYXNlLW5ldy11c2VyLXJlcXVlc3QubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTlEOzs7R0FHRztBQUNILE1BQU0sT0FBTyxrQkFBa0I7SUFJN0I7Ozs7Ozs7T0FPRztJQUNILFlBQ1MsU0FBaUIsRUFDakIsUUFBZ0IsRUFDaEIsS0FBYSxFQUNiLFFBQWdCLEVBQ2hCLEtBQWUsRUFDdEIsWUFBMkI7UUFMcEIsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2hCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2hCLFVBQUssR0FBTCxLQUFLLENBQVU7UUFHdEIsSUFBSSxZQUFZLEtBQUssWUFBWSxDQUFDLElBQUksRUFBRTtZQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUMxQjtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlc3RBcnRpZmFjdCB9IGZyb20gJy4uLy4uL2VudW1zL3Rlc3QtYXJ0aWZhY3QuZW51bSc7XG5cbi8qKlxuICogQSBjbGFzcyB0byBzdG9yZSBuZXcgdXNlciByZXF1ZXN0IGRhdGEuIFRoaXMgY2xhc3Mgc2VydmVzIGFzIHRoZSBiYXNlIGNsYXNzIGZvciBvdGhlciB1c2VyIG5ldyB1c2VyIHJlcXVlc3RcbiAqIGNsYXNzZXMuXG4gKi9cbmV4cG9ydCBjbGFzcyBCYXNlTmV3VXNlclJlcXVlc3Qge1xuICAvKiogQm9vbGVhbiBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIG9iamVjdCBpcyBhIHRlc3QgYXJ0aWZhY3QgKi9cbiAgcHVibGljIHRlc3RBcnRpZmFjdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBmaXJzdE5hbWUgLSBUaGUgdXNlcidzIGZpcnN0IG5hbWVcbiAgICogQHBhcmFtIGxhc3ROYW1lIC0gVGhlIHVzZXIncyBsYXN0IG5hbWVcbiAgICogQHBhcmFtIGVtYWlsIC0gVEhlIHVzZXIncyBlbWFpbCBhZGRyZXNzXG4gICAqIEBwYXJhbSBwYXNzd29yZCAtIFRoZSB1c2VyJ3MgcGFzc3dvcmRcbiAgICogQHBhcmFtIHJvbGVzIC0gVEhlIHVzZXIncyByb2xlc1xuICAgKiBAcGFyYW0gdGVzdEFydGlmYWN0IC0gQW4gZW51bSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIG5ldyB1c2VyIHJlcXVlc3QgaXMgYSB0ZXN0IGFydGlmYWN0XG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZmlyc3ROYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIGxhc3ROYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIGVtYWlsOiBzdHJpbmcsXG4gICAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmcsXG4gICAgcHVibGljIHJvbGVzOiBzdHJpbmdbXSxcbiAgICB0ZXN0QXJ0aWZhY3Q/OiBUZXN0QXJ0aWZhY3RcbiAgKSB7XG4gICAgaWYgKHRlc3RBcnRpZmFjdCA9PT0gVGVzdEFydGlmYWN0LnRydWUpIHtcbiAgICAgIHRoaXMudGVzdEFydGlmYWN0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
/**
 * A class to store a password reset
 */
export class PasswordReset {
    /**
     * @param token - The password reset token
     * @param userId - The ID of the user requesting the password reset
     * @param newPassword - The user's new password
     */
    constructor(token, userId, newPassword) {
        this.token = token;
        this.userId = userId;
        this.newPassword = newPassword;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQtcmVzZXQubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvYmFzZS11c2VyL3Bhc3N3b3JkLXJlc2V0Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0gsTUFBTSxPQUFPLGFBQWE7SUFDeEI7Ozs7T0FJRztJQUNILFlBQ1MsS0FBYSxFQUNiLE1BQWMsRUFDZCxXQUFtQjtRQUZuQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFRO0lBQ3pCLENBQUM7Q0FDTCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBjbGFzcyB0byBzdG9yZSBhIHBhc3N3b3JkIHJlc2V0XG4gKi9cbmV4cG9ydCBjbGFzcyBQYXNzd29yZFJlc2V0IHtcbiAgLyoqXG4gICAqIEBwYXJhbSB0b2tlbiAtIFRoZSBwYXNzd29yZCByZXNldCB0b2tlblxuICAgKiBAcGFyYW0gdXNlcklkIC0gVGhlIElEIG9mIHRoZSB1c2VyIHJlcXVlc3RpbmcgdGhlIHBhc3N3b3JkIHJlc2V0XG4gICAqIEBwYXJhbSBuZXdQYXNzd29yZCAtIFRoZSB1c2VyJ3MgbmV3IHBhc3N3b3JkXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdG9rZW46IHN0cmluZyxcbiAgICBwdWJsaWMgdXNlcklkOiBzdHJpbmcsXG4gICAgcHVibGljIG5ld1Bhc3N3b3JkOiBzdHJpbmdcbiAgKSB7fVxufVxuIl19
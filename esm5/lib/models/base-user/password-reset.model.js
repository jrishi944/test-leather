/**
 * A class to store a password reset
 */
var PasswordReset = /** @class */ (function () {
    /**
     * @param token - The password reset token
     * @param userId - The ID of the user requesting the password reset
     * @param newPassword - The user's new password
     */
    function PasswordReset(token, userId, newPassword) {
        this.token = token;
        this.userId = userId;
        this.newPassword = newPassword;
    }
    return PasswordReset;
}());
export { PasswordReset };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQtcmVzZXQubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvYmFzZS11c2VyL3Bhc3N3b3JkLXJlc2V0Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0g7SUFDRTs7OztPQUlHO0lBQ0gsdUJBQ1MsS0FBYSxFQUNiLE1BQWMsRUFDZCxXQUFtQjtRQUZuQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFRO0lBQ3pCLENBQUM7SUFDTixvQkFBQztBQUFELENBQUMsQUFYRCxJQVdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIGNsYXNzIHRvIHN0b3JlIGEgcGFzc3dvcmQgcmVzZXRcbiAqL1xuZXhwb3J0IGNsYXNzIFBhc3N3b3JkUmVzZXQge1xuICAvKipcbiAgICogQHBhcmFtIHRva2VuIC0gVGhlIHBhc3N3b3JkIHJlc2V0IHRva2VuXG4gICAqIEBwYXJhbSB1c2VySWQgLSBUaGUgSUQgb2YgdGhlIHVzZXIgcmVxdWVzdGluZyB0aGUgcGFzc3dvcmQgcmVzZXRcbiAgICogQHBhcmFtIG5ld1Bhc3N3b3JkIC0gVGhlIHVzZXIncyBuZXcgcGFzc3dvcmRcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyB0b2tlbjogc3RyaW5nLFxuICAgIHB1YmxpYyB1c2VySWQ6IHN0cmluZyxcbiAgICBwdWJsaWMgbmV3UGFzc3dvcmQ6IHN0cmluZ1xuICApIHt9XG59XG4iXX0=
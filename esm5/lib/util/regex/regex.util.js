import { STRONG_PASSWORD_REGEX } from './_constants/strong-password.regex';
import { ISO_DATE_REGEX } from './_constants/iso_date.regex';
import { LATITUDE_REGEX } from './_constants/latitude-regex.const';
import { LONGITUDE_REGEX } from './_constants/longitude-regex.const';
import { PHONE_NUMBER_REGEX } from './_constants/phone-number-regex.const';
import { URL_REGEX } from './_constants/url-regex.const';
import { ZIP_CODE_REGEX } from './_constants/zip-code-regex.const';
/**
 * A regular expression utility
 */
var RegexUtil = /** @class */ (function () {
    function RegexUtil() {
    }
    /**
     * Determine if the passed string is an ISO date
     * @param text - The text to test
     * @returns True if the passed text is an ISO date
     */
    RegexUtil.isIsoDate = function (text) {
        if (ISO_DATE_REGEX.test(text) === true) {
            return true;
        }
        return false;
    };
    /**
     * Determine if the passed string is a latitude
     * @param text - The text to test
     * @returns True if the passed text is a latitude
     */
    RegexUtil.isLatitude = function (text) {
        if (LATITUDE_REGEX.test(text) === true) {
            return true;
        }
        return false;
    };
    /**
     * Determine if the passed string is a longitude
     * @param text - The text to test
     * @returns True if the passed text is a longitude
     */
    RegexUtil.isLongitude = function (text) {
        if (LONGITUDE_REGEX.test(text) === true) {
            return true;
        }
        return false;
    };
    /**
     * Determine if the passed string is a phone number
     * @param text - The text to test
     * @returns True if the passed text is a phone number
     */
    RegexUtil.isPhoneNumber = function (text) {
        if (PHONE_NUMBER_REGEX.test(text) === true) {
            return true;
        }
        return false;
    };
    /**
     * Determine if the passed string is a strong password
     * @param text - The text to test
     * @returns True if the passed text is a strong password
     */
    RegexUtil.isStrongPassword = function (text) {
        if (STRONG_PASSWORD_REGEX.test(text) === true) {
            return true;
        }
        return false;
    };
    /**
     * Determine if the passed text is a URL
     * @param text - The text to test
     * @returns True if the passed text is a URL
     */
    RegexUtil.isUrl = function (text) {
        if (URL_REGEX.test(text) === true) {
            return true;
        }
        return false;
    };
    /**
     * Determine if the passed text is a zip code
     * @param text - The text to test
     * @returns True if the passed text is a zip code
     */
    RegexUtil.isZipCode = function (text) {
        if (ZIP_CODE_REGEX.test(text) === true) {
            return true;
        }
        return false;
    };
    return RegexUtil;
}());
export { RegexUtil };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnZXgudXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL3V0aWwvcmVnZXgvcmVnZXgudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRW5FOztHQUVHO0FBQ0g7SUFBQTtJQW9GQSxDQUFDO0lBbkZDOzs7O09BSUc7SUFDVyxtQkFBUyxHQUF2QixVQUF3QixJQUFZO1FBQ2xDLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDdEMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7O09BSUc7SUFDVyxvQkFBVSxHQUF4QixVQUF5QixJQUFZO1FBQ25DLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDdEMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7O09BSUc7SUFDVyxxQkFBVyxHQUF6QixVQUEwQixJQUFZO1FBQ3BDLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDdkMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7O09BSUc7SUFDVyx1QkFBYSxHQUEzQixVQUE0QixJQUFZO1FBQ3RDLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtZQUMxQyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNXLDBCQUFnQixHQUE5QixVQUErQixJQUFZO1FBQ3pDLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtZQUM3QyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNXLGVBQUssR0FBbkIsVUFBb0IsSUFBWTtRQUM5QixJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRDs7OztPQUlHO0lBQ1csbUJBQVMsR0FBdkIsVUFBd0IsSUFBWTtRQUNsQyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ3RDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUFwRkQsSUFvRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTVFJPTkdfUEFTU1dPUkRfUkVHRVggfSBmcm9tICcuL19jb25zdGFudHMvc3Ryb25nLXBhc3N3b3JkLnJlZ2V4JztcbmltcG9ydCB7IElTT19EQVRFX1JFR0VYIH0gZnJvbSAnLi9fY29uc3RhbnRzL2lzb19kYXRlLnJlZ2V4JztcbmltcG9ydCB7IExBVElUVURFX1JFR0VYIH0gZnJvbSAnLi9fY29uc3RhbnRzL2xhdGl0dWRlLXJlZ2V4LmNvbnN0JztcbmltcG9ydCB7IExPTkdJVFVERV9SRUdFWCB9IGZyb20gJy4vX2NvbnN0YW50cy9sb25naXR1ZGUtcmVnZXguY29uc3QnO1xuaW1wb3J0IHsgUEhPTkVfTlVNQkVSX1JFR0VYIH0gZnJvbSAnLi9fY29uc3RhbnRzL3Bob25lLW51bWJlci1yZWdleC5jb25zdCc7XG5pbXBvcnQgeyBVUkxfUkVHRVggfSBmcm9tICcuL19jb25zdGFudHMvdXJsLXJlZ2V4LmNvbnN0JztcbmltcG9ydCB7IFpJUF9DT0RFX1JFR0VYIH0gZnJvbSAnLi9fY29uc3RhbnRzL3ppcC1jb2RlLXJlZ2V4LmNvbnN0JztcblxuLyoqXG4gKiBBIHJlZ3VsYXIgZXhwcmVzc2lvbiB1dGlsaXR5XG4gKi9cbmV4cG9ydCBjbGFzcyBSZWdleFV0aWwge1xuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoZSBwYXNzZWQgc3RyaW5nIGlzIGFuIElTTyBkYXRlXG4gICAqIEBwYXJhbSB0ZXh0IC0gVGhlIHRleHQgdG8gdGVzdFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBwYXNzZWQgdGV4dCBpcyBhbiBJU08gZGF0ZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpc0lzb0RhdGUodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKElTT19EQVRFX1JFR0VYLnRlc3QodGV4dCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoZSBwYXNzZWQgc3RyaW5nIGlzIGEgbGF0aXR1ZGVcbiAgICogQHBhcmFtIHRleHQgLSBUaGUgdGV4dCB0byB0ZXN0XG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHBhc3NlZCB0ZXh0IGlzIGEgbGF0aXR1ZGVcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaXNMYXRpdHVkZSh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoTEFUSVRVREVfUkVHRVgudGVzdCh0ZXh0KSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhlIHBhc3NlZCBzdHJpbmcgaXMgYSBsb25naXR1ZGVcbiAgICogQHBhcmFtIHRleHQgLSBUaGUgdGV4dCB0byB0ZXN0XG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHBhc3NlZCB0ZXh0IGlzIGEgbG9uZ2l0dWRlXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGlzTG9uZ2l0dWRlKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmIChMT05HSVRVREVfUkVHRVgudGVzdCh0ZXh0KSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhlIHBhc3NlZCBzdHJpbmcgaXMgYSBwaG9uZSBudW1iZXJcbiAgICogQHBhcmFtIHRleHQgLSBUaGUgdGV4dCB0byB0ZXN0XG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHBhc3NlZCB0ZXh0IGlzIGEgcGhvbmUgbnVtYmVyXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGlzUGhvbmVOdW1iZXIodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKFBIT05FX05VTUJFUl9SRUdFWC50ZXN0KHRleHQpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGUgcGFzc2VkIHN0cmluZyBpcyBhIHN0cm9uZyBwYXNzd29yZFxuICAgKiBAcGFyYW0gdGV4dCAtIFRoZSB0ZXh0IHRvIHRlc3RcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgcGFzc2VkIHRleHQgaXMgYSBzdHJvbmcgcGFzc3dvcmRcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaXNTdHJvbmdQYXNzd29yZCh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoU1RST05HX1BBU1NXT1JEX1JFR0VYLnRlc3QodGV4dCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoZSBwYXNzZWQgdGV4dCBpcyBhIFVSTFxuICAgKiBAcGFyYW0gdGV4dCAtIFRoZSB0ZXh0IHRvIHRlc3RcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgcGFzc2VkIHRleHQgaXMgYSBVUkxcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaXNVcmwodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKFVSTF9SRUdFWC50ZXN0KHRleHQpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGUgcGFzc2VkIHRleHQgaXMgYSB6aXAgY29kZVxuICAgKiBAcGFyYW0gdGV4dCAtIFRoZSB0ZXh0IHRvIHRlc3RcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgcGFzc2VkIHRleHQgaXMgYSB6aXAgY29kZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpc1ppcENvZGUodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKFpJUF9DT0RFX1JFR0VYLnRlc3QodGV4dCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==
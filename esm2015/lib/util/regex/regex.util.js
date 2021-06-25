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
export class RegexUtil {
    /**
     * Determine if the passed string is an ISO date
     * @param text - The text to test
     * @returns True if the passed text is an ISO date
     */
    static isIsoDate(text) {
        if (ISO_DATE_REGEX.test(text) === true) {
            return true;
        }
        return false;
    }
    /**
     * Determine if the passed string is a latitude
     * @param text - The text to test
     * @returns True if the passed text is a latitude
     */
    static isLatitude(text) {
        if (LATITUDE_REGEX.test(text) === true) {
            return true;
        }
        return false;
    }
    /**
     * Determine if the passed string is a longitude
     * @param text - The text to test
     * @returns True if the passed text is a longitude
     */
    static isLongitude(text) {
        if (LONGITUDE_REGEX.test(text) === true) {
            return true;
        }
        return false;
    }
    /**
     * Determine if the passed string is a phone number
     * @param text - The text to test
     * @returns True if the passed text is a phone number
     */
    static isPhoneNumber(text) {
        if (PHONE_NUMBER_REGEX.test(text) === true) {
            return true;
        }
        return false;
    }
    /**
     * Determine if the passed string is a strong password
     * @param text - The text to test
     * @returns True if the passed text is a strong password
     */
    static isStrongPassword(text) {
        if (STRONG_PASSWORD_REGEX.test(text) === true) {
            return true;
        }
        return false;
    }
    /**
     * Determine if the passed text is a URL
     * @param text - The text to test
     * @returns True if the passed text is a URL
     */
    static isUrl(text) {
        if (URL_REGEX.test(text) === true) {
            return true;
        }
        return false;
    }
    /**
     * Determine if the passed text is a zip code
     * @param text - The text to test
     * @returns True if the passed text is a zip code
     */
    static isZipCode(text) {
        if (ZIP_CODE_REGEX.test(text) === true) {
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnZXgudXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL3V0aWwvcmVnZXgvcmVnZXgudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRW5FOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFNBQVM7SUFDcEI7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBWTtRQUNsQyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ3RDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFZO1FBQ25DLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDdEMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsV0FBVyxDQUFDLElBQVk7UUFDcEMsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtZQUN2QyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBWTtRQUN0QyxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDMUMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBWTtRQUN6QyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDN0MsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQVk7UUFDOUIsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNqQyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBWTtRQUNsQyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ3RDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNUUk9OR19QQVNTV09SRF9SRUdFWCB9IGZyb20gJy4vX2NvbnN0YW50cy9zdHJvbmctcGFzc3dvcmQucmVnZXgnO1xuaW1wb3J0IHsgSVNPX0RBVEVfUkVHRVggfSBmcm9tICcuL19jb25zdGFudHMvaXNvX2RhdGUucmVnZXgnO1xuaW1wb3J0IHsgTEFUSVRVREVfUkVHRVggfSBmcm9tICcuL19jb25zdGFudHMvbGF0aXR1ZGUtcmVnZXguY29uc3QnO1xuaW1wb3J0IHsgTE9OR0lUVURFX1JFR0VYIH0gZnJvbSAnLi9fY29uc3RhbnRzL2xvbmdpdHVkZS1yZWdleC5jb25zdCc7XG5pbXBvcnQgeyBQSE9ORV9OVU1CRVJfUkVHRVggfSBmcm9tICcuL19jb25zdGFudHMvcGhvbmUtbnVtYmVyLXJlZ2V4LmNvbnN0JztcbmltcG9ydCB7IFVSTF9SRUdFWCB9IGZyb20gJy4vX2NvbnN0YW50cy91cmwtcmVnZXguY29uc3QnO1xuaW1wb3J0IHsgWklQX0NPREVfUkVHRVggfSBmcm9tICcuL19jb25zdGFudHMvemlwLWNvZGUtcmVnZXguY29uc3QnO1xuXG4vKipcbiAqIEEgcmVndWxhciBleHByZXNzaW9uIHV0aWxpdHlcbiAqL1xuZXhwb3J0IGNsYXNzIFJlZ2V4VXRpbCB7XG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhlIHBhc3NlZCBzdHJpbmcgaXMgYW4gSVNPIGRhdGVcbiAgICogQHBhcmFtIHRleHQgLSBUaGUgdGV4dCB0byB0ZXN0XG4gICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHBhc3NlZCB0ZXh0IGlzIGFuIElTTyBkYXRlXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGlzSXNvRGF0ZSh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoSVNPX0RBVEVfUkVHRVgudGVzdCh0ZXh0KSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhlIHBhc3NlZCBzdHJpbmcgaXMgYSBsYXRpdHVkZVxuICAgKiBAcGFyYW0gdGV4dCAtIFRoZSB0ZXh0IHRvIHRlc3RcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgcGFzc2VkIHRleHQgaXMgYSBsYXRpdHVkZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpc0xhdGl0dWRlKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmIChMQVRJVFVERV9SRUdFWC50ZXN0KHRleHQpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGUgcGFzc2VkIHN0cmluZyBpcyBhIGxvbmdpdHVkZVxuICAgKiBAcGFyYW0gdGV4dCAtIFRoZSB0ZXh0IHRvIHRlc3RcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgcGFzc2VkIHRleHQgaXMgYSBsb25naXR1ZGVcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaXNMb25naXR1ZGUodGV4dDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKExPTkdJVFVERV9SRUdFWC50ZXN0KHRleHQpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGUgcGFzc2VkIHN0cmluZyBpcyBhIHBob25lIG51bWJlclxuICAgKiBAcGFyYW0gdGV4dCAtIFRoZSB0ZXh0IHRvIHRlc3RcbiAgICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgcGFzc2VkIHRleHQgaXMgYSBwaG9uZSBudW1iZXJcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaXNQaG9uZU51bWJlcih0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoUEhPTkVfTlVNQkVSX1JFR0VYLnRlc3QodGV4dCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoZSBwYXNzZWQgc3RyaW5nIGlzIGEgc3Ryb25nIHBhc3N3b3JkXG4gICAqIEBwYXJhbSB0ZXh0IC0gVGhlIHRleHQgdG8gdGVzdFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBwYXNzZWQgdGV4dCBpcyBhIHN0cm9uZyBwYXNzd29yZFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpc1N0cm9uZ1Bhc3N3b3JkKHRleHQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmIChTVFJPTkdfUEFTU1dPUkRfUkVHRVgudGVzdCh0ZXh0KSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhlIHBhc3NlZCB0ZXh0IGlzIGEgVVJMXG4gICAqIEBwYXJhbSB0ZXh0IC0gVGhlIHRleHQgdG8gdGVzdFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBwYXNzZWQgdGV4dCBpcyBhIFVSTFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpc1VybCh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoVVJMX1JFR0VYLnRlc3QodGV4dCkgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoZSBwYXNzZWQgdGV4dCBpcyBhIHppcCBjb2RlXG4gICAqIEBwYXJhbSB0ZXh0IC0gVGhlIHRleHQgdG8gdGVzdFxuICAgKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBwYXNzZWQgdGV4dCBpcyBhIHppcCBjb2RlXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGlzWmlwQ29kZSh0ZXh0OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoWklQX0NPREVfUkVHRVgudGVzdCh0ZXh0KSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19
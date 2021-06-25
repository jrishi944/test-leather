/**
 * A regular expression utility
 */
export declare class RegexUtil {
    /**
     * Determine if the passed string is an ISO date
     * @param text - The text to test
     * @returns True if the passed text is an ISO date
     */
    static isIsoDate(text: string): boolean;
    /**
     * Determine if the passed string is a latitude
     * @param text - The text to test
     * @returns True if the passed text is a latitude
     */
    static isLatitude(text: string): boolean;
    /**
     * Determine if the passed string is a longitude
     * @param text - The text to test
     * @returns True if the passed text is a longitude
     */
    static isLongitude(text: string): boolean;
    /**
     * Determine if the passed string is a phone number
     * @param text - The text to test
     * @returns True if the passed text is a phone number
     */
    static isPhoneNumber(text: string): boolean;
    /**
     * Determine if the passed string is a strong password
     * @param text - The text to test
     * @returns True if the passed text is a strong password
     */
    static isStrongPassword(text: string): boolean;
    /**
     * Determine if the passed text is a URL
     * @param text - The text to test
     * @returns True if the passed text is a URL
     */
    static isUrl(text: string): boolean;
    /**
     * Determine if the passed text is a zip code
     * @param text - The text to test
     * @returns True if the passed text is a zip code
     */
    static isZipCode(text: string): boolean;
}

import { FormControl } from '@angular/forms';
export declare const validateStrongPassword: (control: FormControl) => {
    lowerCase: {
        invalid: boolean;
    };
    upperCase?: undefined;
    number?: undefined;
    specialCharacter?: undefined;
    minLength?: undefined;
    maxLength?: undefined;
    invalidPassword?: undefined;
} | {
    upperCase: {
        invalid: boolean;
    };
    lowerCase?: undefined;
    number?: undefined;
    specialCharacter?: undefined;
    minLength?: undefined;
    maxLength?: undefined;
    invalidPassword?: undefined;
} | {
    number: {
        invalid: boolean;
    };
    lowerCase?: undefined;
    upperCase?: undefined;
    specialCharacter?: undefined;
    minLength?: undefined;
    maxLength?: undefined;
    invalidPassword?: undefined;
} | {
    specialCharacter: {
        invalid: boolean;
    };
    lowerCase?: undefined;
    upperCase?: undefined;
    number?: undefined;
    minLength?: undefined;
    maxLength?: undefined;
    invalidPassword?: undefined;
} | {
    minLength: {
        invalid: boolean;
    };
    lowerCase?: undefined;
    upperCase?: undefined;
    number?: undefined;
    specialCharacter?: undefined;
    maxLength?: undefined;
    invalidPassword?: undefined;
} | {
    maxLength: {
        invalid: boolean;
    };
    lowerCase?: undefined;
    upperCase?: undefined;
    number?: undefined;
    specialCharacter?: undefined;
    minLength?: undefined;
    invalidPassword?: undefined;
} | {
    lowerCase?: undefined;
    upperCase?: undefined;
    number?: undefined;
    specialCharacter?: undefined;
    minLength?: undefined;
    maxLength?: undefined;
    invalidPassword?: undefined;
} | {
    invalidPassword: {
        invalid: boolean;
    };
    lowerCase?: undefined;
    upperCase?: undefined;
    number?: undefined;
    specialCharacter?: undefined;
    minLength?: undefined;
    maxLength?: undefined;
};

export var validateStrongPassword = function (control) {
    try {
        var value = control.value;
        if (/(?=.*[a-z])/.test(value) === false) {
            return {
                lowerCase: {
                    invalid: true
                }
            };
        }
        if (/(?=.*[A-Z])/.test(value) === false) {
            return {
                upperCase: {
                    invalid: true
                }
            };
        }
        if (/(?=.*[0-9])/.test(value) === false) {
            return {
                number: {
                    invalid: true
                }
            };
        }
        if (/(?=.[@%/'"!#,~&;`_<>\:\.\^\$\*\+\-\?\(\)\[\]\{\}\\\|])/.test(value) ===
            false) {
            return {
                specialCharacter: {
                    invalid: true
                }
            };
        }
        var stringValue = value;
        if (value.length < 8) {
            return {
                minLength: {
                    invalid: true
                }
            };
        }
        if (value.length > 20) {
            return {
                maxLength: {
                    invalid: true
                }
            };
        }
        return {};
    }
    catch (error) {
        return {
            invalidPassword: {
                invalid: true
            }
        };
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Ryb25nLXBhc3N3b3JkLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL3V0aWwvdmFsaWRhdG9ycy9zdHJvbmctcGFzc3dvcmQudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxJQUFNLHNCQUFzQixHQUFHLFVBQUMsT0FBb0I7SUFDekQsSUFBSTtRQUNGLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFNUIsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUN2QyxPQUFPO2dCQUNMLFNBQVMsRUFBRTtvQkFDVCxPQUFPLEVBQUUsSUFBSTtpQkFDZDthQUNGLENBQUM7U0FDSDtRQUNELElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLEVBQUU7WUFDdkMsT0FBTztnQkFDTCxTQUFTLEVBQUU7b0JBQ1QsT0FBTyxFQUFFLElBQUk7aUJBQ2Q7YUFDRixDQUFDO1NBQ0g7UUFDRCxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQ3ZDLE9BQU87Z0JBQ0wsTUFBTSxFQUFFO29CQUNOLE9BQU8sRUFBRSxJQUFJO2lCQUNkO2FBQ0YsQ0FBQztTQUNIO1FBQ0QsSUFDRSx3REFBd0QsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3BFLEtBQUssRUFDTDtZQUNBLE9BQU87Z0JBQ0wsZ0JBQWdCLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxJQUFJO2lCQUNkO2FBQ0YsQ0FBQztTQUNIO1FBQ0QsSUFBTSxXQUFXLEdBQVcsS0FBSyxDQUFDO1FBQ2xDLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDcEIsT0FBTztnQkFDTCxTQUFTLEVBQUU7b0JBQ1QsT0FBTyxFQUFFLElBQUk7aUJBQ2Q7YUFDRixDQUFDO1NBQ0g7UUFDRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFO1lBQ3JCLE9BQU87Z0JBQ0wsU0FBUyxFQUFFO29CQUNULE9BQU8sRUFBRSxJQUFJO2lCQUNkO2FBQ0YsQ0FBQztTQUNIO1FBQ0QsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTztZQUNMLGVBQWUsRUFBRTtnQkFDZixPQUFPLEVBQUUsSUFBSTthQUNkO1NBQ0YsQ0FBQztLQUNIO0FBQ0gsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZVN0cm9uZ1Bhc3N3b3JkID0gKGNvbnRyb2w6IEZvcm1Db250cm9sKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdmFsdWUgPSBjb250cm9sLnZhbHVlO1xuXG4gICAgaWYgKC8oPz0uKlthLXpdKS8udGVzdCh2YWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsb3dlckNhc2U6IHtcbiAgICAgICAgICBpbnZhbGlkOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIGlmICgvKD89LipbQS1aXSkvLnRlc3QodmFsdWUpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXBwZXJDYXNlOiB7XG4gICAgICAgICAgaW52YWxpZDogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoLyg/PS4qWzAtOV0pLy50ZXN0KHZhbHVlKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG51bWJlcjoge1xuICAgICAgICAgIGludmFsaWQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgLyg/PS5bQCUvJ1wiISMsfiY7YF88PlxcOlxcLlxcXlxcJFxcKlxcK1xcLVxcP1xcKFxcKVxcW1xcXVxce1xcfVxcXFxcXHxdKS8udGVzdCh2YWx1ZSkgPT09XG4gICAgICBmYWxzZVxuICAgICkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3BlY2lhbENoYXJhY3Rlcjoge1xuICAgICAgICAgIGludmFsaWQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgc3RyaW5nVmFsdWU6IHN0cmluZyA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPCA4KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtaW5MZW5ndGg6IHtcbiAgICAgICAgICBpbnZhbGlkOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh2YWx1ZS5sZW5ndGggPiAyMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWF4TGVuZ3RoOiB7XG4gICAgICAgICAgaW52YWxpZDogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGludmFsaWRQYXNzd29yZDoge1xuICAgICAgICBpbnZhbGlkOiB0cnVlXG4gICAgICB9XG4gICAgfTtcbiAgfVxufTtcbiJdfQ==
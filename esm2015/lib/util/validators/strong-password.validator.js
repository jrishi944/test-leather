export const validateStrongPassword = (control) => {
    try {
        const value = control.value;
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
        const stringValue = value;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Ryb25nLXBhc3N3b3JkLnZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xlYXRoZXJtYW4tYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsibGliL3V0aWwvdmFsaWRhdG9ycy9zdHJvbmctcGFzc3dvcmQudmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFHLENBQUMsT0FBb0IsRUFBRSxFQUFFO0lBQzdELElBQUk7UUFDRixNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBRTVCLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLEVBQUU7WUFDdkMsT0FBTztnQkFDTCxTQUFTLEVBQUU7b0JBQ1QsT0FBTyxFQUFFLElBQUk7aUJBQ2Q7YUFDRixDQUFDO1NBQ0g7UUFDRCxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQ3ZDLE9BQU87Z0JBQ0wsU0FBUyxFQUFFO29CQUNULE9BQU8sRUFBRSxJQUFJO2lCQUNkO2FBQ0YsQ0FBQztTQUNIO1FBQ0QsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUN2QyxPQUFPO2dCQUNMLE1BQU0sRUFBRTtvQkFDTixPQUFPLEVBQUUsSUFBSTtpQkFDZDthQUNGLENBQUM7U0FDSDtRQUNELElBQ0Usd0RBQXdELENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNwRSxLQUFLLEVBQ0w7WUFDQSxPQUFPO2dCQUNMLGdCQUFnQixFQUFFO29CQUNoQixPQUFPLEVBQUUsSUFBSTtpQkFDZDthQUNGLENBQUM7U0FDSDtRQUNELE1BQU0sV0FBVyxHQUFXLEtBQUssQ0FBQztRQUNsQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLE9BQU87Z0JBQ0wsU0FBUyxFQUFFO29CQUNULE9BQU8sRUFBRSxJQUFJO2lCQUNkO2FBQ0YsQ0FBQztTQUNIO1FBQ0QsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTtZQUNyQixPQUFPO2dCQUNMLFNBQVMsRUFBRTtvQkFDVCxPQUFPLEVBQUUsSUFBSTtpQkFDZDthQUNGLENBQUM7U0FDSDtRQUNELE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU87WUFDTCxlQUFlLEVBQUU7Z0JBQ2YsT0FBTyxFQUFFLElBQUk7YUFDZDtTQUNGLENBQUM7S0FDSDtBQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVTdHJvbmdQYXNzd29yZCA9IChjb250cm9sOiBGb3JtQ29udHJvbCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHZhbHVlID0gY29udHJvbC52YWx1ZTtcblxuICAgIGlmICgvKD89LipbYS16XSkvLnRlc3QodmFsdWUpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG93ZXJDYXNlOiB7XG4gICAgICAgICAgaW52YWxpZDogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoLyg/PS4qW0EtWl0pLy50ZXN0KHZhbHVlKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVwcGVyQ2FzZToge1xuICAgICAgICAgIGludmFsaWQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKC8oPz0uKlswLTldKS8udGVzdCh2YWx1ZSkgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBudW1iZXI6IHtcbiAgICAgICAgICBpbnZhbGlkOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChcbiAgICAgIC8oPz0uW0AlLydcIiEjLH4mO2BfPD5cXDpcXC5cXF5cXCRcXCpcXCtcXC1cXD9cXChcXClcXFtcXF1cXHtcXH1cXFxcXFx8XSkvLnRlc3QodmFsdWUpID09PVxuICAgICAgZmFsc2VcbiAgICApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNwZWNpYWxDaGFyYWN0ZXI6IHtcbiAgICAgICAgICBpbnZhbGlkOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHN0cmluZ1ZhbHVlOiBzdHJpbmcgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUubGVuZ3RoIDwgOCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWluTGVuZ3RoOiB7XG4gICAgICAgICAgaW52YWxpZDogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAodmFsdWUubGVuZ3RoID4gMjApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1heExlbmd0aDoge1xuICAgICAgICAgIGludmFsaWQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBpbnZhbGlkUGFzc3dvcmQ6IHtcbiAgICAgICAgaW52YWxpZDogdHJ1ZVxuICAgICAgfVxuICAgIH07XG4gIH1cbn07XG4iXX0=
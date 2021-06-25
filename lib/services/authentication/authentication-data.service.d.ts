import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BaseDataService } from '../base-data/base-data.service';
import { Secure } from '../../enums/secure.enum';
import { ErrorDialogService } from '../../dialogs/error/error-dialog.service';
import { LoginRequest } from '../../models/authentication/login-request.model';
import { BaseUser } from '../../models/base-user/base-user.model';
import { BaseNewUserRequest } from '../../models/base-user/base-new-user-request.model';
import { ILeathermanAppConfig } from '../../config/app.config';
import { AuthenticationDetails } from '../../models/authentication/authentication-details.model';
/**
 * A service for communicating with the server's authentication endpoints
 */
import * as ɵngcc0 from '@angular/core';
export declare class AuthenticationDataService extends BaseDataService {
    /**
     * Constructor
     * @param config - The app config object
     * @param errorDialogService - A reference to the error dialog service
     * @param router - A reference to the router
     * @param httpClient - A reference to the HTTP client
     */
    constructor(config: ILeathermanAppConfig, errorDialogService: ErrorDialogService, router: Router, httpClient: HttpClient);
    authenticate<T extends LoginRequest>(loginRequest: T): Promise<AuthenticationDetails>;
    /**
     * Register a new user
     * @param newUserRequest - A new user request object
     * @param secure - An enum indicating whether the endpoint is secure
     */
    register<T extends BaseNewUserRequest, U extends BaseUser>(newUserRequest: T, secure: Secure): Promise<U>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AuthenticationDataService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRpb24tZGF0YS5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0aW9uLWRhdGEuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBCYXNlRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9iYXNlLWRhdGEvYmFzZS1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VjdXJlIH0gZnJvbSAnLi4vLi4vZW51bXMvc2VjdXJlLmVudW0nO1xuaW1wb3J0IHsgRXJyb3JEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZGlhbG9ncy9lcnJvci9lcnJvci1kaWFsb2cuc2VydmljZSc7XG5pbXBvcnQgeyBMb2dpblJlcXVlc3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXV0aGVudGljYXRpb24vbG9naW4tcmVxdWVzdC5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlVXNlciB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLXVzZXIvYmFzZS11c2VyLm1vZGVsJztcbmltcG9ydCB7IEJhc2VOZXdVc2VyUmVxdWVzdCB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLXVzZXIvYmFzZS1uZXctdXNlci1yZXF1ZXN0Lm1vZGVsJztcbmltcG9ydCB7IElMZWF0aGVybWFuQXBwQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2FwcC5jb25maWcnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25EZXRhaWxzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLWRldGFpbHMubW9kZWwnO1xuLyoqXG4gKiBBIHNlcnZpY2UgZm9yIGNvbW11bmljYXRpbmcgd2l0aCB0aGUgc2VydmVyJ3MgYXV0aGVudGljYXRpb24gZW5kcG9pbnRzXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEF1dGhlbnRpY2F0aW9uRGF0YVNlcnZpY2UgZXh0ZW5kcyBCYXNlRGF0YVNlcnZpY2Uge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIGNvbmZpZyAtIFRoZSBhcHAgY29uZmlnIG9iamVjdFxuICAgICAqIEBwYXJhbSBlcnJvckRpYWxvZ1NlcnZpY2UgLSBBIHJlZmVyZW5jZSB0byB0aGUgZXJyb3IgZGlhbG9nIHNlcnZpY2VcbiAgICAgKiBAcGFyYW0gcm91dGVyIC0gQSByZWZlcmVuY2UgdG8gdGhlIHJvdXRlclxuICAgICAqIEBwYXJhbSBodHRwQ2xpZW50IC0gQSByZWZlcmVuY2UgdG8gdGhlIEhUVFAgY2xpZW50XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBJTGVhdGhlcm1hbkFwcENvbmZpZywgZXJyb3JEaWFsb2dTZXJ2aWNlOiBFcnJvckRpYWxvZ1NlcnZpY2UsIHJvdXRlcjogUm91dGVyLCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KTtcbiAgICBhdXRoZW50aWNhdGU8VCBleHRlbmRzIExvZ2luUmVxdWVzdD4obG9naW5SZXF1ZXN0OiBUKTogUHJvbWlzZTxBdXRoZW50aWNhdGlvbkRldGFpbHM+O1xuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGEgbmV3IHVzZXJcbiAgICAgKiBAcGFyYW0gbmV3VXNlclJlcXVlc3QgLSBBIG5ldyB1c2VyIHJlcXVlc3Qgb2JqZWN0XG4gICAgICogQHBhcmFtIHNlY3VyZSAtIEFuIGVudW0gaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBlbmRwb2ludCBpcyBzZWN1cmVcbiAgICAgKi9cbiAgICByZWdpc3RlcjxUIGV4dGVuZHMgQmFzZU5ld1VzZXJSZXF1ZXN0LCBVIGV4dGVuZHMgQmFzZVVzZXI+KG5ld1VzZXJSZXF1ZXN0OiBULCBzZWN1cmU6IFNlY3VyZSk6IFByb21pc2U8VT47XG59XG4iXX0=
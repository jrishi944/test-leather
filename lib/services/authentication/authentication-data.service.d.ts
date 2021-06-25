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
}

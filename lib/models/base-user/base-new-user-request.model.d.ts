import { TestArtifact } from '../../enums/test-artifact.enum';
/**
 * A class to store new user request data. This class serves as the base class for other user new user request
 * classes.
 */
export declare class BaseNewUserRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    roles: string[];
    /** Boolean indicating whether the object is a test artifact */
    testArtifact?: boolean;
    /**
     * @param firstName - The user's first name
     * @param lastName - The user's last name
     * @param email - THe user's email address
     * @param password - The user's password
     * @param roles - THe user's roles
     * @param testArtifact - An enum indicating whether the new user request is a test artifact
     */
    constructor(firstName: string, lastName: string, email: string, password: string, roles: string[], testArtifact?: TestArtifact);
}

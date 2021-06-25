import { TestArtifact } from '../../enums/test-artifact.enum';
/**
 * The base model class
 */
export declare class BaseModel {
    /** The ID of the model */
    _id: string;
    /** The date the model was creatd */
    dateCreated: Date;
    /** The date the model was last modified */
    dateModified: Date;
    /** Boolean indicating whether the model is a test artifact */
    testArtifact?: boolean;
    /**
     * @param testArtifact - Enum indicating whether the model is a test artifact
     */
    constructor(testArtifact?: TestArtifact);
}

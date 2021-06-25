import { of } from 'rxjs';
import { DialogResult } from '../../../models/dialog/dialog-result.model';
import { DialogButton } from '../../../enums/dialog-button.enum';
export class MatDialogMock {
    constructor() {
        this.dialogResult = new DialogResult(DialogButton.OK);
    }
    open() {
        return {
            afterClosed: () => of(this.dialogResult)
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRpYWxvZy5tb2NrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGVhdGhlcm1hbi1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvdXRpbC90ZXN0L21kLWRpYWxvZy9tYXQtZGlhbG9nLm1vY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWpFLE1BQU0sT0FBTyxhQUFhO0lBQTFCO1FBQ1MsaUJBQVksR0FBRyxJQUFJLFlBQVksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7SUFPMUQsQ0FBQztJQUxRLElBQUk7UUFDVCxPQUFPO1lBQ0wsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3pDLENBQUM7SUFDSixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRGlhbG9nUmVzdWx0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2RpYWxvZy9kaWFsb2ctcmVzdWx0Lm1vZGVsJztcbmltcG9ydCB7IERpYWxvZ0J1dHRvbiB9IGZyb20gJy4uLy4uLy4uL2VudW1zL2RpYWxvZy1idXR0b24uZW51bSc7XG5cbmV4cG9ydCBjbGFzcyBNYXREaWFsb2dNb2NrIHtcbiAgcHVibGljIGRpYWxvZ1Jlc3VsdCA9IG5ldyBEaWFsb2dSZXN1bHQoRGlhbG9nQnV0dG9uLk9LKTtcblxuICBwdWJsaWMgb3BlbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWZ0ZXJDbG9zZWQ6ICgpID0+IG9mKHRoaXMuZGlhbG9nUmVzdWx0KVxuICAgIH07XG4gIH1cbn1cbiJdfQ==
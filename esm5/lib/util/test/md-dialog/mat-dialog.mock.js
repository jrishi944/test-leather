import { of } from 'rxjs';
import { DialogResult } from '../../../models/dialog/dialog-result.model';
import { DialogButton } from '../../../enums/dialog-button.enum';
var MatDialogMock = /** @class */ (function () {
    function MatDialogMock() {
        this.dialogResult = new DialogResult(DialogButton.OK);
    }
    MatDialogMock.prototype.open = function () {
        var _this = this;
        return {
            afterClosed: function () { return of(_this.dialogResult); }
        };
    };
    return MatDialogMock;
}());
export { MatDialogMock };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRpYWxvZy5tb2NrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGVhdGhlcm1hbi1ib290c3RyYXAvIiwic291cmNlcyI6WyJsaWIvdXRpbC90ZXN0L21kLWRpYWxvZy9tYXQtZGlhbG9nLm1vY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRWpFO0lBQUE7UUFDUyxpQkFBWSxHQUFHLElBQUksWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQU8xRCxDQUFDO0lBTFEsNEJBQUksR0FBWDtRQUFBLGlCQUlDO1FBSEMsT0FBTztZQUNMLFdBQVcsRUFBRSxjQUFNLE9BQUEsRUFBRSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBckIsQ0FBcUI7U0FDekMsQ0FBQztJQUNKLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFSRCxJQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERpYWxvZ1Jlc3VsdCB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9kaWFsb2cvZGlhbG9nLXJlc3VsdC5tb2RlbCc7XG5pbXBvcnQgeyBEaWFsb2dCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9lbnVtcy9kaWFsb2ctYnV0dG9uLmVudW0nO1xuXG5leHBvcnQgY2xhc3MgTWF0RGlhbG9nTW9jayB7XG4gIHB1YmxpYyBkaWFsb2dSZXN1bHQgPSBuZXcgRGlhbG9nUmVzdWx0KERpYWxvZ0J1dHRvbi5PSyk7XG5cbiAgcHVibGljIG9wZW4oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFmdGVyQ2xvc2VkOiAoKSA9PiBvZih0aGlzLmRpYWxvZ1Jlc3VsdClcbiAgICB9O1xuICB9XG59XG4iXX0=
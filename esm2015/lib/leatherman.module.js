import * as ɵngcc0 from '@angular/core';
var LeathermanModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BaseComponent } from './components/base-component/base.component';
import { SafeHtmlPipe } from './util/pipes/safe-html.pipe';
import { LeathermanAppConfigInjectionToken } from './config/injection-tokens/leatherman-app-config.injection-token';
import { ErrorDialogServiceInjectionToken } from './config/injection-tokens/error-dialog-service.injection-token';
import { ConfirmDialogServiceInjectionToken } from './config/injection-tokens/confirm-dialog-service.injection-token';
import { AngularModule } from './angular.module';
import { ErrorDialogComponent } from './dialogs/error/error-dialog/error-dialog.component';
import { ConfirmDialogComponent } from './dialogs/confirm/confirm-dialog/confirm-dialog.component';
let LeathermanModule = LeathermanModule_1 = 
/**
 * A module declaring and exporting Leatherman components
 */
class LeathermanModule {
    static forRoot(appConfig, errorDialogService, confirmDialogService) {
        return {
            ngModule: LeathermanModule_1,
            providers: [
                {
                    provide: LeathermanAppConfigInjectionToken,
                    useValue: appConfig
                },
                {
                    provide: ErrorDialogServiceInjectionToken,
                    useClass: errorDialogService
                },
                {
                    provide: ConfirmDialogServiceInjectionToken,
                    useClass: confirmDialogService
                }
            ]
        };
    }
};
LeathermanModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LeathermanModule });
LeathermanModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LeathermanModule_Factory(t) { return new (t || LeathermanModule)(); }, imports: [[AngularModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LeathermanModule, { declarations: function () { return [SafeHtmlPipe,
        BaseComponent,
        ErrorDialogComponent,
        ConfirmDialogComponent]; }, imports: function () { return [AngularModule]; }, exports: function () { return [SafeHtmlPipe,
        BaseComponent,
        ErrorDialogComponent,
        ConfirmDialogComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LeathermanModule, [{
        type: NgModule,
        args: [{
                imports: [AngularModule],
                declarations: [
                    SafeHtmlPipe,
                    BaseComponent,
                    ErrorDialogComponent,
                    ConfirmDialogComponent,
                ],
                exports: [
                    SafeHtmlPipe,
                    BaseComponent,
                    ErrorDialogComponent,
                    ConfirmDialogComponent,
                ]
            }]
    }], null, null); })();
export { LeathermanModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhdGhlcm1hbi5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIm5nOi9sZWF0aGVybWFuLWJvb3RzdHJhcC9saWIvbGVhdGhlcm1hbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUNsSCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN0SCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDM0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFxQm5HLElBQWEsZ0JBQWdCO0FBSDdCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsTUFBYSxnQkFBZ0I7QUFDN0IsSUFBRSxNQUFNLENBQUMsT0FBTyxDQUNaLFNBQStCLEVBQy9CLGtCQUF1QixFQUN2QixvQkFBeUI7QUFDMUIsUUFDQyxPQUFPO0FBQ1gsWUFBTSxRQUFRLEVBQUUsa0JBQWdCO0FBQ2hDLFlBQU0sU0FBUyxFQUFFO0FBQ2pCLGdCQUFRO0FBQ1Isb0JBQVUsT0FBTyxFQUFFLGlDQUFpQztBQUNwRCxvQkFBVSxRQUFRLEVBQUUsU0FBUztBQUM3QixpQkFBUztBQUNULGdCQUFRO0FBQ1Isb0JBQVUsT0FBTyxFQUFFLGdDQUFnQztBQUNuRCxvQkFBVSxRQUFRLEVBQUUsa0JBQWtCO0FBQ3RDLGlCQUFTO0FBQ1QsZ0JBQVE7QUFDUixvQkFBVSxPQUFPLEVBQUUsa0NBQWtDO0FBQ3JELG9CQUFVLFFBQVEsRUFBRSxvQkFBb0I7QUFDeEMsaUJBQVM7QUFDVCxhQUFPO0FBQ1AsU0FBSyxDQUFDO0FBQ04sSUFBRSxDQUFDO0FBQ0gsQ0FBQyxDQUFBO0FBeEJZLGdCQUFnQix5Q0FuQjVCLFFBQVEsQ0FBQyxVQUNSO01BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUN4QixZQUFZLEVBQUUsY0FDWixZQUFZLGNBQ1osYUFBYSxjQUNiLG9CQUFvQixjQUNwQjtBQUFzQixXQUN2QixVQUNELE9BQU8sRUFBRSxjQUNQLFlBQVksY0FDWixhQUFhLGNBQ2Isb0JBQW9CLGNBQ3BCLHNCQUFzQjtFQUN2QixNQUNGLENBQUMsS0FFRjs7a0NBRUcsSUFDVSxnQkFBZ0IsQ0F3QjVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0Q7QUFBQyxTQXpCWSxnQkFBZ0I7QUFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmFzZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9iYXNlLWNvbXBvbmVudC9iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTYWZlSHRtbFBpcGUgfSBmcm9tICcuL3V0aWwvcGlwZXMvc2FmZS1odG1sLnBpcGUnO1xuaW1wb3J0IHsgSUxlYXRoZXJtYW5BcHBDb25maWcgfSBmcm9tICcuL2NvbmZpZy9hcHAuY29uZmlnJztcbmltcG9ydCB7IExlYXRoZXJtYW5BcHBDb25maWdJbmplY3Rpb25Ub2tlbiB9IGZyb20gJy4vY29uZmlnL2luamVjdGlvbi10b2tlbnMvbGVhdGhlcm1hbi1hcHAtY29uZmlnLmluamVjdGlvbi10b2tlbic7XG5pbXBvcnQgeyBFcnJvckRpYWxvZ1NlcnZpY2VJbmplY3Rpb25Ub2tlbiB9IGZyb20gJy4vY29uZmlnL2luamVjdGlvbi10b2tlbnMvZXJyb3ItZGlhbG9nLXNlcnZpY2UuaW5qZWN0aW9uLXRva2VuJztcbmltcG9ydCB7IENvbmZpcm1EaWFsb2dTZXJ2aWNlSW5qZWN0aW9uVG9rZW4gfSBmcm9tICcuL2NvbmZpZy9pbmplY3Rpb24tdG9rZW5zL2NvbmZpcm0tZGlhbG9nLXNlcnZpY2UuaW5qZWN0aW9uLXRva2VuJztcbmltcG9ydCB7IEFuZ3VsYXJNb2R1bGUgfSBmcm9tICcuL2FuZ3VsYXIubW9kdWxlJztcbmltcG9ydCB7IEVycm9yRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2dzL2Vycm9yL2Vycm9yLWRpYWxvZy9lcnJvci1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IENvbmZpcm1EaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZ3MvY29uZmlybS9jb25maXJtLWRpYWxvZy9jb25maXJtLWRpYWxvZy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQW5ndWxhck1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNhZmVIdG1sUGlwZSxcbiAgICBCYXNlQ29tcG9uZW50LFxuICAgIEVycm9yRGlhbG9nQ29tcG9uZW50LFxuICAgIENvbmZpcm1EaWFsb2dDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTYWZlSHRtbFBpcGUsXG4gICAgQmFzZUNvbXBvbmVudCxcbiAgICBFcnJvckRpYWxvZ0NvbXBvbmVudCxcbiAgICBDb25maXJtRGlhbG9nQ29tcG9uZW50LFxuICBdXG59KVxuXG4vKipcbiAqIEEgbW9kdWxlIGRlY2xhcmluZyBhbmQgZXhwb3J0aW5nIExlYXRoZXJtYW4gY29tcG9uZW50c1xuICovXG5leHBvcnQgY2xhc3MgTGVhdGhlcm1hbk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KFxuICAgIGFwcENvbmZpZzogSUxlYXRoZXJtYW5BcHBDb25maWcsXG4gICAgZXJyb3JEaWFsb2dTZXJ2aWNlOiBhbnksXG4gICAgY29uZmlybURpYWxvZ1NlcnZpY2U6IGFueVxuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPExlYXRoZXJtYW5Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IExlYXRoZXJtYW5Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IExlYXRoZXJtYW5BcHBDb25maWdJbmplY3Rpb25Ub2tlbixcbiAgICAgICAgICB1c2VWYWx1ZTogYXBwQ29uZmlnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBFcnJvckRpYWxvZ1NlcnZpY2VJbmplY3Rpb25Ub2tlbixcbiAgICAgICAgICB1c2VDbGFzczogZXJyb3JEaWFsb2dTZXJ2aWNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDb25maXJtRGlhbG9nU2VydmljZUluamVjdGlvblRva2VuLFxuICAgICAgICAgIHVzZUNsYXNzOiBjb25maXJtRGlhbG9nU2VydmljZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19
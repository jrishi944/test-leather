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
var LeathermanModule = /** @class */ (function () {
    /**
     * A module declaring and exporting Leatherman components
     */
    function LeathermanModule() {
    }
    LeathermanModule_1 = LeathermanModule;
    LeathermanModule.forRoot = function (appConfig, errorDialogService, confirmDialogService) {
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
    };
    var LeathermanModule_1;
    LeathermanModule = LeathermanModule_1 = __decorate([
        NgModule({
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
        })
        /**
         * A module declaring and exporting Leatherman components
         */
    ], LeathermanModule);
    return LeathermanModule;
}());
export { LeathermanModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhdGhlcm1hbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sZWF0aGVybWFuLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImxpYi9sZWF0aGVybWFuLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUNsSCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN0SCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDM0YsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFxQm5HO0lBSEE7O09BRUc7SUFDSDtJQXdCQSxDQUFDO3lCQXhCWSxnQkFBZ0I7SUFDcEIsd0JBQU8sR0FBZCxVQUNFLFNBQStCLEVBQy9CLGtCQUF1QixFQUN2QixvQkFBeUI7UUFFekIsT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBZ0I7WUFDMUIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxpQ0FBaUM7b0JBQzFDLFFBQVEsRUFBRSxTQUFTO2lCQUNwQjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsZ0NBQWdDO29CQUN6QyxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3QjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsa0NBQWtDO29CQUMzQyxRQUFRLEVBQUUsb0JBQW9CO2lCQUMvQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0lBdkJVLGdCQUFnQjtRQW5CNUIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ3hCLFlBQVksRUFBRTtnQkFDWixZQUFZO2dCQUNaLGFBQWE7Z0JBQ2Isb0JBQW9CO2dCQUNwQixzQkFBc0I7YUFDdkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixhQUFhO2dCQUNiLG9CQUFvQjtnQkFDcEIsc0JBQXNCO2FBQ3ZCO1NBQ0YsQ0FBQztRQUVGOztXQUVHO09BQ1UsZ0JBQWdCLENBd0I1QjtJQUFELHVCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F4QlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnQvYmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2FmZUh0bWxQaXBlIH0gZnJvbSAnLi91dGlsL3BpcGVzL3NhZmUtaHRtbC5waXBlJztcbmltcG9ydCB7IElMZWF0aGVybWFuQXBwQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvYXBwLmNvbmZpZyc7XG5pbXBvcnQgeyBMZWF0aGVybWFuQXBwQ29uZmlnSW5qZWN0aW9uVG9rZW4gfSBmcm9tICcuL2NvbmZpZy9pbmplY3Rpb24tdG9rZW5zL2xlYXRoZXJtYW4tYXBwLWNvbmZpZy5pbmplY3Rpb24tdG9rZW4nO1xuaW1wb3J0IHsgRXJyb3JEaWFsb2dTZXJ2aWNlSW5qZWN0aW9uVG9rZW4gfSBmcm9tICcuL2NvbmZpZy9pbmplY3Rpb24tdG9rZW5zL2Vycm9yLWRpYWxvZy1zZXJ2aWNlLmluamVjdGlvbi10b2tlbic7XG5pbXBvcnQgeyBDb25maXJtRGlhbG9nU2VydmljZUluamVjdGlvblRva2VuIH0gZnJvbSAnLi9jb25maWcvaW5qZWN0aW9uLXRva2Vucy9jb25maXJtLWRpYWxvZy1zZXJ2aWNlLmluamVjdGlvbi10b2tlbic7XG5pbXBvcnQgeyBBbmd1bGFyTW9kdWxlIH0gZnJvbSAnLi9hbmd1bGFyLm1vZHVsZSc7XG5pbXBvcnQgeyBFcnJvckRpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vZGlhbG9ncy9lcnJvci9lcnJvci1kaWFsb2cvZXJyb3ItZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maXJtRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9kaWFsb2dzL2NvbmZpcm0vY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0FuZ3VsYXJNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTYWZlSHRtbFBpcGUsXG4gICAgQmFzZUNvbXBvbmVudCxcbiAgICBFcnJvckRpYWxvZ0NvbXBvbmVudCxcbiAgICBDb25maXJtRGlhbG9nQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU2FmZUh0bWxQaXBlLFxuICAgIEJhc2VDb21wb25lbnQsXG4gICAgRXJyb3JEaWFsb2dDb21wb25lbnQsXG4gICAgQ29uZmlybURpYWxvZ0NvbXBvbmVudCxcbiAgXVxufSlcblxuLyoqXG4gKiBBIG1vZHVsZSBkZWNsYXJpbmcgYW5kIGV4cG9ydGluZyBMZWF0aGVybWFuIGNvbXBvbmVudHNcbiAqL1xuZXhwb3J0IGNsYXNzIExlYXRoZXJtYW5Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICBhcHBDb25maWc6IElMZWF0aGVybWFuQXBwQ29uZmlnLFxuICAgIGVycm9yRGlhbG9nU2VydmljZTogYW55LFxuICAgIGNvbmZpcm1EaWFsb2dTZXJ2aWNlOiBhbnlcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxMZWF0aGVybWFuTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBMZWF0aGVybWFuTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBMZWF0aGVybWFuQXBwQ29uZmlnSW5qZWN0aW9uVG9rZW4sXG4gICAgICAgICAgdXNlVmFsdWU6IGFwcENvbmZpZ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogRXJyb3JEaWFsb2dTZXJ2aWNlSW5qZWN0aW9uVG9rZW4sXG4gICAgICAgICAgdXNlQ2xhc3M6IGVycm9yRGlhbG9nU2VydmljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ29uZmlybURpYWxvZ1NlcnZpY2VJbmplY3Rpb25Ub2tlbixcbiAgICAgICAgICB1c2VDbGFzczogY29uZmlybURpYWxvZ1NlcnZpY2VcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==
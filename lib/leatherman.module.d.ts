import { ModuleWithProviders } from '@angular/core';
import { ILeathermanAppConfig } from './config/app.config';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './util/pipes/safe-html.pipe';
import * as ɵngcc2 from './components/base-component/base.component';
import * as ɵngcc3 from './dialogs/error/error-dialog/error-dialog.component';
import * as ɵngcc4 from './dialogs/confirm/confirm-dialog/confirm-dialog.component';
import * as ɵngcc5 from './angular.module';
export declare class LeathermanModule {
    static forRoot(appConfig: ILeathermanAppConfig, errorDialogService: any, confirmDialogService: any): ModuleWithProviders<LeathermanModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<LeathermanModule, [typeof ɵngcc1.SafeHtmlPipe, typeof ɵngcc2.BaseComponent, typeof ɵngcc3.ErrorDialogComponent, typeof ɵngcc4.ConfirmDialogComponent], [typeof ɵngcc5.AngularModule], [typeof ɵngcc1.SafeHtmlPipe, typeof ɵngcc2.BaseComponent, typeof ɵngcc3.ErrorDialogComponent, typeof ɵngcc4.ConfirmDialogComponent]>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<LeathermanModule>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhdGhlcm1hbi5tb2R1bGUuZC50cyIsInNvdXJjZXMiOlsibGVhdGhlcm1hbi5tb2R1bGUuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJTGVhdGhlcm1hbkFwcENvbmZpZyB9IGZyb20gJy4vY29uZmlnL2FwcC5jb25maWcnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTGVhdGhlcm1hbk1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoYXBwQ29uZmlnOiBJTGVhdGhlcm1hbkFwcENvbmZpZywgZXJyb3JEaWFsb2dTZXJ2aWNlOiBhbnksIGNvbmZpcm1EaWFsb2dTZXJ2aWNlOiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPExlYXRoZXJtYW5Nb2R1bGU+O1xufVxuIl19
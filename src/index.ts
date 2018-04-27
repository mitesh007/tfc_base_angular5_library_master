import {APP_INITIALIZER, InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TFCBaseComponent} from './tfcbase_sample.component';
import {TFCBaseDirective} from './tfcbase_sample.directive';
import {TFCBasePipe} from './tfcbase_sample.pipe';
import {TFCBaseService} from './tfcbase_sample.service';

export * from './tfcbase_sample.component';
export * from './tfcbase_sample.directive';
export * from './tfcbase_sample.pipe';
export * from './tfcbase_sample.service';

export const OPTIONS = new InjectionToken<string>('OPTIONS');

export interface TFCBaseModuleOptions {
  config: {}
}

export function initialize(options: any) {
  console.log('Angular library has started with this options: ', options);
  return function () {
  };
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TFCBaseComponent,
    TFCBaseDirective,
    TFCBasePipe
  ],
  exports: [
    TFCBaseComponent,
    TFCBaseDirective,
    TFCBasePipe
  ]
})
export class TFCBaseModule {
  static forRoot(options?: TFCBaseModuleOptions): ModuleWithProviders {
    return {
      ngModule: TFCBaseModule,
      providers: [
        {provide: OPTIONS, useValue: options},
        {
          provide: APP_INITIALIZER,
          useFactory: initialize,
          deps: [OPTIONS],
          multi: true
        },
        TFCBaseService
      ]
    };
  }
}

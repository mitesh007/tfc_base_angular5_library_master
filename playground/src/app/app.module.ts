import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TFCBaseModule} from 'tfc-base-angular5-library';
import {AppComponent} from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    TFCBaseModule.forRoot({
      config: {
        say: 'hello'
      }
    })
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}

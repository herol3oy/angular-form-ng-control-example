import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from './components/input/input.component';
import {ErrorMessageComponent} from "./components/error-message/error-message.component";

@NgModule({
  declarations: [
    AppComponent,
    ErrorMessageComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

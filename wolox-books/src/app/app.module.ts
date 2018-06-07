import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from  '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './screens/sign-up/sign-up.component';
import { LogInComponent } from './screens/log-in/log-in.component';
import { AuthComponent } from './screens/auth/auth.component';
import { LocalStorageService } from './services/local-storage.service'

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

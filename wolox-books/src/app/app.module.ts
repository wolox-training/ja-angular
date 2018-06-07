import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from  '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './screens/unauth/screens/sign-up/sign-up.component'
import { LogInComponent } from './screens/unauth/screens/log-in/log-in.component'
import { AuthComponent } from './screens/auth/auth.component';
import { LocalStorageService } from './services/local-storage.service';
import { BookListComponent } from './screens/book-list/book-list.component';
import { UnauthComponent } from './screens/unauth/unauth.component'
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    AuthComponent,
    BookListComponent,
    UnauthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    LocalStorageService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

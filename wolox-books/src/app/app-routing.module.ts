import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './screens/unauth/screens/sign-up/sign-up.component'
import { LogInComponent } from './screens/unauth/screens/log-in/log-in.component'
import { AuthComponent } from './screens/auth/auth.component'
import { UnauthComponent } from './screens/unauth/unauth.component';
import { BookListComponent } from './screens/auth/screens/book-list/book-list.component';
import { AuthGuard } from './auth.guard';
import { UnauthGuard } from './unauth.guard';

const routes: Routes = [
  {
    path: '',
    component: UnauthComponent,
    canActivate: [UnauthGuard],
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LogInComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent        
      }
    ]
  },
  {
    path: 'books',
    component: AuthComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: BookListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

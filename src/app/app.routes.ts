import { Routes } from '@angular/router';
import { LoginComponent } from './auth-user/login/login.component';
import { RegisterComponent } from './auth-user/register/register.component';
import { ForgotPasswordComponent } from './auth-user/forgot-password/forgot-password.component';
import { UserComponent } from './auth-user/user/user.component';

export const routes: Routes = [
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path : 'register',
        component : RegisterComponent
    },
    {
        path : 'forgot-password',
        component : ForgotPasswordComponent
    },
    {
        path : 'user',
        component : UserComponent
    }
];

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotpagefoundComponent } from './shared/notpagefound/notpagefound.component';
import { RegisterComponent } from './login/register.component';

const appRoutes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', component: NotpagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash : true});

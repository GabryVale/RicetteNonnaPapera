import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { PageDetailComponent } from './page-detail/page-detail.component';


export const routes: Routes = [
{
    path: '',
    redirectTo: '/Homepage',
    pathMatch: 'full'
},
{
    path: 'Homepage', 
    component: NavbarComponent,
},
{
    path: 'Login',
    component: LoginComponent
},
{
    path: 'Homepage/:tipoPiatto',
    component: PageDetailComponent
}];

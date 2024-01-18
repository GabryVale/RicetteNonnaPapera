import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageRicettaComponent } from './page-ricetta/page-ricetta.component';


export const routes: Routes = [
{
    path: '',
    redirectTo: '/Homepage',
    pathMatch: 'full'
},
{
    path: 'Homepage', 
    component: HomepageComponent,
},
{
    path: 'Homepage/:tipoPagina',
    component: PageDetailComponent
},
{
    path: 'Login',
    component: LoginComponent
},
{
    path: 'Homepage/:tipoPagina/:id',
    component: PageRicettaComponent
}];

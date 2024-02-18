import { Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ToursComponent } from './Components/tours/tours.component';
import { ViewToursComponent } from './Components/view-tours/view-tours.component';


export const routes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'create-tour', component: ToursComponent},
    {path: 'view-tours', component: ViewToursComponent}
];

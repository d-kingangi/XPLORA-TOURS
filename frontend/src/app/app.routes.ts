import { Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ToursComponent } from './Components/tours/tours.component';
import { ViewToursComponent } from './Components/view-tours/view-tours.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { LandingComponent } from './Components/landing/landing.component';
import { AvailableToursComponent } from './Components/available-tours/available-tours.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
export const routes: Routes = [
    {path:'', component: LandingComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'view-adventures', component: AvailableToursComponent},
    { path: 'admin', component: AdminDashboardComponent},
    { path: 'view-tours', component: ViewToursComponent },
    { path: 'add-tour', component: ToursComponent },
    {path:'**', component: NotfoundComponent},   
];

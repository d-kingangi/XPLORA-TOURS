import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ToursComponent } from './Components/tours/tours.component';
import { ViewToursComponent } from './Components/view-tours/view-tours.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { LandingComponent } from './Components/landing/landing.component';
import { AvailableToursComponent } from './Components/available-tours/available-tours.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { UsersComponent } from './Components/users/users.component';
import { ViewBookingComponent } from './Components/view-booking/view-booking.component';
import { UpdateTourComponent } from "./Components/update-tour/update-tour.component";

export const routes: Routes = [
    {path:'', component: LandingComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'view-adventures', component: AvailableToursComponent},
    {path: 'admin', component: AdminDashboardComponent},
    {path: 'view-tours', component: ViewToursComponent },
    {path: 'add-tour', component: ToursComponent },
    {path: 'view-users', component: UsersComponent},
    {path: 'add-users', component: UsersComponent},
    {path: 'view-bookings', component: ViewBookingComponent},
    {path: 'update-tour/:id', component: UpdateTourComponent}, 
    {path:'**', component: NotfoundComponent},   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }



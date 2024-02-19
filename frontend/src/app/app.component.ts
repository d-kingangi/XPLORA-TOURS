import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { AvailableToursComponent } from './Components/available-tours/available-tours.component';
import { ToursComponent } from './Components/tours/tours.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AdminDashboardComponent,  FooterComponent, AvailableToursComponent, ToursComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'frontend';
}

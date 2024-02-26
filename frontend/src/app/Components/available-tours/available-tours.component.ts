import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { tours, deletedtours } from '../../Interfaces/tours.interface';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { bookings } from '../../Interfaces/bookings.interface';
import { AuthService } from '../../services/auth.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-available-tours',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterLink],
  templateUrl: './available-tours.component.html',
  styleUrl: './available-tours.component.css'
})

export class AvailableToursComponent implements OnInit {

  tours: tours[] = [];
  deletedtours: deletedtours[] = []
  isAdmin: boolean = false;

  constructor(private api: ApiService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.fetchtours();
    this.fetchdeletedtours();
    
    // Check if the current user is an admin
    // this.authService.isAdmin().subscribe(isAdmin => {
    //   this.isAdmin = isAdmin;
    // });
  }

  fetchtours() {
    this.api.gettours().subscribe(res => {
      console.log(res);
      this.tours = res.tours;
      console.log(this.tours);
    });
  }

  fetchdeletedtours() {
    this.api.getdeletedtours().subscribe(res => {
      console.log(res);
      this.deletedtours = res.tours;
      console.log(this.deletedtours);
    });
  }

  deletetour(tourId: string) {
    this.api.deletetour(tourId).subscribe(res => {
      console.log(res);
      this.fetchtours();
    });
  }

  bookNow(tour: any) {
    const token = this.authService.readToken; 
  
    this.authService.readToken(token).subscribe((currentUser: any) => {
      console.log('Current User:', currentUser);
  
      if (currentUser && currentUser.info && currentUser.info.userId) {
        const userId = currentUser.info.userId;
        const tourId = tour.tourId;
        const bookingDate = new Date().toISOString();
        const newBooking: bookings = { userId, tourId, bookingDate };
  
        console.log(newBooking);
  
        this.api.createBooking(newBooking).subscribe(res => {
          console.log(res);
        });
      } else {
        console.error('User not logged in.');
        this.router.navigate(['/login']);
      }
    });
  }

  updateTour() {}

  recoverTour() {}
}


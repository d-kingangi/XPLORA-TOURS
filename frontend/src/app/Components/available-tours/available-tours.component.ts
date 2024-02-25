import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  deletedtours: deletedtours[] =[]

  isAdmin: boolean = false;

    constructor(private api: ApiService, private authService: AuthService){
      this.fetchtours()
    }

    getUserDetails(): Observable<any> {
      const storedUser = localStorage.getItem('user');
      console.log('Stored User:', storedUser);

      if (storedUser) {
        const user = JSON.parse(storedUser);
        return of(user);
      } else {
        return of({});
      }
    }
    
    ngOnInit() {
      const isAdminString = localStorage.getItem('isAdmin');
      this.isAdmin = isAdminString ? JSON.parse(isAdminString) : false;
  
      this.fetchtours();
    }

    fetchtours(){
      this.api.gettours().subscribe(res=>{
        console.log(res);
  
        this.tours = res.tours
        
        console.log(this.tours)
      })
    }

    fetchdeletedtours(){
      this.api.getdeletedtours().subscribe(res=>{
        console.log(res);
  
        this.deletedtours = res.tours
        
        console.log(this.deletedtours)
      })
    }

    deletetour(tourId: string) {
      this.api.deletetour(tourId).subscribe(res=>{
        console.log(res);

        this.fetchtours()
      })
    }

    bookNow(tour: any) {
      this.authService.getUserDetails().subscribe((currentUser: any) => {
        console.log(currentUser);
        
        if (currentUser && currentUser.userId) {
          const userId = currentUser.userId;
          const tourId = tour.tourId;
          const bookingDate = new Date().toISOString();
    
          const newBooking: bookings = { userId, tourId, bookingDate };

          console.log(newBooking);
          
    
          this.api.createBooking(newBooking).subscribe(res => {
            console.log(res);
          });
        } else {
          console.error('User not logged in.');
        }
      });
    }

    updateTour(){}
  }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { tours } from '../../Interfaces/tours.interface';
import { bookings } from '../../Interfaces/bookings.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ CommonModule, NavbarComponent, RouterLink, RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})

export class LandingComponent {
  title:string = 'View'
  subtitle:string = 'Kenya(Maasai Mara, Samburu, Mt Elgon, Ol Pegeta)'

  tours: tours[] = []

    constructor(private api: ApiService, private authService: AuthService){
      this.fetchtours()
    }  

    fetchtours(){
      this.api.gettours().subscribe(res=>{
        console.log(res);
  
        this.tours = res.tours || []
        
        console.log(this.tours)
      })
    }

    bookNow(tour: any) {
      this.authService.getUserDetails().subscribe(currentUser => {
        if (currentUser) {
          const userId = currentUser.userId;
          const tourId = tour.tourId;
          const bookingDate = new Date().toISOString();
    
          const newBooking: bookings = { userId, tourId, bookingDate };
    
          this.api.createBooking(newBooking).subscribe(res => {
            console.log(res);
          });
        } else {
          console.error('User not logged in.');
        }
      });
    }
    
    deletetour(tourId: string) {
      this.api.deletetour(tourId).subscribe(res=>{
        console.log(res);

        this.fetchtours()
      })
    }
    
        
}

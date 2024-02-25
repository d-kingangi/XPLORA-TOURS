import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { bookings } from '../../Interfaces/bookings.interface';

@Component({
  selector: 'app-view-booking',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './view-booking.component.html',
  styleUrl: './view-booking.component.css'
})
export class ViewBookingComponent {

  bookings: bookings[] =[];
  // tourData: any[] = []; 

  constructor(private api: ApiService){
    this.fetchBookings()
  }

  fetchBookings(){
    this.api.getallbookings().subscribe(res=>{
      console.log(res);
      this.bookings = res.bookings
    })
  }

  deleteBooking(id:string){
    this.api.deletebooking(id).subscribe(res=>{
      console.log(res);

      this.fetchBookings
      
    })
  }

}

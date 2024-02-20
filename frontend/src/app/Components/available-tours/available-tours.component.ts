import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tour } from '../../Interfaces/tours.interface';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-available-tours',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterLink],
  templateUrl: './available-tours.component.html',
  styleUrl: './available-tours.component.css'
})

export class AvailableToursComponent {


  tours: tour[] = [

    // constructor(private api: ApiService){
    //   this.fetchUsers()
    // }  

    // fetchtours(){
    //   this.api.gettours().subscribe(res=>{
    //     console.log(res);
  
    //     this.tours = res.tours
    //   })
    // }

    {
      description:"10 Days Olpegeta Safari: A stunning wildlife safari",
      price: 450.00,
      startDate: "24-04-2024",
      endDate:"30-04-24",
      image:"../../../assets/pexels-donald-kamau-7467680.jpg"
    },
    {
      description:"10 Days Olpegeta Safari: A stunning wildlife safari",
      price: 450.00,
      startDate: "24-04-2024",
      endDate:"30-04-24",
      image:"../../../assets/pexels-donald-kamau-7467680.jpg"
    },
    {
      description:"10 Days Olpegeta Safari: A stunning wildlife safari",
      price: 450.00,
      startDate: "24-04-2024",
      endDate:"30-04-24",
      image:"../../../assets/pexels-donald-kamau-7467680.jpg"
    },
    {
      description:"10 Days Olpegeta Safari: A stunning wildlife safari",
      price: 450.00,
      startDate: "24-04-2024",
      endDate:"30-04-24",
      image:"../../../assets/pexels-donald-kamau-7467680.jpg"
    },
    {
      description:"10 Days Olpegeta Safari: A stunning wildlife safari",
      price: 450.00,
      startDate: "24-04-2024",
      endDate:"30-04-24",
      image:"../../../assets/pexels-donald-kamau-7467680.jpg"
    },
    {
      description:"10 Days Olpegeta Safari: A stunning wildlife safari",
      price: 450.00,
      startDate: "24-04-2024",
      endDate:"30-04-24",
      image:"../../../assets/pexels-donald-kamau-7467680.jpg"
    }
  ]

  bookNow(tour: any) {
    console.log('Booking now:', tour);
}

}

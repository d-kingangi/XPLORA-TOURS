import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { tour } from '../../Interfaces/tours.interface';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'


@Component({
  selector: 'app-available-tours',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './available-tours.component.html',
  styleUrl: './available-tours.component.css'
})

export class AvailableToursComponent {


  tours: tour[] = [
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
}

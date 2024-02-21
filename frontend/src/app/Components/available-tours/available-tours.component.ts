import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tours } from '../../Interfaces/tours.interface';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-available-tours',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterLink],
  templateUrl: './available-tours.component.html',
  styleUrl: './available-tours.component.css'
})

export class AvailableToursComponent {

  tours: tours[] = []

    constructor(private api: ApiService){
      this.fetchtours()
    }  

    fetchtours(){
      this.api.gettours().subscribe(res=>{
        console.log(res);
  
        this.tours = res.tours
        
        console.log(this.tours)
      })
    }

  bookNow(tour: any) {
    console.log('Booking now:', tour);
}
}

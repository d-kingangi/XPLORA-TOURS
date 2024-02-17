import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
// import { BackgroundService } from '../../services/background.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})

export class LandingComponent {
  title:string = 'View'
  subtitle:string = 'Kenya'

  // constructor(private backgroundService: BackgroundService){}

  // setBackgroundImage() {
  //   const imageUrl = '../../../assets/pexels-donald-kamau-7467680.jpg'; 
  //   this.backgroundService.changeBackgroundImage(imageUrl);
  // }

  // whoweare: string = 'Who We Are'
  // whoweare-sub: string = 'At Quix Travels, we offer a diverse range of travel experiences, including tours around Kenya that showcase the rich cultural and natural wonders of our beautiful country. Explore exotic places, hidden gems, and breathtaking landscapes, all carefully curated to provide you with unforgettable memories.'
}

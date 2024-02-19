import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavbarComponent, RouterLink, RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})

export class LandingComponent {
  title:string = 'View'
  subtitle:string = 'Kenya(Maasai Mara, Samburu, Mt Elgon, Ol Pegeta)'


  //who are section

  // whoweareTitle = "Who We Are"

  // whoweareSub = "At Quix Travels, we offer a diverse range of travel experiences, including tours around Kenya that showcase the rich cultural and natural wonders of our beautiful country. Explore exotic places, hidden gems, and breathtaking landscapes, all carefully curated to provide you with unforgettable memories."

  // whoweareimg = ""

}

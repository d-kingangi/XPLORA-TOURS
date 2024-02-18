import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { WhoweareComponent } from '../whoweare/whoweare.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavbarComponent, RouterLink, RouterOutlet, WhoweareComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})

export class LandingComponent {
  title:string = 'View'
  subtitle:string = 'Kenya'


  //who are section
  
  whoweare-title = "Who We Are"

  whoweare-sub = "At Quix Travels, we offer a diverse range of travel experiences, including tours around Kenya that showcase the rich cultural and natural wonders of our beautiful country. Explore exotic places, hidden gems, and breathtaking landscapes, all carefully curated to provide you with unforgettable memories."

  whoweareimg = ""

}

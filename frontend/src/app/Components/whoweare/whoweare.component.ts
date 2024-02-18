import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-whoweare',
  standalone: true,
  imports: [],
  templateUrl: './whoweare.component.html',
  styleUrl: './whoweare.component.css'
})
export class WhoweareComponent{
  @Input('') whoweareTitle: string
  @Input('') whoweareSub: string;

  
  // whoweareTitle = "Who We Are"

  // whoweareSub = "At Quix Travels, we offer a diverse range of travel experiences, including tours around Kenya that showcase the rich cultural and natural wonders of our beautiful country. Explore exotic places, hidden gems, and breathtaking landscapes, all carefully curated to provide you with unforgettable memories."

  // whoweareimg = ""

}

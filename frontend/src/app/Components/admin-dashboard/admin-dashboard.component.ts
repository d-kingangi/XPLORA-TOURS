import { Component, Renderer2 } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  constructor(private renderer: Renderer2) {}

  toggleAccordion(sectionId: string) {
    const content = document.getElementById(sectionId);
    const button = document.querySelector(`[onclick="toggleAccordion('${sectionId}')]`);

    if(content){
      if (content.style.display === 'block') {
        this.renderer.setStyle(content, 'display', 'none');
        this.renderer.removeClass(button, 'active');
      } else {
        this.renderer.setStyle(content, 'display', 'block');
        this.renderer.addClass(button, 'active');
      }
    }
  }
}

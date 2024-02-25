import { Component, Renderer2,  ComponentFactoryResolver, Injector, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { UsersComponent } from '../users/users.component';
import { ToursComponent } from '../tours/tours.component'

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [NavbarComponent,  RouterModule, UsersComponent, ToursComponent, CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  title:string = 'Users'

  constructor(
    private renderer: Renderer2,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {}

  loadComponent(component: any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = componentFactory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as any).rootNodes[0] as HTMLElement;
    
    const container = document.getElementById('dynamic-component-container');
    if (container) {
      container.innerHTML = '';
      container.appendChild(domElem);
    }
  }

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

    switch (sectionId) {
      case 'view-users':
        this.loadComponent(UsersComponent);
        break;
      case 'add-tours':
        this.loadComponent(ToursComponent);
        break;
      // Add cases for other sections...
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import  { tours } from '../../Interfaces/tours.interface'
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NavbarComponent], 
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})

export class ToursComponent {
  title = 'Create Tour'

  tourForm: FormGroup

  constructor(private fb: FormBuilder,  private apiService: ApiService) {
    this.tourForm = this.fb.group({
      destination: ['', Validators.required],
      content: ['', Validators.required],
      price: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  } 
  
  onSubmit() {
    const details: tours =  this.tourForm.value
    console.log(details);

    this.apiService.createTour(details).subscribe(
      (res)=>{
        console.log(res);
        if(res.message){
          this.success(res.message);
        } else if (res.error){
          console.log('It exists', res.error);      
        }  
      },
      (error)=>{
        console.error('Create tour error:', error)
      }
    );
  }

  private success(message: string){
    console.log('Created tour successfully:', message)
    this.tourForm.reset()
  }

  
}

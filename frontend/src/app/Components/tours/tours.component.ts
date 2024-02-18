import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})

export class ToursComponent {
  title = 'Create Tour'

  tourForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.tourForm = this.fb.group({
      destination: ['', Validators.required],
      content: ['', Validators.required],
      price: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  } 
  
  onSubmit() {
    console.log('Form submitted:', this.tourForm.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { tours, updatedtour } from '../../Interfaces/tours.interface';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-update-tour',
  standalone: true,
  imports: [NavbarComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './update-tour.component.html',
  styleUrl: './update-tour.component.css'
})

export class UpdateTourComponent implements OnInit {
  updateTourForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private apiService: ApiService) {
    this.updateTourForm = this.formBuilder.group({
      destination: ['', Validators.required],
      content: ['', Validators.required],
      price: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const tourId = this.route.snapshot.params['id']; 
    this.apiService.getonetour(tourId).subscribe(
      (response) => {
        const tourDetails = response.tour[0];
        this.updateTourForm.patchValue({
          destination: tourDetails.destination,
          content: tourDetails.content,
          price: tourDetails.price,
          startDate: tourDetails.startDate,
          endDate: tourDetails.endDate
        });
      },
      (error) => {
        console.error('Error fetching tour details:', error);
      }
    );
  }

  onSubmit(): void {
    const tourId = this.route.snapshot.params['id'];
    const updatedTourDetails = this.updateTourForm.value;

    this.apiService.updatetour(tourId, updatedTourDetails).subscribe(
      (response) => {
        this.successMessage = response.message;
        this.errorMessage = null;

        this.router.navigate(['/view-tours']);
      },
      (error) => {
        this.errorMessage = error.error.message;
        this.successMessage = null;
      }
    );
  }
}

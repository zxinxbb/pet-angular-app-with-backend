import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PetService } from '../pet.service';
import { ActivatedRoute } from '@angular/router';
import { PetLocation } from '../pet.location';

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './Pet-details.component.html',
  styleUrls: ['./Pet-details.component.css']
})
export class PetDetailsComponent  {
  route: ActivatedRoute = inject(ActivatedRoute);
  petService = inject(PetService);
  petLocation: PetLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
constructor (){
    const petDetailsId = (this.route.snapshot.params['id']);
console.log(petDetailsId)
    this.petService.getPetById(petDetailsId).then((petLocation) => {console.log(petLocation)
      this.petLocation = petLocation;
      });
  }

  submitApplication(): void {
    this.petService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? ''
    );
  }
}

import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PetService } from '../pet.service';
import { ActivatedRoute } from '@angular/router';
import { PetLocation } from '../pet.location';

@Component({
  selector: 'app-Pet-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './Pet-details.component.html',
  styleUrls: ['./Pet-details.component.css']
})
export class PetDetailsComponent  {
  route: ActivatedRoute = inject(ActivatedRoute);
  petService = inject(PetService);
  petLocation: PetLocation | undefined;

  constructor() {
  const petId = parseInt(this.route.snapshot.params['petId'], 10);

  this.petService
    .getPetsById(petId)
    .then((petLocation) => {
      this.petLocation = petLocation;
    });
}
}

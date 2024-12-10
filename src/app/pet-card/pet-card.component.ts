// pet-card.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { PetLocation } from '../pet.location';  // Make sure this import is correct
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent implements OnInit {
  @Input() petLocation!: PetLocation;

  ngOnInit(): void {
    // Optional: Add initialization logic if needed
    console.log(this.petLocation); // Log the input for debugging
  }
}


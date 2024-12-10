// home.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { PetLocation } from '../pet.location';
import { PetService } from '../pet.service';
import { CommonModule } from '@angular/common';
import { PetCardComponent } from '../pet-card/pet-card.component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
  imports: [CommonModule, PetCardComponent]
})
export class HomeComponent implements OnInit {
  petsList: PetLocation[] = [];
  petService = inject(PetService);

  constructor() {
    // Automatically load pets when HomeComponent is created
    this.loadAllPets();
  }

  async loadAllPets(): Promise<void> {
    try {
      // Fetch pets from the service
      this.petsList = await this.petService.getAllPets();
    } catch (error) {
      console.error('Error loading pet locations:', error);
    }
  }

  ngOnInit(): void {
    // Any additional initialization if needed
  }
}


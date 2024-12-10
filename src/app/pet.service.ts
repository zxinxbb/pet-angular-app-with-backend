import { Injectable } from '@angular/core';
import { PetLocation } from './pet.location';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private url = 'http://localhost:3000/pet'; // Correct API endpoint for "pet"

  // Fetch all pets
  async getAllPets(): Promise<PetLocation[]> {
    try {
      const response = await fetch(this.url);

      if (!response.ok) {
        throw new Error(`Failed to fetch pets: ${response.statusText}`);
      }

      const data: PetLocation[] = await response.json();
      return data ?? []; // Return empty array if no data
    } catch (error) {
      console.error('Error fetching pets:', error);
      return []; // Return an empty array in case of error
    }
  }

  // Fetch pets by location ID
  async getPetsByLocation(locationId: number): Promise<PetLocation[]> {
    try {
      const response = await fetch(`${this.url}?locationId=${locationId}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch pets for location ID ${locationId}: ${response.statusText}`);
      }

      const data: PetLocation[] = await response.json();
      return data ?? []; // Return empty array if no data
    } catch (error) {
      console.error(`Error fetching pets for location ID ${locationId}:`, error);
      return []; // Return an empty array in case of error
    }
  }
  async getPetsById(id: number): Promise<PetLocation| undefined> {
    try {
      const response = await fetch(`${this.url}/${id}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch location with ID ${id}: ${response.statusText}`);
      }

      const data: PetLocation = await response.json();
      return data ?? undefined; // Return undefined if no data found
    } catch (error) {
      console.error(`Error fetching todo location with ID ${id}:`, error);
      return undefined; // Return undefined in case of error
    }
  }

  // Submit a new pet
  async submitApplication(
    petId: number,
    petName: string,
    breedId: number,
    typeId: number,
    locationId: number,
    userId: number
  ): Promise<void> {
    try {
      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          petId: petId,
          petName: petName,
          breedId: breedId,
          typeId: typeId,
          locationId: locationId,
          userId: userId,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit application: ${response.statusText}`);
      }

      console.log('Application submitted successfully');
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  }
}


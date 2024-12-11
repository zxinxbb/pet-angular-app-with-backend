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
  async getPetById(petId: number): Promise<PetLocation | undefined> {
    const response = await fetch(`http://localhost:3000/pet/${petId}`);

    if (!response.ok) {
      console.error(`Pet with ID ${petId} not found.`);
      return undefined; // Or handle the error accordingly
    }

    return await response.json();
  }


  // Submit a new pet
  async submitPet(
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


async submitApplication(firstName: string, lastName: string) {
  // tslint:disable-next-line
  console.log(firstName, lastName);
}

}



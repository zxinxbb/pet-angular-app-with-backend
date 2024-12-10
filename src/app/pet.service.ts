import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private url = 'http://localhost:3000/locations'; // API endpoint

  // Fetch all pets by locations
  // Fetch a single todo location by ID
  async getpetsbyLocation(locationId: number): Promise<petLocation | undefined> {
    try {
      const response = await fetch(`${this.url}/${locationId}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch location with ID ${locationId}: ${response.statusText}`);
      }

      const data: petLocation = await response.json();
      return data ?? undefined; // Return undefined if no data found
    } catch (error) {
      console.error(`Error fetching todo location with ID ${locationId}:`, error);
      return undefined; // Return undefined in case of error
    }
  }

  // Submit a new application (e.g., POST a new todo location)
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

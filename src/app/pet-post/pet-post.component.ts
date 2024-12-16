import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-post',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pet-post.component.html',
  styleUrls: ['./pet-post.component.css'],
})
export class PetPostComponent {
  petService = inject(PetService);

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    imagePath: new FormControl<File | null>(null),  // File input for image

    
  });
  submissionSuccess: boolean = false;

  onImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.form.patchValue({
        imagePath: file,
      });
    }
  }

  async onSubmit() {
    // Check if form is valid before submission
    if (this.form.invalid) {
      console.error('Form is invalid');
      return;
    }

    // Extract values from the form
    const { name, description, age, type, imagePath } = this.form.value;

    // Log the form values to ensure they're being captured
    console.log('Form Values:', this.form.value);

    // Create a new FormData object to send the form data and the image file
    const formData = new FormData();

    // Append the form data
    formData.append('name', name || '');
    formData.append('description', description || '');
    formData.append('age', age != null ? age.toString() : '');
    formData.append('type', type || '');

    // Append the image file (only if it exists)
    if (imagePath) {
      formData.append('image', imagePath, imagePath.name);
    }

    // Send the form data (including image) to the service
    await this.petService.submitPet(formData);
    this.submissionSuccess = true;

    // Reset the form after a successful submission
    this.form.reset();

    // Optionally, hide the success message after a few seconds
    setTimeout(() => {
      this.submissionSuccess = false;
    }, 3000); // Hide message after 3 seconds
  }
}

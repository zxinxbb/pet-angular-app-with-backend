import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// import { SlackService } from './slack.service';

@Component({
  selector: 'app-pet-post',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl:'./pet-post.component.html',
  styleUrls: ['./pet-post.component.css'],
})
export class PetPostComponent {
onImageChange: any;
  constructor () {}
  form = new FormGroup({
    userName: new FormControl('', Validators.required),
    petName: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
}
  );
  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}


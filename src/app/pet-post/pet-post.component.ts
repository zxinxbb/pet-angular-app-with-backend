import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
// import { SlackService } from './slack.service';

@Component({
  selector: 'app-pet-post',
  template: `
  <p> this works</p>
    <!-- <button (click)="postPetToSlack()">Post Pet to Slack</button> -->
  `
})
export class PetPostComponent {
  constructor () {}
  form = new FormGroup({
    userName: new FormControl('', Validators.required),
    petName: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
}
  )
}

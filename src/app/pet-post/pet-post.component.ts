
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
  // constructor(private slackService: SlackService) {}

  // postPetToSlack() {
  //   const message = 'Meet Fluffy, my adorable cat looking for a weekend buddy! 🐱';
  //   this.slackService.sendMessageToSlack(message).subscribe(response => {
  //     console.log('Message posted to Slack:', response);
  //   });
  }


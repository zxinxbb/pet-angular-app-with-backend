import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SlackService {

  private slackWebhookUrl = 'https://hooks.slack.com/services/your/webhook/url';  // Use your actual webhook URL

  constructor(private http: HttpClient) { }

  sendMessageToSlack(message: string): Observable<any> {
    const payload = {
      text: message,
      channel: "#general",  // Optionally specify a channel
    };

    return this.http.post(this.slackWebhookUrl, payload);
  }
}

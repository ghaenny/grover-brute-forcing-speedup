import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'symmetric-encyrption';
  messages: any[] = [];
  userKey: string = 'keys';
  hackerKey: string = '';

  userKeyChanged(key: string) {
    console.log('User Key Changed: ', key);
    this.userKey = key;
    this.messages = [];
  }
}

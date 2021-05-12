import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'symmetric-encyrption';
  messages: any[] = [];
  userKey: string = '0010010010100111';
  hackerKey: string = '';

  userKeyChanged(key: string) {
    this.userKey = key;
    this.messages = [];
  }
}

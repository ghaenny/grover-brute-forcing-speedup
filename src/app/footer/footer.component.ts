import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input()
  messages: any[];

  @Input()
  userKey: string;

  @Input()
  hackerKey: string;

  @Output()
  userKeyChanged: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  hackerKeyChanged: EventEmitter<string> = new EventEmitter<string>();

  setUserKey(key: string) {
    this.userKeyChanged.emit(key);
  }

  setHackerKey(key: string) {
    this.hackerKeyChanged.emit(key);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

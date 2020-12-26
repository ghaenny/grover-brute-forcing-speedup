import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-brute-force',
  templateUrl: './brute-force.component.html',
  styleUrls: ['./brute-force.component.scss']
})
export class BruteForceComponent implements OnInit {
  @Input()
  messages: any[];

  @Input()
  hackerKey: string;

  @Output()
  hackerKeyChanged: EventEmitter<string> = new EventEmitter<string>();

  setHackerKey(key: string) {
    this.hackerKeyChanged.emit(key);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

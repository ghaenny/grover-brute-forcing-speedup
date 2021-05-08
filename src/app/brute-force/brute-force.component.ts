import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-brute-force',
  templateUrl: './brute-force.component.html',
  styleUrls: ['./brute-force.component.scss']
})
export class BruteForceComponent implements OnInit {
  status = 100;

  @Input()
  messages: any[];

  @Input()
  hackerKey: string;

  @Input()
  userKey: string;

  @Output()
  hackerKeyChanged: EventEmitter<string> = new EventEmitter<string>();

  setHackerKey(key: string) {
    this.hackerKeyChanged.emit(key);
  }

  bruteForceQuantum() {
    let key = this.userKey.substr(0, this.userKey.length / 2);
    this.bruteForce(key);
  }

  bruteForce(key: string) {
    console.log('Key: ', key);

    this.status = 0;

    let startString = "";
    let endString = "";

    for(let i = 0; i<key.length; i++) {
      if (i < key.length-1)
        startString += '0';
      else
        startString += '1';

      endString += '1';
    }

    let i = parseInt(startString, 2);
    let end = parseInt(endString, 2);
    let maxSteps = Math.pow(2, key.length);

    console.log(startString, endString);
    console.log('Start: ', i);
    console.log('End: ', end);
    console.log('Max steps: ', maxSteps);

    if (key === startString) {
      this.bruteForceDone(startString);
    }
    else {
      this.bruteForceStep(i, key, end - 1, 1, key.length,
      (k) => this.bruteForceDone(k),
      (s) => this.status = Math.round(s / maxSteps * 100))
    }
  }

  bruteForceStep(i: number, key: string, end: number, step: number, length: number, done, update) {
    if (step % 10 === 0) {
      update(step);
    }

    // console.log(this.dec2bin(i, length));

    setTimeout(() => {
      if (this.dec2bin(i, length) != key && i <= end) {
        i++;
        step++;
        this.bruteForceStep(i, key, end, step, length, done, update);
      } else if (this.dec2bin(i, length) == key) {
        done(key);
      }
    }, 0);
  }

  bruteForceDone(result) {
    this.status = 100;
    this.hackerKey = result;
    this.hackerKeyChanged.emit(this.hackerKey);

    console.log('result: ', result);
  }

  dec2bin(dec: number, length: number) {
    let bin = (dec >>> 0).toString(2);
    let res = "";

    for(let i = 0; i < length - bin.length; i++) {
      res += "0";
    }

    return res + bin;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

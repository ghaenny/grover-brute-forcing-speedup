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

  async bruteForce() {
    console.log('Brute Force......');
    console.log('User key: ', this.userKey);
    console.log('Hack Key: ', this.hackerKey);

    let key = 'keys';

    let i = parseInt("aaaa", 36);
    let end = parseInt("zzzz", 36);
    console.log('Start: ', i);
    console.log('End: ', end);

    this.status = 0;

    let maxSteps = Math.pow(36, key.length);
    console.log('Max steps: ', maxSteps);
    let result = await this.bruteForceAsync(i, key, end, maxSteps);
    console.log(result);
  }

  bruteForceAsync(i: number, key: string, end: number, maxSteps: number) {
    return new Promise(resolve => {
      this.bruteForceStep(i, key, end, 1, (k) => {
        this.status = 100;
        resolve(k);
      },
      (s) => {
        this.status = Math.round(s / maxSteps * 100);
      });
    });
  }

  bruteForceStep(i: number, key: string, end: number, step: number, done, update) {
    if (step % 10 === 0) {
      update(step);
    }

    setTimeout(() => {
      if (i.toString(36) != key && i <= end) {
        i++;
        step++;
        this.bruteForceStep(i, key, end, step, done, update);
      } else if (i.toString(36) == key) {
        done('Key is: ' + key);
      } else {
        update('Key not found');
      }
    }, 0);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

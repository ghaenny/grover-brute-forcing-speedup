import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-brute-force',
  templateUrl: './brute-force.component.html',
  styleUrls: ['./brute-force.component.scss']
})
export class BruteForceComponent implements OnInit {
  @Input()
  messages: any[];

  @Input()
  privateKeys: any[];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public count: number = 0;
  constructor() {}

  ngOnInit(): void {}

  public counter(): void {
    this.count++;
  }
}

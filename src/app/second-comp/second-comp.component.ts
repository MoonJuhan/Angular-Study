import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.scss'],
})
export class SecondCompComponent implements OnInit {
  constructor() {}
  isShow = false;

  ngOnInit(): void {}

  public onClickShow(): void {
    this.isShow = !this.isShow;
  }
}

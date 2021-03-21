import { Component } from '@angular/core';

const array: Array<String> = ['data0'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Study';
  showArray: Array<String>;

  // Vue.js 2.x의 Created 와 유사
  constructor() {
    console.log('Working');
    this.showArray = array;
  }

  public clickAfterPrint(): void {
    console.log('Btn');
    this._innerFunc();
    console.log(array);
  }

  private _innerFunc() {
    array.push('data' + array.length);
  }
}

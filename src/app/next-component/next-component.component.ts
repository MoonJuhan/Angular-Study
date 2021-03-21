import { Component, OnInit } from '@angular/core';

// 프로젝트 루트 폴더에서 "ng g component 이름" 커맨드를 입력하면 자동으로 컴포넌트 생성 + 모듈 등록이 된다.

@Component({
  selector: 'app-next-component',
  templateUrl: './next-component.component.html',
  styleUrls: ['./next-component.component.scss']
})
export class NextComponentComponent implements OnInit {

  id: String;
  pw: String;

  constructor() { }

  ngOnInit(): void {
  }

  onClickLogin() {
    console.log(this.id, this.pw);
  }

}

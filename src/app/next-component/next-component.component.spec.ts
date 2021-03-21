import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextComponentComponent } from './next-component.component';

describe('NextComponentComponent', () => {
  let component: NextComponentComponent;
  let fixture: ComponentFixture<NextComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

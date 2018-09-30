import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSelectMultipleComponent } from './ngx-select-multiple.component';

describe('NgxSelectMultipleComponent', () => {
  let component: NgxSelectMultipleComponent;
  let fixture: ComponentFixture<NgxSelectMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSelectMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSelectMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

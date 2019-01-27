import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDynamicComponent } from './custom-dynamic.component';

describe('CustomDynamicComponent', () => {
  let component: CustomDynamicComponent;
  let fixture: ComponentFixture<CustomDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedComponentsComponent } from './advanced-components.component';

describe('AdvancedComponentsComponent', () => {
  let component: AdvancedComponentsComponent;
  let fixture: ComponentFixture<AdvancedComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

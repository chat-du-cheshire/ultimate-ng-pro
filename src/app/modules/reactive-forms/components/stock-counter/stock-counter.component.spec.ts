import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCounterComponent } from './stock-counter.component';

describe('StockCounterComponent', () => {
  let component: StockCounterComponent;
  let fixture: ComponentFixture<StockCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockCounterComponent);
    component = fixture.componentInstance;
    component.registerOnChange(() => {});
    component.registerOnTouched(() => {});
    component.min = 0;
    component.max = 2;
    component.step = 1;
    component.value = 0;
    fixture.detectChanges();
  });

  it('should increment correctly', () => {
    component.onIncrement();
    expect(component.value).toEqual(1);
  });

  it('should decrement correctly', () => {
    component.onIncrement();
    expect(component.value).toEqual(1);

    component.onDecrement();
    expect(component.value).toEqual(0);
  });

  it('should decrement correctly', () => {
    component.onIncrement();
    expect(component.value).toEqual(1);

    component.onDecrement();
    expect(component.value).toEqual(0);
  });

  it('should not decrement below the minimum value', () => {
    component.onIncrement();
    expect(component.value).toBe(1);
    component.onDecrement();
    expect(component.value).toBe(0);
    component.onDecrement();
    expect(component.value).toBe(0);
  });

  it('should not increment below the maximum value', () => {
    component.onIncrement();
    component.onIncrement();
    component.onIncrement();
    expect(component.value).toBe(2);
  });
});

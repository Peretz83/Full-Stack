import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCustomerComponent } from './selected-customer.component';

describe('SelectedCustomerComponent', () => {
  let component: SelectedCustomerComponent;
  let fixture: ComponentFixture<SelectedCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

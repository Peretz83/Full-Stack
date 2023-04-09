import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketNavbarComponent } from './ticket-navbar.component';

describe('TicketNavbarComponent', () => {
  let component: TicketNavbarComponent;
  let fixture: ComponentFixture<TicketNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

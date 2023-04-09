import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTicketPageComponent } from './selected-ticket-page.component';

describe('SelectedTicketPageComponent', () => {
  let component: SelectedTicketPageComponent;
  let fixture: ComponentFixture<SelectedTicketPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedTicketPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedTicketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutFieldErrorComponent } from './about-field-error.component';

describe('AboutFieldErrorComponent', () => {
  let component: AboutFieldErrorComponent;
  let fixture: ComponentFixture<AboutFieldErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutFieldErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutFieldErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

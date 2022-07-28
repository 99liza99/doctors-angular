import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDoctorComponent } from './card-doctor.component';

describe('CardDoctorComponent', () => {
  let component: CardDoctorComponent;
  let fixture: ComponentFixture<CardDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

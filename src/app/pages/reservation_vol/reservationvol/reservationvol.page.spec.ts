import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservationvolPage } from './reservationvol.page';

describe('ReservationvolPage', () => {
  let component: ReservationvolPage;
  let fixture: ComponentFixture<ReservationvolPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationvolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

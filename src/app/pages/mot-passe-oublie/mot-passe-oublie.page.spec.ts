import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MotPasseOubliePage } from './mot-passe-oublie.page';

describe('MotPasseOubliePage', () => {
  let component: MotPasseOubliePage;
  let fixture: ComponentFixture<MotPasseOubliePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MotPasseOubliePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

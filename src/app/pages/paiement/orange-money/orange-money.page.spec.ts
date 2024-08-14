import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrangeMoneyPage } from './orange-money.page';

describe('OrangeMoneyPage', () => {
  let component: OrangeMoneyPage;
  let fixture: ComponentFixture<OrangeMoneyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangeMoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

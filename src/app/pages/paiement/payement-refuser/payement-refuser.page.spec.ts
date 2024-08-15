import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PayementRefuserPage } from './payement-refuser.page';

describe('PayementRefuserPage', () => {
  let component: PayementRefuserPage;
  let fixture: ComponentFixture<PayementRefuserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PayementRefuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

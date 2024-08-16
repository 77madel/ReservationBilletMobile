import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformationPassagerPage } from './information-passager.page';

describe('InformationPassagerPage', () => {
  let component: InformationPassagerPage;
  let fixture: ComponentFixture<InformationPassagerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationPassagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

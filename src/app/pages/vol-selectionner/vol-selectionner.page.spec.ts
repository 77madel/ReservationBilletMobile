import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VolSelectionnerPage } from './vol-selectionner.page';

describe('VolSelectionnerPage', () => {
  let component: VolSelectionnerPage;
  let fixture: ComponentFixture<VolSelectionnerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VolSelectionnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

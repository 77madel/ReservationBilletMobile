import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chargement1Page } from './chargement1.page';

describe('Chargement1Page', () => {
  let component: Chargement1Page;
  let fixture: ComponentFixture<Chargement1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Chargement1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

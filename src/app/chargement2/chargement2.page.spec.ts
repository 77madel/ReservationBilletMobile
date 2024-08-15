import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chargement2Page } from './chargement2.page';

describe('Chargement2Page', () => {
  let component: Chargement2Page;
  let fixture: ComponentFixture<Chargement2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Chargement2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

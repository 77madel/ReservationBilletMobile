import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeDesVolsPage } from './liste-des-vols.page';

describe('ListeDesVolsPage', () => {
  let component: ListeDesVolsPage;
  let fixture: ComponentFixture<ListeDesVolsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDesVolsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

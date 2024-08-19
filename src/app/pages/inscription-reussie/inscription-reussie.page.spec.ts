import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InscriptionReussiePage } from './inscription-reussie.page';

describe('InscriptionReussiePage', () => {
  let component: InscriptionReussiePage;
  let fixture: ComponentFixture<InscriptionReussiePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionReussiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

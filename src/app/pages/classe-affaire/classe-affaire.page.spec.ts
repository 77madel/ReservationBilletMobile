import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClasseAffairePage } from './classe-affaire.page';

describe('ClasseAffairePage', () => {
  let component: ClasseAffairePage;
  let fixture: ComponentFixture<ClasseAffairePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseAffairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClasseEconomiquePage } from './classe-economique.page';

describe('ClasseEconomiquePage', () => {
  let component: ClasseEconomiquePage;
  let fixture: ComponentFixture<ClasseEconomiquePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseEconomiquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

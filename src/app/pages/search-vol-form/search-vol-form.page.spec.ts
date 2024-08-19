import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchVolFormPage } from './search-vol-form.page';

describe('SearchVolFormPage', () => {
  let component: SearchVolFormPage;
  let fixture: ComponentFixture<SearchVolFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVolFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

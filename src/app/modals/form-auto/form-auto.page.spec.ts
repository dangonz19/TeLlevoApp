import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormAutoPage } from './form-auto.page';

describe('FormAutoPage', () => {
  let component: FormAutoPage;
  let fixture: ComponentFixture<FormAutoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormAutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

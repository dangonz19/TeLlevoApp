import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PruebasMenuPage } from './pruebas-menu.page';

describe('PruebasMenuPage', () => {
  let component: PruebasMenuPage;
  let fixture: ComponentFixture<PruebasMenuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PruebasMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

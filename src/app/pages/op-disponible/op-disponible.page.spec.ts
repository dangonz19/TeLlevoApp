import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpDisponiblePage } from './op-disponible.page';

describe('OpDisponiblePage', () => {
  let component: OpDisponiblePage;
  let fixture: ComponentFixture<OpDisponiblePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OpDisponiblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

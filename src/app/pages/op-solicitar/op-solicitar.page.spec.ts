import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpSolicitarPage } from './op-solicitar.page';

describe('OpSolicitarPage', () => {
  let component: OpSolicitarPage;
  let fixture: ComponentFixture<OpSolicitarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OpSolicitarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

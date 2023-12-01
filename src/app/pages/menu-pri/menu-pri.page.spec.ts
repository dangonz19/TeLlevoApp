import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuPriPage } from './menu-pri.page';

describe('MenuPriPage', () => {
  let component: MenuPriPage;
  let fixture: ComponentFixture<MenuPriPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuPriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

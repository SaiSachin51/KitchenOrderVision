import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenDisplayScreenComponent } from './kitchen-display-screen.component';

describe('KitchenDisplayScreenComponent', () => {
  let component: KitchenDisplayScreenComponent;
  let fixture: ComponentFixture<KitchenDisplayScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitchenDisplayScreenComponent]
    });
    fixture = TestBed.createComponent(KitchenDisplayScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

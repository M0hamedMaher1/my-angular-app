import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProducts2Component } from './home-products2.component';

describe('HomeProducts2Component', () => {
  let component: HomeProducts2Component;
  let fixture: ComponentFixture<HomeProducts2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeProducts2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeProducts2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

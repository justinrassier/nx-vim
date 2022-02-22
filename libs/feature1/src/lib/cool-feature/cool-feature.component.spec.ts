import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolFeatureComponent } from './cool-feature.component';

describe('CoolFeatureComponent', () => {
  let component: CoolFeatureComponent;
  let fixture: ComponentFixture<CoolFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoolFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

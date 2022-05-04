import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstitutionsComponent } from './constitutions.component';

describe('ConstitutionsComponent', () => {
  let component: ConstitutionsComponent;
  let fixture: ComponentFixture<ConstitutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstitutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

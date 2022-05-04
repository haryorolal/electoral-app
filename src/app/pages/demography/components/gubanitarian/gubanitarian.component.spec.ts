import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GubanitarianComponent } from './gubanitarian.component';

describe('GubanitarianComponent', () => {
  let component: GubanitarianComponent;
  let fixture: ComponentFixture<GubanitarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GubanitarianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GubanitarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

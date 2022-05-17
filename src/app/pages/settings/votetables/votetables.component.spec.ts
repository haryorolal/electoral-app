import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotetablesComponent } from './votetables.component';

describe('VotetablesComponent', () => {
  let component: VotetablesComponent;
  let fixture: ComponentFixture<VotetablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotetablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

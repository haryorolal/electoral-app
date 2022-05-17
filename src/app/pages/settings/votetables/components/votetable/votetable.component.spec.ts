import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotetableComponent } from './votetable.component';

describe('VotetableComponent', () => {
  let component: VotetableComponent;
  let fixture: ComponentFixture<VotetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

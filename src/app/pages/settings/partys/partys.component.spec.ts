import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartysComponent } from './partys.component';

describe('PartyComponent', () => {
  let component: PartysComponent;
  let fixture: ComponentFixture<PartysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

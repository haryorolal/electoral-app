import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionsComponent } from './elections.component';

describe('ElectionComponent', () => {
  let component: ElectionsComponent;
  let fixture: ComponentFixture<ElectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

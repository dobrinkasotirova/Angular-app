import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDashboardComponent } from './image-dashboard.component';

describe('EmployerDashboardComponent', () => {
  let component: ImageDashboardComponent;
  let fixture: ComponentFixture<EmployerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

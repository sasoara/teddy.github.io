import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShufflingCubeComponent } from './shuffling-cube.component';

describe('ShufflingCubeComponent', () => {
  let component: ShufflingCubeComponent;
  let fixture: ComponentFixture<ShufflingCubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShufflingCubeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShufflingCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

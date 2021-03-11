import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseAddComponent } from './use-add.component';

describe('UseAddComponent', () => {
  let component: UseAddComponent;
  let fixture: ComponentFixture<UseAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

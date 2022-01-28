import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasEditComponent } from './materias-edit.component';

describe('MateriasEditComponent', () => {
  let component: MateriasEditComponent;
  let fixture: ComponentFixture<MateriasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriasEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

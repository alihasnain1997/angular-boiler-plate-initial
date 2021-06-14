import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorDynamicFormComponent } from './dynamic-form.component';

describe('AuthorDynamicFormComponent', () => {
  let component: AuthorDynamicFormComponent;
  let fixture: ComponentFixture<AuthorDynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorDynamicFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortieEditComponent } from './sortie-edit.component';

describe('SortieEditComponent', () => {
  let component: SortieEditComponent;
  let fixture: ComponentFixture<SortieEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortieEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortieEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

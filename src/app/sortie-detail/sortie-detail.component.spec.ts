import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortieDetailComponent } from './sortie-detail.component';

describe('SortieDetailComponent', () => {
  let component: SortieDetailComponent;
  let fixture: ComponentFixture<SortieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortieDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

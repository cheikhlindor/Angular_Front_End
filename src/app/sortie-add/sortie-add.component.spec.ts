import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortieAddComponent } from './sortie-add.component';

describe('SortieAddComponent', () => {
  let component: SortieAddComponent;
  let fixture: ComponentFixture<SortieAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortieAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortieAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

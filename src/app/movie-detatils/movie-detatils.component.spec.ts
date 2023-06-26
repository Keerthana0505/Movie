import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetatilsComponent } from './movie-detatils.component';

describe('MovieDetatilsComponent', () => {
  let component: MovieDetatilsComponent;
  let fixture: ComponentFixture<MovieDetatilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDetatilsComponent]
    });
    fixture = TestBed.createComponent(MovieDetatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComGlycemieComponent } from './com-glycemie.component';

describe('ComGlycemieComponent', () => {
  let component: ComGlycemieComponent;
  let fixture: ComponentFixture<ComGlycemieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComGlycemieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComGlycemieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

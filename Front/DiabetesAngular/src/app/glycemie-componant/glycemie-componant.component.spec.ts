import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlycemieComponantComponent } from './glycemie-componant.component';

describe('GlycemieComponantComponent', () => {
  let component: GlycemieComponantComponent;
  let fixture: ComponentFixture<GlycemieComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlycemieComponantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlycemieComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

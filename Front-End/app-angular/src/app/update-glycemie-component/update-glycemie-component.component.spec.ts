import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGlycemieComponentComponent } from './update-glycemie-component.component';

describe('UpdateGlycemieComponentComponent', () => {
  let component: UpdateGlycemieComponentComponent;
  let fixture: ComponentFixture<UpdateGlycemieComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGlycemieComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateGlycemieComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

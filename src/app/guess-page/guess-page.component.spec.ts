import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessPageComponent } from './guess-page.component';

describe('GuessPageComponent', () => {
  let component: GuessPageComponent;
  let fixture: ComponentFixture<GuessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuessPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

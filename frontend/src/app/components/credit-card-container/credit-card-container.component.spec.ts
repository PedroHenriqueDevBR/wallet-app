import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardContainerComponent } from './credit-card-container.component';

describe('CreditCardContainerComponent', () => {
  let component: CreditCardContainerComponent;
  let fixture: ComponentFixture<CreditCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

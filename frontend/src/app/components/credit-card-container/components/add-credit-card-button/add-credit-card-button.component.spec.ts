import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreditCardButtonComponent } from './add-credit-card-button.component';

describe('AddCreditCardButtonComponent', () => {
  let component: AddCreditCardButtonComponent;
  let fixture: ComponentFixture<AddCreditCardButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCreditCardButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCreditCardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

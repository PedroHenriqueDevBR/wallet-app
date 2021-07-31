import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CardModel } from 'src/app/models/card.model';

@Component({
  selector: 'app-add-credit-card-button',
  templateUrl: './add-credit-card-button.component.html',
  styleUrls: ['./add-credit-card-button.component.css']
})
export class AddCreditCardButtonComponent implements OnInit {
  showCreateCardContainer: boolean = false;
  formCard: FormGroup | undefined;
  validateFlagError: string = '';
  validateFlagImageUrlError: string = '';
  validateValueError: string = '';
  validateCardNumberError: string = '';
  validateExpiringDateError: string = '';

  constructor() { }

  ngOnInit(): void {
    this.createForm(new CardModel('', '', 0, '', ''));
  }

  changeCreateCardContainerStatus(): void {
    this.showCreateCardContainer = !this.showCreateCardContainer;
  }

  createForm(card: CardModel): void {
    this.formCard = new FormGroup({
      flag: new FormControl(card.flag),
      flagImageUrl: new FormControl(card.flagImageUrl),
      money: new FormControl(card.money),
      cardNumber: new FormControl(card.cardNumber),
      expiringDate: new FormControl(card.expiringDate),
    });
  }

  onSaveCard(): void {
    if (this.formIsValid()) {
      this.showCreateCardContainer = false;
      const card: CardModel = this.formCard?.value;
    }
  }

  formIsValid(): boolean {
    let result: boolean = true;
    this.validateFlag() == false ? result = false : result = result;
    this.validateFlagImageUrl() == false ? result = false : result = result;
    this.validateMoney() == false ? result = false : result = result;
    this.validateCardNumber() == false ? result = false : result = result;
    this.validateExpiringDate() == false ? result = false : result = result;
    return result;
  }

  validateFlag(): boolean {
    const flag: string = this.formCard?.value.flag;
    if (flag.length == 0) {
      this.validateFlagError = 'Can\'t be empty';
      return false;
    }
    this.validateFlagError = '';
    return true;
  }

  validateFlagImageUrl(): boolean {
    const flagImageUrl: string = this.formCard?.value.flagImageUrl;
    if (flagImageUrl.length == 0) {
      this.validateFlagImageUrlError = 'Can\'t be empty';
      return false;
    }
    this.validateFlagImageUrlError = '';
    return true;
  }

  validateMoney(): boolean {
    const money: number = this.formCard?.value.money;
    if (money == undefined || money == null || money.toString().length == 0) {
      this.validateValueError = 'Can\'t be empty';
      return false;
    }
    this.validateValueError = '';
    return true;
  }

  validateCardNumber(): boolean {
    const cardNumber: string = this.formCard?.value.cardNumber;
    if (cardNumber.length == 0) {
      this.validateCardNumberError = 'Can\'t be empty';
      return false;
    }
    this.validateCardNumberError = '';
    return true;
  }

  validateExpiringDate(): boolean {
    const expiringDate: string = this.formCard?.value.expiringDate;
    if (expiringDate.length == 0) {
      this.validateExpiringDateError = 'Can\'t be empty';
      return false;
    }
    this.validateExpiringDateError = '';
    return true;
  }

}

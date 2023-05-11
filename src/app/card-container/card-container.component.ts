import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {DynamicTableService} from "../dynamic-table/dynamic-table.service";
import {CardContainerService} from "./card-container.service";

@Component({
  selector: 'card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {
  cardData = this._cardContainerService.getCardData();

  cardContainerForm = this.fb.group({
    woman: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern('^(?![\\s])[a-zA-ZÄäÖöÜüÈèÉéËëÀàÇçßñÏïŸÿÕõ][\\s]*.*$(?<![\\s])')]],
    man: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern('^(?![\\s])[a-zA-ZÄäÖöÜüÈèÉéËëÀàÇçßñÏïŸÿÕõ][\\s]*.*$(?<![\\s])')]],
    dressW: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^(?![\\s])[0-9a-zA-ZÄäÖöÜüÈèÉéËëÀàÇçßñÏïŸÿÕõ][\\s]*.*$(?<![\\s])')]],
    dressM: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^(?![\\s])[0-9a-zA-ZÄäÖöÜüÈèÉéËëÀàÇçßñÏïŸÿÕõ][\\s]*.*$(?<![\\s])')]],
    transport: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^(?![\\s])[0-9a-zA-ZÄäÖöÜüÈèÉéËëÀàÇçßñÏïŸÿÕõ][\\s]*.*$(?<![\\s])')]],
    activity: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100), Validators.pattern('^(?![\\s])[0-9a-zA-ZÄäÖöÜüÈèÉéËëÀàÇçßñÏïŸÿÕõ][\\s]*.*$(?<![\\s])')]]
  });

  clearedPlaceholder: boolean = false;
  invalidValue: boolean = false;
  submittedCardValue: string = '';
  submittedCardSegment: number = 0;

  constructor(
    private fb: FormBuilder,
    private _cardContainerService: CardContainerService,
    private _dynamicTableService: DynamicTableService) {
  }

  get woman() {
    return this.cardContainerForm.get('woman');
  }

  get man() {
    return this.cardContainerForm.get('man');
  }

  get dressW() {
    return this.cardContainerForm.get('dressW');
  }

  get dressM() {
    return this.cardContainerForm.get('dressM');
  }

  get transport() {
    return this.cardContainerForm.get('transport');
  }

  get activity() {
    return this.cardContainerForm.get('activity');
  }

  ngOnInit(): void {
    this.cardData.women.pop();
    this.cardData.men.pop();
    this.cardData.dressesW.pop();
    this.cardData.dressesM.pop();
    this.cardData.transports.pop();
    this.cardData.activities.pop();
  }

  onSubmit(): void {
    console.log('FORM', this.cardContainerForm.value);
    console.log('CARDDATA', this.cardData);
    console.log('SUBMITTEDCARDVALUE', this.submittedCardValue);
    console.log('SUBMITTEDCARDSEGMENT', this.submittedCardSegment);
    if (!this.clearedPlaceholder) {
      this._dynamicTableService.getTableData().pop();
      this._dynamicTableService.getTableData().pop();
      this._dynamicTableService.insertTableDataItem(this._dynamicTableService.getTableData());
      this.clearedPlaceholder = true;
    }
    this._dynamicTableService.addData(this.submittedCardValue, this.submittedCardSegment);
    this.cardContainerForm.reset();
    this.submittedCardValue = '';
    this.submittedCardSegment = 0;
    console.log('TABLE', this._dynamicTableService.getTableData());
  }

  newWoman(): string {
    return this.cardContainerForm.value.woman!;
  }

  newMan(): string {
    return this.cardContainerForm.value.man!;
  }

  newDressW(): string {
    return this.cardContainerForm.value.dressW!;
  }

  newDressM(): string {
    return this.cardContainerForm.value.dressM!;
  }

  newTransport(): string {
    return this.cardContainerForm.value.transport!;
  }

  newActivity(): string {
    return this.cardContainerForm.value.activity!;
  }

  addWoman(): void {
    if (this.woman?.valid) {
      this.invalidValue = false;
      this.submittedCardValue = this.newWoman();
      this.submittedCardSegment = 1;
      this.cardData.women.push(this.submittedCardValue);
    } else if (this.woman?.invalid) {
      this.invalidValue = true;
    }
  }

  addMan(): void {
    if (this.man?.valid) {
      this.invalidValue = false;
      this.submittedCardValue = this.newMan();
      this.submittedCardSegment = 2;
      this.cardData.men.push(this.submittedCardValue);
    } else if (this.man?.invalid) {
      this.invalidValue = true;
    }
  }

  addDressW(): void {
    if (this.dressW?.valid) {
      this.invalidValue = false;
      this.submittedCardValue = this.newDressW();
      this.submittedCardSegment = 3;
      this.cardData.dressesW.push(this.submittedCardValue);
    } else if (this.dressW?.invalid) {
      this.invalidValue = true;
    }
  }

  addDressM(): void {
    if (this.dressM?.valid) {
      this.invalidValue = false;
      this.submittedCardValue = this.newDressM();
      this.submittedCardSegment = 4;
      this.cardData.dressesM.push(this.submittedCardValue);
    } else if (this.dressM?.invalid) {
      this.invalidValue = true;
    }
  }

  addTransport(): void {
    if (this.transport?.valid) {
      this.invalidValue = false;
      this.submittedCardValue = this.newTransport();
      this.submittedCardSegment = 5;
      this.cardData.transports.push(this.submittedCardValue);
    } else if (this.transport?.invalid) {
      this.invalidValue = true;
    }
  }

  addActivity(): void {
    if (this.activity?.valid) {
      this.invalidValue = false;
      this.submittedCardValue = this.newActivity();
      this.submittedCardSegment = 6;
      this.cardData.activities.push(this.submittedCardValue);
    } else if (this.activity?.invalid) {
      this.invalidValue = true;
    }
  }
}

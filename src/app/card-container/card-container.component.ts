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
    woman: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern('[a-zA-ZÄäÖöÜüÈèÉéËëÀàÇçßñÏïŸÿÕõ ]*')]],
    man: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern('[a-zA-ZÄäÖöÜüÈèÉéËëÀàÇçßñÏïŸÿÕõ ]*')]],
    dressW: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    dressM: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    transport: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    activity: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
  });

  clearedPlaceholder: boolean = false;
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
      this.submittedCardValue = this.newWoman();
      this.submittedCardSegment = 1;
      this.cardData.women.push(this.newWoman());

    }
  }

  addMan(): void {
    if (this.man?.valid) {
      this.submittedCardValue = this.newMan();
      this.submittedCardSegment = 2;
      this.cardData.men.push(this.newMan());
    }
  }

  addDressW(): void {
    if (this.dressW?.valid) {
      this.submittedCardValue = this.newDressW();
      this.submittedCardSegment = 3;
      this.cardData.dressesW.push(this.newDressW());
    }
  }

  addDressM(): void {
    if (this.dressM?.valid) {
      this.submittedCardValue = this.newDressM();
      this.submittedCardSegment = 4;
      this.cardData.dressesM.push(this.newDressM());
    }
  }

  addTransport(): void {
    if (this.transport?.valid) {
      this.submittedCardValue = this.newTransport();
      this.submittedCardSegment = 5;
      this.cardData.transports.push(this.newTransport());
    }
  }

  addActivity(): void {
    if (this.activity?.valid) {
      this.submittedCardValue = this.newActivity();
      this.submittedCardSegment = 6;
      this.cardData.activities.push(this.newActivity());
    }
  }
}

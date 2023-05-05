import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {DynamicTableService} from "../dynamic-table/dynamic-table.service";

@Component({
  selector: 'card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {
  segmentIds = {
    women: [''],
    men: [''],
    dressesW: [''],
    dressesM: [''],
    transports: [''],
    activities: ['']
  };

  cardContainerForm = this.fb.group({
    woman: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern('[a-zA-ZÄäÖöÜüÈèÉéËëÀàÇçßñÏïŸÿÕõ ]*')]],
    man: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern('[a-zA-ZÄäÖöÜüÈèÉéËëÀàÇçßñÏïŸÿÕõ ]*')]],
    dressW: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    dressM: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    transport: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    activity: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
  });

  clearedPlaceholder: boolean = false;
  submittedValue: string = '';
  submittedSegment: number = 0;

  constructor(private fb: FormBuilder, private _dynamicTableService: DynamicTableService) {
  }

  ngOnInit(): void {
    this.segmentIds.women.pop();
    this.segmentIds.men.pop();
    this.segmentIds.dressesW.pop();
    this.segmentIds.dressesM.pop();
    this.segmentIds.transports.pop();
    this.segmentIds.activities.pop();
  }

  onSubmit(): void {
    console.log('FORM', this.cardContainerForm.value);
    console.log('SEGMENTIDS', this.segmentIds);
    console.log('submittedValue', this.submittedValue);
    console.log('submittedSegment', this.submittedSegment);
    if (!this.clearedPlaceholder) {
      this._dynamicTableService.getTableData().pop();
      this._dynamicTableService.getTableData().pop();
      this._dynamicTableService.insertTableDataItem(this._dynamicTableService.getTableData());
      this.clearedPlaceholder = true;
    }

    this._dynamicTableService.addData(this.submittedValue, this.submittedSegment);
    this.cardContainerForm.reset();

    console.log('TABLE', this._dynamicTableService.getTableData());
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
      this.submittedValue = this.newWoman();
      this.submittedSegment = 1;
      this.segmentIds.women.push(this.newWoman());

    }
  }

  addMan(): void {
    if (this.man?.valid) {
      this.submittedValue = this.newMan();
      this.submittedSegment = 2;
      this.segmentIds.men.push(this.newMan());
    }
  }

  addDressW(): void {
    if (this.dressW?.valid) {
      this.submittedValue = this.newDressW();
      this.submittedSegment = 3;
      this.segmentIds.dressesW.push(this.newDressW());
    }
  }

  addDressM(): void {
    if (this.dressM?.valid) {
      this.submittedValue = this.newDressM();
      this.submittedSegment = 4;
      this.segmentIds.dressesM.push(this.newDressM());
    }
  }

  addTransport(): void {
    if (this.transport?.valid) {
      this.submittedValue = this.newTransport();
      this.submittedSegment = 5;
      this.segmentIds.transports.push(this.newTransport());
    }
  }

  addActivity(): void {
    if (this.activity?.valid) {
      this.submittedValue = this.newActivity();
      this.submittedSegment = 6;
      this.segmentIds.activities.push(this.newActivity());
    }
  }
}

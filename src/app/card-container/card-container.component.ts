import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

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
    woman: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern('[a-zA-Z ]*')]],
    man: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40), Validators.pattern('[a-zA-Z ]*')]],
    dressW: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    dressM: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    transport: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    activity: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.segmentIds.women.pop();
    this.segmentIds.men.pop();
    this.segmentIds.dressesW.pop();
    this.segmentIds.dressesM.pop();
    this.segmentIds.transports.pop();
    this.segmentIds.activities.pop();
  }

  onSubmit(): void {
    console.log(this.segmentIds);
  }

  // WOMAN
  get woman() {
    return this.cardContainerForm.get('woman');
  }

  newWoman(): string {
    return this.cardContainerForm.value.woman!;
  }

  addWoman() {
    if (this.woman?.valid) {
      this.segmentIds.women.push(this.newWoman());
    }
    console.log(this.cardContainerForm.value);
    this.cardContainerForm.reset();
  }

  // MAN
  get man() {
    return this.cardContainerForm.get('man');
  }

  newMan(): string {
    return this.cardContainerForm.value.man!;
  }

  addMan() {
    if (this.man?.valid) {
      this.segmentIds.men.push(this.newMan());
    }
    console.log(this.cardContainerForm.value);
    this.cardContainerForm.reset();
  }

  // DRESSW
  get dressW() {
    return this.cardContainerForm.get('dressW');
  }

  newDressW(): string {
    return this.cardContainerForm.value.dressW!;
  }

  addDressW() {
    if (this.dressW?.valid) {
      this.segmentIds.dressesW.push(this.newDressW());
    }
    console.log(this.cardContainerForm.value);
    this.cardContainerForm.reset();
  }

  // DRESSM
  get dressM() {
    return this.cardContainerForm.get('dressM');
  }

  newDressM(): string {
    return this.cardContainerForm.value.dressM!;
  }

  addDressM() {
    if (this.dressM?.valid) {
      this.segmentIds.dressesM.push(this.newDressM());
    }
    console.log(this.cardContainerForm.value);
    this.cardContainerForm.reset();
  }

  // TRANSPORT
  get transport() {
    return this.cardContainerForm.get('transport');
  }

  newTransport(): string {
    return this.cardContainerForm.value.transport!;
  }

  addTransport() {
    if (this.transport?.valid) {
      this.segmentIds.transports.push(this.newTransport());
    }
    console.log(this.cardContainerForm.value);
    this.cardContainerForm.reset();
  }

  // ACTIVITY
  get activity() {
    return this.cardContainerForm.get('activity');
  }

  newActivity(): string {
    return this.cardContainerForm.value.activity!;
  }

  addActivity() {
    if (this.activity?.valid) {
      this.segmentIds.activities.push(this.newActivity());
    }
    console.log(this.cardContainerForm.value);
    this.cardContainerForm.reset();
  }
}

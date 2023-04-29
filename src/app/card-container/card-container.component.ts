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
}

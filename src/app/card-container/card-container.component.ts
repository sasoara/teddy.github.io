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
    woman: ['', Validators.required],
    man: ['', Validators.required],
    dressW: ['', Validators.required],
    dressM: ['', Validators.required],
    transport: ['', Validators.required],
    activity: ['', Validators.required]
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

  newWoman(): string {
    return this.cardContainerForm.value.woman!;
  }

  addWoman() {
    this.segmentIds.women.push(this.newWoman());
    console.log(this.cardContainerForm.value);
    this.cardContainerForm.reset();
  }
}

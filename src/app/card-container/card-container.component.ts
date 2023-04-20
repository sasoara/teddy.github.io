import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {
  segmentIds: any[] = [];
  cardContainerForm: FormGroup | any;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this._createForm({
      segmentIds: [],
      women: [{
        woman: []
      }]
    })
  }

  /*private _createForm(card?: ICard): void {
    // @ts-ignore
    console.log('_createForm ~ card', card.women);
    this.segmentIds = card?.segmentIds ?? [];
    const women = card?.women ?? [];

    this.cardContainerForm = this.fb.group({
      women: this.fb.array(
        women.map((x) =>
          this.fb.group({
            woman: [x.womaaan]
          }))
      )
    })
  }*/

  womenList(): FormArray {
    // @ts-ignore
    return this.cardContainerForm.get('women') as FormArray;
  }

  addFormGroupToWomenList(women: { woman: [] }[]) {
    // @ts-ignore
    for (let woman of women) {
      this.womenList().push(
        this.fb.group({
          woman: [woman.woman]
        })
      );
    }
    console.log(this.womenList().controls[0]);
  }

  newWoman(): FormGroup {
    return this.fb.group({
      woman: ''
    });
  }

  addWoman() {
    this.womenList().push(this.newWoman());
  }

  private _createForm(card?: ICard): void {
    // @ts-ignore
    console.log('_createForm ~ card', card.women);
    this.segmentIds = card?.segmentIds ?? [];
    const women = card?.women ?? [];

    this.cardContainerForm = this.fb.group({
      women: this.fb.array([])
    });
    this.addFormGroupToWomenList(women);
  }

}

export interface ICard {
  segmentIds: any[];
  women: { woman: [] }[];
}


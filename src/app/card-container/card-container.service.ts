import {Injectable} from '@angular/core';
import {ICardData} from "./card-container.model";

@Injectable({
  providedIn: 'root'
})
export class CardContainerService {

  private _cardData: ICardData;

  constructor() {
    this._cardData = {
      women: [''],
      men: [''],
      dressesW: [''],
      dressesM: [''],
      transports: [''],
      activities: ['']
    };
  }

  getCardData(): ICardData {
    return this._cardData;
  }
}

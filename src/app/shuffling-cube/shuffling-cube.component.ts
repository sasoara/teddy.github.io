import {Component} from '@angular/core';
import {DynamicTableService} from "../dynamic-table/dynamic-table.service";
import {CardContainerService} from "../card-container/card-container.service";
import {ITableData} from "../dynamic-table/dynamic-table.models";
import {ICardData} from "../card-container/card-container.model";

@Component({
  selector: 'shuffling-cube',
  templateUrl: './shuffling-cube.component.html',
  styleUrls: ['./shuffling-cube.component.scss']
})
export class ShufflingCubeComponent {

  cardData: ICardData = this._cardContainerService.getCardData();
  tableData: ITableData[] = this._dynamicTableService.getTableData();

  constructor(
    private _dynamicTableService: DynamicTableService,
    private _cardContainerService: CardContainerService) {
  }

  countTableDataItems(): number {
    return this.cardData.women.length + this.cardData.men.length +
      this.cardData.dressesW.length + this.cardData.dressesM.length +
      this.cardData.transports.length + this.cardData.activities.length
  }

  isTableFull(): boolean {
    return this.countTableDataItems() % 6 == 0;
  }

  shuffleArray(array: string[]): void {
    array.sort(() => Math.random() - 0.5);
  }

  shuffleEachStringArray(cardData: any) {
    this.shuffleArray(cardData.women);
    this.shuffleArray(cardData.men);
    this.shuffleArray(cardData.dressesW);
    this.shuffleArray(cardData.dressesM);
    this.shuffleArray(cardData.transports);
    this.shuffleArray(cardData.activities);
  }

  convertCardDataToTableData(cardData: any, tableData: ITableData[]): ITableData[] {
    let iterator: number = 0;
    while (iterator != tableData.length) {
      tableData[iterator].WOMAN = cardData.women[iterator];
      tableData[iterator].MAN = cardData.men[iterator];
      tableData[iterator]["DRESS WOMAN"] = cardData.dressesW[iterator];
      tableData[iterator]["DRESS MAN"] = cardData.dressesM[iterator];
      tableData[iterator].TRANSPORT = cardData.transports[iterator];
      tableData[iterator].ACTIVITY = cardData.activities[iterator];
      iterator++;
    }
    return tableData;
  }

  shuffleTableData(): void {
    if (this.isTableFull()) {
      this.shuffleEachStringArray(this.cardData);
      this.tableData = this.convertCardDataToTableData(this.cardData, this.tableData);
      console.log('this.tableData', this.tableData);
    }
  }
}

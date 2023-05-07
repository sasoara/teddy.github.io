import {Injectable} from '@angular/core';
import {ITableData} from "./dynamic-table.models";

@Injectable({
  providedIn: 'root'
})
export class DynamicTableService {

  private _tableData: ITableData[];

  private tableDataItem: ITableData;

  constructor() {
    this._tableData = [{
      "WOMAN": 'Sarah',
      "MAN": 'Tom',
      "DRESS WOMAN": 'Vorhang',
      "DRESS MAN": 'Strassenpenner',
      "TRANSPORT": 'Taxi',
      "ACTIVITY": 'Am Rhein ein Feuer zünden'
    }, {
      "WOMAN": 'Francesca',
      "MAN": 'Jared',
      "DRESS WOMAN": 'Brautkleid',
      "DRESS MAN": 'Bräutigam',
      "TRANSPORT": 'SBB 1. Klasse',
      "ACTIVITY": 'Konzert von Rammstein'
    }];
    this.tableDataItem = {"WOMAN": '', "MAN": '', "DRESS WOMAN": '', "DRESS MAN": '', "TRANSPORT": '', "ACTIVITY": ''}
  }

  addToTableData(value: string, segment: number) {
    let newTableDataItem: ITableData = {
      "WOMAN": '',
      "MAN": '',
      "DRESS WOMAN": '',
      "DRESS MAN": '',
      "TRANSPORT": '',
      "ACTIVITY": ''
    };

    let changed: boolean = false;

    for (let tableDataItem of this._tableData) {
      switch (segment) {
        case 1:
          if (this._tableData[this._tableData.length - 1].WOMAN != '') {
            this._tableData.push(newTableDataItem);
            this._tableData[this._tableData.length - 1].WOMAN = value;
            changed = true;
          } else if (tableDataItem.WOMAN == '') {
            tableDataItem.WOMAN = value;
            changed = true;
          }
          break;
        case 2:
          if (this._tableData[this._tableData.length - 1].MAN != '') {
            this._tableData.push(newTableDataItem);
            this._tableData[this._tableData.length - 1].MAN = value;
            changed = true;
          } else if (tableDataItem.MAN == '') {
            tableDataItem.MAN = value;
            changed = true;
          }
          break;
        case 3:
          if (this._tableData[this._tableData.length - 1]["DRESS WOMAN"] != '') {
            this._tableData.push(newTableDataItem);
            this._tableData[this._tableData.length - 1]["DRESS WOMAN"] = value;
            changed = true;
          } else if (tableDataItem["DRESS WOMAN"] == '') {
            tableDataItem["DRESS WOMAN"] = value;
            changed = true;
          }
          break;
        case 4:
          if (this._tableData[this._tableData.length - 1]["DRESS MAN"] != '') {
            this._tableData.push(newTableDataItem);
            this._tableData[this._tableData.length - 1]["DRESS MAN"] = value;
            changed = true;
          } else if (tableDataItem["DRESS MAN"] == '') {
            tableDataItem["DRESS MAN"] = value;
            changed = true;
          }
          break;
        case 5:
          if (this._tableData[this._tableData.length - 1].TRANSPORT != '') {
            this._tableData.push(newTableDataItem);
            this._tableData[this._tableData.length - 1].TRANSPORT = value;
            changed = true;
          } else if (tableDataItem.TRANSPORT == '') {
            tableDataItem.TRANSPORT = value;
            changed = true;
          }
          break;
        case 6:
          if (this._tableData[this._tableData.length - 1].ACTIVITY != '') {
            this._tableData.push(newTableDataItem);
            this._tableData[this._tableData.length - 1].ACTIVITY = value;
            changed = true;
          } else if (tableDataItem.ACTIVITY == '') {
            tableDataItem.ACTIVITY = value;
            changed = true;
          }
          break;
      }
      if (changed) {
        break;
      }
    }
  }

  addData(value: string, segment: number) {
    this.addToTableData(value, segment);
  }

  getTableData(): ITableData[] {
    return this._tableData;
  }

  setTableData(tableData: ITableData[]): void {
    this._tableData = tableData;
  }

  insertTableDataItem(tableData: ITableData[]) {
    tableData.push(this.tableDataItem);
  }
}

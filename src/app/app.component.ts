import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {DynamicTableComponent} from "./dynamic-table/dynamic-table.component";
import {DynamicTableService} from "./dynamic-table/dynamic-table.service";
import {ITableData, ITableHeader} from "./dynamic-table/dynamic-table.models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('dynamicTable') table!: DynamicTableComponent;

  title = 'DAS Spiel';
  tableData: ITableData[] = this._dynamicTableService.getTableData();

  constructor(private _dynamicTableService: DynamicTableService) {
  }

  ngAfterViewInit(): void {
    const headers = [
      'WOMAN', 'MAN', 'DRESS WOMAN',
      'DRESS MAN', 'TRANSPORT', 'ACTIVITY'
    ].map((x, i) => ({key: x, index: i, isSelected: true} as ITableHeader));

    this.tableData = this._dynamicTableService.getTableData();
    this.table.render(headers, this.tableData);
    console.log('TABLEDATA', this.tableData);
  }
}

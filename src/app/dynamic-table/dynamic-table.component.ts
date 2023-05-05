import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {IDynamicTable, ITableHeader} from "./dynamic-table.models";

@Component({
  selector: 'dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {
  tableData: IDynamicTable = {headers: [], data: []};
  allHeaders: ITableHeader[] = [];

  public constructor(private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  render(headers: ITableHeader[], data: any[]) {
    this.tableData = {
      headers: headers.filter(x => x.isSelected),
      data: data
    };
    this.allHeaders = headers;
    this.changeDetector.detectChanges();
  }
}

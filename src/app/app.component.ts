import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {DynamicTableComponent} from "./dynamic-table/dynamic-table.component";
import {ITableData, ITableHeader} from "./dynamic-table/dynamic-table.models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('dynamicTable') table!: DynamicTableComponent;

  title = 'DAS Spiel';
  data = `[
    {
      "WOMAN": "Michelle Obama",
      "MAN": "Donald Trump",
      "DRESS WOMAN": "Sari",
      "DRESS MAN": "Borat",
      "TRANSPORT": "Traktor",
      "ACTIVITY": "Broschüren über Zeugen Jehova verteilen"
    }
  ]`

  ngAfterViewInit(): void {
    const headers = [
      'WOMAN', 'MAN', 'DRESS WOMAN',
      'DRESS MAN', 'TRANSPORT', 'ACTIVITY'
    ].map((x, i) => ({key: x, index: i, isSelected: true} as ITableHeader));
    const data = JSON.parse(this.data) as ITableData[];
    this.table.render(headers, data);

    console.log('DATA:', data);
  }
}

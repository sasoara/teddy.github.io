export interface ITableHeader {
  key: string;
  index: number;
  isSelected: boolean;
}

export interface IDynamicTable {
  headers: ITableHeader[];
  data: any[];
}

export interface ITableData {
  "WOMAN": string;
  "MAN": string;
  "DRESS WOMAN": string;
  "DRESS MAN": string;
  "TRANSPORT": string;
  "ACTIVITY": string;
}

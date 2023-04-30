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
  woman: string;
  man: string;
  dressW: string;
  dressM: string;
  transport: string;
  activity: string;
}

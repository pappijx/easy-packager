import React from 'react';
export interface ITableFilter {
    type?: 'dropdown' | 'input';
    value?: string;
}
export interface IColumn {
    id?: string;
    title?: string;
    format?: (value?: any, rowData?: any, index?: number) => React.ReactNode;
    value?: string;
    children?: IColumn[];
    headStyle?: React.CSSProperties;
    cellStyle?: React.CSSProperties;
    filter?: ITableFilter;
}
export interface ITable {
    caption?: string;
    columns: IColumn[];
    data: any[];
    alternateRowColored?: boolean;
    draggableCol?: boolean;
    rowHeight?: string;
    isExpandable?: boolean;
    border?: boolean;
    showSerialNumber?: boolean;
    colorScheme?: string;
    expandedComponent?: any;
}
/**
 *
 * @param columns {IColumn[]}
 * @param caption  {string}
 * @param data {any[]}
 * @param alternateRowColored {boolean} will make alternate rows coloured
 * @param draggableCol {boolean} make columns draggable (still being tested)
 * @param rowHeight {string} in px
 * @param colorScheme {boolean} hex codes will auto generate row colors
 * @param isExpandable {boolean} row is expandable with custom expanded Components
 * @param border {boolean} show borders around table and in tables
 * @param showSerialNumber {boolean}
 * @param expandedComponent function that gives row as param and returns jsx for expanded element
 * @returns Table component
 *
 */
export declare const Table: ({ columns, caption, data, alternateRowColored, draggableCol, rowHeight, colorScheme, isExpandable, border, showSerialNumber, expandedComponent }: ITable) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
//# sourceMappingURL=index.d.ts.map
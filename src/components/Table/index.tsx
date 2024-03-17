import '../../index.css'

import React, { useState } from 'react'

import styles from './index.module.css'
export interface IColumn {
  title?: string
  format?: (value?: any, rowData?: any, index?: number) => React.ReactNode
  value?: string
  children?: IColumn[]
  headStyle?: React.CSSProperties
  cellStyle?: React.CSSProperties
}
export interface ITable {
  caption?: 'hello'
  columns: IColumn[]
  data: any[]
  alternateRowColored?: boolean
  draggableCol?: boolean
  rowHeight?: string
  isExpandable?: boolean
  border?: boolean
  showSerialNumber?: boolean
  colorScheme?: string
}

const searchValueInData = (data: any, keyToFind: string[], index = 0) => {
  let item = data[keyToFind[index]]

  if (typeof item === 'object') {
    item = searchValueInData(item, keyToFind, ++index)
  }

  return item
}

export const Table = ({
  columns,
  caption,
  data,
  alternateRowColored = false,
  draggableCol,
  rowHeight,
  colorScheme = '',
  isExpandable = false,
  border = false,
  showSerialNumber = false,
}: ITable) => {
  const [columnState, setColumnState] = useState<IColumn[]>(columns)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [draggedOverElement, setDraggedOverElement] = useState<number>(0)
  const [expandedRowNIndex, setExpandedRowIndex] = useState<number | null>(null)

  const onDragStart = (e: React.DragEvent<HTMLTableHeaderCellElement>, index: number) => {
    setActiveIndex(index)
  }

  const onDragOver = (e: React.DragEvent<HTMLTableHeaderCellElement>, index: number) => {
    e.preventDefault()
    setDraggedOverElement(index)
  }

  const onDrop = (e: React.DragEvent<HTMLTableHeaderCellElement>) => {
    e.preventDefault()

    setColumnState((prev) => {
      const finalArray: IColumn[] = [...prev]
      finalArray[activeIndex] = prev[draggedOverElement]
      finalArray[draggedOverElement] = prev[activeIndex]
      return finalArray
    })
  }

  return (
    <div
      style={{
        // border: 'solid 1px',
        borderLeft: border ? '1px solid rgb(182, 182, 182)' : '',
        borderRight: border ? '1px solid rgb(182, 182, 182)' : '',
        paddingBottom: '0.1rem',
      }}
    >
      <table
        style={{
          width: '100%',
          position: 'relative',
          borderSpacing: '0',
          border: 'none',
        }}
        border={border ? 1 : 0}
        cellSpacing="0"
      >
        {caption && <caption>{caption}</caption>}
        <thead
          style={{
            userSelect: 'none',
            position: 'sticky',
            top: '0',
            boxShadow: '0px 1px 5px #00000067',
            backgroundColor: colorScheme,
          }}
        >
          <tr>
            {isExpandable && (
              <th
                className={border ? styles.colBorder : ''}
                style={{
                  padding: '0.5rem',
                  width: '100px',
                  textAlign: 'left',
                  border: 'solid 1px #000000aaF',
                }}
              ></th>
            )}
            {showSerialNumber && (
              <th
                style={{
                  padding: '0.5rem',
                  width: '80px',
                  textAlign: 'left',
                  maxWidth: '80px',
                  borderTop: '1px solid rgb(182, 182, 182)',
                }}
                className={border ? styles.colBorder : ''}
              >
                S.No.
              </th>
            )}
            {columns &&
              columnState.map((column, index) => {
                return (
                  <th
                    colSpan={column.children?.length}
                    draggable={draggableCol}
                    onDragStart={(e) => onDragStart(e, index)}
                    onDragOver={(e) => onDragOver(e, index)}
                    onDrop={(e) => onDrop(e)}
                    style={{
                      padding: '0.5rem',
                      width: '100px',
                      textAlign: 'left',
                      borderTop: '1px solid rgb(182, 182, 182)',
                    }}
                    className={border ? styles.colBorder : ''}
                    key={index}
                  >
                    <div
                      style={{
                        ...column.headStyle,
                      }}
                      className={styles.resizebaleDiv}
                    >
                      {column.title}
                    </div>
                  </th>
                )
              })}
          </tr>
          <tr>
            {isExpandable && (
              <th
                className={border ? styles.colBorder : ''}
                style={{
                  padding: '0.5rem',
                  width: '100px',
                  textAlign: 'left',
                  border: 'solid 1px #000000aaF',
                }}
              ></th>
            )}
            {showSerialNumber && (
              <th
                className={border ? styles.colBorder : ''}
                style={{
                  padding: '0.5rem',
                  width: '100px',
                  textAlign: 'left',
                  border: 'solid 1px #000000aaF',
                }}
              ></th>
            )}
            {columns &&
              columnState.map((column, index) => {
                return column.children ? (
                  column.children?.map((childColumn) => {
                    return (
                      <th
                        className={border ? styles.colBorder : ''}
                        style={{
                          padding: '0.3rem 0.5rem',
                          width: '100px',
                          textAlign: 'left',
                          border: 'solid 1px #eeeeeeaaF',
                          ...childColumn.headStyle,
                        }}
                        key={index}
                      >
                        <div
                          style={{
                            ...column.headStyle,
                          }}
                          className={styles.resizebaleDiv}
                        >
                          {childColumn.title}
                        </div>
                      </th>
                    )
                  })
                ) : (
                  <th
                    className={border ? styles.colBorder : ''}
                    style={{
                      padding: '0.3rem 0.5rem',
                      width: '100px',
                      textAlign: 'left',
                      ...column.headStyle,
                    }}
                    key={index}
                  ></th>
                )
              })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr
                key={index}
                style={{
                  height: rowHeight,
                  backgroundColor: alternateRowColored && index % 2 !== 0 ? colorScheme + '33' : '',
                }}
              >
                {isExpandable && (
                  <td
                    className={border ? styles.colBorder : ''}
                    style={{
                      padding: '0.5rem',
                      width: '100px',
                      textAlign: 'left',
                    }}
                  >
                    <span
                      onClick={() => setExpandedRowIndex(index)}
                      style={{ color: colorScheme, cursor: 'pointer' }}
                    >
                      &#x27BD;
                    </span>
                  </td>
                )}
                {showSerialNumber && (
                  <td
                    className={border ? styles.colBorder : ''}
                    style={{
                      padding: '0.5rem',
                      width: '100px',
                      textAlign: 'left',
                    }}
                  >
                    {index + 1}
                  </td>
                )}
                <RowRenderer border={border} row={row} columns={columnState} />
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const RowRenderer = ({
  row,
  columns,
  border,
}: {
  row: any
  columns: IColumn[]
  border?: boolean
}) => {
  return columns.map((col, index) => {
    return col.children && col.children.length ? (
      <RowRenderer border={border} row={row} columns={col.children} />
    ) : (
      <td
        key={index}
        className={border ? styles.colBorder : ''}
        style={{
          padding: '0.5rem',
          width: '100px',
          textAlign: 'left',
          ...col.cellStyle,
        }}
      >
        {col.format
          ? col.format &&
            col.format(searchValueInData(row, col.value ? col.value.split('.') : []), row, index)
          : col.value && searchValueInData(row, col.value?.split('.'))}
      </td>
    )
  })
}

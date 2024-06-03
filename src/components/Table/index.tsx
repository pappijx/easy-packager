import '../../index.css'

import React, { useEffect, useRef, useState } from 'react'

import styles from './index.module.css'
export interface IColumn {
  id?: string
  title?: string
  format?: (value?: any, rowData?: any, index?: number) => React.ReactNode
  value?: string
  children?: IColumn[]
  headStyle?: React.CSSProperties
  cellStyle?: React.CSSProperties
  filter?: React.ReactNode
}
export interface ITable {
  caption?: string
  columns: IColumn[]
  data: any[]
  alternateRowColored?: boolean
  draggableCol?: boolean
  rowHeight?: string
  isExpandable?: boolean
  border?: boolean
  showSerialNumber?: boolean
  colorScheme?: string
  expandedComponent?: any
}

const searchValueInData = (data: any, keyToFind: string[], index = 0) => {
  let item = data[keyToFind[index]]

  if (typeof item === 'object') {
    item = searchValueInData(item, keyToFind, ++index)
  }

  return item
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
  expandedComponent,
}: ITable) => {
  const [columnState, setColumnState] = useState<IColumn[]>(columns)
  const [expandedRowIndex, setExpandedRowIndex] = useState<number | null>(null)
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)

  const handleDragStart = (e: React.DragEvent<HTMLTableHeaderCellElement>, index: number) => {
    setDraggedIndex(index)
  }

  const handleDragOver = (e: React.DragEvent<HTMLTableHeaderCellElement>, index: number) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent<HTMLTableHeaderCellElement>, index: number) => {
    e.preventDefault()

    if (draggedIndex !== null) {
      setColumnState((prev) => {
        const finalArray: IColumn[] = [...prev]
        finalArray[index] = prev[draggedIndex]
        finalArray[draggedIndex] = prev[index]
        return finalArray
      })
    }
  }

  return (
    <div
      style={{
        width: '100%',
        overflow: 'auto',
        borderLeft: border ? '1px solid rgb(182, 182, 182)' : '',
        borderRight: border ? '1px solid rgb(182, 182, 182)' : '',
        paddingBottom: '0.1px',
        scrollBehavior: 'smooth',
      }}
      onWheel={(e) => {
        e.currentTarget.scrollLeft += e.deltaY > 0 ? 100 : -100
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
                  borderTop: border ? '1px solid rgb(182, 182, 182)' : '',
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
                  borderTop: border ? '1px solid rgb(182, 182, 182)' : '',
                }}
                className={border ? styles.colBorder : ''}
              >
                S.No.
              </th>
            )}
            {columnState &&
              columnState.map((column, index) => {
                return (
                  column && (
                    <th
                      colSpan={column?.children?.length}
                      draggable={draggableCol}
                      onDragStart={(e) => handleDragStart(e, index)}
                      onDragOver={(e) => handleDragOver(e, index)}
                      onDrop={(e) => handleDrop(e, index)}
                      style={{
                        padding: '0.5rem',
                        width: '100px',
                        textAlign: 'start',
                        borderTop: border ? '1px solid rgb(182, 182, 182)' : '',
                        verticalAlign: 'top',
                      }}
                      className={border ? styles.colBorder : ''}
                      key={`${index}-${index}`}
                    >
                      <div
                        style={{
                          minWidth: column?.children && column?.children?.length * 150 + 'px',
                          ...column?.headStyle,
                          position: 'relative',
                        }}
                        className={styles.resizebaleDiv}
                      >
                        <p>{column?.title}</p>
                      </div>
                      {column?.filter && (
                        <div
                          style={{
                            width: '80%',
                          }}
                        >
                          {column?.filter}
                        </div>
                      )}
                    </th>
                  )
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
            {columnState &&
              columnState.map((column, idx) => {
                return column?.children ? (
                  column?.children?.map((childColumn, index) => {
                    return (
                      <th
                        className={border ? styles.colBorder : ''}
                        style={{
                          padding: '0.3rem 0.5rem',
                          width: '100px',
                          textAlign: 'left',
                          border: 'solid 1px #eeeeeeaaF',
                          ...childColumn?.headStyle,
                          verticalAlign: 'top',
                        }}
                        key={'2' + index}
                      >
                        <div
                          style={{
                            minWidth: '150px',
                            ...column?.headStyle,
                          }}
                          // className={styles.resizebaleDiv}
                        >
                          {childColumn?.title}
                        </div>
                        {column?.filter && (
                          <div
                            style={{
                              width: '80%',
                            }}
                          >
                            {column?.filter}
                          </div>
                        )}
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
                      ...column?.headStyle,
                    }}
                    key={'empty' + idx}
                  ></th>
                )
              })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <>
                <tr
                  key={row.id}
                  style={{
                    height: rowHeight,
                    backgroundColor:
                      alternateRowColored && index % 2 !== 0 ? colorScheme + '33' : '',
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
                        onClick={() =>
                          index === expandedRowIndex
                            ? setExpandedRowIndex(-1)
                            : setExpandedRowIndex(index)
                        }
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
                {
                  <tr
                    style={{
                      transition: '0.3s',
                      height: index === expandedRowIndex ? '300px' : '0px',
                    }}
                  >
                    {index === expandedRowIndex && (
                      <td
                        colSpan={200}
                        style={{
                          transition: '1s',
                        }}
                      >
                        {expandedComponent(row)}
                      </td>
                    )}
                  </tr>
                }
              </>
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
  return (
    <>
      {columns.map((col, index) =>
        col.children ? (
          <RowRenderer key={col.id} border={border} row={row} columns={col.children} />
        ) : (
          <td
            key={col.id}
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
                col.format(
                  searchValueInData(row, col.value ? col.value.split('.') : []),
                  row,
                  index,
                )
              : col.value && searchValueInData(row, col.value?.split('.'))}
          </td>
        ),
      )}
    </>
  )
}

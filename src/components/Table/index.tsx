import React, { TableHTMLAttributes, useState } from 'react'

export interface IColumn {
  title?: string
  format?: (value?: any, rowData?: any, index?: number) => React.ReactNode
  value?: string
  children?: IColumn[]
  headStyle?: React.CSSProperties
  style?: React.CSSProperties
}
export interface ITable extends TableHTMLAttributes<any> {
  caption?: 'hello'
  columns: IColumn[]
  data: any[]
  alternateRowColored?: string
  draggableCol?: boolean
  draggableRow?: boolean
}

const searchValueInData = (data: any, keyToFind: string[], index = 0) => {
  let item = data[keyToFind[index]]

  if (typeof item === 'object') {
    item = searchValueInData(item, keyToFind, ++index)
  }

  return item
}

const RowRenderer = ({ row, columns }: { row: any; columns: IColumn[] }) => {
  return columns.map((col, index) => {
    return col.children && col.children.length ? (
      <RowRenderer row={row} columns={col.children} />
    ) : (
      <td
        key={index}
        style={{
          padding: '0.5rem',
          width: '100px',
          textAlign: 'left',
          ...col.headStyle,
        }}
      >
        {col.value && searchValueInData(row, col.value?.split('.'))}
        {/* {col.format && col.format('', row, index)} */}
      </td>
    )
  })
}

export const Table = ({
  columns,
  caption,
  data,
  alternateRowColored = '',
  draggableCol,
  draggableRow,
  ...props
}: ITable) => {
  const [columnState, setColumnState] = useState<IColumn[]>(columns)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [draggedOverElement, setDraggedOverElement] = useState<number>(0)

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
    <table
      style={{
        borderCollapse: 'collapse',
      }}
      {...props}
    >
      {caption && <caption>{caption}</caption>}
      <thead>
        <tr>
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
                    ...column.headStyle,
                  }}
                  key={index}
                >
                  {column.title}
                </th>
              )
            })}
        </tr>
        <tr>
          {columns &&
            columnState.map((column, index) => {
              return column.children?.map((childColumn) => {
                return (
                  <th
                    style={{
                      padding: '0.3rem 0.5rem',
                      width: '100px',
                      textAlign: 'left',
                      ...childColumn.headStyle,
                    }}
                    key={index}
                  >
                    {childColumn.title}
                  </th>
                )
              })
            })}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => {
          return (
            <tr
              key={index}
              {...(alternateRowColored &&
                index % 2 !== 0 && {
                  style: {
                    backgroundColor: alternateRowColored,
                  },
                })}
            >
              <RowRenderer row={row} columns={columnState} />
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

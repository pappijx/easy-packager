import React from 'react'

export interface ITable {
  text: 'hello'
}

export const Table = ({ text }: ITable) => {
  return <div>{text}</div>
}

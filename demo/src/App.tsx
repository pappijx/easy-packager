import './App.css'
import { Table } from '../../src/components'
import { IColumn } from '../../src/components/Table'
function App() {
  const column: IColumn[] = [
    {
      title: 'Name',
      value: '',
      format: () => {
        return <p>hello</p>
      },
      style: {
        color: 'red',
      },
      children: [
        {
          title: 'Firstname',
          value: 'firstname',
          format: () => {
            return <p>hello</p>
          },
        },
        {
          title: 'Lastname',
          value: 'lastname',
          format: () => {
            return <p>hello</p>
          },
        },
      ],
    },
    {
      title: 'Location',
      value: '',
      format: () => {
        return <p>hello</p>
      },
      children: [
        {
          title: 'City',
          value: 'location.separate.city',
        },
        {
          title: 'State',
          value: 'location.separate.state',
        },
        {
          title: 'State',
          value: 'location.separate.state',
        },
        {
          title: 'State',
          value: 'location.separate.state',
        },
      ],
    },
    {
      title: 'Age',
      value: 'age',
      format: () => {
        return <p>hello</p>
      },
      children: [
        {
          title: 'Day',
          value: 'age.day',
          format: () => {
            return <p>hello</p>
          },
        },
        {
          title: 'Month',
          value: 'age.month',
          format: () => {
            return <p>hello</p>
          },
        },
        {
          title: 'Year',
          value: 'age.year',
          format: () => {
            return <p>hello</p>
          },
        },
      ],
    },
    {
      title: 'Parent Name',
      value: 'parent_name',
    },
  ]

  const colData = [
    {
      firstname: 'Ayush',
      lastname: 'Papnai',
      age: {
        day: '26',
        month: '05',
        year: '1997',
      },
      location: {
        separate: {
          state: 'Maharashtra',
          city: 'Pune',
        },
        address: 'Pune,Maharashtra',
      },
      parent_name: 'Ramesh',
    },
  ]

  return (
    <div>
      <Table
        columns={column}
        data={colData}
        border={1}
        draggableCol
        alternateRowColored="#d6d6d6"
      />
    </div>
  )
}

export default App

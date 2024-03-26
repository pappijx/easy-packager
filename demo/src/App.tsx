import './App.css'
import { Table } from '../../src/components'
import { IColumn } from '../../src/components/Table'

function App() {
  const column: IColumn[] = [
    {
      id: '1',
      title: 'Name',
      value: '',
      children: [
        {
          id: '2',
          title: 'Firstname',
          value: '',
          format: (_: unknown, rowData) => {
            return rowData.firstname
          },
          headStyle: {
            color: '',
          },
          cellStyle: {
            color: '',
          },
        },
        {
          id: '3',
          title: 'Lastname',
          value: 'lastname',
        },
      ],
    },
    {
      id: '4',
      title: 'Location',
      value: '',
      children: [
        {
          id: '5',
          title: 'City',
          value: 'location.separate.city',
        },
        {
          id: '6',
          title: 'State',
          value: 'location.separate.state',
        },
      ],
    },
    {
      id: '7',
      title: 'Parent Name',
      value: 'parent_name',
    },
    {
      id: '8',
      title: 'Daughter Name',
      value: 'daughter',
    },
    {
      id: '9',
      title: 'Age',
      value: 'age',
      children: [
        {
          id: '10',
          title: 'Day',
          value: 'age.day',
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          format(value, _, __) {
            return value
          },
        },
        {
          id: '11',
          title: 'Month',
          value: 'age.month',
        },
        {
          id: '12',
          title: 'Year',
          value: 'age.year',
        },
      ],
    },
  ]

  const colData = [
    {
      id: '13123123',
      firstname: 'Piyush111',
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
    {
      id: '131231231',
      firstname: 'Piyush11',
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
    {
      id: '131231231',
      firstname: 'Piyush11',
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
    {
      id: '131231231',
      firstname: 'Piyush11',
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
    {
      id: '131231231',
      firstname: 'Piyush11',
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
    {
      id: '131231231',
      firstname: 'Piyush11',
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
    <div
      style={{
        height: '70vh',
        overflow: 'auto',
        scrollbarWidth: 'none',
      }}
    >
      <Table
        columns={column}
        rowHeight="20px"
        isExpandable
        expandedComponent={<p>Hello</p>}
        data={colData}
        draggableCol
        border={true}
        showSerialNumber={true}
        colorScheme="#ff0000"
        alternateRowColored={true}
      />
    </div>
  )
}

export default App

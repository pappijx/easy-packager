import './App.css'
import { Table } from '../../src/components'
import { IColumn } from '../../src/components/Table'
function App() {
  const column: IColumn[] = [
    {
      title: 'Name',
      value: '',
      children: [
        {
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
          title: 'Lastname',
          value: 'lastname',
        },
      ],
    },
    {
      title: 'Location',
      value: '',
      children: [
        {
          title: 'City',
          value: 'location.separate.city',
        },
        {
          title: 'State',
          value: 'location.separate.state',
        },
      ],
    },
    {
      title: 'Parent Name',
      value: 'parent_name',
    },
    {
      title: 'Daughter Name',
      value: 'daughter',
    },
    {
      title: 'Age',
      value: 'age',
      children: [
        {
          title: 'Day',
          value: 'age.day',
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          format(value, _, __) {
            return value
          },
        },
        {
          title: 'Month',
          value: 'age.month',
        },
        {
          title: 'Year',
          value: 'age.year',
        },
      ],
    },
  ]

  const colData = [
    {
      firstname: 'Piyush',
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
    {
      firstname: 'Ayush',
      lastname: 'Papnai',
      age: {
        day: '26',
        month: '15',
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
      firstname: 'Ayush',
      lastname: 'Papnai',
      age: {
        day: '26',
        month: '15',
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
      firstname: 'Ayush',
      lastname: 'Papnai',
      age: {
        day: '26',
        month: '15',
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
      firstname: 'Ayush',
      lastname: 'Papnai',
      age: {
        day: '26',
        month: '15',
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
      daughter: 'dhvani',
    },
    {
      firstname: 'Ayush',
      lastname: 'Papnai',
      age: {
        day: '26',
        month: '15',
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
      firstname: 'Ayush',
      lastname: 'Papnai',
      age: {
        day: '26',
        month: '15',
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
      firstname: 'Ayush',
      lastname: 'Papnai',
      age: {
        day: '26',
        month: '15',
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
      firstname: 'Ayush',
      lastname: 'Papnai',
      age: {
        day: '26',
        month: '15',
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
      firstname: 'Ayush',
      lastname: 'Papnai',
      age: {
        day: '26',
        month: '15',
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
      firstname: 'Ayush',
      lastname: 'Papnai',
      age: {
        day: '26',
        month: '15',
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
      firstname: 'Ayush',
      lastname: 'Papnai',
      age: {
        day: '26',
        month: '15',
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
      firstname: 'Ayush',
      lastname: 'Papnai',
      age: {
        day: '26',
        month: '15',
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
        height: '50vh',
        overflow: 'auto',
        scrollbarWidth: 'none',
      }}
    >
      <Table
        columns={column}
        rowHeight="20px"
        isExpandable
        data={colData}
        draggableCol
        border={true}
        showSerialNumber={true}
        colorScheme="#d18843"
        alternateRowColored={true}
      />
    </div>
  )
}

export default App

# Easy Packager

Welcome to the React Easy Packager Component Library! This library provides a collection of reusable and customizable React components to help you build beautiful and efficient user interfaces for your web applications.

## Features

- **Modular Design**: Each component is designed to be highly modular, allowing for easy integration into your projects.
- **Customizable Styles**: Customize the appearance of components to match your project's design system using CSS-in-JS or styled-components.
- **Accessibility**: All components are built with accessibility in mind, ensuring that your application is usable by everyone.
- **Responsive**: Components are responsive by default, providing a seamless experience across different screen sizes and devices.
- **Documentation**: Comprehensive documentation with examples and usage guidelines to get you started quickly.

## Installation

You can install the React Component Library via npm:

```
npm i all-easy-packager
```

or

```
yarn add all-easy-packager
```

## Usage

## Recursive component builder

```
https://codesandbox.io/p/sandbox/recursive-c4s9vz?file=%2Fsrc%2FSampleCommentComponent.tsx%3A55%2C76
```

```
import './App.css'
import { Table } from '../node_modules/all-easy-packager'
import { IColumn } from '../node_modules/all-easy-packager'

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
            color: 'white',
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
      id: '1',
      firstname: 'John',
      lastname: 'Deo',
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
        address: 'Pune, Maharashtra',
      },
      parent_name: 'Papa ji',
    },
    {
      id: '2',
      firstname: 'John',
      lastname: 'Deo',
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
        address: 'Pune, Maharashtra',
      },
      parent_name: 'Papa ji',
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
        expandedComponent={(item) => {
          return (
            <div
              style={{
                display: 'flex',
                width: '100%',
              }}
            >
              <p>{item?.firstname}</p>
              <p>{item?.parent_name}</p>
              <p>{item?.location.separate?.city}</p>
              <p>{item?.location.separate?.state}</p>
            </div>
          )
        }}
        data={colData}
        draggableCol
        border={true}
        showSerialNumber={true}
        colorScheme="#004886"
        alternateRowColored={true}
      />
    </div>
  )
}

export default App

```

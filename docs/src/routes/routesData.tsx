import React from 'react'
import TableComponent from '../pages/TableComponent'
import { CommentSection, FileDirectory } from '../pages/RecursiveComponentCreator'
import MainLayout from '../components/MainLayout.tsx'
import { Outlet } from 'react-router-dom'

export interface IRouteData {
  label: string
  path: string
  element?: React.ReactNode
  children?: IRouteData[]
}

export const routeData: IRouteData = {
  label: 'Home',
  path: '',
  element: (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
  children: [
    { label: 'Table Component', path: 'table', element: <TableComponent /> },
    {
      label: 'Recursive Component',
      path: 'recursive-builder',
      children: [
        {
          label: 'Comment Component',
          path: 'comment-component',
          element: <CommentSection />,
        },
        {
          label: 'File Directory Component',
          path: 'file-directory-component',
          element: <FileDirectory />,
        },
      ],
    },
  ],
}

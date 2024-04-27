import React from 'react'
import TableComponent from '../pages/TableComponent'
import { CommentSection, FileDirectory } from '../pages/RecursiveComponentCreator'
import MainLayout from '../components/MainLayout.tsx'
import { Outlet } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'
import { BiRefresh } from 'react-icons/bi'
import { FaTableCells } from 'react-icons/fa6'

export interface IRouteData {
  label: string
  path: string
  element?: React.ReactNode
  Icon?: React.ReactNode
  children?: IRouteData[]
}

export const routeData: IRouteData = {
  label: 'Home',
  path: '',
  Icon: <HiHome />,
  element: (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
  children: [
    {
      label: 'Table Component',
      Icon: <FaTableCells />,
      path: '/table',
      element: <TableComponent />,
    },
    {
      label: 'Recursive Component',
      path: 'recursive-builder',
      Icon: <BiRefresh />,
      children: [
        {
          label: 'Comment Component',
          path: '/recursive-builder/comment-component',
          element: <CommentSection />,
        },
        {
          label: 'File Directory Component',
          path: '/recursive-builder/file-directory-component',
          element: <FileDirectory />,
        },
      ],
    },
  ],
}

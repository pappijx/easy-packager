import { PropsWithChildren } from 'react'
import SideNavbar from '../SideNavbar'
import { routeData } from '../../routes/routesData'

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        height: '100vh',
      }}
    >
      <div
        style={{
          width: '20%',
          height: '100%',
        }}
      >
        <SideNavbar routes={routeData} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
          gap: '1rem',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default MainLayout

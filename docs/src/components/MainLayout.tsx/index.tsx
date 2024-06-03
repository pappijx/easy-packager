import { PropsWithChildren } from 'react'
import SideNavbar from '../SideNavbar'
import { routeData } from '../../routes/routesData'

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          height: '100%',
        }}
      >
        <SideNavbar routes={routeData} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          padding: '1rem',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default MainLayout

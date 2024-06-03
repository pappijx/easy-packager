import { useLocation, useNavigate } from 'react-router-dom'
import { IRecursiveComponent, RecursiveComponentBuilder, RecursiveComponentContext } from 'wiz-ui'
import { IRouteData } from '../../routes/routesData'
import { BiChevronDown } from 'react-icons/bi'
import { useState } from 'react'
import { FaHamburger } from 'react-icons/fa'

interface IExtraKeys {
  isOpen: boolean
}

const SideNavComponent = ({
  data,
  children,
  extraKeys,
}: IRecursiveComponent<IRouteData, IExtraKeys>) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [show, setShow] = useState(false)
  const { isOpen } = extraKeys
  const selectedRoute =
    pathname === data.path ||
    (data.children?.length &&
      data.path !== '' &&
      data.children?.some((item) => item.path === pathname))
  return (
    <>
      <div
        style={{
          display: 'flex',
          height: '40px',
          textDecoration: 'none',
          alignItems: 'center',
          backgroundColor: selectedRoute ? 'red' : '',
        }}
        onClick={children ? () => null : () => navigate(data.path)}
      >
        <div style={{ padding: '0rem 1rem', display: 'grid', placeItems: 'center' }}>
          {data.Icon}
        </div>
        <div
          style={{
            transition: '0.3s',
            width: isOpen ? '180px' : '0px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {isOpen && data.label}
          {children && data.path && (
            <BiChevronDown
              style={{ transition: '0.3s', rotate: show ? '' : '-180deg' }}
              onClick={() => setShow((prev) => !prev)}
            />
          )}
        </div>
      </div>

      {((show && isOpen) || data.path === '') && <div>{children}</div>}
    </>
  )
}

const SideNavbar = ({ routes }: { routes: IRouteData }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 'fit-content',
        backgroundColor: '#e5e5e5',
        height: '100%',
        borderRight: 'solid 1px #a7a7a7',
      }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <FaHamburger
        style={{
          height: '40px',
          padding: '1rem 1rem 0rem 1rem',
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      />
      <RecursiveComponentContext data={routes}>
        <RecursiveComponentBuilder extraKeys={{ isOpen }} component={SideNavComponent} />
      </RecursiveComponentContext>
    </div>
  )
}

export default SideNavbar

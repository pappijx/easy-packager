import { Link } from 'react-router-dom'
import {
  IRecursiveComponent,
  RecursiveComponentBuilder,
  RecursiveComponentContext,
} from 'all-easy-packager'
import { IRouteData } from '../../routes/routesData'
import { BiChevronDown } from 'react-icons/bi'
import { useState } from 'react'

const SideNavComponent = ({ data, children, parent }: IRecursiveComponent<IRouteData>) => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <div
        style={{
          padding: '0.5rem',
          display: 'flex',
          fontSize: '14px',
        }}
      >
        {data.element && data.path && (
          <Link
            style={{
              textDecoration: 'none',
            }}
            to={`../${parent?.path}/${data.path}`}
          >
            {data.label}
          </Link>
        )}

        {!data.element && (
          <div>
            {data.label}{' '}
            <BiChevronDown
              style={{
                rotate: show ? '180deg' : '',
              }}
              onClick={() => setShow((prev) => !prev)}
            />
          </div>
        )}
        {!data.path && <div>{data.label}</div>}
      </div>

      {(show || data.path === '') && (
        <div
          style={{
            paddingLeft: data.path ? '0.5rem' : '',
          }}
        >
          {children}
        </div>
      )}
    </div>
  )
}

const SideNavbar = ({ routes }: { routes: IRouteData }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#e5e5e5',
        height: '100%',
        borderRight: 'solid 1px #a7a7a7',
      }}
    >
      <RecursiveComponentContext data={routes}>
        <RecursiveComponentBuilder component={SideNavComponent} />
      </RecursiveComponentContext>
    </div>
  )
}

export default SideNavbar

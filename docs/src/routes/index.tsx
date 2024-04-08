import { useRoutes } from 'react-router-dom'
import { IRouteData } from './routesData'

const AppRouter = ({ routes }: { routes: IRouteData }) => {
  const routers = useRoutes([routes])
  return routers
}

export default AppRouter

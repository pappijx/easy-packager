import AppRouter from './routes'
import { routeData } from './routes/routesData'

const App = () => {
  return <AppRouter routes={routeData} />
}

export default App

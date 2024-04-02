import { Link, Outlet, Route, Routes } from 'react-router-dom'
import TableComponent from './pages/TableComponent'
import RecursiveComponentCreator from './pages/RecursiveComponentCreator'

const App = () => {
  return (
    <Routes>
      <Route
        path=""
        element={
          <>
            <nav>
              <Link to="table">Table</Link>
              <Link to="recursivecomponent">Recursive Component</Link>
              <Outlet />
            </nav>
          </>
        }
      >
        <Route path="table" element={<TableComponent />} />
        <Route path="recursivecomponent" element={<RecursiveComponentCreator />} />
      </Route>
    </Routes>
  )
}

export default App

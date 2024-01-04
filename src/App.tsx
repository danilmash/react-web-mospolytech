import TableComponent from './components/TableComponent'
import NavBar from './components/NavBar'
import MainRouter from './app/routes/MainRouter'
import { AuthProvider, useAuth } from './contexts/AuthContext'

function App() {
  const { isAuthenticated } = useAuth()
    return (
      <>
        
        <NavBar />

        <MainRouter isAuth={isAuthenticated} />

      </>
    )
  }
  
export default App

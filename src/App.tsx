import TableComponent from './components/TableComponent'
import NavBar from './components/NavBar'
import MainRouter from './app/routes/MainRouter'
import { useAuth } from './contexts/AuthContext'

function App() {
  const { isAuthenticated } = useAuth()
    return (
      <>
        
        <NavBar />
        <div className='wrapper'>
          <MainRouter  isAuth={isAuthenticated} />
        </div>
        

      </>
    )
  }
  
export default App

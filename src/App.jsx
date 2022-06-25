import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import AuthLayout from './layout/AuthLayout'
import Login from './pages/login'
import Register from './pages/register'


function App() {

  return (

    <BrowserRouter>
      <AuthProvider>

          <Routes>

            <Route path="/" element={<AuthLayout/>}>

                <Route index element={ <Login />}/>

                <Route path="sign-in" element={ <Register />} />

            </Route>






          </Routes>

      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

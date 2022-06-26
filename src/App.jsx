import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ButtonForm from './components/Buttons/ButtonForm'
import { AuthProvider } from './context/AuthContext'

import AuthLayout from './layout/AuthLayout'
import PrivateLayout from './layout/PrivateLayout'


import Login from './pages/LoginUser'
import Register from './pages/RegisterUser'
import Home from './pages/HomeUser'


function App() {

  return (
    
    <BrowserRouter>
      <AuthProvider>

          <Routes>


            <Route path="/" element={<AuthLayout/>}>

                  <Route index element={<Login />} /> 
             
            
                  <Route path="sign-in" element={ <Register />} />
          
            </Route>



            <Route path="/home" element={<PrivateLayout/>}>

                  <Route index element={<Home />} /> 
             
            
                  {/* <Route path="sign-in" element={ <Register />} /> */}
          
            </Route>





          </Routes>

      </AuthProvider>
    </BrowserRouter>
    
  )
}

export default App

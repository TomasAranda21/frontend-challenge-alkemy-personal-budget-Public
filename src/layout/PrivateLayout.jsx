import { Outlet, Navigate } from 'react-router-dom'
import Header from '../components/Header/Header'

import useAuth from '../hooks/useAuth'
import useOperation from '../hooks/useOperation'

const PrivateLayout = () => {


    const { auth, loading} = useAuth()

    const { loadingOper } = useOperation()

    if(loading) return 'cargando'

    if(loadingOper) return 'cargando'
    

    return (
        <>
            <Header />
  
            { auth?._id ? (
            <main className="container mx-auto mt-13">
              <Outlet /> 
              
            </main>
            ): <Navigate to="/" /> }
  
  
            {/* <Footer /> */}
        </>
    )



}

export default PrivateLayout
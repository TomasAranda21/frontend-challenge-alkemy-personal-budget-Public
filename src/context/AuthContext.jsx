import React, {useState, useEffect} from 'react'
import { createContext } from 'react'
import Axios from '../config/Axios'
import checkToken from '../helpers/CheckToken'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

  const [auth, setAuth] = useState({})

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const authUser = async () => {

      const token = localStorage.getItem('token_user00012304050')

      if(!token){

        setLoading(false)
        return

      }

      try {
        
        const { data } = await Axios('/profile', checkToken(token))

        setAuth(data)


      } catch (error) {
        
        setAuth({})

        return {
          msg: error?.response.data.msg,
          error: true
        }

      }

      setLoading(false)

    }

    authUser()



  }, [])

  
  
  const loginUser = async ({ email, password }) => {
    
    try {
      
      const {data} = await Axios.post('/login', {  email, password})
      
      localStorage.setItem('token_user00012304050', data.token)
      
        setAuth(data)
        
        window.location.href = "/home"

        
      } catch (error) {
        
        console.log(error)
        
      }
      
    }
    
  const registerUser = async ({ name, email, password}) => {

    try {

      await Axios.post('/register', { name, email, password})
      
    } catch (error) {
      console.log(error)
    }

  }






  return (
    <AuthContext.Provider
    value={{
      registerUser,
      loginUser,
      auth,
      loading,


    }}
    >

    {children}

    </AuthContext.Provider>
  )



}


export default AuthContext
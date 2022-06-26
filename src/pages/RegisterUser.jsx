import React from 'react'
import FormLoginAndRegister from '../components/FormLoginAndRegister'
import useAuth from '../hooks/useAuth'

const Register = () => {

  const {registerUser} = useAuth()

  return (
   
    <FormLoginAndRegister login={false} functionUser={registerUser}/>


  )
}

export default Register
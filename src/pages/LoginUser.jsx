import FormLoginAndRegister from '../components/Form/FormLoginAndRegister'
import useAuth from '../hooks/useAuth'

const Login = () => {

    const { loginUser } = useAuth()

  return (

    <div className="">

        <FormLoginAndRegister login={true}  functionUser={loginUser}/>

    </div>

  )

}

export default Login
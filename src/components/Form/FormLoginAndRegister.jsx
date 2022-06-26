import React from 'react'
import {Formik} from 'formik'
import {Link} from 'react-router-dom'
import InputsForm from '../InputsForm/InputsForm'
import ButtonForm from '../Buttons/ButtonForm'

const FormLoginAndRegister = ({ login, functionUser }) => {

  return (

    <>
    <div className="shadow-2xl white p-5 w-1/2">

        <Formik
        initialValues={{
            name: '',
            email: '',
            password: '',
        }}

        onSubmit={async (values) => {


            functionUser(values)

            
        }}
        
        >

            {({handleSubmit, values, handleChange}) => (


                <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">

                {!login && 

                    <InputsForm
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    name="name"
                    /> 
                }

                    <InputsForm
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                    />


                    <InputsForm
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    name="password"
                    />

                    <div className="mt-2">

                        <ButtonForm text='Login'/>
                    </div>

                    <Link to={'/sign-in'}>create an account</Link>

                    <Link to={'/'}>you have signed in</Link>
                </form>

            )}

        </Formik>

    </div>
   
   
   
   </>

  )
}

export default FormLoginAndRegister
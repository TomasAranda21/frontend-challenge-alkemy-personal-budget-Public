import React from 'react'
import {Formik} from 'formik'
import {Link} from 'react-router-dom'
import InputsForm from '../InputsForm/InputsForm'
import ButtonForm from '../Buttons/ButtonForm'

const FormAddOperation = ({functionUser, setViewModal}) => {

    return (

        <>
        <div className="shadow-2xl bg-gray-100 rounded  w-1/3">
    
            <Formik
            initialValues={{
                amount: '',
                concept: '',
                category: '',
                type: '',
                data: '',
            }}
    
            onSubmit={async (values) => {
    
    

                functionUser(values)
    
                
            }}
            
            >
    
            {({handleSubmit, values, handleChange}) => (

                <div className="flex relative">


                    <form action="" onSubmit={handleSubmit} className=" w-full flex flex-col gap-5 p-5">

                        <InputsForm
                        type="number"
                        value={values.amount}
                        onChange={handleChange}
                        name="amount"
                        /> 

                        <select name="category" id="" onChange={handleChange}>
                            <option value="">Select Category</option>
                            <option value="shopping">Shopping</option>
                            <option value="health">Health</option>
                            <option value="leisure">Leisure</option>
                            <option value="restaurant">Restaurant</option>
                            <option value="food">Food</option>
                        </select>


                        <select name="type" id="" onChange={handleChange}>
                            <option value="">Select type</option>
                            <option value="expense">Expense</option>
                            <option value="income">Income</option>
                        
                        </select>


                        <InputsForm
                        type="text"
                        value={values.concept}
                        onChange={handleChange}
                        name="concept"
                        />

                        <InputsForm
                        type="date"
                        value={values.data}
                        onChange={handleChange}
                        name="data"
                        />



                        <div className="mt-2">

                            <ButtonForm text='Add'/>
                        </div>


                    </form>

                    <div className="absolute top-0 right-0 p-2 px-5 text-xl text-red-500 font-bold">
                        <button className='' onClick={() => setViewModal(false)}>X</button>

                    </div>
                </div>

            )}

        </Formik>

    </div>
       
       </>
    
    )
}

export default FormAddOperation
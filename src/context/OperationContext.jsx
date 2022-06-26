import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import Axios from '../config/Axios'
import checkToken from '../helpers/CheckToken'

const OperationContext = createContext()



export const OperationProvider = ({children}) => {

    const [operations, setOperations] = useState([])

    const token = localStorage.getItem('token_user00012304050')

    useEffect(() => {

        const getOperation = async () => {

            const {data} = await Axios('/', checkToken(token))

            setOperations(data)


        }
        
        getOperation()


    }, [])



    const addOperation = async (value) => {

        try {

            const { data } = await Axios.post('/', value, checkToken(token))
    
            console.log(data)
            
        } catch (error) {

            console.log(error)
            
        }

    }

    const updateOperation = async (id) => {

        console.log(id)

    }




  return (

    <OperationContext.Provider

    value={{
        addOperation,
        updateOperation,
        operations,


    }}

    >

    {children}

    </OperationContext.Provider>

  )
}

export default OperationContext
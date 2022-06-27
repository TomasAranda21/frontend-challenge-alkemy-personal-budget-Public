import React, { useEffect, useState } from 'react'
import ModalAddOperation from '../Modals/ModalAddOperation'

const TableTransactions = ({type, operations, deleteOperation, setEdition, setViewModal}) => {

    const [typeOperation, setTypeOperation] = useState([])



    useEffect(() => {

        const filterOperations = operations?.filter(e => e.type === type)

        setTypeOperation(filterOperations)


    }, [type])


  return (

    <div>
        <table className="w-2/3 mx-auto border-2 p-5">
            <thead>
                <tr className="">
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Concept</th>
                    <th>Date</th>
                    <th></th>
                </tr>
            </thead>

       
            <tbody className="">
                {typeOperation?.map(oper => (

                    <tr className="text-center" key={oper._id}>

                        <td>${oper.amount}</td>

                        <td>{oper.category}</td>

                        <td>{oper.concept}</td>

                        <td>{oper.date}</td>

                        <td className="flex gap-5 my-5">

                            <button onClick={() => {

                            setViewModal(true)
                            setEdition(oper)

                            }}>Editar</button>

                            <button onClick={() => deleteOperation(oper._id)}
                            
                            >Eliminar</button>
                            
                        </td>

                    </tr>


                ))}


            </tbody>


        </table>




    </div>



  )
}

export default TableTransactions
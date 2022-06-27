import React, { useState } from 'react'
import ModalAddOperation from '../components/Modals/ModalAddOperation'
import TableTransactions from '../components/Table/TableTransactions'
import useOperation from '../hooks/useOperation'

const History = () => {

    const {operations, deleteOperation, editionOper, setEdition} = useOperation()

    const [isViewExpen, setIsViewExpen] = useState(true)

    const [viewModal, setViewModal] = useState(false)


  return (

    <div>
        <h1 className="text-center uppercase text-xl text-teal-600 font-bold mb-14">transaction history</h1>

        <div className="flex justify-center gap-10 mb-20">
            <button onClick={() => setIsViewExpen(false)}>income</button>

            <button onClick={() => setIsViewExpen(true)}>expenses</button>
        </div>

        {isViewExpen ? 
        
        <TableTransactions 
        type="expense" 
        operations={operations} 
        deleteOperation={deleteOperation}
        viewModal={viewModal}
        setViewModal ={setViewModal}
        setEdition={setEdition}
        
        /> 
        
        : 
        
        <TableTransactions 
        type="income" 
        operations={operations} 
        deleteOperation={deleteOperation}
        viewModal={viewModal}
        setViewModal ={setViewModal}
        setEdition={setEdition}

        
        />}


        {viewModal && 
        
        <ModalAddOperation setViewModal={setViewModal} editing={true} editionOper={editionOper}
        
        
        />
        
        
        }

    </div>


  )
}

export default History
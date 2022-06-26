import React, { useEffect, useState } from 'react'
import Operations from '../components/Card/Operations'
import FormAddOperation from '../components/Form/FormAddOperation'
import ModalAddOperation from '../components/Modals/ModalAddOperation'
import Expense from '../components/Type/Expense'
import Income from '../components/Type/Income'
import useOperation from '../hooks/useOperation'

const home = () => {

  const {addOperation, operations} = useOperation()

  const [viewModal, setViewModal] = useState(false)



  return (

    <div className="py-20">

      <div className="bg-sky-300 text-center w-1/2 mx-auto p-2 my-5 text-slate-900 text-xl font-bold flex flex-col gap-4 uppercase py-5 rounded-md">
          <h2>My budget</h2>
          <h2>$1500</h2>
      </div>

      <div className="flex justify-center">

        <button onClick={() => setViewModal(true)}
        className='font-bold uppercase p-5 bg-slate-900 text-white rounded-md'>Add transaction</button>

       
      </div>

        {/* <FormAddOperation functionUser={addOperation}/>



        <Operations operations={operations}/> */}

        <div className="flex justify-between my-10">

            <Income operations={operations}/>  


            <Expense operations={operations}/>

        </div>

        {viewModal && <ModalAddOperation setViewModal={setViewModal}/>}

        

    </div>


  )
}

export default home
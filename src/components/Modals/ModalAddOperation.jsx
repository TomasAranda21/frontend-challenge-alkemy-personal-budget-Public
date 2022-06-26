import React from 'react'
import FormAddOperation from '../Form/FormAddOperation'

const ModalAddOperation = ({setViewModal}) => {
  return (
    
    <div className="absolute top-0 w-full h-screen left-0 backdrop-brightness-50">

      <div className="flex justify-center my-32">

        <FormAddOperation setViewModal = {setViewModal}/>

      </div>
      
    </div>

  )
}

export default ModalAddOperation
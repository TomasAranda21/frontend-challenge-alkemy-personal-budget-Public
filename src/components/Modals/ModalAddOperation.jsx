import React from 'react'
import FormAddOperation from '../Form/FormAddOperation'

const ModalAddOperation = ({setViewModal, addOperation, editing, editionOper}) => {


  return (
    
    <div className="absolute top-0 w-full h-screen left-0 backdrop-brightness-50">

      <div className="flex justify-center my-32">

        {!editing ? 

        <FormAddOperation 
        setViewModal = {setViewModal} 
        functionUser={addOperation}
        amount={""}
        concept={""}
        category={""}
        type={""}
        data={""}
    
        
        />
        
      
      :

        <FormAddOperation 
    
        setViewModal = {setViewModal} 
        functionUser={addOperation}
        editing={true}
        amount={editionOper.amount}
        concept={editionOper.concept}
        category={editionOper.category}
        type={editionOper.type}
        data={editionOper.data}
        


        />
      
      
      }


      </div>
      
    </div>

  )
}

export default ModalAddOperation
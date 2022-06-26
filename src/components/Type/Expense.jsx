import React, { useEffect } from 'react'
import { useState } from 'react'
import ExpenseCircle from '../card/ExpenseCircle'

const Expense = ({operations}) => {

    const [sumAmount, setSumAmount] = useState(0)

    const [sumAmoun, setSumAmoun] = useState(0)

    const [typeExpense, setTypeExpense] = useState([])

    useEffect(() => {

        const sumeAmount = () => {

            const filterOperType = operations.filter(e => e.type === 'expense')

            const amount = filterOperType?.map(pro => pro.amount)
    
            const reduceAmount = amount.reduce((acc, currentAmount) => acc + Number(currentAmount), 0)

            setSumAmount(reduceAmount)
    
        }

        sumeAmount()

        const getExpense = () => {

            const filterOperType = operations.filter(e => e.type === 'expense')

            const category = filterOperType?.map(pro => {

                const amount = pro.amount
                const categery = pro.category

                const amountCateg = {amount, categery}

                return amountCateg
            
            })

            // Primero tengo que saber si hay una categoria repetida
            const filterCategory = category.filter(c => c.categery === 'shopping')
            // Aca tengo que saber que categoria es la repetida

            // Si no hay ninguna categoria repetida entonces lo que hacemos es agregar el monto, no hace falta sumar nada
            const amount = filterCategory?.map(pro => pro.amount)

            const reduceAmount = amount.reduce((acc, currentAmount) => acc + Number(currentAmount), 0)


            setSumAmoun(reduceAmount)

            const resto = (sumAmoun * 100) / sumAmount
            // obtener porcentaje

            console.log(resto)

            setTypeExpense(filterCategory)

        }

        getExpense()
    }, [])



  return (

 
    <div>

        <h1>$ {sumAmount}</h1>
        
        <ExpenseCircle/>
        

    </div>


  )


}

export default Expense
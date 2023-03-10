import React from 'react'
import ExpanseDate from './ExpanseDate'

const ExpenseItem = (props) => {


  return (
    <div className='flex justify-between border ring-2 m-8 p-2 rounded '>
      <div>
        <ExpanseDate date={props.date} />
      </div>
      <div>{props.title}</div>
      <div className='px-4 rounded bg-blue-400'>${props.amount}</div>
    </div>
  )
}

export default ExpenseItem

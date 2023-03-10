
import React from 'react'

const ExpanseDate = (props) => {

const month = props.date.toLocaleString('en-Us',{ month:'long'})
const Day = props.date.toLocaleString('en-Us',{day:'2-digit'})
const year = props.date.getFullYear()
  return (
    <div>
    
    <div >{month}</div>
    <div>{year}</div>
    <div>{Day}</div>
  
    </div>
  )
}

export default ExpanseDate
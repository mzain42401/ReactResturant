import React, { useState } from 'react'
import '../styles/navbar.css'
import data from '../Data/data'

const Navbar = ({uniqueList}) => {
  const [a,b]=useState(data)
  const filterItem=(category)=>{
    console.log(category);
    const updateList=data.filter((elem)=>{
      return(
        elem.category===category
      )
    })
    b(updateList)
    console.log(updateList);
    
  }

  return (
    <>
<nav>
  {
    uniqueList.map((elem,ind)=>{
      return(

        <div onClick={()=>filterItem(elem)} key={ind}> {elem}</div>
      )
    })
  }
  
</nav>
    </>
  )
}

export default Navbar

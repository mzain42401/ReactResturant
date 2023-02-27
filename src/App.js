import React from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import data from './Data/data'
const uniqueList=[...new Set(data.map((elem)=>{
  return(
    elem.category
  )
}))];
const App = () => {
  return (
    <>
      <Navbar uniqueList={uniqueList}  data={data}/>
      <Cards data={data}/>
    </>
  )
}

export default App

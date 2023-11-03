import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import AddMoney from './components/AddMoney'
import MinusMoney from './components/MinusMoney'
import ExpenseContextProvider from './components/context/ExpenseContext'
const App = () => {
  return (
   <>
 <ExpenseContextProvider> 
   <BrowserRouter>
     <Routes>
      <Route index element={<Home/>}/>
      <Route path='/addmoney' element={<AddMoney/>}/>
      <Route path='/minusmoney' element={<MinusMoney/>}/>

     </Routes>
   </BrowserRouter>
   </ExpenseContextProvider>
   </>
  )
}

export default App
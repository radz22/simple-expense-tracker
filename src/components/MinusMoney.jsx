import React from 'react'
import { useContext } from 'react'
import { ExpenseContext } from './context/ExpenseContext'
import { Link } from 'react-router-dom'
const MinusMoney = () => {

    const {handleCancel, input3, input4 , handleMinus, setInput3, setInput4} = useContext(ExpenseContext)
  return (
  <>
    <div className='w-full h-screen flex justify-center	 items-center bg-slate-300'>
       <div className='w-2/4 bg-white py-3 px-5 rounded-md max-lg:w-3/4	max-md:w-4/5	max-sm:w-11/12 '>
          
          <div className='mt-10'>
           <h1 className='text-3xl	font-semibold	max-md:text-2xl	'>Expense Tracker</h1>
          </div>
        
        <div className='mt-8 w-full'>
            <div>
                <p className='text-xl	text-violet-600	font-medium max-md:text-lg'>Add expense</p>
            </div>

            <div className='mt-4 w-full'>
                <input type='number'
                placeholder='Amount'
                className='w-full py-3 px-2 border border-[#cdcdcd] text-xl	max-md:text-lg'
                value={input3}
                onChange={(e) => setInput3(parseInt(e.target.value))}
                />
            </div>


            <div className='mt-4 w-full'>
                <input type='text'
                placeholder='Add description'
                className='w-full py-7 px-3 border border-[#cdcdcd] text-xl	max-md:text-lg'
                 value={input4}
                 onChange={(e) => setInput4(e.target.value)}
                />
            </div>
        </div>

      <div className='w-full flex justify-center items-center mt-10 gap-10 mb-10 max-[500px]:gap-14		'>
        
      <div className='bg-[#a8a8a8] py-3 px-3 rounded-md	cursor-pointer'> 
      <Link to='/'><p className='text-[#000000] text-2xl font-medium max-md:text-xl max-[500px]:text-base' onClick={handleCancel}>Cancel</p></Link>
        </div>


        <div className='bg-violet-800 py-3 px-3 rounded-md	cursor-pointer'> 
           <Link to='/'><p className='text-white text-2xl font-medium 	max-md:text-xl max-[500px]:text-base' onClick={handleMinus}>Submit</p></Link>
        </div>


        
      </div> 
       </div>

       
    </div>
  </>
  )
}

export default MinusMoney
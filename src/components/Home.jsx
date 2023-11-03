
import { useState, useContext } from 'react'

import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { ExpenseContext } from './context/ExpenseContext'
const Home = () => {
  
    
    const {displayMoney, history} = useContext(ExpenseContext)
    
  return (
    <>
 
    <div className='w-full h-screen flex justify-center	 items-center bg-slate-300'>
       <div className='w-2/4 bg-white py-3 px-5 rounded-md max-lg:w-3/4	max-md:w-4/5	max-sm:w-11/12	 '>
          
          <div className='mt-10'>
           <h1 className='text-3xl	font-semibold max-md:text-2xl	'>Expense Tracker</h1>
          </div>
        
        <div className='mt-8  w-full flex justify-between items-center'>
            <div>
                <div>
                    <h3 className='text-xl	text-violet-600	font-medium	max-md:text-lg	'>Balance</h3>
                </div>

                <div className='mt-3'>
                    <p className='text-2xl	font-medium	max-md:text-xl	'>PHP <span>{displayMoney}</span></p>
                </div>
            </div>

            <div>
                
                <div className='bg-violet-800 rounded-full	py-2 px-2'>
                    <Link to='/addmoney'> <p className='text-4xl	text-white	max-md:text-2xl		'><AiOutlinePlus/></p></Link>
                </div>
             
                <div className='mt-3 bg-violet-800 rounded-full	 py-2 px-2'>
                   <Link to='/minusmoney'><p className='text-4xl	text-white max-md:text-2xl	'><AiOutlineMinus/></p></Link>
                    </div>

                </div>
        </div>

        <div className='mt-10 border-t-2	 border-[#cfcfcf] mb-10'>
           <div className='mt-2'>
             <p className='text-xl	font-semibold max-md:text-lg	'>History</p>
           </div>

           <div className='w-full'>
            <div className='flex justify-around items-center mt-5'>
             <div>
                <p className='text-xl font-semibold	max-md:text-lg'>Amount</p>
             </div>

             <div>
                <p className='text-xl	font-semibold	max-md:text-lg'>Message</p>
             </div>
            </div>
           <div className='mt-5'>
           {history.map((item) => (
                <div className='w-full mt-4 flex justify-around items-center '>
                   
                    
                    <div>
                    <p className={`${item.color} text-xl max-md:text-base	`}>{item.operator}{item.text}</p>
                        </div>
                 <div>
                 <p className='text-[#909090] text-lg	 font-medium	'>{item.description}</p>
                  <p className='text-violet-800  max-md:text-base'>a few seconds ago</p>
                 </div>
                 
                </div>
            ))}
           </div>
           </div>
        </div>

      
       </div>

       
    </div>
    
    </>
  )
}

export default Home
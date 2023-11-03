import React, {createContext, useState} from "react"

export const ExpenseContext = createContext(null)

const ExpenseContextProvider = (props) => {

    const [displayMoney, setDisplayMoney] = useState(0)
    const [input1, setInput1] =useState('')
    const [input2, setInput2] = useState('')
    const [input3, setInput3] = useState('')
    const [input4, setInput4] = useState('')
    const [history , setHistory] = useState([])
    
   const handleAdd = () => {
       
   if(input1 == ""){
    alert("pls add any Amount")
   }else{
    setHistory([...history, {text:input1, description: input2, color:'text-[#5b9d18]', operator:"+"}])
    setDisplayMoney((parameter) => parameter += input1)
    setInput1("")
    setInput2("")
   }
   }

   const handleMinus = () => {
       
      if (input3 <= displayMoney ){
        if(input3 == ""){
          alert("invalid")
        }else{
          setHistory([...history, {text:input3, description: input4, color:'text-[#ff0000]', operator:"-"}])
          setDisplayMoney((parameter) => parameter -= input3)
            setInput3("")
            setInput4("")
        }
      }else {
        alert("invalid")
      }
     
      

   }

  const handleCancel = () => {
    setInput1("")
    setInput2("")
    setInput3("")
    setInput4("")
  }
const expenseValue = {displayMoney, handleAdd , handleCancel,  setInput1 , input1, history, input2, setInput2, input3, input4,
    setInput3, setInput4, handleMinus
}

return (
    <ExpenseContext.Provider value={expenseValue}>{props.children}</ExpenseContext.Provider>
)
}

export default ExpenseContextProvider
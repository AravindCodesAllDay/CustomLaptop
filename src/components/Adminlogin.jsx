import Singlecard from "./Singlecard"
import { useState,useEffect } from "react"
const Adminlogin=({bundle})=>{
    const [data,setData] = useState([])
    const [orders,setOrders] = useState([])
  
    useEffect(()=>{
      const getTasks= async () =>{
        const tasksFromServer = await displayCards()
        setData(tasksFromServer)
      }
      getTasks()
    },[])
  
    const displayCards = async () => {   
      const resp = await fetch('http://localhost:3001/custombuilds')
      const rawData = await resp.json()
      return rawData
    }
  
  
    
    
  
    return  (

       <>
       {data.map((decks)=><Singlecard deck={decks} bundle={bundle} />)}
       
       
       
       </>
        
    )
}


export default Adminlogin
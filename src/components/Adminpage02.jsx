import Singlecard from "./Singlecard"
import { useState,useEffect } from "react"

const Adminpage02=({bundle})=>{

    const [customdata,setData] = useState([])
  
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

    return(
      customdata.map((custombuild)=>{
        if(custombuild.buildcomplete==true){
          return(
            <Singlecard build={custombuild} bundle={bundle} />
          )
        }
      })
    )
}

export default Adminpage02
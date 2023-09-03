import ControlledCarousel from "./ControlledCarousel";
import Sampledisplay from "./Sampledisplay";
import SelectorButtons from "./SelectorButtons";
import { useState,useEffect } from "react"

function Homepage({bundle}){

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
        <>
            <ControlledCarousel/>
            <SelectorButtons/>
            <Sampledisplay build={customdata[Math.floor(Math.random()*customdata.length)]} bundle={bundle} />
            <Sampledisplay build={customdata[Math.floor(Math.random()*customdata.length)]} bundle={bundle} />
        </>
    )
}

export default Homepage
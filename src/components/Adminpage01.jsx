import Singlecard from "./Singlecard"
import { useState,useEffect } from "react"
import Button from 'react-bootstrap/Button';

const Adminpage01=({bundle})=>{

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
        if(custombuild.buildcomplete==false){
          return(
            <>
              <Singlecard build={custombuild} bundle={bundle} />
              <Button>Build completed</Button>
            </>
          )
        }
      })
    )
}

export default Adminpage01
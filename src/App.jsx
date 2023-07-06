import './App.css'
import { useState,useEffect } from 'react'
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Topnavbar from './components/Topnavbar'
import Checkform from './components/Checkform'
// import Creatcard2 from './components/Creatcard2'

function App() {

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
    const resp = await fetch('http://localhost:3000/data')
    const rawData = await resp.json()
    return rawData
  }


  const addBuild = async (order) => {
    const res = await fetch('http://localhost:3001/custombuilds', 
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    const val = await res.json()
    setOrders([...orders, val])
    alert("Your custom build is stored")
  }


  return (
    <div>
      <Topnavbar/>
      <Checkform bundle={data} onSubmit={addBuild} />
      {/* <Creatcard2/> */}
    </div>
  )
}

export default App

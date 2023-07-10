import './App.css'
import { useState,useEffect } from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Topnavbar from './components/Topnavbar'
import CreateCustombuild from './components/CreateCustombuild'
import Homepage from './components/Homepage'
import Adminlogin from './components/Adminlogin'

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
    <>
      <Topnavbar/>
      <Router>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path="/createBuild" element={<CreateCustombuild bundle={data} onSubmit={addBuild}/>}/>
            <Route path="/admin" element={<Adminlogin bundle={data}/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

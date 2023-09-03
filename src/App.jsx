import './App.css'
import { useState,useEffect } from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Topnavbar from './components/Topnavbar'
import CreateCustombuild from './components/CreateCustombuild'
import Homepage from './components/Homepage'
import Adminpage from './components/Adminpage'
import Adminlogin from './components/Adminlogin'
import Register from './components/Register'
import Userlogin from './components/Userlogin'
import Userhomepage from './components/Userhomepage'

function App() {

  const [data,setData] = useState([])
  const [orders,setOrders] = useState([])
  const [userdata,setUserdata] = useState([])

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


  useEffect(()=>{
    const getTasks= async () =>{
      const tasksFromServer = await userData()
      setUserdata(tasksFromServer)
    }
    getTasks()
  },[])

  const userData = async () => {   
    const resp = await fetch('http://localhost:3003/users')
    const rawData = await resp.json()
    return rawData
  }


  const addBuild = async (order) => {
    const navigate=useNavigate();
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
    navigate("/")
  }


  const addCustomer = async (order) => {

    const res = await fetch('http://localhost:3003/users', 
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    const val = await res.json()
    setOrders([...orders, val])
    alert("Registration Sucessfull!")
  }


  return (
    <>
      <Topnavbar/>
      <Router>
        <Routes>
            <Route path='/' element={<Homepage bundle={data}/>}/>
            <Route path="/createBuild" element={<CreateCustombuild bundle={data} onSubmit={addBuild}/>}/>
            <Route path='/adminlogin' element={<Adminlogin/>}/>
            <Route path="/adminpage" element={<Adminpage bundle={data}/>}/>
            <Route path='/userlogin' element={<Userlogin/>}/>
            <Route path="/register" element={<Register onSubmit={addCustomer}/>}/>
            <Route path='/userhomepage' element={<Userhomepage userData={userData}/>}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App

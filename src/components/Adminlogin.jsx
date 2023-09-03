import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Adminlogin() {

  const navigate=useNavigate();
  const [data,setData] = useState([])
  const [mail,setMail] = useState('')
  const [pass,setPass] = useState('')

  useEffect(()=>{
    const getTasks= async () =>{
      const tasksFromServer = await displayCards()
      setData(tasksFromServer)
    }
    getTasks()
  },[])

  const displayCards = async () => {   
    const resp = await fetch('http://localhost:3002/admin')
    const rawData = await resp.json()
    return rawData
  }

  const checkLogin =(val) =>{
    val.preventDefault()

    data.map((value)=>{
      if(mail==value.mail && pass==value.password){
        navigate("/adminpage")
      }else{
        alert("Mail-ID or Password is wrong")
      }
  })

  }

  return (
    <Card style={{ width: '700px' }}>
        <h2>Admin Login</h2>
    <Form onSubmit={checkLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Mail address</Form.Label>
        <Form.Control type="email" placeholder="Enter mail" onChange={(val)=>setMail(val.target.value)} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(val)=>setPass(val.target.value)} required/>
      </Form.Group>

      <Button variant="primary" type="submit">Login</Button>
    </Form>
    </Card>
  );
}

export default Adminlogin;

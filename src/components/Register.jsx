import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Register({onSubmit}) {

  const [name,setName] = useState('')
  const [mail,setMail] = useState('')
  const [pass,setPass] = useState('')
  const custombuilds = []

  const upload=(val)=>{
    val.preventDefault()
    onSubmit({name,mail,pass,custombuilds})
    setName("")
    setMail("")
    setPass("")
}

  return (
    <Card>
        <h2>Registration</h2>
        <Form onSubmit={upload}>
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name*</Form.Label>
            <Form.Control type="text" placeholder="Name" value={name} onChange={(val)=>setName(val.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address*</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={mail} onChange={(val)=>setMail(val.target.value)} required/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password*</Form.Label>
            <Form.Control type="password" placeholder="Password" value={pass} onChange={(val)=>setPass(val.target.value)} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Accept all conditions" required/>
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
        </Form>
    </Card>
  );
}

export default Register;
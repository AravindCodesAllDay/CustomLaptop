import {useState} from 'react'
import Displaycard from "./Displaycard";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Checkform({bundle,onSubmit}) {

    const [name,setName] = useState('')
    const [mail,setMail] = useState('')    
    const [processorid,setprocessorid] = useState('')
    const [ramid,setramid] = useState('')
    const [memoryid,setmemoryid] = useState('')

    const getCardId = (tag) =>{
        if(tag.includes("p")){
            setprocessorid(tag)
        }else if(tag.includes("r")){
            setramid(tag)
        }else if(tag.includes("m")){
            setmemoryid(tag)
        }
    }

    const upload=(val)=>{
        val.preventDefault()
        onSubmit({name,mail,processorid,ramid,memoryid})        
        setName("")
        setMail("")
        setmemoryid("")
        setramid("")
        setprocessorid("")
    }

  return (
    <Form onSubmit={upload}>

        <Form.Group>
            {bundle.map((decks)=><Displaycard deck={decks} findCardId={getCardId} />)}
        </Form.Group>

        <Container>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name*</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" required value={name} onChange={(val)=>setName(val.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email-Id*</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required value={mail} onChange={(val)=>setMail(val.target.value)}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I Accept and Submit" required/>
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
        </Container>
    </Form>

  );
}

export default Checkform;

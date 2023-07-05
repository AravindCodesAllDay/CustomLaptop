import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Creatcard({card,checkCardId}) {  
    
  return  (
        <Card style={{ width: '300px' }}>
          <Card.Img variant="top" src={card.profile} alt='Image' />
          <Card.Body>
            <Card.Title>Item Brand : {card.brand}</Card.Title>
            <Card.Text>
              Item Price : {card.price}
            </Card.Text>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="radio" label="Select" onChange={()=>checkCardId(card.tag)} id={card.tag} name={card.name} required />
            </Form.Group>
          </Card.Body>
        </Card>
  )}

export default Creatcard

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function Resultcard({card,deck}) {  
    
  return  (
        // <Card style={{ width: '300px' }}>
        //   <Card.Img variant="top" src={card.profile} alt='Image' />
        //   <Card.Body>
        //     <Card.Title>Item Brand : {card.brand}</Card.Title>
        //     <Card.Text>
        //       <b>Item Variant :</b> {card.model}<br/>
        //       <b>Item Price(Rs) :</b> {card.price}
        //     </Card.Text>
        //     <Form.Group className="mb-3" controlId="formBasicCheckbox">
        //       <Form.Check type="radio" label="Select" onChange={()=>checkCardId(card.tag)} id={card.tag} name={card.name} required />
        //     </Form.Group>
        //   </Card.Body>
        // </Card>
        <>
        console.log({card[deck ["processorid"]]});
        </>
  )}

export default Resultcard

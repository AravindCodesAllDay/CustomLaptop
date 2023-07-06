import Creatcard from "./Creatcard"
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Displaycard({deck,findCardId}) {
    
  return  (
    <Container>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link><b>{deck[1].name}</b></Nav.Link>
        </Nav.Item>
      </Nav>
      <Row>{deck.map((cards)=><Col><Creatcard card={cards} checkCardId={findCardId} /></Col>)}</Row>
    </Container>
  )}

export default Displaycard

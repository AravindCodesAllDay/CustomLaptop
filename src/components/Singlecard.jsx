import Container from 'react-bootstrap/Container';
import Resultcard from './Resultcard';
function Singlecard({deck,bundle}) {
    
    return  (
        
      <Container>
        
         console.log("{deck.name}")
         {bundle.map((card)=><Resultcard card={card} deck={deck} />)}
      </Container>
    )}


    export default Singlecard
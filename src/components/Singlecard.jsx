import Container from 'react-bootstrap/Container';
import Resultcard from './Resultcard';
import Row from 'react-bootstrap/esm/Row';
function Singlecard({build,bundle}) {
    
    return  (        
      <Container>
        <h3>
            Name : {build.name}<br/>
            Mail : {build.mail}
        </h3>
        
        <Row>
          {bundle.map((cards)=>cards.map((card)=><Resultcard card={card} component={build.processorid} />))}
          {bundle.map((cards)=>cards.map((card)=><Resultcard card={card} component={build.graphicscardid} />))}
          {bundle.map((cards)=>cards.map((card)=><Resultcard card={card} component={build.powersupplyid} />))}
          {bundle.map((cards)=>cards.map((card)=><Resultcard card={card} component={build.ramid} />))}
          {bundle.map((cards)=>cards.map((card)=><Resultcard card={card} component={build.memoryid} />))}
        </Row>
    
      </Container>
    )}


    export default Singlecard
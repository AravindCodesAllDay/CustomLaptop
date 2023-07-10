import Button from 'react-bootstrap/Button';
import { Outlet} from "react-router-dom";

function SelectorButtons() {
  return (    
    <center>
        <Button variant="outline-primary" href='/createBuild' size='lg'>Create Custom Build</Button>
        <Button variant="outline-primary" href='/admin' size='lg'>Admin Login</Button>
        <Outlet />
    </center> 
  );
}

export default SelectorButtons;
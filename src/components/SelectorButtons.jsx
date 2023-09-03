import Button from 'react-bootstrap/Button';
import { Outlet} from "react-router-dom";

function SelectorButtons() {
  return (    
    <center>
        <Button variant="outline-primary" href='/userlogin' size='lg'>User Login</Button>
        <Button variant="outline-primary" href='/register' size='lg'>Login Register</Button>
        <Button variant="outline-primary" href='/createBuild' size='lg'>Create Custom Build</Button>
        <Button variant="outline-primary" href='/adminlogin' size='lg'>Admin Login</Button>
        <Outlet />
    </center> 
  );
}

export default SelectorButtons;
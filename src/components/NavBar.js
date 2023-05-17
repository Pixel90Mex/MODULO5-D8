import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NewBadge from './Badge';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
      
        <Navbar.Brand href="#"><Link to='/'><Button>EPIBOOKS!</Button></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action2">About</Nav.Link>
            <NewBadge
                str='Ciao'
                color='success'
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
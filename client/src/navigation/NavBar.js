import React from 'react'
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import logo from '../assets/tiddyapp-logo.png'

function NavBar() {
  return (
    <div>
  <Navbar bg="light" expand="lg" style={{marginBottom:"20px"}}>
  <Container>
    <Navbar.Brand ><img src={logo} style={{width:"15rem"}} alt="Logo"></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link >Home</Nav.Link>
        <Nav.Link >Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item >Action</NavDropdown.Item>
          <NavDropdown.Item >Another action</NavDropdown.Item>
          <NavDropdown.Item >Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item >Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default NavBar
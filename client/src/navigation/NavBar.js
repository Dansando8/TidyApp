import React from 'react'
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import logo from '../assets/logo.png'

function NavBar() {
  const userId = localStorage.getItem('userId')
  return (
    <div>
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand ><img src={logo} style={{width:"15rem"}} alt="Logo"></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"  className="order-md-1 order-0"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="justify-content-end" style={{ width: "100%" }}>
        <Nav.Link href={`/dashboard/${userId}`}>Dashboard</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default NavBar
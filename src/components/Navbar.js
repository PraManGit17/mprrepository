import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './styles.css';  // Ensure you link your styles file here

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="nav-link-logo">Sports Analytics</Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/login" className="nav-link-rounded">Login</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/logout" className="nav-link-rounded">Logout</Link>
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>
            <Link to="/" className="nav-link-rounded">Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/player-performance" className="nav-link-rounded">Player Performance</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/match-outcome" className="nav-link-rounded">Match Outcome</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/team-strategy" className="nav-link-rounded">Team Strategy</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;

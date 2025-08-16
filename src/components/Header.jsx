import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header>
      <Navbar className="navbar-custom" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>My Blog</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/create">
                <Nav.Link>Create Post</Nav.Link>
              </LinkContainer>
              <Button onClick={toggleTheme} variant={theme === 'light' ? 'dark' : 'light'}>
                {theme === 'light' ? 'Dark' : 'Light'} Mode
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
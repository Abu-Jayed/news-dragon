import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa";

const NavigationBar = () => {
  const { user,logOut } = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then()
    .catch(err =>{
      console.log(err);
    })
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
                <Link to="/">Home</Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              {user && (
                  <FaUserSecret className="w-6 h-6 fs-2"></FaUserSecret>
              )}
              {user ? (
                <Button onClick={handleLogOut} variant="secondary">Logout</Button>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;

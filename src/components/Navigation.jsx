import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // Link,
  Button,
} from "reactstrap";

import { AuthContext } from "../contexts/AuthContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, firebase } = useContext(AuthContext);

  const toggle = () => setIsOpen(!isOpen);

  // For authorisation
  const GuestLinks = () => {
    return (
      <>
        <NavItem className="ml-auto pr-3">
          <Link className="nav-link" to="/login">Get Started!</Link>
        </NavItem>
        <NavItem className="ml-auto pr-4">
          <Link className="nav-link" to="/">All Notes</Link>
        </NavItem>
        <NavItem className="ml-auto pr-2">
          <Link className="nav-link" to="/addNewNote">Add New</Link>
        </NavItem>
      </>
    );
  };

  const AuthLinks = () => {
    return (
      <>
        <NavItem className="ml-auto pr-2">
          <Link className="nav-link" to="/">All Notes</Link>
        </NavItem>
        <NavItem className="ml-auto pr-2">
          <Link className="nav-link" to="/addNewNote">Add New</Link>
        </NavItem>
        <NavItem className="ml-auto pr-2">
          <Link className="nav-link" to="/profile">Profile</Link>
        </NavItem>
        <NavItem className="ml-auto pr-1">
          <Button
            className="logout pl-3 pr-3"
            onClick={() => firebase.auth().signOut()}
          >
            Log Out
          </Button>
        </NavItem>
      </>
    );
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>iNote</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {isLoggedIn ? <AuthLinks /> : <GuestLinks />}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;

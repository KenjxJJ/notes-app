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
import ThemeToggler from "../components/ThemeToggler";
import {ThemeContext} from "../contexts/ThemeContext";
import AppTheme from "../Colors";

const Navigation = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

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
        <NavItem className="ml-auto pr-3">
          <Link className="nav-link" to="/">All Notes</Link>
        </NavItem>
        <NavItem className="ml-auto pr-3">
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
    <div style={{
      backgroundColor: `${currentTheme.backgroundColor}`,
      color: `${currentTheme.textColor}` }}>
      <Navbar light className="pt-3 pb-2" style={{backgroundColor: "#fd312b"}} expand="md">
        <NavbarBrand>iNote</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {isLoggedIn ? <AuthLinks /> : <GuestLinks />}
          </Nav>
        </Collapse>
      </Navbar>
      <small className="mt-2" style={{position: "absolute", right: "10%"}}>
      Change Theme : <ThemeToggler/>
      </small>
    </div>
  );
};

export default Navigation;

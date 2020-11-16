import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink 
} from 'reactstrap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">iNote</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="ml-auto pr-4">
              <NavLink href="/login">Get Started!</NavLink>
            </NavItem>
            <NavItem className="ml-auto pr-3">
              <NavLink href="/all_notes">All Notes</NavLink>
            </NavItem>            
          </Nav>         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
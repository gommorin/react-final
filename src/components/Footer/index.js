import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Footer = (props) => {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink href="#">Help</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Status</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Writers</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Blog</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Carreers</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Privacy</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Terms</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">About</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Footer;
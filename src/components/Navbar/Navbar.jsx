import React, { useState } from 'react';
import { Nav, Logo, Burger, Menu, MenuLink } from './Navbar.styles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo>where to eat</Logo>
      <Burger></Burger>
      <Menu isOpen={isOpen}>
        <MenuLink to='About' smooth={true} duration={1000}>
          Test
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

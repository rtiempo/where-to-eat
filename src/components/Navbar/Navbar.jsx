import React, { useState } from 'react';
import {
  Nav,
  Logo,
  Burger,
  Menu,
  MenuLink,
  SearchBar,
  Input,
  Icon,
} from './Navbar.styles';
import { FaSearch } from 'react-icons/fa';
import { Autocomplete } from '@react-google-maps/api';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo>where to eat</Logo>
      <Burger></Burger>
      <SearchBar>
        <Input type='text' placeholder='Search...' />
        <Icon>
          <FaSearch />
        </Icon>
      </SearchBar>
      <Menu isOpen={isOpen}>
        <MenuLink to='About' smooth={true} duration={1000}>
          Test
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

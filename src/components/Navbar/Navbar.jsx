import React, { useState } from 'react';
import { Appbar, Title, SearchBar, Input, Icon } from './Navbar.styles';
import { FaSearch } from 'react-icons/fa';
import { Autocomplete } from '@react-google-maps/api';

const Navbar = () => {
  return (
    <Appbar>
      <Title>where to eat</Title>
      <SearchBar>
        <Input type='text' placeholder='Search...' />
        <Icon>
          <FaSearch />
        </Icon>
      </SearchBar>
    </Appbar>
  );
};

export default Navbar;

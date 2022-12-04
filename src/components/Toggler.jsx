import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Checkbox, Label, Ball } from './styles/Toggler.styled';

const Toggler = ({ toggleTheme }) => {
  return (
    <>
      <Checkbox type='checkbox' id='checkbox' />
      <Label htmlFor='checkbox' onClick={toggleTheme}>
        <FaMoon color='pink' />
        <FaSun color='yellow' />
        <Ball />
      </Label>
    </>
  );
};

export default Toggler;

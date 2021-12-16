import React from 'react';
import { Container, Title, Nav, Item, Arrow, Flexing } from './style';

export const Navbar = () => {
  return (
    <Container>
      <Title>mytab</Title>
      <Nav>
        <Item href='#'>О компании</Item>
        <Item href='#'>Курсы</Item>
        <Item href='#'>Учителя</Item>
        <Item href='#'>Контакты</Item>
        <Flexing>
          <Item href='#'>Русский</Item>
          <Arrow />
        </Flexing>
      </Nav>
    </Container>
  );
};

export default Navbar;

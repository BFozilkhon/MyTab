import React from 'react';
import { Container, Title, Nav, Item, Arrow, Flexing } from './style';

export const Navbar = () => {
  return (
    <Container>
      <Title href='#1'>mytab</Title>
      <Nav>
        <Item href='#2'>О компании</Item>
        <Item href='#3'>Курсы</Item>
        <Item href='#4'>Учителя</Item>
        <Item href='#5'>План</Item>
        <Flexing>
          <Item href='#6'>Контакты</Item>
        </Flexing>
      </Nav>
    </Container>
  );
};

export default Navbar;

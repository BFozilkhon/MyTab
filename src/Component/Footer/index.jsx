import React from 'react';
import {
  Wrapper,
  Flexing,
  Item,
  Div,
  Instagram,
  Youtube,
  Facebook,
} from './style';

export const Footer = () => {
  return (
    <Wrapper>
      <Flexing>
        <Item href='#2'>О компании</Item>
        <Item href='#3'>Курсы</Item>
        <Item href='#5'>Учителя</Item>
        <Item href='#6'>Контакты</Item>
      </Flexing>
      <Flexing icon>
        <a target={'_blank'} href='https://www.instagram.com/?hl=ru'>
          <Instagram />
        </a>
        <a target={'_blank'} href='https://www.facebook.com/'>
          <Youtube />
        </a>
        <a target={'_blank'} href='https://www.youtube.com/'>
          <Facebook />
        </a>
      </Flexing>
      <Div>
        <Item>© 2021. Mytab academy. All rights reserved.</Item>
        <Item>© Designed by FDC</Item>
      </Div>
    </Wrapper>
  );
};

export default Footer;

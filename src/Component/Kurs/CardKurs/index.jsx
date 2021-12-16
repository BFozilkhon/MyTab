import React from 'react';
import { Container, Img, Title } from './style';

export const CardKurs = ({ img, name }) => {
  return (
    <Container>
      <Img src={img} alt='img' />
      <Title>{name}</Title>
    </Container>
  );
};

export default CardKurs;

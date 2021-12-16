import React from 'react';
import Card_Info from './Card-Info';
import { Box, Container, Title, Item } from './style';

export const Info = () => {
  return (
    <Container>
      <Box small>
        <Title>Наша компания</Title>
        <Item>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh amet
          enim scelerisque sed ac donec imperdiet. Elementum tincidunt amet
          semper fermentum. Suscipit tortor amet vulputate condimentum. Id
          ultrices sollicitudin adipiscing ipsum. Vel at neque eleifend id.
          Faucibus tellus varius mi feugiat dis nibh vestibulum velit enim. Vel.
        </Item>
        <Item>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus unde
          quos mollitia nesciunt maiores magni?
        </Item>
      </Box>
      <Box large>
        <Card_Info title='Экcклюзивнaяa пpoгpaммa' />
        <Card_Info title='Пpoфeccиoнaльные пeдaгoги' />
        <Card_Info title='Инновационное обучение' />
        <Card_Info title='Мониторинг посещений' />
      </Box>
    </Container>
  );
};

export default Info;

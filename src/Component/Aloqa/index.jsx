import React from 'react';
import {
  Wrapper,
  Container,
  Box,
  Input,
  Btn,
  Circle,
  Arrow,
  Title,
  Header,
  Item,
  Flexing,
  Polygon,
  Email,
  Text,
  Phone,
} from './style.js';

export const Aloqa = () => {
  return (
    <Wrapper id='6'>
      <Container>
        <Box>
          <Title>Вопросов? Комментарии? Мы хотели бы услышать от вас!</Title>
          <Input type='text' placeholder='Ваше имя' />
          <Input type='number' placeholder='Номер телефона' />
          <Input toping type='text' placeholder='Напишите ваше сообщение' />
          <Btn>
            Отправить
            <Circle>
              <Arrow />
            </Circle>
          </Btn>
        </Box>
      </Container>
      <Container left>
        <Header>Связаться с нами</Header>
        <Item>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim dis
          facilisis velit, quam diam vulputate sit. Mauris, purus diam sit dui,
          nulla at sagittis urna.
          <br />
          <br />
          Tortor fames tristique diam proin viverra curabitur. Facilisis
          adipiscing sodales lectus risus. Quis purus pretium aliquet amet,
          auctor.
          <br />
          <br />
          Orci purus neque natoque et at.
        </Item>
        <Flexing>
          <Polygon>
            <Email />
          </Polygon>
          <Text href='1'>support@mytabacademy.uz</Text>
        </Flexing>
        <Flexing>
          <Polygon>
            <Phone />
          </Polygon>
          <Text href='tel:+998946540297'>+998 94 654-02-97</Text>
        </Flexing>
      </Container>
    </Wrapper>
  );
};

export default Aloqa;

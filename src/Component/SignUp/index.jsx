import React, { useContext } from 'react';
import { FozilInfo } from '../../Context/context';
import {
  Cancel,
  Container,
  Input,
  InputSelect,
  Box,
  Title,
  Item,
  Btn,
  Circle,
  Arrow,
} from './style';

export const SignUp = () => {
  const [active, setActive] = useContext(FozilInfo);

  const getCheck = () => {
    setActive(!active);
  };

  return (
    <Container>
      <Cancel onClick={getCheck} />
      <Box>
        <Title>Запись на курсы</Title>
        <Item>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At laoreet
          massa a enim, viverra nec. A neque eu nullam a mollis mi vivamus.{' '}
        </Item>
        <InputSelect type='text' placeholder='Выберите курс'>
          <option value=''>Frontend</option>
          <option value=''>Bekend</option>
          <option value=''>Mobile</option>
        </InputSelect>
        <Input type='text' placeholder='Ваше имя' />
        <Input type='number' placeholder='Номер телефона' />
        <Input toping type='text' placeholder='Напишите ваше сообщение' />
        <Btn>
          Запись на курсы
          <Circle>
            <Arrow />
          </Circle>
        </Btn>
      </Box>
    </Container>
  );
};
export default SignUp;

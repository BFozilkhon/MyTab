import React, { useContext } from 'react';
import {
  Box,
  Container,
  Header,
  Title,
  Wrapper,
  Text,
  Flexing,
  Tick,
  Item,
  Btn,
  Circle,
  Arrow,
} from './style';
import { FozilInfo } from '../../Context/context';

export const Plan = () => {
  const [active, setActive] = useContext(FozilInfo);

  const getCheck = () => {
    setActive(!active);
  };

  return (
    <Wrapper id='4'>
      <Header>информация о курсе</Header>
      <Title>Python программирование</Title>
      <Container>
        <Box large>
          <Header>План курса</Header>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
            venenatis consequat eget tristique. Sed ornare etiam adipiscing
            gravida enim tristique nibh dis auctor. Sed dignissim nunc integer
            placerat faucibus ac. Commodo tristique pulvinar diam sem. Nibh
            venenatis ac, commodo scelerisque elementum, ac nibh risus
            tincidunt.
            <br />
            <br />
            Sit aliquet pellentesque scelerisque nunc in purus tristique dictum.
            Vel aliquet natoque mi donec dignissim mauris. Ut in arcu, auctor id
            vivamus in. Sit id mauris enim nisl suscipit nunc. Velit volutpat a
            quis nunc libero adipiscing.
          </Text>
          <Title>Цена: 750 000 сум/мес</Title>
        </Box>
        <Box toping>
          <Flexing>
            <Tick />
            <Item>Nisl arcu sagittis</Item>
          </Flexing>
          <Flexing>
            <Tick />
            <Item>Nisl arcu sagittis</Item>
          </Flexing>
          <Flexing>
            <Tick />
            <Item>Nisl arcu sagittis</Item>
          </Flexing>
          <Flexing>
            <Tick />
            <Item>Nisl arcu sagittis</Item>
          </Flexing>
          <Flexing>
            <Tick />
            <Item>Nisl arcu sagittis</Item>
          </Flexing>
          <Flexing>
            <Tick />
            <Item>Nisl arcu sagittis</Item>
          </Flexing>
          <Flexing>
            <Tick />
            <Item>Nisl arcu sagittis</Item>
          </Flexing>
          <Btn onClick={getCheck}>
            Запись на курсы
            <Circle>
              <Arrow />
            </Circle>
          </Btn>
        </Box>
        <Box toping>
          <Flexing>
            <Tick />
            <Item>Nisl arcu sagittis</Item>
          </Flexing>
          <Flexing>
            <Tick />
            <Item>Nisl arcu sagittis</Item>
          </Flexing>
          <Flexing>
            <Tick />
            <Item>Nisl arcu sagittis</Item>
          </Flexing>
          <Flexing>
            <Tick />
            <Item>Nisl arcu sagittis</Item>
          </Flexing>
          <Flexing>
            <Tick />
            <Item>Nisl arcu sagittis</Item>
          </Flexing>
          <Flexing>
            <Tick />
            <Item>Nisl arcu sagittis</Item>
          </Flexing>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Plan;

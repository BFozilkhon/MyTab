import React from 'react';
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
} from './style';

export const Plan = () => {
  return (
    <Wrapper>
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
        <Box>
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
            <Item>Diam ipsum mollis sit ac faucibus porttitor</Item>
          </Flexing>
        </Box>
        <Box>
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

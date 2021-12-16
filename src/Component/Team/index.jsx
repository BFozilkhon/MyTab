import React from 'react';
import { Box, Card, Img, Title, Text, Person } from './style';

export const Team = () => {
  return (
    <Img>
      <Title>Наши учителя</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, augue
        tristique malesuada proin enim feugiat. Aliquam vitae risus ultrices
      </Text>
      <Card>
        <Box small>
          <Person></Person>
        </Box>
        <Box></Box>
      </Card>
    </Img>
  );
};

export default Team;

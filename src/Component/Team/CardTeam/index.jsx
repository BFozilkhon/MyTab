import React from 'react';

import {
  Box,
  Card,
  Person,
  Word,
  Div,
  Flexing,
  Flutter,
  Header,
  Item,
  Polygon,
} from './style';

export const CardTeam = () => {
  return (
    <Card>
      <Box small>
        <Person></Person>
      </Box>
      <Box large>
        <Word>Abbos Abbosov</Word>
        <Item>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus
          sed tincidunt fusce metus eu, amet. Dapibus vitae a morbi tincidunt
          congue amet. Euismod aliquet eu erat ut accumsan. Cum duis
          pellentesque et convallis eu, dolor amet cras. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Blanditiis, sequi expedita rerum
          maxime cum nobis exercitationem odit fuga dicta fugit?
          <br />
          <br />
          Enim, tempor elementum placerat amet feugiat dui egestas cursus.
          Scelerisque eu ut egestas tempus fermentum. Quis at facilisis
          pellentesque quam sollicitudin id vitae. Phasellus enim netus a nibh
          sit neque amet quisque mi. Vitae. Lorem ipsum dolor sit amet.
        </Item>
        <Flexing>
          <Div>
            <Polygon>
              <Flutter />
            </Polygon>
            <Header>Средний флаттер разработчик</Header>
          </Div>
          <Div>
            <Polygon>
              <Flutter />
            </Polygon>
            <Header>Средний флаттер разработчик</Header>
          </Div>
          <Div>
            <Polygon>
              <Flutter />
            </Polygon>
            <Header>Средний флаттер разработчик</Header>
          </Div>
        </Flexing>
      </Box>
    </Card>
  );
};

export default CardTeam;

import React from 'react';
import CardTeam from './CardTeam';
import { Img, Title, Text, Wrapper } from './style';
import Carousel from 'react-elastic-carousel';
// import './team.css'

const breakPoints = [{ width: 1200, itemsToShow: 1 }];


export const Team = () => {
 
  // function myArrow({ type, onClick, isEdge }) {
  //   const pointer = type === consts.PREV ? '👈' : '👉'
  //   return (
  //     <button onClick={onClick} disabled={isEdge}>
  //       {pointer}
  //     </button>
  //   )
  // }

  return (
    <Img id='5'>
      <Title>Наши учителя</Title>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, augue
        tristique malesuada proin enim feugiat. Aliquam vitae risus ultrices
      </Text>
      <Wrapper>
        <Carousel  breakPoints={breakPoints}>
          <CardTeam />
          <CardTeam />
          <CardTeam />
        </Carousel>
      </Wrapper>
    </Img>
  );
};

export default Team;

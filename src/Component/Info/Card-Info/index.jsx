import React from 'react';
import { Conatiner, Polygon, Item } from './style';

export const Card_Info = ({ title }) => {
  return (
    <Conatiner>
      <Polygon />
      <Item> {title}</Item>
    </Conatiner>
  );
};

export default Card_Info;

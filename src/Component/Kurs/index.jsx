import React from 'react';
import CardKurs from './CardKurs';
import { Img, Wrapper } from './style';
import python from '../../assets/imgs/python.png';
import flutter from '../../assets/imgs/flutter2.png';
import php from '../../assets/imgs/php.png';

export const Kurs = () => {
  return (
    <Img>
      <Wrapper>
        <CardKurs name='Python программирование' img={python} />
        <CardKurs name='Flutter программирование' img={flutter} />
        <CardKurs name='PHP программирование' img={php} />
      </Wrapper>
    </Img>
  );
};

export default Kurs;

import React, { useState, useEffect } from 'react';
import CardKurs from './CardKurs';
import { Container, Wrapper } from './style';
import python from '../../assets/imgs/python.png';
import flutter from '../../assets/imgs/flutter2.png';
import php from '../../assets/imgs/php.png';

export const Kurs = () => {
  const [count, setCount] = useState(1);

  const changeNumber = () => {
    if (count < 100) {
      setTimeout(() => {
        setCount(count + 1);
      }, 5);
    }
  };
  useEffect(() => {
    changeNumber();
  }, [count]);
  return (
    <Container id='3'>
      <Wrapper>
        <CardKurs name='Python программирование' img={python} />
        <CardKurs name='Flutter программирование' img={flutter} />
        <CardKurs name='PHP программирование' img={php} />
      </Wrapper>
    </Container>
  );
};

export default Kurs;

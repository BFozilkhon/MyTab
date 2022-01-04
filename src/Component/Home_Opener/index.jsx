import React, { useContext } from 'react';
import { FozilInfo } from '../../Context/context';
import { Title, Item, Btn, Circle, Arrow } from './style';

export const Home = () => {
  const [active, setActive] = useContext(FozilInfo);

  const getCheck = () => {
    setActive(!active);
  };

  return (
    <>
      <Title>Инновационный учебный центр в Ташкенте</Title>
      <Item>
        Наша миссия - подготовить студентов к поступлению с наивысшими баллами в
        лучшие учебные заведения мира.
      </Item>
      <Btn onClick={getCheck}>
        Запись на курсы{' '}
        <Circle>
          <Arrow />
        </Circle>
      </Btn>
    </>
  );
};

export default Home;

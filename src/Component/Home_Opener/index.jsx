import React from 'react';
import { Title, Item, Btn, Circle, Arrow } from './style';

export const Home = () => {
  return (
    <>
      <Title>Инновационный учебный центр в Ташкенте</Title>
      <Item>
        Наша миссия - подготовить студентов к поступлению с наивысшими баллами в
        лучшие учебные заведения мира.
      </Item>
      <Btn>
        Запись на курсы{' '}
        <Circle>
          <Arrow />
        </Circle>
      </Btn>
    </>
  );
};

export default Home;

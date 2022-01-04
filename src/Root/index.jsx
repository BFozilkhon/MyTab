import React, { useState, useContext } from 'react';
import Home from '../Component/Home_Opener';
import Info from '../Component/Info';
import Kurs from '../Component/Kurs';
import Plan from '../Component/Plan';
import Navbar from '../Component/Navbar';
import Aloqa from '../Component/Aloqa';
import {
  ConatinerImg,
  Div,
  Facebook,
  Instagram,
  Youtube,
  Wrapper,
} from './style';
import Team from '../Component/Team';
import SignUp from '../Component/SignUp';
import { FozilInfo } from '../Context/context';
import Footer from '../Component/Footer';

export const Root = () => {
  const [active, setActive] = useContext(FozilInfo);

  const getCheck = () => {
    setActive(!active);
  };

  return (
    <>
      <ConatinerImg id='1'>
        <Navbar />
        <Home />
      </ConatinerImg>
      {/* <Div>
        <Polygon>
          <Instagram />
        </Polygon>
        <Polygon>
          <Youtube />
        </Polygon>
        <Polygon>
          <Facebook />
        </Polygon>
      </Div>{' '} */}
      <Info />
      <Kurs />
      <Plan />
      <Team />
      <Aloqa />
      <Footer />
      {active && (
        <div>
          <SignUp />
          <Wrapper onClick={getCheck}></Wrapper>
        </div>
      )}
    </>
  );
};

export default Root;

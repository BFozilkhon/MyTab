import React from 'react';
import Home from '../Component/Home_Opener';
import Info from '../Component/Info';
import Kurs from '../Component/Kurs';
import Plan from '../Component/Plan';
import Navbar from '../Component/Navbar';
import {
  ConatinerImg,
  Div,
  Facebook,
  Instagram,
  Polygon,
  Youtube,
} from './style';
import Team from '../Component/Team';

export const Root = () => {
  return (
    <>
      <ConatinerImg>
        <Navbar />
        <Home />
        <Div>
          <Polygon>
            <Instagram />
          </Polygon>
          <Polygon>
            <Youtube />
          </Polygon>
          <Polygon>
            <Facebook />
          </Polygon>
        </Div>
      </ConatinerImg>
      <Info />
      <Kurs />
      <Plan />
      <Team />
    </>
  );
};

export default Root;

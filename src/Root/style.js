import styled, { css } from 'styled-components';
import img from '../assets/imgs/opener.png';
import { ReactComponent as polygon } from '../assets/icons/polygon.svg';
import { ReactComponent as instagram } from '../assets/icons/instagram.svg';
import { ReactComponent as youtube } from '../assets/icons/youtube.svg';
import { ReactComponent as facebook } from '../assets/icons/facebook.svg';

const Icons = css`
  width: 30px;
  height: 30px;
  margin-top: 20px;
`;

export const ConatinerImg = styled.div`
  width: 100%;
  height: 120vh;
  background-image: url(${img});
  background-size: 100% 100%;
`;

export const Div = styled.div`
  position: fixed;
  left: 100px;
  right: 100px;
  display: flex;
  flex-direction: column;
`;

export const Polygon = styled(polygon)`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Instagram = styled(instagram)`
  ${Icons}
`;

export const Youtube = styled(youtube)`
  ${Icons}
`;

export const Facebook = styled(facebook)`
  ${Icons}
`;

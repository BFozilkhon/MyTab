import styled, { css } from 'styled-components';
import img from '../assets/imgs/opener.png';
import { ReactComponent as instagram } from '../assets/icons/instagram.svg';
import { ReactComponent as youtube } from '../assets/icons/youtube.svg';
import { ReactComponent as facebook } from '../assets/icons/facebook.svg';

const Icons = css`
  width: 30px;
  height: 30px;
  margin-top: 20px;
`;

export const Wrapper = styled.div`
  width: 100%;
  background: black;
  opacity: 0.8;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  height: 100vh;
  color: white;
  font-size: 100px;
`;

export const ConatinerImg = styled.div`
  width: 100%;
  height: 120vh;
  background-image: url(${img});
  background-size: 100% 100%;
`;

export const Div = styled.div`
  position: fixed;
  left: 50px;
  right: 100px;
  display: flex;
  flex-direction: column;
`;

// export const Polygon = styled(polygon)`
//   width: 50px;
//   height: 50px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-top: 20px;
// `;

export const Instagram = styled(instagram)`
  ${Icons}
`;

export const Youtube = styled(youtube)`
  ${Icons}
`;

export const Facebook = styled(facebook)`
  ${Icons}
`;

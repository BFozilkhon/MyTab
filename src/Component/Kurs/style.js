import styled from 'styled-components';
import kurs from '../../assets/imgs/kurs.png';

export const Img = styled.div`
  background-image: url(${kurs});
  background-size: 100% 100%;
  height: 180vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  height: 200px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 120px;
  color: #ffffff;
`;

export const Item = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
`;

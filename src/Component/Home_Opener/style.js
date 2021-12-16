import styled from 'styled-components';
import { ReactComponent as arrowLeft } from '../../assets/icons/arrow-left.svg';

export const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 70px;
  text-align: center;
  color: #fcfdff;
  line-height: 79px;
  width: 60%;
  margin: auto;
  margin-top: 160px;
  text-transform: uppercase;
`;

export const Item = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #ffffff;
  width: 35%;
  margin: auto;
  margin-top: 30px;
`;

export const Btn = styled.div`
  width: 330px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  font-size: 19px;
  background: linear-gradient(92.57deg, #2f73f6 0%, #0030ff 100%);
  box-shadow: 0px 10px 40px rgba(31, 93, 234, 0.25);
  border-radius: 40px;
  margin: auto;
  margin-top: 30px;
  padding-left: 30px;
  text-transform: uppercase;
`;

export const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Arrow = styled(arrowLeft)`
  width: 30px;
  height: 30px;
`;

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
  @media (max-width: 1840px) {
    font-size: 60px;
  }
  @media (max-width: 1580px) {
    font-size: 53px;
    line-height: 67px;
    width: 65%;
    margin-top: 100px;
  }
  @media (max-width: 1300px) {
    font-size: 40px;
    line-height: 58px;
    width: 63%;

    margin-top: 60px;
  }
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
  @media (max-width: 1600px) {
    font-size: 19px;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 23px;
    margin-top: 20px;
    width: 40%;
  }
  /* @media (max-width: 1580px) {
    font-size: 53px;
    line-height: 67px;
    width: 65%;
    margin-top: 100px;
  }
  @media (max-width: 1300px) {
    font-size: 40px;
    line-height: 58px;
    width: 63%;

    margin-top: 60px;
  } */
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
  cursor: pointer;
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

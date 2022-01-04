import styled from 'styled-components';

import person from '../../../assets/imgs/person.png';
import flutter from '../../../assets/imgs/flutter2.png';

export const Card = styled.div`
  background: #ffffff;
  box-sizing: border-box;
  padding: 50px 100px 50px 50px;
  display: flex;
  margin: 0px 10px;
  border-radius: 60px;
  @media (max-width: 1400px) {
    flex-direction: column;
    align-items: center;
    padding: 30px 0px;
  }
`;

export const Box = styled.div`
  flex: ${({ small }) => (small ? '2' : '3')};
  margin-left: ${({ large }) => large && '100px'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1400px) {
    /* justify-content: center; */
    align-items: center;
    width: 60%;
    margin-left: ${({ large }) => large && '0px'};
    margin: 0px auto;
  }
`;

export const Person = styled.div`
  background-image: url(${person});
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  @media (max-width: 1400px) {
    height: 400px;
    width: 100%;
    background-size: cover;
  }
`;

export const Word = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  color: #222a3f;
`;

export const Item = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  color: #222a3f;
`;

export const Polygon = styled.div`
  width: 130px;
  height: 130px;
  box-shadow: 0px 6px 20px rgba(61, 70, 118, 0.1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
`;

export const Div = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Flutter = styled.div`
  background-image: url(${flutter});
  background-size: 100% 100%;
  height: 60px;
  width: 60px;
`;

export const Header = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 22px;
  margin-top: 14px;
  text-align: center;
  color: #222a3f;
`;

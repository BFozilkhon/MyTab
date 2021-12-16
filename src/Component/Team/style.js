import styled from 'styled-components';
import team from '../../assets/imgs/team.png';
import person from '../../assets/imgs/person.png';

export const Img = styled.div`
  background-image: url(${team});
  background-size: 100% 100%;
  height: 150vh;
  width: 100%;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;
`;

export const Text = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  width: 40%;
`;

export const Card = styled.div`
  background: #ffffff;
  width: 80%;
  box-sizing: border-box;
  margin: auto;
  height: 700px;
  box-shadow: 0px 18px 60px rgba(61, 70, 118, 0.1);
  border-radius: 60px;
  padding: 50px;
  display: flex;
`;

export const Box = styled.div`
  flex: ${({ small }) => (small ? '2' : '3')};
`;

export const Person = styled.div`
  background-image: url(${person});
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
`;

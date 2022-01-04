import styled from 'styled-components';
import { ReactComponent as arrowBottom } from '../../assets/icons/arrow-bottom.svg';

export const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.a`
  text-decoration: none;
  font-size: 50px;
  font-weight: 900;
  color: white;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  justify-content: space-around;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Item = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #f9f9f9;
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
`;

export const Arrow = styled(arrowBottom)`
  width: 17px;
  height: 17px;
  margin-left: 8px;
`;

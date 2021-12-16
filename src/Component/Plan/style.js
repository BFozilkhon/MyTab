import styled from 'styled-components';
import { ReactComponent as tick } from '../../assets/icons/tick.svg';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  text-transform: uppercase;
  color: #9594aa;
  margin: auto;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  text-transform: uppercase;
  color: #222a3f;
  margin: auto;
`;

export const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  margin-top: 60px;
`;

export const Box = styled.div`
  flex: ${({ large }) => (large ? '3' : '2')};
  margin-left: ${({ large }) => !large && '80px'};
  /* border: 2px solid black; */
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0px;
`;

export const Text = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  color: #222a3f;
  margin-bottom: 40px;
`;

export const Item = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 21px;
  color: #222a3f;
  line-height: 23px;
  margin-left: 20px;
`;

export const Tick = styled(tick)`
  width: 22px;
`;

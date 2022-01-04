import styled from 'styled-components';
import { ReactComponent as tick } from '../../assets/icons/tick.svg';
import { ReactComponent as arrowLeft } from '../../assets/icons/arrow-left.svg';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
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
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    margin: 0px auto;
  }
`;

export const Box = styled.div`
  flex: ${({ large }) => (large ? '3' : '2')};
  margin-left: ${({ large }) => !large && '80px'};
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: ${({ large }) => !large && '0px'};
    margin-top: ${({ toping }) => toping && '40px'};
  }
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
  @media (max-width: 1300px) {
    font-size: 22px;
  }
`;

export const Item = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 21px;
  color: #222a3f;
  line-height: 23px;
  margin-left: 20px;
  @media (max-width: 1300px) {
    font-size: 25px;
  }
`;

export const Tick = styled(tick)`
  width: 22px;
  @media (max-width: 1300px) {
    width: 28px;
  }
`;

export const Btn = styled.div`
  width: 280px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  font-size: 15px;
  background: linear-gradient(92.57deg, #2f73f6 0%, #0030ff 100%);
  box-shadow: 0px 10px 40px rgba(31, 93, 234, 0.25);
  border-radius: 40px;
  padding-left: 20px;
  text-transform: uppercase;
  cursor: pointer;
  @media (max-width: 1300px) {
  }
`;

export const Circle = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Arrow = styled(arrowLeft)`
  width: 22px;
  height: 22px;
`;

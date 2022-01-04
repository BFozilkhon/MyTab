import styled from 'styled-components';
import { ReactComponent as arrowLeft } from '../../assets/icons/arrow-left.svg';
import { ReactComponent as email } from '../../assets/icons/email.svg';
import { ReactComponent as phone } from '../../assets/icons/phone.svg';

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  margin-top: 100px;
  @media (max-width: 1300px) {
    display: block;
  }
`;

export const Container = styled.div`
  flex: 1;
  margin-left: ${({ left }) => left && '140px'};
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    margin-left: 0px;
    width: 70%;
    margin: 0px auto;
    margin-top: ${({ left }) => left && '100px'};
  }
`;

export const Box = styled.div`
  background: #ffffff;
  box-shadow: 0px 18px 60px rgba(61, 70, 118, 0.1);
  border-radius: 60px;
  width: 100%;
  height: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 30px 0px;
  box-sizing: border-box;
  @media (max-width: 1300px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  color: #222a3f;
  width: 60%;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 80%;
  border: none;
  border-bottom: 2px solid #f2f4f9;
  outline: none;
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  color: #9594aa;
  padding-bottom: ${({ toping }) => (toping ? '120px' : '30px')};
  transition: all 0.4s;
  margin: 30px 0px;
  :focus {
    padding-bottom: 2px;
    padding-left: 10px;
    font-weight: 100;
  }
`;

export const Btn = styled.div`
  width: 330px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  font-size: 19px;
  background: linear-gradient(97.95deg, #0030ff 14.71%, #5c16ce 90.23%);
  box-shadow: 0px 10px 40px rgba(31, 93, 234, 0.25);
  border-radius: 40px;
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

// Box2

export const Header = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 58px;
  text-transform: uppercase;
  color: #2a2fa3;
  margin-bottom: 70px;
  @media (max-width: 1700px) {
    font-size: 45px;
  }
`;

export const Item = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #222a3f;
  width: 80%;
  @media (max-width: 1300px) {
    width: 90%;
  }
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0px;
`;

export const Polygon = styled.div`
  width: 100px;
  height: 100px;

  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 6px 20px rgba(61, 70, 118, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Word = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  color: #363078;
`;

export const Text = styled.a`
  font-style: normal;
  font-weight: 600;
  font-size: 29px;
  color: #363078;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  margin-left: 40px;
  :hover {
    color: blue;
    text-decoration: underline;
  }
`;

export const Email = styled(email)`
  width: 50%;
  height: 50%;
`;

export const Phone = styled(phone)`
  width: 50%;
  height: 50%;
`;

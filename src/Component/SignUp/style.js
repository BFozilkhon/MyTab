import styled from 'styled-components';
import { ReactComponent as cancel } from '../../assets/icons/cancel.svg';
import { ReactComponent as arrowLeft } from '../../assets/icons/arrow-left.svg';
export const Container = styled.div`
  background: #ffffff;
  border-radius: 16px;
  width: 60%;
  margin: auto;
  height: 80vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 40px;
  box-sizing: border-box;
  @media (max-height: 910px) {
    box-sizing: none;

    width: 55%;
    height: 90vh;
  }
`;

export const Cancel = styled(cancel)`
  width: 20px;
  height: 20px;
  margin-left: auto;
  cursor: pointer;
`;

export const Box = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80%;
  align-items: center;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 40px;

  text-transform: uppercase;
  color: #2a2fa3;
  @media (max-width: 1500px) {
    font-size: 33px;
  }
  @media (max-width: 1250px) {
    font-size: 28px;
  }
  @media (max-width: 1100px) {
    font-size: 24px;
  }
`;

export const Item = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  align-items: center;
  text-align: center;
  color: #222a3f;
  margin-bottom: 15px;
  @media (max-width: 1500px) {
    font-size: 15px;
  }
  @media (max-width: 1250px) {
    font-size: 12px;
  }
  @media (max-width: 1100px) {
    font-size: 11px;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid #f2f4f9;
  outline: none;
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  color: #9594aa;
  padding-bottom: ${({ toping }) => (toping ? '40px' : '20px')};
  transition: all 0.4s;
  margin: 10px;
  :focus {
    padding-bottom: 2px;
    padding-left: 10px;
    font-weight: 100;
  }
`;

export const InputSelect = styled.select`
  width: 100%;
  border: none;
  border-bottom: 2px solid #f2f4f9;
  outline: none;
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  color: #9594aa;
  padding-bottom: ${({ toping }) => (toping ? '40px' : '20px')};
  transition: all 0.4s;
`;

// Button page
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
  margin-top: 30px;
  padding-left: 30px;
  text-transform: uppercase;
`;

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Arrow = styled(arrowLeft)`
  width: 25px;
  height: 25px;
`;

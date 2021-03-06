import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 6px 20px rgba(61, 70, 118, 0.08);
  border-radius: 30px;
  width: 31%;
  height: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 30px;
  box-sizing: border-box;
  @media (max-width: 1250px) {
    width: 400px;
    margin: 20px 20px;
  }
`;

export const Img = styled.img`
  height: 50%;
  width: 50%;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 35px;
  width: 60%;
  text-align: center;
  color: #222a3f;
  @media (max-width: 1630px) {
    font-size: 26px;
  }
  @media (max-width: 1500px) {
    font-size: 22px;
    line-height: 22px;
  }
`;

import styled from 'styled-components';

export const Img = styled.div`
  background: linear-gradient(198.06deg, #2382f2 20.9%, #4659ff 88.7%);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  box-sizing: border-box;
  padding: 100px 0px;
  margin: 150px 0px;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #ffffff;
`;

export const Text = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  color: #ffffff;
  width: 40%;
  margin-bottom: 70px;
`;

export const Wrapper = styled.div`
  margin: 0px auto;
  width: 88%;
  @media (max-width: 1400px) {
    width: 80%;
  }
`;

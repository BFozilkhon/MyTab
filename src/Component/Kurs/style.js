import styled from 'styled-components';
import kurs from '../../assets/imgs/kurs.png';

export const Container = styled.div`
  width: 100%;
  background: linear-gradient(198.06deg, #2382f2 20.9%, #4659ff 88.7%);
  display: flex;
  align-items: center;
  margin-top: 100px;
  height: 100%;
  padding: 100px 0px;
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: 0px auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1250px) {
    justify-content: center;
  }
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 120px;
  color: #ffffff;
`;

export const Item = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
`;

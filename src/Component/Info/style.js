import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  margin-top: 100px;
  @media (max-width: 1200px) {
    display: block;
  }
`;

export const Box = styled.div`
  flex: ${({ small }) => (small ? '2' : '3')};
  display: ${({ large }) => large && 'flex'};
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: ${({ large }) => !large && 'column'};
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 55px;
  width: 80%;
  line-height: 100%;
  text-transform: uppercase;
  color: #2a2fa3;
`;

export const Item = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 155%;
  color: #222a3f;
  margin-top: 30px;
  width: 90%;
`;

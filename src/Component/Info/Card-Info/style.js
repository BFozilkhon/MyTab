import styled from 'styled-components';

export const Conatiner = styled.div`
  width: 40%;
  height: 400px;
  background: #ffffff;
  box-shadow: 0px 6px 20px rgba(61, 70, 118, 0.08);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;
`;

export const Polygon = styled.div`
  clip-path: polygon(50% 0%, 100% 23%, 100% 73%, 51% 100%, 0 72%, 0 23%);
  width: 180px;
  height: 200px;
  background: #f1f6fe;
  border-radius: 10px;
`;

export const Item = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 25px;
  line-height: 30px;
  color: #222a3f;
  width: 60%;
  text-align: center;
`;

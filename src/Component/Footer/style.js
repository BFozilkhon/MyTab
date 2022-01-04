import styled from 'styled-components';
import { ReactComponent as instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as youtube } from '../../assets/icons/youtube.svg';

export const Wrapper = styled.div`
  width: 100%;
  background: linear-gradient(198.06deg, #2382f2 20.9%, #4659ff 88.7%);
  margin-top: 100px;
  padding: 70px 0px 50px 0px;
`;

export const Flexing = styled.div`
  display: flex;
  width: ${({ icon }) => (icon ? '18%' : '50%')};
  margin: 0px auto;
  justify-content: space-between;
  margin-top: ${({ icon }) => icon && '50px'};
`;

export const Item = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
  color: #e8e6f8;
`;

export const Div = styled.div`
  width: 80%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
`;

export const Instagram = styled(instagram)`
  width: 60px;
  height: 60px;
`;

export const Facebook = styled(facebook)`
  width: 60px;
  height: 60px;
`;

export const Youtube = styled(youtube)`
  width: 60px;
  height: 60px;
`;

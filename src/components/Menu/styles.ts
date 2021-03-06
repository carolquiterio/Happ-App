import styled, { css } from 'styled-components/native';
import { Image } from 'react-native';

interface ContainerProps {
  isColored: boolean;
}

export const Container = styled.View<ContainerProps>`
  margin-top: 12px;
  flex-direction: row;
  height: 90px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;

  ${props =>
    props.isColored &&
    css`
      background-color: #f96052;
    `}
`;

export const IconContainerMenu = styled.TouchableOpacity`
  height: 100%;
  width: 20%;
  justify-content: center;
  align-items: center;
`;
export const LogoContainerMenu = styled.View`
  height: 100%;
  width: 60%;
  justify-content: center;
  align-items: center;
  transform: scale(0.5);
`;

export const ImageLogo = styled.Image`
  width: 100%;
`;

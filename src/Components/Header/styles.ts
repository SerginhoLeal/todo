import { Dimensions } from "react-native";
import styled, { css } from "styled-components/native";

const { width } = Dimensions.get('screen')

export const Container =  styled.View`
  width: 100%;
  height: ${width * 0.5}px;
  background-color: ${({ theme }) => theme.colors.gray_700 };
  justify-content: center;
  align-items: center;
`;

export const WrapImage = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Image = styled.Image`
  width: ${width * 0.42}px;
  height: ${(width * 0.42) / 3.5}px;
`

export const Form = styled.View`
  position: absolute;
  width: 100%;
  top: ${width * 0.40}px;
  align-items: center;
`

export const FormWrap = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
`

export const Input = styled.TextInput`
  width: 80%;
  padding: 18px;
  background-color: ${({ theme }) => theme.colors.gray_500 };
  border-color: ${({ theme }) => theme.colors.gray_700};
  border-width: 1px;
  border-radius: 8px;
  margin-right: 8px;
  font-family: ${({ theme }) => theme.font_family.Inter_400Regular};
  font-size: ${({ theme }) => theme.font_size.medium}px;
  color: ${({ theme }) => theme.colors.gray_100};
`

export const Button = styled.TouchableOpacity`
  width: 18%;
  background-color: ${({ theme }) => theme.colors.blue_dark};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`

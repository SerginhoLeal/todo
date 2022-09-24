
import styled, { css } from "styled-components/native";
import { TextProps } from "./types";

export const Text = styled.Text`
  ${({ theme, fontFamily = 'Inter_400Regular', color = 'white' }: TextProps) => css`
    font-family: ${theme.font_family[fontFamily]};
    color: ${theme.colors[color]};
  `};
`;

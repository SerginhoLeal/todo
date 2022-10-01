
import styled, { css } from "styled-components/native";
import { TextProps } from "../../@types/Components/Typography";

export const Text = styled.Text`
  ${({ theme, fontFamily = 'Inter_400Regular', color = 'white', done }: TextProps) => css`
    font-family: ${theme.font_family[fontFamily]};
    color: ${theme.colors[color]};
    ${done && `text-decoration: line-through` };
    font-size: ${theme.font_size.small}px;
  `};
`;

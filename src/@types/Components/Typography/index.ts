import { DefaultTheme } from "styled-components";

type fontFamily = 'Inter_700Bold' | 'Inter_400Regular';
type color = 'white' | 'gray_100' | 'gray_200' | 'gray_300' | 'gray_400' | 'gray_500' | 'gray_600' | 'gray_700' | 'blue' | 'purple' | 'danger' | 'blue_dark' | 'purple_dark';

export type TextProps = {
  theme: DefaultTheme;
  fontFamily?: fontFamily;
  color?: color;
};

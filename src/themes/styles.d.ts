import theme from './themes';

type Theme = typeof theme;
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {};
};

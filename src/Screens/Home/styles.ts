import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  ${({ theme }) => css`
    background-color: ${theme.colors.gray_600};
  `};
`;

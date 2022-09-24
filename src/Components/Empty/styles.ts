import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 21px;

  border-top-width: 1px;
  ${({ theme }) => css`
    border-top-color: ${theme.colors.gray_400};
  `};
`;

export const EmptyImage = styled.Image`
  margin-top: 48px;
  margin-bottom: 16px;
`;
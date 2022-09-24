import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  margin-top: 56px;
`;

export const Header = styled.View`
  width: 100%;
  padding: 8px 0px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerCount = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Count = styled.View`
  padding: 0px 8px;
  margin-left: 8px;
  margin-top: 2px;
  border-radius: 10px;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray_400};
  `};
`;

export const Card = styled.View`
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 8px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray_400};
  `};
`;

export const Check = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  margin-right: 10px;
  ${({ theme, check }: any) => css`
    border: 1px solid ${theme.colors.blue};
    ${check && css`
      background-color: ${theme.colors.blue};
    `}
  `};
`;

export const DeleteButton = styled.TouchableOpacity`
  width: 30px;

  align-items: center;
  justify-content: center;
`;

export const CheckButton = styled.TouchableOpacity`
  flex: 1;
`;

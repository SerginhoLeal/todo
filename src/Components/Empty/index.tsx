import React from 'react';
import * as Styles from './styles';

import { Text } from '../Typography';

export const Empty: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.EmptyImage source={require('../../assets/Clipboard.png')} />
      <Text fontFamily='Inter_700Bold' color='gray_300'>Você ainda não tem tarefas cadastradas</Text>
      <Text color='gray_300'>Crie tarefas e organize seus itens a fazer</Text>
    </Styles.Container>
  );
};

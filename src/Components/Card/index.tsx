import React from 'react';
import * as Native from 'react-native';
import * as Styles from './styles';

import { Text } from '../Typography';

const constants = [
  {
    title: 'Criadas',
    quantity: 0,
    color: 'blue'
  },
  {
    title: 'Concluídas',
    quantity: 0,
    color: 'purple'
  }
];

export const Card: React.FC = () => {
  return (
    <Styles.Container>

      <Styles.Header>
        {constants.map(({ title, quantity, color }, index) => (
          <Styles.ContainerCount key={index.toString()}>
            <Text fontFamily='Inter_700Bold' color={color}>{title}</Text>
            <Styles.Count>
              <Text fontFamily='Inter_700Bold' color='gray_300'>{quantity}</Text>
            </Styles.Count>
          </Styles.ContainerCount>
        ))}
      </Styles.Header>

      <Styles.EmptyImage source={require('../../assets/Clipboard.png')} />
      <Text fontFamily='Inter_700Bold' color='gray_300'>Você ainda não tem tarefas cadastradas</Text>
      <Text color='gray_300'>Crie tarefas e organize seus itens a fazer</Text>
    </Styles.Container>
  );
};

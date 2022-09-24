import React, { useState } from 'react';
import * as Native from 'react-native';
import * as Styles from './styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Text } from '../Typography';
import { Empty } from '../Empty';
import { Task } from '../../@types/Screens/Home';
import CardProps from '../../@types/Components/Card';

const constants = [
  {
    title: 'Criadas',
    quantity: 'data',
    color: 'blue'
  },
  {
    title: 'Concluídas',
    quantity: 'data',
    color: 'purple'
  }
];

export default function Card({ task }: CardProps) {
  const [teste, setTeste] = useState(false);
  return (
    <Styles.Container>

      <Styles.Header>
        {constants.map(({ title, quantity, color }, index) => (
          <Styles.ContainerCount key={index.toString()}>
            <Text fontFamily='Inter_700Bold' color={color}>{title}</Text>
            <Styles.Count>
              <Text fontFamily='Inter_700Bold' color='gray_300'>{0}</Text>
            </Styles.Count>
          </Styles.ContainerCount>
        ))}
      </Styles.Header>

      <Styles.Card>
        <Styles.Check check={teste} />
        <Styles.CheckButton onPress={() => setTeste(!teste)}>
          <Text>{task.name}</Text>
        </Styles.CheckButton>
        <Styles.DeleteButton>
          <MaterialCommunityIcons name="trash-can-outline" size={24} color="#fff" />
        </Styles.DeleteButton>
      </Styles.Card>

    </Styles.Container>
  );
};

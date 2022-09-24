import React from 'react';
import * as Native from 'react-native';
import * as Styles from './styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Text } from '../Typography';
import { Empty } from '../Empty';

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

const data = [
  {
    id: 1,
    check: false,
    text: 'Queremos uma live Soares X Schwarza com a participação dos gatos e teus inscritos sobre o assunto UAP.',
  },
  {
    id: 2,
    check: false,
    text: 'Quero ver eles saberem responder o que seriam os outros vídeos inexplicáveis desde 1950...',
  },
  {
    id: 1,
    check: false,
    text: 'Queremos uma live Soares X Schwarza com a participação dos gatos e teus inscritos sobre o assunto UAP.',
  },
  {
    id: 2,
    check: false,
    text: 'Quero ver eles saberem responder o que seriam os outros vídeos inexplicáveis desde 1950...',
  },
  {
    id: 1,
    check: false,
    text: 'Queremos uma live Soares X Schwarza com a participação dos gatos e teus inscritos sobre o assunto UAP.',
  },
  {
    id: 2,
    check: false,
    text: 'Quero ver eles saberem responder o que seriam os outros vídeos inexplicáveis desde 1950...',
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
              <Text fontFamily='Inter_700Bold' color='gray_300'>{data.length}</Text>
            </Styles.Count>
          </Styles.ContainerCount>
        ))}
      </Styles.Header>

      {
        data.length !== 0 ? data.map(({ text }, index) => (
          <Styles.Card key={index.toString()}>
            <Styles.Check />
            <Styles.CheckButton>
              <Text>{text}</Text>
            </Styles.CheckButton>
            <Styles.DeleteButton>
              <MaterialCommunityIcons name="trash-can-outline" size={24} color="#fff" />
            </Styles.DeleteButton>
          </Styles.Card>
        )) : <Empty />}

    </Styles.Container>
  );
};

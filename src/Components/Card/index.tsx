import React, { useState } from 'react';
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
  const [teste, setTeste] = useState(false);
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

      <Native.FlatList
        data={data}
        style={{ width: '100%' }}
        keyExtractor={(_, i) => i.toString()}
        ListEmptyComponent={<Empty />}
        renderItem={({ item }) => (
          <Styles.Card>
            <Styles.Check check={teste} />
            <Styles.CheckButton onPress={() => setTeste(!teste)}>
              <Text>{item.text}</Text>
            </Styles.CheckButton>
            <Styles.DeleteButton>
              <MaterialCommunityIcons name="trash-can-outline" size={24} color="#fff" />
            </Styles.DeleteButton>
          </Styles.Card>
        )}
      />

    </Styles.Container>
  );
};

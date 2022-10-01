import React, { useContext, useState } from 'react';
import * as Native from 'react-native';
import * as Styles from './styles';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Text } from '../Typography';
import { Empty } from '../Empty';
import CardProps from '../../@types/Components/Card';
import { TasksContext } from '../../Contexts/Tasks';

type ConstantsProps = {
  title: 'Criadas' | 'Concluídas',
  color: 'blue' | 'purple',
  type: 'created' | 'completed'
}

const constants: ConstantsProps[] = [
  {
    title: 'Criadas',
    color: 'blue',
    type: 'created'
  },
  {
    title: 'Concluídas',
    color: 'purple',
    type: 'completed'
  }
];

export default function Card({ task }: CardProps) {
  const [teste, setTeste] = useState(false);
  const { tasks, setTasks } = useContext(TasksContext);

  const conclutedTasks = tasks.filter((item) => item.completed === true);

  function handleRemove(key: number){
    setTasks(oldValue => oldValue.filter((item, index) => item.key !== key));
  }

  function handleConcluted(currentIndex: number){
    const finishTask = task.map((item, index) => {
      if(index === currentIndex){
        item.completed = !item.completed;
      }

      return item;
    });

    setTasks(finishTask)
  }

  return (
    <Styles.Container>

      <Styles.Header>
        {constants.map(({ title, color, type }, index) => (
          <Styles.ContainerCount key={index.toString()}>
            <Text fontFamily='Inter_700Bold' color={color}>{title}</Text>
            <Styles.Count>
              <Text fontFamily='Inter_700Bold' color='gray_300'>
                { type === 'completed' ? conclutedTasks.length : tasks.length }
              </Text>
            </Styles.Count>
          </Styles.ContainerCount>
        ))}
      </Styles.Header>

      <Native.FlatList
        data={task}
        style={{ width: '100%' }}
        keyExtractor={(_, i) => i.toString()}
        ListEmptyComponent={<Empty />}
        renderItem={({ item , index }) => (
          <Styles.Card>
            <Native.TouchableOpacity onPress={() => handleConcluted(index)}>
              <Styles.Check />
              { item.completed && <Native.View style={{
                position: 'absolute',
                backgroundColor: '#5E60CE',
                width: 20,
                height: 20,
                borderRadius: 10
              }}>
                <Native.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <MaterialCommunityIcons name="check" color="#F2F2F2" size={15} />
                </Native.View>
              </Native.View> }
            </Native.TouchableOpacity>
            <Styles.CheckButton onPress={() => setTeste(!teste)}>
              <Text done={item.completed}>{item.name}</Text>
            </Styles.CheckButton>
            <Styles.DeleteButton onPress={() => handleRemove(item.key)}>
              <MaterialCommunityIcons name="trash-can-outline" size={24} color="#fff" />
            </Styles.DeleteButton>
          </Styles.Card>
        )}
      />

    </Styles.Container>
  );
};

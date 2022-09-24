import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import * as Styles from './styles';

import Card from '../../Components/Card';
import Header from '../../Components/Header';
import { Task } from '../../@types/Screens/Home';
import { Empty } from '../../Components/Empty';

export default function Home(){
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleRemove(currentIndex: number){
    setTasks(oldValue => oldValue.filter((item, index) => index !== currentIndex));
  }

  function handleComplete(currentIndex: number){
  }

  useEffect(() => {
    console.warn(tasks)
  }, [tasks]);

  return (
    <Styles.Container>
      <Header tasks={tasks} setTasks={setTasks} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Card task={item}  />}
        keyExtractor={((_, index) => `index=${index}`)}
        ListEmptyComponent={() => <Empty />}
      />
    </Styles.Container>
  );
};

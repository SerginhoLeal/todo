import React, { useContext, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import * as Styles from './styles';

import Card from '../../Components/Card';
import Header from '../../Components/Header';
import { Task } from '../../@types/Screens/Home';
import { Empty } from '../../Components/Empty';
import { TasksContext } from '../../Contexts/Tasks';

export default function Home(){
  const { tasks, setTasks } = useContext(TasksContext);

  function handleComplete(currentIndex: number){
  }

  return (
    <Styles.Container>
      <Header />
      <Card task={tasks} />
    </Styles.Container>
  );
};

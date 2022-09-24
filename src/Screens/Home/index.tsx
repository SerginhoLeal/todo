import React, { useEffect, useState } from 'react';
import * as Native from 'react-native';
import * as Styles from './styles';

import { Card } from '../../Components/Card';
import Header from '../../Components/Header';
import { Task } from '../../@types/Screens/Home';

export default function Home(){
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleRemmove(currentIndex: number){
    setTasks(oldValue => oldValue.filter((item, index) => index !== currentIndex));
  }

  function handleComplete(currentIndex: number){
  }

  return (
    <Styles.Container>
<<<<<<< HEAD

=======
      <Header tasks={tasks} setTasks={setTasks} />
>>>>>>> e4930ffc1794b3ff4eebcfbfba3dd82b43e49871
      <Card />

    </Styles.Container>
  );
};

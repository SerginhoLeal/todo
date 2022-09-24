import { View, Text } from 'react-native'
import * as Styles from "./styles";

//@ts-ignore
import Icon from "../../assets/Logo.png";

import { AntDesign } from '@expo/vector-icons';
import HeaderProps from '../../@types/Components/Header';
import { useState } from 'react';
import { Task } from '../../@types/Screens/Home';

export default function Header({ tasks, setTasks }: HeaderProps) {
  const [taskName, setTaskName] = useState<string>('');

  function handlePress(){
    if(taskName.trim() === ''){
      return alert('Por favor insira sua tarefa!')
    }

    const newTask: Task = {
      name: taskName,
      completed: false,
      key: Math.random() * 9
    }

    setTasks(oldValue => [...oldValue, newTask]);
    setTaskName('');
  }

  return (
    <Styles.Container>
      <Styles.WrapImage>
        <Styles.Image
          source={Icon}
          resizeMode='cover'
        />
      </Styles.WrapImage>
      <Styles.Form>
        <Styles.FormWrap>
          <Styles.Input
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={(e: string) => setTaskName(e)}
            name={taskName}
          />
          <Styles.Button
            activeOpacity={0.72}
            onPress={handlePress}
          >
            <AntDesign name="pluscircleo" size={24} color="#f2f2f2" />
          </Styles.Button>
        </Styles.FormWrap>
      </Styles.Form>
    </Styles.Container>
  )
}

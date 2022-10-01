import { useContext, useState } from 'react';

import * as Styles from "./styles";
import Icon from "../../assets/Logo.png";

import { AntDesign } from '@expo/vector-icons';
import { TasksContext } from '../../Contexts/Tasks';
import { Keyboard } from 'react-native';

export default function Header() {
  const { tasks, setTasks } = useContext(TasksContext);
  const [taskName, setTaskName] = useState<string>('');

  function handlePress() {
    if (taskName.trim() === '') {
      return alert('Por favor insira sua tarefa!')
    }

    const newTask = {
      name: taskName,
      completed: false,
      key: Math.random() * 9
    }

    setTasks(oldValue => [...oldValue, newTask]);
    setTaskName('');
    Keyboard.dismiss();
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
            value={taskName}
          />
          <Styles.Button
            activeOpacity={0.5}
            onPress={handlePress}
          >
            <AntDesign name="pluscircleo" size={24} color="#f2f2f2" />
          </Styles.Button>
        </Styles.FormWrap>
      </Styles.Form>
    </Styles.Container>
  )
}

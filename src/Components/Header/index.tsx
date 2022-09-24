import { View, Text } from 'react-native'
import * as Styles from "./styles";

import Icon from "../../assets/Logo.png";
import { AntDesign } from '@expo/vector-icons';

export default function Header() {
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
          />
          <Styles.Button
            activeOpacity={0.72}
          >
            <AntDesign name="pluscircleo" size={24} color="#f2f2f2" />
          </Styles.Button>
        </Styles.FormWrap>
      </Styles.Form>
    </Styles.Container>
  )
}

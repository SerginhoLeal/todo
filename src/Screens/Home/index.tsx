import React from 'react';
import * as Native from 'react-native';
import * as Styles from './styles';

import { Card } from '../../Components/Card';

export default function Home(){
  return (
    <Styles.Container>
      <Native.View style={{ backgroundColor: '#000', width: '100%', height: 173 }} />

      <Card />

    </Styles.Container>
  );
};

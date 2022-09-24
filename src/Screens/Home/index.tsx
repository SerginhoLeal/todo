import React from 'react';
import * as Native from 'react-native';
import * as Styles from './styles';

import { Card } from '../../Components/Card';
import Header from '../../Components/Header';

export default function Home(){
  return (
    <Styles.Container>
      <Header />
      <Card />

    </Styles.Container>
  );
};

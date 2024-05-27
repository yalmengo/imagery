import React from 'react';
import { ScrollView, Text } from 'react-native';
import useHomeScreenController from '../../screen-controllers/useHomeScreenController';
import styles from './styles';

const HomeScreen = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <Text>Welcome!</Text>
  </ScrollView>
);

export default HomeScreen;

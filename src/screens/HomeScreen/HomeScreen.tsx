import {HomeScreenView} from './HomeScreenView';
import React from 'react';
import {useNavigation} from '@react-navigation/core';

export const HomeScreen = () => {
  const navigation = useNavigation();

  const usingHermes =
    typeof HermesInternal === 'object' && HermesInternal !== null;

  const handlePress = () => navigation.navigate('Test');
  const handlePress2 = () => navigation.navigate('Test2');

  return (
    <HomeScreenView
      usingHermes={usingHermes}
      onPress1={handlePress}
      onPress2={handlePress2}
    />
  );
};

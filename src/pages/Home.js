import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../utils';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 24,
  },
});

export default Home;

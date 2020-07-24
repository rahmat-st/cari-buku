import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ILLogo} from '../assets';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('Home');
  }, 3000);

  return (
    <View style={styles.container}>
      <ILLogo width={160} height={200} />
      <Text style={styles.title}>Cari Buku</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Splash;

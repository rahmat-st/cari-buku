import React from 'react';
import {View, Text, Button} from 'react-native';

const Splash = ({navigation}) => {
  return (
    <View>
      <Text>Cari Buku</Text>
      <Button
        title="Ke halaman home"
        onPress={() => navigation.replace('Home')}
      />
    </View>
  );
};

export default Splash;

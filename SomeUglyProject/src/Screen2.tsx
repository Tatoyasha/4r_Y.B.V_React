

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Screen2 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/htoto.jpg')}
        resizeMode="cover"
        style={styles.image}
      />
      <Text style={styles.text}>Яковлєв Богдан Вікторович</Text>
      <Text style={styles.text}>Студент 4к спеціальності 125 кібербезпека</Text>
      <Text style={styles.text}>Гр: БІ-201</Text>
    </View>
  );
};

// Define the styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
});

export default Screen2;

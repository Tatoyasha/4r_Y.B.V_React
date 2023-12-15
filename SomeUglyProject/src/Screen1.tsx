

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Кафедра «Програмного забезпечення та автоматизованих систем»</Text>
      <Image
        source={require('./assets/cafedra.png')}
        resizeMode="cover"
        style={styles.image}
      />
      <Text style={styles.text}>Кафедра «Програмного забезпечення автоматизованих систем» створена у 1998 році в результаті реорганізації кафедри «Обчислювальної техніки» та організації факультету ФІТІС, якому вона належить. Кафедра є випусковою зі спеціальності 121– «Інженерія програмногозабезпечення».</Text>
    </View>
  );
};

// Define the styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
});

export default Screen1;

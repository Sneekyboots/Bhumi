// screens/Community.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Community() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Community Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0ffe0',
  },
  text: {
    fontSize: 24,
    color: 'green',
  },
});

import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const HorizontalButtonsGroup = () => {
  const buttons = ['Top', 'Poplular', 'Trending', 'Editor Choice'];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollView}
    >
      {buttons.map((button, index) => (
        <TouchableOpacity key={index} style={styles.button}>
          <Text style={styles.buttonText}>{button}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row',
    marginTop:40,
    paddingHorizontal: 10,
  },
  button: {

   fontWeight:'bold',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 26,
  },
});

export default HorizontalButtonsGroup;

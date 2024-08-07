// BlogCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const BlogCard = ({ image, title, description }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { image, title, description })}>
    <View style={styles.card} >
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}></Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 250,
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 350,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
    paddingVertical: 10,
  // Semi-transparent background
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
     // Adjust the opacity as needed
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 }, // Adjust the shadow offset as needed
    textShadowRadius: 4, 
  },
  description: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 5,
  },
});

export default BlogCard;

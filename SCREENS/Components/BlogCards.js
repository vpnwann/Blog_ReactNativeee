import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window'); // Get screen width

const BlogCard = ({ image, title, description }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate('Details', { image, title, description })} // Pass data
    >
      <View style={styles.content}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 5, // Add shadow on Android
    shadowColor: '#000', // Add shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: width - 20, // Full width of the screen minus margins
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 100, // Adjust width as needed
    height: 100, // Adjust height as needed
    borderRadius: 10,
    resizeMode: 'cover',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
     // Adjust the opacity as needed
   
    textShadowOffset: { width: 2, height: 2 }, // Adjust the shadow offset as needed
    textShadowRadius: 4,
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});

export default BlogCard;

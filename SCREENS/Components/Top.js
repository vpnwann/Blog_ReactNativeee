import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


const TopNavBar = () => {
  return (
    <View style={styles.container}>
     
      <Text style={styles.title}>NamitSingh</Text>
      <TouchableOpacity style={styles.searchButton}>
      <Image
        source={{ uri: 'https://via.placeholder.com/50' }} // Replace with your image URL
        style={styles.profileImage}
      />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'right',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff', // Background color of the navbar
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    marginLeft:250,
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchButton: {
    padding: 5,
  },
});

export default TopNavBar;

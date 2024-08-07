import React from 'react';
import { View, Text, ImageBackground, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const DetailsScreen = ({ route }) => {
  const { image, title, description } = route.params;
  const navigation = useNavigation(); 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Image Background with Overlay */}
      <ImageBackground
        source={{ uri: image }}
        style={styles.imageBackground}
      >
        <View style={styles.overlay} />

        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: 'https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-04-128.png' }} // Replace with your image URL or local asset
            style={{ width: 24, height: 24 }} // Adjust size to match your design
          />
        </TouchableOpacity>

        {/* Bookmark Icon */}
        <TouchableOpacity style={styles.bookmarkIcon}>
          <Image
            source={{ uri: 'https://cdn3.iconfinder.com/data/icons/feather-5/24/bookmark-128.png' }} // Replace with your image URL or local asset
            style={{ width: 24, height: 24 }} // Adjust size to match your design
          />
        </TouchableOpacity>

        {/* Title and Author Info */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.authorInfo}>
            <Text style={styles.author}>Christina</Text>
            <Icon name="circle" type="font-awesome" size={5} color="#fff" style={styles.dotIcon} />
            <Text style={styles.readTime}>10 min</Text>
          </View>
        </View>
      </ImageBackground>

      {/* Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.description}>{description}</Text>
        {/* Like Button */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
  },
  imageBackground: {
    width: '100%',
    height: 500,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)', // Adjust the transparency as needed
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 8,
    borderRadius: 50,
  },
  bookmarkIcon: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 8,
    borderRadius: 50,
  },
  titleContainer: {
    position: 'absolute',
    bottom: 90,
    left: 20,
    right: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  author: {
    color: '#fff',
    marginRight: 5,
  },
  dotIcon: {
    marginHorizontal: 4,
  },
  readTime: {
    color: '#fff',
    marginLeft: 20,
  },
  contentContainer: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: 'white',
    padding: 16,
    paddingTop: 40, // Ensure the content starts below the image
  },
  description: {
    fontSize: 36,
    color: '#333',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 30,
    marginTop: 10,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  likeCount: {
    fontSize: 16,
    marginLeft: 5,
    color: '#ff0000',
  },
});

export default DetailsScreen;

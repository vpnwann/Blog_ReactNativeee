import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
  View
} from 'react-native';
import TopNavBar from './Components/Top';
import BlogCard from './Components/BlogCard';
import HorizontalButtonsGroup from './Components/HorizontalButton';
import { useState, useEffect } from 'react';

import BlogList from './Components/BlogCards';
import BlogCards from './Components/BlogCards';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
const App = () => {
  const navigation = useNavigation();
 

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us', // Change to the country of your choice
            apiKey: 'bbe6a82d29044df88e0eea03e1d7976b', // Replace with your News API key
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchArticles();
  }, []);

  const data = [
    {
      id: '1',
      image: 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/at%2Fhouse%20tours%2F2024%2Fjune%2Fclaire-c%2Fbefore-after%2Fclaire-c-kitchen-before_1',
      title: 'A “Clinical” White Kitchen Gets the Most Striking Teal Makeover (for Only $700!)',
      description: 'This is a short description of Blog Post 1.',
    },
    {
      id: '2',
      image: 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_487/stock%2Fshutterstock_2388440117',
      title: 'These Adorable $10 Costco Halloween Finds Are Flying Off Shelves (You’ll Want Both!)',
      description: 'The good news is that these pillows are absolutely adorable. The bad news is that because they’re so cute, they’ve already sold out on Costco.com. So if you’re ready to roll the dice and see what your store has in stock, you can call your local warehouse, press 1, and ask where to find the items (listed as item 1824687) in your area to see what’s available. Given that it’s only August and these pillows are already so popular, hopefully Costco will restock for online and in-store shoppers ASAP.',
    },
    {
      id: '3',
      image: 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_548/stock%2Fshutterstock_1369852889',
      title: 'We Gave a Designer $50 to Spend at IKEA — Here’s What They Bought',
      description: 'This is a short description of Blog Post 3.',
    },
    // Add more blog posts here
  ];
  const data1 = [
    {
      id: '1',
      image: 'https://images.hindustantimes.com/img/2024/08/07/550x309/bangldesh_1722994564868_1722994582398.jfif',
      title: 'Bangladesh crisis: 24 burnt alive as mob sets hotel on fire; Hindu homes, temples',
      description: 'Muhammad Yunus, a Nobel Peace Prize laureate and an economist, has been chosen to lead the interim government in Bangladesh on Tuesday night, a day after Prime Minister Sheikh Hasina resigned and fled the country following a violent crackdown on a student-led uprising.',
    },
    {
      id: '2',
      image: 'https://images.hindustantimes.com/img/2024/08/06/257x145/Paris-Olympics-Field-Hockey-26_1722970922981_1722971121418.jpg',
      title: 'Paris Olympics 2024, Day 11: Catch all the action from the Summer Games through these images',
      description: 'The good news is that these pillows are absolutely adorable. The bad news is that because they’re so cute, they’ve already sold out on Costco.com. So if you’re ready to roll the dice and see what your store has in stock, you can call your local warehouse, press 1, and ask where to find the items (listed as item 1824687) in your area to see what’s available. Given that it’s only August and these pillows are already so popular, hopefully Costco will restock for online and in-store shoppers ASAP.',
    },
    {
      id: '3',
      image: 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_548/stock%2Fshutterstock_1369852889',
      title: 'We Gave a Designer $50 to Spend at IKEA — Here’s What They Bought',
      description: 'This is a short description of Blog Post 3.',
    },
    // Add more blog posts here
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
     <TopNavBar/>
     <Text style={{ fontSize: 30, marginLeft: 30, marginTop: 40, fontWeight: 'bold', color: 'black' }}>
  Your Daily
</Text>
<Text style={{ fontSize: 30, marginLeft: 30, fontWeight: 'bold', color: 'black' }}>
  Recommendation
</Text>

     <View style={styles.containers}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <BlogCard
          
            image={item.image}
            title={item.title}
            description={item.description}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.slider}
      />
    </View>
    <HorizontalButtonsGroup />
    <View>
        {data1.map((blog, index, data) => (
          <BlogCards
          
            key={index}
            image={blog.image}
            title={blog.title}
            description={blog.description}
           
          />
        ))}
      </View>



      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
  scrollView: {

  },
  text: {
    fontSize: 42,
  },
  containers: {
    marginTop:40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  slider: {
    paddingLeft: 15,
  },
  
});

export default App;
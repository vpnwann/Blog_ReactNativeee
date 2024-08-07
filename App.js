import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HOME from './SCREENS/HOME';
import DetailsScreen from './SCREENS/Components/DetailedScreen';
import { TransitionPresets } from '@react-navigation/stack';
import Settings from './SCREENS/Settings';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HOME} options={{ headerShown: false }} />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{ 
            headerShown: false, 
            ...TransitionPresets.SlideFromRightIOS 
          }} 
        />
       
        {/* Add other stack screens here if you have more */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

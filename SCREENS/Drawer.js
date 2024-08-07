import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Feed from './Feed';
import HOME from './HOME';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      
      <Drawer.Screen name="Settings" component={HOME} />
    </Drawer.Navigator>
  );
}

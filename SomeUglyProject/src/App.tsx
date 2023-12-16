// ./src/app.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, View } from 'react-native';

import Screen1 from './Screen1';
import Screen2 from './Screen2';
import NewsScreen from './NewsScreen'; // Додано NewsScreen

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabBarIcon = (source: any) => (
  <View>
    <Image source={source} style={{ width: 24, height: 24 }} />
  </View>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="AboutUs"
          component={Screen1}
          options={{
            tabBarLabel: 'AboutUs',
            tabBarIcon: () => TabBarIcon(require('./assets/about_us.png')),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Screen2}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: () => TabBarIcon(require('./assets/profile.png')),
          }}
        />
        <Tab.Screen
          name="Latest News"
          component={NewsScreen}
          options={{
            tabBarLabel: 'News',
            // Додайте іконку за необхідності
            tabBarIcon: () => TabBarIcon(require('./assets/news.png')),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

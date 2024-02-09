import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TaskList from 'src/screens/TaskList';
import AddTask from 'src/screens/AddTask';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Tab" component={TabBar} />
  </Stack.Navigator>
);

const TabBar = () => (
  <Tab.Navigator>
    <Tab.Screen name="AddTask" component={AddTask} />
    <Tab.Screen name="TaskList" component={TaskList} />
  </Tab.Navigator>
);

export { TabBar, AppStack };

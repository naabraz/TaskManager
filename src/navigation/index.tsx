import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faList, faAdd } from '@fortawesome/free-solid-svg-icons';

import TaskList from 'src/screens/TaskList';
import AddTask from 'src/screens/AddTask';

import { linking } from './linking';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AddTaskIcon = (focused: boolean) => (
  <FontAwesomeIcon icon={faAdd} color={focused ? 'red' : 'black'} />
);
const TaskListIcon = (focused: boolean) => (
  <FontAwesomeIcon icon={faList} color={focused ? 'red' : 'black'} />
);

const TabBar = () => (
  <Tab.Navigator
    screenOptions={() => ({
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}>
    <Tab.Screen
      name="AddTask"
      component={AddTask}
      options={{
        title: 'Add Task',
        tabBarLabel: 'Add Task',
        tabBarIcon: ({ focused }) => AddTaskIcon(focused),
      }}
    />
    <Tab.Screen
      name="TaskList"
      component={TaskList}
      options={{
        title: 'Task List',
        tabBarLabel: 'Task List',
        tabBarIcon: ({ focused }) => TaskListIcon(focused),
      }}
    />
  </Tab.Navigator>
);

const AppStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Tab" component={TabBar} />
  </Stack.Navigator>
);

export { AppStack, linking };

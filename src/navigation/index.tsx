import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TaskList from 'src/screens/TaskList';
import AddTask from 'src/screens/AddTask';

import { linking } from './linking';

const Stack = createNativeStackNavigator();

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="TaskList"
      component={TaskList}
      options={{
        title: 'Tasks List',
      }}
    />
    <Stack.Screen
      name="AddTask"
      component={AddTask}
      options={{
        title: 'Add Task',
      }}
    />
  </Stack.Navigator>
);

export { AppStack, linking };

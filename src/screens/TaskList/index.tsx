import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { useTaskStore } from '../../hooks/useStore';

const TaskList = () => {
  const tasks = useTaskStore(state => state.tasks);

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {tasks.map((task, index) => (
        <View key={index}>
          <Text>{task.name}</Text>
          <Text>{task.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default TaskList;

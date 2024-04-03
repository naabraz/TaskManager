import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { useTaskStore } from '../../hooks/useStore';

const TaskList = () => {
  const tasks = useTaskStore(state => state.tasks);

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        {tasks.map((task, index) => (
          <Text key={index}>{task.name}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default TaskList;

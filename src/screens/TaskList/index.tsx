import React from 'react';

import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import {
  TasksList,
  TaskContainer,
  TaskName,
  TaskDescription,
  EmptyText,
  AddTaskButton,
} from './styles';
import { useTaskStore } from '../../hooks/useStore';

const TaskList = () => {
  const tasks = useTaskStore(state => state.tasks);
  const emptyTasksMessage = "Woo hoo! You don't have any tasks!";
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const addTask = () => {
    navigation.navigate('AddTask');
  };

  return (
    <TasksList contentInsetAdjustmentBehavior="automatic">
      {!tasks.length && (
        <TaskContainer>
          <EmptyText>{emptyTasksMessage}</EmptyText>
        </TaskContainer>
      )}

      {tasks.map((task, index) => (
        <TaskContainer key={index}>
          <TaskName>{task.name}</TaskName>
          <TaskDescription>{task.description}</TaskDescription>
        </TaskContainer>
      ))}

      <AddTaskButton onPress={addTask}>
        <FontAwesomeIcon icon={faAdd} color="white" />
      </AddTaskButton>
    </TasksList>
  );
};

export default TaskList;

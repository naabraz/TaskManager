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
  RemoveTaskButton,
  RemoveTaskButtonTitle,
} from './styles';
import { useTaskStore } from '../../hooks/useStore';

const TaskList = () => {
  const tasks = useTaskStore(state => state.tasks);
  const removeTask = useTaskStore(state => state.removeTask);
  const changeStatus = useTaskStore(state => state.changeStatus);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const emptyTasksMessage = "Woo hoo! You don't have any tasks!";

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

      {tasks.map(task => (
        <TaskContainer key={task.id} $completed={task.completed}>
          <TaskName>{task.name}</TaskName>
          <TaskDescription>{task.description}</TaskDescription>
          <TaskDescription>
            {`Completed: ${String(task.completed)}`}
          </TaskDescription>

          <RemoveTaskButton onPress={() => changeStatus(task.id)}>
            <RemoveTaskButtonTitle>Complete</RemoveTaskButtonTitle>
          </RemoveTaskButton>

          <RemoveTaskButton onPress={() => removeTask(task.id)}>
            <RemoveTaskButtonTitle>Remover</RemoveTaskButtonTitle>
          </RemoveTaskButton>
        </TaskContainer>
      ))}

      <AddTaskButton onPress={addTask}>
        <FontAwesomeIcon icon={faAdd} color="white" />
      </AddTaskButton>
    </TasksList>
  );
};

export default TaskList;

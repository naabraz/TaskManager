import React, { Fragment } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Card, Text, IconButton, FAB } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { useTaskStore } from 'src/hooks/useStore';

const IconNotCompleted = () => (
  <MaterialIcons name="radio-button-unchecked" size={24} />
);

const IconCompleted = () => (
  <MaterialIcons name="radio-button-checked" size={24} />
);

const IconDelete = () => <MaterialIcons name="delete" size={24} />;

const CardButtonLeft = (id: string, completed: boolean) => {
  const changeStatus = useTaskStore(state => state.changeStatus);
  const Icon = completed ? IconCompleted : IconNotCompleted;

  return <IconButton icon={Icon} onPress={() => changeStatus(id)} />;
};

const CardButtonRight = (id: string) => {
  const removeTask = useTaskStore(state => state.removeTask);

  return <IconButton icon={IconDelete} onPress={() => removeTask(id)} />;
};

const TaskList = () => {
  const tasks = useTaskStore(state => state.tasks);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const emptyTasksMessage = "Woo hoo! You don't have any tasks!";

  const addTask = () => {
    navigation.navigate('AddTask');
  };

  const styles = StyleSheet.create({
    fab: {
      marginTop: 20,
    },
    card: {
      marginBottom: 20,
    },
    scrollView: {
      padding: 24,
      backgroundColor: 'white',
    },
  });

  return (
    <ScrollView
      style={styles.scrollView}
      contentInsetAdjustmentBehavior="automatic">
      {!tasks.length && (
        <>
          <Card style={styles.card}>
            <Card.Content>
              <Text variant="bodyMedium">{emptyTasksMessage}</Text>
            </Card.Content>
          </Card>
        </>
      )}

      {tasks.map(task => (
        <Fragment key={task.id}>
          <Card style={styles.card}>
            <Card.Title
              title={task.name}
              subtitle={task.description}
              left={() => CardButtonLeft(task.id, task.completed)}
              right={() => CardButtonRight(task.id)}
            />
          </Card>
        </Fragment>
      ))}

      <FAB icon="plus" onPress={addTask} label="Add Task" style={styles.fab} />
    </ScrollView>
  );
};

export default TaskList;

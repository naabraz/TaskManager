import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FAB, TextInput } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import uuid from 'react-native-uuid';

import { useTaskStore } from 'src/hooks/useStore';

const IconAddTask = () => <MaterialIcons name="add" size={24} />;

const AddTask = () => {
  const [name, onChangeName] = useState('');
  const [description, onChangeDescription] = useState('');

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const addTodo = useTaskStore(state => state.addTask);

  const addTask = () => {
    const id = uuid.v4() as string;

    addTodo({ name, description, id, completed: false });

    navigation.navigate('TaskList');
  };

  const styles = StyleSheet.create({
    fab: {
      marginTop: 20,
      marginHorizontal: 20,
    },
    input: {
      marginBottom: 20,
      marginHorizontal: 20,
    },
    container: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        label="Task name"
        placeholder="Task name"
        value={name}
        onChangeText={onChangeName}
        style={styles.input}
      />

      <TextInput
        label="Task description"
        placeholder="Task description"
        value={description}
        onChangeText={onChangeDescription}
        style={styles.input}
      />

      <FAB
        icon={IconAddTask}
        onPress={addTask}
        label="Create Task"
        style={styles.fab}
      />
    </View>
  );
};

export default AddTask;

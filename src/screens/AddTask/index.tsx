import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import * as Styled from './styles';
import { useTaskStore } from '../../hooks/useStore';

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

  return (
    <Styled.View>
      <Styled.Input
        onChangeText={onChangeName}
        value={name}
        placeholder="Task name"
      />

      <Styled.Input
        onChangeText={onChangeDescription}
        value={description}
        placeholder="Task description"
      />

      <Styled.ButtonView>
        <Styled.Button
          onPress={() => addTask()}
          title="Add Task"
          color="black"
          accessibilityLabel="Add new task"
        />
      </Styled.ButtonView>
    </Styled.View>
  );
};

export default AddTask;

import React, { useState } from 'react';

import * as Styled from './styles';

const AddTask = () => {
  const [name, onChangeName] = useState('');
  const [description, onChangeDescription] = useState('');

  const onPressSend = () => {
    console.log('onPressSend');
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
          onPress={onPressSend}
          title="Add Task"
          color="black"
          accessibilityLabel="Add new task"
        />
      </Styled.ButtonView>
    </Styled.View>
  );
};

export default AddTask;

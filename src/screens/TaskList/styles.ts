import styled from 'styled-components/native';

export const TasksList = styled.ScrollView`
  background-color: gray;
`;

export const TaskContainer = styled.View`
  background-color: cyan;
  margin-vertical: 14px;
  margin-horizontal: 24px;
  padding: 24px;
  border-radius: 8px;
`;

export const TaskName = styled.Text`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: bold;
`;

export const TaskDescription = styled.Text`
  font-size: 16px;
`;

export const EmptyText = styled.Text``;

export const AddTaskButton = styled.Pressable`
  background-color: tomato;
  padding: 8px;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const AddTaskButtonTitle = styled.Text`
  color: white;
  font-size: 24px;
`;

import { create } from 'zustand';

export interface State {
  tasks: { name: string; description: string }[];
  addTask: (task: { name: string; description: string }) => void;
}

export const useTaskStore = create<State>(set => ({
  tasks: [],
  addTask: task => set(state => ({ tasks: [...state.tasks, task] })),
}));

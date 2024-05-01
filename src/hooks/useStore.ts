import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { zustandStorage } from 'src/storage/zustandMMKV';

export interface Task {
  id: string;
  name: string;
  description: string;
  completed: boolean;
}

export interface State {
  tasks: Task[];
  addTask: (task: Task) => void;
  changeStatus: (id: string) => void;
  removeTask: (id: string) => void;
}

export const useTaskStore = create<State>()(
  persist(
    set => ({
      tasks: [],
      addTask: task =>
        set(state => ({
          tasks: [...state.tasks, { ...task }],
        })),
      changeStatus: (id: string) =>
        set(state => ({
          tasks: state.tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task,
          ),
        })),
      removeTask: (id: string) =>
        set(state => ({
          tasks: state.tasks.filter(task => task.id !== id),
        })),
    }),
    {
      name: 'task-manager-storage',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);

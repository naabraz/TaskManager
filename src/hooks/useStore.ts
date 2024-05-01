import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { zustandStorage } from 'src/storage/zustandMMKV';

export interface State {
  tasks: { name: string; description: string }[];
  addTask: (task: { name: string; description: string }) => void;
}

export const useTaskStore = create<State>()(
  persist(
    set => ({
      tasks: [],
      addTask: task => set(state => ({ tasks: [...state.tasks, task] })),
    }),
    {
      name: 'task-manager-storage',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);

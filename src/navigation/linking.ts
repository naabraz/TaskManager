const linking = {
  prefixes: ['taskmanager://'],
  config: {
    screens: {
      Tab: {
        path: 'task',
        screens: {
          AddTask: 'add',
          TaskList: 'list',
        },
      },
    },
  },
};

export { linking };

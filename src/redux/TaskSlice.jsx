import { createSlice } from '@reduxjs/toolkit';

const TaskSlice = createSlice({
  name: 'task',
  initialState: {
    task: 'Redux State Management:',
    category: 'React Internship',
    description: [
      'Develop a React app with Redux for state management.',
      'Implement actions, reducers, and a central store for managing application data.',
      'Connect components to Redux to access and update data.',
    ],
  },
  reducers: {
    updateTask: (state, action) => {
      state.task = action.payload;
    },
  },
});

export const { updateTask } = TaskSlice.actions;
export default TaskSlice.reducer;

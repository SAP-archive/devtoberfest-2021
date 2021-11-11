import { configureStore } from '@reduxjs/toolkit';
import ProfileReducer from './features/profile/ProfileSlice';

export default configureStore({
  reducer: {
    profile: ProfileReducer,
  },
});

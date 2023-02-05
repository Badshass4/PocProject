import { configureStore } from '@reduxjs/toolkit';
import { CounterReducer, counterReducer } from './slices/counter.slice';

export type RootState = {
  counter: CounterReducer;
};
const RootReducer = {
  counter: counterReducer,
};
export const store = configureStore({
  reducer: RootReducer,
  devTools: true,
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

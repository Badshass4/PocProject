import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { matchesApi } from './api/api';
import { CounterReducer, counterReducer } from './slices/counter.slice';

export type RootState = {
  counter: CounterReducer;
  matchesApi: ReturnType<typeof matchesApi.reducer>;
};
const RootReducer = {
  counter: counterReducer,
  matchesApi: matchesApi.reducer,
};
export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
    }).concat(matchesApi.middleware),
  devTools: true,
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

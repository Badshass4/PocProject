import { createApi } from '@reduxjs/toolkit/query/react';
import customBaseQueryFn from './base-query';

export const matchesApi = createApi({
  reducerPath: 'matchesApi',
  baseQuery: customBaseQueryFn('https://cricbuzz-cricket.p.rapidapi.com'),
  endpoints: () => ({}),
});

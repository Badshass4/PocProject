import { Matches } from '../../types/matches';
import { matchesApi } from './api';

const apiWithFetchMatches = matchesApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    getMatches: build.query<Matches, string>({
      query: (type) => ({
        url: `/matches/v1/${type}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetMatchesQuery } = apiWithFetchMatches;

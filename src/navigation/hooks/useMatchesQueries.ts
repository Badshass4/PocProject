import { useCallback } from 'react';
import { RootState } from '../../redux/store';
import { useAppSelector } from '../../redux/hook';
import { MATCH_TYPE } from '../../utils/constant';

export default function useMatchesQueries(
  data: any,
  matchType: keyof typeof MATCH_TYPE
): {
  isError: boolean;
  isFetching: boolean;
  isSuccess: boolean;
  getMatchListByMatchType: () => any;
  refetch: () => void;
} {
  const isError = false;
  const isFetching = false;
  const isSuccess = true;

  const getMatchListByMatchType = useCallback(() => {
    if (!data) {
      return [];
    }
    const matchListByType = data?.typeMatches?.filter((type: any) => type.matchType === matchType);
    return matchListByType?.[0].seriesMatches;
  }, [matchType]);

  const refetch = () => {
    console.log('refetch');
  };
  return {
    isError,
    isFetching,
    isSuccess,
    getMatchListByMatchType,
    refetch,
  };
}

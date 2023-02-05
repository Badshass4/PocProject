import { MATCH_TYPE } from '../utils/constant';

export interface TypeMatches {
  matchType: typeof MATCH_TYPE;
  seriesMatches: any;
}
export const matchType = typeof MATCH_TYPE;

export interface Matches {
  typeMatches: TypeMatches[];
  filters: matchType;
}

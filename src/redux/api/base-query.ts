import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError, retry } from '@reduxjs/toolkit/dist/query';
import { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers';
import Config from 'react-native-config';

const { X_RAPIDAPI_KEY, X_RAPIDAPI_HOST } = Config;
export default function customBaseQueryFn(
  urlTemplate: 'https://cricbuzz-cricket.p.rapidapi.com'
): BaseQueryFn<any, unknown, unknown, {}, {}> {
  return (args, api, extraOptions) => {
    const baseUrl = urlTemplate;
    const prepareHeaders = (headers: Headers): MaybePromise<Headers> => {
      const headersClone = new Headers(headers);
      headersClone.set('X-RapidAPI-Key', X_RAPIDAPI_KEY ?? '');
      headersClone.set('X-RapidAPI-Host', X_RAPIDAPI_HOST ?? '');

      return headersClone;
    };
    return retry(fetchBaseQuery({ baseUrl, prepareHeaders }), { maxRetries: 0 })(args, api, extraOptions);
  };
}

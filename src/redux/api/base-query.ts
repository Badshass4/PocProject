import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError, retry } from '@reduxjs/toolkit/dist/query';
import { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers';

export default function customBaseQueryFn(
  urlTemplate: 'https://cricbuzz-cricket.p.rapidapi.com'
): BaseQueryFn<any, unknown, unknown, {}, {}> {
  return (args, api, extraOptions) => {
    const baseUrl = urlTemplate;
    const prepareHeaders = (headers: Headers): MaybePromise<Headers> => {
      const headersClone = new Headers(headers);
      headersClone.set('X-RapidAPI-Key', '365d957ac4msh4ef01af745407f1p1e8924jsn657b5d5c071a');
      headersClone.set('X-RapidAPI-Host', 'cricbuzz-cricket.p.rapidapi.com');

      return headersClone;
    };
    return retry(fetchBaseQuery({ baseUrl, prepareHeaders }), { maxRetries: 0 })(args, api, extraOptions);
  };
}

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '7bed659c00msh43a443c538d73f0p1d7345jsn230e38afb912'
  }

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/';

const createRequest = (url) => ({
    url, headers: cryptoNewsHeaders
  })

const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory.join(' ')}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
      })
    })
  });

  export const { useGetCryptoNewsQuery } = cryptoNewsApi

